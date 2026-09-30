import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {OBSTACLES} from './scene-geometry.mjs';
import floorColor from './textures/floor-color.jpg';
import floorNormal from './textures/floor-normal.jpg';
import floorRoughness from './textures/floor-roughness.jpg';
import woodColor from './textures/wood-color.jpg';
import plasterColor from './textures/plaster-color.jpg';
import fabricColor from './textures/fabric-color.jpg';
import fabricNormal from './textures/fabric-normal.jpg';

export function buildOffice(renderer){
  const scene=new THREE.Scene(),meshes=[],loads=[],textureCache=new Map();
  scene.background=new THREE.Color(0xe7eced);
  const texture=(url,x=1,y=1,colour=true)=>{
    const key=`${url}:${x}:${y}:${colour}`;
    if(textureCache.has(key))return textureCache.get(key);
    let resolve;loads.push(new Promise(done=>resolve=done));
    const map=new THREE.TextureLoader().load(url,()=>resolve(),undefined,()=>resolve());
    map.wrapS=map.wrapT=THREE.RepeatWrapping;map.repeat.set(x,y);
    map.colorSpace=colour?THREE.SRGBColorSpace:THREE.NoColorSpace;
    map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textureCache.set(key,map);return map;
  };
  const material=(color,options={})=>new THREE.MeshStandardMaterial({color,roughness:.7,...options});
  const oak=material(0xffffff,{map:texture(woodColor),roughness:.45});
  const walnut=material(0xb8a293,{map:texture(woodColor),roughness:.5});
  const metal=material(0x454e52,{metalness:.68,roughness:.38});
  const brass=material(0xbeaa7c,{metalness:.6,roughness:.34});
  const porcelain=material(0xe4ded0,{roughness:.38});
  const upholstery=color=>material(color,{map:texture(fabricColor,3,3),normalMap:texture(fabricNormal,3,3,false),normalScale:new THREE.Vector2(.25,.25),roughness:.96});
  const blueFabric=upholstery(0x718e95),chairFabric=upholstery(0x53676b),creamFabric=upholstery(0xd8cdb9);
  function mesh(geometry,mat,x,y,z,name='Office furnishing',shadow=true){
    const object=new THREE.Mesh(geometry,mat);object.position.set(x,y,z);object.castShadow=shadow;object.receiveShadow=true;object.userData.name=name;
    scene.add(object);meshes.push(object);return object;
  }
  const box=(x,y,z,w,h,d,mat,name,shadow=true)=>mesh(new THREE.BoxGeometry(w,h,d),mat,x,y,z,name,shadow);
  const round=(x,y,z,w,h,d,r,mat,name)=>mesh(new RoundedBoxGeometry(w,h,d,4,Math.min(r,w/2,h/2,d/2)),mat,x,y,z,name);
  const cylinder=(x,y,z,r1,r2,h,mat,name)=>mesh(new THREE.CylinderGeometry(r1,r2,h,32),mat,x,y,z,name);
  function rod(a,b,r,mat,name){
    const vector=new THREE.Vector3().subVectors(b,a),middle=a.clone().add(b).multiplyScalar(.5);
    const object=cylinder(middle.x,middle.y,middle.z,r,r,vector.length(),mat,name);object.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),vector.normalize());return object;
  }
  function pillTop(x,y,z,w,d,h,mat,name){
    const shape=new THREE.Shape(),r=Math.min(.28,d/2),left=-w/2,right=w/2,top=d/2,bottom=-d/2;
    shape.moveTo(left+r,bottom);shape.lineTo(right-r,bottom);shape.quadraticCurveTo(right,bottom,right,bottom+r);
    shape.lineTo(right,top-r);shape.quadraticCurveTo(right,top,right-r,top);shape.lineTo(left+r,top);
    shape.quadraticCurveTo(left,top,left,top-r);shape.lineTo(left,bottom+r);shape.quadraticCurveTo(left,bottom,left+r,bottom);
    const object=mesh(new THREE.ExtrudeGeometry(shape,{depth:h,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.008,curveSegments:12}),mat,x,y,z,name);
    object.rotation.x=-Math.PI/2;return object;
  }
  scene.add(new THREE.HemisphereLight(0xe8f2ff,0xc0aa8e,2.1));
  const daylight=new THREE.DirectionalLight(0xfff1dc,2.6);daylight.position.set(-5,6,3);daylight.castShadow=true;
  daylight.shadow.mapSize.set(1024,1024);Object.assign(daylight.shadow.camera,{left:-8,right:8,top:9,bottom:-9,near:.5,far:22});
  daylight.shadow.normalBias=.025;daylight.shadow.bias=-.00015;scene.add(daylight);
  const fill=new THREE.DirectionalLight(0xdae8f5,1);fill.position.set(5,2,-4);scene.add(fill);
  const floor=box(0,-.08,0,12,.16,14,material(0xffffff,{map:texture(floorColor,6,7),normalMap:texture(floorNormal,6,7,false),normalScale:new THREE.Vector2(.13,.13),roughnessMap:texture(floorRoughness,6,7,false),roughness:.98}),'Floor',false);floor.userData.floor=true;
  const plaster=material(0xf9f8f2,{map:texture(plasterColor,6,2),roughness:.95}),accent=material(0x79918f,{map:texture(plasterColor,6,2),roughness:.94});
  box(0,1.7,-7.08,12,3.4,.16,plaster,'Back wall',false);box(0,1.7,7.08,12,3.4,.16,plaster,'Entrance wall',false);
  box(-6.08,1.7,0,.16,3.4,14,plaster,'Window wall',false);box(6.08,1.7,0,.16,3.4,14,accent,'Accent wall',false);
  box(0,3.47,0,12,.14,14,material(0xf7f6f0),'Ceiling',false);
  for(const z of [-6.96,6.96])box(0,.065,z,12,.13,.045,walnut,'Skirting',false);
  for(const x of [-5.96,5.96])box(x,.065,0,.045,.13,14,walnut,'Skirting',false);
  // Broad windows and emissive daylight; fine trim never throws striped shadows.
  for(const z of [-3.35,1.55]){
    const sky=material(0xb5d1df,{emissive:0x80a9bb,emissiveIntensity:.24,roughness:.25});
    box(-5.96,2.06,z,.025,1.8,3.55,sky,'Window glass',false);
    for(const edge of [-1,1])box(-5.88,2.06,z+edge*1.81,.12,1.96,.08,porcelain,'Window frame',false);
    for(const y of [1.13,2.99])box(-5.88,y,z,.12,.09,3.72,porcelain,'Window frame',false);
    box(-5.84,2.06,z,.14,1.8,.045,metal,'Window mullion',false);box(-5.77,1.07,z,.36,.065,3.82,porcelain,'Window sill',false);
    for(let i=0;i<7;i++)box(-5.93,1.65+(i%3)*.11,z-1.5+i*.5,.028,.4+(i%3)*.22,.32,material([0x8fa9b4,0x91a2ab,0xa7bac1][i%3]),'Distant building',false);
  }
  const door=box(.35,1.24,-6.97,1.65,2.48,.065,walnut,'Door',false);door.material=material(0xd4c6ad,{map:texture(woodColor,1,2),roughness:.55});
  for(const x of [-.53,1.23])box(x,1.29,-6.89,.095,2.58,.14,porcelain,'Door frame',false);
  box(.35,2.56,-6.89,1.86,.1,.14,porcelain,'Door frame',false);
  box(.35,1.77,-6.92,1.18,.72,.04,material(0xabc5ce,{emissive:0x587989,emissiveIntensity:.1}),'Door glass',false);
  rod(new THREE.Vector3(.95,1.1,-6.84),new THREE.Vector3(.95,1.1,-6.69),.025,brass,'Door handle');
  rod(new THREE.Vector3(.95,1.1,-6.69),new THREE.Vector3(.76,1.1,-6.69),.025,brass,'Door handle');
  for(const [x,z] of [[-.6,-2.8],[2.8,2.8],[-3,3.9]]){
    box(x,3.29,z,1.9,.07,.32,metal,'Pendant light',false);
    box(x,3.248,z,1.8,.015,.24,material(0xfff2db,{emissive:0xffebc6,emissiveIntensity:1.1}),'Light diffuser',false);
    const lamp=new THREE.PointLight(0xffefda,5,9,2);lamp.position.set(x,3.08,z);scene.add(lamp);
  }
  // Fitted storage: bevels, wood grain, handles and books give the office scale.
  function cabinet(o){
    round(o.x,.99,o.z,o.w,1.94,o.d,.035,oak,'Cabinet');
    for(let i=0;i<4;i++){
      const z=o.z-o.d/2+.45+i*.88;
      round(o.x-o.w/2-.014,1.0,z,.035,1.81,.83,.014,walnut,'Cabinet door');
      rod(new THREE.Vector3(o.x-o.w/2-.06,1.01,z+.25),new THREE.Vector3(o.x-o.w/2-.06,1.19,z+.25),.013,brass,'Cabinet handle');
    }
    for(let i=0;i<7;i++)box(o.x,2.08,o.z-.9+i*.095,.4,.2+(i%3)*.06,.065,material([0xc9bea7,0x668184,0xb79172][i%3]),'Book');
  }
  function sofa(o){
    round(o.x,.31,o.z,1.72,.36,3.02,.13,blueFabric,'Sofa base');
    round(o.x-.68,.73,o.z,.34,1.04,2.98,.15,blueFabric,'Sofa back');
    for(const z of [-1.34,1.34])round(o.x,.57,o.z+z,1.72,.59,.34,.16,blueFabric,'Sofa arm');
    for(const z of [-.78,0,.78]){
      round(o.x+.15,.54,o.z+z,1.28,.22,.73,.09,blueFabric,'Sofa cushion');
      const cushion=round(o.x-.42,.86,o.z+z,.26,.5,.65,.11,z===0?creamFabric:blueFabric,'Sofa cushion');cushion.rotation.z=-.13;
    }
    for(const x of [-.65,.65])for(const z of [-1.28,1.28])cylinder(o.x+x,.09,o.z+z,.03,.022,.18,walnut,'Sofa foot');
  }
  function table(o,desk=false){
    pillTop(o.x,o.h-.07,o.z,o.w-.045,o.d-.045,.06,desk?oak:walnut,desk?'Desk':'Table');
    for(const dx of [-1,1])for(const dz of [-1,1]){
      const x=o.x+dx*(o.w/2-.19),z=o.z+dz*(o.d/2-.18);
      rod(new THREE.Vector3(x,.025,z),new THREE.Vector3(x,o.h-.075,z),.035,metal,'Table leg');
    }
    if(desk){
      round(o.x,1.16,o.z-.14,1.01,.54,.055,.025,metal,'Monitor');
      const screen=box(o.x,.82,o.z-.108,.94,.46,.006,material(0x688e9d,{emissive:0x355b69,emissiveIntensity:.4}),'Monitor screen');
      cylinder(o.x,.91,o.z-.21,.035,.035,.26,metal,'Monitor stand');round(o.x,.786,o.z-.2,.4,.016,.25,.006,metal,'Monitor base');
      round(o.x,.802,o.z+.3,.67,.027,.21,.01,material(0x5e686b),'Keyboard');
      for(let i=0;i<12;i++)box(o.x-.29+i*.051,.818,o.z+.3,.037,.007,.16,material(0xc1c6c4),'Keyboard key');
      screen.position.y=1.16;
    }else{
      round(o.x+.38,o.h+.018,o.z-.1,.66,.035,.43,.014,metal,'Laptop');
      const lid=round(o.x+.38,o.h+.235,o.z-.3,.66,.43,.032,.018,metal,'Laptop');lid.rotation.x=-.14;
      const display=box(o.x+.38,o.h+.235,o.z-.278,.59,.36,.006,material(0x79999d,{emissive:0x466c73,emissiveIntensity:.26}),'Laptop screen');display.rotation.x=-.14;
    }
    cylinder(o.x-.7,o.h+.105,o.z+.12,.078,.065,.2,porcelain,'Mug');
    const handle=mesh(new THREE.TorusGeometry(.055,.013,8,20),porcelain,o.x-.605,o.h+.11,o.z+.12,'Mug handle');handle.rotation.y=Math.PI/2;
    round(o.x-.26,o.h+.032,o.z+.32,.46,.043,.3,.01,material(0xe8dfc9),'Notebook');
    rod(new THREE.Vector3(o.x-.4,o.h+.061,o.z+.29),new THREE.Vector3(o.x-.15,o.h+.061,o.z+.35),.007,metal,'Pen');
  }
  function chair(o){
    round(o.x,.49,o.z,.58,.13,.57,.065,chairFabric,'Chair seat');
    const back=round(o.x,.82,o.z+.26,.59,.6,.095,.045,chairFabric,'Chair back');back.rotation.x=-.1;
    cylinder(o.x,.27,o.z,.038,.048,.4,metal,'Chair column');
    for(const side of [-1,1]){
      rod(new THREE.Vector3(o.x+side*.27,.51,o.z),new THREE.Vector3(o.x+side*.27,.68,o.z),.018,metal,'Chair arm');
      round(o.x+side*.29,.69,o.z,.055,.045,.3,.018,metal,'Arm rest');
    }
    for(let i=0;i<5;i++){
      const a=i*Math.PI*2/5,end=new THREE.Vector3(o.x+Math.cos(a)*.34,.08,o.z+Math.sin(a)*.34);
      rod(new THREE.Vector3(o.x,.12,o.z),end,.025,metal,'Chair base');
      const wheel=cylinder(end.x,.052,end.z,.043,.043,.045,metal,'Chair wheel');wheel.rotation.z=Math.PI/2;
    }
  }
  function plant(o){
    const pot=material(0xc7b9a1,{roughness:.87});cylinder(o.x,o.h/2,o.z,o.w/2-.025,o.w/2-.10,o.h,pot,'Planter');
    cylinder(o.x,o.h+.005,o.z,o.w/2-.05,o.w/2-.05,.018,material(0x53473b),'Soil');
    for(let i=0;i<15;i++){
      const a=i*2.399,end=new THREE.Vector3(o.x+Math.sin(a)*(.14+(i%3)*.065),o.h+.35+(i%5)*.14,o.z+Math.cos(a)*(.13+(i%3)*.06));
      rod(new THREE.Vector3(o.x,o.h,o.z),end,.009,material(0x5c6846),'Plant stem');
      const leaf=mesh(new THREE.SphereGeometry(1,12,8),material([0x547a4a,0x719056,0x3d6543][i%3],{roughness:.79}),end.x,end.y,end.z,'Plant leaf');
      leaf.scale.set(.11,.26,.032);leaf.rotation.z=Math.sin(a)*.65;leaf.rotation.x=Math.cos(a)*.6;
    }
  }
  for(const o of OBSTACLES){
    if(o.name==='Sofa')sofa(o);else if(o.name==='Table'||o.name==='Desk')table(o,o.name==='Desk');
    else if(o.name==='Cabinet')cabinet(o);else if(o.name.includes('chair'))chair(o);
    else if(o.name==='Planter')plant(o);else if(o.name==='Coffee table'){
      cylinder(o.x,.415,o.z,.46,.46,.04,oak,'Coffee table');cylinder(o.x,.2,o.z,.12,.21,.39,metal,'Coffee table pedestal');
      round(o.x,.451,o.z,.39,.04,.27,.012,material(0xc1baa2),'Magazine');
    }
  }
  // An acoustic art panel and whiteboard sit entirely inside the wall boundary.
  round(5.965,1.95,.6,.055,1.3,2.3,.02,oak,'Art frame');
  box(5.93,1.95,.6,.015,1.15,2.15,creamFabric,'Acoustic panel',false);
  for(let i=0;i<3;i++){
    const disc=cylinder(5.9,1.88+i*.12,.0+i*.54,.22,.22,.02,material([0x687f82,0xbb9875,0xa6b095][i]),'Artwork');disc.rotation.z=Math.PI/2;disc.castShadow=false;
  }
  round(-2.8,1.94,-6.945,2.5,1.15,.055,.023,metal,'Whiteboard frame');
  box(-2.8,1.94,-6.912,2.4,1.05,.008,material(0xf6f7f1,{roughness:.45}),'Whiteboard',false);
  for(let i=0;i<4;i++)box(-3.62+i*.35,2.10-(i%2)*.22,-6.901,.23,.012,.007,material(0x879c9c),'Whiteboard note',false);
  const marker=new THREE.Mesh(new THREE.RingGeometry(.17,.25,40),new THREE.MeshBasicMaterial({color:0xf39a30,side:THREE.DoubleSide,depthWrite:false}));
  marker.rotation.x=-Math.PI/2;marker.visible=false;scene.add(marker);
  return {scene,floor,meshes,marker,ready:Promise.all(loads)};
}
