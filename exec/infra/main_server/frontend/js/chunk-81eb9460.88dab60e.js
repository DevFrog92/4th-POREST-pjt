(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81eb9460"],{"0e6f":function(e,t,n){"use strict";n("3901")},3901:function(e,t,n){},"7c36":function(e,t,n){"use strict";var i,a,r,o,s,c,d,u,l,p,v,f;n.d(t,"a",(function(){return m})),l=0,p=1e-5,v=window.innerWidth,f=window.innerHeight;var m=function(){w(),h(),window.addEventListener("resize",E,!1)};function w(){a=new THREE.Scene,a.fog=new THREE.FogExp2("#222",.001),i=new THREE.PerspectiveCamera(75,v/f,1,1e3),i.position.z=0,i.position.y=1,i.rotation.x=Math.PI/2;var e=(new THREE.TextureLoader).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1823170/star-sprite.png");c=new THREE.PointsMaterial({color:16777215,size:.9,map:e,transparent:!0,blending:THREE.AdditiveBlending}),d=35e3,o=new THREE.Geometry;for(var t=0;t<d;t++){var n=2e3*Math.random()-1e3,l=1e3*Math.random()-1e3,p=2e3*Math.random()-1e3;s=new THREE.Vector3(n,l,p),s.velocity=new THREE.Vector3(0,Math.random(),0),o.vertices.push(s)}u=new THREE.Points(o,c),u.sortParticles=!0,a.add(u),r=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),r.setSize(v,f),document.getElementById("canvas").appendChild(r.domElement)}function h(){requestAnimationFrame(h),a.rotation.y+=l;var e=d;while(e--){var t=o.vertices[e];t.y>1e3&&(t.y=-1e3,t.velocity.y=Math.random()),t.velocity.y+=Math.random()*p,t.add(t.velocity)}u.geometry.verticesNeedUpdate=!0,y()}function y(){i.lookAt(a.position),r.render(a,i)}function E(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}},db7d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro-wrapper"},[n("div",{staticClass:"logo"}),n("div",{staticClass:"magic"},[n("div",{staticClass:"random-ball-wrapper"},[n("div",{staticClass:"random_ball"})]),n("div",{staticClass:"big"},[n("div"),n("div"),n("div")])]),n("div",{staticClass:"letter"},[n("div",{staticClass:"type"}),n("div",{staticClass:"text_intro"},[e._v("당신의 마음 속 이야기, POREST 세상 속에서 들려주세요.")])]),n("div",{staticClass:"skip-btn"},[e._v("넘어가기")]),n("div",{attrs:{id:"canvas"}})])}],r=n("53f2"),o=n("7c36"),s=n("f1ee"),c={name:"Intropage",data:function(){return{}},components:{Star:r["a"]},mounted:function(){Object(o["a"])(),Object(s["a"])()},methods:{}},d=c,u=(n("0e6f"),n("2877")),l=Object(u["a"])(d,i,a,!1,null,"85683c68",null);t["default"]=l.exports},f1ee:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("1da1"),a=(n("96cf"),n("fb6a"),n("a18c")),r=function(){var e=0,t="당신의 오늘 하루는 무수히 빛나는 별보다 더 빛나고 아름답습니다.",n="",r="",o=document.querySelector(".type"),s=document.querySelector(".random-ball-wrapper"),c=document.querySelector(".big"),d=document.querySelector(".magic"),u=document.querySelector(".text_intro");function l(){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e===t.length&&setTimeout((function(){d.classList.add("show"),u.classList.add("show"),o.classList.add("hide")}),500),n=t,r=n.slice(0,++e),o.textContent=r,i.next=6,setTimeout(l,160);case 6:case"end":return i.stop()}}),i)}))),p.apply(this,arguments)}s.addEventListener("click",(function(){o.style.opacity="0",s.classList.add("pop-ball"),u.classList.remove("show"),c.classList.add("show"),setTimeout((function(){a["a"].push({name:"MainIsland"})}),3500)})),setTimeout((function(){l()}),200)}},fb6a:function(e,t,n){"use strict";var i=n("23e7"),a=n("861d"),r=n("e8b5"),o=n("23cb"),s=n("50c4"),c=n("fc6a"),d=n("8418"),u=n("b622"),l=n("1dde"),p=l("slice"),v=u("species"),f=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,i,u,l=c(this),p=s(l.length),w=o(e,p),h=o(void 0===t?p:t,p);if(r(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return f.call(l,w,h);for(i=new(void 0===n?Array:n)(m(h-w,0)),u=0;w<h;w++,u++)w in l&&d(i,u,l[w]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-81eb9460.88dab60e.js.map