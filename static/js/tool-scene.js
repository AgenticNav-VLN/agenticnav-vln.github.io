(()=>{var Fc=0,Qo=1,Oc=2;var oi=1,Bc=2,Zi=3,Xn=0,Oe=1,$e=2,xn=0,Ki=1,jo=2,tl=3,el=4,zc=5;var li=100,Vc=101,kc=102,Hc=103,Gc=104,Wc=200,Xc=201,qc=202,Yc=203,nl=204,il=205,$c=206,Jc=207,Zc=208,Kc=209,Qc=210,jc=211,th=212,eh=213,nh=214,Ir=0,Lr=1,Dr=2,Li=3,Nr=4,Ur=5,Fr=6,Or=7,sl=0,ih=1,sh=2,rn=0,rl=1,al=2,ol=3,qs=4,ll=5,cl=6,hl=7;var ul=300,qn=301,ci=302,fa=303,pa=304,Ys=306,Di=1e3,fn=1001,Br=1002,be=1003,rh=1004;var $s=1005;var we=1006,ma=1007;var Yn=1008;var ze=1009,dl=1010,fl=1011,Qi=1012,ga=1013,an=1014,on=1015,ln=1016,_a=1017,xa=1018,ji=1020,pl=35902,ml=35899,gl=1021,_l=1022,Je=1023,pn=1026,$n=1027,xl=1028,va=1029,Jn=1030,ya=1031;var Ma=1033,Js=33776,Zs=33777,Ks=33778,Qs=33779,Sa=35840,ba=35841,Ta=35842,Ea=35843,wa=36196,Aa=37492,Ca=37496,Ra=37488,Pa=37489,js=37490,Ia=37491,La=37808,Da=37809,Na=37810,Ua=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,Va=37816,ka=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,qa=36492,Ya=36494,$a=36495,Ja=36283,Za=36284,tr=36285,Ka=36286;var ms=2300,zr=2301,Cr=2302,zo=2303,Vo=2400,ko=2401,Ho=2402;var ah=3200;var Qa=0,oh=1,cn="",Te="srgb",gs="srgb-linear",_s="linear",re="srgb";var Rr=7680;var lh=519,ch=512,hh=513,uh=514,ja=515,dh=516,fh=517,to=518,ph=519,mh=35044;var vl="300 es",sn=2e3,Ni=2001;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){let i=Ui("canvas");return i.style.display="block",i}var rc={},Fi=null;function yl(...i){let t="THREE."+i.shift();Fi?Fi("log",t,...i):console.log(t,...i)}function _h(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=_h(i);let t="THREE."+i.shift();if(Fi)Fi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=_h(i);let t="THREE."+i.shift();if(Fi)Fi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function si(...i){let t=i.join(" ");t in rc||(rc[t]=!0,Xt(...i))}function xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vh={[Ir]:Lr,[Dr]:Fr,[Nr]:Or,[Li]:Ur,[Lr]:Ir,[Fr]:Dr,[Or]:Nr,[Ur]:Li},mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=1234567,us=Math.PI/180,Oi=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ml(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function Tu(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(Ml(i,t*2)-t)}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ru(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(ac=i);let t=ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*us}function Du(i){return i*Oi}function Nu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eo={DEG2RAD:us,RAD2DEG:Oi,generateUUID:hi,clamp:jt,euclideanModulo:Ml,mapLinear:Su,inverseLerp:bu,lerp:ds,damp:Tu,pingpong:Eu,smoothstep:wu,smootherstep:Au,randInt:Cu,randFloat:Ru,randFloatSpread:Pu,seededRandom:Iu,degToRad:Lu,radToDeg:Du,isPowerOfTwo:Nu,ceilPowerOfTwo:Uu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:Ne,denormalize:Pi},Al=class Al{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;var ft=Al,gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),R=Math.sin(b);f=Math.sin(f*b)/R,o=Math.sin(o*b)/R,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cl=class Cl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cl.prototype.isVector3=!0;var D=Cl,mo=new D,oc=new gn,Rl=class Rl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],b=s[1],R=s[4],y=s[7],S=s[2],T=s[5],P=s[8];return r[0]=a*M+o*b+l*S,r[3]=a*m+o*R+l*T,r[6]=a*f+o*y+l*P,r[1]=c*M+h*b+d*S,r[4]=c*m+h*R+d*T,r[7]=c*f+h*y+d*P,r[2]=u*M+p*b+g*S,r[5]=u*m+p*R+g*T,r[8]=u*f+p*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(go.makeScale(t,e)),this}rotate(t){return si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(go.makeRotation(-t)),this}translate(t,e){return si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;var Yt=Rl,go=new Yt,lc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){let i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cn?_s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:t,whitePoint:n,transfer:_s,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:re,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var ee=Bu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gi,Vr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=Ui("canvas")),gi.width=t.width,gi.height=t.height;let s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ui("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,Bi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Vu=0,xo=new D,Ue=class i extends mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fn,s=fn,r=we,a=Yn,o=Je,l=ze,c=i.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=hi(),this.name="",this.source=new Bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=ul;Ue.DEFAULT_ANISOTROPY=1;var Pl=class Pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,y=(p+1)/2,S=(f+1)/2,T=(h+u)/4,P=(d+M)/4,x=(g+m)/4;return R>y&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=P/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=P/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;var pe=Pl,kr=class extends mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ue(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends kr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xs=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var da=class da{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Hu)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Dn.crossVectors(n,Ve),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Dn.crossVectors(n,Ve)),Dn.normalize(),or.crossVectors(Ve,Dn),s[0]=Dn.x,s[4]=or.x,s[8]=Ve.x,s[1]=Dn.y,s[5]=or.y,s[9]=Ve.y,s[2]=Dn.z,s[6]=or.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],b=n[3],R=n[7],y=n[11],S=n[15],T=s[0],P=s[4],x=s[8],E=s[12],I=s[1],N=s[5],V=s[9],G=s[13],U=s[2],H=s[6],$=s[10],Q=s[14],w=s[3],B=s[7],z=s[11],J=s[15];return r[0]=a*T+o*I+l*U+c*w,r[4]=a*P+o*N+l*H+c*B,r[8]=a*x+o*V+l*$+c*z,r[12]=a*E+o*G+l*Q+c*J,r[1]=h*T+d*I+u*U+p*w,r[5]=h*P+d*N+u*H+p*B,r[9]=h*x+d*V+u*$+p*z,r[13]=h*E+d*G+u*Q+p*J,r[2]=g*T+M*I+m*U+f*w,r[6]=g*P+M*N+m*H+f*B,r[10]=g*x+M*V+m*$+f*z,r[14]=g*E+M*G+m*Q+f*J,r[3]=b*T+R*I+y*U+S*w,r[7]=b*P+R*N+y*H+S*B,r[11]=b*x+R*V+y*$+S*z,r[15]=b*E+R*G+y*Q+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15],b=l*p-c*u,R=o*p-c*d,y=o*u-l*d,S=a*p-c*h,T=a*u-l*h,P=a*d-o*h;return e*(M*b-m*R+f*y)-n*(g*b-m*S+f*T)+s*(g*R-M*S+f*P)-r*(g*y-M*T+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],b=e*o-n*a,R=e*l-s*a,y=e*c-r*a,S=n*l-s*o,T=n*c-r*o,P=s*c-r*l,x=h*M-d*g,E=h*m-u*g,I=h*f-p*g,N=d*m-u*M,V=d*f-p*M,G=u*f-p*m,U=b*G-R*V+y*N+S*I-T*E+P*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/U;return t[0]=(o*G-l*V+c*N)*H,t[1]=(s*V-n*G-r*N)*H,t[2]=(M*P-m*T+f*S)*H,t[3]=(u*T-d*P-p*S)*H,t[4]=(l*I-a*G-c*E)*H,t[5]=(e*G-s*I+r*E)*H,t[6]=(m*y-g*P-f*R)*H,t[7]=(h*P-u*y+p*R)*H,t[8]=(a*V-o*I+c*x)*H,t[9]=(n*I-e*V-r*x)*H,t[10]=(g*T-M*y+f*b)*H,t[11]=(d*y-h*T-p*b)*H,t[12]=(o*E-a*N-l*x)*H,t[13]=(e*N-n*E+s*x)*H,t[14]=(M*R-g*S-m*b)*H,t[15]=(h*S-d*R+u*b)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,M=a*h,m=a*d,f=o*d,b=l*c,R=l*h,y=l*d,S=n.x,T=n.y,P=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+y)*S,s[2]=(g-R)*S,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+f))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+R)*P,s[9]=(m-b)*P,s[10]=(1-(u+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=_i.set(s[0],s[1],s[2]).length(),o=_i.set(s[4],s[5],s[6]).length(),l=_i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),je.copy(this);let c=1/a,h=1/o,d=1/l;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===sn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ni)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===sn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ni)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};da.prototype.isMatrix4=!0;var fe=da,_i=new D,je=new fe,ku=new D(0,0,0),Hu=new D(1,1,1),Dn=new D,or=new D,Ve=new D,hc=new fe,uc=new gn,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var zi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gu=0,dc=new D,xi=new gn,Sn=new fe,lr=new D,as=new D,Wu=new D,Xu=new gn,fc=new D(1,0,0),pc=new D(0,1,0),mc=new D(0,0,1),gc={type:"added"},qu={type:"removed"},vi={type:"childadded",child:null},vo={type:"childremoved",child:null},Ie=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Cn,n=new gn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Yt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(as,lr,this.up):Sn.lookAt(lr,as,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(Sn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),vi.child=t,this.dispatchEvent(vi),vi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yu={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ml(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ee.workingToColorSpace(Pe.copy(this),t),Math.round(jt(Pe.r*255,0,255))*65536+Math.round(jt(Pe.g*255,0,255))*256+Math.round(jt(Pe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Te){ee.workingToColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(cr);let n=ds(Nn.h,cr.h,e),s=ds(Nn.s,cr.s,e),r=ds(Nn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Kt;Kt.NAMES=yh;var vs=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},tn=new D,bn=new D,Mo=new D,Tn=new D,yi=new D,Mi=new D,_c=new D,So=new D,bo=new D,To=new D,Eo=new pe,wo=new pe,Ao=new pe,Bn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),bn.subVectors(n,e),Mo.subVectors(t,e);let a=tn.dot(tn),o=tn.dot(bn),l=tn.dot(Mo),c=bn.dot(bn),h=bn.dot(Mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Eo.setScalar(0),wo.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),bn.subVectors(t,e),tn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;yi.subVectors(s,n),Mi.subVectors(r,n),So.subVectors(t,n);let l=yi.dot(So),c=Mi.dot(So);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,s);let h=yi.dot(bo),d=Mi.dot(bo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(yi,a);To.subVectors(t,r);let p=yi.dot(To),g=Mi.dot(To);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Mi,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return _c.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(_c,o);let f=1/(m+M+u);return a=M*f,o=u*f,e.copy(n).addScaledVector(yi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),ur.subVectors(this.max,os),Si.subVectors(t.a,os),bi.subVectors(t.b,os),Ti.subVectors(t.c,os),Un.subVectors(bi,Si),Fn.subVectors(Ti,bi),Qn.subVectors(Si,Ti);let e=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Co(e,Si,bi,Ti,ur)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Si,bi,Ti,ur))?!1:(dr.crossVectors(Un,Fn),e=[dr.x,dr.y,dr.z],Co(e,Si,bi,Ti,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,hr=new zn,Si=new D,bi=new D,Ti=new D,Un=new D,Fn=new D,Qn=new D,os=new D,ur=new D,dr=new D,jn=new D;function Co(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xe=new D,fr=new ft,$u=0,Ye=class extends mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ys=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ms=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ju=new zn,ls=new D,Ro=new D,ki=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Ro)),this.expandByPoint(ls.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zu=0,qe=new fe,Po=new Ie,Ei=new D,ke=new zn,cs=new zn,Se=new D,Fe=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?Ms:ys)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(ke.min,cs.min),ke.expandByPoint(Se),Se.addVectors(ke.max,cs.max),ke.expandByPoint(Se)):(ke.expandByPoint(cs.min),ke.expandByPoint(cs.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Se.add(Ei)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,d=new D,u=new ft,p=new ft,g=new ft,M=new D,m=new D;function f(x,E,I){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(N),o[x].add(M),o[E].add(M),o[I].add(M),l[x].add(m),l[E].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){let I=b[x],N=I.start,V=I.count;for(let G=N,U=N+V;G<U;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let R=new D,y=new D,S=new D,T=new D;function P(x){S.fromBufferAttribute(s,x),T.copy(S);let E=o[x];R.copy(E),R.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(T,E);let N=y.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,N)}for(let x=0,E=b.length;x<E;++x){let I=b[x],N=I.start,V=I.count;for(let G=N,U=N+V;G<U;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Ye(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new D,Ku=new D,Qu=new Yt,nn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Io.subVectors(n,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ju=0,Vn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ki,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wn=new D,Lo=new D,pr=new D,mr=new D,Ss=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),mr.copy(this.origin).sub(Lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=mr.dot(this.direction),l=-mr.dot(pr),c=mr.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lo).addScaledVector(pr,u),p}intersectSphere(t,e){if(t.radius<0)return null;wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,b=n.y-a.y,R=n.z-a.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(h),P,x,E,I,N,V,G,U,H,$,Q,w;if(y>=S&&y>=T?(E=l,V=d,H=g,w=f,l>=0?(P=c,x=h,I=u,N=p,G=M,U=m,$=b,Q=R):(P=h,x=c,I=p,N=u,G=m,U=M,$=R,Q=b)):S>=T?(E=c,V=u,H=M,w=b,c>=0?(P=h,x=l,I=p,N=d,G=m,U=g,$=R,Q=f):(P=l,x=h,I=d,N=p,G=g,U=m,$=f,Q=R)):(E=h,V=p,H=m,w=R,h>=0?(P=l,x=c,I=d,N=u,G=g,U=M,$=f,Q=b):(P=c,x=l,I=u,N=d,G=M,U=g,$=b,Q=f)),E===0)return null;let B=P/E,z=x/E,J=1/E,ct=I-B*V,ht=N-z*V,Ft=G-B*H,Lt=U-z*H,Ht=$-B*w,Z=Q-z*w,et=Ht*Lt-Z*Ft,dt=ct*Z-ht*Ht,Nt=Ft*ht-Lt*ct;if(s){if(et<0||dt<0||Nt<0)return null}else if((et<0||dt<0||Nt<0)&&(et>0||dt>0||Nt>0))return null;let gt=et+dt+Nt;if(gt===0)return null;let zt=J*(et*V+dt*H+Nt*w);return(gt>0?zt<0:zt>0)?null:this.at(zt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xc=new fe,ti=new Ss,gr=new ki,vc=new D,_r=new D,xr=new D,vr=new D,Do=new D,yr=new D,yc=new D,Mr=new D,Ae=class extends Ie{constructor(t=new Fe,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Do.fromBufferAttribute(d,t),a?yr.addScaledVector(Do,h):yr.addScaledVector(Do.sub(e),h))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(gr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(gr,vc)===null||ti.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(xc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(xc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,S=R;y<S;y+=3){let T=o.getX(y),P=o.getX(y+1),x=o.getX(y+2);s=Sr(this,f,t,n,c,h,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=Sr(this,a,t,n,c,h,d,b,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,S=R;y<S;y+=3){let T=y,P=y+1,x=y+2;s=Sr(this,f,t,n,c,h,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=m,R=m+1,y=m+2;s=Sr(this,a,t,n,c,h,d,b,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function td(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,xr),i.getVertexPosition(c,vr);let h=td(i,t,e,n,_r,xr,vr,yc);if(h){let d=new D;Bn.getBarycoord(yc,_r,xr,vr,d),s&&(h.uv=Bn.getInterpolatedAttribute(s,o,l,c,d,new ft)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,o,l,c,d,new ft)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Bn.getNormal(_r,xr,vr,u.normal),h.face=u,h.barycoord=d}return h}var Gr=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=be,h=be,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=new ki,ed=new ft(.5,.5),br=new D,Hi=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],b=r[12],R=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,f-g,S-b).normalize(),s[1].setComponents(c+a,p+h,f+g,S+b).normalize(),s[2].setComponents(c+o,p+d,f+M,S+R).normalize(),s[3].setComponents(c-o,p-d,f-M,S-R).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,f-m,S-y).normalize();else if(s[4].setComponents(c-l,p-u,f-m,S-y).normalize(),e===sn)s[5].setComponents(c+l,p+u,f+m,S+y).normalize();else if(e===Ni)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);let e=ed.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Ue{constructor(t=[],e=qn,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var kn=class extends Ue{constructor(t,e,n=an,s,r,a,o=be,l=be,c,h=pn,d=1){if(h!==pn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wr=class extends kn{constructor(t,e=an,n=qn,s,r,a=be,o=be,l,c=pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ts=class extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_n=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(M,m,f,b,R,y,S,T,P,x,E){let I=y/P,N=S/x,V=y/2,G=S/2,U=T/2,H=P+1,$=x+1,Q=0,w=0,B=new D;for(let z=0;z<$;z++){let J=z*N-G;for(let ct=0;ct<H;ct++){let ht=ct*I-V;B[M]=ht*b,B[m]=J*R,B[f]=U,c.push(B.x,B.y,B.z),B[M]=0,B[m]=0,B[f]=T>0?1:-1,h.push(B.x,B.y,B.z),d.push(ct/P),d.push(1-z/x),Q+=1}}for(let z=0;z<x;z++)for(let J=0;J<P;J++){let ct=u+J+H*z,ht=u+J+H*(z+1),Ft=u+(J+1)+H*(z+1),Lt=u+(J+1)+H*z;l.push(ct,ht,Lt),l.push(ht,Ft,Lt),w+=6}o.addGroup(p,w,E),p+=w,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Es=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,M=[],m=n/2,f=0;b(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(p,2));function b(){let y=new D,S=new D,T=0,P=(e-t)/n;for(let x=0;x<=r;x++){let E=[],I=x/r,N=I*(e-t)+t;for(let V=0;V<=s;V++){let G=V/s,U=G*l+o,H=Math.sin(U),$=Math.cos(U);S.x=N*H,S.y=-I*n+m,S.z=N*$,d.push(S.x,S.y,S.z),y.set(H,P,$).normalize(),u.push(y.x,y.y,y.z),p.push(G,1-I),E.push(g++)}M.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let I=M[E][x],N=M[E+1][x],V=M[E+1][x+1],G=M[E][x+1];(t>0||E!==0)&&(h.push(I,N,G),T+=3),(e>0||E!==r-1)&&(h.push(N,V,G),T+=3)}c.addGroup(f,T,0),f+=T}function R(y){let S=g,T=new ft,P=new D,x=0,E=y===!0?t:e,I=y===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*I,0),u.push(0,I,0),p.push(.5,.5),g++;let N=g;for(let V=0;V<=s;V++){let U=V/s*l+o,H=Math.cos(U),$=Math.sin(U);P.x=E*$,P.y=m*I,P.z=E*H,d.push(P.x,P.y,P.z),u.push(0,I,0),T.x=H*.5+.5,T.y=$*.5*I+.5,p.push(T.x,T.y),g++}for(let V=0;V<s;V++){let G=S+V,U=N+V;y===!0?h.push(U,U+1,G):h.push(U+1,U,G),x+=3}c.addGroup(f,x,y===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var He=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new fe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gi=class extends He{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xr=class extends Gi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mc=new D,Sc=new D,No=new Sl,Uo=new Sl,Fo=new Sl,qr=class extends He{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sc.subVectors(s[0],s[1]).add(s[0]),c=Sc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),No.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),Uo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),Fo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Uo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Fo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(No.calc(l),Uo.calc(l),Fo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function nd(i,t){let e=1-i;return e*e*t}function id(i,t){return 2*(1-i)*i*t}function sd(i,t){return i*i*t}function fs(i,t,e,n){return nd(i,t)+id(i,e)+sd(i,n)}function rd(i,t){let e=1-i;return e*e*e*t}function ad(i,t){let e=1-i;return 3*e*e*i*t}function od(i,t){return 3*(1-i)*i*i*t}function ld(i,t){return i*i*i*t}function ps(i,t,e,n,s){return rd(i,t)+ad(i,e)+od(i,n)+ld(i,s)}var ws=class extends He{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends He{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y),ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},As=class extends He{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends He{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends He{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends He{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y),fs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends He{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(bc(o,l.x,c.x,h.x,d.x),bc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Go=Object.freeze({__proto__:null,ArcCurve:Xr,CatmullRomCurve3:qr,CubicBezierCurve:ws,CubicBezierCurve3:Yr,EllipseCurve:Gi,LineCurve:As,LineCurve3:$r,QuadraticBezierCurve:Cs,QuadraticBezierCurve3:Jr,SplineCurve:Rs}),Zr=class extends He{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Go[s.type]().fromJSON(s))}return this}},Ps=class extends Zr{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new As(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cs(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ws(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Gi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wi=class extends Ps{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ps().fromJSON(s))}return this}};function cd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Mh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=pd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let p=i[u],g=i[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Is(r,a,e,o,l,c,0),a}function Mh(i,t,e,n,s){let r;if(s===Ed(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Tc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Tc(a/n|0,i[a],i[a+1],r);return r&&Xi(r,r.next)&&(Ds(r),r=r.next),r}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xi(e,e.next)||me(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,a){if(!i)return;!a&&r&&vd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ud(i,n,s,r):hd(i)){t.push(l.i,i.i,c.i),Ds(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=dd(ri(i),t),Is(i,t,e,n,s,r,2)):a===2&&fd(i,t,e,n,s,r):Is(ri(i),t,e,n,s,r,1);break}}}function hd(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&hs(s,o,r,l,a,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ud(i,t,e,n){let s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),f=Wo(p,g,t,e,n),b=Wo(M,m,t,e,n),R=i.prevZ,y=i.nextZ;for(;R&&R.z>=f&&y&&y.z<=b;){if(R.x>=p&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&hs(o,h,l,d,c,u,R.x,R.y)&&me(R.prev,R,R.next)>=0||(R=R.prevZ,y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&hs(o,h,l,d,c,u,y.x,y.y)&&me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;R&&R.z>=f;){if(R.x>=p&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&hs(o,h,l,d,c,u,R.x,R.y)&&me(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&hs(o,h,l,d,c,u,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Xi(n,s)&&bh(n,e,e.next,s)&&Ls(n,s)&&Ls(s,n)&&(t.push(n.i,e.i,s.i),Ds(e),Ds(e.next),e=i=s),e=e.next}while(e!==i);return ri(e)}function fd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sd(a,o)){let l=Th(a,o);a=ri(a,a.next),l=ri(l,l.next),Is(a,t,e,n,s,r,0),Is(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function pd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Mh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Md(c))}s.sort(md);for(let r=0;r<s.length;r++)e=gd(s[r],e);return e}function md(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gd(i,t){let e=_d(i,t);if(!e)return t;let n=Th(e,i);return ri(n,n.next),ri(e,e.next)}function _d(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Xi(i,e))return e;do{if(Xi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ls(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&xd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function xd(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function vd(i,t,e,n){let s=i;do s.z===0&&(s.z=Wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yd(s)}function yd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Md(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function hs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Sh(i,t,e,n,s,r,a,o)}function Sd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bd(i,t)&&(Ls(i,t)&&Ls(t,i)&&Td(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Xi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xi(i,t){return i.x===t.x&&i.y===t.y}function bh(i,t,e,n){let s=Er(me(i,t,e)),r=Er(me(i,t,n)),a=Er(me(e,n,i)),o=Er(me(e,n,t));return!!(s!==r&&a!==o||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||a===0&&Tr(e,i,n)||o===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function bd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ls(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Td(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Th(i,t){let e=Xo(i.i,i.x,i.y),n=Xo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tc(i,t,e,n){let s=Xo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ed(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qo=class{static triangulate(t,e,n=2){return cd(t,e,n)}},ii=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ec(t),wc(n,t);let a=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wc(n,e[l]);let o=qo.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ec(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ns=class i extends Fe{constructor(t=new Wi([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:wd,R,y=!1,S,T,P,x;if(f){R=f.getSpacedPoints(h),y=!0,u=!1;let nt=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(h,nt),T=new D,P=new D,x=new D}u||(m=0,p=0,g=0,M=0);let E=o.extractPoints(c),I=E.shape,N=E.holes;if(!ii.isClockWise(I)){I=I.reverse();for(let nt=0,lt=N.length;nt<lt;nt++){let at=N[nt];ii.isClockWise(at)&&(N[nt]=at.reverse())}}function G(nt){let at=10000000000000001e-36,L=nt[0];for(let q=1;q<=nt.length;q++){let rt=q%nt.length,pt=nt[rt],wt=pt.x-L.x,Rt=pt.y-L.y,C=wt*wt+Rt*Rt,kt=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(L.x),Math.abs(L.y)),Gt=at*kt*kt;if(C<=Gt){nt.splice(rt,1),q--;continue}L=pt}}G(I),N.forEach(G);let U=N.length,H=I;for(let nt=0;nt<U;nt++){let lt=N[nt];I=I.concat(lt)}function $(nt,lt,at){return lt||qt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(lt,at)}let Q=I.length;function w(nt,lt,at){let L,q,rt,pt=nt.x-lt.x,wt=nt.y-lt.y,Rt=at.x-nt.x,C=at.y-nt.y,kt=pt*pt+wt*wt,Gt=pt*C-wt*Rt;if(Math.abs(Gt)>Number.EPSILON){let A=Math.sqrt(kt),_=Math.sqrt(Rt*Rt+C*C),k=lt.x-wt/A,Y=lt.y+pt/A,j=at.x-C/_,ut=at.y+Rt/_,mt=((j-k)*C-(ut-Y)*Rt)/(pt*C-wt*Rt);L=k+pt*mt-nt.x,q=Y+wt*mt-nt.y;let tt=L*L+q*q;if(tt<=2)return new ft(L,q);rt=Math.sqrt(tt/2)}else{let A=!1;pt>Number.EPSILON?Rt>Number.EPSILON&&(A=!0):pt<-Number.EPSILON?Rt<-Number.EPSILON&&(A=!0):Math.sign(wt)===Math.sign(C)&&(A=!0),A?(L=-wt,q=pt,rt=Math.sqrt(kt)):(L=pt,q=wt,rt=Math.sqrt(kt/2))}return new ft(L/rt,q/rt)}let B=[];for(let nt=0,lt=H.length,at=lt-1,L=nt+1;nt<lt;nt++,at++,L++)at===lt&&(at=0),L===lt&&(L=0),B[nt]=w(H[nt],H[at],H[L]);let z=[],J,ct=B.concat();for(let nt=0,lt=U;nt<lt;nt++){let at=N[nt];J=[];for(let L=0,q=at.length,rt=q-1,pt=L+1;L<q;L++,rt++,pt++)rt===q&&(rt=0),pt===q&&(pt=0),J[L]=w(at[L],at[rt],at[pt]);z.push(J),ct=ct.concat(J)}let ht;if(m===0)ht=ii.triangulateShape(H,N);else{let nt=[],lt=[];for(let at=0;at<m;at++){let L=at/m,q=p*Math.cos(L*Math.PI/2),rt=g*Math.sin(L*Math.PI/2)+M;for(let pt=0,wt=H.length;pt<wt;pt++){let Rt=$(H[pt],B[pt],rt);dt(Rt.x,Rt.y,-q),L===0&&nt.push(Rt)}for(let pt=0,wt=U;pt<wt;pt++){let Rt=N[pt];J=z[pt];let C=[];for(let kt=0,Gt=Rt.length;kt<Gt;kt++){let A=$(Rt[kt],J[kt],rt);dt(A.x,A.y,-q),L===0&&C.push(A)}L===0&&lt.push(C)}}ht=ii.triangulateShape(nt,lt)}let Ft=ht.length,Lt=g+M;for(let nt=0;nt<Q;nt++){let lt=u?$(I[nt],ct[nt],Lt):I[nt];y?(P.copy(S.normals[0]).multiplyScalar(lt.x),T.copy(S.binormals[0]).multiplyScalar(lt.y),x.copy(R[0]).add(P).add(T),dt(x.x,x.y,x.z)):dt(lt.x,lt.y,0)}for(let nt=1;nt<=h;nt++)for(let lt=0;lt<Q;lt++){let at=u?$(I[lt],ct[lt],Lt):I[lt];y?(P.copy(S.normals[nt]).multiplyScalar(at.x),T.copy(S.binormals[nt]).multiplyScalar(at.y),x.copy(R[nt]).add(P).add(T),dt(x.x,x.y,x.z)):dt(at.x,at.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let lt=nt/m,at=p*Math.cos(lt*Math.PI/2),L=g*Math.sin(lt*Math.PI/2)+M;for(let q=0,rt=H.length;q<rt;q++){let pt=$(H[q],B[q],L);dt(pt.x,pt.y,d+at)}for(let q=0,rt=N.length;q<rt;q++){let pt=N[q];J=z[q];for(let wt=0,Rt=pt.length;wt<Rt;wt++){let C=$(pt[wt],J[wt],L);y?dt(C.x,C.y+R[h-1].y,R[h-1].x+at):dt(C.x,C.y,d+at)}}}Ht(),Z();function Ht(){let nt=s.length/3;if(u){let lt=0,at=Q*lt;for(let L=0;L<Ft;L++){let q=ht[L];Nt(q[2]+at,q[1]+at,q[0]+at)}lt=h+m*2,at=Q*lt;for(let L=0;L<Ft;L++){let q=ht[L];Nt(q[0]+at,q[1]+at,q[2]+at)}}else{for(let lt=0;lt<Ft;lt++){let at=ht[lt];Nt(at[2],at[1],at[0])}for(let lt=0;lt<Ft;lt++){let at=ht[lt];Nt(at[0]+Q*h,at[1]+Q*h,at[2]+Q*h)}}n.addGroup(nt,s.length/3-nt,0)}function Z(){let nt=s.length/3,lt=0;et(H,lt),lt+=H.length;for(let at=0,L=N.length;at<L;at++){let q=N[at];et(q,lt),lt+=q.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,lt){let at=nt.length;for(;--at>=0;){let L=at,q=at-1;q<0&&(q=nt.length-1);for(let rt=0,pt=h+m*2;rt<pt;rt++){let wt=Q*rt,Rt=Q*(rt+1),C=lt+L+wt,kt=lt+q+wt,Gt=lt+q+Rt,A=lt+L+Rt;gt(C,kt,Gt,A)}}}function dt(nt,lt,at){l.push(nt),l.push(lt),l.push(at)}function Nt(nt,lt,at){zt(nt),zt(lt),zt(at);let L=s.length/3,q=b.generateTopUV(n,s,L-3,L-2,L-1);Qt(q[0]),Qt(q[1]),Qt(q[2])}function gt(nt,lt,at,L){zt(nt),zt(lt),zt(L),zt(lt),zt(at),zt(L);let q=s.length/3,rt=b.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);Qt(rt[0]),Qt(rt[1]),Qt(rt[3]),Qt(rt[1]),Qt(rt[2]),Qt(rt[3])}function zt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Qt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ad(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Go[s.type]().fromJSON(s)),new i(n,t.options)}},wd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,a),new ft(o,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-d),new ft(u,1-g),new ft(M,1-f)]:[new ft(o,1-l),new ft(h,1-d),new ft(p,1-g),new ft(m,1-f)]}};function Ad(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Us=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let b=f*u-a;for(let R=0;R<c;R++){let y=R*d-r;g.push(y,-b,0),M.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let R=b+c*f,y=b+c*(f+1),S=b+1+c*(f+1),T=b+1+c*f;p.push(R,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fs=class i extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,p=new D,g=new ft;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let f=0;f<n;f++){let b=f+m,R=b,y=b+n+1,S=b+n+2,T=b+1;o.push(R,y,T),o.push(y,S,T)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ai=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let b=[],R=f/n,y=a+R*o,S=t*Math.cos(y),T=Math.sqrt(t*t-S*S),P=0;f===0&&a===0?P=.5/e:f===n&&l===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){let E=x/e,I=s+E*r;d.x=-T*Math.cos(I),d.y=S,d.z=T*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(E+P,1-R),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let R=h[f][b+1],y=h[f][b],S=h[f+1][b],T=h[f+1][b+1];(f!==0||a>0)&&p.push(R,y,T),(f!==n-1||l<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Os=class i extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new D,p=new D,g=new D;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let b=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,R=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(f,b,y),l.push(b,R,y)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ac(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ac(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Le(i){let t={};for(let e=0;e<i.length;e++){let n=ui(i[e]);for(let s in n)t[s]=n[s]}return t}function Ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Eh={clone:ui,merge:Le},Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kr=class extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bs=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qr=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jr=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Oo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends Hn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vo,endingEnd:Vo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=t,o=2*e-n;break;case Ho:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ko:a=t,l=2*n-e;break;case Ho:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-u*m+2*u*M-u*g,b=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,R=(-1-p)*m+(1.5+p)*M+.5*g,y=p*m-p*M;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+b*a[c+S]+R*a[l+S]+y*a[d+S];return r}},ea=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},na=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ia=class extends Hn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],f=p*u+g*2,b=d[f],R=d[f+1],y=t*u+g*2,S=h[y],T=h[y+1],P=Ld(n,e,b,S,s);r[g]=wh(P,M,R,T,m)}return r}};function wh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Id(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ld(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=wh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Id(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wi(e,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wi(t.times,Array),values:wi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Oo(t.settings)&&(n.settings={inTangents:wi(t.settings.inTangents,Array),outTangents:wi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ms:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case zo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Oo(this.settings)&&(Cc(this.settings.inTangents,t),Cc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=zr;var Gn=class extends We{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ms;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="color";var ra=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="number";var aa=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends We{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends We{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=ms;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};oa.prototype.ValueTypeName="vector";var Pr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Rc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Rc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var la=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ah=new la,qi=class{constructor(t){this.manager=t!==void 0?t:Ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai=new WeakMap,ca=class extends qi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Pr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ai.get(a);d===void 0&&(d=[],Ai.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=Ui("img");function l(){h(),e&&e(this);let d=Ai.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}Ai.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Pr.remove(`image:${t}`);let u=Ai.get(this)||[];for(let p=0;p<u.length;p++){let g=u[p];g.onError&&g.onError(d)}Ai.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Vs=class extends qi{constructor(t){super(t)}load(t,e,n,s){let r=new Ue,a=new ca(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Yi=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ks=class extends Yi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bo=new fe,Pc=new D,Ic=new D,Hs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ze,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ni||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wr=new D,Ar=new gn,dn=new D,Gs=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Ar,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Ar,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},On=new D,Lc=new ft,Dc=new ft,Ee=class extends Gs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Dc),e.subVectors(Dc,Lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yo=class extends Hs{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0}},Ws=class extends Yi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$i=class extends Gs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$o=class extends Hs{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Yi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ci=-90,Ri=1,ha=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(Ci,Ri,t,e);s.layers=this.layers,this.add(s);let r=new Ee(Ci,Ri,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Ci,Ri,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Ci,Ri,t,e);o.layers=this.layers,this.add(o);let l=new Ee(Ci,Ri,t,e);l.layers=this.layers,this.add(l);let c=new Ee(Ci,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ni)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ua=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tl="\\[\\]\\.:\\/",Dd=new RegExp("["+Tl+"]","g"),El="[^"+Tl+"]",Nd="[^"+Tl.replace("\\.","")+"]",Ud=/((?:WC+[\/:])*)/.source.replace("WC",El),Fd=/(WCOD+)?/.source.replace("WCOD",Nd),Od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),Bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),zd=new RegExp("^"+Ud+Fd+Od+Bd+"$"),Vd=["material","materials","bones","map"],Jo=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dd,"")}static parseTrackName(t){let e=zd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Jo;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W0=new Float32Array(1);var Nc=new fe,Xs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(t,e=!0,n=[]){return Zo(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Zo(t[s],this,n,e);return n.sort(Uc),n}};function Uc(i,t){return i.distance-t.distance}function Zo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Zo(r[a],t,e,!0)}}var Il=class Il{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Il.prototype.isMatrix2=!0;var Ko=Il;function wl(i,t,e,n){let s=kd(n);switch(e){case gl:return i*t;case xl:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case Jn:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case _l:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case Js:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Aa:case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case js:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qa:case Ya:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tr:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(i){switch(i){case ze:case dl:return{byteLength:1,components:1};case Qi:case fl:case ln:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case an:case ga:case on:return{byteLength:4,components:1};case pl:case ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:$d,alphatest_pars_fragment:Jd,aomap_fragment:Zd,aomap_pars_fragment:Kd,batching_pars_vertex:Qd,batching_vertex:jd,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:af,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:xf,emissivemap_fragment:vf,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:bf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Ef,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:Vf,lights_phong_pars_fragment:kf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,lightprobes_pars_fragment:Yf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Kf,map_fragment:Qf,map_pars_fragment:jf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:bp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Pp,skinbase_vertex:Ip,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Np,specularmap_fragment:Up,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:Bp,transmission_fragment:zp,transmission_pars_fragment:Vp,uv_pars_fragment:kp,uv_pars_vertex:Hp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:$p,cube_vert:Jp,cube_frag:Zp,depth_vert:Kp,depth_frag:Qp,distance_vert:jp,distance_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:_m,meshtoon_frag:xm,points_vert:vm,points_frag:ym,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:bm,sprite_frag:Tm},St={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},yn={basic:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Le([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Le([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Le([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Le([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Le([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Le([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Le([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Le([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Le([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Le([St.lights,St.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};yn.physical={uniforms:Le([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var no={r:0,b:0,g:0},Em=new fe,Zh=new Yt;Zh.set(-1,0,0,0,1,0,0,0,1);function wm(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let y=b.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(b){let R=!1,y=p(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,R){let y=p(R);y&&(y.isCubeTexture||y.mapping===Ys)?(c===void 0&&(c=new Ae(new _n(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:ui(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zh),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==re,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ae(new Us(2,2),new Ge({name:"BackgroundMaterial",uniforms:ui(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,R){b.getRGB(no,bl(i)),e.buffers.color.setClear(no.r,no.g,no.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:f}}function Am(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,V,G,U,H){let $=!1,Q=d(N,U,G,V);r!==Q&&(r=Q,c(r.object)),$=p(N,U,G,H),$&&g(N,U,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(N,V,G,U),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,V,G,U){let H=U.wireframe===!0,$=n[V.id];$===void 0&&($={},n[V.id]=$);let Q=N.isInstancedMesh===!0?N.id:0,w=$[Q];w===void 0&&(w={},$[Q]=w);let B=w[G.id];B===void 0&&(B={},w[G.id]=B);let z=B[H];return z===void 0&&(z=u(l()),B[H]=z),z}function u(N){let V=[],G=[],U=[];for(let H=0;H<e;H++)V[H]=0,G[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:U,object:N,attributes:{},index:null}}function p(N,V,G,U){let H=r.attributes,$=V.attributes,Q=0,w=G.getAttributes();for(let B in w)if(w[B].location>=0){let J=H[B],ct=$[B];if(ct===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ct=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ct=N.instanceColor)),J===void 0||J.attribute!==ct||ct&&J.data!==ct.data)return!0;Q++}return r.attributesNum!==Q||r.index!==U}function g(N,V,G,U){let H={},$=V.attributes,Q=0,w=G.getAttributes();for(let B in w)if(w[B].location>=0){let J=$[B];J===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let ct={};ct.attribute=J,J&&J.data&&(ct.data=J.data),H[B]=ct,Q++}r.attributes=H,r.attributesNum=Q,r.index=U}function M(){let N=r.newAttributes;for(let V=0,G=N.length;V<G;V++)N[V]=0}function m(N){f(N,0)}function f(N,V){let G=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;G[N]=1,U[N]===0&&(i.enableVertexAttribArray(N),U[N]=1),H[N]!==V&&(i.vertexAttribDivisor(N,V),H[N]=V)}function b(){let N=r.newAttributes,V=r.enabledAttributes;for(let G=0,U=V.length;G<U;G++)V[G]!==N[G]&&(i.disableVertexAttribArray(G),V[G]=0)}function R(N,V,G,U,H,$,Q){Q===!0?i.vertexAttribIPointer(N,V,G,H,$):i.vertexAttribPointer(N,V,G,U,H,$)}function y(N,V,G,U){M();let H=U.attributes,$=G.getAttributes(),Q=V.defaultAttributeValues;for(let w in $){let B=$[w];if(B.location>=0){let z=H[w];if(z===void 0&&(w==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),w==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),z!==void 0){let J=z.normalized,ct=z.itemSize,ht=t.get(z);if(ht===void 0)continue;let Ft=ht.buffer,Lt=ht.type,Ht=ht.bytesPerElement,Z=Lt===i.INT||Lt===i.UNSIGNED_INT||z.gpuType===ga;if(z.isInterleavedBufferAttribute){let et=z.data,dt=et.stride,Nt=z.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<B.locationSize;gt++)f(B.location+gt,et.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<B.locationSize;gt++)m(B.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let gt=0;gt<B.locationSize;gt++)R(B.location+gt,ct/B.locationSize,Lt,J,dt*Ht,(Nt+ct/B.locationSize*gt)*Ht,Z)}else{if(z.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)f(B.location+et,z.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let et=0;et<B.locationSize;et++)m(B.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let et=0;et<B.locationSize;et++)R(B.location+et,ct/B.locationSize,Lt,J,ct*Ht,ct/B.locationSize*et*Ht,Z)}}else if(Q!==void 0){let J=Q[w];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}b()}function S(){E();for(let N in n){let V=n[N];for(let G in V){let U=V[G];for(let H in U){let $=U[H];for(let Q in $)h($[Q].object),delete $[Q];delete U[H]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let V=n[N.id];for(let G in V){let U=V[G];for(let H in U){let $=U[H];for(let Q in $)h($[Q].object),delete $[Q];delete U[H]}}delete n[N.id]}function P(N){for(let V in n){let G=n[V];for(let U in G){let H=G[U];if(H[N.id]===void 0)continue;let $=H[N.id];for(let Q in $)h($[Q].object),delete $[Q];delete H[N.id]}}}function x(N){for(let V in n){let G=n[V],U=N.isInstancedMesh===!0?N.id:0,H=G[U];if(H!==void 0){for(let $ in H){let Q=H[$];for(let w in Q)h(Q[w].object),delete Q[w];delete H[$]}delete G[U],Object.keys(G).length===0&&delete n[V]}}}function E(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function Cm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Je&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let x=P===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ze&&P!==on&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:T}}function Pm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new nn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,R=b*4,y=f.clippingState||null;l.value=y,y=h(g,u,R,p);for(let S=0;S!==R;++S)y[S]=e[S];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,y=p;R!==M;++R,y+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var es=4,Im=6,Lm=20,Dm=256,er=new $i,Ch=new Kt,Ll=null,Dl=0,Nl=0,Ul=!1,Nm=new D,di=new D,so=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Nm}=r;Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ll,Dl,Nl),this._renderer.xr.enabled=Ul,t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qn||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:ln,format:Je,colorSpace:gs,depthBuffer:!1},s=Rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Um(r)),this._blurMaterial=Om(r,t,e),this._ggxMaterial=Fm(r,t,e)}return s}_compileMaterial(t){let e=new Ae(new Fe,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s,r){let l=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ch),d.toneMapping=rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new _n,new Rn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Ch),f=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;ts(s,y*S,R>2?S:0,S,S),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qn||t.mapping===ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-es?n-g+es:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,ts(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,er),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ts(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,er)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-es?s-this._lodMax+es:0),u=4*(this._cubeSize-h);ts(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,er)}};function Um(i){let t=[],e=[],n=i,s=i-es+1+Im;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let b=f%3*2/3-1,R=f>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(y,p*u*f);for(let S=0;S<u;S++){let T=h[S*2]*2-1,P=h[S*2+1]*2-1;f===0?di.set(1,P,T):f===1?di.set(-T,1,-P):f===2?di.set(-T,P,1):f===3?di.set(-1,P,-T):f===4?di.set(-T,-1,P):di.set(T,P,-1),di.toArray(M,(f*u+S)*p)}}let m=new Fe;m.setAttribute("position",new Ye(g,p)),m.setAttribute("outputDirection",new Ye(M,p)),e.push(new Ae(m,null)),n>es&&n--}return{lodMeshes:e,sizeLods:t}}function Rh(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fm(i,t,e){return new Ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Om(i,t,e){return new Ge({name:"SphericalGaussianBlur",defines:{SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ph(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ih(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ro=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:xn});r.uniforms.tEquirect.value=e;let a=new Ae(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=we),new ha(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Bm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===fa||p===pa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new ro(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===fa||p===pa,M=p===qn||p===ci;if(g||M){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new so(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new so(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===fa?u.mapping=qn:p===pa&&(u.mapping=ci),u}function l(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&si("WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let R=0,y=b.length;R<y;R+=3){let S=b[R+0],T=b[R+1],P=b[R+2];u.push(S,T,T,P,P,S)}}else{let b=g.array;M=g.version;for(let R=0,y=b.length/3-1;R<y;R+=3){let S=R+0,T=R+1,P=R+2;u.push(S,T,T,P,P,S)}}let m=new(g.count>=65535?Ms:ys)(u,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function km(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Hm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*d),P=new xs(T,y,S,d);P.type=on,P.needsUpdate=!0;let x=R*4;for(let I=0;I<d;I++){let N=m[I],V=f[I],G=b[I],U=y*S*4*I;for(let H=0;H<N.count;H++){let $=H*x;p===!0&&(s.fromBufferAttribute(N,H),T[U+$+0]=s.x,T[U+$+1]=s.y,T[U+$+2]=s.z,T[U+$+3]=0),g===!0&&(s.fromBufferAttribute(V,H),T[U+$+4]=s.x,T[U+$+5]=s.y,T[U+$+6]=s.z,T[U+$+7]=0),M===!0&&(s.fromBufferAttribute(G,H),T[U+$+8]=s.x,T[U+$+9]=s.y,T[U+$+10]=s.z,T[U+$+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new ft(y,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Wm(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Xm={[rl]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[ll]:"CUSTOM_TONE_MAPPING"};function qm(i,t,e,n,s,r){let a=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Fe;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));let h=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(c,h),u=new $i(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,b=[],R=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<b.length;T++){let P=b[T];P.setSize&&P.setSize(y,S)}},this.setEffects=function(y){b=y,R=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new Be(S,T,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Be(S,T,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<b.length;P++){let x=b[P];x.setSize&&x.setSize(S,T)}},this.begin=function(y,S){if(M||y.toneMapping===rn&&b.length===0)return!1;if(f=S,S!==null){let T=S.width,P=S.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return R===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=rn,!0},this.hasRenderPass=function(){return R},this.end=function(y,S){y.toneMapping=m,M=!0;let T=a,P=o;for(let x=0;x<b.length;x++){let E=b[x];E.enabled!==!1&&(E.render(y,P,T,S),E.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},ee.getTransfer(p)===re&&(h.defines.SRGB_TRANSFER="");let x=Xm[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(f),y.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Kh=new Ue,Bl=new kn(1,1),Qh=new xs,jh=new Hr,tu=new bs,Lh=[],Dh=[],Nh=new Float32Array(16),Uh=new Float32Array(9),Fh=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),ye(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),ye(e,n)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),ye(e,n)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=e.isReversedDepthBuffer()?to:ja,r=Bl):r=Kh,e.setTexture2D(t||r,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tu,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function dg(i){switch(i){case 5126:return Ym;case 35664:return $m;case 35665:return Jm;case 35666:return Zm;case 35674:return Km;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(i,t){i.uniform1fv(this.addr,t)}function pg(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function mg(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function gg(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function _g(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function Mg(i,t){i.uniform2iv(this.addr,t)}function Sg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Ag(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bl:a=Kh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jh,r[a])}function Pg(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tu,r[a])}function Ig(i,t,e){let n=this.cache,s=t.length,r=lo(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function Lg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return Eg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}var zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}},Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function Dg(i,t,e){let n=i.name,s=n.length;for(Fl.lastIndex=0;;){let r=Fl.exec(n),a=Fl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new zl(o,i,t):new Vl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new kl(o),Oh(e,d)),e=d}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Dg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Ug=0;function Fg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zh=new Yt;function Og(i){ee._getMatrix(zh,ee.workingColorSpace,i);let t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case _s:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fg(i.getShaderSource(t),o)}else return r}function Bg(i,t){let e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var zg={[rl]:"Linear",[al]:"Reinhard",[ol]:"Cineon",[qs]:"ACESFilmic",[cl]:"AgX",[hl]:"Neutral",[ll]:"Custom"};function Vg(i,t){let e=zg[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var io=new D;function kg(){ee.getLuminanceCoefficients(io);let i=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(Xg,Yg)}var qg=new Map;function Yg(i,t){let e=Zt[t];if(e===void 0){let n=qg.get(t);if(n!==void 0)e=Zt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hl(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace($g,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Zg={[oi]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function Kg(i){return Zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qg={[qn]:"ENVMAP_TYPE_CUBE",[ci]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE_UV"};function jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var t0={[ci]:"ENVMAP_MODE_REFRACTION"};function e0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n0={[sl]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function i0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n0[i.combine]||"ENVMAP_BLENDING_NONE"}function s0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Kg(e),c=jg(e),h=e0(e),d=i0(e),u=s0(e),p=Hg(e),g=Gg(r),M=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==rn?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=Hl(a),a=kh(a,e),a=Hh(a,e),o=Hl(o),o=kh(o,e),o=Hh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=b+m+a,y=b+f+o,S=Bh(s,s.VERTEX_SHADER,R),T=Bh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(N){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(T)||"",H=V.trim(),$=G.trim(),Q=U.trim(),w=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(w=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,T);else{let z=Vh(s,S,"vertex"),J=Vh(s,T,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+z+`
`+J)}else H!==""?Xt("WebGLProgram: Program Info Log:",H):($===""||Q==="")&&(B=!1);B&&(N.diagnostics={runnable:w,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(S),s.deleteShader(T),x=new ns(s,M),E=Wg(s,M)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,Ng)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}var a0=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wl(t),e.set(t,n)),n}},Wl=class{constructor(t){this.id=a0++,this.code=t,this.usedTimes=0}};function o0(i){return i===Jn||i===js||i===tr}function l0(i,t,e,n,s,r){let a=new zi,o=new Gl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,E,I,N,V,G){let U=N.fog,H=V.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,w=t.get(x.envMap||$,Q),B=w&&w.mapping===Ys?w.image.height:null,z=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=J!==void 0?J.length:0,ht=0;H.morphAttributes.position!==void 0&&(ht=1),H.morphAttributes.normal!==void 0&&(ht=2),H.morphAttributes.color!==void 0&&(ht=3);let Ft,Lt,Ht,Z;if(z){let le=yn[z];Ft=le.vertexShader,Lt=le.fragmentShader}else{Ft=x.vertexShader,Lt=x.fragmentShader;let le=o.getVertexShaderStage(x),ie=o.getFragmentShaderStage(x);o.update(x,le,ie),Ht=le.id,Z=ie.id}let et=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Nt=V.isInstancedMesh===!0,gt=V.isBatchedMesh===!0,zt=!!x.map,Qt=!!x.matcap,nt=!!w,lt=!!x.aoMap,at=!!x.lightMap,L=!!x.bumpMap&&x.wireframe===!1,q=!!x.normalMap,rt=!!x.displacementMap,pt=!!x.emissiveMap,wt=!!x.metalnessMap,Rt=!!x.roughnessMap,C=x.anisotropy>0,kt=x.clearcoat>0,Gt=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,Y=x.transmission>0,j=C&&!!x.anisotropyMap,ut=kt&&!!x.clearcoatMap,mt=kt&&!!x.clearcoatNormalMap,tt=kt&&!!x.clearcoatRoughnessMap,st=_&&!!x.iridescenceMap,_t=_&&!!x.iridescenceThicknessMap,Ot=k&&!!x.sheenColorMap,Mt=k&&!!x.sheenRoughnessMap,xt=!!x.specularMap,Bt=!!x.specularColorMap,Wt=!!x.specularIntensityMap,$t=Y&&!!x.transmissionMap,O=Y&&!!x.thicknessMap,vt=!!x.gradientMap,it=!!x.alphaMap,yt=x.alphaTest>0,Et=!!x.alphaHash,ot=!!x.extensions,Vt=rn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Dt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:Lt,defines:x.defines,customVertexShaderID:Ht,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:gt,batchingColor:gt&&V._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&V.instanceColor!==null,instancingMorph:Nt&&V.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Qt,envMap:nt,envMapMode:nt&&w.mapping,envMapCubeUVHeight:B,aoMap:lt,lightMap:at,bumpMap:L,normalMap:q,displacementMap:rt,emissiveMap:pt,normalMapObjectSpace:q&&x.normalMapType===oh,normalMapTangentSpace:q&&x.normalMapType===Qa,packedNormalMap:q&&x.normalMapType===Qa&&o0(x.normalMap.format),metalnessMap:wt,roughnessMap:Rt,anisotropy:C,anisotropyMap:j,clearcoat:kt,clearcoatMap:ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:tt,dispersion:Gt,retroreflection:A,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:_t,sheen:k,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:xt,specularColorMap:Bt,specularIntensityMap:Wt,transmission:Y,transmissionMap:$t,thicknessMap:O,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Et,combine:x.combine,mapUv:zt&&g(x.map.channel),aoMapUv:lt&&g(x.aoMap.channel),lightMapUv:at&&g(x.lightMap.channel),bumpMapUv:L&&g(x.bumpMap.channel),normalMapUv:q&&g(x.normalMap.channel),displacementMapUv:rt&&g(x.displacementMap.channel),emissiveMapUv:pt&&g(x.emissiveMap.channel),metalnessMapUv:wt&&g(x.metalnessMap.channel),roughnessMapUv:Rt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ut&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(x.sheenRoughnessMap.channel),specularMapUv:xt&&g(x.specularMap.channel),specularColorMapUv:Bt&&g(x.specularColorMap.channel),specularIntensityMapUv:Wt&&g(x.specularIntensityMap.channel),transmissionMapUv:$t&&g(x.transmissionMap.channel),thicknessMapUv:O&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(q||C),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(zt||it),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&q===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ht,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$e,flipSided:x.side===Oe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(E,x),b(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let E=p[x.type],I;if(E){let N=yn[E];I=Eh.clone(N.uniforms)}else I=x.uniforms;return I}function y(x,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new r0(i,E,x,s),c.push(I),h.set(E,I)),I}function S(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:P}}function c0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,m,f){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function l(u,p,g,M,m,f,b){b.reversedDepth===!0&&(m=-m);let R=o(u,p,g,M,m,f);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,p,g,M,m,f){let b=o(u,p,g,M,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||h0),n.length>1&&n.sort(p||Xh),s.length>1&&s.sort(p||Xh)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function u0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function f0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g0(i){let t=new d0,e=f0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new fe,a=new fe;function o(c){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,b=0,R=0,y=0,S=0,T=0,P=0,x=0,E=0,I=0;c.sort(m0);for(let V=0,G=c.length;V<G;V++){let U=c[V],H=U.color,$=U.intensity,Q=U.distance,w=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Jn?w=U.shadow.map.texture:w=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=H.r*$,d+=H.g*$,u+=H.b*$;else if(U.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(U.sh.coefficients[B],$);I++}else if(U.isSunLight){let B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let z=U.shadow,J=e.get(U);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=w;let ct=z.getViewportCount();for(let ht=0;ht<ct;ht++)n.sunShadowMatrix[M+ht]=z.getMatrix(ht),n.sunShadowCascade[M+ht]=z._cascadeData[ht];M+=ct,g++}n.sun[p]=B,p++}else if(U.isDirectionalLight){let B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let z=U.shadow,J=e.get(U);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=w,n.directionalShadowMatrix[m]=U.shadow.matrix,S++}n.directional[m]=B,m++}else if(U.isSpotLight){let B=t.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(H).multiplyScalar($),B.distance=Q,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,n.spot[b]=B;let z=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,z.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[b]=z.matrix,U.castShadow){let J=e.get(U);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.spotShadow[b]=J,n.spotShadowMap[b]=w,P++}b++}else if(U.isRectAreaLight){let B=t.get(U);B.color.copy(H).multiplyScalar($),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=B,R++}else if(U.isPointLight){let B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){let z=U.shadow,J=e.get(U);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,n.pointShadow[f]=J,n.pointShadowMap[f]=w,n.pointShadowMatrix[f]=U.shadow.matrix,T++}n.point[f]=B,f++}else if(U.isHemisphereLight){let B=t.get(U);B.skyColor.copy(U.color).multiplyScalar($),B.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[y]=B,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==b||N.rectAreaLength!==R||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==P||N.numSpotMaps!==x||N.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=f,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,N.sunLength=p,N.directionalLength=m,N.pointLength=f,N.spotLength=b,N.rectAreaLength=R,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=P,N.numSpotMaps=x,N.numLightProbes=I,n.version=p0++)}function l(c,h){let d=0,u=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){let y=c[b];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Yh(i){let t=new g0(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yh(i),t.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],M0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],$h=new fe,nr=new D,Ol=new D;function S0(i,t,e){let n=new Hi,s=new ft,r=new ft,a=new pe,o=new Qr,l=new jr,c={},h=e.maxTextureSize,d={[Xn]:Oe,[Oe]:Xn,[$e]:$e},u=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:x0,fragmentShader:v0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oi;let f=this.type;this.render=function(T,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Bc&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oi);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(xn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let G=f!==this.type;G&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=T.length;U<H;U++){let $=T[U],Q=$.shadow;if(Q===void 0){Xt("WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let w=Q.getFrameExtents();s.multiply(w),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/w.x),s.x=r.x*w.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/w.y),s.y=r.y*w.y,Q.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=B,Q.map===null||G===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Zi){if($.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Be(s.x,s.y,{format:Jn,type:ln,minFilter:we,magFilter:we,generateMipmaps:!1}),Q.map.texture.name=$.name+".shadowMap",Q.map.depthTexture=new kn(s.x,s.y,on),Q.map.depthTexture.name=$.name+".shadowMapDepth",Q.map.depthTexture.format=pn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=be,Q.map.depthTexture.magFilter=be}else $.isPointLight?(Q.map=new ro(s.x),Q.map.depthTexture=new Wr(s.x,an)):(Q.map=new Be(s.x,s.y),Q.map.depthTexture=new kn(s.x,s.y,an)),Q.map.depthTexture.name=$.name+".shadowMap",Q.map.depthTexture.format=pn,this.type===oi?(Q.map.depthTexture.compareFunction=B?to:ja,Q.map.depthTexture.minFilter=we,Q.map.depthTexture.magFilter=we):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=be,Q.map.depthTexture.magFilter=be);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let z=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();$.isPointLight!==!0&&Q.updateMatrices($,x);for(let J=0;J<z;J++){let ct=Q.getCamera(J);if($.isPointLight){let ht=Q.camera,Ft=Q.matrix,Lt=$.distance||ht.far;Lt!==ht.far&&(ht.far=Lt,ht.updateProjectionMatrix()),nr.setFromMatrixPosition($.matrixWorld),ht.position.copy(nr),Ol.copy(ht.position),Ol.add(y0[J]),ht.up.copy(M0[J]),ht.lookAt(Ol),ht.updateMatrixWorld(),Ft.makeTranslation(-nr.x,-nr.y,-nr.z),$h.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),Q._frustum.setFromProjectionMatrix($h,ht.coordinateSystem,ht.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,J),i.clear();else{J===0&&(i.setRenderTarget(Q.map),i.clear());let ht=Q.getViewport(J);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),V.viewport(a)}n=Q.getFrustum(J),y(P,x,ct,$,this.type)}Q.isPointLightShadow!==!0&&this.type===Zi&&b(Q,x),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,I,N)};function b(T,P){let x=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Be(s.x,s.y,{format:Jn,type:ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,x,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,x,p,M,null)}function R(T,P,x,E){let I=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)I=N;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let V=I.uuid,G=P.uuid,U=c[V];U===void 0&&(U={},c[V]=U);let H=U[G];H===void 0&&(H=I.clone(),U[G]=H,P.addEventListener("dispose",S)),I=H}if(I.visible=P.visible,I.wireframe=P.wireframe,E===Zi?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:d[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=i.properties.get(I);V.light=x}return I}function y(T,P,x,E,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Zi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let G=t.update(T),U=T.material;if(Array.isArray(U)){let H=G.groups;for(let $=0,Q=H.length;$<Q;$++){let w=H[$],B=U[w.materialIndex];if(B&&B.visible){let z=R(T,B,E,I);T.onBeforeShadow(i,T,P,x,G,z,w),i.renderBufferDirect(x,null,G,z,T,w),T.onAfterShadow(i,T,P,x,G,z,w)}}}else if(U.visible){let H=R(T,U,E,I);T.onBeforeShadow(i,T,P,x,G,H,null),i.renderBufferDirect(x,null,G,H,T,null),T.onAfterShadow(i,T,P,x,G,H,null)}}let V=T.children;for(let G=0,U=V.length;G<U;G++)y(V[G],P,x,E,I)}function S(T){T.target.removeEventListener("dispose",S);for(let x in c){let E=c[x],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function b0(i,t){function e(){let O=!1,vt=new pe,it=null,yt=new pe(0,0,0,0);return{setMask:function(Et){it!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){O=Et},setClear:function(Et,ot,Vt,Dt,le){le===!0&&(Et*=Dt,ot*=Dt,Vt*=Dt),vt.set(Et,ot,Vt,Dt),yt.equals(vt)===!1&&(i.clearColor(Et,ot,Vt,Dt),yt.copy(vt))},reset:function(){O=!1,it=null,yt.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,it=null,yt=null,Et=null;return{setReversed:function(ot){if(vt!==ot){let Vt=t.get("EXT_clip_control");ot?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),vt=ot;let Dt=Et;Et=null,this.setClear(Dt)}},getReversed:function(){return vt},setTest:function(ot){ot?et(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ot){it!==ot&&!O&&(i.depthMask(ot),it=ot)},setFunc:function(ot){if(vt&&(ot=vh[ot]),yt!==ot){switch(ot){case Ir:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Dr:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ot}},setLocked:function(ot){O=ot},setClear:function(ot){Et!==ot&&(Et=ot,vt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){O=!1,it=null,yt=null,Et=null,vt=!1}}}function s(){let O=!1,vt=null,it=null,yt=null,Et=null,ot=null,Vt=null,Dt=null,le=null;return{setTest:function(ie){O||(ie?et(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ie){vt!==ie&&!O&&(i.stencilMask(ie),vt=ie)},setFunc:function(ie,Qe,hn){(it!==ie||yt!==Qe||Et!==hn)&&(i.stencilFunc(ie,Qe,hn),it=ie,yt=Qe,Et=hn)},setOp:function(ie,Qe,hn){(ot!==ie||Vt!==Qe||Dt!==hn)&&(i.stencilOp(ie,Qe,hn),ot=ie,Vt=Qe,Dt=hn)},setLocked:function(ie){O=ie},setClear:function(ie){le!==ie&&(i.clearStencil(ie),le=ie)},reset:function(){O=!1,vt=null,it=null,yt=null,Et=null,ot=null,Vt=null,Dt=null,le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,R=null,y=null,S=null,T=null,P=null,x=new Kt(0,0,0),E=0,I=!1,N=null,V=null,G=null,U=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,w=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(B)[1]),Q=w>=1):B.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Q=w>=2);let z=null,J={},ct=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Ft=new pe().fromArray(ct),Lt=new pe().fromArray(ht);function Ht(O,vt,it,yt){let Et=new Uint8Array(4),ot=i.createTexture();i.bindTexture(O,ot),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<it;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ot}let Z={};Z[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Li),L(!1),q(Qo),et(i.CULL_FACE),lt(xn);function et(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function dt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,vt){return u[O]!==vt?(i.bindFramebuffer(O,vt),u[O]=vt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function gt(O,vt){let it=g,yt=!1;if(O){it=p.get(vt),it===void 0&&(it=[],p.set(vt,it));let Et=O.textures;if(it.length!==Et.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Vt=Et.length;ot<Vt;ot++)it[ot]=i.COLOR_ATTACHMENT0+ot;it.length=Et.length,yt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,yt=!0);yt&&i.drawBuffers(it)}function zt(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let Qt={[li]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};Qt[Hc]=i.MIN,Qt[Gc]=i.MAX;let nt={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(O,vt,it,yt,Et,ot,Vt,Dt,le,ie){if(O===xn){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),O!==zc){if(O!==f||ie!==I){if((b!==li||S!==li)&&(i.blendEquation(i.FUNC_ADD),b=li,S=li),ie)switch(O){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",O);break}R=null,y=null,T=null,P=null,x.set(0,0,0),E=0,f=O,I=ie}return}Et=Et||vt,ot=ot||it,Vt=Vt||yt,(vt!==b||Et!==S)&&(i.blendEquationSeparate(Qt[vt],Qt[Et]),b=vt,S=Et),(it!==R||yt!==y||ot!==T||Vt!==P)&&(i.blendFuncSeparate(nt[it],nt[yt],nt[ot],nt[Vt]),R=it,y=yt,T=ot,P=Vt),(Dt.equals(x)===!1||le!==E)&&(i.blendColor(Dt.r,Dt.g,Dt.b,le),x.copy(Dt),E=le),f=O,I=!1}function at(O,vt){O.side===$e?dt(i.CULL_FACE):et(i.CULL_FACE);let it=O.side===Oe;vt&&(it=!it),L(it),O.blending===Ki&&O.transparent===!1?lt(xn):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let yt=O.stencilWrite;o.setTest(yt),yt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function L(O){N!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),N=O)}function q(O){O!==Fc?(et(i.CULL_FACE),O!==V&&(O===Qo?i.cullFace(i.BACK):O===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),V=O}function rt(O){O!==G&&(Q&&i.lineWidth(O),G=O)}function pt(O,vt,it){O?(et(i.POLYGON_OFFSET_FILL),(U!==vt||H!==it)&&(U=vt,H=it,a.getReversed()&&(vt=-vt),i.polygonOffset(vt,it))):dt(i.POLYGON_OFFSET_FILL)}function wt(O){O?et(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Rt(O){O===void 0&&(O=i.TEXTURE0+$-1),z!==O&&(i.activeTexture(O),z=O)}function C(O,vt,it){it===void 0&&(z===null?it=i.TEXTURE0+$-1:it=z);let yt=J[it];yt===void 0&&(yt={type:void 0,texture:void 0},J[it]=yt),(yt.type!==O||yt.texture!==vt)&&(z!==it&&(i.activeTexture(it),z=it),i.bindTexture(O,vt||Z[O]),yt.type=O,yt.texture=vt)}function kt(){let O=J[z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function k(){try{i.texSubImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function ut(){try{i.texStorage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function mt(){try{i.texStorage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function tt(){try{i.texImage2D(...arguments)}catch(O){qt("WebGLState:",O)}}function st(){try{i.texImage3D(...arguments)}catch(O){qt("WebGLState:",O)}}function _t(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Ot(O,vt){d[O]!==vt&&(i.pixelStorei(O,vt),d[O]=vt)}function Mt(O){Ft.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ft.copy(O))}function xt(O){Lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Lt.copy(O))}function Bt(O,vt){let it=c.get(vt);it===void 0&&(it=new WeakMap,c.set(vt,it));let yt=it.get(O);yt===void 0&&(yt=i.getUniformBlockIndex(vt,O.name),it.set(O,yt))}function Wt(O,vt){let yt=c.get(vt).get(O);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,O.__bindingPointIndex),l.set(vt,yt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,J={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,R=null,y=null,S=null,T=null,P=null,x=new Kt(0,0,0),E=0,I=!1,N=null,V=null,G=null,U=null,H=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:dt,bindFramebuffer:Nt,drawBuffers:gt,useProgram:zt,setBlending:lt,setMaterial:at,setFlipSided:L,setCullFace:q,setLineWidth:rt,setPolygonOffset:pt,setScissorTest:wt,activeTexture:Rt,bindTexture:C,unbindTexture:kt,compressedTexImage2D:Gt,compressedTexImage3D:A,texImage2D:tt,texImage3D:st,pixelStorei:Ot,getParameter:_t,updateUBOMapping:Bt,uniformBlockBinding:Wt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:Mt,viewport:xt,reset:$t}}function T0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):Ui("canvas")}function m(A,_,k){let Y=1,j=Gt(A);if((j.width>k||j.height>k)&&(Y=k/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(Y*j.width),mt=Math.floor(Y*j.height);u===void 0&&(u=M(ut,mt));let tt=_?M(ut,mt):u;return tt.width=ut,tt.height=mt,tt.getContext("2d").drawImage(A,0,0,ut,mt),Xt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ut+"x"+mt+")."),tt}else return"data"in A&&Xt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function f(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,k,Y,j,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;Y&&(mt=t.get("EXT_texture_norm16"),mt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(k===i.FLOAT&&(tt=i.R32F),k===i.HALF_FLOAT&&(tt=i.R16F),k===i.UNSIGNED_BYTE&&(tt=i.R8),k===i.UNSIGNED_SHORT&&mt&&(tt=mt.R16_EXT),k===i.SHORT&&mt&&(tt=mt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.R8UI),k===i.UNSIGNED_SHORT&&(tt=i.R16UI),k===i.UNSIGNED_INT&&(tt=i.R32UI),k===i.BYTE&&(tt=i.R8I),k===i.SHORT&&(tt=i.R16I),k===i.INT&&(tt=i.R32I)),_===i.RG&&(k===i.FLOAT&&(tt=i.RG32F),k===i.HALF_FLOAT&&(tt=i.RG16F),k===i.UNSIGNED_BYTE&&(tt=i.RG8),k===i.UNSIGNED_SHORT&&mt&&(tt=mt.RG16_EXT),k===i.SHORT&&mt&&(tt=mt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RG8UI),k===i.UNSIGNED_SHORT&&(tt=i.RG16UI),k===i.UNSIGNED_INT&&(tt=i.RG32UI),k===i.BYTE&&(tt=i.RG8I),k===i.SHORT&&(tt=i.RG16I),k===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),k===i.UNSIGNED_INT&&(tt=i.RGB32UI),k===i.BYTE&&(tt=i.RGB8I),k===i.SHORT&&(tt=i.RGB16I),k===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),k===i.UNSIGNED_INT&&(tt=i.RGBA32UI),k===i.BYTE&&(tt=i.RGBA8I),k===i.SHORT&&(tt=i.RGBA16I),k===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&mt&&(tt=mt.RGB16_EXT),k===i.SHORT&&mt&&(tt=mt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){let st=ut?_s:ee.getTransfer(j);k===i.FLOAT&&(tt=i.RGBA32F),k===i.HALF_FLOAT&&(tt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(tt=st===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&mt&&(tt=mt.RGBA16_EXT),k===i.SHORT&&mt&&(tt=mt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(A,_){let k;return A?_===null||_===an||_===ji?k=i.DEPTH24_STENCIL8:_===on?k=i.DEPTH32F_STENCIL8:_===Qi&&(k=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===an||_===ji?k=i.DEPTH_COMPONENT24:_===on?k=i.DEPTH_COMPONENT32F:_===Qi&&(k=i.DEPTH_COMPONENT16),k}function T(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==be&&A.minFilter!==we?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){let _=A.target;_.removeEventListener("dispose",P),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),N(_)}function E(A){let _=n.get(A);if(_.__webglInit===void 0)return;let k=A.source,Y=p.get(k);if(Y){let j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(A),Object.keys(Y).length===0&&p.delete(k)}n.remove(A)}function I(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let k=A.source,Y=p.get(k);delete Y[_.__cacheKey],a.memory.textures--}function N(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=A.textures;for(let Y=0,j=k.length;Y<j;Y++){let ut=n.get(k[Y]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(A)}let V=0;function G(){V=0}function U(){return V}function H(A){V=A}function $(){let A=V;return A>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function Q(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function w(A,_){let k=n.get(A);if(A.isVideoTexture&&C(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let Y=A.image;if(Y===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function B(A,_){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){dt(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function z(A,_){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){dt(k,A,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function J(A,_){let k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Nt(k,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let ct={[Di]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ht={[be]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[we]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ft={[ch]:i.NEVER,[ph]:i.ALWAYS,[hh]:i.LESS,[ja]:i.LEQUAL,[uh]:i.EQUAL,[to]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Lt(A,_){if(_.type===on&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===we||_.magFilter===ma||_.magFilter===$s||_.magFilter===Yn||_.minFilter===we||_.minFilter===ma||_.minFilter===$s||_.minFilter===Yn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ct[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ct[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ct[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===be||_.minFilter!==$s&&_.minFilter!==Yn||_.type===on&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ht(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));let Y=_.source,j=p.get(Y);j===void 0&&(j={},p.set(Y,j));let ut=Q(_);if(ut!==A.__cacheKey){j[ut]===void 0&&(j[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[ut].usedTimes++;let mt=j[A.__cacheKey];mt!==void 0&&(j[A.__cacheKey].usedTimes--,mt.usedTimes===0&&I(_)),A.__cacheKey=ut,A.__webglTexture=j[ut].texture}return k}function Z(A,_,k){return Math.floor(Math.floor(A/k)/_)}function et(A,_,k,Y){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{ut.sort((Ot,Mt)=>Ot.start-Mt.start);let mt=0;for(let Ot=1;Ot<ut.length;Ot++){let Mt=ut[mt],xt=ut[Ot],Bt=Mt.start+Mt.count,Wt=Z(xt.start,_.width,4),$t=Z(Mt.start,_.width,4);xt.start<=Bt+1&&Wt===$t&&Z(xt.start+xt.count-1,_.width,4)===Wt?Mt.count=Math.max(Mt.count,xt.start+xt.count-Mt.start):(++mt,ut[mt]=xt)}ut.length=mt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ot=0,Mt=ut.length;Ot<Mt;Ot++){let xt=ut[Ot],Bt=Math.floor(xt.start/4),Wt=Math.ceil(xt.count/4),$t=Bt%_.width,O=Math.floor(Bt/_.width),vt=Wt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,$t,O,vt,it,k,Y,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function dt(A,_,k){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let j=Ht(A,_),ut=_.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+k);let mt=n.get(ut);if(ut.version!==mt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let it=ee.getPrimaries(ee.workingColorSpace),yt=_.colorSpace===cn?null:ee.getPrimaries(_.colorSpace),Et=_.colorSpace===cn||it===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let st=m(_.image,!1,s.maxTextureSize);st=kt(_,st);let _t=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),Mt=y(_.internalFormat,_t,Ot,_.normalized,_.colorSpace,_.isVideoTexture);Lt(Y,_);let xt,Bt=_.mipmaps,Wt=_.isVideoTexture!==!0,$t=mt.__version===void 0||j===!0,O=ut.dataReady,vt=T(_,st);if(_.isDepthTexture)Mt=S(_.format===$n,_.type),$t&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Mt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Mt,st.width,st.height,0,_t,Ot,null));else if(_.isDataTexture)if(Bt.length>0){Wt&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Bt[0].width,Bt[0].height);for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],Wt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,_t,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,it,Mt,xt.width,xt.height,0,_t,Ot,xt.data);_.generateMipmaps=!1}else Wt?($t&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height),O&&et(_,st,_t,Ot)):e.texImage2D(i.TEXTURE_2D,0,Mt,st.width,st.height,0,_t,Ot,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Wt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,Bt[0].width,Bt[0].height,st.depth);for(let it=0,yt=Bt.length;it<yt;it++)if(xt=Bt[it],_.format!==Je)if(_t!==null)if(Wt){if(O)if(_.layerUpdates.size>0){let Et=wl(xt.width,xt.height,_.format,_.type);for(let ot of _.layerUpdates){let Vt=xt.data.subarray(ot*Et/xt.data.BYTES_PER_ELEMENT,(ot+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ot,xt.width,xt.height,1,_t,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,st.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Mt,xt.width,xt.height,st.depth,0,xt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,st.depth,_t,Ot,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Mt,xt.width,xt.height,st.depth,0,_t,Ot,xt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Wt&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Bt[0].width,Bt[0].height);for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],_.format!==Je?_t!==null?Wt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Mt,xt.width,xt.height,0,xt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,_t,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,it,Mt,xt.width,xt.height,0,_t,Ot,xt.data)}else if(_.isDataArrayTexture)if(Wt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,st.width,st.height,st.depth),O)if(_.layerUpdates.size>0){let it=wl(st.width,st.height,_.format,_.type);for(let yt of _.layerUpdates){let Et=st.data.subarray(yt*it/st.data.BYTES_PER_ELEMENT,(yt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,st.width,st.height,1,_t,Ot,Et)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Ot,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,st.width,st.height,st.depth,0,_t,Ot,st.data);else if(_.isData3DTexture)Wt?($t&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,st.width,st.height,st.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Ot,st.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,st.width,st.height,st.depth,0,_t,Ot,st.data);else if(_.isFramebufferTexture){if($t)if(Wt)e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height);else{let it=st.width,yt=st.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,it,yt,0,_t,Ot,null),it>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),d.add(_),it.onpaint=yt=>{let Et=yt.changedElements;for(let ot of d)Et.includes(ot.image)&&(ot.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Et=i.RGBA,ot=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ot,Vt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Wt&&$t){let it=Gt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,it.width,it.height)}for(let it=0,yt=Bt.length;it<yt;it++)xt=Bt[it],Wt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t,Ot,xt):e.texImage2D(i.TEXTURE_2D,it,Mt,_t,Ot,xt);_.generateMipmaps=!1}else if(Wt){if($t){let it=Gt(st);e.texStorage2D(i.TEXTURE_2D,vt,Mt,it.width,it.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ot,st)}else e.texImage2D(i.TEXTURE_2D,0,Mt,_t,Ot,st);f(_)&&b(Y),mt.__version=ut.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Nt(A,_,k){if(_.image.length!==6)return;let Y=Ht(A,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ut=n.get(j);if(j.version!==ut.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let mt=ee.getPrimaries(ee.workingColorSpace),tt=_.colorSpace===cn?null:ee.getPrimaries(_.colorSpace),st=_.colorSpace===cn||mt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let _t=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,Mt=[];for(let ot=0;ot<6;ot++)!_t&&!Ot?Mt[ot]=m(_.image[ot],!0,s.maxCubemapSize):Mt[ot]=Ot?_.image[ot].image:_.image[ot],Mt[ot]=kt(_,Mt[ot]);let xt=Mt[0],Bt=r.convert(_.format,_.colorSpace),Wt=r.convert(_.type),$t=y(_.internalFormat,Bt,Wt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,vt=ut.__version===void 0||Y===!0,it=j.dataReady,yt=T(_,xt);Lt(i.TEXTURE_CUBE_MAP,_);let Et;if(_t){O&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,xt.width,xt.height);for(let ot=0;ot<6;ot++){Et=Mt[ot].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){let Dt=Et[Vt];_.format!==Je?Bt!==null?O?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Dt.width,Dt.height,Bt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,$t,Dt.width,Dt.height,0,Dt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Dt.width,Dt.height,Bt,Wt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,$t,Dt.width,Dt.height,0,Bt,Wt,Dt.data)}}}else{if(Et=_.mipmaps,O&&vt){Et.length>0&&yt++;let ot=Gt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Mt[ot].width,Mt[ot].height,Bt,Wt,Mt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Mt[ot].width,Mt[ot].height,0,Bt,Wt,Mt[ot].data);for(let Vt=0;Vt<Et.length;Vt++){let le=Et[Vt].image[ot].image;O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,le.width,le.height,Bt,Wt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,$t,le.width,le.height,0,Bt,Wt,le.data)}}else{O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Bt,Wt,Mt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Bt,Wt,Mt[ot]);for(let Vt=0;Vt<Et.length;Vt++){let Dt=Et[Vt];O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,Bt,Wt,Dt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,$t,Bt,Wt,Dt.image[ot])}}}f(_)&&b(i.TEXTURE_CUBE_MAP),ut.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function gt(A,_,k,Y,j,ut){let mt=r.convert(k.format,k.colorSpace),tt=r.convert(k.type),st=y(k.internalFormat,mt,tt,k.normalized,k.colorSpace),_t=n.get(_),Ot=n.get(k);if(Ot.__renderTarget=_,!_t.__hasExternalTextures){let Mt=Math.max(1,_.width>>ut),xt=Math.max(1,_.height>>ut);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ut,st,Mt,xt,_.depth,0,mt,tt,null):e.texImage2D(j,ut,st,Mt,xt,0,mt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Ot.__webglTexture,0,wt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Ot.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,ut=S(_.stencilBuffer,j),mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),ut,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let Y=_.textures;for(let j=0;j<Y.length;j++){let ut=Y[j],mt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),st=y(ut.internalFormat,mt,tt,ut.normalized,ut.colorSpace);Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),st,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(A,_,k){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,_.depthTexture);let _t=r.convert(_.depthTexture.format),Ot=r.convert(_.depthTexture.type),Mt;_.depthTexture.format===pn?Mt=i.DEPTH_COMPONENT24:_.depthTexture.format===$n&&(Mt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Mt,_.width,_.height,0,_t,Ot,null)}}else w(_.depthTexture,0);let ut=j.__webglTexture,mt=wt(_),tt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,st=_.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===pn)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ut,0);else if(_.depthTexture.format===$n)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let _=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)Qt(_.__webglFramebuffer[Y],A,Y);else{let Y=A.texture.mipmaps;Y&&Y.length>0?Qt(_.__webglFramebuffer[0],A,0):Qt(_.__webglFramebuffer,A,0)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),zt(_.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ut)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),zt(_.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,_,k){let Y=n.get(A);_!==void 0&&gt(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(A)}function at(A){let _=A.texture,k=n.get(A),Y=n.get(_);A.addEventListener("dispose",x);let j=A.textures,ut=A.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),ut){k.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[tt]=[];for(let st=0;st<_.mipmaps.length;st++)k.__webglFramebuffer[tt][st]=i.createFramebuffer()}else k.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)k.__webglFramebuffer[tt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(mt)for(let tt=0,st=j.length;tt<st;tt++){let _t=n.get(j[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Rt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let st=j[tt];k.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);let _t=r.convert(st.format,st.colorSpace),Ot=r.convert(st.type),Mt=y(st.internalFormat,_t,Ot,st.normalized,st.colorSpace,A.isXRRenderTarget===!0),xt=wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,k.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)gt(k.__webglFramebuffer[tt][st],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st);else gt(k.__webglFramebuffer[tt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);f(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let tt=0,st=j.length;tt<st;tt++){let _t=j[tt],Ot=n.get(_t),Mt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ot.__webglTexture),Lt(Mt,_t),gt(k.__webglFramebuffer,A,_t,i.COLOR_ATTACHMENT0+tt,Mt,0),f(_t)&&b(Mt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),Lt(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)gt(k.__webglFramebuffer[st],A,_,i.COLOR_ATTACHMENT0,tt,st);else gt(k.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,tt,0);f(_)&&b(tt),e.unbindTexture()}A.depthBuffer&&nt(A)}function L(A){let _=A.textures;for(let k=0,Y=_.length;k<Y;k++){let j=_[k];if(f(j)){let ut=R(A),mt=n.get(j).__webglTexture;e.bindTexture(ut,mt),b(ut),e.unbindTexture()}}}let q=[],rt=[];function pt(A){if(A.samples>0){if(Rt(A)===!1){let _=A.textures,k=A.width,Y=A.height,j=i.COLOR_BUFFER_BIT,ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),tt=_.length>1;if(tt)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let st=A.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ot=n.get(_[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,j,i.NEAREST),l===!0&&(q.length=0,rt.length=0,q.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(q.push(ut),rt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ot=n.get(_[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function wt(A){return Math.min(s.maxSamples,A.samples)}function Rt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function C(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function kt(A,_){let k=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==gs&&k!==cn&&(ee.getTransfer(k)===re?(Y!==Je||j!==ze)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",k)),_}function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=H,this.setTexture2D=w,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=lt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function E0(i,t){function e(n,s=cn){let r,a=ee.getTransfer(s);if(n===ze)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dl)return i.BYTE;if(n===fl)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===_l)return i.RGB;if(n===Je)return i.RGBA;if(n===pn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===va)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Js||n===Zs||n===Ks||n===Qs)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ba||n===Ta||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Aa||n===Ca||n===Ra||n===Pa||n===js||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Aa)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===js)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===ka||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Ya||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===Za||n===tr||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ts(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:w0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Xl,f={},b=e.getContextAttributes(),R=null,y=null,S=[],T=[],P=new ft,x=null,E=null,I=new Ee;I.viewport=new pe;let N=new Ee;N.viewport=new pe;let V=[I,N],G=new ua,U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=S[Z];return et===void 0&&(et=new Vi,S[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=S[Z];return et===void 0&&(et=new Vi,S[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=S[Z];return et===void 0&&(et=new Vi,S[Z]=et),et.getHandSpace()};function $(Z){let et=T.indexOf(Z.inputSource);if(et===-1)return;let dt=S[et];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,c||a),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",w);for(let Z=0;Z<S.length;Z++){let et=T[Z];et!==null&&(T[Z]=null,S[Z].disconnect(et))}U=null,H=null,m.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(R),p=null,u=null,d=null,s=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",w),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Nt=null,gt=null;b.depth&&(gt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=b.stencil?$n:pn,Nt=b.stencil?ji:an);let zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Be(u.textureWidth,u.textureHeight,{format:Je,type:ze,depthTexture:new kn(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Be(p.framebufferWidth,p.framebufferHeight,{format:Je,type:ze,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function w(Z){for(let et=0;et<Z.removed.length;et++){let dt=Z.removed[et],Nt=T.indexOf(dt);Nt>=0&&(T[Nt]=null,S[Nt].disconnect(dt))}for(let et=0;et<Z.added.length;et++){let dt=Z.added[et],Nt=T.indexOf(dt);if(Nt===-1){for(let zt=0;zt<S.length;zt++)if(zt>=T.length){T.push(dt),Nt=zt;break}else if(T[zt]===null){T[zt]=dt,Nt=zt;break}if(Nt===-1)break}let gt=S[Nt];gt&&gt.connect(dt)}}let B=new D,z=new D;function J(Z,et,dt){B.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(dt.matrixWorld);let Nt=B.distanceTo(z),gt=et.projectionMatrix.elements,zt=dt.projectionMatrix.elements,Qt=gt[14]/(gt[10]-1),nt=gt[14]/(gt[10]+1),lt=(gt[9]+1)/gt[5],at=(gt[9]-1)/gt[5],L=(gt[8]-1)/gt[0],q=(zt[8]+1)/zt[0],rt=Qt*L,pt=Qt*q,wt=Nt/(-L+q),Rt=wt*-L;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let C=Qt+wt,kt=nt+wt,Gt=rt-Rt,A=pt+(Nt-Rt),_=lt*nt/kt*C,k=at*nt/kt*C;Z.projectionMatrix.makePerspective(Gt,A,_,k,C,kt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,dt=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),G.near=N.near=I.near=et,G.far=N.far=I.far=dt,(U!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,H=G.far),G.layers.mask=Z.layers.mask|6,I.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Nt=Z.parent,gt=G.cameras;ct(G,Nt);for(let zt=0;zt<gt.length;zt++)ct(gt[zt],Nt);gt.length===2?J(G,I,N):G.projectionMatrix.copy(I.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),ht(Z,G,Nt)};function ht(Z,et,dt){dt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Oi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return f[Z]};let Ft=null;function Lt(Z,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;dt.length!==G.cameras.length&&(G.cameras.length=0,Nt=!0);for(let nt=0;nt<dt.length;nt++){let lt=dt[nt],at=null;if(p!==null)at=p.getViewport(lt);else{let q=d.getViewSubImage(u,lt);at=q.viewport,nt===0&&(t.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(y))}let L=V[nt];L===void 0&&(L=new Ee,L.layers.enable(nt),L.viewport=new pe,V[nt]=L),L.matrix.fromArray(lt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(lt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(at.x,at.y,at.width,at.height),nt===0&&(G.matrix.copy(L.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Nt===!0&&G.cameras.push(L)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let nt=d.getDepthInformation(dt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(gt&&gt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<dt.length;nt++){let lt=dt[nt].camera;if(lt){let at=f[lt];at||(at=new Ts,f[lt]=at);let L=d.getCameraImage(lt);at.sourceTexture=L}}}}for(let dt=0;dt<S.length;dt++){let Nt=T[dt],gt=S[dt];Nt!==null&&gt!==void 0&&gt.update(Nt,et,c||a)}Ft&&Ft(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Ht=new Jh;Ht.setAnimationLoop(Lt),this.setAnimationLoop=function(Z){Ft=Z},this.dispose=function(){}}},C0=new fe,eu=new Yt;eu.set(-1,0,0,0,1,0,0,0,1);function R0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,R,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),R=b.envMap,y=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function c(y,S){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",b));let P=S.program;n.updateUBOMapping(y,P);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let S=d();y.__bindingPointIndex=S;let T=i.createBuffer(),P=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],T=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,E=T.length;x<E;x++){let I=T[x];if(Array.isArray(I))for(let N=0,V=I.length;N<V;N++)p(I[N],x,N,P);else p(I,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,T,P){if(M(y,S,T,P)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let N=0;N<E.length;N++){let V=E[N],G=f(V);g(V,y.__data,I),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function M(y,S,T,P){let x=y.value,E=S+"_"+T;if(P[E]===void 0)return typeof x=="number"||typeof x=="boolean"?P[E]=x:ArrayBuffer.isView(x)?P[E]=x.slice():P[E]=x.clone(),!0;{let I=P[E];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return P[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(y){let S=y.uniforms,T=0,P=16;for(let E=0,I=S.length;E<I;E++){let N=Array.isArray(S[E])?S[E]:[S[E]];for(let V=0,G=N.length;V<G;V++){let U=N[V],H=Array.isArray(U.value)?U.value:[U.value];for(let $=0,Q=H.length;$<Q;$++){let w=H[$],B=f(w),z=T%P,J=z%B.boundary,ct=z+J;T+=J,ct!==0&&P-ct<B.storage&&(T+=P-ct),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=B.storage}}}let x=T%P;return x>0&&(T+=P-x),y.__size=T,y.__cache={},this}function f(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var I0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function L0(){return vn===null&&(vn=new Gr(I0,16,16,Jn,ln),vn.name="DFG_LUT",vn.minFilter=we,vn.magFilter=we,vn.wrapS=fn,vn.wrapT=fn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var ao=class{constructor(t={}){let{canvas:e=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([Ma,ya,va]),f=new Set([ze,an,Qi,ji,_a,xa]),b=new Uint32Array(4),R=new Int32Array(4),y=new D,S=null,T=null,P=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,V=null,G=null,U=null,H=null;this._outputColorSpace=Te;let $=0,Q=0,w=null,B=-1,z=null,J=new pe,ct=new pe,ht=null,Ft=new Kt(0),Lt=0,Ht=e.width,Z=e.height,et=1,dt=null,Nt=null,gt=new pe(0,0,Ht,Z),zt=new pe(0,0,Ht,Z),Qt=!1,nt=new Hi,lt=!1,at=!1,L=new fe,q=new D,rt=new pe,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Rt(){return w===null?et:1}let C=n;function kt(v,F){return e.getContext(v,F)}let Gt,A,_,k,Y,j,ut,mt,tt,st,_t,Ot,Mt,xt,Bt,Wt,$t,O,vt,it,yt,Et,ot;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Qe,!1),C===null){let F="webgl2";if(C=kt(F,v),C===null)throw kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(v){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),qt("WebGLRenderer: "+v.message),v}function Vt(){Gt=new zm(C),Gt.init(),yt=new E0(C,Gt),A=new Rm(C,Gt,t,yt),_=new b0(C,Gt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=C.createFramebuffer(),U=C.createFramebuffer(),H=C.createFramebuffer(),k=new Hm(C),Y=new c0,j=new T0(C,Gt,_,Y,A,yt,k),ut=new Bm(I),mt=new Gd(C),Et=new Am(C,mt),tt=new Vm(C,mt,k,Et),st=new Wm(C,tt,mt,Et,k),O=new Gm(C,A,j),Bt=new Pm(Y),_t=new l0(I,ut,Gt,A,Et,Bt),Ot=new R0(I,Y),Mt=new u0,xt=new _0(Gt),$t=new wm(I,ut,_,st,g,l),Wt=new S0(I,st,A),ot=new P0(C,k,A,_),vt=new Cm(C,Gt,k),it=new km(C,Gt,k),k.programs=_t.programs,I.capabilities=A,I.extensions=Gt,I.properties=Y,I.renderLists=Mt,I.shadowMap=Wt,I.state=_,I.info=k}M!==ze&&(E=new qm(M,e.width,e.height,o,s,r));let Dt=new ql(I,C);this.xr=Dt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(v){v!==void 0&&(et=v,this.setSize(Ht,Z,!1))},this.getSize=function(v){return v.set(Ht,Z)},this.setSize=function(v,F,K=!0){if(Dt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=v,Z=F,e.width=Math.floor(v*et),e.height=Math.floor(F*et),K===!0&&(e.style.width=v+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Ht*et,Z*et).floor()},this.setDrawingBufferSize=function(v,F,K){Ht=v,Z=F,et=K,e.width=Math.floor(v*K),e.height=Math.floor(F*K),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(M===ze){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(gt)},this.setViewport=function(v,F,K,W){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,F,K,W),_.viewport(J.copy(gt).multiplyScalar(et).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,F,K,W){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,F,K,W),_.scissor(ct.copy(zt).multiplyScalar(et).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){_.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){dt=v},this.setTransparentSort=function(v){Nt=v},this.getClearColor=function(v){return v.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,K=!0){let W=0;if(v){let X=!1;if(w!==null){let Tt=w.texture.format;X=m.has(Tt)}if(X){let Tt=w.texture.type,Ct=f.has(Tt),bt=$t.getClearColor(),Pt=$t.getClearAlpha(),Ut=bt.r,Jt=bt.g,te=bt.b;Ct?(b[0]=Ut,b[1]=Jt,b[2]=te,b[3]=Pt,C.clearBufferuiv(C.COLOR,0,b)):(R[0]=Ut,R[1]=Jt,R[2]=te,R[3]=Pt,C.clearBufferiv(C.COLOR,0,R))}else W|=C.COLOR_BUFFER_BIT}F&&(W|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),V=v},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),$t.dispose(),Mt.dispose(),xt.dispose(),Y.dispose(),ut.dispose(),st.dispose(),Et.dispose(),ot.dispose(),_t.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Zl),Dt.removeEventListener("sessionend",Kl),Kn.stop()};function le(v){v.preventDefault(),yl("WebGLRenderer: Context Lost."),N=!0}function ie(){yl("WebGLRenderer: Context Restored."),N=!1;let v=k.autoReset,F=Wt.enabled,K=Wt.autoUpdate,W=Wt.needsUpdate,X=Wt.type;Vt(),k.autoReset=v,Wt.enabled=F,Wt.autoUpdate=K,Wt.needsUpdate=W,Wt.type=X}function Qe(v){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function hn(v){let F=v.target;F.removeEventListener("dispose",hn),fu(F)}function fu(v){pu(v),Y.remove(v)}function pu(v){let F=Y.get(v).programs;F!==void 0&&(F.forEach(function(K){_t.releaseProgram(K)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,K,W,X,Tt){F===null&&(F=pt);let Ct=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=_u(v,F,K,W,X);_.setMaterial(W,Ct);let Pt=K.index,Ut=1;if(W.wireframe===!0){if(Pt=tt.getWireframeAttribute(K),Pt===void 0)return;Ut=2}let Jt=K.drawRange,te=K.attributes.position,It=Jt.start*Ut,se=(Jt.start+Jt.count)*Ut;Tt!==null&&(It=Math.max(It,Tt.start*Ut),se=Math.min(se,(Tt.start+Tt.count)*Ut)),Pt!==null?(It=Math.max(It,0),se=Math.min(se,Pt.count)):te!=null&&(It=Math.max(It,0),se=Math.min(se,te.count));let _e=se-It;if(_e<0||_e===1/0)return;Et.setup(X,W,bt,K,Pt);let ue,oe=vt;if(Pt!==null&&(ue=mt.get(Pt),oe=it,oe.setIndex(ue)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*Rt()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(X.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),_.setLineWidth(Ce*Rt()),X.isLineSegments?oe.setMode(C.LINES):X.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else X.isPoints?oe.setMode(C.POINTS):X.isSprite&&oe.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))oe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ce=X._multiDrawStarts,At=X._multiDrawCounts,De=X._multiDrawCount,ne=Pt?mt.get(Pt).bytesPerElement:1,Xe=Y.get(W).currentProgram.getUniforms();for(let un=0;un<De;un++)Xe.setValue(C,"_gl_DrawID",un),oe.render(Ce[un]/ne,At[un])}else if(X.isInstancedMesh)oe.renderInstances(It,_e,X.count);else if(K.isInstancedBufferGeometry){let Ce=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,At=Math.min(K.instanceCount,Ce);oe.renderInstances(It,_e,At)}else oe.render(It,_e)};function Jl(v,F,K,W){V!==null&&v.isNodeMaterial&&V.setObject(W,v),lt===!0&&Bt.setState(v,K,!1),v.transparent===!0&&v.side===$e&&v.forceSinglePass===!1?(v.side=Oe,v.needsUpdate=!0,ar(v,F,W),v.side=Xn,v.needsUpdate=!0,ar(v,F,W),v.side=$e):ar(v,F,W)}this.compile=function(v,F,K=null){K===null&&(K=v),V!==null&&V.renderStart(v,F,K),T=xt.get(K),T.init(F),x.push(T),K.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),v!==K&&v.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),at=this.localClippingEnabled,lt=Bt.init(this.clippingPlanes,at),lt===!0&&Bt.setGlobalState(this.clippingPlanes,F),V!==null&&Wt.render(T.state.shadowsArray,K,F);let W=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Tt=X.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){let bt=Tt[Ct];Jl(bt,K,F,X),W.add(bt)}else Jl(Tt,K,F,X),W.add(Tt)}),T=x.pop(),V!==null&&V.renderEnd(),W},this.compileAsync=function(v,F,K=null){let W=this.compile(v,F,K);return new Promise(X=>{function Tt(){if(W.forEach(function(Ct){let Pt=Y.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&W.delete(Ct)}),W.size===0){X(v);return}setTimeout(Tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let fo=null;function mu(v){fo&&fo(v)}function Zl(){Kn.stop()}function Kl(){Kn.start()}let Kn=new Jh;Kn.setAnimationLoop(mu),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){fo=v,Dt.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},Dt.addEventListener("sessionstart",Zl),Dt.addEventListener("sessionend",Kl),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;V!==null&&V.renderStart(v,F);let K=Dt.enabled===!0&&Dt.isPresenting===!0,W=E!==null&&(w===null||K)&&E.begin(I,w);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,F,w),T=xt.get(v,x.length),T.init(F),T.state.textureUnits=j.getTextureUnits(),x.push(T),L.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(L,sn,F.reversedDepth),at=this.localClippingEnabled,lt=Bt.init(this.clippingPlanes,at),S=Mt.get(v,P.length),S.init(),P.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=I.xr.getDepthSensingMesh();Ct!==null&&po(Ct,F,-1/0,I.sortObjects)}po(v,F,0,I.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),I.sortObjects===!0&&S.sort(dt,Nt),wt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,wt&&$t.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Bt.beginShadows();let X=T.state.shadowsArray;if(Wt.render(X,v,F),lt===!0&&Bt.endShadows(),(W&&E.hasRenderPass())===!1){let Ct=S.opaque,bt=S.transmissive;if(T.setupLights(),F.isArrayCamera){let Pt=F.cameras;if(bt.length>0)for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let te=Pt[Ut];jl(Ct,bt,v,te)}wt&&$t.render(v);for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let te=Pt[Ut];Ql(S,v,te,te.viewport)}}else bt.length>0&&jl(Ct,bt,v,F),wt&&$t.render(v),Ql(S,v,F)}w!==null&&Q===0&&(j.updateMultisampleRenderTarget(w),j.updateRenderTargetMipmap(w)),W&&E.end(I),v.isScene===!0&&v.onAfterRender(I,v,F),Et.resetDefaultState(),B=-1,z=null,x.pop(),x.length>0?(T=x[x.length-1],j.setTextureUnits(T.state.textureUnits),lt===!0&&Bt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,V!==null&&V.renderEnd()};function po(v,F,K,W){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(nt)){W&&rt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(L);let Ct=st.update(v),bt=v.material;bt.visible&&S.push(v,Ct,bt,K,rt.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(nt))){let Ct=st.update(v),bt=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),rt.copy(v.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),rt.copy(Ct.boundingSphere.center)),rt.applyMatrix4(v.matrixWorld).applyMatrix4(L)),Array.isArray(bt)){let Pt=Ct.groups;for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let te=Pt[Ut],It=bt[te.materialIndex];It&&It.visible&&S.push(v,Ct,It,K,rt.z,te,F)}}else bt.visible&&S.push(v,Ct,bt,K,rt.z,null,F)}}let Tt=v.children;for(let Ct=0,bt=Tt.length;Ct<bt;Ct++)po(Tt[Ct],F,K,W)}function Ql(v,F,K,W){let{opaque:X,transmissive:Tt,transparent:Ct}=v;T.setupLightsView(K),lt===!0&&Bt.setGlobalState(I.clippingPlanes,K),W&&_.viewport(J.copy(W)),X.length>0&&rr(X,F,K),Tt.length>0&&rr(Tt,F,K),Ct.length>0&&rr(Ct,F,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jl(v,F,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let It=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Be(1,1,{generateMipmaps:!0,type:It?ln:ze,minFilter:Yn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[W.id],Ct=W.viewport||J;Tt.setSize(Ct.z*I.transmissionResolutionScale,Ct.w*I.transmissionResolutionScale);let bt=I.getRenderTarget(),Pt=I.getActiveCubeFace(),Ut=I.getActiveMipmapLevel();I.setRenderTarget(Tt),I.getClearColor(Ft),Lt=I.getClearAlpha(),Lt<1&&I.setClearColor(16777215,.5),I.clear(),wt&&$t.render(K);let Jt=I.toneMapping;I.toneMapping=rn;let te=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),lt===!0&&Bt.setGlobalState(I.clippingPlanes,W),rr(v,K,W),j.updateMultisampleRenderTarget(Tt),j.updateRenderTargetMipmap(Tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let se=0,_e=F.length;se<_e;se++){let ue=F[se],{object:oe,geometry:Ce,material:At,group:De}=ue;if(At.side===$e&&oe.layers.test(W.layers)){let ne=At.side;At.side=Oe,At.needsUpdate=!0,tc(oe,K,W,Ce,At,De),At.side=ne,At.needsUpdate=!0,It=!0}}It===!0&&(j.updateMultisampleRenderTarget(Tt),j.updateRenderTargetMipmap(Tt))}I.setRenderTarget(bt,Pt,Ut),I.setClearColor(Ft,Lt),te!==void 0&&(W.viewport=te),I.toneMapping=Jt}function rr(v,F,K){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Tt=v.length;X<Tt;X++){let Ct=v[X],{object:bt,geometry:Pt,group:Ut}=Ct,Jt=Ct.material;Jt.allowOverride===!0&&W!==null&&(Jt=W),bt.layers.test(K.layers)&&tc(bt,F,K,Pt,Jt,Ut)}}function tc(v,F,K,W,X,Tt){V!==null&&X.isNodeMaterial&&V.setObject(v,X),v.onBeforeRender(I,F,K,W,X,Tt),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(I,F,K,W,v,Tt),X.transparent===!0&&X.side===$e&&X.forceSinglePass===!1?(X.side=Oe,X.needsUpdate=!0,I.renderBufferDirect(K,F,W,X,v,Tt),X.side=Xn,X.needsUpdate=!0,I.renderBufferDirect(K,F,W,X,v,Tt),X.side=$e):I.renderBufferDirect(K,F,W,X,v,Tt),v.onAfterRender(I,F,K,W,X,Tt)}function ar(v,F,K){F.isScene!==!0&&(F=pt);let W=Y.get(v),X=T.state.lights,Tt=T.state.shadowsArray,Ct=X.state.version,bt=_t.getParameters(v,X.state,Tt,F,K,T.state.lightProbeGridArray),Pt=_t.getProgramCacheKey(bt),Ut=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let Jt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=ut.get(v.envMap||W.environment,Jt),W.envMapRotation=W.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Ut===void 0&&(v.addEventListener("dispose",hn),Ut=new Map,W.programs=Ut);let te=Ut.get(Pt);if(te!==void 0){if(W.currentProgram===te&&W.lightsStateVersion===Ct)return nc(v,bt),te}else bt.uniforms=_t.getUniforms(v),V!==null&&v.isNodeMaterial&&V.build(v,K,bt),v.onBeforeCompile(bt,I),te=_t.acquireProgram(bt,Pt),Ut.set(Pt,te),W.uniforms=bt.uniforms;let It=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(It.clippingPlanes=Bt.uniform),nc(v,bt),W.needsLights=vu(v),W.lightsStateVersion=Ct,W.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.sunLights.value=X.state.sun,It.sunLightShadows.value=X.state.sunShadow,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.sunShadowMatrix.value=X.state.sunShadowMatrix,It.sunShadowCascade.value=X.state.sunShadowCascade,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=te,W.uniformsList=null,te}function ec(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=ns.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function nc(v,F){let K=Y.get(v);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function gu(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let K=0,W=v.length;K<W;K++){let X=v[K];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function _u(v,F,K,W,X){F.isScene!==!0&&(F=pt),j.resetTextureUnits();let Tt=F.fog,Ct=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,bt=w===null?I.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ee.workingColorSpace,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ut=ut.get(W.envMap||Ct,Pt),Jt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,te=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!K.morphAttributes.position,se=!!K.morphAttributes.normal,_e=!!K.morphAttributes.color,ue=rn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ue=I.toneMapping);let oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=oe!==void 0?oe.length:0,At=Y.get(W),De=T.state.lights;if(lt===!0&&(at===!0||v!==z)){let ce=v===z&&W.id===B;Bt.setState(W,v,ce)}let ne=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==De.state.version||At.outputColorSpace!==bt||X.isBatchedMesh&&At.batching===!1||!X.isBatchedMesh&&At.batching===!0||X.isBatchedMesh&&At.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&At.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&At.instancing===!1||!X.isInstancedMesh&&At.instancing===!0||X.isSkinnedMesh&&At.skinning===!1||!X.isSkinnedMesh&&At.skinning===!0||X.isInstancedMesh&&At.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&At.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&At.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&At.instancingMorph===!1&&X.morphTexture!==null||At.envMap!==Ut||W.fog===!0&&At.fog!==Tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Bt.numPlanes||At.numIntersection!==Bt.numIntersection)||At.vertexAlphas!==Jt||At.vertexTangents!==te||At.morphTargets!==It||At.morphNormals!==se||At.morphColors!==_e||At.toneMapping!==ue||At.morphTargetsCount!==Ce||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,At.__version=W.version);let Xe=At.currentProgram;ne===!0&&(Xe=ar(W,F,X),V&&W.isNodeMaterial&&V.onUpdateProgram(W,Xe,At));let un=!1,Pn=!1,pi=!1,ae=Xe.getUniforms(),ge=At.uniforms;if(_.useProgram(Xe.program)&&(un=!0,Pn=!0,pi=!0),W.id!==B&&(B=W.id,Pn=!0),At.needsLights){let ce=gu(T.state.lightProbeGridArray,X);At.lightProbeGrid!==ce&&(At.lightProbeGrid=ce,Pn=!0)}if(un||z!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ae.setValue(C,"projectionMatrix",v.projectionMatrix),ae.setValue(C,"viewMatrix",v.matrixWorldInverse);let Ln=ae.map.cameraPosition;Ln!==void 0&&Ln.setValue(C,q.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&ae.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,Pn=!0,pi=!0)}if(At.needsLights&&(De.state.sunShadowMap.length>0&&ae.setValue(C,"sunShadowMap",De.state.sunShadowMap,j),De.state.directionalShadowMap.length>0&&ae.setValue(C,"directionalShadowMap",De.state.directionalShadowMap,j),De.state.spotShadowMap.length>0&&ae.setValue(C,"spotShadowMap",De.state.spotShadowMap,j),De.state.pointShadowMap.length>0&&ae.setValue(C,"pointShadowMap",De.state.pointShadowMap,j)),X.isSkinnedMesh){ae.setOptional(C,X,"bindMatrix"),ae.setOptional(C,X,"bindMatrixInverse");let ce=X.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),ae.setValue(C,"boneTexture",ce.boneTexture,j))}X.isBatchedMesh&&(ae.setOptional(C,X,"batchingTexture"),ae.setValue(C,"batchingTexture",X._matricesTexture,j),ae.setOptional(C,X,"batchingIdTexture"),ae.setValue(C,"batchingIdTexture",X._indirectTexture,j),ae.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&ae.setValue(C,"batchingColorTexture",X._colorsTexture,j));let In=K.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&O.update(X,K,Xe),(Pn||At.receiveShadow!==X.receiveShadow)&&(At.receiveShadow=X.receiveShadow,ae.setValue(C,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(ge.envMapIntensity.value=F.environmentIntensity),ge.dfgLUT!==void 0&&(ge.dfgLUT.value=L0()),Pn){if(ae.setValue(C,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&xu(ge,pi),Tt&&W.fog===!0&&Ot.refreshFogUniforms(ge,Tt),Ot.refreshMaterialUniforms(ge,W,et,Z,T.state.transmissionRenderTarget[v.id]),At.needsLights&&At.lightProbeGrid){let ce=At.lightProbeGrid;ge.probesSH.value=ce.texture,ge.probesMin.value.copy(ce.boundingBox.min),ge.probesMax.value.copy(ce.boundingBox.max),ge.probesResolution.value.copy(ce.resolution)}ns.upload(C,ec(At),ge,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(C,ec(At),ge,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(C,"center",X.center),ae.setValue(C,"modelViewMatrix",X.modelViewMatrix),ae.setValue(C,"normalMatrix",X.normalMatrix),ae.setValue(C,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let ce=W.uniformsGroups;for(let Ln=0,mi=ce.length;Ln<mi;Ln++){let sc=ce[Ln];ot.update(sc,Xe),ot.bind(sc,Xe)}}return Xe}function xu(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function vu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(v,F,K){let W=Y.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=F,Y.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let K=Y.get(v);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,K=0){w=v,$=F,Q=K;let W=null,X=!1,Tt=!1;if(v){let bt=Y.get(v);if(bt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(C.FRAMEBUFFER,bt.__webglFramebuffer),J.copy(v.viewport),ct.copy(v.scissor),ht=v.scissorTest,_.viewport(J),_.scissor(ct),_.setScissorTest(ht),B=-1;return}else if(bt.__webglFramebuffer===void 0)j.setupRenderTarget(v);else if(bt.__hasExternalTextures)j.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Jt=v.depthTexture;if(bt.__boundDepthTexture!==Jt){if(Jt!==null&&Y.has(Jt)&&(v.width!==Jt.image.width||v.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(v)}}let Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Tt=!0);let Ut=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?W=Ut[F][K]:W=Ut[F],X=!0):v.samples>0&&j.useMultisampledRTT(v)===!1?W=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?W=Ut[K]:W=Ut,J.copy(v.viewport),ct.copy(v.scissor),ht=v.scissorTest}else J.copy(gt).multiplyScalar(et).floor(),ct.copy(zt).multiplyScalar(et).floor(),ht=Qt;if(K!==0&&(W=G),_.bindFramebuffer(C.FRAMEBUFFER,W)&&_.drawBuffers(v,W),_.viewport(J),_.scissor(ct),_.setScissorTest(ht),X){let bt=Y.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,K)}else if(Tt){let bt=F;for(let Pt=0;Pt<v.textures.length;Pt++){let Ut=Y.get(v.textures[Pt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,K,bt)}}else if(v!==null&&K!==0){let bt=Y.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,bt.__webglTexture,K)}B=-1};function ic(v){let F=Y.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=A.textureFormatReadable(v.format),F.__typeReadable=A.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,K,W,X,Tt,Ct,bt=0){if(!(v&&v.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){_.bindFramebuffer(C.FRAMEBUFFER,Pt);try{let Ut=v.textures[bt],Jt=Ut.format,te=Ut.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt);let It=ic(Ut);if(It.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-W&&K>=0&&K<=v.height-X&&C.readPixels(F,K,W,X,yt.convert(Jt),yt.convert(te),Tt)}finally{let Ut=w!==null?Y.get(w).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(v,F,K,W,X,Tt,Ct,bt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(F>=0&&F<=v.width-W&&K>=0&&K<=v.height-X){_.bindFramebuffer(C.FRAMEBUFFER,Pt);let Ut=v.textures[bt],Jt=Ut.format,te=Ut.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt);let It=ic(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.bufferData(C.PIXEL_PACK_BUFFER,Tt.byteLength,C.STREAM_READ),C.readPixels(F,K,W,X,yt.convert(Jt),yt.convert(te),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let _e=w!==null?Y.get(w).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,_e);let ue=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xh(C,ue,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Tt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(se),C.deleteSync(ue),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,K=0){let W=Math.pow(2,-K),X=Math.floor(v.image.width*W),Tt=Math.floor(v.image.height*W),Ct=F!==null?F.x:0,bt=F!==null?F.y:0;j.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Ct,bt,X,Tt),_.unbindTexture()},this.copyTextureToTexture=function(v,F,K=null,W=null,X=0,Tt=0){let Ct,bt,Pt,Ut,Jt,te,It,se,_e,ue=v.isCompressedTexture?v.mipmaps[Tt]:v.image;if(K!==null)Ct=K.max.x-K.min.x,bt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Ut=K.min.x,Jt=K.min.y,te=K.isBox3?K.min.z:0;else{let ge=Math.pow(2,-X);Ct=Math.floor(ue.width*ge),bt=Math.floor(ue.height*ge),v.isDataArrayTexture?Pt=ue.depth:v.isData3DTexture?Pt=Math.floor(ue.depth*ge):Pt=1,Ut=0,Jt=0,te=0}W!==null?(It=W.x,se=W.y,_e=W.z):(It=0,se=0,_e=0);let oe=yt.convert(F.format),Ce=yt.convert(F.type),At;F.isData3DTexture?(j.setTexture3D(F,0),At=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),At=C.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),At=C.TEXTURE_2D),_.activeTexture(C.TEXTURE0),_.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let De=_.getParameter(C.UNPACK_ROW_LENGTH),ne=_.getParameter(C.UNPACK_IMAGE_HEIGHT),Xe=_.getParameter(C.UNPACK_SKIP_PIXELS),un=_.getParameter(C.UNPACK_SKIP_ROWS),Pn=_.getParameter(C.UNPACK_SKIP_IMAGES);_.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),_.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),_.pixelStorei(C.UNPACK_SKIP_IMAGES,te);let pi=v.isDataArrayTexture||v.isData3DTexture,ae=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let ge=Y.get(v),In=Y.get(F),ce=Y.get(ge.__renderTarget),Ln=Y.get(In.__renderTarget);_.bindFramebuffer(C.READ_FRAMEBUFFER,ce.__webglFramebuffer),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let mi=0;mi<Pt;mi++)pi&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,te+mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,Tt,_e+mi)),C.blitFramebuffer(Ut,Jt,Ct,bt,It,se,Ct,bt,C.DEPTH_BUFFER_BIT,C.NEAREST);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){let ge=Y.get(v),In=Y.get(F);_.bindFramebuffer(C.READ_FRAMEBUFFER,U),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,H);for(let ce=0;ce<Pt;ce++)pi?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,X,te+ce):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ge.__webglTexture,X),ae?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,In.__webglTexture,Tt,_e+ce):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,In.__webglTexture,Tt),X!==0?C.blitFramebuffer(Ut,Jt,Ct,bt,It,se,Ct,bt,C.COLOR_BUFFER_BIT,C.NEAREST):ae?C.copyTexSubImage3D(At,Tt,It,se,_e+ce,Ut,Jt,Ct,bt):C.copyTexSubImage2D(At,Tt,It,se,Ut,Jt,Ct,bt);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ae?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(At,Tt,It,se,_e,Ct,bt,Pt,oe,Ce,ue.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(At,Tt,It,se,_e,Ct,bt,Pt,oe,ue.data):C.texSubImage3D(At,Tt,It,se,_e,Ct,bt,Pt,oe,Ce,ue):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Tt,It,se,Ct,bt,oe,Ce,ue.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Tt,It,se,ue.width,ue.height,oe,ue.data):C.texSubImage2D(C.TEXTURE_2D,Tt,It,se,Ct,bt,oe,Ce,ue);_.pixelStorei(C.UNPACK_ROW_LENGTH,De),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ne),_.pixelStorei(C.UNPACK_SKIP_PIXELS,Xe),_.pixelStorei(C.UNPACK_SKIP_ROWS,un),_.pixelStorei(C.UNPACK_SKIP_IMAGES,Pn),Tt===0&&F.generateMipmaps&&C.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&j.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?j.setTextureCube(v,0):v.isData3DTexture?j.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?j.setTexture2DArray(v,0):j.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){$=0,Q=0,w=null,_.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var sr=new D;function Ze(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;sr.copy(t),sr[n]=0,sr.normalize();let c=.5*a/(a+o),h=1-sr.angleTo(i)/l;return Math.sign(sr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var co=class i extends _n{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,M=new D,m=.5/a;for(let f=0,b=0;f<d.length;f+=3,b+=2)switch(l.fromArray(d,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[f+0]=h.x*Math.sign(l.x)+c.x*r,d[f+1]=h.y*Math.sign(l.y)+c.y*r,d[f+2]=h.z*Math.sign(l.z)+c.z*r,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/g)){case 0:M.set(1,0,0),p[b+0]=Ze(M,c,"z","y",r,n),p[b+1]=1-Ze(M,c,"y","z",r,e);break;case 1:M.set(-1,0,0),p[b+0]=1-Ze(M,c,"z","y",r,n),p[b+1]=1-Ze(M,c,"y","z",r,e);break;case 2:M.set(0,1,0),p[b+0]=1-Ze(M,c,"x","z",r,t),p[b+1]=Ze(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),p[b+0]=1-Ze(M,c,"x","z",r,t),p[b+1]=1-Ze(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),p[b+0]=1-Ze(M,c,"x","y",r,t),p[b+1]=1-Ze(M,c,"y","x",r,e);break;case 5:M.set(0,0,-1),p[b+0]=Ze(M,c,"x","y",r,t),p[b+1]=1-Ze(M,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ke={minX:-6,maxX:6,minZ:-7,maxZ:7},Me=.24,fi=[{name:"Sofa",x:-4.6,z:.3,w:1.8,d:3.1,h:.92},{name:"Table",x:1.3,z:-1.5,w:2.8,d:1.6,h:.78},{name:"Cabinet",x:5.35,z:-4.4,w:.85,d:3.6,h:1.95},{name:"Desk",x:-3.5,z:-4.65,w:2.4,d:1.1,h:.76},{name:"Office chair",x:-3.5,z:-3.35,w:.84,d:.84,h:1.1,shape:"circle"},{name:"Meeting chair",x:1.25,z:-3,w:.8,d:.8,h:1.05,shape:"circle"},{name:"Meeting chair",x:2.1,z:.08,w:.8,d:.8,h:1.05,shape:"circle"},{name:"Coffee table",x:-2.75,z:.35,w:.95,d:.95,h:.43,shape:"circle"},{name:"Planter",x:-5.12,z:-5.85,w:.7,d:.7,h:.62,shape:"circle"},{name:"Planter",x:5.05,z:3.8,w:.85,d:.85,h:.72,shape:"circle"}],ho=[{x:-1.8,z:5.5,yaw:-.12,pitch:-.1},{x:-1.8,z:4.3,yaw:.12,pitch:-.1},{x:-1.8,z:3,yaw:0,pitch:-.1}],Mn=(i,t)=>Math.hypot(t.x-i.x,t.z-i.z);function Yl(i,t){return t.shape==="circle"?Math.hypot(i.x-t.x,i.z-t.z)-t.w/2:Math.hypot(Math.max(0,Math.abs(i.x-t.x)-t.w/2),Math.max(0,Math.abs(i.z-t.z)-t.d/2))}function Zn(i,t,e=Me,n=fi){return!Number.isFinite(i)||!Number.isFinite(t)||i<Ke.minX+e||i>Ke.maxX-e||t<Ke.minZ+e||t>Ke.maxZ-e?!1:n.every(s=>Yl({x:i,z:t},s)>=e-1e-9)}function iu(i,t,e){let n=e.x-t.x,s=e.z-t.z,r=n*n+s*s,a=r?Math.max(0,Math.min(1,((i.x-t.x)*n+(i.z-t.z)*s)/r)):0;return Math.hypot(i.x-t.x-a*n,i.z-t.z-a*s)}function D0(i,t,e){let n=0,s=1;for(let[r,a]of[["x",e.w/2],["z",e.d/2]]){let o=t[r]-i[r],l=e[r]-a,c=e[r]+a;if(Math.abs(o)<1e-10){if(i[r]<l||i[r]>c)return!1}else{let h=(l-i[r])/o,d=(c-i[r])/o;if(n=Math.max(n,Math.min(h,d)),s=Math.min(s,Math.max(h,d)),n>s)return!1}}return!0}function ss(i,t,e=Me,n=fi){return!Zn(i.x,i.z,e,n)||!Zn(t.x,t.z,e,n)?!1:n.every(s=>{if(s.shape==="circle")return iu(s,i,t)>=s.w/2+e-1e-9;if(D0(i,t,s))return!1;let r=Math.min(Yl(i,s),Yl(t,s));for(let a of[-1,1])for(let o of[-1,1])r=Math.min(r,iu({x:s.x+a*s.w/2,z:s.z+o*s.d/2},i,t));return r>=e-1e-9})}function N0(i){return i.reduce((t,e,n)=>t+(n?Mn(i[n-1],e):0),0)}function su(i,t){let e=[i[0]],n=0;for(;n<i.length-1;){let s=i.length-1;for(;s>n+1&&!ss(i[n],i[s],Me,t);)s--;e.push(i[s]),n=s}return e}function U0(i,t,e){if(ss(i,t,Me,e))return[{x:i.x,z:i.z},{...t}];let n=[{x:i.x,z:i.z},{...t}],s=Me+.015;for(let l of e)if(l.shape==="circle"){let c=(l.w/2+s)/Math.cos(Math.PI/16);for(let h=0;h<16;h++){let d={x:l.x+Math.cos(h*Math.PI/8)*c,z:l.z+Math.sin(h*Math.PI/8)*c};Zn(d.x,d.z,Me,e)&&n.push(d)}}else for(let c of[-1,1])for(let h of[-1,1]){let d={x:l.x+c*(l.w/2+s),z:l.z+h*(l.d/2+s)};Zn(d.x,d.z,Me,e)&&n.push(d)}let r=n.map(()=>1/0),a=n.map(()=>-1),o=new Set;for(r[0]=0;o.size<n.length;){let l=-1;for(let c=0;c<n.length;c++)!o.has(c)&&(l<0||r[c]<r[l])&&(l=c);if(l<0||!Number.isFinite(r[l]))break;if(l===1){let c=[];for(let h=1;h>=0;h=a[h])c.unshift(n[h]);return su(c,e)}o.add(l);for(let c=0;c<n.length;c++)if(!o.has(c)){let h=r[l]+Mn(n[l],n[c]);h<r[c]&&ss(n[l],n[c],Me,e)&&(r[c]=h,a[c]=l)}}return null}function F0(i,t,e){let s=Ke.minX+Me,r=Ke.minZ+Me,a=Math.floor((Ke.maxX-Me-s)/.12)+1,o=Math.floor((Ke.maxZ-Me-r)/.12)+1,l=a*o,c=new Uint8Array(l),h=new Float64Array(l).fill(1/0),d=new Int32Array(l).fill(-1),u=m=>({x:s+m%a*.12,z:r+Math.floor(m/a)*.12});for(let m=0;m<l;m++){let f=u(m);c[m]=Zn(f.x,f.z,Me,e)?1:0}let p=[],g=new Set,M=new Uint8Array(l);for(let m=0;m<l;m++)if(c[m]){let f=u(m);Mn(i,f)<.12*2&&ss(i,f,Me,e)&&(h[m]=Mn(i,f),p.push(m)),Mn(t,f)<.12*2&&ss(f,t,Me,e)&&g.add(m)}for(;p.length;){let m=0;for(let S=1;S<p.length;S++)h[p[S]]+Mn(u(p[S]),t)<h[p[m]]+Mn(u(p[m]),t)&&(m=S);let f=p.splice(m,1)[0];if(M[f])continue;if(M[f]=1,g.has(f)){let S=[{...t}];for(let T=f;T>=0;T=d[T])S.unshift(u(T));return S.unshift({x:i.x,z:i.z}),su(S,e)}let b=f%a,R=Math.floor(f/a),y=u(f);for(let S=-1;S<=1;S++)for(let T=-1;T<=1;T++){if(!S&&!T||b+S<0||b+S>=a||R+T<0||R+T>=o)continue;let P=f+S+T*a;if(!c[P]||M[P])continue;let x=u(P),E=h[f]+Mn(y,x);E<h[P]&&ss(y,x,Me,e)&&(h[P]=E,d[P]=f,p.push(P))}}return null}function ru(i,t,{obstacles:e=fi,maxAdjustment:n=.65}={}){if(!Number.isFinite(t.x)||!Number.isFinite(t.z)||t.x<Ke.minX||t.x>Ke.maxX||t.z<Ke.minZ||t.z>Ke.maxZ)return{ok:!1,reason:"The selected point is outside the office floor."};if(!Zn(i.x,i.z,Me,e))return{ok:!1,reason:"The robot has insufficient clearance. Reset the room."};let s=[];if(Zn(t.x,t.z,Me,e))s.push({...t});else{if(e.some(r=>r.shape==="circle"?Mn(t,r)<r.w/2:Math.abs(t.x-r.x)<r.w/2&&Math.abs(t.z-r.z)<r.d/2))return{ok:!1,reason:"The selected floor point is occupied by furniture."};for(let r=.04;r<=n+1e-9;r+=.04)for(let a=0;a<32;a++){let o={x:t.x+Math.cos(a*Math.PI/16)*r,z:t.z+Math.sin(a*Math.PI/16)*r};Zn(o.x,o.z,Me,e)&&s.push(o)}}for(let r of s){let a=U0(i,r,e)||F0(i,r,e);if(a)return{ok:!0,path:a,target:r,length:N0(a),adjusted:Mn(t,r)>.005}}return{ok:!1,reason:s.length?"No collision-free route reaches the selected floor area.":"There is not enough space for the robot near this point."}}function rs(i){return{x:20+(i.x+6)*24,y:20+(i.z+7)*24}}function au(i){let t=[],e=[];for(let n=-9;n<=9;n++)for(let s=-11;s<=11;s++)e.push({x:n*28,y:s*28});e.sort((n,s)=>Math.hypot(n.x,n.y)-Math.hypot(s.x,s.y)||n.y-s.y||n.x-s.x);for(let n of i){let s=rs(n),r=e.find(o=>{let l=s.x+o.x,c=s.y+o.y;return l>=33&&l<=295&&c>=33&&c<=343&&t.every(h=>Math.hypot(l-h.display.x,c-h.display.y)>=27)}),a=r?{x:s.x+r.x,y:s.y+r.y}:s;t.push({anchor:s,display:a})}return t}var ou="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAIAAgADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAPxAAAQMCAwYEAwcCBQUBAQEAAQACEQMhEjFBEyJRYXGBBDKR0RRCoVJicoKSscEj4TNzg5PwQ1NjovGyBST/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQIF/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBITH/2gAMAwEAAhEDEQA/AGxkDNt+UJTWdGY7J3gmxbEZpRTBBimOq5joELnZueAPVF9Z0WJ6wmFKBZpHUrCmciLoJ7fi1qx8QLggzwBKoaUC4KGxxfKO5KCLnutgkdSFXE91MYSBqZRHhyBZojqkNAtMhhAzzQYOcd7dEckoc8/Z9IXRTZiBOzIA+1ZMaIgAi55JRztxmwIJ5LPbVa2XTxVxQcBDZ9UNlUBIJIPO6UctPxDTVDMLp4ro8K6PDtuYk6/eKceGgB1sXQKPhpd4ctGcuH1KC21aZG50NpWcQLtOA/T1C5yHup4Wt3mmDZUpuxQCYhXUxQjFBDsR13li28uBB1kSuZzi2rFmjpErrojE3F/Km8XGZDrNAnhiIRwGYfAPDGhWptdnTDjx1+i5qzqdNh3IdoBmmdHQ4YRALTH3kGteW7o7ghc/hnskGrplNwVZ1SgX3c0dykDlrxAd/wDsWWyN4nSHhYMpHLAfqkc6oxwwjc1LRn2QMYBgA/8AOawHAmVI1RcNieeaZj5lzmknKEFJJAH1QLgHefPggMReQWfLLeS0BjQS25uZQOXNzBnnmma6bn1N1NrXQS50jhqqiI8pTcAnGYH7wg5gAsXTxBTAWJASucYsD3UCDGXEGVQggeZ88iSgyo6Mge0p8WhEdkHO4uvJ7kSpYjigERqYXa8cA09lJzTM/wAKiZaaYxDE4cdAgHlzSWtxN+1oqupl2ZBA4otouggWHVBy1KlrgARnZTacIxGDhMZyuz4R2KRHK5/lA+EcDvNMTxSjnHi24JwkkZ2hWo1gcUTByvdGt4QOEjEJCmPChpBBJOVynBTagC7oPACZ9EGvxyA1wP1KUtIGHF2BRh/2SgYCq0S1x5gpDWLXyQJHAhYgQc/RBrQDutE8cIQPRrNe8wQexCZ9YMllQls5Q4H6KTmF4u4xyslbTDbFolB0MDD5ak8iAi4PH/1RLXzABHZZzX6F/wDzsoHmDlfitaJJSNa7meyLmkjXtKofCMwscIaSSQAlDBqHT0KMHi6ByKBWv2nkFlpIMWBGkLFrcWIEyOSxBJlzrjiEBFQ5CJ6JKrnDzmOuqOEgyL9Fi0vdOGTyQRjEW4SZcbaIFjsTg9xGkLoZScOKY4wL6akK1ISnTNHDUzkXCfa0y+RT7kFBxJ+b/wBQgMV3YrD7qimLmEeRt+ZQkzolLWm73n9JVQ5gADcTieyBzsnNDg6+krGpTBwvJMcLBc3h/CNwmarpOkIjw9TFaYGkoOsOpFsgesphh+UNB6XUqdOBl63VBA1KDPDrQ0JQHCSR9U2I8T6LGoMNySOiDbxM+hlCXZYhnHNDEy0esomoJiMtUBOelxogWmCC7sBkiajcMXOt7oHxDbcdICQbYFwkTfig6gZgET1QNeTYzxSiq2bzdA4putoQbmVy0BhpkAEkud+5XQKom+p1Kn4ZpdRB4lxn8xQS2ciHZTkD/wAhOAQIAa3oJVxRkTZbA4f/ABBHAXWdJbzKd7SacU8LdJmf4TgQIg35rODj83K6CB8KAN5xk5EZpR4dsQXFw5jJdLmmMmzpmkwE8ABxSpEhTY2AGkgcQqQSIc1hHCUQBYSOwWIi0iOiKkWBvlD2zwTNquaAHBrhxIIKoW2kDuB/dLczr0KCby2ofLfjIMINaSJIvxb7FVMgQRbgUAW5R2hEMHunIkDIgZLHeaQZjMTolFQDWUzqpMyJA4IrB7oE2PJO1pIkgesKRqmbAeiO0k3b6oK4b2JSOOHhdbG4ZzySmoYMtlAweIkgeiLXknd/hI1wsC0xzWe4aNjmgoS6Jj6QkxOsMkuN3FHakkAxlqEgYucM5KEvzAklM2oRwR2hLbDNETxVWj5uPD+E2Mu1K2OBuz2WD40bxyugGIzlkmcBEgAIl8jJIXxYS0c7JAQ9+WqxNQCzCfUJcToN/UINqOI4eqRTNLjfARzmQthccwJ7rNJaJiDxTOe45GD1SIAa4+Yg8rovDpmBMcEA90kSI1EoAmYA+qDFjokkR0RwEg3GWSxecnEn6/wtjbhHLiigKJMyCI7fRAMZNniUxeB8tOeYWNRwHmaB0QZwcBOY5CUGsLjp0LSiKpAgDNCk4GSWtnoUBLMAuRzzSlrp3foU5NMjKOiLcOgB6hIInEMwZ/CsDBuDwyVxGGIdPJKTGUg8QgDAOATuY6bDLgkkEgloPNOcBFwQOhSFReDJItGk5JWwWmWnurlpglocR0/up4McnI8kgm7ARaxCVrgH5kDNO+lBu6x0UqtIkHePe6qOnZ0xkHt6PclwMk/4v63JnThmBKAa7QO7FSqTZA6v/W73U61KKYIc8bzR53akc1YtdNmz3U/ENMDE35mz6hVG2TCT/ifrd7oGiyZO0/3D7q2GmbXEckpDdHAwikFKnhzqmT9tyIo0vtVe73e6YNM+aPVEA54pPMIiRo0sWdSP8x3um2FE61IP/kd7pwySbLFpGQHqECfD+Hz/AKn63e6LfD0J/wCoeI2h90+A5wOyAxG+Dd6IpTQ8PNtof9Q+62Cm1oazaADTaFVBnIDpCE3MtjmFESwtmZqd3n3RDP8AMjhiPunxaX6wjicIg/ugTYlzZG0jlUI/lAUTmXP/AFlOA69yJ5LBnFxnogQUmjMvMffOfqn2FM5uqD8x90zQ3Ivkc0ZaCIdPdAvw9EZmoeEPKxo0TGEPJnLG66YuIvHRKCZkoAKNO535GmM+6BosLrh36z7qgccp+qDjBs64VCGgxwzf+t1/qt8O2LYgItLyqB4A073W2rSMm8oQTHhW/af+oofDtnOpP+YT/KpjaOA6LWccxbigQeGB+Z/6ij8OInE4R99wTENHTkiBN1Avw7DEufH43W+qU+GbB33H85T4LxAN9E2zJsAUHMKIcIBeYzOMot8NIu540s9ytswx0Z84RLw3O5PKZVET4VrRE1DH3nFb4VuHdbUPV591RsF12DrBQeTIw7vMEhTqonwzQb47/fct8NS1D75b7vddIO5Aa8dXJRiFzMZWcgiPC0heXjljd7rDw1Npnf6Y3e6q8GLO6An+Upa4QLmeaBNjSP2+zj7obClEw7u4+6d7b3k21KRrLZIHFOiLFr/9x3umDfDgWZf8Z91MNPDsm2AmSAO6CgZRffC+OIeVjSoi2B/d7r/VZkN1nvZA9LdUBdSouHlIj7zvdA0aboFwOTne6EDUX6rBgJuD0CA7Gg2ZxX++UgoUjcF/QPd7qhpmcge6ApuOQieBsgT4amQC7Hb75WNCm4TL7cXG31T4HNN4PEyqYThkG3JyUc5oUTYtLupd7pTQoNiGu4Zn3XRhEmSf1LOZexdHVKRzYabfK2ofzu91sII+cDm8+66DSkeZxniUgokcupSiQa2bl/DzOVG0mEkS/wDUfdA0iDJdHQquxdTbDnkTqDdBLA1rrF/Z7vdOKLCbiob6vPuqmlu2cRCRlN0wL90Cmi20B/6z7rbFpIkVP1n3VTTtnJFrFAUnfK02+8lCbFl8QqnjLnLbCn9l36ynLSND+pLBAmxnO6UM1sONgJ4kWVHGLm9tFzyGmSASeKO0bJsEHRuESWEHoFz+JAFIQyDjbpncLGoyMo9UtV4cGASf6jbdwgIDouyRwKBMGHNI1sVfE0OsASOKXEDwhBElo0I+qFrGY7BdIIAgiR6rYmBpENA5hBz5ZOM9EAXOMyeuS6RhIO6y/BK9oDhDeoQRiobA3R2byJJH7KrWC5A/dMxrQQ0uLSeZSjnwuBgmBwkIwGm+IH/nJXNMyYJjRBzIFiZ5pRIOdO6Y5lEzO86RxRFJpIzPG8JtlSF8Lo6oEcQBmlLmxa44KkMBloBngs/DYNbhHBKJY7ZdEWl5BAGfEqwM3a0dYKABOZCCQDsMysGQbklUwEg2JT7OBw6lKRMNbN57mycNYALBYEDMz0CIqMnIHulIEMPLsFsLSd7MaymLwQNOiwcDEn6qUiYDNZHdBwp4ojvoqEmM5A4pZlu9HKyomQ03CwwEZwq7pzAEXsSlwsLol1+mSBAABuvE9U01QSJaUxa35ST1EStSAczzAcReEGY9zRvsxdpTCvTicMEdkNnh4RyK0NIu0TxAQM6pSJtboUZZhIGZ1Smkw2iespXUqYNwATpMIHDRhuXEcZkJcDXHdqAcg32Supgzhn9QQwQDOLggoaAmC6/4UQHCwDTP3VCDmC+OaIYTJxO6XRDCmYNxGsWVKdEvkNLW8ZuVIsfaHQQlwvcJ2gI5lFV2RxQQbZ2W2QmwF+V1Itd9qe6wDRElEUNMWl+HTggWMDpDp5JC1uru0okDgeyKMsxCTPRPSDHbxd/KFMsaf5KoakMsLcgEAfDhOI9JWa1pEEyp7UfdFlh4pgIEkoGeKYHzWyhDG3DAB9Vq1driYdEaSgBivNzoUBBuYkSiIM4gQeMIZfKTHKyV0HQhKGL2i05aBTfWaOvJNDMOcnhwSbMOOnqlSJhxc4WzGphCn4d5OIZT9pdTKQAt6wiKd5M+hCVWbJbEgI30LTx3gsY+6eyQNxXLQPoiHh0g42kcoWLJPmbHVI4ADyCeq0bskR3sUUxBJgYY6hNhEZAlTY6JsewJQLm5huXLJByg1CJwgFO1tV8FogclbYB51tyhE0qgG7itzSkctR7qZ38SArNqU2kSBjbn1XQaD3xNxqCJUvE0thTkARjafqEFzUw2k9M0RUBOjo4WIUa8lrKgEtBuNUjw5tbaQAw5clYOgFod/iYeRt9VgwzukOB4OH8pXHFSJBxHOFGg444dmdMlB0YQBvAgdEcJcJZgjiH/ANlVjRESPVQqU6fm2LIGoUpDtY3Dixst95K67rFp7rkrVWioBTaLcDAXTSq0GU8MidQ4GfVWFOWVCZnCPxhBodJBc0dXhKw+FdYYZ4GVQtaBNNrMXMIBDSIEEcnE/wAIZwIiePtmp7SoAdsDyGg7obYzLMIbxCCwGG82nVbjJDQkDjhDabN6LOOhQaC+nTlsSYd1QMHMyLjHNbbBtgTfgo1aly1m7F5CBxZElxGspB0O8QGtk26KZrNePNAUX0nkGc0RS3QALRYpMLp3VYFsuSm15mTZBrbSEwDzkVeJ1jUAEusOqNOtvgAm/EJHNqOIIAMaFBzXhsYet4VmF12MfhBDimBpuNw7LQrkLyBBsVjUEA+izFrqaWm0z+6Y20B46LkxucQDB0um/qMvcDrZIOio5kAXFtEmMEy2bqWNxzAtkZlbzRi/+JmC2MDMxNrpHVxfDifyg/uk3spEJTixSCTpJQXBL4IDo5Ji6owGXSNJK5d8eZruwTSDm1xA0whA5rANvlyuqMfipy0juCFIYg2BujSGpXUcTgYLzzugfbUqjoc4gjgQQqgT5HYoUWMPyNy4IhjznKBiHDOEA45DJJgfOboTAEf/AD+6Bt0TdGANPRIGS6Ti/wCd0+AaAygWo9tP7V1hiImLDWUSLGS6/KUGjADgLh0CAF2ETMjomxPcN23SyXCBaRfksMTbceeaCT3Yjhkk5WEpGscQ4skgK+yJyEdEzabhBExyVqRz06GItBJMWJXSx2yYabm4hoiXGbmOgSOJ+0b8gp6pxUZh/wAMAE6oEtkhrWtOVkIcIBeePlRaKeLee6Y+ygwJGUeiDqrhqLcU+IGS1hLRxKRzAblg/hQKajnGA4BZlQtN3yeQTGlN8ELGkbACI5qhDXdNzPIobcagKmykZFY0xMBv8IJGs1xhuNBj3B+8bE21Vfh5yaAepWNAkXZPDeQBzngky2Dolc5zRfDe8LNYWeZhPIAldAo2G5EqCpaXGzj0Q2BuQbdgkPiW3iQOkJXV5GvorEOaTheZ7gqPi2HYwSYxsy6hMKowkXU/EVMTGibl7f3Vg1QYmAQABxWDROIgF3E5KgbPAJtnGo91FTOK+9HIQAmYA12JwE6ku/smLTHLmViczBEc/wC6BalI1HxjAaNBJSPoMPzEcYCoGmTJaeo/ug4XtB6JSE2NPFJxE52CIBGTQDxJRIjMhGARIIkIA8BwuwE8QbpRiBlrntj7QkJ9YMHoEDugxbkiNtpBxMaTxCkYMuYIxZgi30VTnlP1Qe4GQ4SeaKVgLXEtkW1gj1TlzuBBmbceKBe3MGDxOqIqx5YtxQJUBx4hmbH3StxOgXPJUNSDMXhAPJuBM5EIHFKBw6FbZRac+SRrzoI7I7V02kd0gbYkSXXPEIilLfMlFZwsWlEVZN2z3SFA08OY7hLhBEEHqqh1s4H3kwkNuGqDmfTlttEoYRmJPRdbxLbGOyAaZ8w6TZUc9OmRBj6J3OdhhzXEG02CsGxcYeaJEgHE0Txcg5ms4jd4SmcymGjEInlKvEGdyed0HEOguwmEEMFIkQY45p4cRaSOcp8IBkfss9zheQSgg8PDrtHc3/dO1r4AwAHhE/ynJe6Ad7kAUwLgYAIEZQP3KBQx/wAtpztf91QMcIkQSNQkc597W4QStL3NuAeV0GwPMAAQeWaIYQYP7Sg3HnAHQlHFJBcOkoFdTsCDi7BKabBBc6J4XVC4YjcT0KGOTu26AoA1gj+m6dMoQIcDDrfl/lHHJhxnlCFSqSALRzGSAtZInE39KDhmMzwgpi4BolrT2SuwzIAB6IFwv+UGJ4oS7g6ByVRxw2HKUXQbwQO0IJtIyIy5WVmAHICY1Uw4tMZDgmYQM2eiQrOaWiSLdclJwIjXlN1eGk2meAbCFRrsnNMc0EjhBktt0U3houMiq7GwgnL0UzSt5jPJA3h3sBh5N+YVJY0ktdkLrjd4bG4YnFqs7woawFjnOI7JuC4q0SbhxJ1JunmmDAA7rlpUHi7r9V0Bv/AEFBwAEdFM4r7sa5ol3AmEMZkSTfkiC0uFovHFaXAEgx3lI6qwu3pWD2i8wNISKfEZIcWnktJPDLOJSCq0zMtngUduwGQM9SEggPCUHGwflljcP5TDwXhosHH87vdO0bwztccE0GefVAnwVCLhwB/8jvdKfBUJBaHWMjfdY+qecwUcQOefJOhfhqX2qg/1He6I8PTDRD3/AKymDyDmlL3QOWqDHw1OLuq9qjvdLsGDN1UdXn3TbTWUC4gyCgU0acCDUH53e63w7ReXx/mFO2oevCUpcDGh1QY+GaMsYPOofdEeHowAS8HlUd7oCbQeoK2IhtsNuSBvhKDnQ01v1OTfBUhm6pHJ7vdSFR8zyVG1nE5npKdB+Cph046v+4UD4OkHAzU/3D7pg8k3KLnH0QTd4SmLTUDSf+4fdb4WiRuOefzm6cWO9cprFtoJ1gIEHhKbQCcc6f1He6LfDUozeT/mO907jBGUfskxE5n1KAnwtAA3eP8AUd7pPhqMxL/1uVSb2dKx4IJjwlLDJcT+Ypfh6NwHVP1lEAXB+qYBuRKBB4WkRDi+dP6hugfCUmuuanUVHSqmwi60aCSOaCY8KyZ2lQD/ADHSg7w7BO9UjlUKpDgNR2WDjizcAgRvh2gAtqVW9ahH8ofDsxSX1DGu0JVdo4ZwW/VCRqSgQ0A4Hfqgf5hQ+FGYq1f1ldAw52PdKXAHeEBKI/DG39Wqf9Qpj4ZpG8XmNcZVC9toy5oS11pseKCfwjD8z/1lb4YAmCf1n3VYHEdkIBtn1QQ+Hpxrb77h/KI8LTmxPGzz7qhb9mMputDgJgSiJnw9ObzP43e6Pw9IkRP6z7pt4/K29kRNuJ4QgX4akDG8YvJefdDYUWkANvn5j7p4dwI5pg05E3RSChSJ/wAKT+I+6X4WkT/giep91VueeSxdpJHZKJDwlDSkwdzZEeFowbG3An3T2GhJ6oSALNE80E/h6E3aTGhcfdNsKOjD+opg6IsB2lEkHnyQTPhqOeA/rKJo0QLNd0xu90QNcKwxcuKUTNKkLhp/W73WFKkCYxfqd7qjp+023JKGusJwzqgXYMizT+s+6Pw7NQbffPunNOzZqCcoRawD/qNyuISifw9IDyExwefdKaTJEBw5bR3urRvzjBHIIOYwjzzZBF1FgMXNp87vdKKTJycI++73VcLRG9HLNKGjEJMoF8L4am7w7Kj8bi6b43cTzVB4aiPld0FR3uh4aXeEZEZH91VsTEXHNVET4akfKxw/O73R+Foltmu67R1vqqmc4PdKCQToY4JQrfCUJFnxzqO91Or4WiHDz84qO91VzyHCLxxQc7E7RRRDagPlPYIhr849AUAx32h6lZzHC2L0JVRt6f7JiCCJcMtbIBsAy4jo5EAHMnuVFHDbNt1sNO0kDmgWi8m3VEYIysOaDFrB5TCQtByJsmMCIm6LcpJjhKAbMAZ+qVzR9q/RO6G3uULHnwysgRzQMrn0SFk3xE8gqB19fdMACLgzpIRE2tI434pgxw1B7KuAQbOB4o7DCJJJnlZArJJu6EWmXS509s1sBa4W7oAEVOnEXRT70y5tkWvGeAxyhASJIDR+6LXvk4CP2QBxBddsoZEbtuaxFSJN0C9wORlA5GW8OKJmLwpCofmTYoygyoHw8/ohAnObaJQ8kHEJHRGbkgFBsB1Jk8lsLxz5ysCNJ+ibFcxKoBbIySFkm4hUNR1pJ+qOMuEQIQSdE+bsjuuEZpzhJs1spcIm9hyQaxMALEFos0kaowNCIREC/wCygQm+8DHJB4pxIEp8VsyB1RDrmTbhFkEsLMgBHFGGzBEFUxNyIGcIOLOYPVBLBTvf91mssMNyVU7OIaXDQ6pIaHEEhvAwqBhIcALd0Qyx1hNE2LhPTJYtAFnAzbI3QKLECDlOaJgTIn1SAYnwSxoCOB324togYYRobnJCW/ZOWlkMFxcm32UwaNS9AQ5o/wCmSOqUuaRBY09kxayYwz1SuaNO9kCgng0LYncDPRM3FGZ7Jg1xiQgmSeEdUu+STa3NXFJxOQHVYU4PmbfRBzw6fMBKBnIvjsrup64mlScGg+dAga52ZPObo7K0EwQeCJifN6oscC7M5ZaFAG0cpfEzotsy4g48uSs0NIkOMmywGADA+ZzM2REzTda5nmkcx5sWHPKyq6BBxSUJuBF+IRU/Btd8NTMW6ZXVQ10mBzU/CtHw9MmcjbuqAMLt4AhEaHEXI9UrmnUNPVEhhtiSlrcsbhfVFYtw62+iUMdBI+gR3pjE7gg5hjddl2QVFXg1qYPtZo7FRc1rc3AHqkL4NjIQdBeJ/wANAubmQRdcxquSv8QGiXEN6FB1FzAJAMrbVgmP3XNTr7pIMQmNRxJxRbRBXE2DaYPEWQLmT830SnCA4mN3NKcOPCJnpkgcFpcLFHENQIUSBiDfUwnqRTAiXTyQNjp4t4A8EQ8DSOoStLTBD4jOUlc4/ISQNdEF8QxASeiBLQc3LlZSrtr4i4YIjNXJdO9KBxwxH6qlEATLsxwURcCXElUaABukzwUFAyfmJhENOLzfspggC5PRAOdiAwlBd0gAYksD7V0tR0OgkdJlYVGoGDDeWgobMRP90doJgFA1IdHHggXB9ErgQ6xuq4pG6D30SlzjIIDgNCqFwuI3nR1Ttpz890ksznDyOSi9znEYRInOEFy1wM4rcitcXJhYRsw5mlnLB0smSOYQYOnTuEQ4GblEG0uYXs4gQUzWTvMJINhIUAkxnlqlDr6eiZj5cW4T2ug+kc47AwUBBzkCFt0iIz1BShsASSDwTkNiSUCHBoT3RdGl+oQwz5RJ0Qczds0goDihpxtgzpCAAIgAnnKVpOVo5kpsRyxAd0Dhk3EZIinBkOAsli8AA8yf2SY8T95tkFBSc0ggf3RIdiiYvlCmS28EX0WxujzDtZA4pwIgSeBCbAQIJI6pIIuarvyqTHB1oAadXXKC2BhPmHZEGmP+Qompv4QbDUp2uYGkkFxBsDkgcVBIwCY5LFzyLvskfUcKeKwGKIhSfUgGSJ4IKuJnX1QLiDlmpmpHlj2UzUcDYS7UnRB0AuzhgRADs8IPRclSrUB3QD1SfEPa67cXMIO8swiN2eimZboDrkpuql7MQBA9FF9d5aA1xJygiUHW14P2ZHJZ1TS1soAXIDVIEwOyeakZwOAVFRVOWaeZ8091xmpVNmAm3FK2q4EbSQcroL+Fqf0mtBOv7lXLtb8l5/hfEhrA2NDvcLoHxD3Bsukzc6FWI7nP03TKIdlLZ7rjZiORB5FVBDRvac1Iq7qsWLR6rCoOA7qMAmZiU7A1w84tnCAVaAcM4/dRdQMAYjAOnuu4gcRPIJXNGpPVBx4ABAkA881tiHRiFuC6XMb2lYNAjRBIUyPK0oGkZy9dF0QNXWQIYYuSgnYNwg53sM1mk6CBxKqcEboRDgPlhBAscXzIPW6bZumSTPJqo58P6Jg8kCDmgiKZBk35wqhjpkT2amFQA3cRGqxqtA+hvcoBUDjYzHRLssy5rjfin2wPk7ghYvGjoOuSImKbToR2lE0dWuNuNlVlQzGIDsmxkiTkeyK5wLEEE9EQ8SQCZNlbE1xmJPotsxOX1Qcjg9h8vcJcbxd0tByIXcWNI4Kb6QNwSlHNtTmSLC5/sjtnGbE9FYUQM4Kc0wRAAsgg2q/mFRj730RNMAQR6omnI3RJUVnFp3g0YjzUmuxP37ciqCjqb+gWNIEAQI5lEam9s2ADQZPNKyQYdYEXBTbMCZMdFsE+UHjKoNPduXwBk7iqMOF7iThpm8FTwmQdUMOpBPVQUcWkg07GbkovOIExvNEzlKRrwJDR6QsXTmDHPRBQEPaHAGDmCg9ujeCQOLhZ0DksQ6fNfggBEHzRIhBxew7oLrck8OMixPRK4GDJAgaoJXJkDDN7os8MXkw4ATmU0GBvCNLEpw58+YG32YVEanh3034oIHJJSpPM4/quvHUgZHsgcU+UEjWUE9kMJwvAPETCGzMDE0E8RkqDGTdgMc0SKv2WjnmgnSa6mCIkFZh2ZMNBBvBGScsqRM+iYUnwAL20KCTwC4Pg44QGoLAQVW5zPLNKeBvNrwgUvbEODg3NB2EtDQ4ZzcJ8BFsPSUZOWGfVQSwucLYUrqTjnHorHCIGD6ErWIkUz6IOfYEnIrNokKxggAMcma2DvOIlUJGUxCU4RbC3sFYBkSXnjdLhBMy6OSgiLAiQOUJTMWIlXcyTulxQ2c/3VEGh2IHE0DWeHJZ7W4hhFxrMyugUpBgz2WFGCIBIQcdFuLw7Q4AiDaOaenTYCBB4WVPCsmg3dNpy6py2PlPKyCGGCYxcJKbe5QrBt5AN+QTFv2Z7hBzimH+aR0VG0WtuLqgbHPsmg29kHOGUYPmP5j7oinRj5v1O91yYiLZhXovDjBtGqbcM6JpUXHNxn77vdEeHpE3xjpUPume4EAMM8SQle0xYpSKfB0YkufH4ypGh4cGGvf8ArKBY9zTvAd1OpTcMMu7oRb4emY36g/1D7rHw7ZkPqE83lLTc8CxPYppLnS8kDQaIA7wzCZBJ/O73WbQbq94jg8+60Ftw4jsnD3OafIEEcNPEZe+2RNQ+6drWxiFR/TaFOKDHg4zIN7G6BaynugxGsoELJmaj/wDcKwF71Kn6ysHXGsWsE2IA3AHUIGLWkD+pUtwqFMKbLkVKv+4UmJp4dEuMuMNEQg6GUqdjtKs/5hR2bZ89a2u0K5nVXhkwegspt8S7kO6TTju2YNhUrD/UKJon/u1T+crlb4kkEmfRO2vKdFzSyipV7PKGwIn+pU/WUrKhNjHdM6QJnpBUC7M4r1KreryjgaTerWI/GVi4gH5m8EjnSBgaR2gKijmUj5a1UHXfKXYD/uVT1eVJoeRBdBJ0VnSx8TI4lBm0iTLalTrjlK6mbA1ao6uMrSMZB3YOcSqCo4kNe4GRuniglsYO9VqfrhMKJFsdQ/nKFVpDwWyAM4Ko9odTGA4na5IE2MAwX9Q8pTRBzc93WoVVhNm1MN0rnABzTpkUAbRaSWy4OHF591thTdEAgCZbiN/qmc7ebEyAgDIALoBz58lBPY0w3HBdTdxJ3fqkf4VoJ3cXIuPuuj+niBccLBk3P6LVKm7/AEmuJOpCo5mU6QsWkE8XH3RFBhkBkjk4qwpOgOrPAHCycP8ADtnIuHC6CDfD0vKGFvUFDZUQ64M8STZVFWm7J2E6WU6lJxMlpOshBmUaThIvP3ii7w7DbCf1H3SUwDUwk4b3BXRsWjT908ENnRiC3/3PusKVH5GE9yP5VSQ14BgNOoF1i0GrhtETe6CWypHOmD+YlHY0vsfU+6oGDFAvHHJEtkToOwQRNOmP+mD3PulLKZ+T/wBirkW0UXOvEIEoUabmHFTLt5w8x4pn+GojNgHVzkfD0poY8ZaC5xs7mVVtFgMlxcTxcEqRBtKkd0Nc48Gk+6zvCiJLSJ4vK6HnAyabcR6qJL6g82GdMkqxLZU8V2k8Yc73RbSZFmnOIDnH6pg0tOGIE66pjipAkAEnIq1IwpUxYsH6jb6pHU6YcYBj8R91YOvhywt+qi9wa7em/BTOr4zKdPEQ5p7Od7qvw/hx8ptxcfdSxkG6BqNy1Tos2lQaAACAODne6bBROQcY++73Ug5uGSUu3AyiFOkdGwYRYu/UfdK+kAMnkcS93upjxBAyAPVRq13VD5u0q9OL4aWrSfzu90C2kcsQv9s+6gw3JuRyKV0kgh9irEq4oQ2THcp2UuJgcrK5ogGQLoYAB5hIzuopGsaDABlAzfd+qZoAHnbIukfY2uZiYyQEAE8OqYsa6276JIAneBPQpiJ+YRwQMGQACWgIhoUnui8iNc0doA0QRwsVIM8NNsTiFmsE2JU8UyJaFg9xBGIWyAKorgsQDdLshE2HZLifBLHMjhKzSbuEWz4IGLTO64HsnDHRLmscFIHFkASmbBIGE80BdTHyiI5oYSMwO9k5sMiRzTNMtvlooJhgcIIUn+Hkz+y6wBGnPREsHD6q0jka0sP8p7RAEmLFWwiZ/ZKWJSOeoHE2OWSamHD0VdmJBBWFMk2lKDTfhEGCOBSVawJhsRyTbAk3dA4BHYNByGanBm1GBoAMnghUMgCZgG/Moim0DQBbCJMAk81QhiQeGZQe5sNxWa244lOacZwhs4MyJzzQA1XPkAQD9UWySACG9EINsP7FA45yM5oKSCbuJhZwHWeKUFwiwBTYXOMmJKgE3TA9kuEfM4DktbIHNUYyMrBG2oB7StB4LYdD+6Am4iAQOQWBM3LwORA/haYtHdM1ljAtmoAGm/nPoUA0t3sUdo/ZEtMecweOiIi++I4KgF2KziDyKADR5S5vQyExbfMeiGCVAKjg4APz0KBcC4OjeGuiOzAIJHqmLGuNshzVCyCZbY6hZxcIANhlZbZCZlHZ8HIF3i3LSFOpiHy34roNP7xS4Gxn9UHP4UAUzLR53WN9SnLm5YGg9IVPCtYKTjcHG7M8ynxjgAgg0gDyjqCbLOMzf6z/AAqug6kjjCUhhJBIEIJ7sQTnwWG9kNFQtYfmB7JQzXEAECEDUEELBoLfNdNgdiM9c0xBi14QR2ZLr2lB/h5jOFckgG0dFscHPPlmoOTZ4TBJKDmE5W7LrdDs2g9ENkHalUcGyfF3KjaDABicSV1/Dzk5DZbxBv2Skc7adovHArfDunOy62sH/AnwGLA2S6AXU77ziSc0AWkZwpgjQGeq0ybAIh3Fgtr1WODFlPAylkl0GAPohLsUGJ5IHMBuUd0nD6piLWMdQhvWm/VAHEEmAbjJY0xEX9ViWgmXA9AmGEi0lFIKLcUyQVhTb9pyrgGg9SlJAmRdAjmtkZn+EuzbAJHorSBlclYFtxB7IiBYC8kC3JMGubqYKqcMxB5rAtJg4gEUgL7uxEnjKoDUwwSIHJElsZ/REOv/AGQY3thB1RGsNtyWBgxYWjumx55IF1Ez+ywm8CU2KwgthbaQc25RdAoxEc+i0GYknunxzbdvzQxkG0eoQIRYErEGYj1T7QibgEjNbGNN4jmgVs3GET+6bMGTA0skk5xYaxKwIkYpI4AKAtDY3nAjqtDLBki2gzQaWcHAfhTC8AB2VoCBJLfl9SmJcLgAdAiJByI6oklt4E/RBMgmZJjkEAySDE9U4da7R6og4tBHM5IEw90QAOnBG4No7Ig8yeKBTc2+qIaAcvos03P8BawEzbiEClwkbv1TGBctIQc4xa/UIY+ThxgoCCLQbZIGTcD+yVzsLZADwcoCVj23LmHqCVRRo3jAAPFPctgiEKbWFocC+DoSqQCHECDwzUEi5sjEMlg4ceiV1RswTJGaMhwix7IGaQTYkwUCYAwuc0z6omoQwta0Cc0u82Wm9suIQHEW6SNYSF41B7ojCW2bOlrH0SFsiG7zhmJgoG8NVaKJH33XnmU21MzcKPhj/SIiCHuzFxcqhdJt+wWkbaHMOJWbV6EJDAOUfREFmREDkgIqh2nSyBc0uvELDCR7oQJgQEDYmnykBabWPVKGmL/uiG4RlfggckhoktPJBxkSGg90gAIkiQOy0OIuIKBxHCNEzS2Lk9wpNa7UkJ2lw/5mgcls8UuJsaeqBDjoP2SkEfKOxUFA9uUm3JMHU5Mkz1UMUdUJ0EygcgAi3aEHNP2Y+qRz5GpPVAuLmxh7opw02lsE8EW0ziMEKIxZR0Kxc4G7bjgguGEsmbdUrmy4yEBjj+601AZ/+oMKQiZKENBmCUS94gZ9lsTjx9EBxMCOJrrGywJJzITWAuZQY4YzsgCPlI7hHITiyRbmoBmMwjDhzTY4yWNQaoE3pgj6IzoCJWxAm0WRaRclUMJLbA+q29rPZCQDkiXCZEqAZ+YwsDaAVsdrSVtpAO6D1CAnLzCFg28iEheIAiJRkSDE9AgeCM8kpBn2QBA+UgdEdowcUADjNiZWN80pcDcGOyLXNzJugYCLZzxQvoPQLS0XDpjiFiZBuCeCBhiOceiIyyulMACICcAWEgIN5RmQErgeIlMHR8x9UHVBpdAgB1JTASALJdppKJqGLFAxJDYAEcVNjcLSDN72CDqjzkSlxVOJVDvlzWtDXAN1zlF8luFoknjopEu5mFusygc024N54DuKFMgAte3FHzARKXEI4E8Qi10ugk9kF21KbAXbxcci45LlrVHOMg4WngqEtnXolqDFlYm2SYIhrReMxM8E1Iuc6zoHFOKJneOeVlehSaxsgTpACu6jGi4eH2rJeYnklqO/qBzSDYTY3XRWxBtgKbYzhcxa5jodc5rKs0vYN3dk3nMrU2spkkNGLiZRlwzt9E0z5Se6CFGS154vd+5TYnfZBA5JaE4XRPndn1TF3/IVAxwfKPVAv+7CbFiz7LGI59EE8Q0CwIjhCY3m30WERl9EGDgNEwLeiS3D6Ig8B/6oGxCPZbEBoLckA7i36IFztBdA2MdFsViYsVMlzs2n0WBcL4XIKvzsI5oNEi5Sy4i4KMw2YcLwgZgzgBYN3rqbXEA4QSUcTpJLTPNAD4ajwcPzu90h8PSm2P8AW73VcUxBmOSFuCBW+HpYScR/WfdKaFKbOeOrz7rakHJOMORn0VQGUKcEE1L5HaH3WNBrT5nxyqH3TWyEnosMoAMdECfC03XL3x+N3us7wzBq8j8bk0ETGJEEhwMuUUo8MwicVQdXlK7wzB87zz2hV9oRrI55pTH3rqohsW3vUEcajkW0mx56nXaOVwG8B3lA5eVFQNL7Lqw/O5NsjhINSt+sqsXwkaaohkaz0KIj8PPz1LaYym2Lh81UfnKrAke6Ea6dUCCift1e9QphSn56n+4U2G4uexTBkjzX6qCYogWxv/3Ctsgfmqf7hVMMXIJ7obpbMH1RSbFoPmffhUcjsGE2NSPxlEEHkib2g+qCZoUwRvVM/wDuuH8otoUsJcdrJ/8AK73Rwk3AsLLX1iOgVQgo0xm6sTzqu91nUGnJ1WM71Xe6oSWwQO0ISfsnogiaLRma3TaFMPDsImakc6hEpw4j5U7XAmA13NQTHhGkA/1Msto73THwtKLioCMwajj/ACtZp4ackzXAC1xyJRS/CUoBh5A++73Su8PSBzd/uO91UEgRIlSMicRACACjTP2x0qO90Ngyc3/7jvdO0vJNh1ROLEIwzqiFHhaZbm/ptCkNCmDcO/W73XQI+0sRTdmTdFR2VGBAP6yf5U6dJji8Pa4w+AcTsoHNXLGgZRGUKVFol7pP+IbcLBUXb4ahHknqSgPD0ZvTa71v9Uwkg6dVhGUCVEA0KBNqLfUhYeHoED+i0nqUxnOPRCSHSTCKA8P4cRFIc5lCrRojysvOjj7ouebX+qznl2oMoF2NJxG6QRxcfdYeG8PmWS7W5904bJCJBJzHqgT4WjqwD8x90PhqHyt+p90xtmBfitbIgFAnwtEf9ONcz7ofDUeH/sfdUkg8AgXGIkIE+EoxOE/qcP5Q+GojNpj8Tj/KcO536LGZmY7IJu8PSjyEfmPulPh6cZW/G73VA6Df6pS6bGAf3QL8PTgboH5z7pm0aIEOEnk53us2D80FAk3AIHQKob4ei4xhqfqd7pvg6UZOj8R91HE8kfvkmZUda+XNRTnwVEOnevpjcg/w1IRYx+M+6YOJKLiciUEn+HpgyMQ6VHLbGk4Q1zzH33D+UwsbweUJpDmxmeiBB4ZgEmZPB7vdYeHpjR8/id7p3GAEk3uVUMYgDFCM2uRC5tq6ZJtwKcVIuLnmkVeOJhYRIGJRbUN5FuadrzMtDuyiHwcTmjs39R3SMJN4cO6eQDcOlUbBOYvzS4NHCAjtHDUhUbVLhFgoJOgHzRCOJpEZjgqFwmzWyEjmycvRUaQdPpZK4gZNJjkthk2+qGlhnzRWDhncdVsUZH1ErE2/hAYo4hBg86GCUMV7uMp8BItKwZnP/wCVAuM6H1WxunP0TFnAT2Qg5kINLuIRBIOf8rNHKEbgaeqDEkj5j2QuTkQjD40RAdOQQAE4gMUFDE45kk9UQ5wtDTBzKxqRO40oAXOgT6IYnAyW2CIqTANOSOBQL4+T6oDixGwd6oh7Zg4p6JdqSN5v1TY7Atb+6DPIjEQ70TNcBnMc0DUEg4Hx1WFRrjJDgeiBiJgt1SODg6xTtdTzvMZkIPLJ3QSgABcZBuE2Eyb58krnsAzI6qZrskDEbcDZBTZyJxEX4I7PEYxG3JS2tObm40BTCoxt2vkzoYQVey2cdVzUA7+rAP8AiG08grGq0tO/J6qdEgbSLk1CcuQQWAJ06rAOLtUMMwYyWIvcWQNDoufqgQczhQOHRLa9yO6B8JFwD2C2Em82SgGLE+qJbAzPHNAcD5tHqsGvOqXCQL35oEWzQPhdP9liIAJd6hLA1/da3E90DgWmfot/Ti8dgpuFPF1tmtLYED6oKQzSQkwtNg5LiaDIEIte25JjugOBoFiUjgIu4+iL3Nzn6pcYz+kqoDmgDU/RI5oOZPZHHvC/oU4IIvPchBMN1H1ThhN8X0TtAjymeIKYUhEgkoFaLwTHZH5rmb8VsMQWkRx1SkEVLGFAxJm4toMkWvN/6bj0KAJvGEdkMbpgOA62QM50kSwqZmfJhCJD4NwZ4qbnubf9lR2Nc6RYAdFiXCLlvQwph5FrAclsdoaZA0WVOTcSQTzKU1RiiVsQ1A6EpXNxDTsgcmciAo1XEHj0QaQ4kTABg3lExiwtDb6kIFBa42aJ6pgWwYsTwWwuvI1ySuxAREk58lRnPGjjBRBEZmY1Stbigm3dMQCYABQGbiJB4psQsJnuFEkAScI5kwEYLvsnugrIOYus9zRFh6pRTdmC0IOYT7oCXHO57oTNzPql2bjmbc0j3GmcrdZQWkzAKOMgwWx3UGOxxDQeyzqpY/DgHdBYvI+VYVWkkYVN9VzGXbE5QjSaYl+ITbNBVr2tMuRxtMxChVOBwnEZ5ZLMBc2c+EpB0NcOMDhkma4HWRqoAVA3ebbkClxtJjL6IOo3JiCOiUwBooDCbY1gLGMsv+XQVB3oMoh3IyoNpuDpEwUXs+28eqCzjY3AB7pRGhtyUmMxDdLyMpCZk5YnO6FA09U2Lqhgwgyb9UgDQJmdEFQ8NIBg9k5e3gI5KLYiwhEmM2xzlBQuZnH0Ra6lFjHOFDEHCwRbeDBIQdTKlOLcMiFCgQ4VgD/1DbsE7SALTbiVLwedYiP8Q/sEFQDNjZDCSND1VGyZ8oM6oNl17mM4UCYJ68li0nX6KjmukQ49oWjPE63FBMscciD1R2b9TZM1zd2ST2TQ05ZcZQTwGM/otg3Tf6KsAAxBCEiwAAvmgmBOo6rQBmAqEtyiywwH5UE4ZGqUsg53VRhJu0pmubnBB0QRbSgzJlWDiILiCIgSEC8TaZ5rB06TrkgJM3wNuYyWMwN2/JKHQM/ojtLiY9Ei0hbmMHeErmvw2HoFQ1DM4gegQFV2Ui3JERdTcekJDTnK910OqTmW+iTGTaeSCOydJgZ5c0Cxx/urGoSBii2kWQc6RlboqEaDGYlFwaBvEj+UQDGTuwSyADLSb62QM004EjEdLJ/NcNM88kgeB8s9SEwOITF+ZQLhJFyhhJybmqwMeYHUIQw6ieiCQa4OgyOaoGHDmmDR/wABWgDKesIEFNgJdhAJ1RLWkACe5BSvOG5bI6o7VpbYZZQiG2ZDYxDnGSU0XE2y6olwwxBg6BLiEWJHIBFLs3yQJW2D3G7gANMk2Ih1iQSnbUcGm+qDmq+HpPADwQRzT06LGNAa131VA4RcN9EWu3cgU6Fc2Ww5vdIGuBgZdVUu4NbCVpMzb0QDAZ8yQsJMCOwXQSYHlCInMAIINY8QN4nLOEDTBdkC7SV05HKP5SGJs4oJYWghzmh0ZSqlzRd1MZZGyVxiTNznZTudT6IBWD6rYJY1szAkogNpwHAuMa2RJLRZoJGQOq1IVsINWlhngECkVKgIJaz8IKGwIAwtJ5krpacgaZ9UWvkXZklI5adKoCRhaJ6oinWcIbgPYwunEJsI7LCoIFvolHGadYWaGDsUzaVSRtGTqSAusuBynoAUXODmS1pBSiAxFpBy05IOxBga1pDeErOL3QWAniERTcDiOK5yJ0QLFQtuAIyCO84RqrxY5qZbAgNnjCCdxHHgmwSJJEquAwJatUZhAG8LAoEbTdhyA7p2M5fRYF2EYQ6OiwJaBaOaBmtuQBPSylRDnPrEATtP4CYm4gHuVNgxOqwPnP7BB0YJkERxQwENkxHJJvm8CR9UG4iRAMqCxY4X5JME5hNgfGgWAqC37IFNMNGvO6AAFsJ6psT5vJRGObygGIA5QsC1xvY904BOpHdEgE5lAhwzx6Ba8CDboni8AkyiBZBOCTYow6LKmIjIEIFw1EIJw6+IZckpvBEX5JyZvAKGgAAnmgBB0t0KVwdoCmmDdvolJA+UhFCBIuQVs/mRxEXgoOqPIAiR0RAIH2pQwjLEFsW8ZCEyDuSgYtGRIKUtIMgSmBjzMMdEdo3LD9JQTiRMIYExOsG+dkcTNQeKoWDBgZckMJBz7ynJaMnHqUWkGL+qDhFETk8/nPusaZyaHfrd7rt2drFpPBKGkA4sslUcwoR52vM/+R3uiyi2XYXO4XcfdXFMOMAOJ6IuogCTbqFFQPh2xEEnSXu91jQaGmJn8Z910lpzAAGSEAnPnfVEcvw8DWeIefdM3wrSJdJ0zPuuhpbk2AQmxRlvE8lRzO8KwWg2zufdN8MMO4x36iqCcV2CPwoVLkQAOdwoqPw15LD6uTCgzIsdHCXWVgN2zY/Mg1p48rOQT+HpZkEdzCwosHynpJTvECzraAlKWxABxTwMoFDKYPlI7lbZU88J9SiWyeyVtO2SBsFEG7NL7xTD4eI2bSeOIn+UmAzw5FMKQOYHqgdtOg+4pCORKxpULf0R6lZgDTYB3dZ0Tp1lBjToG2yA7n3QNOm8CxHc2WIBz/dAUwYsgJo0BYt9SVP4ekRLWf8AsVV1I8BCGzOmfVBMUGRcH1PuiKDHaOHrb6psDmkeUnqVVrSW2IjW6CWwp6hxPf3QNGi2+B3qfdULQM8tLoFoxWn1QKKdIG1EknqEdkw/IB3KbCI1vxKLWAEA2QJsmGxE3ykp9gAd2R+Yj+UcLASQ7LNY1Kf3r8UAFKmBBc+fxH3TNogyAXE6TUd7pMTZsQmMG2L6oAaLmmz3gf5jvdB9FjRLqlVx4bRw/lM2oQYJY8czCLgXm+HsbIE2NOQA6p/uut9UuxYCYc4zc/1D7qrqFNpLxnwlSeWh264HlwQEtaLYn/7pRp0qZBBc8jX+q73Qa5oEYQUQ9pEGB0CA7Kmfmqj/AFXe6OxpYrvqEcNo73SlzW6SeKGJwI58k6KuoUcxj/W73SmhSj/qW/8AI73UKldzX3B7rN8SfmNvVJpxYeFZG6+oP9R3ut8O2DvP/wBwpNv9EwqkmfVOnC/Cg5uqW/8AI73Sv8Ph1qxx2jvdXEu1APXNLcTDiIySkRFFsf4tWeVR3uqCnRjfqVe9R3usXjFvNOLiBdScH4wYwtHHNA2wYTLalQ/nPugaDRk55nQ1CP5TMY7A52Im+SJMsBIDskEz4bCAZqdcbv3lLsQW2e6Pxu910NxMB2bxGZbELVGB9OWwZyhEQFFp+Z3OKjvdD4YGf8Sf8xyfw7AN2o4jkUA2ox5MbufFUKPDBpMOeB/mFSqUWirSlzocXT/Ud9k810uqsixB6KDqjX+IoBpHmd/+SnVEUKemO+m0d7omjTFt8chUPurAE53WfJEwUEDSbmNoR/mO91tiHOiH/rd7qzXEGA0OHFPvGbNFrQURzCi0Xhx/O4/yg+jIJAMaf1D7rsaL2vB1QNMTOJpHRKo7V0ycIng7+6Ic8tIa2/MqePnHZNtSOEdFAHP8RMBrBzmU7KlfD/U2fKEhrGLGB0W2k3DphQMatRwjDj6WQbWcBBpW6lY1MRmRKGI/KPqqGHiMGdEjuPVEeIYRJZB6JWvPzNMHKUSARvNE9IQM6tSJ4cdFsdPCQ0i/FIabCYw3/wCc0DSYDcQecoKANwxJzzmyENdlU7QEjqYMwY/MiGEA+bnBRDupNmC8jlCIDxbzdslEiLjGBzKwpzeT0KBsBvf9v2VGUS6whp4kfspGm4jNDZu+2O6KqacOiMltmJ0v0UsJ+1PdDC0ESQgqWttidEWSkMDrP+uamWtNy76poA49igJc0uEkkhPSDHGZ7SUtMsacvVV2kN3RPQIA/CR5lmhpFyY5Ke0Fsgh8SwZEnmgd4pj7XdBr2xEEDiStWrNdN4i+d0GwRMgaXQNivIkTZBtzBB6wmy0NtQEhvmPVA2JuU5cEH1GRr2CzcEZ34IFodnHqgUNxCRmg2i4GXXCsJZdjgDxSuLiYxCTlJyQHBB07LO3W+YtQIcTDnMMcIRdlxAQTiblxPNNhJEzlyRIc10gtnmckDiNpBOYugVzCeBRDImHAdkXB8kPw21CJaRYt+iAMbUJya7kUxYD5mBpHApIiCQY6pmZA3QbCRaPosM4gdkWuIdYQcpTmCbn6KCVWkHDS/FSFEtk58l2Ryv1SuYMiCrdIg3nGWSFTIlgIEZFXwAiBfmlLJzslI5Q1wJ1Cq0uDuCcsgQCtsnEWMEjMpSC+u0MndxcVOi9sl1QwU48OAL35lEUWiIATgwqTcZDIcUjQBIMukAQE5Y0TJJ4wjgn7oQBpDRAgkanIJG1AxpbSbJ4py0EGCsWxzjugQNJJJIk8VnUyGb73GU4D+B6ZLNa4mMI7oJGnTw2E9UjmNbVoPaHTiI/9SugMc4Q7ABrAUvFsNN1AyDvEW/CUFxUJbABtqCsyq5pvTae8qDahi7THSURUJF2T2UFdq8uJwNA4An3WNRxs0YTycVEVCMgW9kwr1DoesKjHHcFzT1KLHuAuAfzLCo8Z4gOi230xT1KCFFpeYcSPwhM5+zOGI4XmVVrXalw7rbETMgnPVBIueCN0CVCo4uOmIXXf8NjG85p4SJhKfBnDAc062KUcQqCiYaJGctGaY+JxOALbEWXW3wwaTjAOlipO8HTDpM25pcBbUljcJv1sg+qBIAc7kBZAUA2zSI6yhgdi3cXC9kDbzxMSAtL6YMutnmts6l8THx+EpSybFr/RAPiAGmfpdWY/FTkW6iFIAgQJA6IOoS4GHOPNA5r0nmHOIIzIMqgAI3DPVRayPIw9lsLzcghA5DhnHVLi6pcL51TAOH94QNbIn1WjklwkuvP/ADujHL6IBUeKcSDdEBxExIC0CN6b8EGtwg4C5vZBi7CJmeyON7xb94S4YGYg8QsJaTGvPNBMuk4ZLjlZNTpOdiLCSG8E7aU5NjmF0U2EC09lajnZ4XFhBkxmrtbsA5hbiacoVi4yJslM6ON+SnqpgtAP9MN6tWLRPyjmFYNLQJdnyQDKeIYnGeQUE2tiMwnLGnMlMTJOBriBeXWSm+bUANNsAYjHVANZ9oolpIuy3Va0wRAQBrQSLR1RdSacyb9ES8HRMAHaOVEzSEAB1ugQ2bcp+io4AC4tzKTE11iLQgVrWmAAO6D2twkZnmqlzTcjLiViWkTJQQwGwbPHqiC8CA4i+UqowcCI5LDBEySSNQgUOqA2MxxCcEycQE52WkAm89QtIPPnzQDmGwSiTpDgiHW04Zpg/W3coEm2s9ViXYsoT4yMy1YVCfsnTNQJDsyYuhhJzm4VXOmTb1Sl9rwdYKoQAgGB1Wgi8BOasmSRlAE+yVzsob/dAYOgjmOCDgJBxocpiOWSxLYG6Z4woD/TubEhAxmASOJsAjiboDPRK6c4cRzQM1xcCIFuCIe/R0einixZ2RLyTx0sqHDiHSXXXL//AEXYti0uk4zn+Eq4i8iSeKh4sBxoyA0YzrPylERa0R5QUSwx5Z6KzabBkQeyYNA+YA8YRXIcelupRaJguIHcrpcHWAcwHsjhfm5wPCyDndIO4SEHPIbLiZ4Lqw3O99EMLpAHYoMA6bHJGXG1xzlLtHEXI9E22ItmkGIqGwBjksDUB3pjqUDVk3yCOM8DHWQrA0mJiUWZmQEBVJPGeUIF83gmNUgL8YcC05cNEJqEwb8kpfPGTpKVzyIMknopCmeHgyWA9UcNQgAsDeWf8pbugG/IApwSDAaQIySFDZvsRbTL+6cMcIkC/JI7FMgdrlDE9zbgHldIgw82AEHlmtgcHb37SgC8XgDoStiuCWoMWboh2L0Smm0QXOjpdPjGLMT0K20vDTHQFFBrB8jp7Qlc1wMH/wDMpnPBMF08oQfWMRaByRBYzE2ZB7LOESP4KbE0MEtB7IOLCZAg9EUha+N0GJySnFMQbfdVtLtsOSJg3uB9EEmR5SPpZdNKDERfKVIOwndOEfuqNIEyyRyQNdsm0dUskcxwm627ncE8GouxCN0xzCgeRAJFuaV2G5E/VKGiBBMIAAE7xJ5SgemWB2+Tc5SnLWB26ed7rkqsDrOcRzzTmgwUwWOc4jTJBUvpZkOPMlIcGKRZTZTcDLiT/CrHOOgQAtGpQlk3n9k2KLC/aUpcbyD6KgFzb8EGhueK/VMASZMR0CwF7QOyADCCbhNPMLDhnHBUGV5UCAE8CFjiiw+ioHcrIYmxIKCYgCYaOqLZmM+hTHKCCiRwbKBYdzhAzz7ppEXBQxaCeyACxnFNkbnULYiNL9FtoCbtFuCAFpOoJRwHj9UA4EG1uiBwwN0z0KBnDTXqkki104c0DeB7LF7dM51QC8Zylw9UbTBJROA5OIjkgQiRYAc4Shrr59wqRzgdEQ1s6eiCRbcE+iGE6SI1hVa3ojgE2I9SqOe8kyUlaXVKImN4/wD5K7MI1Md1z+MAZsiD85yP3SiM2kc2kHW6OB32h6qYcCbieSZtXd3S4cJKsVRtN5m9+disWkDCSZ43KntLZ+vujjMQC4dlIh2hx/tdFzXzYTHRSD3E3Epto4Xv3RSCl4ePK49Xn3R2Hhw2MB/U73XKHEWzA1V6VRrhv26aptwzoGj4cu8v1Pumb4eiTdpHR590z3BxGGY5pXMNoMfylIp8H4aJdi5b7vdIaPhsW7i/W73S7JxEYolJVpwWnF30Qi3w1A3wu7Pd7oHw1EnJ3Qvd7oMLwLA+qbDJLny4nK1gg3w1IeUn9R90BQpAHEXGOD3e6BBZBDnDsqF73Mu4dAEEQ2jfECOEvd7p20qJaHCez3e6q2lSc2HlpGeaRxptBaCLZRmgQ0qcmb/md7pdlSJuD+p3una4giZPCyO0IN7dkBNKhDd3/wB3e62woRZpHR7vdDG03FzwSF73axHBBdvh/DR5Xfrd7ofDeGJ/wp/Mfdc9R9QMkSepUm+IfkTkrNOO5vhPDXGzjo4+6Y+FozYH9Tvdc7a7yLh1s0wqugyCAp04ofC0dGmPxO91j4SnoDP4z7rNqQYc4Dqi4jRwPdSkTNBgMvDh+Y+6cUqIPldH43e6YktBIkjmkqYnAQ3DGpKozqfhnZNeOYe73WFCmL7w/O73SMpEhrXF2eYsquGCpY2QI2hTJtn+N0/usfDMad5rxP3j7phBcZsJthTNdfC58yLEoIihRm8n8x90xpUwIBP6z7oVaf8AUxkQBrqnqNFRgFMxGcyqhDQYZhzuX9R3usfDyBBdB+873T0yWQHknsnY8GL7ouVFSb4VsEkvkZjG73THw7BvS7DGWI+6o5ziS4G5EABYFpADjLBmBqVBz/DBpg4ji8pxn3SOoFkwXkfjPuuzcDsdV8RZozhJUe47tFhJ4uaqOcU2kQXPB/GQsKP3qvXaE/yugUSL1XAz2hHH4doMEE6oICjOT6oji5yXAy81Kk8S8hdAexw3XQToVzvpHVrpHeUDMoNLbPqGfvlB1L71WB98+61Boc6MUN+yVY0WjME95Qc8MEb9Qf6h90YaTINR3MvI/lOIxQThGkapQA5zhYAcblAAAREu7VCts28Xn87vdM1oJJBkDVyYtJEwYPG30QTLG8HHnjPuhhboag6VHe6oRAsFIumUDeHph9GmXiqSWgk7V3undSDLS9vWq73Q8P4cjwtI7R7QWDUcFVtCm0XLnnWSE3SIim10hpqOd91zj/KV3hS25Lx1qH3V6tTZN/psJ7wApOx1BvOtwbZKRMU2Em1Qxnvu/clYUWEADESdBUd+6drSSGndaMp/dF2NkMDRvGJVpC7GnFwb/wDkd7qZaAd0vHDfPuujHiL4EEWCgXgOwulTOng0w1whxeJ4Pd7qpoUiAXYnQbFzj7qIdBufQo7VpNvVOnFNh4fVv/sUT4fw5Mhh/UfdDE0NlxCTbcEukxUeEokZH9R90HeFpAD+mYGuI+6A8Q4DIT1UalU1HXcnTi2yof8AbBj7zvdA06BixH5z7qbTAJMwNQVJ2c4pB9VZqV0bENANj3TtpAjeMdFbZAGwAP7IFrQPMLc81FKxrQYa0ygcU3A9UwgDz5fVI6ZsSZsTCAtiZBiOKYta7Mg9klvtE84TmCTvdoKQEDIFw7IgDso1HRebHOAg6qIFxwSFFwaSc45p2ME2lQD8UjEAUQ84bvQdGARYk9UuAR5vRSxOAltVonTkiHGC4OB5zmgZzZO7U7FO0ECS5hHRRDsRgFpPVOy5G6I5IC9rcxA7oFrgL26hOQ4ZA90WzhvN0EwwOFxdTf4cEySuoRx9UcIOUJRzNYWyAbck5uIAzi5Vg0TlnwQLDOWaUcdSm5xz6J2tcGlX2YzhYUpJtnxSgMqYPmUqtbE8GZE5ZK2xaXYnOk89Edm0cL8k4FFZpADPrZCocVtAIT4WgZ5aALYeDY5oFBEzHbUpXPEiRiIyaBMJy1oGduSAaCTBB+qBC59Qw7LgmDQSMRIGXBAtJsJA7IFrhogpLMRtPVGRMx0vYJA15EtIWLXDO/PJQMXCNZ9FgRxAn6oNDdSJRIaOI6KhSYOcLNjUNnjdNLZsCStEmQ09ygxEkSAY1ACIvYl46QsINiI6BNh3ciI1CgXCSPmPMtBWAcy+LPqEQ0g3ePRECfnlApIdOLCUvl8pcORuE5bzCU05GR9FRN7gXBxs4JMQDiQLnNPs2h1/UrGm0yRkgURplwWL3RnP7oilexhEUrzi9EQDiLf3U6hOWG66NlrJshgaAQb90VDwuH4enLAd0Wc6dFRzqZypweRIVPCBjfB0iJJLBw4Ji4HMR2REWuaAALc8aJvkRKoQDnEBDCwzJAI1zRU5aBBtHdEy6YCfC03xAx2WwGcxHNBFzRmJC2ERZ91QMdi/uiQ46AoIimSYPsld4bmRwK6CXAcOiIfePpCnRyBkEiZPNK5hI3bLrcA75R1GiGyB1Ko4ti75nKgosGZJPJdQocHXRbSuZvHJKRzCkIiD3Q+HdNyuwMGn7JzTJiAlOJ46cQJjidVsTTGimCOEdyiCSZEIhyWSBB9UssJiJ4FYFxNyBayF8RE35ZKguIjINPIoWBFtLouB0c4LQbYiecqBXQ6YGeixptiLwOaxLRN5E6BMC05CUExRbOZnqmbTYLy7jmqBoGUeqEgDyhUI5rdATb0QwNsYnoqyIyvqVg5uWGUEMG8TARFMjkCqkibNMIgtm7TEIJhrokE9QqDHhu8kAoucOY4XRBJOqijc/K0joiMUE4VhnrlwTAoBBnylYB0WH0TFx+1bohjIIvn91AA18DNbBJhOXkiCfolx8COKgXAYBjLNYtcDBgSmNQ3EwCNAsHkgwOWUKhW4hqBwROEAlxidQhvZwR0zQBAORPIoM0sA4pjvAAMOVtEA4CZafVMIdaPrCgTeGQHYSi4OPlKYgt0A6FERxuUE8LvtFAtGoJ5FUIkXkd0A3hA6oEDQL/smAGuaMEZXWnOQqFJvYfRYmCZae6LTIJmEWmALqBC4SNwrFzcoKdxmLA89UjnDXEBzuPRUEG/Hshc3Gv0SPcWWIDpyIWY9mHeDmzwKCjRnEDis6SBNoTsY0AEYzrBK1Ru4XAX9VBBzmzvXQBHEgpXVGE3Mkd0Za7QHsqC0g6kjksTlheRIy4oueSzA1uEapCSJa6DdAQ/DaDHJK6oJvPdMWgtAaJJ4adlNzJEsGLjBugr4Wt//AI6Q1DBnPBOKvMiVHwhA8NSiJwCbclQkGcudpVRto7PeI6/2WFW1wDyySHDMEBEYSL2PRAzaodnn0QLml1wANAs3CRlBQIBMNNkDEtMwYHVCZu13ZLhJFxfkjhgZygdxiCSwjVAybhoINkhFpInhothcReQUFBGZBEotLYv9RkphrgLkgp24xYGEBxNhbECNPWEC1x4ftCWCLlo6qCge065Ih1ODmDxzUcRybH7oSbgC4VFS0B3l7AJXMOeGOCV7idCe6DpcAMM9Cop8BJGIXKzaZEkEAaKYDiAICBxz5TPJBYU5aCkLcRMhENdGSxFQXQDZNibyeaGED5SUXOeDBnotLovKAy0CzVpa4iR9EQSSbkd09oAkoFOEDVYH7M+iawvJWETw7oAATqfRHCR/dNijIFNj4gxxUEsLpWOonLknLgeHdZuRtCoUAxkLp4Mi31Wv9n0WPEN+igGG29KPKSFhMWCON4Fp6QgxA1cUIH2gsXExZbFJ8s/yg0CJkFAg55oj8GfJHGMgxAguf7LEf8lZxn5TysiCALtN0AFrBaDx9kd2JEhYFseZAwB4/VAWEAJjFr90YbkXD0QIWkEQLrQTmmwgC0eiD92ICBQ0nILFkuMn6o4iBmAgapylAXyW4Q0Dms1gDIJdA0A/kpTVfnIhEVHZFxvzQO7fcCA5oHdLVaXbrW9yISGpfMnklJEeb6oDUpDDZ4B/5otTLQ0Y2kEHSyBcLBsd0WmZkkqipq0qbDGLEfmcZsuHxFV5cbkA5DSOC6DhJsZUqzMR3bTeAEzhvXJDWyQI1lUoY3SZgKjfDzZ5z5Ls8PRYxotjnSFd1MLUoPpMa9u9MSTkFJ87R2E7q664eZAhgyEZlc+EtcQSCRmsqUY8IYN1ptGpTUmsoiGNaDqSSnEtzsjY5EgcEHN4aR4elbNoVA4/ZHoh4Wfh6RAsGDNMXj/gVCl0Tuj1Sl4+ynLsVzA7IW69kCYhFrI4m6wjx9kREEfwgGJoyt0RluYshrlPZaeXqEBlsAJgQOFuSDXcWiei2IjIIDjFrrAgd0jsROR9FhiGQciHeJNhHNFoBGaQlxzBTGzAYcJQFjZBgBYMvf8AayRrnRDQTxsjLr7pB5oOfY0wc6jZ4vPusaLQfM+fxH3TxzKLiBhgkxlZFTFJuj3x+M+6xoNzBfP4z7rDgB/ZOXTpbRAGUqURLv8Acd7oto04zfl/3He6AuRA9FURIvlElES+GY0XLi13ldjNvqt8M27DixZg43e6vUcMDxeXGQOCDSQ6Zm0NnVFc58M0u3C/E27m7R0H6onw7Xb1PGAdC93uukNkEMdvHzPmybFRY3Cw4o0aCUHDsmhxxYx1eY9VjQaTul5HKqfddDWVqxNhTbzan2dFg/qEAdUHKKIab7UHmXGPQovpBsTUqHo53uuh1ahihr2jmCo1wX3EvbyQJs2OcBjf/uFU2IAkGpyhxP8AK5gMJzIPE2XZTohzAS4k6w4pvDEtk1p3zUv/AOQ+6IFOfM9x4B7j/KeowMEtaJ5oPI2YcDiJ4oFwtECHDrVPumLGRk79bvdZzQ0A4rnhaU4bFoudG59ygQ02SCA6fxu91sDXZh363e6cNjh6oBh/6kxMCMkEi2k1wBd6OcSqN8ODJDKgHNxH8qrsNJshs8glY11YS57mjgLpRF1OmwyTA51Xe6IoB92NqEcZcP3KuKVNt8N+iQ1XueWgYI+1qlIm6ixoh+LrtDKwo04aCH31NRw/mUxDmuDjiJ04J2tMBwGIpSFbRYcmOIy/xHe6Y0mRYVB0e73TNqEtc4ttkE7yRkAAEEdkLEF5HKo73WdSp8Kn63KgcHCW34pXhpGbu5QKyiyDG0/W4oGm0D/qD87gmBLdYHVY72RPqgQU2Z/1D+crOp0jeH2++Ubg6rFpkQLZoF2dOMnzze73W2LIydP43e6OEm0O7ohr/sdwgQUmfEMa4vDcBMB54hUdRpXAx/7h91Az8SzdIJY6L53CoSALm/JBhQYD83+473W2DODv1u90AZygc0SY+Y37IDsKQIu4H8Z90dm35X1J5VHe6XCInEVsIGqDGk3PHUn/ADHe6TYU8xjJOu0d7p3ATBf9UQI8pQTNEEX2kf5jvdbYQLGoP9R3uqtEtkuM8ELgTFkEh4cAQA6BpjcmFBpsWvP53e6pJm0RxQL8YLC2x4WQJ8OAZLX/AO473QNJgOT/ANbvdWDg0AQf3WmXZgpREU6ZzDv1u91tgzi88jUd7ro3jAELQ5sTbo1KI7BgFg7vUciKDQLlw/O73VDLjADvRIWEk8BxQIKTI3if9w+6xpUyBDnf7jvdUFMD5gPypsLR8xSjmNJo1qHo93umFJjhY1J/G73VX0w5sFzud0oYQd1x6JQmwAPmqR+N3utsQT5qsc6h907xUwwIP0XOaPiIApvgzJJ0TDXQygy8l/8AuO91jSp5b5/1He6EPwwZPOIShjoif5QOMroxynsq4iAMvVbEXCBACBAy2gRNFrrk2Ra0jK/NYt+YmY5qAYAILZ6JN4mDZUBGoWGEiFQjWADOAni5m/VOGjVbCCbSeED3QI4TBzP/ADJLc2dlwJKYyDaecJZJ4wgYWG6Be0QT/KSA3IYdbNbKewEkT+6AEwQSeN0AIJyc8zxa0pHUyTLSR+Ut/ZOWmd10EaQhByxjuUAxOLYcQ7qQVsLRcYmn7qYtmLgoYY4dkBL92HHG08oKnLQzCbtmeaZ1IarCm3AEC4gWgZRkmDiLg3OfNA0dERStd0ICJdoEwOGbuCzKZjzJhRvmUGkwSLjslcWWxsaehhVFNoseMFE4QYDQRxgIIDAXAgPA/wAxM425cCQU5wzIDe4U3taBpfRAmKOnVEObJgz0shgAyc1bD9kz3QNOjsjwTMiYx25pHB4A9bFO0OA5HigLuAI9FgHASVhiAs1MZi4PooEdIO9/KDcRMXIWcCTFwmpixBb9FRnUxGUrUgQNLak5oPAuAInkbqYLW2gdZKC5gG4nkAs7ZgWYe4HuoF7YuB6obVoNpHdBnlo8VTMRuO+XmE4cCBughTaRU8SCZMUz+4ViGxfJAkDQwgW+nRMQ0xGXJAsGklAMEHNYA5pxSPOURTIsAgjhJOsBGDOapszxMlYUREoEggxKEGMwqlgYLm6W/AIAAdStYd02G2iFxmB6oBYG0rEQ6AZRBnQdkY5IFjWJWki8Z8k0cQZWz7IFL9IJWaY+VNhCZoaDEHsgmSZsyFsTm8LqhAE2JKxa0i7Z6FBOSbn90ROosmNIkWASARe6B5MXGaGItmxzRxCRECEwu0SoIue85tWGIjJWIBuAgWxEgQqJSOP0Ra/DFzf6JNkXXJsOK1WmNnLakEWzQVDhdxIJNrmUWFoENDQFzMlogkdSLrAvBMRdUWxiM4APFEVIbmD3UWucTlcLHF5TAHNQVa8Xgj1zTGqIsT/zqoEEXz9ShidEQJQXdUGGAZ6obQBslRLt4WhNO9n6Kooag4H1ShzY1QxcDJ4QlDo0c3pZBTECTBKxIIiATyCnim7SCdQbFIKrS4SwgToYQXgmJaVRocDlmNLJKQp1XSHvB5wuhrW+W/UlSqg4xnl1ShzbRPNPXIY7eIAUmOZBAg9kFJbNijItJIshTc1hnBJzzSuc8uL5i6B6Zk7zsXM2Tl4GYCiCC42APosRJvIByDrT3QXa8C8I7QOyHokZYbwg8yiXCLwgJqXzg9AlLwToeZj+FibaAcIWGHXNArnNkDCLoOc3TMZFM5rJsQQeSBAGelv+BAGhobIuTdOBfOOCnhuLCDmma2TwH7oKNJGZB6o4ydB6pJ4CyYQTOE+qA07kyBOkonGBhIBKWBFgZ5WRYWyGkEuPBBOta0NnguZ5cHeURwXe9gg2AjuuZ1DexNPoEohhq3MGFB9cUjvlxK7HU6o1dB10SO8KahOMA8LSlC+HdirgtJ/wzpzC6JLROGY5LmYNn4prXAeQxEXuF1Ow4SXGTwkoFxiCHA/sju65HmlglmJrQBy0WOIHJAxcJ8wH7JWvk3ceySS4xhITYA1sm8oGJE8YyRa46m3RSOkDPmtByEW5oL4piR9EBHAqTWE2AHqiWOHmhA20tDZShxmBiSYHA2OaxY4Cc+hQUkxme60nMtlc4qjItFuKZzi1uLD+6qL4tcJ9UBVaM2wpU6pcJaweqXaGtUsHQOCQdOJpuAiXsIsRPVTeBhJDjbOyiH44wk91FdONsyC0dE+IDULnaHzutkd1nPDTDhDuaDpOGLRPCECJzAhc4IInFHcIxMHEXT/zigo4kTGXJM0mBM9wovpuOUzylMKby25gc0FyeR7qbzcyWzwUS0B0Y7nQJixwvicOohBi95fIaSTq5B1Cod4YYnRMwaKltXKog6lBGJxfGiIaCBumM1cFuUIhwygAdFKRFwc8QWkIgua0CC4feKoKh0AtyRNQiAQJ6IrnLC75A08gsaLi0zN+au6o4AWFilNR1yYugnTpinpi6pdmTVxm0WVcbtBCG0fJv6BVGDWtxDecTbKAEabIZcYvyobR0Tiz6hDFMS6Oqis2iSSXjADxN0jWbOoJIqNnTMKgIm5nhdDFzHZBWnsgbueALkA5pfFV5BFK0cLwFoEea54oFrcJAF85UHDUJqGXkmL5oXDsLD6roNFzriCM8lWl4VpeCTc6rdxJo+FourSC7IZALODgx7XgNcDui/quxjQ1hLKYk/MbSoVWvcS4uDmjPl6rCotmQYkj0Rc0PIdV3iLQDCqzFEi0IyTMm6BS4T5IQLtYT2kLExoAUCOcIu30K2NoybCYkG2FpnlktDZ0jogmS0kXI7oSJuVSBH9gmht7IIy0f/UQQdbp3NbOQWEDNAgDgbGyZuL/AIU4MfL3RLmm0D0QCkXg5j1VQ84dJ4gwkxta24HREVWACSbaC6DXJzieIukLHONnO7I/EMbIsAlPiRFnHlorBjQqAfMDyt/KTZPaSCDygrOrzmXIbUWuYSCRYD4lm1bimm6xMRcLpaxgtLrcwf3UWPnxTbF0MOuVwqtqMafL6mURhTl2IEdckHU3GbyTwKIc2bA8oGSUubizIPNFK6m9okoFlQ3sncRB3if2WFR0iHSgnsHNH9STOoKkzwlNr8Qc9dTn4jBwnkhIBEBo4gFLoVrQDa4HFK5uokHhKtit5R3KR7p0CBA10XMeizmOiTB7KrHHKB1WHMAoICmbG8chZMWEthwdHMrovq0wEHZC9+QhBzsphvlAAPDVUpYGjdpjLOc0x4EiM8oSOcSbOz1AQM50WpMaOJLlztpEPc95vmQJKoM8ieqVzqheGU6QIzJCYNjyFJrY1LnfwENi5zpe4ukZDJWYTYlicPwkbhHVBymi8RFMZ6n2TmnUBBDWX6yujG3VolDGBFhCUQ2VUHEWN9SmDKxza0gaCSrCq2LwFRlZoMEEzqEogwFhBaC06pphxeGy7RCtUOOLwRYqG+8Q7E0zeE9EwATAFQdXn3Wwi13ieDiqmhN8+crGgSBceqBWsaQDifH4nJn0mfaf+o+6anRed4PnDzyVGU5HndfWUEG0WG/9T9Z90+xaRk/u8+6LqZD5mSFQUjFyBPNBHYti7X/qPutsGwDFT9R91TZEmwPIytsy0QWmfxJRM0aY0f8AqK2ypjNr/wBZTYSf/srCTbPkgTZ0hYB5/OfdY02E2Dh+Y+6bC4nIm+hWLHaD1KACgyRGL9ZUqFNppAuLySTfG7iVYB0CWjO10nhcIoNxRMuB/UVQTRpx88fjPutsqZMTU7PKo5oGRSwflP1KgGyozcv/AFuP8oOZTAOFzxP3yng5EoOvnHYoFAYRd9T/AHHe6xp0nAAueRnd7vdMGxwnssGzm0TxsqhRSpaOqDo93utsqNoNQOHB7vdMW3jCJ/CjA1EHWyCZDIgGoerykgEfOPzlWdAsQD2QJAHHSIQSwjQPn8R904YXOgB5/MR/KYG5gxPJOMTiLmRyUVMeHdMTUHWofdE0SIl1Tu93urYHOviPWFsIHz2QRFJhPmqD85904oMgf1KkcQ8p3NaBIcs0SLCe6Ceypfbq93lYU2nN1UD/ADHXVCCRkICwQRdRZNtp1xn3Snw7dTU/W73XTfSPVbW8JUcvw7CJaKhP43e6U+GbJkVB+c+66yyQIwg88ygKY+0AOJKUc3w1MXLand7lh4Zjh5HEDg9y6C0h2Q4Zyg7BPmjoFaIt8PTa8OZjY428zsvVMaDdS/s8qhpTme5CwaA2BhMnipRH4dpmTUjjtCl2EkwXkcMZ910gNi+EHgCgQ1ph2fJKqDKBLiMT/wBbp/dOPDNAnE8j8TlewiYjhCR7pyYDzg2VRP4drhc1P1OSbCNXDljKsSMO6D1mEabj82Mn8SlVHZNicb/1uRbRYR53jmXmf3VSHk2Lu7pKxDiLOPOTKUTNFn2ndnu90MLLTiB4lx902EgEkx0KXCS2d6EBFOnxffi4+62zpgSQ8j8RulwHFEG/VYsPD1QVa3w4zYf1lHB4dxjASfxlSFLFeE4phhz7TmgpsqABhrz+Z3usG0h5Q8fmd7pXEaDsEtja4HVAdnTiBit94+6XYUh5i/8AWUC0HJEUzhtIHMoMaVIndNTs8+6ApCbOqfrN0cB5joVjTeLntLkC7NotiqD8xQ2bPmc8/mcq02k9eGJE0yMyc+KUQNOneTUt95yB2f8A5P1H3VywYbF2fFYU51d0SguqNGZ+ii6rjnDMKjmtJ5dU1Og2Mh6SrUjnfTdVc2BE8HK9BrqYgxPVUNMG0+gyRgNGY7qVQuPmbfmEYefnaDwnNI7zRhb6IhkDyAjkUDYcTYxieaDm4QYcwnqlaCSYYQEDIdZsohmsGpE9Qg9gsfS4ug5wObbnklMG5EAaQirAWsR2gwiwjItLh2UNoAMmhbaMGg7BBexcIbboLLm8Pi2Yhpzdy+Yp21W6TE3uj4Qj4VhMxf8A/RQB0C5YUsjmrl40EINAAxBs9kEDDsp9FgbWcQr7kgljSeYhaacxhZnxQQJcTAJPZaHTmV0ODTJw58EoYDG7B7oJBjzmfosWOBz+qsQ0GSYA5lYsaYwPmeDkohhMSXH1KIPAk9ZVsDY3nGOqQsaSRiM8MkA3o83ZNT5nqjsaeRDp6lDBSAtpxKB2lpzN0CQDYeiZpaBOC8Z8kWvEeUSoJiSbCEYcXcJ7qhc6YAAHT3SuJkXk8kAwE62BiAgccQ1shO1pvY91jYZjoEEZfiu10HkE4LtGHvHsjtwy0NPZY1p+z+mUC4n4rgxnmmxuvDO8oGqODfQJS5rrww9kDCoS64JOoCBfUaCW0DHAmFm1MIgNb2FljWb92elkBp1fEYv8FsHUumETWcD5AR0KRr8QMuBJ4f8AxYPtG7Pog22IN6Tr6FE1mAyaTu4BQLjPMcChjc0xBHJUO3xFFzrsAH4YTCrSLYOYy4qYLCfIIjhdY024ZIICCjTTJmZhaBikEwdG3UdlT6fmTbNuTS6eRQNgabYwCftNR2EtnHbiQp7JzTvErEGbOfPBBVtMs8uEj8MpHMc5wIaByhLhebY3A9CjgdFz6oGFKTBAJ5ttKarQcyA/DfgpYHxAeB3WOOLVAY4ORFNjxHqEDStnEjgpASTLp7oloI89kUXU2x5xOiDsIbBd6FBrGxuyecyiA2b3jIIC3ASGhxhWIaLNceuSwc0GQ0SApvrNJNgeqAtYJu4/VM5jADLip7djPMZ6J/iGGnneYkoEaWNdu4iOqziNJmZlAHFInLVNGEZTOSAE/ak9skSWtOl+KVxBtBQa1uK5hKR//9k=";var lu="data:image/jpeg;base64,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";var cu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAEAAQADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECB//EACAQAQEBAAMBAQEAAwEAAAAAAAARASFRYYExQQIScVL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6cvCcdoDXBwyA0lDkF43OCRP4UF3hMKX0FiCggqAai7iQBcCAVbiTwngLxoiwAgQE+gAKgClQBUF4BPq5u1NMzkFvul9QoLfS73qFBaVKAt9S6AF3sulALpd7EBbpfSgLdLvaHALd7LvaAL9Pup9APun0NAvq3e0mgLfdKhwC7vqX0oBfTnsAKuSpNXP0DMEKAsKAhFARYAEwOU5BSIUDQ1AXFZUFEAVAAVAFp+poALhs7A4OE2doDXAhALvel3sAOey72AF057FBNvZd7KAXe0u9hALverd7SALd7LvaALdS6IC3Vu9oYC3ey72AF3sugBd70ugBd7PpcM0C+l9Cgt9N3bvKG/ugXe1zd7QAmEM1aCQKUFQ5OQPohyByFKByUuALzonABp/QgIqKAL/AMOQQAAigJFgUDM0gUCLucpTd50FiTCm6C7e0vpQDns57CAXey+6ALdTnsAJvaclKBdOVpwBz2VAF3fUuiAXe1zdQBql3+6gC7s/qXfQAvq5qFBd3n90um/ugLfU5AF5Tn0ulAy9rPSpQAAAAKUQFogAAAAAAAGoBqhmAsABBcyaboIGKBv7pwb+gAAAEAIAF3tbvZEgLdLvaALdLqALUugBSgBz2X0AW6XUAN3ey72IC31P9tAFvG8nPZn4gLz2Ze0AW+nPYAXey72ALd7Oe0xQOe0u9rUBbqXexYCItSgqoAByvIIqALEhSAQh/CgQLqbugBEBSAB/NAAAAEAUQBQAXNKICgAv+xdQ+At0uoAt3svqcALz2fUPoL91PugB9L6acgt9Sn85QCl04KBdKigub7pygC89nPaFBeS72lWgvOl3tOAFvpfUAXN0u9mbykBbpUAWlxJpPAW4cJCAogCiACoApUNA3agAC7mdpoAAAICgAAAAAAUF/wAf1UzeV5AohAXbn9LvepQDn/1pz2EA57L/ANIQC6c96AE3s57SrQLvZd7KcAfS6AF9N3U0Au9mbqKC3ozUAWzf0qKBTAwDd9Lp/dAWmXUAXlOe9LpQMva89lSgAAAAUEBaIAAgLRFAAACoAKQAIAKZxq7oIYmKBsunBv6AAAAAAAXVuoAXey72AF0oAubpvH9QApQApRAW9F4/RALpRAau9n0P4B9NvZDQOey72AF3su9lKBdLoAXey72AF9W+oAt9TnsACFKBCABAAWJof0AW4zboKgAAAAALmpFBc3tNOTQAAAzdAFiFBYkP1c4BIQKAQu9J+g1c7S+nGG6Bu+l9ADnsvoQF/iXez+AH1b6lKC3exKUFqX0QC72XQAz/AC1r/b1n4oLdLvaALdLqALdLvaH0F+n1KfQX7qfQA+rd7ROQavpUAf/Z";var uo="data:image/jpeg;base64,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";var $l="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAEAAQADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECB//EABwQAQEBAQACAwAAAAAAAAAAAAABEUEhMVFhcf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDtWgjm0ogACAqACgAsCKCKACKAgoARL7ICgAgAAAKIoAABQBEoAgoCCgIACkFAigAIAoAAIAgApqACxAFAAIKAAAhQEFAQXAAABMUAAAVFAAAFAQAEFQAwAFAAAAAACgiKAAAAAAgKAAC4AqRQQAAAAABAAAAVAFCAAACKAgAAigCKAACKAKJoDSAAAAcRQAAKgAAgKACiAKJoCiaAAAkUAQUBFQADflNBViKCgAAAAgKioAACKACKAmigIoAIqABwBQAAAQqoAnVAIqLAUIYAABUUARQBBQQVAAAAAAAAAAAUCggqAI0gILiYAsJMAU0AAAAQAFAAABAAANEUAAAAAKQGkVAErSACoACghigIAAACAAKJQUJQAAEFAZIoAKAgACwUAAEAAVFBAABFAAAABAAAUGc+1i4YAAAAAAAAAAChABAABQEUBBUAAAAAABKQqAqpFBQAQAD8AAAAAAABUAAFAAADQRABQABFAA8gCYoCRpFAAARUBUUAQAAAAAAAAAVAATVQAABUAUQBRCAoACoAqKgAAEoAAAAABQAEUAAASmgqdNAAAAQFAAIRQAAABAVBQAAEBQ4AAAIoAIoAAIKgAAIsEAoKCCoBFRYCggKAAAAACKAAAAAAAJRQAEBRAAQBUAAAFCAAKAioAqLABUAAAEAUTQFABUAAUB//2Q==";var hu="data:image/jpeg;base64,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";var uu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAEAAQADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAE/8QAJBABAQAABAcBAQEBAAAAAAAAAEEBMZHwESFRYXGBodGx4cH/xAAWAQEBAQAAAAAAAAAAAAAAAAAABAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDadRhkm9SrRcigHLhCuuaAQ/eIW8gKCBJaneQD+90oqCXQ6gF10VxWpuOYIKckCIQJJAePfEL2QGeHpEAvHBJAiloAh3mIQCIgIhAokQB9IcO2PsEvR1QBJAaIb1GEBGg/oA9AgUSIDD0iASKARYpAs8UtUBSAJL4tAOEQQEFACIgIS3kC8keDQSGC9Ad5ggF1NBAEKAkkCS3kgWpC5AiF/wBAhIEt5EaAiFe4ELwgISBEEAjhmOgEREEEtQNohoBHyCA6JIEV5AEHoANqGi6gQkCR9gEjvMAjroFoChEW+YJJAkV0BBIEl/UBEWiA0G8AB3zQIBeCASSBLeaQLwlod5AgRAI/FUC3kkgKBAeSECIQI3h/Qt8gIIBELQD4CXgCIQCxIQJJAkkCRAEHeYA0dl9QEfh39EBVGjoCWiIA+gQQRAQ0EEsOwQLBJAR5SA0YGwAoQgP8C7oEQgIhGWAL2jUC8BfUCWuK39X4BuAIBLkodQCSBEIErD45IEggRGKBJIDQRh2BEEAlhEC9L2p0IBJAlUQGnFJAQkCWh5oBDRvMgCDQBEP6AINAe+HtL3gQCRAb5L6oQB1Q6Ap28mielQUIIA6A0BF3W/hoCEGgJ/hoz0NAe15W8kCPsIEqp/pAeleXBfh8gDREC1NENAQ7yEIAg2gEj/wElvmsPgAicTcgB8CGgJmQgXsggEjfYCLl6UN31AQiIEaDQBoID8NBoCEZ4HwA/psB88QEIkIAhAkoaAS0IAg2gDYIaAhEOoA4b4A0ARDQBEIBaFADhnkDQEhoNAQ0LoC9JQgDQbQEqqnQ2gCJ6QJKEEgaAW+S6H5zBLoIaAShAHDMb+GgJ/puIhoA3Aa6mgIlECNBAGzMQgvCvsEAQQC6ZI/oDT2uXZTM8+4BL8OoDeSX1AQscz0ALRG0B5PQQgEoQBBtATob/olNoDQ0EBDqIQB6eYDhmAhvsHeQCej+rXBdACRAEGgEsMiAXT+kAkloCWGaICEQ3EAQgUSIBdEbQENyENAfho/CAiW8l1BEHoAnZekQGhEpAJIEaDoAVU7EAaCAIQI4ekAUI1P6A3kaCAiRAIoB4IhtAQ32IaAwySi3kCOGa8gFF+pAvwpcO3wB8K590CVH9QL53SQJLfIgMd8UvaxAjAgEuqn+kF9FR6AEp0QJaLUgIdRx8G5ACFQS7cT5QAhA/9k=";function du(i){let t=new vs,e=[],n=[],s=new Map;t.background=new Kt(15199469);let r=(w,B=1,z=1,J=!0)=>{let ct=`${w}:${B}:${z}:${J}`;if(s.has(ct))return s.get(ct);let ht;n.push(new Promise(Lt=>ht=Lt));let Ft=new Vs().load(w,()=>ht(),void 0,()=>ht());return Ft.wrapS=Ft.wrapT=Di,Ft.repeat.set(B,z),Ft.colorSpace=J?Te:cn,Ft.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),s.set(ct,Ft),Ft},a=(w,B={})=>new Bs({color:w,roughness:.7,...B}),o=a(16777215,{map:r(uo),roughness:.45}),l=a(12100243,{map:r(uo),roughness:.5}),c=a(4542034,{metalness:.68,roughness:.38}),h=a(12495484,{metalness:.6,roughness:.34}),d=a(14999248,{roughness:.38}),u=w=>a(w,{map:r(hu,3,3),normalMap:r(uu,3,3,!1),normalScale:new ft(.25,.25),roughness:.96}),p=u(7442069),g=u(5465963),M=u(14208441);function m(w,B,z,J,ct,ht="Office furnishing",Ft=!0){let Lt=new Ae(w,B);return Lt.position.set(z,J,ct),Lt.castShadow=Ft,Lt.receiveShadow=!0,Lt.userData.name=ht,t.add(Lt),e.push(Lt),Lt}let f=(w,B,z,J,ct,ht,Ft,Lt,Ht=!0)=>m(new _n(J,ct,ht),Ft,w,B,z,Lt,Ht),b=(w,B,z,J,ct,ht,Ft,Lt,Ht)=>m(new co(J,ct,ht,4,Math.min(Ft,J/2,ct/2,ht/2)),Lt,w,B,z,Ht),R=(w,B,z,J,ct,ht,Ft,Lt)=>m(new Es(J,ct,ht,32),Ft,w,B,z,Lt);function y(w,B,z,J,ct){let ht=new D().subVectors(B,w),Ft=w.clone().add(B).multiplyScalar(.5),Lt=R(Ft.x,Ft.y,Ft.z,z,z,ht.length(),J,ct);return Lt.quaternion.setFromUnitVectors(new D(0,1,0),ht.normalize()),Lt}function S(w,B,z,J,ct,ht,Ft,Lt){let Ht=new Wi,Z=Math.min(.28,ct/2),et=-J/2,dt=J/2,Nt=ct/2,gt=-ct/2;Ht.moveTo(et+Z,gt),Ht.lineTo(dt-Z,gt),Ht.quadraticCurveTo(dt,gt,dt,gt+Z),Ht.lineTo(dt,Nt-Z),Ht.quadraticCurveTo(dt,Nt,dt-Z,Nt),Ht.lineTo(et+Z,Nt),Ht.quadraticCurveTo(et,Nt,et,Nt-Z),Ht.lineTo(et,gt+Z),Ht.quadraticCurveTo(et,gt,et+Z,gt);let zt=m(new Ns(Ht,{depth:ht,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.008,curveSegments:12}),Ft,w,B,z,Lt);return zt.rotation.x=-Math.PI/2,zt}t.add(new ks(15266559,12626574,2.1));let T=new Ji(16773596,2.6);T.position.set(-5,6,3),T.castShadow=!0,T.shadow.mapSize.set(1024,1024),Object.assign(T.shadow.camera,{left:-8,right:8,top:9,bottom:-9,near:.5,far:22}),T.shadow.normalBias=.025,T.shadow.bias=-15e-5,t.add(T);let P=new Ji(14346485,1);P.position.set(5,2,-4),t.add(P);let x=f(0,-.08,0,12,.16,14,a(16777215,{map:r(ou,6,7),normalMap:r(lu,6,7,!1),normalScale:new ft(.13,.13),roughnessMap:r(cu,6,7,!1),roughness:.98}),"Floor",!1);x.userData.floor=!0;let E=a(16382194,{map:r($l,6,2),roughness:.95}),I=a(7967119,{map:r($l,6,2),roughness:.94});f(0,1.7,-7.08,12,3.4,.16,E,"Back wall",!1),f(0,1.7,7.08,12,3.4,.16,E,"Entrance wall",!1),f(-6.08,1.7,0,.16,3.4,14,E,"Window wall",!1),f(6.08,1.7,0,.16,3.4,14,I,"Accent wall",!1),f(0,3.47,0,12,.14,14,a(16250608),"Ceiling",!1);for(let w of[-6.96,6.96])f(0,.065,w,12,.13,.045,l,"Skirting",!1);for(let w of[-5.96,5.96])f(w,.065,0,.045,.13,14,l,"Skirting",!1);for(let w of[-3.35,1.55]){let B=a(11915743,{emissive:8432059,emissiveIntensity:.24,roughness:.25});f(-5.96,2.06,w,.025,1.8,3.55,B,"Window glass",!1);for(let z of[-1,1])f(-5.88,2.06,w+z*1.81,.12,1.96,.08,d,"Window frame",!1);for(let z of[1.13,2.99])f(-5.88,z,w,.12,.09,3.72,d,"Window frame",!1);f(-5.84,2.06,w,.14,1.8,.045,c,"Window mullion",!1),f(-5.77,1.07,w,.36,.065,3.82,d,"Window sill",!1);for(let z=0;z<7;z++)f(-5.93,1.65+z%3*.11,w-1.5+z*.5,.028,.4+z%3*.22,.32,a([9415092,9544363,10992321][z%3]),"Distant building",!1)}let N=f(.35,1.24,-6.97,1.65,2.48,.065,l,"Door",!1);N.material=a(13944493,{map:r(uo,1,2),roughness:.55});for(let w of[-.53,1.23])f(w,1.29,-6.89,.095,2.58,.14,d,"Door frame",!1);f(.35,2.56,-6.89,1.86,.1,.14,d,"Door frame",!1),f(.35,1.77,-6.92,1.18,.72,.04,a(11257294,{emissive:5798281,emissiveIntensity:.1}),"Door glass",!1),y(new D(.95,1.1,-6.84),new D(.95,1.1,-6.69),.025,h,"Door handle"),y(new D(.95,1.1,-6.69),new D(.76,1.1,-6.69),.025,h,"Door handle");for(let[w,B]of[[-.6,-2.8],[2.8,2.8],[-3,3.9]]){f(w,3.29,B,1.9,.07,.32,c,"Pendant light",!1),f(w,3.248,B,1.8,.015,.24,a(16773851,{emissive:16772038,emissiveIntensity:1.1}),"Light diffuser",!1);let z=new Ws(16773082,5,9,2);z.position.set(w,3.08,B),t.add(z)}function V(w){b(w.x,.99,w.z,w.w,1.94,w.d,.035,o,"Cabinet");for(let B=0;B<4;B++){let z=w.z-w.d/2+.45+B*.88;b(w.x-w.w/2-.014,1,z,.035,1.81,.83,.014,l,"Cabinet door"),y(new D(w.x-w.w/2-.06,1.01,z+.25),new D(w.x-w.w/2-.06,1.19,z+.25),.013,h,"Cabinet handle")}for(let B=0;B<7;B++)f(w.x,2.08,w.z-.9+B*.095,.4,.2+B%3*.06,.065,a([13221543,6717828,12030322][B%3]),"Book")}function G(w){b(w.x,.31,w.z,1.72,.36,3.02,.13,p,"Sofa base"),b(w.x-.68,.73,w.z,.34,1.04,2.98,.15,p,"Sofa back");for(let B of[-1.34,1.34])b(w.x,.57,w.z+B,1.72,.59,.34,.16,p,"Sofa arm");for(let B of[-.78,0,.78]){b(w.x+.15,.54,w.z+B,1.28,.22,.73,.09,p,"Sofa cushion");let z=b(w.x-.42,.86,w.z+B,.26,.5,.65,.11,B===0?M:p,"Sofa cushion");z.rotation.z=-.13}for(let B of[-.65,.65])for(let z of[-1.28,1.28])R(w.x+B,.09,w.z+z,.03,.022,.18,l,"Sofa foot")}function U(w,B=!1){S(w.x,w.h-.07,w.z,w.w-.045,w.d-.045,.06,B?o:l,B?"Desk":"Table");for(let J of[-1,1])for(let ct of[-1,1]){let ht=w.x+J*(w.w/2-.19),Ft=w.z+ct*(w.d/2-.18);y(new D(ht,.025,Ft),new D(ht,w.h-.075,Ft),.035,c,"Table leg")}if(B){b(w.x,1.16,w.z-.14,1.01,.54,.055,.025,c,"Monitor");let J=f(w.x,.82,w.z-.108,.94,.46,.006,a(6852253,{emissive:3496809,emissiveIntensity:.4}),"Monitor screen");R(w.x,.91,w.z-.21,.035,.035,.26,c,"Monitor stand"),b(w.x,.786,w.z-.2,.4,.016,.25,.006,c,"Monitor base"),b(w.x,.802,w.z+.3,.67,.027,.21,.01,a(6187115),"Keyboard");for(let ct=0;ct<12;ct++)f(w.x-.29+ct*.051,.818,w.z+.3,.037,.007,.16,a(12699332),"Keyboard key");J.position.y=1.16}else{b(w.x+.38,w.h+.018,w.z-.1,.66,.035,.43,.014,c,"Laptop");let J=b(w.x+.38,w.h+.235,w.z-.3,.66,.43,.032,.018,c,"Laptop");J.rotation.x=-.14;let ct=f(w.x+.38,w.h+.235,w.z-.278,.59,.36,.006,a(7969181,{emissive:4615283,emissiveIntensity:.26}),"Laptop screen");ct.rotation.x=-.14}R(w.x-.7,w.h+.105,w.z+.12,.078,.065,.2,d,"Mug");let z=m(new Os(.055,.013,8,20),d,w.x-.605,w.h+.11,w.z+.12,"Mug handle");z.rotation.y=Math.PI/2,b(w.x-.26,w.h+.032,w.z+.32,.46,.043,.3,.01,a(15261641),"Notebook"),y(new D(w.x-.4,w.h+.061,w.z+.29),new D(w.x-.15,w.h+.061,w.z+.35),.007,c,"Pen")}function H(w){b(w.x,.49,w.z,.58,.13,.57,.065,g,"Chair seat");let B=b(w.x,.82,w.z+.26,.59,.6,.095,.045,g,"Chair back");B.rotation.x=-.1,R(w.x,.27,w.z,.038,.048,.4,c,"Chair column");for(let z of[-1,1])y(new D(w.x+z*.27,.51,w.z),new D(w.x+z*.27,.68,w.z),.018,c,"Chair arm"),b(w.x+z*.29,.69,w.z,.055,.045,.3,.018,c,"Arm rest");for(let z=0;z<5;z++){let J=z*Math.PI*2/5,ct=new D(w.x+Math.cos(J)*.34,.08,w.z+Math.sin(J)*.34);y(new D(w.x,.12,w.z),ct,.025,c,"Chair base");let ht=R(ct.x,.052,ct.z,.043,.043,.045,c,"Chair wheel");ht.rotation.z=Math.PI/2}}function $(w){let B=a(13089185,{roughness:.87});R(w.x,w.h/2,w.z,w.w/2-.025,w.w/2-.1,w.h,B,"Planter"),R(w.x,w.h+.005,w.z,w.w/2-.05,w.w/2-.05,.018,a(5457723),"Soil");for(let z=0;z<15;z++){let J=z*2.399,ct=new D(w.x+Math.sin(J)*(.14+z%3*.065),w.h+.35+z%5*.14,w.z+Math.cos(J)*(.13+z%3*.06));y(new D(w.x,w.h,w.z),ct,.009,a(6056006),"Plant stem");let ht=m(new ai(1,12,8),a([5536330,7442518,4023619][z%3],{roughness:.79}),ct.x,ct.y,ct.z,"Plant leaf");ht.scale.set(.11,.26,.032),ht.rotation.z=Math.sin(J)*.65,ht.rotation.x=Math.cos(J)*.6}}for(let w of fi)w.name==="Sofa"?G(w):w.name==="Table"||w.name==="Desk"?U(w,w.name==="Desk"):w.name==="Cabinet"?V(w):w.name.includes("chair")?H(w):w.name==="Planter"?$(w):w.name==="Coffee table"&&(R(w.x,.415,w.z,.46,.46,.04,o,"Coffee table"),R(w.x,.2,w.z,.12,.21,.39,c,"Coffee table pedestal"),b(w.x,.451,w.z,.39,.04,.27,.012,a(12696226),"Magazine"));b(5.965,1.95,.6,.055,1.3,2.3,.02,o,"Art frame"),f(5.93,1.95,.6,.015,1.15,2.15,M,"Acoustic panel",!1);for(let w=0;w<3;w++){let B=R(5.9,1.88+w*.12,0+w*.54,.22,.22,.02,a([6848386,12294261,10924181][w]),"Artwork");B.rotation.z=Math.PI/2,B.castShadow=!1}b(-2.8,1.94,-6.945,2.5,1.15,.055,.023,c,"Whiteboard frame"),f(-2.8,1.94,-6.912,2.4,1.05,.008,a(16185329,{roughness:.45}),"Whiteboard",!1);for(let w=0;w<4;w++)f(-3.62+w*.35,2.1-w%2*.22,-6.901,.23,.012,.007,a(8887452),"Whiteboard note",!1);let Q=new Ae(new Fs(.17,.25,40),new Rn({color:15964720,side:$e,depthWrite:!1}));return Q.rotation.x=-Math.PI/2,Q.visible=!1,t.add(Q),{scene:t,floor:x,meshes:e,marker:Q,ready:Promise.all(n)}}(()=>{let i=L=>document.querySelector(L),t=L=>[...document.querySelectorAll(L)],e=i("#idea-panel");if(!e)return;let n={action:{title:"Choose a Point. See the Robot Move.",description:"Click an open patch of floor in the camera view. The selected pixel becomes a destination. The robot plans a safe route around furniture.",hint:"Click the floor to move \xB7 drag to look around",button:"Move Toward the Doorway",color:"#d78734"},depth:{title:"Point at a Surface. Get Its Distance.",description:"Click the floor, a tabletop, or a wall to measure the distance from the camera to that exact surface. Compare up to three points without moving the robot.",hint:"Click any surface to measure \xB7 drag to look around",button:"Measure the Table",color:"#8b63c7"},recall:{title:"Choose a Past Point. Retrieve Its View.",description:"Select a numbered step on the Bird's Eye View (BEV) map. Recall returns the observation saved there. Your moves add new observations to the same trajectory.",hint:"Select a numbered step on the map",button:"Recall the Previous View",color:"#359574"}},s="action",r=!1,a,o,l,c,h={...ho[2]},d=null,u=[],p=0,g=0,M=[],m,f,b=null,R=0,y=!1,S=[],T=!1,P=[],x=[];i("#idea-visual").innerHTML=`<div class="tool-toolbar"><span id="tool-view-label">Robot Camera</span><span class="scene-badge">Interactive Illustration</span></div>
    <div class="tool-stage" id="tool-stage"><canvas id="tool-canvas" tabindex="0" aria-label="Interactive robot camera. Drag or use arrow keys to look around. Press Enter to select the centre point."></canvas><div class="tool-pins" id="tool-pins" aria-hidden="true"></div><span class="tool-crosshair" aria-hidden="true"></span><div class="scene-feedback" id="scene-feedback" role="status" hidden></div><div class="scene-loading" id="scene-loading">Loading the room\u2026</div></div>
    <div class="recall-workspace" id="recall-workspace" hidden><div class="bev-wrap"><h4 class="recall-panel-title">Bird's Eye View (BEV) Map</h4><svg id="tool-map" viewBox="0 0 328 376" role="group" aria-label="Bird's Eye View (BEV) map of saved steps"></svg></div><figure class="recalled-view"><h4 class="recall-panel-title">Recalled Observation</h4><div class="recalled-image-frame"><img id="recalled-image" alt=""><span class="recalled-step-badge" id="recalled-step-badge">Step 1</span></div></figure></div>
    <div class="scene-controls" id="scene-controls"><button type="button" id="look-left" aria-label="Look left">\u21B6 <span>Look left</span></button><span id="scene-position">Shared room \xB7 metres</span><button type="button" id="look-right" aria-label="Look right"><span>Look right</span> \u21B7</button></div>
    <div class="memory-decisions" id="memory-decisions" aria-label="Saved observations" hidden></div><p class="tool-hint" id="tool-hint"></p>`;let E=i("#tool-canvas"),I=i("#tool-stage");i("#idea-action").insertAdjacentHTML("afterend",'<button type="button" class="scene-reset" id="scene-reset">Reset Room \u21BA</button><p class="scene-note">A shared 3D office with collision-aware navigation. Distances are computed in metres; this illustration does not run the navigation model.</p>');function N(L,q=""){i("#idea-result").textContent=L,e.dataset.feedback=q;let rt=i("#scene-feedback");rt.hidden=q!=="failed",rt.textContent=q==="failed"?L:""}function V(L){e.dataset.lastMove="blocked",e.dataset.safety="failed",N(`Safety Check Failed!
Reason: ${L}
Please Reselect.`,"failed")}function G(){return r&&y&&!T}function U(){i("#idea-action").disabled=!G(),i("#scene-reset").disabled=!G(),i("#look-left").disabled=!G(),i("#look-right").disabled=!G()}function H(){l.position.set(h.x,1.25,h.z),l.rotation.order="YXZ",l.rotation.set(h.pitch,h.yaw,0),l.updateMatrixWorld()}function $(){!r||T||(H(),o.render(a,l),Ft())}function Q(L){let q=h;h=L,H();let rt=m.visible,pt=x.map(Rt=>Rt.visible);m.visible=!1,x.forEach(Rt=>Rt.visible=!1),o.render(a,l);let wt=E.toDataURL("image/jpeg",.8);return m.visible=rt,x.forEach((Rt,C)=>Rt.visible=pt[C]),h=q,H(),wt}function w(){u.push({id:++p,pose:{...h},route:S.map(L=>({...L})),image:Q(h)}),S=[{x:h.x,z:h.z}],u.length>24&&u.shift(),g=u[u.length-1].id,nt()}function B(){if(G()){Z(),b=null,S=[],e.dataset.lastMove="idle",e.dataset.safety="",delete e.dataset.selectedPoint,delete e.dataset.route,delete e.dataset.routeLength,delete e.dataset.distance,delete e.dataset.surface,d=null,M=[],ht(),m.visible=!1,u=[],p=0;for(let L of ho)h={...L},S.push({x:L.x,z:L.z}),w();h={...ho[2]},nt(),Qt(u[0].id,!1),$(),ct(),N("Room reset. Three sample decisions are ready; your moves will add more.")}}function z(){if(!r)try{o=new ao({canvas:E,antialias:!0,alpha:!1}),o.setPixelRatio(Math.min(devicePixelRatio,1.75)),o.shadowMap.enabled=!0,o.shadowMap.type=oi,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0,o.outputColorSpace=Te,o.toneMapping=qs,o.toneMappingExposure=1.05,l=new Ee(65,1,.06,40);let L=du(o);a=L.scene,c=L.floor,m=L.marker,P.push(...L.meshes),r=!0,J(),U(),f=new ResizeObserver(J),f.observe(I),L.ready.then(()=>{y=!0,o.shadowMap.needsUpdate=!0,B(),i("#scene-loading").hidden=!0,U(),lt(s),N("Try the tool yourself. The three tabs share this office and its history.")})}catch{i("#scene-loading").textContent="The 3D room needs WebGL. Try a browser with hardware acceleration enabled.",i("#idea-action").disabled=!0,i("#scene-reset").disabled=!0}}function J(){if(!r||I.hidden)return;let L=I.clientWidth,q=I.clientHeight;!L||!q||(o.setSize(L,q,!1),l.aspect=L/q,l.updateProjectionMatrix(),$())}function ct(){e.dataset.position=`${h.x.toFixed(3)},${h.z.toFixed(3)}`,i("#scene-position").textContent=`${u.length} saved observations`}function ht(){x.splice(0).forEach(L=>{a.remove(L),L.geometry.dispose(),L.material.dispose()}),i("#tool-pins").replaceChildren()}function Ft(){if(i("#tool-pins").replaceChildren(),s==="action"&&b){let L=new D(b.x,.035,b.z).project(l);if(L.z>=-1&&L.z<=1&&Math.abs(L.x)<=1&&Math.abs(L.y)<=1){let q=document.createElement("span");q.className="action-pin",q.style.left=`${(L.x+1)*50}%`,q.style.top=`${(1-L.y)*50}%`,i("#tool-pins").append(q)}}s==="depth"&&M.forEach(L=>{let q=L.point.clone().project(l);if(q.z>1||q.z<-1||Math.abs(q.x)>1||Math.abs(q.y)>1)return;let rt=document.createElement("span");rt.className="depth-pin",rt.style.left=`${(q.x+1)*50}%`,rt.style.top=`${(1-q.y)*50}%`,rt.textContent=`${L.distance.toFixed(2)} m`,i("#tool-pins").append(rt)})}function Lt(L,q){let rt=new Xs;return H(),rt.setFromCamera(new ft(L*2-1,1-q*2),l),rt.intersectObjects(P,!1)[0]}function Ht(L,q){if(z(),!G()||s==="recall")return;let rt=Lt(L,q);if(!rt){s==="action"?(Z(!0),V("No visible floor was selected."),$()):N("No surface at this point. Choose a visible floor, wall, or object.");return}if(s==="depth"){if(M.length===3){M.shift();let wt=x.shift();a.remove(wt),wt.geometry.dispose(),wt.material.dispose()}M.push({point:rt.point.clone(),distance:rt.distance});let pt=new Ae(new ai(.055,12,8),new Rn({color:9135047,depthTest:!1}));pt.position.copy(rt.point),pt.renderOrder=2,a.add(pt),x.push(pt),e.dataset.distance=rt.distance.toFixed(4),e.dataset.surface=rt.object.userData.name,N(`${rt.object.userData.name} \xB7 ${rt.distance.toFixed(2)} m from the camera along the selected viewing ray. The robot has not moved.`),$();return}if(!rt.object.userData.floor||rt.face.normal.y<.9){Z(!0),V(`${rt.object.userData.name} is not a reachable floor surface.`),$(),ct();return}dt({x:rt.point.x,z:rt.point.z})}function Z(L=!1){cancelAnimationFrame(R),R=0,d&&(d.travelled>.005&&S.push(...et(d.path,d.travelled).slice(1)),d=null,L&&S.length>1&&(w(),Qt(g,!1))),b=null,delete e.dataset.selectedPoint,m&&(m.visible=!1)}function et(L,q){let rt=[L[0]],pt=q;for(let wt=1;wt<L.length;wt++){let Rt=L[wt-1],C=L[wt],kt=Math.hypot(C.x-Rt.x,C.z-Rt.z);if(pt>=kt)rt.push(C),pt-=kt;else{let Gt=kt?pt/kt:0;rt.push({x:Rt.x+(C.x-Rt.x)*Gt,z:Rt.z+(C.z-Rt.z)*Gt});break}}return rt}function dt(L){if(!G())return;let q=ru(h,L);if(!q.ok){Z(!0),V(q.reason),$();return}if(Z(),e.dataset.safety="passed",q.length<.08){S.length>1&&(w(),Qt(g,!1)),e.dataset.lastMove="arrived",N("Safety Check Passed. The robot is already at this floor point."),$(),ct();return}b={...q.target},M=[],ht(),m.position.set(q.target.x,.025,q.target.z),m.visible=!0,e.dataset.selectedPoint=`${q.target.x.toFixed(3)},${q.target.z.toFixed(3)}`,e.dataset.route=JSON.stringify(q.path),e.dataset.routeLength=q.length.toFixed(3),d={path:q.path,length:q.length,duration:Math.max(650,q.length*220),elapsed:0,lastFrame:performance.now(),travelled:0,adjusted:q.adjusted},e.dataset.lastMove="moving",N(`Safety Check Passed. Moving ${q.length.toFixed(2)} m${q.path.length>2?" along a route around furniture":""}.${q.adjusted?" Destination adjusted to the nearest safe floor point.":""}`),$(),ct();let rt=d;R=requestAnimationFrame(pt=>Nt(pt,rt))}function Nt(L,q){if(!d||d!==q)return;d.elapsed+=Math.min(70,Math.max(0,L-d.lastFrame)),d.lastFrame=L;let rt=Math.min(1,d.elapsed/d.duration),pt=rt*rt*(3-2*rt);d.travelled=d.length*pt;let wt=et(d.path,d.travelled),Rt=wt[wt.length-1];h.x=Rt.x,h.z=Rt.z;let C=wt[wt.length-2]||Rt,kt=Rt.x-C.x,Gt=Rt.z-C.z;if(Math.hypot(kt,Gt)>.001){let A=Math.atan2(-kt,-Gt),_=Math.atan2(Math.sin(A-h.yaw),Math.cos(A-h.yaw));h.yaw+=_*.22}h.pitch+=(-.15-h.pitch)*.08,$(),ct(),rt<1?R=requestAnimationFrame(A=>Nt(A,q)):gt()}function gt(){S.push(...d.path.slice(1)),d=null,R=0,b=null,m.visible=!1,w(),Qt(g,!1),$(),ct(),e.dataset.lastMove="arrived",N(`Arrived safely. Step ${p} is now available on the Recall map.`)}function zt(L){z(),!(!G()||d||s==="recall")&&(h.yaw+=L,$())}function Qt(L,q=!0){let rt=u.find(pt=>pt.id===L);rt&&(g=L,i("#recalled-image").src=rt.image,i("#recalled-image").alt=`Camera observation saved at Step ${L}`,i("#recalled-step-badge").textContent=`Step ${L}`,e.dataset.recalled=String(L),nt(),q&&N(`Recalled the observation from Step ${L}. The robot stays at its current position.`))}function nt(){if(!r)return;let L=fi.map(C=>{if(C.shape==="circle"){let Gt=rs(C);return`<circle cx="${Gt.x}" cy="${Gt.y}" r="${C.w*12}" class="map-furniture"/>`}let kt=rs({x:C.x-C.w/2,z:C.z-C.d/2});return`<rect x="${kt.x}" y="${kt.y}" width="${C.w*24}" height="${C.d*24}" rx="3" class="map-furniture"/>`}).join(""),q=au(u.map(C=>C.pose)),rt=u.flatMap(C=>C.route.length?C.route:[C.pose]).map(C=>{let kt=rs(C);return`${kt.x},${kt.y}`}).join(" "),pt=rs(h),wt=q.map(({anchor:C,display:kt})=>Math.hypot(kt.x-C.x,kt.y-C.y)>1?`<line x1="${C.x}" y1="${C.y}" x2="${kt.x}" y2="${kt.y}" class="map-step-link"/>`:"").join(""),Rt=u.map((C,kt)=>{let{display:Gt}=q[kt];return`<g role="button" tabindex="0" aria-label="Recall Step ${C.id}" aria-pressed="${C.id===g}" data-memory="${C.id}" class="map-decision"><circle cx="${Gt.x}" cy="${Gt.y}" r="12"/><text x="${Gt.x}" y="${Gt.y+4}">${C.id}</text></g>`}).join("");i("#tool-map").innerHTML=`<rect x="20" y="20" width="288" height="336" rx="4" class="map-room"/><path d="M152 20h46" class="map-door"/>${L}<polyline points="${rt}" class="map-trail"/><path d="M0 -18L7 -6L0 -9L-7 -6Z" transform="translate(${pt.x} ${pt.y}) rotate(${-h.yaw*180/Math.PI})" class="map-current"/>`+wt+Rt+'<text x="24" y="371" class="map-legend">\u25B2 Current robot \xB7 dots return saved views</text>',i("#memory-decisions").innerHTML=u.map(C=>`<button type="button" data-memory="${C.id}" aria-pressed="${C.id===g}">Step ${C.id}</button>`).join(""),t("[data-memory]").forEach(C=>{C.addEventListener("click",()=>Qt(Number(C.dataset.memory))),C.tagName.toLowerCase()==="g"&&C.addEventListener("keydown",kt=>{(kt.key==="Enter"||kt.key===" ")&&(kt.preventDefault(),Qt(Number(C.dataset.memory)))})})}function lt(L){L!==s&&d&&(Z(!0),e.dataset.lastMove="paused",ct(),$()),s=L,e.dataset.tool=s,e.style.setProperty("--tool-color",n[L].color),i("#idea-kicker").textContent=L==="recall"?"Recall Tool":`${L[0].toUpperCase()+L.slice(1)} Tool`,i("#idea-title").textContent=n[L].title,i("#idea-description").textContent=n[L].description,i("#idea-action").textContent=n[L].button+" \u2192",i("#tool-hint").textContent=n[L].hint,I.hidden=L==="recall",i("#recall-workspace").hidden=L!=="recall",i("#scene-controls").hidden=L==="recall",i("#memory-decisions").hidden=L!=="recall",i("#tool-view-label").textContent=L==="recall"?"Recall Tool":"Robot Camera",e.setAttribute("aria-labelledby",`tab-${L}`),t("[data-idea]").forEach(q=>{q.setAttribute("aria-selected",String(q.dataset.idea===L)),q.tabIndex=q.dataset.idea===L?0:-1}),G()&&(x.forEach(q=>q.visible=L==="depth"),L==="recall"?(nt(),Qt(g||u[0].id,!1)):J()),N(L==="recall"?"Choose a decision on the map. Three example observations are included; your moves add more.":n[L].hint+".")}t("[data-idea]").forEach((L,q)=>{L.addEventListener("click",()=>{z(),lt(L.dataset.idea)}),L.addEventListener("keydown",rt=>{let pt;if(rt.key==="ArrowRight"&&(pt=(q+1)%3),rt.key==="ArrowLeft"&&(pt=(q+2)%3),rt.key==="Home"&&(pt=0),rt.key==="End"&&(pt=2),pt!==void 0){rt.preventDefault();let wt=t("[data-idea]")[pt];z(),lt(wt.dataset.idea),wt.focus()}})}),i("#look-left").addEventListener("click",()=>zt(.22)),i("#look-right").addEventListener("click",()=>zt(-.22)),i("#scene-reset").addEventListener("click",()=>{z(),B()}),i("#idea-action").addEventListener("click",()=>{if(z(),!!G())if(s==="action")dt({x:.9,z:-5.5});else if(s==="recall"){let L=u.findIndex(q=>q.id===g);Qt(u[(L-1+u.length)%u.length].id)}else{let q=new D(2.35,.779,-1.2).clone().sub(l.position);h.yaw=Math.atan2(-q.x,-q.z),h.pitch=Math.atan2(q.y,Math.hypot(q.x,q.z)),$(),Ht(.5,.5)}});let at=null;E.addEventListener("pointerdown",L=>{L.button!==0||at||!G()||(E.focus({preventScroll:!0}),E.setPointerCapture(L.pointerId),at={id:L.pointerId,x:L.clientX,y:L.clientY,yaw:h.yaw,pitch:h.pitch,drag:!1})}),E.addEventListener("pointermove",L=>{if(!at||L.pointerId!==at.id)return;let q=L.clientX-at.x,rt=L.clientY-at.y;Math.hypot(q,rt)>6&&(at.drag=!0),at.drag&&!d&&(h.yaw=at.yaw-q*.005,h.pitch=eo.clamp(at.pitch-rt*.004,-.95,.95),$())}),E.addEventListener("pointerup",L=>{if(!at||L.pointerId!==at.id)return;let q=!at.drag;if(at=null,E.releasePointerCapture(L.pointerId),q){let rt=E.getBoundingClientRect();Ht((L.clientX-rt.left)/rt.width,(L.clientY-rt.top)/rt.height)}}),E.addEventListener("pointercancel",()=>at=null),E.addEventListener("lostpointercapture",()=>at=null),E.addEventListener("keydown",L=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," "].includes(L.key)&&(L.preventDefault(),!(!G()||d)&&(L.key==="ArrowLeft"?zt(.12):L.key==="ArrowRight"?zt(-.12):L.key==="ArrowUp"||L.key==="ArrowDown"?(h.pitch=eo.clamp(h.pitch+(L.key==="ArrowUp"?.08:-.08),-.95,.95),$()):Ht(.5,.5)))}),E.addEventListener("webglcontextlost",L=>{L.preventDefault(),Z(),T=!0,U(),i("#scene-loading").hidden=!1,i("#scene-loading").textContent="The graphics context was interrupted. Waiting for recovery\u2026"}),E.addEventListener("webglcontextrestored",()=>{T=!1,o.shadowMap.needsUpdate=!0,U(),i("#scene-loading").hidden=!0,$(),N("The office view has recovered. Select a floor point to continue.")}),lt("action"),new IntersectionObserver((L,q)=>{L.some(rt=>rt.isIntersecting)&&(z(),q.disconnect())},{rootMargin:"250px"}).observe(e)})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
