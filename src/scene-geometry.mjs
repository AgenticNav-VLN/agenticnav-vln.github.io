// Metres in a shared, illustrative room. These bounds also drive the BEV.
export const ROOM = {minX:-6,maxX:6,minZ:-7,maxZ:7};
export const ROBOT_RADIUS = .24;
export const OBSTACLES = [
  {name:'Sofa',x:-4.6,z:.3,w:1.8,d:3.1,h:.92},
  {name:'Table',x:1.3,z:-1.5,w:2.8,d:1.6,h:.78},
  {name:'Cabinet',x:5.35,z:-4.4,w:.85,d:3.6,h:1.95},
  {name:'Desk',x:-3.5,z:-4.65,w:2.4,d:1.1,h:.76},
  {name:'Office chair',x:-3.5,z:-3.35,w:.84,d:.84,h:1.1,shape:'circle'},
  {name:'Meeting chair',x:1.25,z:-3.0,w:.8,d:.8,h:1.05,shape:'circle'},
  {name:'Meeting chair',x:2.1,z:.08,w:.8,d:.8,h:1.05,shape:'circle'},
  {name:'Coffee table',x:-2.75,z:.35,w:.95,d:.95,h:.43,shape:'circle'},
  {name:'Planter',x:-5.12,z:-5.85,w:.7,d:.7,h:.62,shape:'circle'},
  {name:'Planter',x:5.05,z:3.8,w:.85,d:.85,h:.72,shape:'circle'}
];
export const SEED = [
  {x:-1.8,z:5.5,yaw:-.12,pitch:-.1},
  {x:-1.8,z:4.3,yaw:.12,pitch:-.1},
  {x:-1.8,z:3,yaw:0,pitch:-.1}
];
const distance=(a,b)=>Math.hypot(b.x-a.x,b.z-a.z);
function pointClearance(p,o){
  if(o.shape==='circle')return Math.hypot(p.x-o.x,p.z-o.z)-o.w/2;
  return Math.hypot(Math.max(0,Math.abs(p.x-o.x)-o.w/2),Math.max(0,Math.abs(p.z-o.z)-o.d/2));
}
export function isFree(x,z,r=ROBOT_RADIUS,obstacles=OBSTACLES) {
  if(!Number.isFinite(x)||!Number.isFinite(z))return false;
  if(x<ROOM.minX+r || x>ROOM.maxX-r || z<ROOM.minZ+r || z>ROOM.maxZ-r)return false;
  return obstacles.every(o=>pointClearance({x,z},o)>=r-1e-9);
}
function pointSegmentDistance(p,a,b){
  const dx=b.x-a.x,dz=b.z-a.z,l=dx*dx+dz*dz;
  const t=l?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/l)):0;
  return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz);
}
function intersectsBox(a,b,o){
  let lo=0,hi=1;
  for(const [axis,half] of [['x',o.w/2],['z',o.d/2]]){
    const d=b[axis]-a[axis],min=o[axis]-half,max=o[axis]+half;
    if(Math.abs(d)<1e-10){if(a[axis]<min||a[axis]>max)return false;}
    else{const t1=(min-a[axis])/d,t2=(max-a[axis])/d;lo=Math.max(lo,Math.min(t1,t2));hi=Math.min(hi,Math.max(t1,t2));if(lo>hi)return false;}
  }
  return true;
}
// Exact segment clearance avoids both tunnelling and sampling-dependent rejection.
export function safePath(a,b,r=ROBOT_RADIUS,obstacles=OBSTACLES) {
  if(!isFree(a.x,a.z,r,obstacles)||!isFree(b.x,b.z,r,obstacles))return false;
  return obstacles.every(o=>{
    if(o.shape==='circle')return pointSegmentDistance(o,a,b)>=o.w/2+r-1e-9;
    if(intersectsBox(a,b,o))return false;
    let gap=Math.min(pointClearance(a,o),pointClearance(b,o));
    for(const dx of [-1,1])for(const dz of [-1,1])gap=Math.min(gap,pointSegmentDistance({x:o.x+dx*o.w/2,z:o.z+dz*o.d/2},a,b));
    return gap>=r-1e-9;
  });
}
export function pathLength(path){return path.reduce((sum,p,i)=>sum+(i?distance(path[i-1],p):0),0);}
function smoothPath(path,obstacles){
  const result=[path[0]];let i=0;
  while(i<path.length-1){let j=path.length-1;while(j>i+1&&!safePath(path[i],path[j],ROBOT_RADIUS,obstacles))j--;result.push(path[j]);i=j;}
  return result;
}
function visibilityPath(a,b,obstacles){
  if(safePath(a,b,ROBOT_RADIUS,obstacles))return [{x:a.x,z:a.z},{...b}];
  const nodes=[{x:a.x,z:a.z},{...b}],padding=ROBOT_RADIUS+.015;
  for(const o of obstacles){
    if(o.shape==='circle'){
      const radius=(o.w/2+padding)/Math.cos(Math.PI/16);
      for(let i=0;i<16;i++){const p={x:o.x+Math.cos(i*Math.PI/8)*radius,z:o.z+Math.sin(i*Math.PI/8)*radius};if(isFree(p.x,p.z,ROBOT_RADIUS,obstacles))nodes.push(p);}
    }else for(const dx of [-1,1])for(const dz of [-1,1]){
      const p={x:o.x+dx*(o.w/2+padding),z:o.z+dz*(o.d/2+padding)};if(isFree(p.x,p.z,ROBOT_RADIUS,obstacles))nodes.push(p);
    }
  }
  const costs=nodes.map(()=>Infinity),previous=nodes.map(()=>-1),visited=new Set();costs[0]=0;
  while(visited.size<nodes.length){
    let i=-1;for(let j=0;j<nodes.length;j++)if(!visited.has(j)&&(i<0||costs[j]<costs[i]))i=j;
    if(i<0||!Number.isFinite(costs[i]))break;
    if(i===1){const path=[];for(let j=1;j>=0;j=previous[j])path.unshift(nodes[j]);return smoothPath(path,obstacles);}
    visited.add(i);
    for(let j=0;j<nodes.length;j++)if(!visited.has(j)){
      const next=costs[i]+distance(nodes[i],nodes[j]);
      if(next<costs[j]&&safePath(nodes[i],nodes[j],ROBOT_RADIUS,obstacles)){costs[j]=next;previous[j]=i;}
    }
  }
  return null;
}
// A fine grid handles narrow passages and overlapping obstacle footprints that
// may have no useful corner in the fast visibility graph. Diagonals are checked.
function gridPath(a,b,obstacles){
  const step=.12,minX=ROOM.minX+ROBOT_RADIUS,minZ=ROOM.minZ+ROBOT_RADIUS;
  const cols=Math.floor((ROOM.maxX-ROBOT_RADIUS-minX)/step)+1,rows=Math.floor((ROOM.maxZ-ROBOT_RADIUS-minZ)/step)+1;
  const size=cols*rows,free=new Uint8Array(size),costs=new Float64Array(size).fill(Infinity),previous=new Int32Array(size).fill(-1);
  const point=i=>({x:minX+(i%cols)*step,z:minZ+Math.floor(i/cols)*step});
  for(let i=0;i<size;i++){const p=point(i);free[i]=isFree(p.x,p.z,ROBOT_RADIUS,obstacles)?1:0;}
  const frontier=[],goal=new Set(),seen=new Uint8Array(size);
  for(let i=0;i<size;i++)if(free[i]){
    const p=point(i);if(distance(a,p)<step*2&&safePath(a,p,ROBOT_RADIUS,obstacles)){costs[i]=distance(a,p);frontier.push(i);}
    if(distance(b,p)<step*2&&safePath(p,b,ROBOT_RADIUS,obstacles))goal.add(i);
  }
  while(frontier.length){
    let best=0;for(let j=1;j<frontier.length;j++)if(costs[frontier[j]]+distance(point(frontier[j]),b)<costs[frontier[best]]+distance(point(frontier[best]),b))best=j;
    const i=frontier.splice(best,1)[0];if(seen[i])continue;seen[i]=1;
    if(goal.has(i)){const path=[{...b}];for(let j=i;j>=0;j=previous[j])path.unshift(point(j));path.unshift({x:a.x,z:a.z});return smoothPath(path,obstacles);}
    const x=i%cols,z=Math.floor(i/cols),p=point(i);
    for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){
      if((!dx&&!dz)||x+dx<0||x+dx>=cols||z+dz<0||z+dz>=rows)continue;
      const j=i+dx+dz*cols;if(!free[j]||seen[j])continue;const q=point(j),next=costs[i]+distance(p,q);
      if(next<costs[j]&&safePath(p,q,ROBOT_RADIUS,obstacles)){costs[j]=next;previous[j]=i;frontier.push(j);}
    }
  }
  return null;
}
export function planPath(start,requested,{obstacles=OBSTACLES,maxAdjustment=.65}={}){
  if(!Number.isFinite(requested.x)||!Number.isFinite(requested.z)||requested.x<ROOM.minX||requested.x>ROOM.maxX||requested.z<ROOM.minZ||requested.z>ROOM.maxZ)return {ok:false,reason:'The selected point is outside the office floor.'};
  if(!isFree(start.x,start.z,ROBOT_RADIUS,obstacles))return {ok:false,reason:'The robot has insufficient clearance. Reset the room.'};
  const candidates=[];
  if(isFree(requested.x,requested.z,ROBOT_RADIUS,obstacles))candidates.push({...requested});
  else{
    // Never turn a click inside furniture into an unrelated destination.
    if(obstacles.some(o=>o.shape==='circle'?distance(requested,o)<o.w/2:Math.abs(requested.x-o.x)<o.w/2&&Math.abs(requested.z-o.z)<o.d/2))return {ok:false,reason:'The selected floor point is occupied by furniture.'};
    for(let radius=.04;radius<=maxAdjustment+1e-9;radius+=.04)for(let i=0;i<32;i++){
      const p={x:requested.x+Math.cos(i*Math.PI/16)*radius,z:requested.z+Math.sin(i*Math.PI/16)*radius};
      if(isFree(p.x,p.z,ROBOT_RADIUS,obstacles))candidates.push(p);
    }
  }
  for(const target of candidates){
    const path=visibilityPath(start,target,obstacles)||gridPath(start,target,obstacles);
    if(path)return {ok:true,path,target,length:pathLength(path),adjusted:distance(requested,target)>.005};
  }
  return {ok:false,reason:candidates.length?'No collision-free route reaches the selected floor area.':'There is not enough space for the robot near this point.'};
}
export function mapPoint(p) { return {x:20+(p.x+6)*24,y:20+(p.z+7)*24}; }
// Keep numbered observations legible when a route revisits the same area.
// The path still uses the true position; only overlapping labels move.
export function layoutStepMarkers(poses) {
  const placed = [];
  const offsets = [];
  for (let x = -9; x <= 9; x++) for (let y = -11; y <= 11; y++) offsets.push({x:x*28,y:y*28});
  offsets.sort((a,b) => Math.hypot(a.x,a.y)-Math.hypot(b.x,b.y) || a.y-b.y || a.x-b.x);
  for (const pose of poses) {
    const anchor = mapPoint(pose);
    const offset = offsets.find(offset => {
      const x = anchor.x+offset.x, y = anchor.y+offset.y;
      return x >= 33 && x <= 295 && y >= 33 && y <= 343 &&
        placed.every(marker => Math.hypot(x-marker.display.x,y-marker.display.y) >= 27);
    });
    const display = offset ? {x:anchor.x+offset.x,y:anchor.y+offset.y} : anchor;
    placed.push({anchor, display});
  }
  return placed;
}
