(function(e){function n(n){for(var c,o,a=n[0],i=n[1],s=n[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,o=1;o<t.length;o++){var a=t[o];0!==r[a]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},r={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11e871ce":"d16c397d","chunk-269e6159":"d83f9c06","chunk-29b85100":"b67e0988","chunk-2d0c76f1":"38004a9e","chunk-2d0cfcd5":"806f3fd9","chunk-339a19a3":"51d698fc","chunk-343b74a6":"b967c625","chunk-412d852e":"4e707aff","chunk-47e82712":"9d23c57c","chunk-4c60840a":"85f29ba9","chunk-5384c96e":"a429570d","chunk-572f9186":"b3d8f38b","chunk-5b58400d":"d46fe7cb","chunk-6099f35c":"ce26b339","chunk-62e04e57":"a5a892f4","chunk-69d0a682":"67a79d7d","chunk-6a4b6e72":"8453e1e5","chunk-97de0c14":"5b34be32","chunk-9ec44efc":"1132a6ca","chunk-af3e1864":"c6f323f2","chunk-b244f514":"1274fcca"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-11e871ce":1,"chunk-269e6159":1,"chunk-29b85100":1,"chunk-339a19a3":1,"chunk-343b74a6":1,"chunk-412d852e":1,"chunk-47e82712":1,"chunk-4c60840a":1,"chunk-5384c96e":1,"chunk-572f9186":1,"chunk-6099f35c":1,"chunk-62e04e57":1,"chunk-69d0a682":1,"chunk-6a4b6e72":1,"chunk-97de0c14":1,"chunk-9ec44efc":1,"chunk-af3e1864":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-11e871ce":"270a2237","chunk-269e6159":"347d4ca7","chunk-29b85100":"f24904c8","chunk-2d0c76f1":"31d6cfe0","chunk-2d0cfcd5":"31d6cfe0","chunk-339a19a3":"1c7218c0","chunk-343b74a6":"98391270","chunk-412d852e":"91e44a42","chunk-47e82712":"e6e3e197","chunk-4c60840a":"fcfae90d","chunk-5384c96e":"7fae1151","chunk-572f9186":"b3334dec","chunk-5b58400d":"31d6cfe0","chunk-6099f35c":"bb9ab66f","chunk-62e04e57":"25d25d12","chunk-69d0a682":"72518bfa","chunk-6a4b6e72":"8b50829d","chunk-97de0c14":"c7a8e657","chunk-9ec44efc":"921bcc99","chunk-af3e1864":"eb620249","chunk-b244f514":"31d6cfe0"}[e]+".css",r=i.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===c||f===r))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],f=s.getAttribute("data-href");if(f===c||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete o[e],l.parentNode.removeChild(l),t(u)},l.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var d=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"17e1":function(e,n,t){"use strict";var c=t("260b"),o=(t("e71f"),{apiKey:"AIzaSyCY-UrWAhIekYvrVfrdMLpX9hXuStFDG6o",authDomain:"frontend-69a53.firebaseapp.com",projectId:"frontend-69a53",storageBucket:"frontend-69a53.appspot.com",messagingSenderId:"566533900429",appId:"1:566533900429:web:1f6d6c09f2461d8a09fac4s"}),r=c["a"].initializeApp(o);n["a"]=r.firestore()},3786:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return d}));t("99af");var c=t("bc3a"),o=t.n(c),r=(t("d3b7"),t("4360"));function u(e){return e.interceptors.request.use((function(e){return e.headers.Authorization="".concat(r["a"].state.token),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}var a=function(e){return o.a.create({baseURL:"".concat("https://porest.kr").concat(e)})},i=a("/api"),s=(u(a("/api")),function(e){return i.post("/signup",e)}),f=function(e){return i.post("/login",e)},d=function(e){return i.post("/email-check",e)}},4360:function(e,n,t){"use strict";var c=t("2b0e"),o=t("2f62");t("ac1f"),t("5319");function r(e){document.cookie="login_id=".concat(e)}function u(e){document.cookie="login_uid=".concat(e)}function a(e){document.cookie="login_name=".concat(e)}function i(e){document.cookie="login_email=".concat(e)}function s(e){document.cookie="login_token=".concat(e)}function f(e){document.cookie="login_img=".concat(e)}function d(e){document.cookie="login_temperature=".concat(e)}function l(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function h(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_uid\s*=\s*([^;]*).*$)|^.*$/,"$1")}function m(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_name\s*=\s*([^;]*).*$)|^.*$/,"$1")}function p(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function k(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_img\s*=\s*([^;]*).*$)|^.*$/,"$1")}function b(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_temperature\s*=\s*([^;]*).*$)|^.*$/,"$1")}function g(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_token\s*=\s*([^;]*).*$)|^.*$/,"$1")}var v={id:l()||"",uid:h()||"",email:p()||"",nickname:m()||"",token:g()?"Token ".concat(g()):"",profileImg:k()||"",temperature:b()||""},y=t("94d5"),w=t.n(y),_={setUserId:function(e,n){e.id=n},setUserUid:function(e,n){e.uid=n},setUsername:function(e,n){e.nickname=n},setUserEmail:function(e,n){e.email=n},setToken:function(e,n){e.token="Token ".concat(n)},setImg:function(e,n){e.profileImg=n},setTemperature:function(e,n){e.temperature=n}},$=t("1da1"),O=(t("96cf"),t("3786")),I=t("1232"),U={LOGIN:function(e,n){return Object($["a"])(regeneratorRuntime.mark((function t(){var c,o,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.commit,t.next=3,Object(O["b"])(n);case 3:return o=t.sent,u=o.data,l=Object(I["a"])(u.token),c("setUserId",l.id),c("setUsername",l.nickname),c("setUserEmail",l.email),c("setToken","Bearer "+u.token),c("setImg",l.profile_img),c("setTemperature",l.temperature),r(l.id),a(l.nickname),i(l.email),s("Bearer "+u.token),f(l.profile_img),d(l.temperature),t.abrupt("return",u);case 19:case"end":return t.stop()}}),t)})))()},LOGOUT:function(e){return Object($["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,t("setUserId",""),t("setUsername",""),t("setUserEmail",""),t("setToken",""),t("setImg",""),t("setTemperature",""),r(""),a(""),i(""),s(""),f(""),d("");case 13:case"end":return n.stop()}}),n)})))()},saveuUserUid:function(e,n){var t=e.commit;console.log("this is actions payload",n.firebaseData.uid),t("setUserUid",n.firebaseData.uid),u(n.firebaseData.uid)}};c["a"].use(o["a"]);n["a"]=new o["a"].Store({state:v,getters:w.a,mutations:_,actions:U,modules:{}})},"452c":function(e,n,t){},4557:function(e,n,t){"use strict";t("95f1")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),t("router-view",{attrs:{user:e.user}})],1)},r=[],u=(t("17e1"),t("260b")),a=(t("ea7b"),{name:"App",data:function(){return{user:null,rooms:[]}},methods:{logout:function(){var e=this;u["a"].auth().signOut().then((function(){console.log("logout"),e.user=null,e.$router.push("/login")}))}},mounted:function(){var e=this;u["a"].auth().onAuthStateChanged((function(n){n&&(console.log("user login request"),e.user=n,e.$store.dispatch("saveuUserUid",{firebaseData:e.user}))}))}}),i=a,s=(t("4557"),t("b0a0"),t("2877")),f=Object(s["a"])(i,o,r,!1,null,null,null),d=f.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));c["a"].use(l["a"]);var h=[{path:"/",redirect:"/commingsoon"},{path:"/main",name:"Main",component:function(){return t.e("chunk-2d0cfcd5").then(t.bind(null,"64ef"))}},{path:"/main/mainisland",name:"MainIsland",component:function(){return t.e("chunk-6a4b6e72").then(t.bind(null,"2048"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-11e871ce").then(t.bind(null,"9905"))}},{path:"/signup",name:"Signup",component:function(){return t.e("chunk-269e6159").then(t.bind(null,"ce61"))}},{path:"/test",name:"Test",component:function(){return t.e("chunk-97de0c14").then(t.bind(null,"65d4"))}},{path:"/mailbox",name:"Mailbox",component:function(){return t.e("chunk-2d0c76f1").then(t.bind(null,"5132"))}},{path:"/mailbox/letters",name:"WriteLetter",component:function(){return t.e("chunk-412d852e").then(t.bind(null,"2c06"))}},{path:"/mailbox/random-mail",name:"RandomMail",component:function(){return t.e("chunk-29b85100").then(t.bind(null,"8269"))}},{path:"/mailbox/random-mail/rootmail/reply",name:"RootMailReply",component:function(){return t.e("chunk-9ec44efc").then(t.bind(null,"a0a3"))}},{path:"/mailbox/my-mailbox/letter-detail/letter-reply",name:"LetterReply",component:function(){return t.e("chunk-339a19a3").then(t.bind(null,"2a81"))}},{path:"/mailbox/received",name:"MyReceivedMail",component:function(){return t.e("chunk-69d0a682").then(t.bind(null,"8d70"))}},{path:"/home",name:"Home",component:function(){return t.e("chunk-4c60840a").then(t.bind(null,"f924"))}},{path:"/rooms",name:"RoomsPage",component:function(){return t.e("chunk-47e82712").then(t.bind(null,"a2da"))}},{path:"/checkin/:hostID/:roomID",name:"CheckIn",component:function(){return t.e("chunk-b244f514").then(t.bind(null,"c5a7"))},props:!0},{path:"/chat/:hostID/:roomID",name:"Chat",component:function(){return t.e("chunk-5b58400d").then(t.bind(null,"794f"))}},{path:"/profile",name:"Profile",component:function(){return t.e("chunk-343b74a6").then(t.bind(null,"3379"))}},{path:"/commingsoon",name:"Commingsoon",component:function(){return t.e("chunk-6099f35c").then(t.bind(null,"eea0"))}},{path:"/feeling-record",name:"FeelingRecord",component:function(){return t.e("chunk-af3e1864").then(t.bind(null,"c1c2"))}},{path:"/feeling-record/dairy",name:"Dairy",component:function(){return t.e("chunk-62e04e57").then(t.bind(null,"9a62"))}},{path:"/drawing",name:"Drawing",component:function(){return t.e("chunk-5384c96e").then(t.bind(null,"fd81"))}},{path:"/all/rooms",name:"AllRoom",component:function(){return t.e("chunk-572f9186").then(t.bind(null,"c52a"))}}],m=new l["a"]({mode:"history",base:"/",routes:h}),p=m,k=t("4360"),b=t("9612"),g=t("10bd"),v=t("7de8");Object(v["z"])(!0),c["a"].use(b["a"]),c["a"].use(g["a"]),c["a"].config.productionTip=!1,new c["a"]({router:p,store:k["a"],render:function(e){return e(d)}}).$mount("#app")},"94d5":function(e,n){},"95f1":function(e,n,t){},b0a0:function(e,n,t){"use strict";t("452c")}});
//# sourceMappingURL=app.866ae7f6.js.map