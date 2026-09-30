import test from 'node:test';
import assert from 'node:assert/strict';
import {isFree,safePath,planPath,pathLength,mapPoint,layoutStepMarkers,SEED,OBSTACLES,ROBOT_RADIUS} from '../src/scene-geometry.mjs';
function checkRoute(result,obstacles=OBSTACLES){
  assert.equal(result.ok,true,result.reason);
  assert.ok(isFree(result.target.x,result.target.z,ROBOT_RADIUS,obstacles));
  result.path.forEach((p,i)=>{
    assert.ok(isFree(p.x,p.z,ROBOT_RADIUS,obstacles));
    if(i){const a=result.path[i-1];assert.ok(safePath(a,p,ROBOT_RADIUS,obstacles));
      for(let t=0;t<=1;t+=.025)assert.ok(isFree(a.x+(p.x-a.x)*t,a.z+(p.z-a.z)*t,ROBOT_RADIUS,obstacles));}
  });
  assert.ok(Math.abs(result.length-pathLength(result.path))<1e-8);
}
test('Clear aisle stays direct; a destination behind the table plans around it',()=>{
  assert.equal(safePath({x:-1.8,z:3},{x:-1.8,z:-5}),true);
  const start={x:1.3,z:3},target={x:1.3,z:-5};
  assert.equal(safePath(start,target),false);
  const result=planPath(start,target);checkRoute(result);
  assert.ok(result.path.length>2);assert.deepEqual(result.target,target);assert.equal(result.adjusted,false);
});
test('Robot clearance excludes furniture edges and room boundaries',()=>{
  assert.equal(isFree(2.8,-1.5),false);
  assert.equal(isFree(3.0,-1.5),true);
  assert.equal(isFree(5.9,4),false);
});
test('Visible floor near a wall or furniture finds a nearby safe destination',()=>{
  for(const target of [{x:5.95,z:1},{x:2.8,z:-1.5},{x:-5.95,z:6.95}]){
    const result=planPath(SEED[2],target);checkRoute(result);assert.equal(result.adjusted,true);
    assert.ok(Math.hypot(result.target.x-target.x,result.target.z-target.z)<=.65);
  }
});
test('An occupied or outside-floor target is rejected with a specific reason',()=>{
  for(const target of [{x:1.3,z:-1.5},{x:7,z:1},{x:NaN,z:0},{x:Infinity,z:0}]){
    const result=planPath(SEED[2],target);assert.equal(result.ok,false);assert.ok(result.reason.length>15);
  }
});
test('A truly separated destination fails, while the same side stays usable',()=>{
  const obstacles=[{name:'Partition',x:0,z:0,w:12,d:.3}];
  assert.equal(planPath(SEED[2],{x:0,z:-3},{obstacles}).ok,false);
  checkRoute(planPath(SEED[2],{x:3,z:5},{obstacles}),obstacles);
});
test('Clearance uses circular footprints and cannot tunnel through a thin obstacle',()=>{
  const circle=[{x:0,z:0,w:1,d:1,shape:'circle'}];
  assert.equal(isFree(.6,.6,ROBOT_RADIUS,circle),true);
  assert.equal(safePath({x:-2,z:.5},{x:2,z:.5},ROBOT_RADIUS,circle),false);
  assert.equal(safePath({x:-2,z:.8},{x:2,z:.8},ROBOT_RADIUS,circle),true);
  assert.equal(safePath({x:-2,z:0},{x:2,z:0},ROBOT_RADIUS,[{x:0,z:0,w:.001,d:2}]),false);
});
test('Every sampled free floor destination is reachable with safe route segments',()=>{
  let count=0;
  for(let x=-5.65;x<=5.65;x+=.65)for(let z=-6.65;z<=6.65;z+=.65)if(isFree(x,z)){
    const result=planPath(SEED[2],{x,z});checkRoute(result);assert.equal(result.adjusted,false);count++;
  }
  assert.ok(count>280);
});
test('Moves between different office zones keep a safe route and exact endpoint',()=>{
  const points=[SEED[2],{x:4,z:5},{x:3.5,z:-5.5},{x:-.5,z:-5.8},{x:-5.6,z:-2.2},{x:-5,z:4}];
  for(const start of points)for(const target of points){const result=planPath(start,target);checkRoute(result);assert.deepEqual(result.target,target);}
});
test('Seed observations form a traversable trajectory in the displayed BEV',()=>{
  SEED.forEach((p,i)=>{assert.ok(isFree(p.x,p.z));if(i)assert.ok(safePath(SEED[i-1],p));});
  assert.deepEqual(mapPoint({x:-6,z:-7}),{x:20,y:20});
  assert.deepEqual(mapPoint({x:6,z:7}),{x:308,y:356});
});
test('Nearby recalled steps keep distinct, numbered map markers',()=>{
  const markers=layoutStepMarkers([...SEED, ...Array.from({length:21},()=>({...SEED[2]}))]);
  assert.equal(markers.length,24);
  assert.deepEqual(markers[2].anchor,markers[3].anchor);
  for(let i=0;i<markers.length;i++)for(let j=0;j<i;j++){
    assert.ok(Math.hypot(markers[i].display.x-markers[j].display.x,markers[i].display.y-markers[j].display.y)>=27);
  }
});
