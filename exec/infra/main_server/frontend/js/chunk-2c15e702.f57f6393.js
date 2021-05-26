(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c15e702"],{"159b":function(e,t,o){var r=o("da84"),a=o("fdbc"),n=o("17c2"),s=o("9112");for(var i in a){var c=r[i],u=c&&c.prototype;if(u&&u.forEach!==n)try{s(u,"forEach",n)}catch(l){u.forEach=n}}},"17c2":function(e,t,o){"use strict";var r=o("b727").forEach,a=o("a640"),n=a("forEach");e.exports=n?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"9e58":function(e,t,o){"use strict";o("eba6")},a2da:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"rooms-wrapper"},[o("div",{staticClass:"rooms-section-wrapper"},[o("div",{staticClass:"rooms-section-inner-wrapper"},[o("div",{staticClass:"rooms-section-left"},[o("div",{staticClass:"rooms-section-left-header"}),o("div",{staticClass:"rooms-section-left-content"},[o("h1",[e._v("화상상담방 개설하기")]),o("form",[o("label",{attrs:{for:"roomNmae"}},[e._v("상담방 이름")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"}],ref:"roomName",staticClass:"form-control",attrs:{type:"text",name:"roomName",placeholder:"Room name","aria-describedby":"buttonAdd"},domProps:{value:e.roomName},on:{input:function(t){t.target.composing||(e.roomName=t.target.value)}}}),o("label",{attrs:{for:"roomCapacity"}},[e._v("상담방 허용인원")]),o("input",{attrs:{type:"number",min:"1",max:"2"},domProps:{value:e.capacity}}),e._v("명 "),o("label",{attrs:{for:"roomPublic"}},[e._v("상담방 얼굴 공개 여부")]),e._m(0),o("div",{staticClass:"room-category"},[o("div",{staticClass:"category",on:{click:function(e){}}},[e._v("학교생활")]),o("div",{staticClass:"category"},[e._v("직장생활")]),o("div",{staticClass:"category"},[e._v("학업 및 진호")]),o("div",{staticClass:"category"},[e._v("심리 및 정서")]),o("div",{staticClass:"category"},[e._v("대인관계")]),o("div",{staticClass:"category"},[e._v("연애")]),o("div",{staticClass:"category"},[e._v("성")]),o("div",{staticClass:"category"},[e._v("자녀육아")])]),o("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"submit",id:"buttonAdd"},on:{click:function(t){return t.preventDefault(),e.checkRoomName(t)}}},[e._v(" 개설하기 ")])])])]),o("div",{staticClass:"rooms-section-right"},e._l(e.rooms,(function(t,r){return o("div",{key:r},[o("div",{staticClass:"room-card-wrapper"},[o("div",{on:{click:function(o){return e.moveToCheckIn(t.id,t.name)}}},[e._v(" "+e._s(t)+" 방 ")]),e.uid===t.hostID?o("span",{on:{click:function(o){return e.deleteRoom(t.id,r)}}},[e._v("Delete")]):e._e()])])})),0)])])])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"roomPublic-wrapper"},[o("div",{staticClass:"face-show"},[e._v("공개")]),o("div",{staticClass:"face-noshow"},[e._v("비공개")])])}],n=o("1da1"),s=(o("96cf"),o("159b"),o("b0c0"),o("a434"),o("99af"),o("17e1")),i=o("260b"),c=(o("ea7b"),{name:"RoomsPage",data:function(){return{roomName:null,uid:this.$store.state.uid,rooms:[],addState:!1,roomNameCheck:!1,capacity:1}},props:["user"],mounted:function(){0==this.rooms.length&&(console.log("시작한다"),this.loadData())},methods:{checkRoomName:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.rooms.forEach((function(t){t.name==e.roomName&&(e.roomNameCheck=!0)}));case 2:e.roomNameCheck?e.roomName="":e.addRoom();case 3:case"end":return t.stop()}}),t)})))()},addRoom:function(){var e=this;this.addState=!0,console.log("추가할거야",this.roomName,this.rooms);var t=s["a"].collection("users").doc(this.user.uid);t.set({name:this.user.uid}),t.collection("rooms").add({name:this.roomName,createdAt:i["a"].firestore.FieldValue.serverTimestamp()}).then((function(){e.roomName=""}))},deleteRoom:function(e,t){console.log("지운다잉",this.rooms),s["a"].collection("users").doc(this.user.uid).collection("rooms").doc(e).delete(),this.rooms.splice(t,1)},moveToCheckIn:function(e,t){console.log("move to check in page",e),console.log("this room name"),this.uid||(this.uid="none"),this.$router.push({path:"/checkin/".concat(this.uid,"/").concat(e),params:{roomId:e,roomNameParams:t}})},loadData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=s["a"].collection("users"),t.next=3,o.get().then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.forEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.doc(r.id).collection("rooms").onSnapshot(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(o){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.forEach((function(t){var o={id:t.id,hostID:r.id,name:t.data().name};if(0!=e.rooms.length){for(var a=!1,n=0;n<e.rooms.length;n++)e.rooms[n]["id"]===t.id&&(a=!0);!a&&e.addState?e.rooms.unshift(o):a||e.addState||e.rooms.push(o)}else e.rooms.push(o)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this.$store.getters.getAuthToken;""!=e&&null!=e||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))}}),u=c,l=(o("9e58"),o("2877")),m=Object(l["a"])(u,r,a,!1,null,"a7de9eb6",null);t["default"]=m.exports},a434:function(e,t,o){"use strict";var r=o("23e7"),a=o("23cb"),n=o("a691"),s=o("50c4"),i=o("7b0b"),c=o("65f0"),u=o("8418"),l=o("1dde"),m=l("splice"),d=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var o,r,l,m,p,g,b=i(this),w=s(b.length),C=a(e,w),_=arguments.length;if(0===_?o=r=0:1===_?(o=0,r=w-C):(o=_-2,r=f(d(n(t),0),w-C)),w+o-r>h)throw TypeError(v);for(l=c(b,r),m=0;m<r;m++)p=C+m,p in b&&u(l,m,b[p]);if(l.length=r,o<r){for(m=C;m<w-r;m++)p=m+r,g=m+o,p in b?b[g]=b[p]:delete b[g];for(m=w;m>w-r+o;m--)delete b[m-1]}else if(o>r)for(m=w-r;m>C;m--)p=m+r-1,g=m+o-1,p in b?b[g]=b[p]:delete b[g];for(m=0;m<o;m++)b[m+C]=arguments[m+2];return b.length=w-r+o,l}})},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,o){var r=o("0366"),a=o("44ad"),n=o("7b0b"),s=o("50c4"),i=o("65f0"),c=[].push,u=function(e){var t=1==e,o=2==e,u=3==e,l=4==e,m=6==e,d=7==e,f=5==e||m;return function(h,v,p,g){for(var b,w,C=n(h),_=a(C),y=r(v,p,3),k=s(_.length),x=0,N=g||i,R=t?N(h,k):o||d?N(h,0):void 0;k>x;x++)if((f||x in _)&&(b=_[x],w=y(b,x,C),e))if(t)R[x]=w;else if(w)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:c.call(R,b)}else switch(e){case 4:return!1;case 7:c.call(R,b)}return m?-1:u||l?l:R}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},eba6:function(e,t,o){}}]);
//# sourceMappingURL=chunk-2c15e702.f57f6393.js.map