(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f7624e"],{2025:function(e,t,a){},"3e17":function(e,t,a){"use strict";a("2025")},eea0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"count_cover"},[a("h1",{attrs:{id:"headline"}},[e._v("POREST")]),a("div",{attrs:{id:"countdown"}},[a("div",{staticClass:"times"},[a("li",[a("span",{attrs:{id:"days"}}),e._v("days")]),a("li",[a("span",{attrs:{id:"hours"}}),e._v("Hours")]),a("li",[a("span",{attrs:{id:"minutes"}}),e._v("Minutes")]),a("li",[a("span",{attrs:{id:"seconds"}}),e._v("Seconds")])])]),a("p",{staticClass:"title"},[e._v("COMMING SOON")]),a("div",{staticClass:"message"},[a("div",{attrs:{id:"content"}})])]),a("div",{staticClass:"plane_cover"},[a("div",{attrs:{id:"world"}})])])}],i=function(){var e,t,a,n,o,i,s,h,r,d,E,c,w=1e3,l=60*w,m=60*l,v=24*m,M="May 21, 2021 12:00:00",T=new Date(M).getTime(),H=setInterval((function(){var e=(new Date).getTime(),t=T-e;if(document.getElementById("days").innerText=Math.floor(t/v),document.getElementById("hours").innerText=Math.floor(t%v/m),document.getElementById("minutes").innerText=Math.floor(t%m/l),document.getElementById("seconds").innerText=Math.floor(t%l/w),t<0){var a=document.getElementById("headline"),n=document.getElementById("countdown"),o=document.getElementById("content");a.innerText="It's my birthday!",n.style.display="none",o.style.display="block",clearInterval(H)}}),0),p={red:15881030,yellow:15592231,white:14209233,brown:5845806,pink:16095342,brownDark:2300175,blue:6865856,green:4555336,purple:5577355,lightgreen:6460005};function R(){s=window.innerHeight,h=window.innerWidth,e=new THREE.Scene,e.fog=new THREE.Fog(16243114,100,950),n=h/s,a=60,o=1,i=1e4,t=new THREE.PerspectiveCamera(a,n,o,i),t.position.x=0,t.position.y=150,t.position.z=100,r=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),r.setSize(h,s),r.shadowMap.enabled=!0,d=document.getElementById("world"),d.appendChild(r.domElement),window.addEventListener("resize",y,!1)}function y(){s=window.innerHeight,h=window.innerWidth,r.setSize(h,s),t.aspect=h/s,t.updateProjectionMatrix()}function g(){E=new THREE.HemisphereLight(11184810,0,.9),c=new THREE.DirectionalLight(16777215,.9),c.position.set(0,350,350),c.castShadow=!0,c.shadow.camera.left=-650,c.shadow.camera.right=650,c.shadow.camera.top=650,c.shadow.camera.bottom=-650,c.shadow.camera.near=1,c.shadow.camera.far=1e3,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,e.add(E),e.add(c)}var S,u,f,x,z,P,B=function(){var e=new THREE.CylinderGeometry(600,600,1700,40,10);e.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var t=new THREE.MeshPhongMaterial({color:p.lightgreen,shading:THREE.FlatShading});this.mesh=new THREE.Mesh(e,t),this.mesh.receiveShadow=!0},b=function(){var e=new THREE.Object3D;this.mesh=e},G=function(){this.mesh=new THREE.Object3D;var e=new THREE.SphereGeometry(400,20,10),t=new THREE.MeshPhongMaterial({color:p.yellow,shading:THREE.FlatShading}),a=new THREE.Mesh(e,t);a.castShadow=!1,a.receiveShadow=!1,this.mesh.add(a)},I=function(){this.mesh=new THREE.Object3D;for(var e=new THREE.DodecahedronGeometry(20,0),t=new THREE.MeshPhongMaterial({color:p.white}),a=3+Math.floor(3*Math.random()),n=0;n<a;n++){var o=new THREE.Mesh(e,t);o.position.x=15*n,o.position.y=10*Math.random(),o.position.z=10*Math.random(),o.rotation.z=Math.random()*Math.PI*2,o.rotation.y=Math.random()*Math.PI*2;var i=.1+.9*Math.random();o.scale.set(i,i,i),this.mesh.add(o)}},F=function(){this.mesh=new THREE.Object3D,this.nClouds=25;for(var e=2*Math.PI/this.nClouds,t=0;t<this.nClouds;t++){var a=new I,n=e*t,o=800+200*Math.random();a.mesh.position.y=Math.sin(n)*o,a.mesh.position.x=Math.cos(n)*o,a.mesh.rotation.z=n+Math.PI/2,a.mesh.position.z=-400-400*Math.random();var i=1+2*Math.random();a.mesh.scale.set(i,i,i),this.mesh.add(a.mesh)}},C=function(){this.mesh=new THREE.Object3D;var e=new THREE.MeshPhongMaterial({color:p.green,flatShading:THREE.FlatShading}),t=new THREE.BoxGeometry(10,20,10),a=new THREE.MeshBasicMaterial({color:p.brown}),n=new THREE.Mesh(t,a);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);var o=new THREE.CylinderGeometry(1,36,36,4),i=new THREE.Mesh(o,e);i.castShadow=!0,i.receiveShadow=!0,i.position.y=20,this.mesh.add(i);var s=new THREE.CylinderGeometry(1,27,27,4),h=new THREE.Mesh(s,e);h.castShadow=!0,h.position.y=40,h.receiveShadow=!0,this.mesh.add(h);var r=new THREE.CylinderGeometry(1,18,18,4),d=new THREE.Mesh(r,e);d.castShadow=!0,d.position.y=55,d.receiveShadow=!0,this.mesh.add(d)},D=function(){this.mesh=new THREE.Object3D;var e=new THREE.BoxGeometry(5,50,5,1,1,1),t=new THREE.MeshPhongMaterial({color:p.green,flatShading:THREE.FlatShading}),a=new THREE.Mesh(e,t);a.castShadow=!1,a.receiveShadow=!0,this.mesh.add(a);var n=new THREE.BoxGeometry(10,10,10,1,1,1),o=new THREE.MeshPhongMaterial({color:p.yellow,flatShading:THREE.FlatShading}),i=new THREE.Mesh(n,o);i.castShadow=!1,i.receiveShadow=!0;var s=O[Math.floor(3*Math.random())],h=new THREE.BoxGeometry(15,20,5,1,1,1),r=new THREE.MeshBasicMaterial({color:s});h.vertices[5].y-=4,h.vertices[4].y-=4,h.vertices[7].y+=4,h.vertices[6].y+=4,h.translate(12.5,0,3);for(var d=[],E=0;E<4;E++)d[E]=new THREE.Mesh(h,r),d[E].rotation.z=E*Math.PI/2,d[E].castShadow=!0,d[E].receiveShadow=!0;i.add(d[0],d[1],d[2],d[3]),i.position.y=25,i.position.z=3,this.mesh.add(i)},O=[p.red,p.yellow,p.blue],_=function(){this.mesh=new THREE.Object3D,this.nTrees=300;for(var e=2*Math.PI/this.nTrees,t=0;t<this.nTrees;t++){var a=new C,n=e*t,o=605;a.mesh.position.y=Math.sin(n)*o,a.mesh.position.x=Math.cos(n)*o,a.mesh.rotation.z=n+Math.PI/2*3,a.mesh.position.z=0-600*Math.random();var i=.3+.75*Math.random();a.mesh.scale.set(i,i,i),this.mesh.add(a.mesh)}this.nFlowers=350;for(e=2*Math.PI/this.nFlowers,t=0;t<this.nFlowers;t++){var s=new D;n=e*t,o=605;s.mesh.position.y=Math.sin(n)*o,s.mesh.position.x=Math.cos(n)*o,s.mesh.rotation.z=n+Math.PI/2*3,s.mesh.position.z=0-600*Math.random();i=.1+.3*Math.random();s.mesh.scale.set(i,i,i),this.mesh.add(s.mesh)}},j=function(){this.mesh=new THREE.Object3D;var e=new THREE.BoxGeometry(80,50,50,1,1,1),t=new THREE.MeshPhongMaterial({color:p.red,flatShading:THREE.FlatShading});e.vertices[4].y-=10,e.vertices[4].z+=20,e.vertices[5].y-=10,e.vertices[5].z-=20,e.vertices[6].y+=30,e.vertices[6].z+=20,e.vertices[7].y+=30,e.vertices[7].z-=20;var a=new THREE.Mesh(e,t);a.castShadow=!0,a.receiveShadow=!0,this.mesh.add(a);var n=new THREE.BoxGeometry(20,50,50,1,1,1),o=new THREE.MeshPhongMaterial({color:p.white,flatShading:THREE.FlatShading}),i=new THREE.Mesh(n,o);i.position.x=40,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);var s=new THREE.BoxGeometry(15,20,5,1,1,1),h=new THREE.MeshPhongMaterial({color:p.red,flatShading:THREE.FlatShading}),r=new THREE.Mesh(s,h);r.position.set(-35,25,0),r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(r);var d=new THREE.BoxGeometry(40,4,150,1,1,1),E=new THREE.MeshPhongMaterial({color:p.red,flatShading:THREE.FlatShading}),c=new THREE.Mesh(d,E),w=new THREE.Mesh(d,E);c.castShadow=!0,c.receiveShadow=!0,w.castShadow=!0,w.receiveShadow=!0,c.position.set(20,12,0),w.position.set(20,-3,0),this.mesh.add(c),this.mesh.add(w);var l=new THREE.BoxGeometry(3,15,20,1,1,1),m=new THREE.MeshPhongMaterial({color:p.white,transparent:!0,opacity:.3,shading:THREE.FlatShading}),v=new THREE.Mesh(l,m);v.position.set(5,27,0),v.castShadow=!0,v.receiveShadow=!0,this.mesh.add(v);var M=new THREE.BoxGeometry(20,10,10,1,1,1);M.vertices[4].y-=5,M.vertices[4].z+=5,M.vertices[5].y-=5,M.vertices[5].z-=5,M.vertices[6].y+=5,M.vertices[6].z+=5,M.vertices[7].y+=5,M.vertices[7].z-=5;var T=new THREE.MeshPhongMaterial({color:p.brown,flatShading:THREE.FlatShading});this.propeller=new THREE.Mesh(M,T),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;var H=new THREE.BoxGeometry(1,100,10,1,1,1),R=new THREE.BoxGeometry(1,10,100,1,1,1),y=new THREE.MeshPhongMaterial({color:p.brownDark,flatShading:THREE.FlatShading}),g=new THREE.Mesh(H,y);g.position.set(8,0,0),g.castShadow=!0,g.receiveShadow=!0;var S=new THREE.Mesh(R,y);S.position.set(8,0,0),S.castShadow=!0,S.receiveShadow=!0,this.propeller.add(g,S),this.propeller.position.set(50,0,0),this.mesh.add(this.propeller);var u=new THREE.BoxGeometry(30,15,10,1,1,1),f=new THREE.MeshPhongMaterial({color:p.white,flatShading:THREE.FlatShading}),x=new THREE.Mesh(u,f);x.position.set(25,-20,25),this.mesh.add(x);var z=new THREE.BoxGeometry(24,24,4),P=new THREE.MeshPhongMaterial({color:p.brownDark,flatShading:THREE.FlatShading}),B=new THREE.Mesh(z,P);B.position.set(25,-28,25);var b=new THREE.BoxGeometry(10,10,6),G=new THREE.MeshPhongMaterial({color:p.brown,flatShading:THREE.FlatShading}),I=new THREE.Mesh(b,G);B.add(I),this.mesh.add(B);var F=x.clone();F.position.z=-x.position.z,this.mesh.add(F);var C=B.clone();C.position.z=-B.position.z,this.mesh.add(C);var D=B.clone();D.scale.set(.5,.5,.5),D.position.set(-35,-5,0),this.mesh.add(D);var O=new THREE.BoxGeometry(4,20,4);O.applyMatrix((new THREE.Matrix4).makeTranslation(0,10,0));var _=new THREE.MeshPhongMaterial({color:p.red,flatShading:THREE.FlatShading}),j=new THREE.Mesh(O,_);j.position.set(-35,-5,0),j.rotation.z=-.3,this.mesh.add(j)},k={x:0,y:0},L=-600;function W(){S=new F,S.mesh.position.y=L,e.add(S.mesh)}function J(){f=new B,f.mesh.position.y=L,e.add(f.mesh)}function N(){x=new b,x.mesh.position.y=L,x.mesh.rotation.z=-Math.PI/6,e.add(x.mesh)}function X(){u=new _,u.mesh.position.y=L,e.add(u.mesh)}function $(){P=new G,P.mesh.scale.set(1,1,.3),P.mesh.position.set(0,-30,-850),e.add(P.mesh)}function q(){z=new j,z.mesh.scale.set(.35,.35,.35),z.mesh.position.set(-40,110,-250),e.add(z.mesh)}function A(){var e=Y(k.y,-.75,.75,50,190),t=Y(k.x,-.75,.75,-100,-20);z.mesh.position.y+=.1*(e-z.mesh.position.y),z.mesh.position.x+=.1*(t-z.mesh.position.x),z.mesh.rotation.z=.0128*(e-z.mesh.position.y),z.mesh.rotation.x=.0064*(z.mesh.position.y-e),z.mesh.rotation.y=.0064*(z.mesh.position.x-t),z.propeller.rotation.x+=.3}function Y(e,t,a,n,o){var i=Math.max(Math.min(e,a),t),s=a-t,h=(i-t)/s,r=o-n,d=n+h*r;return d}function K(){f.mesh.rotation.z+=.005,x.mesh.rotation.z+=.001,S.mesh.rotation.z+=.003,u.mesh.rotation.z+=.005,A(),r.render(e,t),requestAnimationFrame(K)}function Q(e){var t=e.clientX/h*2-1,a=1-e.clientY/s*2;k={x:t,y:a}}function U(e){R(),g(),q(),N(),$(),J(),X(),W(),document.addEventListener("mousemove",Q,!1),K()}window.addEventListener("load",U,!1)},s={mounted:function(){i()}},h=s,r=(a("3e17"),a("2877")),d=Object(r["a"])(h,n,o,!1,null,"76c89295",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-55f7624e.744d5246.js.map