(function(e){function n(n){for(var c,r,u=n[0],i=n[1],f=n[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09655e21":"a7822641","chunk-09a8d904":"a417f3f0","chunk-1f46150e":"09287935","chunk-26347e98":"a3a5d13a","chunk-096196c9":"80b1687b","chunk-2aaafce6":"acfc390a","chunk-fe849680":"24d3851b","chunk-284c59b5":"1f6aa27e","chunk-2d0ba4c9":"fd77900c","chunk-2d0c76f1":"2eda9b67","chunk-2d0cfcd5":"806f3fd9","chunk-339a19a3":"51d698fc","chunk-343b74a6":"b967c625","chunk-385749fb":"18937288","chunk-3f127a9a":"adf61a27","chunk-4c60840a":"85f29ba9","chunk-5384c96e":"a429570d","chunk-5683ef42":"372927f5","chunk-5b5e1cf4":"8e0112bf","chunk-5c535ecc":"315122e8","chunk-6099f35c":"be8dc62a","chunk-61670627":"29fc9dfd","chunk-62e04e57":"a5a892f4","chunk-764cbc65":"d08ddce8","chunk-97de0c14":"5b34be32","chunk-efcdcd6a":"978aeb3c"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-09655e21":1,"chunk-09a8d904":1,"chunk-1f46150e":1,"chunk-26347e98":1,"chunk-096196c9":1,"chunk-2aaafce6":1,"chunk-fe849680":1,"chunk-284c59b5":1,"chunk-339a19a3":1,"chunk-343b74a6":1,"chunk-385749fb":1,"chunk-3f127a9a":1,"chunk-4c60840a":1,"chunk-5384c96e":1,"chunk-5683ef42":1,"chunk-5b5e1cf4":1,"chunk-5c535ecc":1,"chunk-6099f35c":1,"chunk-61670627":1,"chunk-62e04e57":1,"chunk-764cbc65":1,"chunk-97de0c14":1,"chunk-efcdcd6a":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-09655e21":"a0bb8002","chunk-09a8d904":"a488aa89","chunk-1f46150e":"f88f60f2","chunk-26347e98":"1bfd45a9","chunk-096196c9":"01695bdf","chunk-2aaafce6":"1aec22db","chunk-fe849680":"75450c28","chunk-284c59b5":"3bdae0cf","chunk-2d0ba4c9":"31d6cfe0","chunk-2d0c76f1":"31d6cfe0","chunk-2d0cfcd5":"31d6cfe0","chunk-339a19a3":"1c7218c0","chunk-343b74a6":"98391270","chunk-385749fb":"1340bd28","chunk-3f127a9a":"09f54e86","chunk-4c60840a":"fcfae90d","chunk-5384c96e":"7fae1151","chunk-5683ef42":"c93a580d","chunk-5b5e1cf4":"70f5e84c","chunk-5c535ecc":"bc7ef383","chunk-6099f35c":"bb9ab66f","chunk-61670627":"3ef66df6","chunk-62e04e57":"25d25d12","chunk-764cbc65":"55441276","chunk-97de0c14":"c7a8e657","chunk-efcdcd6a":"2bba4f6c"}[e]+".css",o=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var f=a[u],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===c||s===o))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],s=f.getAttribute("data-href");if(s===c||s===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],h.parentNode.removeChild(h),t(a)},h.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=a);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;f=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}o[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var h=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"17e1":function(e,n,t){"use strict";var c=t("260b"),r=(t("e71f"),{apiKey:"AIzaSyCY-UrWAhIekYvrVfrdMLpX9hXuStFDG6o",authDomain:"frontend-69a53.firebaseapp.com",projectId:"frontend-69a53",storageBucket:"frontend-69a53.appspot.com",messagingSenderId:"566533900429",appId:"1:566533900429:web:1f6d6c09f2461d8a09fac4s"}),o=c["a"].initializeApp(r);n["a"]=o.firestore()},"365c":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return f}));t("99af");var c=t("bc3a"),r=t.n(c),o=(t("d3b7"),t("4360"));function a(e){return e.interceptors.request.use((function(e){return e.headers.Authorization=o["a"].state.token,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}var u=function(e){return r.a.create({baseURL:"".concat("https://porest.kr").concat(e)})},i=u("/api"),f=a(u("/api"))},3786:function(e,n,t){"use strict";t.d(n,"e",(function(){return o})),t.d(n,"d",(function(){return a})),t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return f})),t.d(n,"f",(function(){return s}));var c=t("365c"),r=void 0,o=function(e){return c["a"].post("/signup",e)},a=function(e){return c["a"].post("/login",e)},u=function(e){return c["a"].post("/email-check",e)},i=function(e){return c["a"].post("/find-password",e).then((function(e){alert("이메일을 확인해주세요."),r.$router.push({name:"Login"})})).catch((function(e){alert(e.response.data.message)}))},f=function(e){return c["a"].post("/email-verify",e).then((function(e){alert("이메일을 확인해 주세요")})).catch((function(e){alert(e.response.data.message)}))},s=function(e){return c["a"].post("/verify-check",e).then((function(e){return e.data.verify})).catch((function(e){alert(e.response.data.message)}))}},4360:function(e,n,t){"use strict";var c=t("2b0e"),r=t("2f62");t("ac1f"),t("5319");function o(e){document.cookie="login_id=".concat(e)}function a(e){console.log("cookie 저장"),document.cookie="login_uid=".concat(e)}function u(e){document.cookie="login_name=".concat(e)}function i(e){document.cookie="login_email=".concat(e)}function f(e){document.cookie="login_token=".concat(e)}function s(e){document.cookie="login_img=".concat(e)}function d(e){document.cookie="login_temperature=".concat(e)}function h(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function l(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_uid\s*=\s*([^;]*).*$)|^.*$/,"$1")}function m(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_name\s*=\s*([^;]*).*$)|^.*$/,"$1")}function p(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function k(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_img\s*=\s*([^;]*).*$)|^.*$/,"$1")}function b(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_temperature\s*=\s*([^;]*).*$)|^.*$/,"$1")}function g(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_token\s*=\s*([^;]*).*$)|^.*$/,"$1")}var v={id:h()||"",uid:l()||"",email:p()||"",nickname:m()||"",token:g()?"".concat(g()):"",profileImg:k()||"",temperature:b()||""},y=t("94d5"),w=t.n(y),$={setUserId:function(e,n){e.id=n},setUserUid:function(e,n){e.uid=n},setUsername:function(e,n){e.nickname=n},setUserEmail:function(e,n){e.email=n},setToken:function(e,n){e.token=n},setImg:function(e,n){e.profileImg=n},setTemperature:function(e,n){e.temperature=n}},_=t("1da1"),O=(t("96cf"),t("3786")),U=t("1232"),I={LOGIN:function(e,n){return Object(_["a"])(regeneratorRuntime.mark((function t(){var c,r,a,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.commit,t.next=3,Object(O["d"])(n);case 3:return r=t.sent,a=r.data,h=Object(U["a"])(a.token),c("setUserId",h.id),c("setUsername",h.nickname),c("setUserEmail",h.email),c("setToken","Bearer "+a.token),c("setImg",h.profile_img),c("setTemperature",h.temperature),o(h.id),u(h.nickname),i(h.email),f("Bearer "+a.token),s(h.profile_img),d(h.temperature),t.abrupt("return",a);case 19:case"end":return t.stop()}}),t)})))()},LOGOUT:function(e){return Object(_["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,t("setUserId",""),t("setUsername",""),t("setUserEmail",""),t("setToken",""),t("setImg",""),t("setTemperature",""),t("setUserUid",""),o(""),u(""),i(""),f(""),s(""),d(""),a("");case 15:case"end":return n.stop()}}),n)})))()},saveuUserUid:function(e,n){var t=e.commit;console.log("this is actions payload",n.firebaseData.uid),t("setUserUid",n.firebaseData.uid),a(n.firebaseData.uid)}};c["a"].use(r["a"]);n["a"]=new r["a"].Store({state:v,getters:w.a,mutations:$,actions:I,modules:{}})},"452c":function(e,n,t){},4557:function(e,n,t){"use strict";t("95f1")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),t("router-view",{attrs:{user:e.user}})],1)},o=[],a=(t("b0c0"),t("17e1"),t("260b")),u=(t("ea7b"),{name:"App",data:function(){return{user:null,rooms:[]}},methods:{logout:function(){var e=this;console.log(this.$router.history.current.name),this.$store.dispatch("LOGOUT"),a["a"].auth().signOut().then((function(){console.log("logout"),e.user=null,"Login"!=e.$router.history.current.name&&e.$router.push("/login")}))}},mounted:function(){var e=this;a["a"].auth().onAuthStateChanged((function(n){n&&(console.log("user login request"),e.user=n,""==e.$store.state.uid&&e.$store.dispatch("saveuUserUid",{firebaseData:e.user}))}))}}),i=u,f=(t("4557"),t("b0a0"),t("2877")),s=Object(f["a"])(i,r,o,!1,null,null,null),d=s.exports,h=t("a18c"),l=t("4360"),m=t("9612"),p=t("10bd"),k=t("7de8");Object(k["z"])(!0),c["a"].use(m["a"]),c["a"].use(p["a"]),c["a"].config.productionTip=!1,new c["a"]({router:h["a"],store:l["a"],render:function(e){return e(d)}}).$mount("#app")},"94d5":function(e,n){},"95f1":function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0");var c=t("2b0e"),r=t("8c4f");c["a"].use(r["a"]);var o=[{path:"/",redirect:"/commingsoon"},{path:"/main",name:"Main",component:function(){return t.e("chunk-2d0cfcd5").then(t.bind(null,"64ef"))}},{path:"/main/mainisland",name:"MainIsland",component:function(){return Promise.all([t.e("chunk-26347e98"),t.e("chunk-2aaafce6")]).then(t.bind(null,"2048"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-284c59b5").then(t.bind(null,"9905"))}},{path:"/signup",name:"Signup",component:function(){return t.e("chunk-09655e21").then(t.bind(null,"ce61"))}},{path:"/intro",name:"Intro",component:function(){return t.e("chunk-1f46150e").then(t.bind(null,"db7d"))}},{path:"/find-password",name:"FindPassword",component:function(){return t.e("chunk-efcdcd6a").then(t.bind(null,"64cc"))}},{path:"/test",name:"Test",component:function(){return t.e("chunk-97de0c14").then(t.bind(null,"65d4"))}},{path:"/mailbox",name:"Mailbox",component:function(){return t.e("chunk-2d0c76f1").then(t.bind(null,"5132"))}},{path:"/mailbox/letters",name:"WriteLetter",component:function(){return t.e("chunk-5c535ecc").then(t.bind(null,"2c06"))}},{path:"/mailbox/random-mail",name:"RandomMail",component:function(){return t.e("chunk-09a8d904").then(t.bind(null,"8269"))}},{path:"/mailbox/random-mail/rootmail/reply/:storyId",name:"RootMailReply",component:function(){return t.e("chunk-764cbc65").then(t.bind(null,"a0a3"))}},{path:"/mailbox/my-mailbox/letter-detail/letter-reply",name:"LetterReply",component:function(){return t.e("chunk-339a19a3").then(t.bind(null,"2a81"))}},{path:"/mailbox/received",name:"MyReceivedMail",component:function(){return Promise.all([t.e("chunk-26347e98"),t.e("chunk-fe849680")]).then(t.bind(null,"8d70"))}},{path:"/home",name:"Home",component:function(){return t.e("chunk-4c60840a").then(t.bind(null,"f924"))}},{path:"/rooms",name:"RoomsPage",component:function(){return t.e("chunk-5683ef42").then(t.bind(null,"a2da"))}},{path:"/checkin/:hostID/:roomID",name:"CheckIn",component:function(){return t.e("chunk-5b5e1cf4").then(t.bind(null,"c5a7"))},props:!0},{path:"/chat/:hostID/:roomID",name:"Chat",component:function(){return t.e("chunk-385749fb").then(t.bind(null,"a94b"))}},{path:"/profile",name:"Profile",component:function(){return t.e("chunk-343b74a6").then(t.bind(null,"3379"))}},{path:"/commingsoon",name:"Commingsoon",component:function(){return t.e("chunk-6099f35c").then(t.bind(null,"eea0"))}},{path:"/feeling-record",name:"FeelingRecord",component:function(){return t.e("chunk-3f127a9a").then(t.bind(null,"c1c2"))}},{path:"/feeling-record/dairy",name:"Dairy",component:function(){return t.e("chunk-62e04e57").then(t.bind(null,"9a62"))}},{path:"/drawing",name:"Drawing",component:function(){return t.e("chunk-5384c96e").then(t.bind(null,"fd81"))}},{path:"/all/rooms",name:"AllRoom",component:function(){return Promise.all([t.e("chunk-26347e98"),t.e("chunk-096196c9")]).then(t.bind(null,"c52a"))}},{path:"/joy/vr",name:"VrRoom",component:function(){return t.e("chunk-2d0ba4c9").then(t.bind(null,"372a"))}},{path:"/star3d",name:"Star3D",component:function(){return t.e("chunk-61670627").then(t.bind(null,"73dc"))}}],a=new r["a"]({mode:"history",base:"/",routes:o});n["a"]=a},b0a0:function(e,n,t){"use strict";t("452c")}});
//# sourceMappingURL=app.50951730.js.map