(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c25637b","chunk-900bdfc0"],{1047:function(t,e,a){"use strict";a("ce72")},"159b":function(t,e,a){var r=a("da84"),o=a("fdbc"),s=a("17c2"),n=a("9112");for(var c in o){var i=r[c],u=i&&i.prototype;if(u&&u.forEach!==s)try{n(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,o=a("a640"),s=o("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,a){"use strict";var r=a("23e7"),o=a("5a34"),s=a("1d80"),n=a("ab13");r({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"2a93":function(t,e,a){},"328c":function(t,e,a){"use strict";a("2a93")},"37d3":function(t,e,a){"use strict";a("ec31")},"5a34":function(t,e,a){var r=a("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},a434:function(t,e,a){"use strict";var r=a("23e7"),o=a("23cb"),s=a("a691"),n=a("50c4"),c=a("7b0b"),i=a("65f0"),u=a("8418"),l=a("1dde"),d=l("splice"),m=Math.max,p=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var a,r,l,d,f,g,b=c(this),k=n(b.length),y=o(t,k),C=arguments.length;if(0===C?a=r=0:1===C?(a=0,r=k-y):(a=C-2,r=p(m(s(e),0),k-y)),k+a-r>v)throw TypeError(h);for(l=i(b,r),d=0;d<r;d++)f=y+d,f in b&&u(l,d,b[f]);if(l.length=r,a<r){for(d=y;d<k-r;d++)f=d+r,g=d+a,f in b?b[g]=b[f]:delete b[g];for(d=k;d>k-r+a;d--)delete b[d-1]}else if(a>r)for(d=k-r;d>y;d--)f=d+r-1,g=d+a-1,f in b?b[g]=b[f]:delete b[g];for(d=0;d<a;d++)b[d+y]=arguments[d+2];return b.length=k-r+a,l}})},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,a){var r=a("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},b727:function(t,e,a){var r=a("0366"),o=a("44ad"),s=a("7b0b"),n=a("50c4"),c=a("65f0"),i=[].push,u=function(t){var e=1==t,a=2==t,u=3==t,l=4==t,d=6==t,m=7==t,p=5==t||d;return function(v,h,f,g){for(var b,k,y=s(v),C=o(y),_=r(h,f,3),w=n(C.length),S=0,x=g||c,L=e?x(v,w):a||m?x(v,0):void 0;w>S;S++)if((p||S in C)&&(b=C[S],k=_(b,S,y),t))if(e)L[S]=k;else if(k)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:i.call(L,b)}else switch(t){case 4:return!1;case 7:i.call(L,b)}return d?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c52a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rooms-wrapepr"},[a("span",{staticClass:"back",on:{click:t.moveToBack}},[a("i",{staticClass:"fas fa-arrow-left"})]),a("div",{staticClass:"intro_title"},[t._v(" 당신은 오늘 어떤 마음 속 이야기를 나누고 싶나요? ")]),a("div",{staticClass:"background-image"}),a("Star"),a("div",{staticClass:"list-pop-up"},[a("div",{staticClass:"list-pop-up-inner-wrapper"},[a("div",{staticClass:"room-card"},[a("div",{staticClass:"room-card-front"},[a("div",{staticClass:"category-name"},[t._v(t._s(t.category_name))]),a("div",{staticClass:"healing_text"}),t.createRoomState?a("div",{staticClass:"create-chat-room"},[t._v(" 상담소 열기 ")]):t._e()]),a("div",{staticClass:"room-card-back"},[a("h1",[t._v("상담소 열기")]),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.roomName,expression:"roomName"}],attrs:{type:"text",placeholder:"상담소 이름을 적어주세요"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value)}}}),t._m(0),a("h2",[t._v("얼굴 공개 여부")]),a("div",{staticClass:"public-wrapper"},[a("div",{staticClass:"public public-btn",on:{click:t.public}},[t._v("공개")]),a("div",{staticClass:"non-public public-btn public-active",on:{click:t.nonpublic}},[t._v(" 비공개 ")])]),a("h2",[t._v("상담 분야 소개")]),a("div",{staticClass:"room-category-select"},t._l(t.categories,(function(e,r){return a("div",{key:r,staticClass:"room-category",attrs:{"data-value":"1","data-value":r+1}},[t._v(" "+t._s(t.categories[r])+" ")])})),0),a("div",{staticClass:"room-create-btn"},[a("div",{staticClass:"create-room-btn public-btn",on:{click:function(e){return e.preventDefault(),t.checkRoomName(e)}}},[t._v(" 개설하기 ")]),a("div",{staticClass:"exit-room-create public-btn"},[t._v("취소")])])])])]),a("div",{staticClass:"room-list"},[a("div",{staticClass:"room-list-wrapper"},t._l(t.displayRooms,(function(e,r){return a("div",{key:r,staticClass:"room-item"},[a("div",{staticClass:"room-item-left"},[a("h1",{staticClass:"room-name"},[t._v(t._s(e.name))]),a("p",[t._v("얼굴 공개 여부 : "+t._s(e.publicState?"공개":"비공개"))]),a("p",[t._v("참가자 허용 인원 : "+t._s(e.capacity)+" 명")]),a("div",{staticClass:"room-category-flag-wrapper"},t._l(e.category,(function(e,r){return a("span",{key:r,staticClass:"room-category-flag",style:{backgroundColor:t.tagColors[r]}},[t._v(t._s(t.categories[e]))])})),0),a("div",{staticClass:"room-btn"},[t.uid===e.hostID?a("span",{on:{click:function(a){return t.deleteRoom(e.id,r)}}},[t._v("삭제하기")]):t._e()])]),a("div",{staticClass:"room-item-right"},[a("div",{staticClass:"enter-room-btn",on:{click:function(a){return t.moveToCheckIn(e.hostID,e.id,e.name)}}},[a("span",[t._v("입장")]),a("span",[t._v("하기")])])])])})),0)]),a("div",{staticClass:"room-list-eixt-btn"},[t._v(" 나가기 ")])])]),a("div",{staticClass:"card-main-wrapper"},[a("div",{staticClass:"card-main-board"}),a("div",{staticClass:"card-inner-wrapper"},t._l(t.categories,(function(e,r){return a("div",{key:r,staticClass:"card"},[a("div",{staticClass:"card-flip"},[a("div",{staticClass:"card-inner"},[a("div",{staticClass:"symbole"},[t._v(" "+t._s(e)+" ")])]),a("div",{staticClass:"card-outer",style:{backgroundColor:t.tagColors[r]},attrs:{"data-value":r+1},on:{click:function(e){return t.select(r)}}},[a("div",{staticClass:"outer_symbole"}),a("span",{staticClass:"symbol-1"}),a("h2",[t._v("입장하기")])])])])})),0)]),a("div",{staticClass:"prev-button button"},[t._v("이전")]),a("div",{staticClass:"next-button button"},[t._v("다음")]),t.approveState?a("approve",{staticClass:"aprrove-pop-up",attrs:{user:t.user,roomId:t.roomId,hostId:t.hostId,roomName:t.roomName},on:{exitRoom:t.exitCheckin}}):t._e(),t.checkinState?a("check-in-page",{staticClass:"check-in-pop-up",attrs:{user:t.user,roomId:t.roomId,hostId:t.hostId,roomName:t.roomName},on:{showApprove:t.showApprove}}):t._e(),t.checkinState&&!t.approveState?a("div",{staticClass:"checkin-exit",on:{click:t.exitCheckin}},[t._v(" 떠나기 ")]):t._e()],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"capacity-wrapper"},[a("h2",[t._v("참가 허용 인원")]),a("div",{staticClass:"capacity-count"},[a("div",{staticClass:"count-btn count-plus"},[t._v("더하기")]),a("div",{staticClass:"count-num"},[t._v("1")]),a("div",{staticClass:"count-btn count-minus"},[t._v("빼기")])]),a("p",{staticClass:"capacity-warning-over"},[t._v(" 최대 인원은 4명 이하 입니다. ")]),a("p",{staticClass:"capacity-warning-less"},[t._v(" 최초 인원은 1명 이상 입니다. ")])])}],s=a("1da1"),n=(a("caad"),a("2532"),a("159b"),a("b0c0"),a("99af"),a("a434"),a("96cf"),a("53f2")),c=a("c5a7"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"approve-wrapper"},[a("div",{staticClass:"approve-inner-wrapper"},[a("div",{staticClass:"room-name-header"},[a("div",{staticClass:"room_name"},[t._v(t._s(t.roomName))]),a("div",{staticClass:"buttons"},[a("form",{staticClass:"approve-form",on:{submit:function(t){t.preventDefault()}}},[a("input",{attrs:{type:"hidden",name:"roomId",value:"something"}}),a("input",{attrs:{type:"hidden",name:"userId",value:"something"}}),a("input",{attrs:{type:"hidden",name:"roomName",value:"something"}}),!t.attendeeJoined&&t.attendeeApproved?a("button",{staticClass:"join-btn",on:{click:t.doJoin}},[t._v(" 입장하기 ")]):t._e(),!t.attendeeJoined&&t.attendeeApproved?a("button",{staticClass:"leave-btn",on:{click:function(e){return t.doLeave(t.user.uid)}}},[t._v(" 나가기 ")]):t._e()])])]),t.user&&t.user.uid==t.hostId||t.attendeeApproved?a("div",{staticClass:"attendee-list-wrapper"},[a("div",{staticClass:"attendee-attend"},[a("h4",{},[t._v("* 참가자")]),a("ul",{},t._l(t.attendeesApprovedArr,(function(e,r){return a("li",{key:e.id},[e.id!=t.hostId?a("div",{staticClass:"attendee-nickname"},[t._v(" 익명이"+t._s(r+1)+" ")]):a("div",{staticClass:"attendee-nickname"},[t._v("담이")]),t.user&&t.user.uid==t.hostId?a("a",{staticClass:"approve-btn-attend",attrs:{type:"button",title:"Approve attendee"},on:{click:function(a){return t.toggleApproval(e.id)}}},[t._v(" 내보내기 ")]):t._e()])})),0)]),t.user&&t.user.uid==t.hostId?a("div",{staticClass:"attendee-wait"},[a("h4",{},[t._v("* 참가 대기자")]),a("ul",{},t._l(t.attendeesPendingArr,(function(e,r){return a("li",{key:e.id},[e.id!=t.hostId?a("div",{staticClass:"attendee-nickname"},[t._v(" 익명이"+t._s(r+1)+" ")]):a("div",{staticClass:"attendee-nickname"},[t._v("담이")]),a("span",[a("a",{staticClass:"approve-btn-attend",attrs:{type:"button",title:"Approve attendee"},on:{click:function(a){return t.toggleApproval(e.id)}}},[t._v("참가승인 ")]),a("a",{staticClass:"approve-btn-delete",attrs:{type:"button",title:"Delete Attendee"},on:{click:function(a){return t.deleteAttendee(e.id)}}},[t._v("참가거절")])])])})),0)]):t._e()]):a("div",[a("p",{staticClass:"lead"},[t._v(" 안녕하세요! 현재 참가 요청에 대한 방장의 승인이 진행 중에 있습니다. 잠시만 기다려주세요! ")]),a("div",{staticClass:"leave_approve",on:{click:function(e){return t.doLeave(t.user.uid)}}},[t._v(" 나가기 ")])])])])},u=[],l=(a("bc3a"),a("17e1")),d={data:function(){return{hostNickName:null,attendeesPendingArr:[],attendeesApprovedArr:[],attendeeApproved:!1,attendeeJoined:!1,roomPublic:!1}},components:{},methods:{toggleApproval:function(t){if(this.user&&this.user.uid==this.hostId){var e=l["a"].collection("users").doc(this.user.uid).collection("rooms").doc(this.roomId).collection("attendees").doc(t);e.get().then((function(t){var a=t.data().approved;a?e.update({approved:!a}):e.update({approved:!0})}))}},deleteAttendee:function(t){(this.user&&this.user.uid==this.hostId||this.user&&this.user.uid==t)&&l["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId).collection("attendees").doc(t).delete()},doJoin:function(){console.log("join");var t=document.querySelector(".approve-form");this.roomPublic?t.action="https://live.porest.kr/":t.action="https://live.porest.kr/ar",t.method="POST",t.target="pop",t.roomId.value=this.roomId,t.userId.value=this.user.uid,t.roomName.value=this.roomName,window.open("","pop"),t.submit()},doLeave:function(t){this.deleteAttendee(t),this.attendeeJoined=!1,this.$emit("exitRoom")}},props:["user","roomId","roomName","hostId"],mounted:function(){var t=this,e=l["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId);e.get().then((function(e){e.exists||(alert("존재하지 않는 상담방입니다."),t.$router.push("/all/rooms"))})),e.onSnapshot((function(e){t.roomPublic=e.data().publicState})),e.collection("attendees").onSnapshot((function(e){var a=[],r=[];e.forEach((function(e){t.hostId===e.id&&(t.hostNickName="담이"),t.user&&t.user.uid==e.id&&!0,e.data().approved?(t.user.uid==e.id&&(t.attendeeApproved=!0),r.push({id:e.id,approved:e.data().approved})):(t.user.uid==e.id&&(t.attendeeApproved=!1),a.push({id:e.id,approved:e.data().approved}))})),t.attendeesPendingArr=a,t.attendeesApprovedArr=r}))},created:function(){var t=this.$store.getters.getAuthToken;""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))}},m=d,p=(a("1047"),a("2877")),v=Object(p["a"])(m,i,u,!1,null,"d198cda4",null),h=v.exports,f=function(){var t,e=0,a=0,r=0,o=document.querySelector(".card-main-wrapper"),s=document.querySelectorAll(".card"),n=document.querySelector(".prev-button"),c=document.querySelector(".next-button"),i=document.querySelector(".room-list-eixt-btn"),u=document.querySelector(".list-pop-up"),l=document.querySelector(".create-chat-room"),d=document.querySelector(".room-card-front"),m=document.querySelector(".room-card-back"),p=document.querySelector(".exit-room-create"),v=document.querySelector(".public"),h=document.querySelector(".non-public"),f=document.querySelector(".room-category-select"),g=document.querySelectorAll(".room-category"),b=(document.querySelector(".category-name"),document.querySelector(".intro_title"));document.querySelector(".front-card-img");e=s.length,t=360/e;for(var k=0;k<e;k++)s[k].style.transform="rotate(".concat(t*k,"deg) translateY(-350px)");function y(){0==a?a=e-1:a--,r+=t,_()}function C(){a==e-1?a=0:a++,r-=t,_()}function _(){for(var a=0;a<e;a++)s[a].style.transform="rotate(".concat(r+t*a,"deg) translateY(-350px)")}function w(t){if(t.target.classList.contains("card-outer")){var e=t.target,a=parseInt(t.target.dataset.value,10)-1;g.forEach((function(t){t.dataset.value==a+1&&t.classList.add("room-category-selected")})),b.classList.add("show"),o.classList.add("bottom"),u.classList.add("list-pop-up-show"),e.classList.add("card-show"),n.classList.add("button-hide"),c.classList.add("button-hide")}}function S(){u.classList.remove("list-pop-up-show"),o.classList.remove("bottom"),n.classList.remove("button-hide"),c.classList.remove("button-hide"),m.classList.remove("room-card-back-fade"),d.classList.remove("room-card-front-fade"),b.classList.remove("show"),g.forEach((function(t){t.classList.remove("room-category-selected")}))}function x(){m.classList.add("room-card-back-fade"),d.classList.add("room-card-front-fade")}function L(){m.classList.remove("room-card-back-fade"),d.classList.remove("room-card-front-fade")}function A(){v.classList.add("public-active"),h.classList.remove("public-active")}function I(){v.classList.remove("public-active"),h.classList.add("public-active")}n.addEventListener("click",y),c.addEventListener("click",C),p.addEventListener("click",L),l&&l.addEventListener("click",x),i.addEventListener("click",S),o.addEventListener("click",w),v.addEventListener("click",A),h.addEventListener("click",I);var E=1,N=document.querySelector(".count-plus"),R=document.querySelector(".count-minus"),q=document.querySelector(".count-num"),T=document.querySelector(".capacity-warning-over"),D=document.querySelector(".capacity-warning-less");function $(){N.classList.add("click"),E<=3?(E++,q.innerText=E,T.classList.remove("capacity-warning-show"),D.classList.remove("capacity-warning-show")):T.classList.add("capacity-warning-show"),setTimeout((function(){N.classList.remove("click")}),300)}function O(){R.classList.add("click"),E>=2?(E--,q.innerText=E,D.classList.remove("capacity-warning-show"),T.classList.remove("capacity-warning-show")):D.classList.add("capacity-warning-show"),setTimeout((function(){R.classList.remove("click")}),300)}function j(t){t.target.classList.contains("room-category")&&t.target.classList.toggle("room-category-selected")}N.addEventListener("click",$),R.addEventListener("click",O),f.addEventListener("click",j)},g=a("260b"),b=(a("ea7b"),a("3786")),k={name:"Allroompage",data:function(){return{roomName:null,temperature:this.$store.state.temperature,uid:this.$store.state.uid,rooms:[],addState:!1,roomNameCheck:!1,capacity:null,publicState:!1,roomDesc:null,selectedCategory:[],roomId:null,hostId:null,checkinState:!1,approveState:!1,category_name:null,displayRooms:[],login_state:!1,selected:null,createRoomState:!1,tagColors:["#004e66","#EE7785","#fab1ce","#84B1ED","#ABBEEC","#F4C464","#bf209f","#8CC1D3"],imgUrl:"@/assets/svg/tarot5.svg",categories:["학교 생활","직장 생활","학업 및 진로","자녀 양육","대인 관계","심리 및 정서","연애","취업"],healingTexts:["  그대는 충분히 반짝거리기에, <br />그대가 주인공인 삶을 살아줬으면 한다.","잠들지 않아도 꿈꾸던 널,<br> 잊지 않기를 바란다.","같은 실수를 두려워하되, 새로운 실수를 <br>두려워하지 마라. 실수는 곧 경험이다.","자녀들에게는 어머니보다 더 훌륭한 <br> 하늘로부터 받은 선물은 없다.","당신은 달 같은 존재예요. <br> 세상에 하나뿐인, 사라져서는 안 될 <br> 소중한 존재","한 겨울에도 움트는 봄이 있는가 하면, <br> 밤의 장작 뒤에도 미소 짓는 새벽이 있다.","사랑을 이야기하면 사랑을 하게 된다.","준비와 기회가 조우할 때 일어나는 것, <br> 그것이 바로 행운이다."],healingText:""}},components:{CheckInPage:c["default"],Approve:h,Star:n["a"]},props:["user"],created:function(){var t=this.$store.getters.getAuthToken;this.temperature>=60&&(this.createRoomState=!0),""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(f(),0!=t.rooms.length){e.next=4;break}return e.next=4,t.loadData();case 4:case"end":return e.stop()}}),e)})))()},methods:{public:function(){this.publicState=!0},nonpublic:function(){this.publicState=!1},moveToBack:function(){this.$router.go(-1)},select:function(t){this.selected=t;var e=document.querySelector(".healing_text");e.innerHTML=this.healingTexts[t],this.displayRooms=[],this.category_name=this.categories[t];for(var a=0;a<this.rooms.length;a++)this.rooms[a].category.includes(t)&&this.displayRooms.unshift(this.rooms[a]);this.displayRooms.reverse()},showApprove:function(){this.approveState=!0},exitCheckin:function(){this.checkinState=!1,this.approveState=!1},checkRoomName:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=t.roomName&&""!=t.roomName){e.next=3;break}return alert("방 이름은 필수 입력 사항입니다."),e.abrupt("return");case 3:return e.next=5,t.rooms.forEach((function(e){e.name==t.roomName&&(t.roomNameCheck=!0)}));case 5:t.roomNameCheck?t.roomName="":t.getCategory();case 6:case"end":return e.stop()}}),e)})))()},getCategory:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=document.querySelectorAll(".room-category"),e.next=3,a.forEach((function(e){e.classList.contains("room-category-selected")&&t.selectedCategory.push(e.dataset.value-1)}));case 3:t.verificationTemperature();case 4:case"end":return e.stop()}}),e)})))()},verificationTemperature:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["g"])({temperature:t.$store.state.temperature});case 2:a=e.sent,a.status&&!a.data.isSameTemp?alert("데이터 맘대로 변경하지 말아주세요!😡"):a.status?t.addRoom():alert("방을 생성할 수 없습니다.");case 4:case"end":return e.stop()}}),e)})))()},addRoom:function(){var t=this,e=new Date,a=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),s=e.getHours(),n=e.getMinutes(),c=e.getSeconds(),i=document.querySelector(".count-num");this.addState=!0;var u=l["a"].collection("users").doc(this.user.uid);u.set({name:this.user.uid}),u.collection("rooms").add({name:this.roomName,hostId:this.user.uid,capacity:i.innerText,publicState:this.publicState,category:this.selectedCategory,createdDate:"".concat(a,"-").concat(r,"-").concat(o,", ").concat(s,":").concat(n,":").concat(c),createdAt:g["a"].firestore.FieldValue.serverTimestamp()}).then((function(){t.roomName="",t.selectedCategory=[],t.loadData()}))},deleteRoom:function(t,e){var a=this;l["a"].collection("users").doc(this.user.uid).collection("rooms").doc(t).delete(),this.displayRooms.splice(e,1),this.rooms.forEach((function(e,r){e.id==t&&a.rooms.splice(r,1)}))},moveToCheckIn:function(t,e,a){this.checkinState=!0,this.uid||(this.uid="none"),this.hostId=t,this.roomId=e,this.roomName=a},loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=l["a"].collection("users"),e.next=3,a.get().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.doc(r.id).collection("rooms").onSnapshot(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.forEach((function(e){var a={id:e.id,hostID:r.id,name:e.data().name,createdAt:e.data().createdDate,publicState:e.data().publicState,category:e.data().category,capacity:e.data().capacity};if(0!=t.rooms.length){for(var o=!1,s=0;s<t.rooms.length;s++)t.rooms[s]["id"]===e.id&&(o=!0);o||t.rooms.unshift(a)}else t.rooms.push(a)}));case 2:t.rooms.sort((function(t,e){t.createdAt,e.createdAt})),null!=t.selected&&t.select(t.selected);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()}}},y=k,C=(a("37d3"),Object(p["a"])(y,r,o,!1,null,"53eceb30",null));e["default"]=C.exports},c5a7:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkin-wrapper"},[a("div",{staticClass:"checkin-inner-wrapper"},[a("h1",{staticClass:"room-name"},[t._v(t._s(t.roomName))]),t.user?a("div",{staticClass:"for-user"},[a("p",{staticClass:"checkin-warning"},[t._v("잠깐!")]),a("p",{staticClass:"checkin-warning"},[t._v(" 화상채팅은 웹캠을 이용한 서비스로 개인적인 공간의 노출이 발생할 수 있습니다. 비디오를 시작하기 전 주변에 개인적인 정보를 노출할 수 있는 위험 요소를 다시 한번 확인해 주시기 바랍니다. 또한, 개인적인 정보를 요구하는 등의 행위는 불법임으로 즉각 신고 조치를 취해주십시오. 신고된 사용자는 저희 POREST가 법적 조취를 취할 것입니다. 개인적인 부주의로 인한 개인정보 노출에 대해서는 POREST가 책임지지 않습니다. ")]),a("div",{staticClass:"warning-checkbox"},[a("p",[t._v("위의 내용을 확인했습니다.")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkState,expression:"checkState"}],staticClass:"checkbox",attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(t.checkState)?t._i(t.checkState,null)>-1:t.checkState},on:{change:function(e){var a=t.checkState,r=e.target,o=!!r.checked;if(Array.isArray(a)){var s=null,n=t._i(a,s);r.checked?n<0&&(t.checkState=a.concat([s])):n>-1&&(t.checkState=a.slice(0,n).concat(a.slice(n+1)))}else t.checkState=o}}})]),a("span",{staticClass:"warning-checkbox-nonactive"},[t._v("확인 여부를 체크해주세요.")])]):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleCheckIn(e)}}},[t.user?a("div",{staticClass:"card-body"},[t._m(0)]):a("div",{staticClass:"non-user"},[a("h1",{},[t._v("죄송합니다.")]),a("p",{},[t._v(" 로그인한 유저만 입장이 가능합니다. "),a("br"),a("router-link",{attrs:{to:"/login"}},[t._v("로그인")]),t._v(" 혹은 "),a("router-link",{attrs:{to:"/register"}},[t._v("회원가입")]),t._v("을 진행 후 이용해 주세요. "),a("br"),t._v(" 감사합니다. ")],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("button",{staticClass:"checkin-btn",attrs:{type:"submit"}},[t._v("입장하기")])])}],s=a("260b"),n=(a("b7aa"),a("17e1")),c={name:"Checkinpage",data:function(){return{nickName:null,checkState:!1}},props:["user","roomId","roomName","hostId"],methods:{handleCheckIn:function(){var t=this,e=document.querySelector(".warning-checkbox-nonactive");if(this.checkState){e.classList.remove("warning-show");var a=n["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId);a.get().then((function(e){e.exists&&a.collection("attendees").doc(t.user.uid).set({createdAt:s["a"].firestore.FieldValue.serverTimestamp()}).then((function(){t.$emit("showApprove")}))}))}else e.classList.add("warning-show")}},created:function(){var t=this.$store.getters.getAuthToken;""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))},mounted:function(){var t=this;s["a"].auth().onAuthStateChanged((function(e){e&&(t.nickName=e.nickName)}))}},i=c,u=(a("328c"),a("2877")),l=Object(u["a"])(i,r,o,!1,null,"2be3389a",null);e["default"]=l.exports},caad:function(t,e,a){"use strict";var r=a("23e7"),o=a("4d64").includes,s=a("44d2");r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},ce72:function(t,e,a){},ec31:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4c25637b.72a7cc70.js.map