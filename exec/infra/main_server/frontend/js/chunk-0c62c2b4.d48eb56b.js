(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c62c2b4"],{"3ea7":function(t,s,e){},"497b":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"paper-plane"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[e("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[e("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[e("g",[e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),e("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),e("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),e("div",{staticClass:"paper-plane"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[e("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[e("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[e("g",[e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),e("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),e("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),e("div",{staticClass:"paper-plane"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[e("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[e("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[e("g",[e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),e("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),e("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),e("div",{staticClass:"paper-plane"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[e("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[e("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[e("g",[e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),e("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),e("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),e("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])])])},n=[],i={},o=i,r=(e("4d75"),e("2877")),c=Object(r["a"])(o,a,n,!1,null,"31be62d8",null);s["a"]=c.exports},"4d75":function(t,s,e){"use strict";e("3ea7")},5464:function(t,s,e){"use strict";function a(t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(String(t).toLowerCase())}function n(t){var s=/^[A-Za-z0-9+]{8,20}$/;return s.test(t)}e.d(s,"a",(function(){return a})),e.d(s,"b",(function(){return n}))},"7c36":function(t,s,e){"use strict";var a,n,i,o,r,c,l,d,p,u,m,w;e.d(s,"a",(function(){return g})),p=0,u=1e-5,m=window.innerWidth,w=window.innerHeight;var g=function(){v(),f(),window.addEventListener("resize",C,!1)};function v(){n=new THREE.Scene,n.fog=new THREE.FogExp2("#222",.001),a=new THREE.PerspectiveCamera(75,m/w,1,1e3),a.position.z=0,a.position.y=1,a.rotation.x=Math.PI/2;var t=(new THREE.TextureLoader).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1823170/star-sprite.png");c=new THREE.PointsMaterial({color:16777215,size:.9,map:t,transparent:!0,blending:THREE.AdditiveBlending}),l=35e3,o=new THREE.Geometry;for(var s=0;s<l;s++){var e=2e3*Math.random()-1e3,p=1e3*Math.random()-1e3,u=2e3*Math.random()-1e3;r=new THREE.Vector3(e,p,u),r.velocity=new THREE.Vector3(0,Math.random(),0),o.vertices.push(r)}d=new THREE.Points(o,c),d.sortParticles=!0,n.add(d),i=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),i.setSize(m,w),document.getElementById("canvas").appendChild(i.domElement)}function f(){requestAnimationFrame(f),n.rotation.y+=p;var t=l;while(t--){var s=o.vertices[t];s.y>1e3&&(s.y=-1e3,s.velocity.y=Math.random()),s.velocity.y+=Math.random()*u,s.add(s.velocity)}d.geometry.verticesNeedUpdate=!0,h()}function h(){a.lookAt(n.position),i.render(n,a)}function C(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}},9905:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home-wrapper"},[t._m(0),e("section",[e("div",{staticClass:"box"},[e("div",{staticClass:"container"},[e("div",{staticClass:"form"},[e("form",{on:{submit:function(t){t.preventDefault()}}},[e("p",{staticClass:"welcome"},[t._v("Welcome to POREST :)")]),e("p",{staticClass:"title"},[t._v(" Email ")]),e("div",{staticClass:"inputBox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t.isValidEmail?t._e():e("p",{staticClass:"error_message"},[t._v(" 잘못된 이메일 양식입니다. ")]),e("p",{staticClass:"title"},[t._v("비밀번호")]),e("div",{staticClass:"inputBox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"8~20자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),!t.isValidPwd&&t.password.length<8?e("p",{staticClass:"error_message"},[t._v("8자 이상의 비밀번호를 입력해주세요.")]):!t.isValidPwd&&t.password.length>20?e("p",{staticClass:"error_message"},[t._v(" 20자 이하의 비밀번호를 입력해주세요. ")]):t._e(),e("button",{staticClass:"button",on:{click:t.submitForm}},[t._v("Login")]),e("div",{staticClass:"go-to-find-password-container"},[e("span",{staticClass:"go-to-find-password",on:{click:t.goToFindPassword}},[t._v("비밀번호 찾기")])]),e("div",{staticClass:"go-to-signup-container"},[e("span",{staticClass:"go-to-signup",on:{click:t.goToSignup}},[t._v("회원가입")])])])])])])]),e("div",{staticClass:"white-show"}),e("div",{attrs:{id:"canvas"}})])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"letter"},[e("div",{staticClass:"type"})])}],i=e("1da1"),o=(e("96cf"),e("5464")),r=e("7c36"),c=e("260b"),l=(e("ea7b"),e("497b")),d=e("f1ee"),p={components:{AuthForm:l["a"]},data:function(){return{email:"",nickname:"",password:""}},computed:{isValidEmail:function(){return""===this.email||Object(o["a"])(this.email)},isValidPwd:function(){return""===this.password||Object(o["b"])(this.password)},checkForm:function(){return Object(o["a"])(this.email)&&Object(o["b"])(this.password)}},methods:{goToSignup:function(){this.$router.push({name:"Signup"})},goToFindPassword:function(){this.$router.push({name:"FindPassword"})},submitForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log("login"),s.prev=1,s.next=4,t.$store.dispatch("LOGIN",{email:t.email,password:t.password});case 4:console.log("이동"),t.fireBaseLogin(),setTimeout((function(){var t=document.querySelector(".white-show");t.classList.add("active")}),1e3),t.$router.push({name:"Intro"}),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](1),alert("이메일이나 비밀번호를 다시 확인해주세요.");case 13:case"end":return s.stop()}}),s,null,[[1,10]])})))()},fireBaseLogin:function(){var t=this;console.log("login"),c["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){console.log("response status",t)}),(function(s){return t.error=s.message}))}},mounted:function(){Object(r["a"])(),Object(d["a"])()}},u=p,m=(e("c73f"),e("2877")),w=Object(m["a"])(u,a,n,!1,null,"4bfb93c6",null);s["default"]=w.exports},ade5:function(t,s,e){},c73f:function(t,s,e){"use strict";e("ade5")},f1ee:function(t,s,e){"use strict";e.d(s,"a",(function(){return i}));var a=e("1da1"),n=(e("96cf"),e("fb6a"),e("a18c")),i=function(){var t=0,s="당신의 오늘 하루는 무수히 빛나는 별보다 더 빛나고 아름답습니다.",e="",i="",o=document.querySelector(".type"),r=document.querySelector(".random-ball-wrapper"),c=document.querySelector(".big"),l=document.querySelector(".magic"),d=document.querySelector(".text_intro");function p(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t===s.length&&setTimeout((function(){l.classList.add("show"),d.classList.add("show"),o.classList.add("hide")}),500),e=s,i=e.slice(0,++t),o.textContent=i,a.next=6,setTimeout(p,160);case 6:case"end":return a.stop()}}),a)}))),u.apply(this,arguments)}r.addEventListener("click",(function(){o.style.opacity="0",r.classList.add("pop-ball"),d.classList.remove("show"),c.classList.add("show"),setTimeout((function(){n["a"].push({name:"MainIsland"})}),3500)})),setTimeout((function(){p()}),200)}},fb6a:function(t,s,e){"use strict";var a=e("23e7"),n=e("861d"),i=e("e8b5"),o=e("23cb"),r=e("50c4"),c=e("fc6a"),l=e("8418"),d=e("b622"),p=e("1dde"),u=p("slice"),m=d("species"),w=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!u},{slice:function(t,s){var e,a,d,p=c(this),u=r(p.length),v=o(t,u),f=o(void 0===s?u:s,u);if(i(p)&&(e=p.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[m],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return w.call(p,v,f);for(a=new(void 0===e?Array:e)(g(f-v,0)),d=0;v<f;v++,d++)v in p&&l(a,d,p[v]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-0c62c2b4.d48eb56b.js.map