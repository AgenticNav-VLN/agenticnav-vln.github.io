// Metres in a shared, illustrative room. These bounds also drive the BEV.
export const ROOM = {minX:-6,maxX:6,minZ:-7,maxZ:7};
export const OBSTACLES = [
  {name:'Sofa',x:-4.3,z:-.2,w:2.1,d:3.3,h:.85,color:0x78959c},
  {name:'Table',x:1.9,z:-1.6,w:2.5,d:1.5,h:.8,color:0xbb8d61},
  {name:'Cabinet',x:5.2,z:-3.8,w:1.1,d:3.1,h:1.9,color:0xd4b391},
  {name:'Planter',x:-4.8,z:-5.5,w:.9,d:.9,h:.6,color:0xcba785}
];
export const SEED = [
  {x:-1.8,z:5.5,yaw:-.12,pitch:-.1},
  {x:-1.8,z:4.3,yaw:.12,pitch:-.1},
  {x:-1.8,z:3,yaw:0,pitch:-.1}
];
export function isFree(x,z,r=.28) {
  if (x<ROOM.minX+r || x>ROOM.maxX-r || z<ROOM.minZ+r || z>ROOM.maxZ-r) return false;
  return !OBSTACLES.some(o=>Math.abs(x-o.x)<o.w/2+r && Math.abs(z-o.z)<o.d/2+r);
}
export function safePath(a,b) {
  const steps=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.04));
  for(let i=0;i<=steps;i++) if(!isFree(a.x+(b.x-a.x)*i/steps,a.z+(b.z-a.z)*i/steps))return false;
  return true;
}
export function mapPoint(p) { return {x:20+(p.x+6)*24,y:20+(p.z+7)*24}; }
