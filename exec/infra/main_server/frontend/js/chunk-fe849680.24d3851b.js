(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe849680"],{"0ad1":function(t,e,s){"use strict";s("30fe")},"0e35":function(t,e,s){"use strict";s("b732")},"30fe":function(t,e,s){},"5cfe":function(t,e,s){"use strict";s("81b0")},"71ea":function(t,e,s){"use strict";s.d(e,"b",(function(){return r})),s.d(e,"d",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return c}));var n=s("365c"),r=function(){return n["b"].get("/stories").then((function(t){return t.data}))},i=function(t){return n["b"].post("/stories",t)},a=function(t){return n["b"].post("/stories/".concat(t)).then((function(t){return t.data}))},c=function(){return n["b"].get("/stories/candidates").then((function(t){return t.data}))}},"81b0":function(t,e,s){},"8d70":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"received_mail_main_wrapper"},[s("div",{staticClass:"received_mail_inner_wrapper"},[s("section",{staticClass:"received_mail_inner_left"},[s("div",{staticClass:"section_header"},[s("div",{staticClass:"header_btn",on:{click:function(e){return t.openUserBoard(!0)}}},[t._v("위로 받기")]),s("div",{staticClass:"header_btn",on:{click:function(e){return t.openUserBoard(!1)}}},[t._v("위로 보내기")])]),s("div",{staticClass:"section_body"},[t.viewStoryState?s("my-story-list"):s("my-counsel-list")],1)]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"received_mail_inner_right"},[s("div",{staticClass:"write_reply"})])}],i=s("1da1"),a=(s("96cf"),s("71ea")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"section_body_story_list send_list"},t._l([1,2,3,4,5,6,7,8,9,10],(function(e,n){return s("li",{key:n,staticClass:"story_item"},[t._m(0,!0),t._m(1,!0),s("p",{staticClass:"date"},[t._v("재답장 수신 날짜 예시) 2021. 05. 11")])])})),0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"story_header"},[s("h1",{staticClass:"story_title"},[t._v("사연 제목 위치")]),s("div",{staticClass:"header_counsel"},[s("small",[t._v("작성자")]),t._v(" 익명의 토끼")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"story_body"},[s("p",[t._v(" 내가 보낸 답장에 대한 재답장 제목 위치 ")])])}],l={name:"Mycounsellist"},u=l,_=(s("0ad1"),s("2877")),d=Object(_["a"])(u,c,o,!1,null,"02e36929",null),f=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"section_body_story_list story_list"},t._l([1,2,3,4,5,6,7,8,9],(function(e,n){return s("li",{key:n,staticClass:"story_item"},[t._m(0,!0),s("div",{staticClass:"story_body"},[s("div",{staticClass:"received_reply"},[s("div",{staticClass:"received_reply_num"},[t._v("새로운 답장 3 통")]),s("div",{staticClass:"reply_users_accodian_open",on:{click:function(e){return t.openUsers(n)}}},[t._v("열기")])]),t.openUsersState==n?s("ul",{staticClass:"reply_users"},t._l(t.replyArr,(function(e,n){return s("li",{key:n,staticClass:"reply_user"},[t._m(1,!0),s("p",[t._v("익명의 토끼가 보낸 답장의 제목")])])})),0):t._e()])])})),0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"story_header"},[s("h1",{staticClass:"story_title"},[t._v("원시 사연 제목 위치")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply_user_header"},[s("h1",[t._v("익명의 토끼")]),s("div",{staticClass:"date"},[t._v("재답장 수신 날짜")])])}],y={name:"Mystroylist",data:function(){return{replyArr:[1,2,3,4,5,6,7,8,9],openUsersState:-1}},methods:{openUsers:function(t){this.openUsersState==t?this.openUsersState=-1:this.openUsersState=t}}},h=y,m=(s("5cfe"),Object(_["a"])(h,v,p,!1,null,"5aa934e0",null)),C=m.exports,b=s("53f2"),w={name:"MyReceivedMailPage",data:function(){return{stories:null,viewStoryState:!0}},components:{Star:b["a"],MyCounselList:f,MyStoryList:C},methods:{goToLetterReply:function(){this.$router.push({name:"LetterReply"})},getMyStories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])();case 2:t.stories=e.sent;case 3:case"end":return e.stop()}}),e)})))()},openUserBoard:function(t){this.viewStoryState=t}},mounted:function(){console.log(this.stories)}},S=w,k=(s("0e35"),Object(_["a"])(S,n,r,!1,null,"1ed8921a",null));e["default"]=k.exports},b732:function(t,e,s){}}]);
//# sourceMappingURL=chunk-fe849680.24d3851b.js.map