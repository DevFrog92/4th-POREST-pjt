(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c58893ce"],{"09df":function(t,e,s){"use strict";s("2e52")},"0cd2":function(t,e,s){"use strict";s("ee8e")},"1c7c":function(t,e,s){"use strict";s("3255")},"20f2":function(t,e,s){},"2e52":function(t,e,s){},3255:function(t,e,s){},3720:function(t,e,s){"use strict";s("20f2")},"71ea":function(t,e,s){"use strict";s.d(e,"b",(function(){return r})),s.d(e,"e",(function(){return a})),s.d(e,"c",(function(){return i})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return l}));var n=s("365c"),r=function(){return n["b"].get("/stories").then((function(t){return t.data}))},a=function(t){return n["b"].post("/stories",t)},i=function(t){return n["b"].get("/stories/".concat(t,"/counsels")).then((function(t){return t.data}))},o=function(t){return n["b"].post("/stories/".concat(t)).then((function(t){return t.data}))},l=function(){return n["b"].get("/stories/candidates").then((function(t){return t.data}))}},"8d70":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"received_mail_main_wrapper"},[s("div",{staticClass:"received_mail_inner_wrapper"},[s("section",{staticClass:"received_mail_inner_left"},[s("div",{staticClass:"section_header"},[s("div",{staticClass:"header_btn",on:{click:function(e){return t.openUserBoard(!0)}}},[t._v("위로 받기")]),s("div",{staticClass:"header_btn",on:{click:function(e){return t.openUserBoard(!1)}}},[t._v("위로 보내기")])]),s("div",{staticClass:"section_body"},[t.viewStoryState?s("my-story-list"):s("my-counsel-list")],1)]),s("section",{staticClass:"received_mail_inner_right"},[s("div",{staticClass:"root_mail_header"}),s("div",{staticClass:"write_reply"},[s("div",{staticClass:"letter_paper"},[s("div",{staticClass:"letter_form_wrapper"},[s("div",{staticClass:"paper"},[s("div",{staticClass:"paper_header",domProps:{textContent:t._s(t.getTitle())}}),s("div",{staticClass:"paper_content",domProps:{textContent:t._s(t.getContent())}}),t._m(0)])]),s("div",{staticClass:"letter_form_wrapper"},[s("div",{staticClass:"paper"},[s("div",{staticClass:"paper_header"},[t._v("제목 작성하기 "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.letter.body.title,expression:"letter.body.title"}],attrs:{type:"text"},domProps:{value:t.letter.body.title},on:{input:function(e){e.target.composing||t.$set(t.letter.body,"title",e.target.value)}}})]),s("div",{staticClass:"paper_content"},[t._v(" 내용 작성하기 "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.letter.body.content,expression:"letter.body.content"}],attrs:{name:"",id:""},domProps:{value:t.letter.body.content},on:{input:function(e){e.target.composing||t.$set(t.letter.body,"content",e.target.value)}}})]),s("div",{staticClass:"paper_footer"},[s("div",{staticClass:"ban_btn",on:{click:t.ReplyForm}},[t._v("답장 보내기")])])])])])])]),s("div",{staticClass:"box-wrapper"},[s("div",{staticClass:"box",on:{click:t.openAll}},[t._m(1),s("div",{staticClass:"side side-2"},[t._v("모든 편지보기")]),s("div",{staticClass:"side side-3"}),s("div",{staticClass:"side side-4"}),s("div",{staticClass:"side side-5"}),s("div",{staticClass:"side side-6"}),s("span",{staticClass:"box_papers"}),s("span",{staticClass:"box_papers"}),s("span",{staticClass:"box_papers"}),s("span",{staticClass:"box_papers"}),s("span",{staticClass:"box_papers"}),s("span",{staticClass:"box_papers"})])])]),t.openAllLetters?s("all-letters",{staticClass:"all_letters",on:{exitAll:t.exitAll}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paper_footer"},[s("div",{staticClass:"ban_btn"},[t._v("신고")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"side-1"},[s("div",{staticClass:"side inner-side flap-1"}),s("div",{staticClass:"side inner-side flap-2"})])}],a=s("1da1"),i=(s("96cf"),s("a3a9")),o=s("365c"),l=function(){return o["b"].get("/counsels").then((function(t){return t.data}))},c=function(t){return o["b"].get("/counsels/".concat(t)).then((function(t){return t.data}))},u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"section_body_story_list send_list"},t._l(t.counselList,(function(e,n){return s("li",{key:n,staticClass:"story_item",on:{click:function(s){return t.openCounsel(e.counselId)}}},[s("div",{staticClass:"story_header"},[s("h1",{staticClass:"story_title",domProps:{textContent:t._s(e.title)}}),s("div",{staticClass:"header_counsel",domProps:{textContent:t._s(e.writerNickname)}})]),s("span",{domProps:{textContent:t._s(e.numOfReplies>=1?"NEW":"")}}),s("p",{staticClass:"date",domProps:{textContent:t._s(t.setDate(e.updatedAt))}})])})),0)},d=[],p={name:"Mycounsellist",data:function(){return{counselList:{}}},methods:{openCounsel:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("saveSelectedCounselId",t);case 2:case"end":return s.stop()}}),s)})))()},getMyCounsels:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:t.counselList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},setDate:function(t){var e=new Date(t),s=new Date-e;return(s/=1e3)<60?"방금 전":(s/=60)<60?Math.floor(s)+"분 전":(s/=60)<24?Math.floor(s)+"시간 전":(s/=24)<31?Math.floor(s)+"일 전":(s/=30)<12?Math.floor(s)+"달 전":Math.floor(s/12)+"년 전"}},mounted:function(){this.getMyCounsels()}},f=p,v=(s("3720"),s("2877")),_=Object(v["a"])(f,u,d,!1,null,"53b8eb44",null),m=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"section_body_story_list story_list"},t._l(t.stories,(function(e,n){return s("li",{key:n,staticClass:"story_item"},[s("div",{staticClass:"story_header"},[s("h1",{staticClass:"story_title",domProps:{textContent:t._s(e.title)}})]),s("div",{staticClass:"story_body"},[s("div",{staticClass:"received_reply"},[s("div",{staticClass:"received_reply_num",domProps:{textContent:t._s(e.numOfNewReply>0?"새로운 답장 "+e.numOfNewReply+"통":"새로운 답장이 없어요!")}}),s("div",{staticClass:"reply_users_accodian_open",on:{click:function(s){return t.openUsers(n,e.storyId)}}},[t._v("열기")])]),t.openUsersState==n?s("ul",{staticClass:"reply_users"},t._l(t.replies,(function(e,n){return s("li",{key:n,staticClass:"reply_user",on:{click:function(s){return t.openStory(e)}}},[s("div",{staticClass:"reply_user_header"},[s("h1",{domProps:{textContent:t._s(e.writerNickname+" "+(e.numOfReplies>=1?"NEW":""))}}),s("div",{staticClass:"date",domProps:{textContent:t._s(t.setDate(e.updatedAt))}})]),s("p",{domProps:{textContent:t._s(e.title)}})])})),0):t._e()])])})),0)},h=[],y=s("71ea"),b={name:"Mystroylist",data:function(){return{replies:{},stories:{},openUsersState:-1}},methods:{openUsers:function(t,e){this.openUsersState==t?this.openUsersState=-1:(this.getReplies(e),this.openUsersState=t)},getMyStories:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["b"])();case 2:t.stories=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getReplies:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(y["c"])(t);case 2:e.replies=s.sent;case 3:case"end":return s.stop()}}),s)})))()},setDate:function(t){var e=new Date(t),s=new Date-e;return(s/=1e3)<60?"방금 전":(s/=60)<60?Math.floor(s)+"분 전":(s/=60)<24?Math.floor(s)+"시간 전":(s/=24)<31?Math.floor(s)+"일 전":(s/=30)<12?Math.floor(s)+"달 전":Math.floor(s/12)+"년 전"},openStory:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("saveSelectedCounselId",t.counselId);case 2:case"end":return s.stop()}}),s)})))()}},mounted:function(){this.getMyStories()}},g=b,x=(s("09df"),Object(v["a"])(g,C,h,!1,null,"91cbd24e",null)),w=x.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"all_letters_wrapper"},[s("div",{staticClass:"exit_btn",on:{click:t.exitAll}},[t._v("떠나기")]),s("div",{staticClass:"book_wrapper"},[s("div",{staticClass:"book"},t._l(t.pages,(function(e,n){return s("div",{key:n,staticClass:"page",class:{active:0==n},attrs:{"data-value":n}},[s("div",{staticClass:"front",attrs:{"data-value":n}},[0==n?s("div",{staticClass:"book_cover"},[s("div",{staticClass:"root_story_header",domProps:{textContent:t._s(e.letter.detail.title)}}),s("div",{staticClass:"root_story_content",domProps:{textContent:t._s(e.letter.detail.content)}})]):s("div",{staticClass:"reply"},[s("div",{staticClass:"reply_header",domProps:{textContent:t._s(e.reply.detail.title)}}),s("div",{staticClass:"reply_content",domProps:{textContent:t._s(e.reply.detail.content)}})])]),s("div",{staticClass:"back",attrs:{"data-value":n}},[s("div",{staticClass:"letter_header",domProps:{textContent:t._s(e.letter.detail.title)}}),s("div",{staticClass:"letter_content",domProps:{textContent:t._s(e.letter.detail.content)}})])])})),0)]),s("div",{staticClass:"all_letters_header"})])},L=[],I=function(){console.log("all letters");var t,e=document.querySelector(".book"),s=(document.querySelectorAll(".front"),document.querySelectorAll(".back"),0);function n(e){e=parseInt(e,10),t[e].classList.add("flipped"),t[e].classList.remove("active"),s=e,console.log(s),t&&e+1<t.length&&(t[e+1].classList.add("active"),console.log("더한다",t[parseInt(e,10)+1]))}function r(e){e=parseInt(e,10),t[e].classList.remove("flipped"),t[e].classList.add("active"),s=e,console.log(s),t&&e+1<t.length&&(t[e+1].classList.remove("active"),console.log("뺀다",t[parseInt(e,10)+1]))}e.addEventListener("click",(function(e){if(t=document.querySelectorAll(".page"),console.log(e.target),e.target.classList.contains("front")||e.target.classList.contains("back")||e.target.classList.contains("page")){var s=e.target.dataset.value;console.log(s),t[s].classList.contains("active")?(console.log("있디"),n(s)):(console.log("없다"),r(s))}}))},R={name:"Allletters",data:function(){return{pages:this.$store.state.allLetters.detail}},mounted:function(){I()},methods:{exitAll:function(){this.$emit("exitAll")}}},A=R,S=(s("0cd2"),Object(v["a"])(A,k,L,!1,null,"7f2357f1",null)),$=S.exports,M=s("53f2"),P={name:"MyReceivedMailPage",data:function(){return{stories:null,viewStoryState:!0,openAllLetters:!1,letter:{ids:{counselId:null,letterId:null},body:{content:"",createAt:"",title:""}},selectedCounsel:{counselId:null,counsellorNickname:"반가운 전나무",detail:[{letter:{detail:{title:"",content:"",createAt:""},letterId:""},reply:{detail:{title:"",content:"",createAt:""},letterId:""}}]}}},components:{Star:M["a"],MyCounselList:m,MyStoryList:w,AllLetters:$},methods:{goToLetterReply:function(){this.$router.push({name:"LetterReply"})},openUserBoard:function(t){this.viewStoryState=t},openAll:function(){this.openAllLetters=!0},exitAll:function(){this.openAllLetters=!1},getTitle:function(){var t=this.$store.state.allLetters;return null===t?null:t.detail[0].reply.detail.title},getContent:function(){var t=this.$store.state.allLetters;return null===t?null:t.detail[0].reply.detail.title},ReplyForm:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.letter.ids.counselId=t.$store.state.allLetters.counselId,t.letter.ids.letterId=t.$store.state.allLetters.detail[0].reply.letterId,e.next=4,Object(i["b"])(t.letter);case 4:return e.next=6,Object(i["a"])(t.letter);case 6:case"end":return e.stop()}}),e)})))()}},watch:{"$store.state.counselId":function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===this.$store.state.counselId){t.next=7;break}return t.t0=this.$store,t.next=4,c(this.$store.state.counselId);case 4:return t.t1=t.sent,t.next=7,t.t0.dispatch.call(t.t0,"saveAllLetters",t.t1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},O=P,j=(s("1c7c"),Object(v["a"])(O,n,r,!1,null,"38975553",null));e["default"]=j.exports},a3a9:function(t,e,s){"use strict";s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return a}));s("99af");var n=s("365c"),r=function(t){return n["b"].post("/counsels/".concat(t.ids.counselId,"/letters/").concat(t.ids.letterId),t.body).then((function(t){console.log(t.data)}))},a=function(t){return n["b"].get("/counsels/".concat(t.ids.counselId,"/letters/").concat(t.ids.letterId,"/read"))}},ee8e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-c58893ce.9fba3331.js.map