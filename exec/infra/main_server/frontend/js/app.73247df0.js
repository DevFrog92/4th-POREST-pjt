(function(e){function n(n){for(var o,c,a=n[0],i=n[1],d=n[2],s=0,f=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,c=1;c<t.length;c++){var a=t[c];0!==r[a]&&(o=!1)}o&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},c={app:0},r={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-12247302":"24f2ca63","chunk-1a59980c":"2b209871","chunk-1d3e4be8":"e50a0b24","chunk-2054174d":"d1ccae8e","chunk-2d0bd52d":"c46d5681","chunk-2d0c76f1":"89bf6bd4","chunk-2d0cc628":"edd5f06e","chunk-2d0cfcd5":"1e2128e6","chunk-2d0e17a2":"0de7271b","chunk-4542088a":"5d32b2eb","chunk-4d425920":"b201c413","chunk-576ac2d2":"498c7c6e","chunk-6099f35c":"4185d040","chunk-dfcfcd0a":"ce3a535d"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-12247302":1,"chunk-2054174d":1,"chunk-4d425920":1,"chunk-576ac2d2":1,"chunk-6099f35c":1,"chunk-dfcfcd0a":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-12247302":"868b9f3e","chunk-1a59980c":"31d6cfe0","chunk-1d3e4be8":"31d6cfe0","chunk-2054174d":"645fb9a2","chunk-2d0bd52d":"31d6cfe0","chunk-2d0c76f1":"31d6cfe0","chunk-2d0cc628":"31d6cfe0","chunk-2d0cfcd5":"31d6cfe0","chunk-2d0e17a2":"31d6cfe0","chunk-4542088a":"31d6cfe0","chunk-4d425920":"a13bb229","chunk-576ac2d2":"d3c2148e","chunk-6099f35c":"07fc196e","chunk-dfcfcd0a":"cc7b4ffe"}[e]+".css",r=i.p+o,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===r))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){d=f[a],s=d.getAttribute("data-href");if(s===o||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete c[e],l.parentNode.removeChild(l),t(u)},l.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var f=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"17e1":function(e,n,t){"use strict";var o=t("260b"),c=(t("e71f"),{apiKey:"AIzaSyCY-UrWAhIekYvrVfrdMLpX9hXuStFDG6o",authDomain:"frontend-69a53.firebaseapp.com",projectId:"frontend-69a53",storageBucket:"frontend-69a53.appspot.com",messagingSenderId:"566533900429",appId:"1:566533900429:web:1f6d6c09f2461d8a09fac4s"}),r=o["a"].initializeApp(c);n["a"]=r.firestore()},4557:function(e,n,t){"use strict";t("95f1")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{user:e.user}})],1)},r=[],u=(t("17e1"),t("260b")),a=(t("ea7b"),{name:"App",data:function(){return{user:null,rooms:[]}},methods:{logout:function(){var e=this;u["a"].auth().signOut().then((function(){console.log("logout"),e.user=null,e.$router.push("/login")}))}},mounted:function(){var e=this;console.log("process","AIzaSyCY-UrWAhIekYvrVfrdMLpX9hXuStFDG6o"),u["a"].auth().onAuthStateChanged((function(n){n&&(e.user=n,e.$store.dispatch("LOGIN",{userData:{},firebaseData:e.user}))}))}}),i=a,d=(t("4557"),t("2877")),s=Object(d["a"])(i,c,r,!1,null,null,null),f=s.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));o["a"].use(l["a"]);var h=[{path:"/",redirect:"/commingsoon"},{path:"/main",name:"Main",component:function(){return t.e("chunk-2d0cfcd5").then(t.bind(null,"64ef"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-dfcfcd0a").then(t.bind(null,"9905"))}},{path:"/signup",name:"Signup",component:function(){return t.e("chunk-4d425920").then(t.bind(null,"ce61"))}},{path:"/test",name:"Test",component:function(){return t.e("chunk-2054174d").then(t.bind(null,"65d4"))}},{path:"/auth",name:"Auth",component:function(){return t.e("chunk-2d0e17a2").then(t.bind(null,"7b34"))}},{path:"/mailbox",name:"Mailbox",component:function(){return t.e("chunk-2d0c76f1").then(t.bind(null,"5132"))}},{path:"/mailbox/letters",name:"WriteLetter",component:function(){return t.e("chunk-2d0bd52d").then(t.bind(null,"2c06"))}},{path:"/mailbox/my-mailbox",name:"MyMailbox",component:function(){return t.e("chunk-12247302").then(t.bind(null,"ea5f"))}},{path:"/mailbox/my-mailbox/letter-detail",name:"LetterDetail",component:function(){return t.e("chunk-2d0cc628").then(t.bind(null,"4e67"))}},{path:"/home",name:"Home",component:function(){return t.e("chunk-576ac2d2").then(t.bind(null,"f924"))}},{path:"/rooms",name:"RoomsPage",component:function(){return t.e("chunk-4542088a").then(t.bind(null,"a2da"))}},{path:"/checkin/:hostID/:roomID",name:"CheckIn",component:function(){return t.e("chunk-1a59980c").then(t.bind(null,"c5a7"))}},{path:"/chat/:hostID/:roomID",name:"Chat",component:function(){return t.e("chunk-1d3e4be8").then(t.bind(null,"794f"))}},{path:"/commingsoon",name:"Commingsoon",component:function(){return t.e("chunk-6099f35c").then(t.bind(null,"eea0"))}}],m=new l["a"]({mode:"history",base:"/",routes:h}),p=m,k=t("2f62");t("ac1f"),t("5319");function b(e){document.cookie="login_id=".concat(e)}function g(e){document.cookie="login_uid=".concat(e)}function v(e){document.cookie="login_username=".concat(e)}function y(e){document.cookie="login_email=".concat(e)}function w(e){document.cookie="login_token=".concat(e)}function _(e){document.cookie="login_img=".concat(e)}function $(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function I(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_uid\s*=\s*([^;]*).*$)|^.*$/,"$1")}function O(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_username\s*=\s*([^;]*).*$)|^.*$/,"$1")}function x(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function S(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_img\s*=\s*([^;]*).*$)|^.*$/,"$1")}function j(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_token\s*=\s*([^;]*).*$)|^.*$/,"$1")}var U={id:$()||"",uid:I()||"",email:x()||"",username:O()||"",token:j()?"Token ".concat(j()):"",profileImg:S()||""},A=t("94d5"),D=t.n(A),L={setUserId:function(e,n){e.id=n},setUserUid:function(e,n){e.uid=n},setUsername:function(e,n){e.username=n},setUserEmail:function(e,n){e.email=n},setToken:function(e,n){e.token="Token ".concat(n)},setImg:function(e,n){e.profileImg=n}},T=t("1da1"),C=(t("96cf"),{LOGIN:function(e,n){return Object(T["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.commit,console.log("dispatch",n),o("setUserUid",n.firebaseData.uid),g(n.firebaseData.uid);case 4:case"end":return t.stop()}}),t)})))()},LOGOUT:function(e){return Object(T["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,t("setUserId",""),t("setUsername",""),t("setUserEmail",""),t("setToken",""),t("setUserLocation",""),t("setImg",""),b(""),v(""),g(""),y(""),w(""),_("");case 13:case"end":return n.stop()}}),n)})))()}});o["a"].use(k["a"]);var E=new k["a"].Store({state:U,getters:D.a,mutations:L,actions:C,modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:p,store:E,render:function(e){return e(f)}}).$mount("#app")},"94d5":function(e,n){},"95f1":function(e,n,t){}});
//# sourceMappingURL=app.73247df0.js.map