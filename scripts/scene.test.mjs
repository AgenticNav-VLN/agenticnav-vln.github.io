import test from 'node:test';
import assert from 'node:assert/strict';
import {isFree,safePath,mapPoint,SEED} from '../src/scene-geometry.mjs';
test('Clear aisle accepts travel; crossing a table is rejected even with a free endpoint',()=>{
  assert.equal(safePath({x:-1.8,z:3},{x:-1.8,z:-5}),true);
  assert.equal(isFree(1.9,-4),true);
  assert.equal(safePath({x:1.9,z:3},{x:1.9,z:-4}),false);
});
test('Robot clearance excludes furniture edges and room boundaries',()=>{
  assert.equal(isFree(3.3,-1.6),false);
  assert.equal(isFree(3.6,-1.6),true);
  assert.equal(isFree(5.9,4),false);
});
test('Seed observations form a traversable trajectory in the displayed BEV',()=>{
  SEED.forEach((p,i)=>{assert.ok(isFree(p.x,p.z));if(i)assert.ok(safePath(SEED[i-1],p));});
  assert.deepEqual(mapPoint({x:-6,z:-7}),{x:20,y:20});
  assert.deepEqual(mapPoint({x:6,z:7}),{x:308,y:356});
});
