(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f05dcdc"],{"159b":function(e,t,o){var n=o("da84"),s=o("fdbc"),a=o("17c2"),i=o("9112");for(var r in s){var d=n[r],c=d&&d.prototype;if(c&&c.forEach!==a)try{i(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(e,t,o){"use strict";var n=o("b727").forEach,s=o("a640"),a=s("forEach");e.exports=a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"3f4c":function(e,t,o){},a640:function(e,t,o){"use strict";var n=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&n((function(){o.call(null,t||function(){throw 1},1)}))}},a94b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"approve-wrapper"},[o("div",{staticClass:"approve-inner-wrapper"},[o("div",{staticClass:"room-name-header"},[o("div",{staticClass:"room_name"},[e._v(e._s(e.roomName))]),o("div",{staticClass:"buttons"},[o("form",{staticClass:"approve-form",on:{submit:function(e){e.preventDefault()}}},[o("input",{attrs:{type:"hidden",name:"roomId",value:"something"}}),o("input",{attrs:{type:"hidden",name:"userId",value:"something"}}),o("input",{attrs:{type:"hidden",name:"roomName",value:"something"}}),!e.attendeeJoined&&e.attendeeApproved?o("button",{staticClass:"join-btn",on:{click:e.doJoin}},[e._v(" 입장하기 ")]):e._e(),!e.attendeeJoined&&e.attendeeApproved?o("button",{staticClass:"leave-btn",on:{click:function(t){return e.doLeave(e.user.uid)}}},[e._v(" 나가기 ")]):e._e()])])]),e.user&&e.user.uid==e.hostId||e.attendeeApproved?o("div",{staticClass:"attendee-list-wrapper"},[o("div",{staticClass:"attendee-attend"},[o("h4",{},[e._v("* 참가자")]),o("ul",{},e._l(e.attendeesApprovedArr,(function(t,n){return o("li",{key:t.id},[t.id!=e.hostId?o("div",{staticClass:"attendee-nickname"},[e._v("익명이"+e._s(n+1))]):o("div",{staticClass:"attendee-nickname"},[e._v("담이")]),e.user&&e.user.uid==e.hostId?o("a",{staticClass:"approve-btn-attend",attrs:{type:"button",title:"Approve attendee"},on:{click:function(o){return e.toggleApproval(t.id)}}},[e._v(" 내보내기 ")]):e._e()])})),0)]),e.user&&e.user.uid==e.hostId?o("div",{staticClass:"attendee-wait"},[o("h4",{},[e._v("* 참가 대기자")]),o("ul",{},e._l(e.attendeesPendingArr,(function(t,n){return o("li",{key:t.id},[t.id!=e.hostId?o("div",{staticClass:"attendee-nickname"},[e._v("익명이"+e._s(n+1))]):o("div",{staticClass:"attendee-nickname"},[e._v("담이")]),o("span",[o("a",{staticClass:"approve-btn-attend",attrs:{type:"button",title:"Approve attendee"},on:{click:function(o){return e.toggleApproval(t.id)}}},[e._v("참가승인 ")]),o("a",{staticClass:"approve-btn-delete",attrs:{type:"button",title:"Delete Attendee"},on:{click:function(o){return e.deleteAttendee(t.id)}}},[e._v("참가거절")])])])})),0)]):e._e()]):o("div",[o("p",{staticClass:"lead"},[e._v(" 안녕하세요! 현재 참가 요청에 대한 방장의 승인이 진행 중에 있습니다. 잠시만 기다려주세요! ")]),o("div",{staticClass:"leave_approve",on:{click:function(t){return e.doLeave(e.user.uid)}}},[e._v(" 나가기 ")])])])])},s=[],a=(o("159b"),o("bc3a"),o("17e1")),i={data:function(){return{hostNickName:null,attendeesPendingArr:[],attendeesApprovedArr:[],attendeeApproved:!1,attendeeJoined:!1,roomPublic:!1}},components:{},methods:{toggleApproval:function(e){if(this.user&&this.user.uid==this.hostId){var t=a["a"].collection("users").doc(this.user.uid).collection("rooms").doc(this.roomId).collection("attendees").doc(e);t.get().then((function(e){var o=e.data().approved;console.log("approved",o),o?t.update({approved:!o}):t.update({approved:!0})}))}},deleteAttendee:function(e){console.log("삭제한다"),(this.user&&this.user.uid==this.hostId||this.user&&this.user.uid==e)&&(a["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId).collection("attendees").doc(e).delete(),console.log("삭제 완료스"))},doJoin:function(){var e=document.querySelector(".approve-form");console.log(this.roomPublic),this.roomPublic?e.action="http://localhost:3000/":e.action="http://localhost:3000/ar",e.method="POST",e.target="pop",e.roomId.value=this.roomId,e.userId.value=this.user.uid,e.roomName.value=this.roomName,window.open("","pop"),e.submit()},doLeave:function(e){console.log(e,"삭제해야한다"),this.deleteAttendee(e),this.attendeeJoined=!1,this.$emit("exitRoom")}},props:["user","roomId","roomName","hostId"],mounted:function(){var e=this;console.log("this is approve page",this.user,this.roomId,this.roomName,this.hostId);var t=a["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId);t.get().then((function(t){t.exists||(alert("존재하지 않는 상담방입니다."),e.$router.push("/all/rooms"))})),console.log("this.rooms"),t.onSnapshot((function(t){e.roomPublic=t.data().publicState})),t.collection("attendees").onSnapshot((function(t){var o=[],n=[];t.forEach((function(t){e.hostId===t.id&&(e.hostNickName="담이"),e.user&&e.user.uid==t.id&&!0,t.data().approved?(e.user.uid==t.id&&(e.attendeeApproved=!0),n.push({id:t.id,approved:t.data().approved})):(e.user.uid==t.id&&(e.attendeeApproved=!1),o.push({id:t.id,approved:t.data().approved}))})),e.attendeesPendingArr=o,e.attendeesApprovedArr=n}))}},r=i,d=(o("b972"),o("2877")),c=Object(d["a"])(r,n,s,!1,null,"657c6e0e",null);t["default"]=c.exports},b727:function(e,t,o){var n=o("0366"),s=o("44ad"),a=o("7b0b"),i=o("50c4"),r=o("65f0"),d=[].push,c=function(e){var t=1==e,o=2==e,c=3==e,u=4==e,l=6==e,p=7==e,v=5==e||l;return function(h,f,m,b){for(var _,g,A=a(h),I=s(A),C=n(f,m,3),k=i(I.length),w=0,y=b||r,N=t?y(h,k):o||p?y(h,0):void 0;k>w;w++)if((v||w in I)&&(_=I[w],g=C(_,w,A),e))if(t)N[w]=g;else if(g)switch(e){case 3:return!0;case 5:return _;case 6:return w;case 2:d.call(N,_)}else switch(e){case 4:return!1;case 7:d.call(N,_)}return l?-1:c||u?u:N}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},b972:function(e,t,o){"use strict";o("3f4c")}}]);
//# sourceMappingURL=chunk-0f05dcdc.fe4a230f.js.map