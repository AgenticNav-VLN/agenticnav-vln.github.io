import * as THREE from 'three';
import {buildOffice} from './office-room.js';
import {OBSTACLES,SEED,planPath,mapPoint,layoutStepMarkers} from './scene-geometry.mjs';

(() => {
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const root=$('#idea-panel'); if(!root)return;
  const info={
    action:{title:'Choose a Point. See the Robot Move.',description:'Click an open patch of floor in the camera view. The selected pixel becomes a destination. The robot plans a safe route around furniture.',hint:'Click the floor to move · drag to look around',button:'Move Toward the Doorway',color:'#d78734'},
    depth:{title:'Point at a Surface. Get Its Distance.',description:'Click the floor, a tabletop, or a wall to measure the distance from the camera to that exact surface. Compare up to three points without moving the robot.',hint:'Click any surface to measure · drag to look around',button:'Measure the Table',color:'#8b63c7'},
    recall:{title:'Choose a Past Point. Retrieve Its View.',description:"Select a numbered step on the Bird's Eye View (BEV) map. Recall returns the observation saved there. Your moves add new observations to the same trajectory.",hint:'Select a numbered step on the map',button:'Recall the Previous View',color:'#359574'}
  };
  let mode='action', initialized=false, scene, renderer, camera, floor, pose={...SEED[2]}, motion=null;
  let memories=[], serial=0, selectedMemory=0, queries=[], marker, resizeObserver;
  let selectedTarget=null, animationFrame=0, ready=false, pendingRoute=[], contextLost=false;
  const meshes=[], queryMeshes=[];
  $('#idea-visual').innerHTML=`<div class="tool-toolbar"><span id="tool-view-label">Robot Camera</span><span class="scene-badge">Interactive Illustration</span></div>
    <div class="tool-stage" id="tool-stage"><canvas id="tool-canvas" tabindex="0" aria-label="Interactive robot camera. Drag or use arrow keys to look around. Press Enter to select the centre point."></canvas><div class="tool-pins" id="tool-pins" aria-hidden="true"></div><span class="tool-crosshair" aria-hidden="true"></span><div class="scene-feedback" id="scene-feedback" role="status" hidden></div><div class="scene-loading" id="scene-loading">Loading the room…</div></div>
    <div class="recall-workspace" id="recall-workspace" hidden><div class="bev-wrap"><h4 class="recall-panel-title">Bird's Eye View (BEV) Map</h4><svg id="tool-map" viewBox="0 0 328 376" role="group" aria-label="Bird's Eye View (BEV) map of saved steps"></svg></div><figure class="recalled-view"><h4 class="recall-panel-title">Recalled Observation</h4><div class="recalled-image-frame"><img id="recalled-image" alt=""><span class="recalled-step-badge" id="recalled-step-badge">Step 1</span></div></figure></div>
    <div class="scene-controls" id="scene-controls"><button type="button" id="look-left" aria-label="Look left">↶ <span>Look left</span></button><span id="scene-position">Shared room · metres</span><button type="button" id="look-right" aria-label="Look right"><span>Look right</span> ↷</button></div>
    <div class="memory-decisions" id="memory-decisions" aria-label="Saved observations" hidden></div><p class="tool-hint" id="tool-hint"></p>`;
  const canvas=$('#tool-canvas'), stage=$('#tool-stage');
  $('#idea-action').insertAdjacentHTML('afterend','<button type="button" class="scene-reset" id="scene-reset">Reset Room ↺</button><p class="scene-note">A shared 3D office with collision-aware navigation. Distances are computed in metres; this illustration does not run the navigation model.</p>');
  function say(text,state=''){
    $('#idea-result').textContent=text;root.dataset.feedback=state;
    const feedback=$('#scene-feedback');feedback.hidden=state!=='failed';feedback.textContent=state==='failed'?text:'';
  }
  function safetyFailure(reason){root.dataset.lastMove='blocked';root.dataset.safety='failed';say(`Safety Check Failed!\nReason: ${reason}\nPlease Reselect.`,'failed');}
  function available(){return initialized&&ready&&!contextLost;}
  function updateControls(){$('#idea-action').disabled=!available();$('#scene-reset').disabled=!available();$('#look-left').disabled=!available();$('#look-right').disabled=!available();}
  function syncCamera(){camera.position.set(pose.x,1.25,pose.z);camera.rotation.order='YXZ';camera.rotation.set(pose.pitch,pose.yaw,0);camera.updateMatrixWorld();}
  function draw(){if(!initialized||contextLost)return;syncCamera();renderer.render(scene,camera);updatePins();}
  function snapshot(savedPose){
    const previous=pose;pose=savedPose;syncCamera();const wasVisible=marker.visible,queryVisibility=queryMeshes.map(m=>m.visible);marker.visible=false;queryMeshes.forEach(m=>m.visible=false);
    renderer.render(scene,camera);const image=canvas.toDataURL('image/jpeg',.8);
    marker.visible=wasVisible;queryMeshes.forEach((m,i)=>m.visible=queryVisibility[i]);pose=previous;syncCamera();return image;
  }
  function saveObservation(){
    memories.push({id:++serial,pose:{...pose},route:pendingRoute.map(p=>({...p})),image:snapshot(pose)});pendingRoute=[{x:pose.x,z:pose.z}];
    if(memories.length>24)memories.shift();selectedMemory=memories[memories.length-1].id;renderMap();
  }
  function reset(){
    if(!available())return;stopMove();selectedTarget=null;pendingRoute=[];root.dataset.lastMove='idle';root.dataset.safety='';delete root.dataset.selectedPoint;delete root.dataset.route;delete root.dataset.routeLength;delete root.dataset.distance;delete root.dataset.surface;
    motion=null;queries=[];clearQueryMeshes();marker.visible=false;memories=[];serial=0;
    for(const p of SEED){pose={...p};pendingRoute.push({x:p.x,z:p.z});saveObservation();}pose={...SEED[2]};renderMap();showMemory(memories[0].id,false);draw();updatePosition();
    say('Room reset. Three sample decisions are ready; your moves will add more.');
  }
  function init(){
    if(initialized)return;
    try{
      renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
      renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
      camera=new THREE.PerspectiveCamera(65,1,.06,40);const office=buildOffice(renderer);scene=office.scene;floor=office.floor;marker=office.marker;meshes.push(...office.meshes);initialized=true;resize();updateControls();
      resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
      office.ready.then(()=>{ready=true;renderer.shadowMap.needsUpdate=true;reset();$('#scene-loading').hidden=true;updateControls();setMode(mode);say('Try the tool yourself. The three tabs share this office and its history.');});
    }catch(error){$('#scene-loading').textContent='The 3D room needs WebGL. Try a browser with hardware acceleration enabled.';$('#idea-action').disabled=true;$('#scene-reset').disabled=true;}
  }
  function resize(){if(!initialized||stage.hidden)return;const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();draw();}
  function updatePosition(){root.dataset.position=`${pose.x.toFixed(3)},${pose.z.toFixed(3)}`;$('#scene-position').textContent=`${memories.length} saved observations`;}
  function clearQueryMeshes(){queryMeshes.splice(0).forEach(m=>{scene.remove(m);m.geometry.dispose();m.material.dispose();});$('#tool-pins').replaceChildren();}
  function updatePins(){
    $('#tool-pins').replaceChildren();
    if(mode==='action'&&selectedTarget){
      const p=new THREE.Vector3(selectedTarget.x,.035,selectedTarget.z).project(camera);
      if(p.z>=-1&&p.z<=1&&Math.abs(p.x)<=1&&Math.abs(p.y)<=1){
        const pin=document.createElement('span');pin.className='action-pin';
        pin.style.left=`${(p.x+1)*50}%`;pin.style.top=`${(1-p.y)*50}%`;$('#tool-pins').append(pin);
      }
    }
    if(mode!=='depth')return;
    queries.forEach(q=>{const p=q.point.clone().project(camera);if(p.z>1||p.z< -1||Math.abs(p.x)>1||Math.abs(p.y)>1)return;
      const pin=document.createElement('span');pin.className='depth-pin';pin.style.left=`${(p.x+1)*50}%`;pin.style.top=`${(1-p.y)*50}%`;pin.textContent=`${q.distance.toFixed(2)} m`;$('#tool-pins').append(pin);
    });
  }
  function pick(u,v){const ray=new THREE.Raycaster();syncCamera();ray.setFromCamera(new THREE.Vector2(u*2-1,1-v*2),camera);return ray.intersectObjects(meshes,false)[0];}
  function choose(u,v){
    init();if(!available()||mode==='recall')return;const hit=pick(u,v);
    if(!hit){if(mode==='action'){stopMove(true);safetyFailure('No visible floor was selected.');draw();}else say('No surface at this point. Choose a visible floor, wall, or object.');return;}
    if(mode==='depth'){
      if(queries.length===3){queries.shift();const old=queryMeshes.shift();scene.remove(old);old.geometry.dispose();old.material.dispose();}
      queries.push({point:hit.point.clone(),distance:hit.distance});
      const dot=new THREE.Mesh(new THREE.SphereGeometry(.055,12,8),new THREE.MeshBasicMaterial({color:0x8b63c7,depthTest:false}));dot.position.copy(hit.point);dot.renderOrder=2;scene.add(dot);queryMeshes.push(dot);
      root.dataset.distance=hit.distance.toFixed(4);root.dataset.surface=hit.object.userData.name;
      say(`${hit.object.userData.name} · ${hit.distance.toFixed(2)} m from the camera along the selected viewing ray. The robot has not moved.`);draw();return;
    }
    if(!hit.object.userData.floor||hit.face.normal.y<.9){stopMove(true);safetyFailure(`${hit.object.userData.name} is not a reachable floor surface.`);draw();updatePosition();return;}
    selectActionTarget({x:hit.point.x,z:hit.point.z});
  }
  function stopMove(record=false){
    cancelAnimationFrame(animationFrame);animationFrame=0;
    if(motion){
      if(motion.travelled>.005)pendingRoute.push(...routePrefix(motion.path,motion.travelled).slice(1));motion=null;
      if(record&&pendingRoute.length>1){saveObservation();showMemory(selectedMemory,false);}
    }
    selectedTarget=null;delete root.dataset.selectedPoint;if(marker)marker.visible=false;
  }
  function routePrefix(path,travelled){
    const result=[path[0]];let remaining=travelled;
    for(let i=1;i<path.length;i++){
      const a=path[i-1],b=path[i],length=Math.hypot(b.x-a.x,b.z-a.z);
      if(remaining>=length){result.push(b);remaining-=length;}
      else{const fraction=length?remaining/length:0;result.push({x:a.x+(b.x-a.x)*fraction,z:a.z+(b.z-a.z)*fraction});break;}
    }
    return result;
  }
  function selectActionTarget(requested){
    if(!available())return;
    const result=planPath(pose,requested);
    if(!result.ok){stopMove(true);safetyFailure(result.reason);draw();return;}
    stopMove();root.dataset.safety='passed';
    if(result.length<.08){if(pendingRoute.length>1){saveObservation();showMemory(selectedMemory,false);}root.dataset.lastMove='arrived';say('Safety Check Passed. The robot is already at this floor point.');draw();updatePosition();return;}
    selectedTarget={...result.target};queries=[];clearQueryMeshes();
    marker.position.set(result.target.x,.025,result.target.z);marker.visible=true;
    root.dataset.selectedPoint=`${result.target.x.toFixed(3)},${result.target.z.toFixed(3)}`;
    root.dataset.route=JSON.stringify(result.path);root.dataset.routeLength=result.length.toFixed(3);
    motion={path:result.path,length:result.length,duration:Math.max(650,result.length*220),elapsed:0,lastFrame:performance.now(),travelled:0,adjusted:result.adjusted};
    root.dataset.lastMove='moving';
    say(`Safety Check Passed. Moving ${result.length.toFixed(2)} m${result.path.length>2?' along a route around furniture':''}.${result.adjusted?' Destination adjusted to the nearest safe floor point.':''}`);
    draw();updatePosition();const current=motion;animationFrame=requestAnimationFrame(now=>animate(now,current));
  }
  function animate(now,current){
    if(!motion||motion!==current)return;
    motion.elapsed+=Math.min(70,Math.max(0,now-motion.lastFrame));motion.lastFrame=now;
    const t=Math.min(1,motion.elapsed/motion.duration),e=t*t*(3-2*t);motion.travelled=motion.length*e;
    const travelled=routePrefix(motion.path,motion.travelled),point=travelled[travelled.length-1];pose.x=point.x;pose.z=point.z;
    const before=travelled[travelled.length-2]||point,dx=point.x-before.x,dz=point.z-before.z;
    if(Math.hypot(dx,dz)>.001){const desired=Math.atan2(-dx,-dz),delta=Math.atan2(Math.sin(desired-pose.yaw),Math.cos(desired-pose.yaw));pose.yaw+=delta*.22;}
    pose.pitch+=(-.15-pose.pitch)*.08;
    draw();updatePosition();if(t<1)animationFrame=requestAnimationFrame(time=>animate(time,current));else finishMove();
  }
  function finishMove(){
    pendingRoute.push(...motion.path.slice(1));motion=null;animationFrame=0;selectedTarget=null;marker.visible=false;
    saveObservation();showMemory(selectedMemory,false);draw();updatePosition();root.dataset.lastMove='arrived';
    say(`Arrived safely. Step ${serial} is now available on the Recall map.`);
  }
  function look(delta){init();if(!available()||motion||mode==='recall')return;pose.yaw+=delta;draw();}
  function showMemory(id,announce=true){
    const memory=memories.find(m=>m.id===id);if(!memory)return;selectedMemory=id;
    $('#recalled-image').src=memory.image;$('#recalled-image').alt=`Camera observation saved at Step ${id}`;
    $('#recalled-step-badge').textContent=`Step ${id}`;
    root.dataset.recalled=String(id);renderMap();if(announce)say(`Recalled the observation from Step ${id}. The robot stays at its current position.`);
  }
  function renderMap(){
    if(!initialized)return;
    const obstacles=OBSTACLES.map(o=>{if(o.shape==='circle'){const p=mapPoint(o);return `<circle cx="${p.x}" cy="${p.y}" r="${o.w*12}" class="map-furniture"/>`;}const p=mapPoint({x:o.x-o.w/2,z:o.z-o.d/2});return `<rect x="${p.x}" y="${p.y}" width="${o.w*24}" height="${o.d*24}" rx="3" class="map-furniture"/>`;}).join('');
    const markers=layoutStepMarkers(memories.map(m=>m.pose));
    const points=memories.flatMap(m=>m.route.length?m.route:[m.pose]).map(p=>{const mapped=mapPoint(p);return `${mapped.x},${mapped.y}`;}).join(' ');
    const current=mapPoint(pose);
    const links=markers.map(({anchor,display})=>Math.hypot(display.x-anchor.x,display.y-anchor.y)>1?
      `<line x1="${anchor.x}" y1="${anchor.y}" x2="${display.x}" y2="${display.y}" class="map-step-link"/>`:'').join('');
    const steps=memories.map((m,index)=>{const {display}=markers[index];return `<g role="button" tabindex="0" aria-label="Recall Step ${m.id}" aria-pressed="${m.id===selectedMemory}" data-memory="${m.id}" class="map-decision"><circle cx="${display.x}" cy="${display.y}" r="12"/><text x="${display.x}" y="${display.y+4}">${m.id}</text></g>`;}).join('');
    $('#tool-map').innerHTML=`<rect x="20" y="20" width="288" height="336" rx="4" class="map-room"/><path d="M152 20h46" class="map-door"/>${obstacles}<polyline points="${points}" class="map-trail"/>`+
      `<path d="M0 -18L7 -6L0 -9L-7 -6Z" transform="translate(${current.x} ${current.y}) rotate(${-pose.yaw*180/Math.PI})" class="map-current"/>`+
      links+steps+
      `<text x="24" y="371" class="map-legend">▲ Current robot · dots return saved views</text>`;
    $('#memory-decisions').innerHTML=memories.map(m=>`<button type="button" data-memory="${m.id}" aria-pressed="${m.id===selectedMemory}">Step ${m.id}</button>`).join('');
    $$('[data-memory]').forEach(b=>{b.addEventListener('click',()=>showMemory(Number(b.dataset.memory)));if(b.tagName.toLowerCase()==='g')b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showMemory(Number(b.dataset.memory));}});});
  }
  function setMode(key){
    if(key!==mode&&motion){stopMove(true);root.dataset.lastMove='paused';updatePosition();draw();}
    mode=key;root.dataset.tool=mode;root.style.setProperty('--tool-color',info[key].color);
    $('#idea-kicker').textContent=key==='recall'?'Recall Tool':`${key[0].toUpperCase()+key.slice(1)} Tool`;
    $('#idea-title').textContent=info[key].title;$('#idea-description').textContent=info[key].description;$('#idea-action').textContent=info[key].button+' →';$('#tool-hint').textContent=info[key].hint;
    stage.hidden=key==='recall';$('#recall-workspace').hidden=key!=='recall';$('#scene-controls').hidden=key==='recall';$('#memory-decisions').hidden=key!=='recall';$('#tool-view-label').textContent=key==='recall'?'Recall Tool':'Robot Camera';
    root.setAttribute('aria-labelledby',`tab-${key}`);$$('[data-idea]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.idea===key));b.tabIndex=b.dataset.idea===key?0:-1;});
    if(available()){queryMeshes.forEach(m=>m.visible=key==='depth');if(key==='recall'){renderMap();showMemory(selectedMemory||memories[0].id,false);}else resize();}
    say(key==='recall'?'Choose a decision on the map. Three example observations are included; your moves add more.':info[key].hint+'.');
  }
  $$('[data-idea]').forEach((b,i)=>{
    b.addEventListener('click',()=>{init();setMode(b.dataset.idea);});
    b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%3;if(e.key==='ArrowLeft')next=(i+2)%3;if(e.key==='Home')next=0;if(e.key==='End')next=2;if(next!==undefined){e.preventDefault();const tab=$$('[data-idea]')[next];init();setMode(tab.dataset.idea);tab.focus();}});
  });
  $('#look-left').addEventListener('click',()=>look(.22));$('#look-right').addEventListener('click',()=>look(-.22));$('#scene-reset').addEventListener('click',()=>{init();reset();});
  $('#idea-action').addEventListener('click',()=>{
    init();if(!available())return;
    if(mode==='action')selectActionTarget({x:.9,z:-5.5});
    else if(mode==='recall'){const index=memories.findIndex(m=>m.id===selectedMemory);showMemory(memories[(index-1+memories.length)%memories.length].id);}
    else {const target=new THREE.Vector3(2.35,.779,-1.2);const delta=target.clone().sub(camera.position);pose.yaw=Math.atan2(-delta.x,-delta.z);pose.pitch=Math.atan2(delta.y,Math.hypot(delta.x,delta.z));draw();choose(.5,.5);}
  });
  let pointer=null;
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0||pointer||!available())return;canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);pointer={id:e.pointerId,x:e.clientX,y:e.clientY,yaw:pose.yaw,pitch:pose.pitch,drag:false};});
  canvas.addEventListener('pointermove',e=>{if(!pointer||e.pointerId!==pointer.id)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(Math.hypot(dx,dy)>6)pointer.drag=true;if(pointer.drag&&!motion){pose.yaw=pointer.yaw-dx*.005;pose.pitch=THREE.MathUtils.clamp(pointer.pitch-dy*.004,-.95,.95);draw();}});
  canvas.addEventListener('pointerup',e=>{if(!pointer||e.pointerId!==pointer.id)return;const click=!pointer.drag;pointer=null;canvas.releasePointerCapture(e.pointerId);if(click){const rect=canvas.getBoundingClientRect();choose((e.clientX-rect.left)/rect.width,(e.clientY-rect.top)/rect.height);}});
  canvas.addEventListener('pointercancel',()=>pointer=null);
  canvas.addEventListener('lostpointercapture',()=>pointer=null);
  canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter',' '].includes(e.key))return;e.preventDefault();if(!available()||motion)return;if(e.key==='ArrowLeft')look(.12);else if(e.key==='ArrowRight')look(-.12);else if(e.key==='ArrowUp'||e.key==='ArrowDown'){pose.pitch=THREE.MathUtils.clamp(pose.pitch+(e.key==='ArrowUp'?.08:-.08),-.95,.95);draw();}else choose(.5,.5);});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stopMove();contextLost=true;updateControls();$('#scene-loading').hidden=false;$('#scene-loading').textContent='The graphics context was interrupted. Waiting for recovery…';});
  canvas.addEventListener('webglcontextrestored',()=>{contextLost=false;renderer.shadowMap.needsUpdate=true;updateControls();$('#scene-loading').hidden=true;draw();say('The office view has recovered. Select a floor point to continue.');});
  setMode('action');new IntersectionObserver((entries,observer)=>{if(entries.some(e=>e.isIntersecting)){init();observer.disconnect();}},{rootMargin:'250px'}).observe(root);
})();
