import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {ROOM,OBSTACLES,SEED,safePath,mapPoint} from './scene-geometry.mjs';

(() => {
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const root=$('#idea-panel'); if(!root)return;
  const info={
    action:{title:'Choose a Point. See the Robot Move.',description:'Click an open patch of floor in the camera view. The selected pixel becomes a destination; the robot moves only if the straight path is clear.',hint:'Click the floor to move · drag to look around',button:'Move Toward the Doorway',color:'#d78734'},
    depth:{title:'Point at a Surface. Get Its Distance.',description:'Click the floor, a tabletop, or a wall to measure the distance from the camera to that exact surface. Compare up to three points without moving the robot.',hint:'Click any surface to measure · drag to look around',button:'Measure the Table',color:'#8b63c7'},
    recall:{title:'Choose a Past Point. Retrieve Its View.',description:'Select a numbered decision point on the bird’s-eye map. Recall returns the observation saved there. Your moves add new observations to the same trajectory.',hint:'Select a numbered point on the map',button:'Recall the Previous View',color:'#359574'}
  };
  let mode='action', initialized=false, scene, renderer, camera, floor, pose={...SEED[2]}, motion=null;
  let memories=[], serial=0, selectedMemory=0, queries=[], marker, resizeObserver;
  const meshes=[], queryMeshes=[];
  $('#idea-visual').innerHTML=`<div class="tool-toolbar"><span id="tool-view-label">Robot Camera</span><span class="scene-badge">Interactive Illustration</span></div>
    <div class="tool-stage" id="tool-stage"><canvas id="tool-canvas" tabindex="0" aria-label="Interactive robot camera. Drag or use arrow keys to look around. Press Enter to select the centre point."></canvas><div class="tool-pins" id="tool-pins" aria-hidden="true"></div><span class="tool-crosshair" aria-hidden="true">+</span><div class="scene-loading" id="scene-loading">Loading the room…</div></div>
    <div class="recall-workspace" id="recall-workspace" hidden><div class="bev-wrap"><svg id="tool-map" viewBox="0 0 328 376" role="group" aria-label="Bird’s-eye map of past decisions"></svg><p>Numbered dots are saved decisions.</p></div><figure class="recalled-view"><img id="recalled-image" alt=""><figcaption id="recalled-caption"></figcaption></figure></div>
    <div class="scene-controls" id="scene-controls"><button type="button" id="look-left" aria-label="Look left">↶ <span>Look left</span></button><span id="scene-position">Shared room · metres</span><button type="button" id="look-right" aria-label="Look right"><span>Look right</span> ↷</button></div>
    <div class="memory-decisions" id="memory-decisions" aria-label="Saved observations" hidden></div><p class="tool-hint" id="tool-hint"></p>`;
  const canvas=$('#tool-canvas'), stage=$('#tool-stage');
  $('#idea-action').insertAdjacentHTML('afterend','<button type="button" class="scene-reset" id="scene-reset">Reset Room ↺</button><p class="scene-note">A shared, simplified 3D environment. Distances are computed in metres; this illustration does not run the navigation model.</p>');
  function say(text){$('#idea-result').textContent=text;}
  function syncCamera(){camera.position.set(pose.x,1.25,pose.z);camera.rotation.order='YXZ';camera.rotation.set(pose.pitch,pose.yaw,0);camera.updateMatrixWorld();}
  function draw(){if(!initialized)return;syncCamera();renderer.render(scene,camera);updatePins();}
  function surface(geometry,color,x,y,z,name,rotation=0){
    const material=new THREE.MeshStandardMaterial({color,roughness:.84});
    const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.rotation.y=rotation;mesh.receiveShadow=true;mesh.castShadow=true;mesh.userData.name=name;scene.add(mesh);meshes.push(mesh);return mesh;
  }
  function box(x,y,z,w,h,d,color,name){return surface(new THREE.BoxGeometry(w,h,d),color,x,y,z,name);}
  function detail(geometry,material,x,y,z,name){
    const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.receiveShadow=true;mesh.castShadow=true;scene.add(mesh);
    if(name){mesh.userData.name=name;meshes.push(mesh);}return mesh;
  }
  function detailBox(x,y,z,w,h,d,color,metalness=0,name){
    return detail(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color,roughness:metalness ? .42 : .82,metalness}),x,y,z,name);
  }
  function rounded(x,y,z,w,h,d,r,color,name){
    return detail(new RoundedBoxGeometry(w,h,d,3,r),new THREE.MeshStandardMaterial({color,roughness:.96}),x,y,z,name);
  }
  function patternedSurface(kind){
    const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
    const context=canvas.getContext('2d');let seed=kind==='floor'?71:119;
    const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    if(kind==='floor'){
      context.fillStyle='#a8a49b';context.fillRect(0,0,512,512);
      const shades=['#d7d3ca','#dcd8d0','#d2cec5','#e0dbd1'];
      for(let row=0;row<4;row++)for(let col=0;col<4;col++){
        const x=col*128,y=row*128;
        context.fillStyle=shades[Math.floor(random()*shades.length)];context.fillRect(x+2,y+2,124,124);
        context.strokeStyle='rgba(255,255,255,.4)';context.strokeRect(x+4,y+4,120,120);
      }
      for(let i=0;i<5800;i++){
        context.fillStyle=random()>.5?'rgba(90,83,72,.09)':'rgba(255,255,255,.16)';
        context.fillRect(random()*512,random()*512,1+random()*2,1+random()*2);
      }
    }else{
      context.fillStyle='#eeeae2';context.fillRect(0,0,512,512);
      for(let i=0;i<3700;i++){
        context.fillStyle=random()>.5?'rgba(125,118,107,.045)':'rgba(255,255,255,.15)';
        context.fillRect(random()*512,random()*512,1+random()*3,1+random()*3);
      }
    }
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
    texture.repeat.set(kind==='floor'?5:4,kind==='floor'?6:5);
    texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
    return texture;
  }
  function buildRoom(){
    scene=new THREE.Scene();scene.background=new THREE.Color('#e8e6df');scene.fog=new THREE.Fog('#e8e6df',18,36);
    scene.add(new THREE.HemisphereLight(0xf5f7f5,0x887f70,1.75));
    const sun=new THREE.DirectionalLight(0xfff0d9,2.05);sun.position.set(-3,7,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-9;sun.shadow.normalBias=.035;scene.add(sun);
    floor=box(0,-.09,0,12,.18,14,0xffffff,'Floor');floor.userData.floor=true;
    floor.material.map=patternedSurface('floor');floor.material.roughness=.94;floor.material.needsUpdate=true;
    const wallTexture=patternedSurface('wall');
    for(const [x,z,w,d,color,name] of [[0,-7.08,12,.16,0xe7e4dc,'Back wall'],[-6.08,0,.16,14,0xeeeae2,'Left wall'],[6.08,0,.16,14,0xe9e5dd,'Right wall'],[0,7.08,12,.16,0xece8df,'Entrance wall']]){
      const wall=box(x,1.65,z,w,3.3,d,color,name);
      wall.material.map=wallTexture;wall.material.needsUpdate=true;
    }
    // A closed ceiling is visible in the robot camera and can be queried by the Depth tool.
    const ceiling=box(0,3.4,0,12,.18,14,0xffffff,'Ceiling');
    ceiling.material.map=patternedSurface('ceiling');ceiling.material.roughness=.9;ceiling.material.needsUpdate=true;
    ceiling.castShadow=false;
    for(const x of [-4,-2,0,2,4])detailBox(x,3.297,0,.018,.018,14,0xc7c6bf,.25);
    for(const z of [-5,-3,-1,1,3,5])detailBox(0,3.297,z,12,.018,.018,0xc7c6bf,.25);
    for(const [x,z] of [[-2.3,-3],[2.3,-3],[-2.3,3],[2.3,3]]){
      detailBox(x,3.272,z,1.25,.035,1.8,0x9b9f9d,.45);
      const panel=detailBox(x,3.247,z,1.12,.014,1.67,0xfff7e9,0,'Ceiling light');
      panel.material.emissive.setHex(0xffedca);panel.material.emissiveIntensity=.8;
      const lamp=new THREE.PointLight(0xfff0d8,4,8,2);lamp.position.set(x,3.04,z);scene.add(lamp);
    }
    detailBox(4.45,3.271,-5.02,1.28,.03,.78,0x8e9b9d,.7);
    for(let i=0;i<8;i++)detailBox(3.96+i*.14,3.245,-5.02,.045,.012,.65,0x465e65,.7);
    for(const z of [-6.96,6.96]){
      detailBox(0,.14,z,12,.27,.045,0xb7b0a2);
      detailBox(0,3.17,z,12,.11,.065,0xf4f1e8);
    }
    for(const x of [-5.96,5.96]){
      detailBox(x,.14,0,.045,.27,14,0xb7b0a2);
      detailBox(x,3.17,0,.065,.11,14,0xf4f1e8);
    }
    // Keep the existing door and window positions; add construction details around them.
    box(.4,1.2,-6.96,1.9,2.4,.10,0x315e69,'Door');
    detailBox(.4,.23,-6.89,1.82,.28,.025,0x738b8c,.55);
    detailBox(.4,1.78,-6.886,1.46,.65,.028,0x567f87,.2);
    detailBox(.4,1.78,-6.858,1.29,.48,.018,0xa4c0c2,.08);
    detailBox(.4,1.2,-6.865,1.55,.018,.03,0x9db1aa,.4);
    detailBox(.4,2.48,-6.89,2.12,.12,.13,0xf6f0e6);
    detailBox(-.62,1.24,-6.89,.12,2.6,.13,0xf6f0e6);
    detailBox(1.42,1.24,-6.89,.12,2.6,.13,0xf6f0e6);
    detailBox(1.12,1.12,-6.8,.025,.16,.11,0xd3c6a8,.75);
    detailBox(1.01,1.08,-6.72,.21,.035,.04,0xd3c6a8,.75);
    for(const z of [-3,1]){
      box(-5.96,2.05,z,.05,1.55,2.4,0x9ebcc5,'Window');
      for(const side of [-1,1])detailBox(-5.88,2.05,z+side*1.18,.1,1.67,.07,0xe7e8e3,.3);
      detailBox(-5.88,2.05,z,.12,1.67,.05,0xe7e8e3,.3);
      detailBox(-5.88,2.05,z,.1,.065,2.4,0xe7e8e3,.3);
      for(const y of [1.25,2.84])detailBox(-5.88,y,z,.1,.07,2.55,0xe7e8e3,.3);
      detailBox(-5.77,1.13,z,.3,.075,2.65,0xd9d5c9);
    }
    box(5.96,1.9,2,.05,1.3,1.9,0x315f70,'Artwork');
    detailBox(5.91,1.9,2,.08,.72,1.25,0xd6b47d);
    for(const [y,z,width] of [[2.08,1.85,.46],[1.88,2.17,.68],[1.67,1.73,.35]])detailBox(5.86,y,z,.015,.045,width,0xf4e9d7);
    detailBox(5.9,1.9,2,.12,1.36,.035,0x333f44,.65);
    OBSTACLES.forEach(o=>{
      if(o.name==='Table'){
        const top=box(o.x,o.h-.08,o.z,o.w,.16,o.d,o.color,'Table');top.material.roughness=.62;
        detailBox(o.x,.65,o.z,o.w-.18,.05,o.d-.16,0x3c4141,.7);
        for(const dx of [-1,1])for(const dz of [-.5,.5]){
          detailBox(o.x+dx,.37,o.z+dz,.085,.72,.085,0x485052,.8);
          detailBox(o.x+dx,.045,o.z+dz,.12,.035,.12,0x252c2e,.55);
        }
        rounded(o.x+.38,.84,o.z-.24,.64,.045,.43,.025,0xe9e5d9,'Laptop');
        detailBox(o.x+.38,1.075,o.z-.47,.65,.42,.035,0x3a4b50,.55,'Laptop');
        const screen=detailBox(o.x+.38,1.075,o.z-.445,.56,.33,.012,0x66888f,0,'Laptop screen');
        screen.material.emissive.setHex(0x173e48);screen.material.emissiveIntensity=.22;
        for(let i=0;i<4;i++)detailBox(o.x+.15+i*.14,.91,o.z-.11,.11,.008,.19,0x5f6768,.5);
        rounded(o.x-.52,.85,o.z+.24,.48,.04,.31,.014,0xf3efe5,'Notebook');
        detailBox(o.x-.52,.878,o.z+.24,.3,.004,.016,0xa8b8b5);
        surface(new THREE.CylinderGeometry(.105,.075,.25,16),0xe8e4d8,o.x-.72,.91,o.z-.35,'Cup');
        detailBox(o.x-.72,1.052,o.z-.35,.12,.008,.12,0xd4c9b6);
      }else if(o.name==='Sofa'){
        box(o.x,.36,o.z,o.w,.65,o.d,o.color,'Sofa');
        rounded(o.x-.86,.76,o.z,.34,.92,o.d-.06,.12,0x66838b,'Sofa');
        for(const z of [-1.3,1.3])rounded(o.x,.64,o.z+z,o.w,.41,.25,.11,0x6d8c94,'Sofa');
        for(const z of [-.65,.65]){
          rounded(o.x+.12,.72,o.z+z,1.43,.14,1.12,.06,0x9eb4b3,'Sofa');
          rounded(o.x-.63,.79,o.z+z,.17,.53,1.02,.06,0x89a6a7,'Sofa');
          detailBox(o.x+.89,.34,o.z+z,.035,.53,.012,0x59747a);
        }
        for(const z of [-1.34,1.34])for(const x of [-.75,.75])detailBox(o.x+x,.07,o.z+z,.08,.13,.08,0x39484a,.7);
      }else if(o.name==='Planter'){
        surface(new THREE.CylinderGeometry(.43,.32,.6,24),o.color,o.x,.3,o.z,'Planter');
        detail(new THREE.CylinderGeometry(.435,.435,.055,24),new THREE.MeshStandardMaterial({color:0xb68e71,roughness:.8}),o.x,.59,o.z);
        for(let i=0;i<12;i++){
          const angle=i*2.4,leaf=surface(new THREE.SphereGeometry(1,10,8),[0x527a5a,0x6b8b60,0x789b6e][i%3],o.x+Math.sin(angle)*(.14+i%3*.075),.81+i%4*.16,o.z+Math.cos(angle)*(.12+i%2*.08),'Plant');
          leaf.scale.set(.13,.3+(i%3)*.035,.075);leaf.rotation.z=Math.sin(angle)*.5;leaf.rotation.x=Math.cos(angle)*.45;
        }
      }else{
        box(o.x,o.h/2,o.z,o.w,o.h,o.d,o.color,o.name);
        for(const z of [-4.82,-4.02,-3.22,-2.45]){
          detailBox(o.x-.565,.95,z,.035,1.75,.014,0x8e7157,.2);
          detailBox(o.x-.59,.91,z+.27,.025,.105,.14,0xbab4a4,.8);
          detailBox(o.x-.59,.91,z-.27,.025,.105,.14,0xbab4a4,.8);
        }
        detailBox(o.x,1.89,o.z,1.12,.035,3.12,0x9a795d);
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
    $('#idea-kicker').textContent=key==='recall'?'Recall Tool':`${key[0].toUpperCase()+key.slice(1)} Tool`;
    $('#idea-title').textContent=info[key].title;$('#idea-description').textContent=info[key].description;$('#idea-action').textContent=info[key].button+' →';$('#tool-hint').textContent=info[key].hint;
    stage.hidden=key==='recall';$('#recall-workspace').hidden=key!=='recall';$('#scene-controls').hidden=key==='recall';$('#memory-decisions').hidden=key!=='recall';$('#tool-view-label').textContent=key==='recall'?'Trajectory → Saved Observation':'Robot Camera';
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
