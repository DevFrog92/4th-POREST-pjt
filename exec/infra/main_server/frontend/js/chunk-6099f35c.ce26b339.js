(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6099f35c"],{2025:function(e,t,n){},"3e17":function(e,t,n){"use strict";n("2025")},eea0:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"count_cover"},[n("h1",{attrs:{id:"headline"}},[e._v("POREST")]),n("div",{attrs:{id:"countdown"}},[n("div",{staticClass:"times"},[n("li",[n("span",{attrs:{id:"days"}}),e._v("days")]),n("li",[n("span",{attrs:{id:"hours"}}),e._v("Hours")]),n("li",[n("span",{attrs:{id:"minutes"}}),e._v("Minutes")]),n("li",[n("span",{attrs:{id:"seconds"}}),e._v("Seconds")])])]),n("p",{staticClass:"title"},[e._v("COMMING SOON")]),n("div",{staticClass:"message"},[n("div",{attrs:{id:"content"}})])]),n("div",{staticClass:"plane_cover"},[n("div",{attrs:{id:"world"}})])])}],s=function(){var e,t,n,o,a,s,i,h,r,d,E,c,w=1e3,m=60*w,l=60*m,v=24*l,M="May 21, 2021 12:00:00",T=new Date(M).getTime(),H=setInterval((function(){var e=(new Date).getTime(),t=T-e;if(document.getElementById("days").innerText=Math.floor(t/v),document.getElementById("hours").innerText=Math.floor(t%v/l),document.getElementById("minutes").innerText=Math.floor(t%l/m),document.getElementById("seconds").innerText=Math.floor(t%m/w),t<0){var n=document.getElementById("headline"),o=document.getElementById("countdown"),a=document.getElementById("content");n.innerText="It's my birthday!",o.style.display="none",a.style.display="block",clearInterval(H)}}),0),p={red:15881030,yellow:15592231,white:14209233,brown:5845806,pink:16095342,brownDark:2300175,blue:6865856,green:4555336,purple:5577355,lightgreen:6460005};function R(){i=window.innerHeight,h=window.innerWidth,e=new THREE.Scene,e.fog=new THREE.Fog(16243114,100,950),o=h/i,n=60,a=1,s=1e4,t=new THREE.PerspectiveCamera(n,o,a,s),t.position.x=0,t.position.y=150,t.position.z=100,r=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),r.setSize(h,i),r.shadowMap.enabled=!0,d=document.getElementById("world"),d.appendChild(r.domElement),window.addEventListener("resize",y,!1)}function y(){i=window.innerHeight,h=window.innerWidth,r.setSize(h,i),t.aspect=h/i,t.updateProjectionMatrix()}function g(){E=new THREE.HemisphereLight(11184810,0,.9),c=new THREE.DirectionalLight(16777215,.9),c.position.set(0,350,350),c.castShadow=!0,c.shadow.camera.left=-650,c.shadow.camera.right=650,c.shadow.camera.top=650,c.shadow.camera.bottom=-650,c.shadow.camera.near=1,c.shadow.camera.far=1e3,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,e.add(E),e.add(c)}var u,S,f,x,z,P,B=function(){var e=new THREE.CylinderGeometry(600,600,1700,40,10);e.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var t=new THREE.MeshPhongMaterial({color:p.lightgreen,shading:THREE.FlatShading});this.mesh=new THREE.Mesh(e,t),this.mesh.receiveShadow=!0},b=function(){var e=new THREE.Object3D;this.mesh=e},G=function(){this.mesh=new THREE.Object3D;var e=new THREE.SphereGeometry(400,20,10),t=new THREE.MeshPhongMaterial({color:p.yellow,shading:THREE.FlatShading}),n=new THREE.Mesh(e,t);n.castShadow=!1,n.receiveShadow=!1,this.mesh.add(n)},I=function(){this.mesh=new THREE.Object3D;for(var e=new THREE.DodecahedronGeometry(20,0),t=new THREE.MeshPhongMaterial({color:p.white}),n=3+Math.floor(3*Math.random()),o=0;o<n;o++){var a=new THREE.Mesh(e,t);a.position.x=15*o,a.position.y=10*Math.random(),a.position.z=10*Math.random(),a.rotation.z=Math.random()*Math.PI*2,a.rotation.y=Math.random()*Math.PI*2;var s=.1+.9*Math.random();a.scale.set(s,s,s),this.mesh.add(a)}},F=function(){this.mesh=new THREE.Object3D,this.nClouds=25;for(var e=2*Math.PI/this.nClouds,t=0;t<this.nClouds;t++){var n=new I,o=e*t,a=800+200*Math.random();n.mesh.position.y=Math.sin(o)*a,n.mesh.position.x=Math.cos(o)*a,n.mesh.rotation.z=o+Math.PI/2,n.mesh.position.z=-400-400*Math.random();var s=1+2*Math.random();n.mesh.scale.set(s,s,s),this.mesh.add(n.mesh)}},C=function(){this.mesh=new THREE.Object3D;var e=new THREE.MeshPhongMaterial({color:p.green,shading:THREE.FlatShading}),t=new THREE.BoxGeometry(10,20,10),n=new THREE.MeshBasicMaterial({color:p.brown}),o=new THREE.Mesh(t,n);o.castShadow=!0,o.receiveShadow=!0,this.mesh.add(o);var a=new THREE.CylinderGeometry(1,36,36,4),s=new THREE.Mesh(a,e);s.castShadow=!0,s.receiveShadow=!0,s.position.y=20,this.mesh.add(s);var i=new THREE.CylinderGeometry(1,27,27,4),h=new THREE.Mesh(i,e);h.castShadow=!0,h.position.y=40,h.receiveShadow=!0,this.mesh.add(h);var r=new THREE.CylinderGeometry(1,18,18,4),d=new THREE.Mesh(r,e);d.castShadow=!0,d.position.y=55,d.receiveShadow=!0,this.mesh.add(d)},D=function(){this.mesh=new THREE.Object3D;var e=new THREE.BoxGeometry(5,50,5,1,1,1),t=new THREE.MeshPhongMaterial({color:p.green,shading:THREE.FlatShading}),n=new THREE.Mesh(e,t);n.castShadow=!1,n.receiveShadow=!0,this.mesh.add(n);var o=new THREE.BoxGeometry(10,10,10,1,1,1),a=new THREE.MeshPhongMaterial({color:p.yellow,shading:THREE.FlatShading}),s=new THREE.Mesh(o,a);s.castShadow=!1,s.receiveShadow=!0;var i=O[Math.floor(3*Math.random())],h=new THREE.BoxGeometry(15,20,5,1,1,1),r=new THREE.MeshBasicMaterial({color:i});h.vertices[5].y-=4,h.vertices[4].y-=4,h.vertices[7].y+=4,h.vertices[6].y+=4,h.translate(12.5,0,3);for(var d=[],E=0;E<4;E++)d[E]=new THREE.Mesh(h,r),d[E].rotation.z=E*Math.PI/2,d[E].castShadow=!0,d[E].receiveShadow=!0;s.add(d[0],d[1],d[2],d[3]),s.position.y=25,s.position.z=3,this.mesh.add(s)},O=[p.red,p.yellow,p.blue],_=function(){this.mesh=new THREE.Object3D,this.nTrees=300;for(var e=2*Math.PI/this.nTrees,t=0;t<this.nTrees;t++){var n=new C,o=e*t,a=605;n.mesh.position.y=Math.sin(o)*a,n.mesh.position.x=Math.cos(o)*a,n.mesh.rotation.z=o+Math.PI/2*3,n.mesh.position.z=0-600*Math.random();var s=.3+.75*Math.random();n.mesh.scale.set(s,s,s),this.mesh.add(n.mesh)}this.nFlowers=350;for(e=2*Math.PI/this.nFlowers,t=0;t<this.nFlowers;t++){var i=new D;o=e*t,a=605;i.mesh.position.y=Math.sin(o)*a,i.mesh.position.x=Math.cos(o)*a,i.mesh.rotation.z=o+Math.PI/2*3,i.mesh.position.z=0-600*Math.random();s=.1+.3*Math.random();i.mesh.scale.set(s,s,s),this.mesh.add(i.mesh)}},j=function(){this.mesh=new THREE.Object3D;var e=new THREE.BoxGeometry(80,50,50,1,1,1),t=new THREE.MeshPhongMaterial({color:p.red,shading:THREE.FlatShading});e.vertices[4].y-=10,e.vertices[4].z+=20,e.vertices[5].y-=10,e.vertices[5].z-=20,e.vertices[6].y+=30,e.vertices[6].z+=20,e.vertices[7].y+=30,e.vertices[7].z-=20;var n=new THREE.Mesh(e,t);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);var o=new THREE.BoxGeometry(20,50,50,1,1,1),a=new THREE.MeshPhongMaterial({color:p.white,shading:THREE.FlatShading}),s=new THREE.Mesh(o,a);s.position.x=40,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);var i=new THREE.BoxGeometry(15,20,5,1,1,1),h=new THREE.MeshPhongMaterial({color:p.red,shading:THREE.FlatShading}),r=new THREE.Mesh(i,h);r.position.set(-35,25,0),r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(r);var d=new THREE.BoxGeometry(40,4,150,1,1,1),E=new THREE.MeshPhongMaterial({color:p.red,shading:THREE.FlatShading}),c=new THREE.Mesh(d,E),w=new THREE.Mesh(d,E);c.castShadow=!0,c.receiveShadow=!0,w.castShadow=!0,w.receiveShadow=!0,c.position.set(20,12,0),w.position.set(20,-3,0),this.mesh.add(c),this.mesh.add(w);var m=new THREE.BoxGeometry(3,15,20,1,1,1),l=new THREE.MeshPhongMaterial({color:p.white,transparent:!0,opacity:.3,shading:THREE.FlatShading}),v=new THREE.Mesh(m,l);v.position.set(5,27,0),v.castShadow=!0,v.receiveShadow=!0,this.mesh.add(v);var M=new THREE.BoxGeometry(20,10,10,1,1,1);M.vertices[4].y-=5,M.vertices[4].z+=5,M.vertices[5].y-=5,M.vertices[5].z-=5,M.vertices[6].y+=5,M.vertices[6].z+=5,M.vertices[7].y+=5,M.vertices[7].z-=5;var T=new THREE.MeshPhongMaterial({color:p.brown,shading:THREE.FlatShading});this.propeller=new THREE.Mesh(M,T),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;var H=new THREE.BoxGeometry(1,100,10,1,1,1),R=new THREE.BoxGeometry(1,10,100,1,1,1),y=new THREE.MeshPhongMaterial({color:p.brownDark,shading:THREE.FlatShading}),g=new THREE.Mesh(H,y);g.position.set(8,0,0),g.castShadow=!0,g.receiveShadow=!0;var u=new THREE.Mesh(R,y);u.position.set(8,0,0),u.castShadow=!0,u.receiveShadow=!0,this.propeller.add(g,u),this.propeller.position.set(50,0,0),this.mesh.add(this.propeller);var S=new THREE.BoxGeometry(30,15,10,1,1,1),f=new THREE.MeshPhongMaterial({color:p.white,shading:THREE.FlatShading}),x=new THREE.Mesh(S,f);x.position.set(25,-20,25),this.mesh.add(x);var z=new THREE.BoxGeometry(24,24,4),P=new THREE.MeshPhongMaterial({color:p.brownDark,shading:THREE.FlatShading}),B=new THREE.Mesh(z,P);B.position.set(25,-28,25);var b=new THREE.BoxGeometry(10,10,6),G=new THREE.MeshPhongMaterial({color:p.brown,shading:THREE.FlatShading}),I=new THREE.Mesh(b,G);B.add(I),this.mesh.add(B);var F=x.clone();F.position.z=-x.position.z,this.mesh.add(F);var C=B.clone();C.position.z=-B.position.z,this.mesh.add(C);var D=B.clone();D.scale.set(.5,.5,.5),D.position.set(-35,-5,0),this.mesh.add(D);var O=new THREE.BoxGeometry(4,20,4);O.applyMatrix((new THREE.Matrix4).makeTranslation(0,10,0));var _=new THREE.MeshPhongMaterial({color:p.red,shading:THREE.FlatShading}),j=new THREE.Mesh(O,_);j.position.set(-35,-5,0),j.rotation.z=-.3,this.mesh.add(j)},k={x:0,y:0},L=-600;function W(){u=new F,u.mesh.position.y=L,e.add(u.mesh)}function J(){f=new B,f.mesh.position.y=L,e.add(f.mesh)}function N(){x=new b,x.mesh.position.y=L,x.mesh.rotation.z=-Math.PI/6,e.add(x.mesh)}function X(){S=new _,S.mesh.position.y=L,e.add(S.mesh)}function $(){P=new G,P.mesh.scale.set(1,1,.3),P.mesh.position.set(0,-30,-850),e.add(P.mesh)}function q(){z=new j,z.mesh.scale.set(.35,.35,.35),z.mesh.position.set(-40,110,-250),e.add(z.mesh)}function A(){var e=Y(k.y,-.75,.75,50,190),t=Y(k.x,-.75,.75,-100,-20);z.mesh.position.y+=.1*(e-z.mesh.position.y),z.mesh.position.x+=.1*(t-z.mesh.position.x),z.mesh.rotation.z=.0128*(e-z.mesh.position.y),z.mesh.rotation.x=.0064*(z.mesh.position.y-e),z.mesh.rotation.y=.0064*(z.mesh.position.x-t),z.propeller.rotation.x+=.3}function Y(e,t,n,o,a){var s=Math.max(Math.min(e,n),t),i=n-t,h=(s-t)/i,r=a-o,d=o+h*r;return d}function K(){f.mesh.rotation.z+=.005,x.mesh.rotation.z+=.001,u.mesh.rotation.z+=.003,S.mesh.rotation.z+=.005,A(),r.render(e,t),requestAnimationFrame(K)}function Q(e){var t=e.clientX/h*2-1,n=1-e.clientY/i*2;k={x:t,y:n}}function U(e){R(),g(),q(),N(),$(),J(),X(),W(),document.addEventListener("mousemove",Q,!1),K()}window.addEventListener("load",U,!1)},i={mounted:function(){s()}},h=i,r=(n("3e17"),n("2877")),d=Object(r["a"])(h,o,a,!1,null,"76c89295",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6099f35c.ce26b339.js.map