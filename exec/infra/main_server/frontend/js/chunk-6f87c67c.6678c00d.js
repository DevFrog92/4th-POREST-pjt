(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f87c67c"],{"18f8":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"snackbar"}},[t.$store.state.snackbarStatus?a("div",{staticClass:"snackbar",class:t.classes},[a("div",{staticClass:"snackbar__wrap"},[a("div",{staticClass:"snackbar__body"},[t._t("default")],2)])]):t._e()])},n=[];function i(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}a("a9e3");var o={name:"Snackbar",props:{timeout:{type:Number,default:4e3},infinity:{type:Boolean,default:!1},position:{type:String,default:"top-center"}},data:function(){return{timer:null}},watch:{"$store.state.snackbarStatus":function(){this.setTimer()}},computed:{classes:function(){return i({},"snackbar--".concat(this.position),!0)}},methods:{setTimer:function(){var t=this;this.timer&&clearTimeout(this.timer),this.infinity||(this.timer=setTimeout((function(){t.$store.dispatch("saveSnackbarStatus",!1)}),this.timeout))}},mounted:function(){this.setTimer()}},r=o,c=(a("ce24"),a("2877")),l=Object(c["a"])(r,e,n,!1,null,null,null);s["a"]=l.exports},"3ea7":function(t,s,a){},"497b":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])])])},n=[],i={},o=i,r=(a("4d75"),a("2877")),c=Object(r["a"])(o,e,n,!1,null,"31be62d8",null);s["a"]=c.exports},"4d75":function(t,s,a){"use strict";a("3ea7")},"4d7a":function(t,s,a){"use strict";a("acc9")},5464:function(t,s,a){"use strict";function e(t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(String(t).toLowerCase())}function n(t){var s=/^[\S+]{8,20}$/;return s.test(t)}a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return n}))},"7c36":function(t,s,a){"use strict";var e,n,i,o,r,c,l,p,u,d,m,v;a.d(s,"a",(function(){return w})),u=0,d=1e-5,m=window.innerWidth,v=window.innerHeight;var w=function(){g(),f(),window.addEventListener("resize",b,!1)};function g(){n=new THREE.Scene,n.fog=new THREE.FogExp2("#222",.001),e=new THREE.PerspectiveCamera(75,m/v,1,1e3),e.position.z=0,e.position.y=1,e.rotation.x=Math.PI/2;var t=(new THREE.TextureLoader).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1823170/star-sprite.png");c=new THREE.PointsMaterial({color:16777215,size:.9,map:t,transparent:!0,blending:THREE.AdditiveBlending}),l=35e3,o=new THREE.Geometry;for(var s=0;s<l;s++){var a=2e3*Math.random()-1e3,u=1e3*Math.random()-1e3,d=2e3*Math.random()-1e3;r=new THREE.Vector3(a,u,d),r.velocity=new THREE.Vector3(0,Math.random(),0),o.vertices.push(r)}p=new THREE.Points(o,c),p.sortParticles=!0,n.add(p),i=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),i.setSize(m,v),document.getElementById("canvas").appendChild(i.domElement)}function f(){requestAnimationFrame(f),n.rotation.y+=u;var t=l;while(t--){var s=o.vertices[t];s.y>1e3&&(s.y=-1e3,s.velocity.y=Math.random()),s.velocity.y+=Math.random()*d,s.add(s.velocity)}p.geometry.verticesNeedUpdate=!0,h()}function h(){e.lookAt(n.position),i.render(n,e)}function b(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}},"80cb":function(t,s,a){},9905:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home-wrapper"},[a("section",[a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("p",{staticClass:"welcome"},[t._v("Welcome to POREST :)")]),a("p",{staticClass:"title"},[t._v(" 이메일 ")]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t.isValidEmail?t._e():a("p",{staticClass:"error_message"},[t._v(" 잘못된 이메일 양식입니다. ")]),a("p",{staticClass:"title"},[t._v("비밀번호")]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"8~20자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),!t.isValidPwd&&t.password.length<8?a("p",{staticClass:"error_message"},[t._v(" 8자 이상의 비밀번호를 입력해주세요. ")]):!t.isValidPwd&&t.password.length>20?a("p",{staticClass:"error_message"},[t._v(" 20자 이하의 비밀번호를 입력해주세요. ")]):t._e(),a("button",{staticClass:"button",on:{click:t.submitForm}},[t._v("Login")]),a("div",{staticClass:"go-to-find-password-container"},[a("span",{staticClass:"go-to-find-password",on:{click:t.goToFindPassword}},[t._v("비밀번호 찾기")])]),a("div",{staticClass:"go-to-signup-container"},[a("span",{staticClass:"go-to-signup",on:{click:t.goToSignup}},[t._v("회원가입")])])])])])])]),a("div",{staticClass:"white-show"}),a("div",{attrs:{id:"canvas"}}),a("div",[a("snackbar",{attrs:{infinity:t.infinity,position:t.position}},[t._v(" "+t._s(t.snackbarText)+" "),a("button",{staticClass:"close-btn",on:{click:function(s){t.$store.state.snackbarStatus=!1}}},[t._v(" close ")])])],1)])},n=[],i=a("1da1"),o=(a("96cf"),a("5464")),r=a("7c36"),c=a("260b"),l=(a("ea7b"),a("497b")),p=a("18f8"),u={components:{AuthForm:l["a"],Snackbar:p["a"]},data:function(){return{email:"",nickname:"",password:"",position:"top-center",infinity:!1,snackbarText:""}},computed:{isValidEmail:function(){return""===this.email||Object(o["a"])(this.email)},isValidPwd:function(){return""===this.password||Object(o["b"])(this.password)},checkForm:function(){return Object(o["a"])(this.email)&&Object(o["b"])(this.password)}},methods:{goToSignup:function(){this.$router.push({name:"Signup"})},goToFindPassword:function(){this.$router.push({name:"FindPassword"})},submitForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,t.$store.dispatch("LOGIN",{email:t.email,password:t.password});case 3:t.fireBaseLogin(),t.$emit("controlMusic","play"),t.$emit("introPlay"),t.$router.push({name:"Intro"}),s.next=13;break;case 9:s.prev=9,s.t0=s["catch"](0),t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText="이메일이나 비밀번호를 다시 확인해주세요.";case 13:case"end":return s.stop()}}),s,null,[[0,9]])})))()},fireBaseLogin:function(){var t=this;c["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){}),(function(s){return t.error=s.message}))}},mounted:function(){Object(r["a"])()},created:function(){}},d=u,m=(a("4d7a"),a("2877")),v=Object(m["a"])(d,e,n,!1,null,"de94d384",null);s["default"]=v.exports},acc9:function(t,s,a){},ce24:function(t,s,a){"use strict";a("80cb")}}]);
//# sourceMappingURL=chunk-6f87c67c.6678c00d.js.map