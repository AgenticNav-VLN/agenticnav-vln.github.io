import * as THREE from 'three';
import {ROOM,OBSTACLES,SEED,safePath,mapPoint} from './scene-geometry.mjs';

(() => {
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const root=$('#idea-panel'); if(!root)return;
  const info={
    action:{title:'Choose a point. See the robot move.',description:'Click an open patch of floor in the camera view. The selected pixel becomes a destination; the robot moves only if the straight path is clear.',hint:'Click the floor to move · drag to look around',button:'Move toward the doorway',color:'#d78734'},
    depth:{title:'Point at a surface. Get its distance.',description:'Click the floor, a tabletop, or a wall to measure the distance from the camera to that exact surface. Compare up to three points without moving the robot.',hint:'Click any surface to measure · drag to look around',button:'Measure the table',color:'#8b63c7'},
    recall:{title:'Choose a past point. Retrieve its view.',description:'Select a numbered decision point on the bird’s-eye map. Recall returns the observation saved there. Your moves add new observations to the same trajectory.',hint:'Select a numbered point on the map',button:'Recall the previous view',color:'#359574'}
  };
  let mode='action', initialized=false, scene, renderer, camera, floor, pose={...SEED[2]}, motion=null;
  let memories=[], serial=0, selectedMemory=0, queries=[], marker, resizeObserver;
  const meshes=[], queryMeshes=[];
  $('#idea-visual').innerHTML=`<div class="tool-toolbar"><span id="tool-view-label">Robot camera</span><span class="scene-badge">Interactive illustration</span></div>
    <div class="tool-stage" id="tool-stage"><canvas id="tool-canvas" tabindex="0" aria-label="Interactive robot camera. Drag or use arrow keys to look around. Press Enter to select the centre point."></canvas><div class="tool-pins" id="tool-pins" aria-hidden="true"></div><span class="tool-crosshair" aria-hidden="true">+</span><div class="scene-loading" id="scene-loading">Loading the room…</div></div>
    <div class="recall-workspace" id="recall-workspace" hidden><div class="bev-wrap"><svg id="tool-map" viewBox="0 0 328 376" role="group" aria-label="Bird’s-eye map of past decisions"></svg><p>Numbered dots are saved decisions.</p></div><figure class="recalled-view"><img id="recalled-image" alt=""><figcaption id="recalled-caption"></figcaption></figure></div>
    <div class="scene-controls" id="scene-controls"><button type="button" id="look-left" aria-label="Look left">↶ <span>Look left</span></button><span id="scene-position">Shared room · metres</span><button type="button" id="look-right" aria-label="Look right"><span>Look right</span> ↷</button></div>
    <div class="memory-decisions" id="memory-decisions" aria-label="Saved observations" hidden></div><p class="tool-hint" id="tool-hint"></p>`;
  const canvas=$('#tool-canvas'), stage=$('#tool-stage');
  $('#idea-action').insertAdjacentHTML('afterend','<button type="button" class="scene-reset" id="scene-reset">Reset room ↺</button><p class="scene-note">A shared, simplified 3D environment. Distances are computed in metres; this illustration does not run the navigation model.</p>');
  function say(text){$('#idea-result').textContent=text;}
  function syncCamera(){camera.position.set(pose.x,1.25,pose.z);camera.rotation.order='YXZ';camera.rotation.set(pose.pitch,pose.yaw,0);camera.updateMatrixWorld();}
  function draw(){if(!initialized)return;syncCamera();renderer.render(scene,camera);updatePins();}
  function surface(geometry,color,x,y,z,name,rotation=0){
    const material=new THREE.MeshStandardMaterial({color,roughness:.84});
    const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.rotation.y=rotation;mesh.receiveShadow=true;mesh.castShadow=true;mesh.userData.name=name;scene.add(mesh);meshes.push(mesh);return mesh;
  }
  function box(x,y,z,w,h,d,color,name){return surface(new THREE.BoxGeometry(w,h,d),color,x,y,z,name);}
  function buildRoom(){
    scene=new THREE.Scene();scene.background=new THREE.Color('#e7edf1');scene.fog=new THREE.Fog('#e7edf1',16,30);
    scene.add(new THREE.HemisphereLight(0xf7fbff,0x8b795e,2.2));
    const sun=new THREE.DirectionalLight(0xfff4dc,2.8);sun.position.set(-3,7,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.normalBias=.035;scene.add(sun);
    floor=box(0,-.09,0,12,.18,14,0xddd7c9,'Floor');floor.userData.floor=true;
    const grid=new THREE.GridHelper(14,28,0xc5bbaa,0xd0c8bb);grid.position.y=.005;grid.scale.x=12/14;scene.add(grid);
    box(0,1.65,-7.08,12,3.3,.16,0xd6e2e9,'Back wall');
    box(-6.08,1.65,0,.16,3.3,14,0xeee9df,'Left wall');box(6.08,1.65,0,.16,3.3,14,0xe9e5db,'Right wall');box(0,1.65,7.08,12,3.3,.16,0xece7dc,'Entrance wall');
    box(.4,1.2,-6.96,1.9,2.4,.10,0x315e69,'Door');box(1.12,1.1,-6.88,.08,.08,.14,0xc8b07a,'Door handle');
    box(.4,2.48,-6.89,2.12,.12,.13,0xf6f0e6,'Door frame');box(-.62,1.24,-6.89,.12,2.6,.13,0xf6f0e6,'Door frame');box(1.42,1.24,-6.89,.12,2.6,.13,0xf6f0e6,'Door frame');
    // Windows, artwork, and furniture make distinct observations from each pose.
    for(const z of [-3,1]) {box(-5.96,2.05,z,.05,1.55,2.4,0xaac5d3,'Window');box(-5.9,2.05,z,.08,1.64,.06,0xf5f1e9,'Window frame');box(-5.9,2.05,z,.08,.06,2.5,0xf5f1e9,'Window frame');}
    box(5.96,1.9,2,.05,1.3,1.9,0x2d657c,'Artwork');box(5.92,1.9,2,.07,.65,1.1,0xe1b66d,'Artwork');
    OBSTACLES.forEach(o=>{
      if(o.name==='Table'){
        box(o.x,o.h-.08,o.z,o.w,.16,o.d,o.color,'Table');
        for(const dx of [-1,1])for(const dz of [-.5,.5])box(o.x+dx,.33,o.z+dz,.1,.66,.1,0x665c52,'Table leg');
        box(o.x+.3,.88,o.z,.55,.05,.4,0x6e8e91,'Book');box(o.x-.4,.98,o.z,.24,.28,.24,0xf1efe8,'Vase');
      }else if(o.name==='Sofa'){
        box(o.x,.36,o.z,o.w,.65,o.d,o.color,'Sofa');box(o.x-.86,.75,o.z,.35,.9,o.d,0x617d88,'Sofa back');
        for(const z of [-1.3,1.3])box(o.x,.64,o.z+z,o.w,.42,.25,0x6b8791,'Sofa arm');
        for(const z of [-.65,.65])box(o.x+.1,.72,o.z+z,1.45,.12,1.12,0x91aaac,'Sofa cushion');
      }else if(o.name==='Planter'){
        surface(new THREE.CylinderGeometry(.43,.32,.6,18),o.color,o.x,.3,o.z,'Planter');
        for(let i=0;i<5;i++)surface(new THREE.SphereGeometry(.39,12,8),[0x527a5a,0x74946a][i%2],o.x+Math.sin(i*2)*.2,.8+i*.16,o.z+Math.cos(i*2)*.2,'Plant');
      }else{
        box(o.x,o.h/2,o.z,o.w,o.h,o.d,o.color,o.name);
        for(const z of [-4.8,-3.8,-2.8])box(o.x-.57,.96,z,.04,1.55,.035,0x846b51,'Cabinet detail');
      }
    });
    marker=new THREE.Mesh(new THREE.RingGeometry(.16,.24,36),new THREE.MeshBasicMaterial({color:0xd78734,side:THREE.DoubleSide}));marker.rotation.x=-Math.PI/2;marker.visible=false;scene.add(marker);
  }
  function snapshot(savedPose){
    const previous=pose;pose=savedPose;syncCamera();const wasVisible=marker.visible;marker.visible=false;queryMeshes.forEach(m=>m.visible=false);
    renderer.render(scene,camera);const image=canvas.toDataURL('image/jpeg',.8);
    marker.visible=wasVisible;queryMeshes.forEach(m=>m.visible=true);pose=previous;syncCamera();return image;
  }
  function saveObservation(){
    memories.push({id:++serial,pose:{...pose},image:snapshot(pose)});
    if(memories.length>24)memories.shift();selectedMemory=memories[memories.length-1].id;renderMap();
  }
  function reset(){
    if(!initialized)return;motion=null;queries=[];clearQueryMeshes();marker.visible=false;memories=[];serial=0;
    for(const p of SEED){pose={...p};saveObservation();}pose={...SEED[2]};renderMap();showMemory(memories[0].id,false);draw();updatePosition();
    say('Room reset. Three sample decisions are ready; your moves will add more.');
  }
  function init(){
    if(initialized)return;
    try{
      renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
      renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
      camera=new THREE.PerspectiveCamera(65,1,.06,40);buildRoom();initialized=true;resize();reset();$('#scene-loading').hidden=true;
      resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);setMode(mode);say('Try the tool yourself. The three tabs share this room and its history.');
    }catch(error){$('#scene-loading').textContent='The 3D room needs WebGL. Try a browser with hardware acceleration enabled.';$('#idea-action').disabled=true;$('#scene-reset').disabled=true;}
  }
  function resize(){if(!initialized||stage.hidden)return;const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();draw();}
  function updatePosition(){root.dataset.position=`${pose.x.toFixed(3)},${pose.z.toFixed(3)}`;$('#scene-position').textContent=`${memories.length} saved observations`;}
  function clearQueryMeshes(){queryMeshes.splice(0).forEach(m=>{scene.remove(m);m.geometry.dispose();m.material.dispose();});$('#tool-pins').replaceChildren();}
  function updatePins(){
    $('#tool-pins').replaceChildren();if(mode!=='depth')return;
    queries.forEach(q=>{const p=q.point.clone().project(camera);if(p.z>1||p.z< -1||Math.abs(p.x)>1||Math.abs(p.y)>1)return;
      const pin=document.createElement('span');pin.className='depth-pin';pin.style.left=`${(p.x+1)*50}%`;pin.style.top=`${(1-p.y)*50}%`;pin.textContent=`${q.distance.toFixed(2)} m`;$('#tool-pins').append(pin);
    });
  }
  function pick(u,v){const ray=new THREE.Raycaster();syncCamera();ray.setFromCamera(new THREE.Vector2(u*2-1,1-v*2),camera);return ray.intersectObjects(meshes,false)[0];}
  function choose(u,v){
    init();if(!initialized||motion||mode==='recall')return;const hit=pick(u,v);
    if(!hit){say('No surface at this point. Choose a visible floor, wall, or object.');return;}
    if(mode==='depth'){
      if(queries.length===3){queries.shift();const old=queryMeshes.shift();scene.remove(old);old.geometry.dispose();old.material.dispose();}
      queries.push({point:hit.point.clone(),distance:hit.distance});
      const dot=new THREE.Mesh(new THREE.SphereGeometry(.055,12,8),new THREE.MeshBasicMaterial({color:0x8b63c7,depthTest:false}));dot.position.copy(hit.point);dot.renderOrder=2;scene.add(dot);queryMeshes.push(dot);
      root.dataset.distance=hit.distance.toFixed(4);root.dataset.surface=hit.object.userData.name;
      say(`${hit.object.userData.name} · ${hit.distance.toFixed(2)} m from the camera along the selected viewing ray. The robot has not moved.`);draw();return;
    }
    if(!hit.object.userData.floor){say(`${hit.object.userData.name} is not an open floor target. Choose a point on the floor.`);return;}
    move({x:hit.point.x,z:hit.point.z});
  }
  function move(target){
    const length=Math.hypot(target.x-pose.x,target.z-pose.z);
    if(length<.15){say('This point is already within reach. Choose a point farther away.');return;}
    if(!safePath(pose,target)){say('Path blocked by furniture or the room boundary. Choose another point with a clear approach.');root.dataset.lastMove='blocked';return;}
    queries=[];clearQueryMeshes();marker.position.set(target.x,.025,target.z);marker.visible=true;
    const latest=memories[memories.length-1];if(Math.abs(latest.pose.yaw-pose.yaw)>.08||Math.abs(latest.pose.pitch-pose.pitch)>.08)saveObservation();
    motion={from:{...pose},to:target,start:performance.now(),duration:Math.min(3600,Math.max(950,length*500))};root.dataset.lastMove='moving';
    say(`Clear path · moving ${length.toFixed(2)} m to your selected floor point.`);
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){pose={...pose,...target};finishMove();}else requestAnimationFrame(animate);
  }
  function animate(now){
    if(!motion)return;const t=Math.min(1,(now-motion.start)/motion.duration),e=t*t*(3-2*t);pose.x=motion.from.x+(motion.to.x-motion.from.x)*e;pose.z=motion.from.z+(motion.to.z-motion.from.z)*e;
    draw();updatePosition();if(t<1)requestAnimationFrame(animate);else finishMove();
  }
  function finishMove(){motion=null;marker.visible=false;saveObservation();draw();updatePosition();root.dataset.lastMove='arrived';say(`Arrived. Observation ${serial} is now available on the Memory map.`);}
  function look(delta){init();if(!initialized||motion||mode==='recall')return;pose.yaw+=delta;draw();}
  function showMemory(id,announce=true){
    const memory=memories.find(m=>m.id===id);if(!memory)return;selectedMemory=id;
    $('#recalled-image').src=memory.image;$('#recalled-image').alt=`Saved camera observation at decision ${id}`;
    $('#recalled-caption').textContent=`Observation ${id} · saved at this decision point`;
    root.dataset.recalled=String(id);renderMap();if(announce)say(`Recalled observation ${id} from memory. The robot stays at its current position.`);
  }
  function renderMap(){
    if(!initialized)return;
    const obstacles=OBSTACLES.map(o=>{const p=mapPoint({x:o.x-o.w/2,z:o.z-o.d/2});return `<rect x="${p.x}" y="${p.y}" width="${o.w*24}" height="${o.d*24}" rx="3" class="map-furniture"/><text x="${p.x+o.w*12}" y="${p.y+o.d*12+3}" class="map-label">${o.name}</text>`;}).join('');
    const points=memories.map(m=>{const p=mapPoint(m.pose);return `${p.x},${p.y}`;}).join(' ');
    const current=mapPoint(pose);
    $('#tool-map').innerHTML=`<rect x="20" y="20" width="288" height="336" rx="4" class="map-room"/><path d="M152 20h46" class="map-door"/><text x="175" y="13" class="map-label">Door</text>${obstacles}<polyline points="${points}" class="map-trail"/>`+
      memories.map(m=>{const p=mapPoint(m.pose);return `<g role="button" tabindex="0" aria-label="Recall observation ${m.id}" aria-pressed="${m.id===selectedMemory}" data-memory="${m.id}" class="map-decision"><circle cx="${p.x}" cy="${p.y}" r="12"/><text x="${p.x}" y="${p.y+4}">${m.id}</text></g>`;}).join('')+
      `<path d="M0 -18L7 -6L0 -9L-7 -6Z" transform="translate(${current.x} ${current.y}) rotate(${-pose.yaw*180/Math.PI})" class="map-current"/><text x="24" y="371" class="map-legend">▲ Current robot · dots return saved views</text>`;
    $('#memory-decisions').innerHTML=memories.map(m=>`<button type="button" data-memory="${m.id}" aria-pressed="${m.id===selectedMemory}">View ${m.id}</button>`).join('');
    $$('[data-memory]').forEach(b=>{b.addEventListener('click',()=>showMemory(Number(b.dataset.memory)));if(b.tagName.toLowerCase()==='g')b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showMemory(Number(b.dataset.memory));}});});
  }
  function setMode(key){
    mode=key;root.dataset.tool=mode;root.style.setProperty('--tool-color',info[key].color);
    $('#idea-kicker').textContent=key==='recall'?'Recall tool':`${key[0].toUpperCase()+key.slice(1)} tool`;
    $('#idea-title').textContent=info[key].title;$('#idea-description').textContent=info[key].description;$('#idea-action').textContent=info[key].button+' →';$('#tool-hint').textContent=info[key].hint;
    stage.hidden=key==='recall';$('#recall-workspace').hidden=key!=='recall';$('#scene-controls').hidden=key==='recall';$('#memory-decisions').hidden=key!=='recall';$('#tool-view-label').textContent=key==='recall'?'Trajectory → saved observation':'Robot camera';
    root.setAttribute('aria-labelledby',`tab-${key}`);$$('[data-idea]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.idea===key));b.tabIndex=b.dataset.idea===key?0:-1;});
    if(initialized){queryMeshes.forEach(m=>m.visible=key==='depth');if(key==='recall'){renderMap();showMemory(selectedMemory||memories[0].id,false);}else resize();}
    say(key==='recall'?'Choose a decision on the map. Three example observations are included; your moves add more.':info[key].hint+'.');
  }
  $$('[data-idea]').forEach((b,i)=>{
    b.addEventListener('click',()=>{init();setMode(b.dataset.idea);});
    b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%3;if(e.key==='ArrowLeft')next=(i+2)%3;if(e.key==='Home')next=0;if(e.key==='End')next=2;if(next!==undefined){e.preventDefault();const tab=$$('[data-idea]')[next];init();setMode(tab.dataset.idea);tab.focus();}});
  });
  $('#look-left').addEventListener('click',()=>look(.22));$('#look-right').addEventListener('click',()=>look(-.22));$('#scene-reset').addEventListener('click',()=>{init();reset();});
  $('#idea-action').addEventListener('click',()=>{
    init();if(!initialized||motion)return;
    if(mode==='action')move({x:-1.8,z:-4.7});
    else if(mode==='recall'){const index=memories.findIndex(m=>m.id===selectedMemory);showMemory(memories[(index-1+memories.length)%memories.length].id);}
    else {const target=new THREE.Vector3(2.8,.79,-1.4);const delta=target.clone().sub(camera.position);pose.yaw=Math.atan2(-delta.x,-delta.z);pose.pitch=Math.atan2(delta.y,Math.hypot(delta.x,delta.z));draw();choose(.5,.5);}
  });
  let pointer=null;
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);pointer={x:e.clientX,y:e.clientY,yaw:pose.yaw,pitch:pose.pitch,drag:false};});
  canvas.addEventListener('pointermove',e=>{if(!pointer||motion)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(Math.hypot(dx,dy)>6)pointer.drag=true;if(pointer.drag){pose.yaw=pointer.yaw-dx*.005;pose.pitch=THREE.MathUtils.clamp(pointer.pitch-dy*.004,-.85,.45);draw();}});
  canvas.addEventListener('pointerup',e=>{if(!pointer)return;const click=!pointer.drag;pointer=null;if(click){const rect=canvas.getBoundingClientRect();choose((e.clientX-rect.left)/rect.width,(e.clientY-rect.top)/rect.height);}});
  canvas.addEventListener('pointercancel',()=>pointer=null);
  canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter',' '].includes(e.key))return;e.preventDefault();if(motion)return;if(e.key==='ArrowLeft')look(.12);else if(e.key==='ArrowRight')look(-.12);else if(e.key==='ArrowUp'||e.key==='ArrowDown'){pose.pitch=THREE.MathUtils.clamp(pose.pitch+(e.key==='ArrowUp'?.08:-.08),-.85,.45);draw();}else choose(.5,.5);});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();motion=null;$('#scene-loading').hidden=false;$('#scene-loading').textContent='The graphics context was interrupted. Reload the page to reopen the room.';});
  setMode('action');new IntersectionObserver((entries,observer)=>{if(entries.some(e=>e.isIntersecting)){init();observer.disconnect();}},{rootMargin:'250px'}).observe(root);
})();
