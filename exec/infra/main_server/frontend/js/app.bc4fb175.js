(function(e){function t(t){for(var a,c,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f660c7d":"4b8308ba","chunk-2116d17a":"5e9c95ad","chunk-26347e98":"a5d35a99","chunk-19f38d4e":"8508f419","chunk-37df14db":"1b9f708b","chunk-3cdb7792":"056ca6f1","chunk-441dcf09":"47b6f5b2","chunk-82954288":"a913a139","chunk-273412c6":"2cb2041d","chunk-2e4bee54":"95510430","chunk-302aa67b":"9908dc5a","chunk-31fb1bc2":"7f98519c","chunk-35d42017":"0b7a3f1e","chunk-428d26e2":"70f4b8ce","chunk-42cdc37b":"d1d437d3","chunk-51ee938e":"29f21048","chunk-5942e4de":"1df32374","chunk-61670627":"004e1f59","chunk-6562fa0a":"95ed24dd","chunk-6bf72382":"b9f522b5","chunk-759f3c02":"6be9bc3d","chunk-75fc0030":"e5d44f89","chunk-900bdfc0":"847e1dae","chunk-e7352610":"c9ca7248"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1f660c7d":1,"chunk-2116d17a":1,"chunk-26347e98":1,"chunk-19f38d4e":1,"chunk-37df14db":1,"chunk-3cdb7792":1,"chunk-441dcf09":1,"chunk-82954288":1,"chunk-273412c6":1,"chunk-2e4bee54":1,"chunk-302aa67b":1,"chunk-31fb1bc2":1,"chunk-35d42017":1,"chunk-428d26e2":1,"chunk-42cdc37b":1,"chunk-51ee938e":1,"chunk-5942e4de":1,"chunk-61670627":1,"chunk-6562fa0a":1,"chunk-6bf72382":1,"chunk-759f3c02":1,"chunk-75fc0030":1,"chunk-900bdfc0":1,"chunk-e7352610":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1f660c7d":"0736494b","chunk-2116d17a":"bf00800b","chunk-26347e98":"1bfd45a9","chunk-19f38d4e":"483bc428","chunk-37df14db":"07a81aa9","chunk-3cdb7792":"07ffb9e6","chunk-441dcf09":"03e2c89f","chunk-82954288":"d7b01f80","chunk-273412c6":"cad79632","chunk-2e4bee54":"b08eb57c","chunk-302aa67b":"da67a7a3","chunk-31fb1bc2":"bcfed19a","chunk-35d42017":"2cb54b3f","chunk-428d26e2":"9cb6fa46","chunk-42cdc37b":"ba7ff3e2","chunk-51ee938e":"f7f63438","chunk-5942e4de":"b5ed882e","chunk-61670627":"3ef66df6","chunk-6562fa0a":"82d47c3e","chunk-6bf72382":"f5b1fb2c","chunk-759f3c02":"ceeaf701","chunk-75fc0030":"d98cbd72","chunk-900bdfc0":"171bc695","chunk-e7352610":"83a5f378"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),n(r)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17e1":function(e,t,n){"use strict";var a=n("260b"),c=(n("e71f"),{apiKey:"AIzaSyCY-UrWAhIekYvrVfrdMLpX9hXuStFDG6o",authDomain:"frontend-69a53.firebaseapp.com",projectId:"frontend-69a53",storageBucket:"frontend-69a53.appspot.com",messagingSenderId:"566533900429",appId:"1:566533900429:web:1f6d6c09f2461d8a09fac4s"}),o=a["a"].initializeApp(c);t["a"]=o.firestore()},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));n("99af");var a=n("bc3a"),c=n.n(a),o=(n("d3b7"),n("4360"));function r(e){return e.interceptors.request.use((function(e){return e.headers.Authorization=o["a"].state.token,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}var u=function(e){return c.a.create({baseURL:"".concat("https://porest.kr").concat(e)})},i=u("/api"),s=r(u("/api"))},3786:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return s}));var a=n("365c"),c=function(e){return a["a"].post("/signup",e).then((function(e){return{status:!0,message:"이메일을 확인해주세요"}})).catch((function(e){return{status:!1,message:"다시 시도해 주세요"}}))},o=function(e){return a["a"].post("/login",e).then((function(e){return{status:!0,message:"",data:e.data}})).catch((function(e){return{status:!1,message:"다시 시도해 주세요"}}))},r=function(e){return a["a"].post("/email-check",e).then((function(e){return{status:!0,message:"",data:e.data}})).catch((function(e){return{status:!1,message:"다시 시도해 주세요"}}))},u=function(e){return a["a"].post("/find-password",e).then((function(e){return{status:!0,message:"이메일을 확인해주세요"}})).catch((function(e){return{status:!1,message:err.response.data.message}}))},i=function(e){return a["a"].post("/email-verify",e).then((function(e){return{status:!0,message:"이메일을 확인해 주세요"}})).catch((function(e){return{status:!1,message:e.response.data.message}}))},s=function(e){return a["a"].post("/verify-check",e).then((function(e){return{status:!0,message:"",data:e.data}})).catch((function(e){return{status:!1,message:e.response.data.message}}))}},4360:function(e,t,n){"use strict";var a=n("2b0e"),c=n("2f62"),o=n("6a1d"),r={id:Object(o["c"])()||"",uid:Object(o["g"])()||"",email:Object(o["b"])()||"",nickname:Object(o["e"])()||"",token:Object(o["a"])()?"".concat(Object(o["a"])()):"",profileImg:Object(o["d"])()||"",temperature:Object(o["f"])()||"",thisMonthFeelings:[],targetDateId:0,targetDateDetail:"",stickerindex:0,selectedSticker:"",emotionIndex:0,diaryModalStatus:"",targetDate:[],modalControl:!1,refreshCalendar:!1,thisMonth:[],thisMonthWithEmoji:[],counselId:null,selectedStory:null,allLetters:null,modalProfileSetting:!1,profileImgToShow:0,logoStatus:!0,snackbarStatus:!1},u=(n("a9e3"),n("ac1f"),n("1276"),{getFeeling:function(e){return Number(e.targetDateDetail["feeling"])-1},getStickerIndex:function(e){var t=e.targetDateDetail["imageUrl"];return Number(t.split(".")[0])-1},getRefreshCalendar:function(e){return e.refreshCalendar},getUpdateFeeling:function(e){return e.emotionIndex},getUpdateEmotion:function(e){return e.selectedSticker},getAuthToken:function(e){return e.token},getUpdateProfileImg:function(e){return e.profileImg},getUpdateProfileImgFinal:function(e){return e.profileImgToShow}}),i={setUserId:function(e,t){e.id=t},setUserUid:function(e,t){e.uid=t},setUsername:function(e,t){e.nickname=t},setUserEmail:function(e,t){e.email=t},setToken:function(e,t){e.token=t},setImg:function(e,t){e.profileImg=t},setTemperature:function(e,t){e.temperature=t},getThisMonthFeelings:function(e,t){e.thisMonthFeelings=t},getTargetDateId:function(e,t){e.targetDateId=t},getTargetDateDetail:function(e,t){e.targetDateDetail=t},getStickerIndex:function(e,t){e.stickerindex=t},getSelectedSticker:function(e,t){e.selectedSticker=t},getEmotionIndex:function(e,t){e.emotionIndex=t},getDiaryModalStatus:function(e,t){e.diaryModalStatus=t},getTargetDate:function(e,t){e.targetDate=t},getModalStatus:function(e,t){e.modalControl=t},getCalendarRefreshStatus:function(e,t){e.refreshCalendar=t},getThisMonth:function(e,t){e.thisMonth=t},getThisMonthEmoji:function(e,t){e.thisMonthWithEmoji=t},setCounselId:function(e,t){e.counselId=t},setSelectedStory:function(e,t){e.selectedStory=t},setAllLetters:function(e,t){e.allLetters=t},setModalProfile:function(e,t){e.modalProfileSetting=t},setProfileImgToShow:function(e,t){e.profileImgToShow=t},setLogoStatus:function(e,t){e.logoStatus=t},setSnackbarStatus:function(e,t){e.snackbarStatus=t}},s=n("1da1"),l=(n("96cf"),n("3786")),d=n("1232"),f={LOGIN:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,Object(l["d"])(t);case 3:return c=n.sent,r=Object(d["a"])(c.data.token),a("setUserId",r.id),a("setUsername",r.nickname),a("setUserEmail",r.email),a("setToken","Bearer "+c.data.token),a("setImg",r.profile_img_number),a("setTemperature",r.temperature),Object(o["j"])(r.id),Object(o["l"])(r.nickname),Object(o["i"])(r.email),Object(o["h"])("Bearer "+c.data.token),Object(o["k"])(r.profile_img_number),Object(o["m"])(r.temperature),n.abrupt("return",c.data);case 18:case"end":return n.stop()}}),n)})))()},LOGOUT:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("setUserId",""),n("setUsername",""),n("setUserEmail",""),n("setToken",""),n("setImg",""),n("setTemperature",""),n("setUserUid",""),Object(o["j"])(""),Object(o["l"])(""),Object(o["i"])(""),Object(o["h"])(""),Object(o["k"])(""),Object(o["m"])(""),Object(o["n"])("null");case 15:case"end":return t.stop()}}),t)})))()},saveuUserUid:function(e,t){var n=e.commit;n("setUserUid",t.firebaseData.uid),Object(o["n"])(t.firebaseData.uid)},saveSelectedCounselId:function(e,t){var n=e.commit;n("setCounselId",t)},saveSelectedStory:function(e,t){var n=e.commit;n("setSelectedStory",t)},saveAllLetters:function(e,t){var n=e.commit;n("setAllLetters",t)},saveSnackbarStatus:function(e,t){var n=e.commit;n("setSnackbarStatus",t)}};a["a"].use(c["a"]);t["a"]=new c["a"].Store({state:r,getters:u,mutations:i,actions:f,modules:{}})},"452c":function(e,t,n){},4557:function(e,t,n){"use strict";n("95f1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"music__player"},[n("div",{staticClass:"music-player__wrapper"},[n("div",{staticClass:"music-player music-player--disabled",attrs:{id:"music-container"}},[e._m(1),n("div",{staticClass:"music-player__bar music-player__bar1"}),n("div",{staticClass:"music-player__bar music-player__bar2"}),n("div",{staticClass:"music-player__bar music-player__bar3"}),n("div",{staticClass:"music-player__bar music-player__bar4"}),n("button",{staticClass:"music-player__button music-player__play",on:{click:function(t){return t.preventDefault(),e.controlMusic("play")}}},[n("span",{staticClass:"sr-only"},[e._v("Play")])]),n("button",{staticClass:"music-player__button music-player__pause",on:{click:function(t){return t.preventDefault(),e.controlMusic("pause")}}},[n("span",{staticClass:"sr-only"},[e._v("Pause")])])])])]),n("nav",{attrs:{id:"nav"}},[e._m(2),e.$store.state.id?n("ul",{staticClass:"nav_ul"},[n("li",[n("span",{staticClass:"nav-detail",on:{click:e.goToMain}},[e._v("홈")])]),n("li",[n("span",{staticClass:"nav-detail",on:{click:e.goToMailbox}},[e._v("우체통")])]),n("li",[n("span",{staticClass:"nav-detail",on:{click:e.goToFeelingRecord}},[e._v("하루일기")])]),n("li",[n("span",{staticClass:"nav-detail",on:{click:e.goToVideoChat}},[e._v("마음나눔")])]),e._m(3),n("li",[n("span",{staticClass:"nav-detail",on:{click:e.goToJoy}},[e._v("쉼터")])]),n("li",{staticClass:"nav-detail",on:{click:e.logout}},[e._v("로그아웃")])]):n("ul",{staticClass:"nav_ul"},[n("li",[e._v("로그인")])])]),n("router-view",{attrs:{user:e.user},on:{introState:e.introState,introPlay:e.introPlay,controlMusic:e.controlMusic,skip:e.skip}})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audio",{attrs:{id:"audio-player1",loop:"false"}},[a("source",{attrs:{src:n("aa34"),type:"audio/mpeg"}}),a("p",{staticClass:"sr-only"},[e._v(" Your browser does not support the audio element. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audio",{attrs:{id:"audio-player",loop:""}},[a("source",{attrs:{src:n("9e04"),type:"audio/mpeg"}}),a("p",{staticClass:"sr-only"},[e._v(" Your browser does not support the audio element. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"nav-icon",attrs:{id:"nav-icon"}},[n("span")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",{staticClass:"nav-detail"},[e._v("하소연")])])}],r=(n("b0c0"),n("17e1"),n("260b")),u=(n("ea7b"),function(){var e=document.getElementById("nav"),t=e.getElementsByTagName("a");function n(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}document.getElementById("nav-icon").addEventListener("click",(function(e){e.preventDefault(),n()}));for(var a=0;a<t.length;a++)t[a].addEventListener("click",(function(){n()}))}),i={name:"App",data:function(){return{user:null,rooms:[],loginState:!1,introState:!1}},methods:{skip:function(){var e=document.querySelector("#audio-player1");e.pause(),this.$router.push({name:"MainIsland"})},logout:function(){var e=this;this.loginState=!1,this.$store.dispatch("LOGOUT"),r["a"].auth().signOut().then((function(){e.user=null,"Login"!=e.$router.history.current.name&&e.$router.push({name:"Login"})}))},goToMain:function(){var e=document.getElementById("nav");e.classList.remove("active"),this.$router.push({name:"MainIsland"})},goToMailbox:function(){var e=document.getElementById("nav");e.classList.remove("active"),this.$router.push("/mailbox")},goToFeelingRecord:function(){var e=document.getElementById("nav");e.classList.remove("active"),this.$router.push("/feeling-record")},goToVideoChat:function(){var e=document.getElementById("nav");e.classList.remove("active"),this.$router.push("/all/rooms")},goToJoy:function(){var e=document.getElementById("nav");e.classList.remove("active"),this.$router.push("/joy")},controlMusic:function(e){var t=document.querySelector("#audio-player"),n=document.querySelector("#music-container");"play"!=e?(n.classList.add("music-player--disabled"),t.pause()):(t.play(),n.classList.remove("music-player--disabled"))},introPlay:function(){var e=document.querySelector("#audio-player1");setTimeout((function(){e.play()}),150),setTimeout((function(){e.pause()}),5650)}},mounted:function(){var e=this;u();document.querySelector("#audio-player"),document.querySelector("#audio-player1");r["a"].auth().onAuthStateChanged((function(t){t&&(e.loginState=!e.loginState,e.user=t,""!=e.$store.state.uid&&"null"!=e.$store.state.uid||e.$store.dispatch("saveuUserUid",{firebaseData:e.user}))}))},created:function(){var e=this.$store.getters.getAuthToken;""==e||null==e?this.$router.push({name:"Login"}):this.loginState=!0,this.$store.commit("setLogoStatus",!0)}},s=i,l=(n("4557"),n("b0a0"),n("2877")),d=Object(l["a"])(s,c,o,!1,null,null,null),f=d.exports,m=n("a18c"),h=n("4360"),p=n("9612"),b=n("10bd"),g=n("7de8");Object(g["z"])(!0),a["a"].use(p["a"]),a["a"].use(b["a"]),a["a"].config.productionTip=!1,new a["a"]({router:m["a"],store:h["a"],render:function(e){return e(f)}}).$mount("#app")},"6a1d":function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"j",(function(){return r})),n.d(t,"n",(function(){return u})),n.d(t,"l",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"k",(function(){return d})),n.d(t,"m",(function(){return f})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return k}));n("99af"),n("ac1f"),n("5319");var a=new Date(Date.now()+864e5),c=a.toUTCString(),o=";path=/;secure; expires=".concat(c);function r(e){document.cookie="login_id=".concat(e).concat(o)}function u(e){document.cookie="login_uid=".concat(e).concat(o)}function i(e){document.cookie="login_name=".concat(e).concat(o)}function s(e){document.cookie="login_email=".concat(e).concat(o)}function l(e){document.cookie="login_token=".concat(e).concat(o)}function d(e){document.cookie="login_img=".concat(e).concat(o)}function f(e){document.cookie="login_temperature=".concat(e).concat(o)}function m(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function h(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_uid\s*=\s*([^;]*).*$)|^.*$/,"$1")}function p(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_name\s*=\s*([^;]*).*$)|^.*$/,"$1")}function b(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function g(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_img\s*=\s*([^;]*).*$)|^.*$/,"$1")}function k(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_temperature\s*=\s*([^;]*).*$)|^.*$/,"$1")}function v(){return document.cookie.replace(/(?:(?:^|.*;\s*)login_token\s*=\s*([^;]*).*$)|^.*$/,"$1")}},"95f1":function(e,t,n){},"9e04":function(e,t,n){e.exports=n.p+"media/backgroundMusic.b78f82d0.mp3"},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),c=n("8c4f");a["a"].use(c["a"]);var o=[{path:"/",redirect:"/login"},{path:"/main",name:"MainIsland",component:function(){return Promise.all([n.e("chunk-26347e98"),n.e("chunk-37df14db")]).then(n.bind(null,"2048"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-302aa67b").then(n.bind(null,"9905"))}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-6562fa0a").then(n.bind(null,"ce61"))}},{path:"/intro",name:"Intro",component:function(){return Promise.all([n.e("chunk-26347e98"),n.e("chunk-3cdb7792")]).then(n.bind(null,"db7d"))}},{path:"/find-password",name:"FindPassword",component:function(){return n.e("chunk-759f3c02").then(n.bind(null,"64cc"))}},{path:"/mailbox",name:"Mailbox",component:function(){return n.e("chunk-e7352610").then(n.bind(null,"5132"))}},{path:"/mailbox/letters",name:"WriteLetter",component:function(){return n.e("chunk-2116d17a").then(n.bind(null,"2c06"))}},{path:"/mailbox/random-mail",name:"RandomMail",component:function(){return Promise.all([n.e("chunk-26347e98"),n.e("chunk-82954288")]).then(n.bind(null,"8269"))}},{path:"/mailbox/random-mail/rootmail/reply",name:"RootMailReply",component:function(){return n.e("chunk-6bf72382").then(n.bind(null,"a0a3"))},props:!0},{path:"/mailbox/received",name:"MyReceivedMail",component:function(){return Promise.all([n.e("chunk-26347e98"),n.e("chunk-19f38d4e")]).then(n.bind(null,"8d70"))},props:!0},{path:"/rooms",name:"RoomsPage",component:function(){return n.e("chunk-31fb1bc2").then(n.bind(null,"a2da"))}},{path:"/checkin/:hostID/:roomID",name:"CheckIn",component:function(){return n.e("chunk-900bdfc0").then(n.bind(null,"c5a7"))},props:!0},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-35d42017").then(n.bind(null,"3379"))}},{path:"/commingsoon",name:"Commingsoon",component:function(){return n.e("chunk-428d26e2").then(n.bind(null,"eea0"))}},{path:"/feeling-record",name:"FeelingRecord",component:function(){return n.e("chunk-42cdc37b").then(n.bind(null,"c1c2"))}},{path:"/drawing",name:"Drawing",component:function(){return n.e("chunk-1f660c7d").then(n.bind(null,"fd81"))}},{path:"/all/rooms",name:"AllRoom",component:function(){return Promise.all([n.e("chunk-26347e98"),n.e("chunk-441dcf09")]).then(n.bind(null,"c52a"))}},{path:"/joy/vr",name:"VrRoom",component:function(){return n.e("chunk-5942e4de").then(n.bind(null,"372a"))}},{path:"/star3d",name:"Star3D",component:function(){return n.e("chunk-61670627").then(n.bind(null,"73dc"))}},{path:"/mailbox/intro",name:"MailBoxIntro",component:function(){return n.e("chunk-51ee938e").then(n.bind(null,"3368"))}},{path:"/joy",name:"JoyMainPage",component:function(){return n.e("chunk-273412c6").then(n.bind(null,"7c46"))}},{path:"/joy/healing/music",name:"HealingMusic",component:function(){return n.e("chunk-75fc0030").then(n.bind(null,"e2a8"))}},{path:"/admin/ban-report",name:"BanReport",component:function(){return n.e("chunk-2e4bee54").then(n.bind(null,"d1e4"))}}],r=new c["a"]({mode:"history",base:"/",routes:o});t["a"]=r},aa34:function(e,t,n){e.exports=n.p+"media/introvoice.22721559.mp3"},b0a0:function(e,t,n){"use strict";n("452c")}});
//# sourceMappingURL=app.bc4fb175.js.map