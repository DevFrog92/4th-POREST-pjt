(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78df76d9"],{"159b":function(t,e,n){var s=n("da84"),r=n("fdbc"),a=n("17c2"),i=n("9112");for(var o in r){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,n){"use strict";var s=n("b727").forEach,r=n("a640"),a=r("forEach");t.exports=a?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"2fca":function(t,e,n){"use strict";n("62a5")},"62a5":function(t,e,n){},"71ea":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c}));var s=n("365c"),r=function(){return s["b"].get("/stories").then((function(t){return t.data}))},a=function(t){return s["b"].post("/stories",t)},i=function(t){return s["b"].get("/stories/".concat(t,"/counsels")).then((function(t){return t.data}))},o=function(t){return s["b"].post("/stories/".concat(t)).then((function(t){return t.data}))},c=function(){return s["b"].get("/stories/candidates").then((function(t){return t.data}))}},a0a3:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root-mail-reply-wrapper"},[n("span",{staticClass:"back",on:{click:t.moveToBack}},[n("i",{staticClass:"fas fa-arrow-left"})]),n("div",{staticClass:"envelope new"},[n("div",{staticClass:"front"},[n("div",{staticClass:"stamp"}),n("div",{staticClass:"mailme mail_reply_title"},[n("p",{domProps:{textContent:t._s(t.$store.state.selectedStory.detail.title)}})])]),n("div",{staticClass:"back"},[n("div",{staticClass:"letter"},[n("div",{staticClass:"root-mail"},[n("p",{domProps:{textContent:t._s(t.$store.state.selectedStory.detail.content)}})]),n("div",{staticClass:"btnReply"},[t._v("답장하기")])]),n("div",{staticClass:"flap left-flap"}),n("div",{staticClass:"flap right-flap"}),n("div",{staticClass:"flap bottom-flap"}),n("div",{staticClass:"flap top-flap"})])]),n("div",{staticClass:"envelope open reply"},[t._m(0),n("div"),n("div",{staticClass:"back"},[n("div",{staticClass:"letter"},[n("div",{staticClass:"root-mail-reply"},[n("form",{staticClass:"mailform"},[n("div",[n("label",{attrs:{for:"reply_title"}},[t._v("답장 제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letter.body.title,expression:"letter.body.title"}],attrs:{type:"text",name:"reply_title",size:"40",placeholder:"답장의 제목을 적어주세요."},domProps:{value:t.letter.body.title},on:{input:function(e){e.target.composing||t.$set(t.letter.body,"title",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"reply_content"}},[t._v("답장 내용")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.letter.body.content,expression:"letter.body.content"}],attrs:{name:"reply_content",cols:"40",rows:"5",placeholder:"답장의 내용을 적어주세요. (여러분의 말 한마디가 소중합니다.)"},domProps:{value:t.letter.body.content},on:{input:function(e){e.target.composing||t.$set(t.letter.body,"content",e.target.value)}}})]),n("div",[n("input",{staticClass:"sendBtns",attrs:{type:"submit",value:"보내기"},on:{click:function(e){return t.reply()}}})])])])]),n("div",{staticClass:"flap left-flap"}),n("div",{staticClass:"flap right-flap"}),n("div",{staticClass:"flap bottom-flap"}),n("div",{staticClass:"flap top-flap"})])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"front"},[n("div",{staticClass:"stamp"}),n("div",{staticClass:"mailme"},[n("p",{staticClass:"p_title"},[t._v("당신의 소중한 답장")]),n("p",{staticClass:"p_subtitle"},[t._v("porest가 전해드립니다.")])])])}],a=n("1da1"),i=(n("96cf"),n("ac1f"),n("5319"),n("159b"),function(){var t=document.querySelector(".envelope"),e=document.querySelectorAll(".mailform input"),n=document.querySelector(".mailform textarea"),s=document.querySelector(".sendBtns"),r=document.querySelector(".btnReply"),a=document.querySelector(".envelope.reply");t.classList.contains("open")||t.addEventListener("click",(function(){t.classList.remove("new"),t.classList.add("open")})),r.addEventListener("click",(function(){t.classList.add("active"),a.classList.add("activereply")})),e.forEach((function(t){t.addEventListener("keyup",(function(){var e=t.previousElementSibling;""!==t.value?e.classList.add("show"):e.classList.remove("show")}))})),e.forEach((function(t){t.addEventListener("focus",(function(){var e=t.previousElementSibling;e&&e.classList.add("focus")}))})),e.forEach((function(t){t.addEventListener("blur",(function(){var e=t.previousElementSibling;e&&e.classList.remove("focus")}))})),n.addEventListener("keyup",(function(){var t=n.previousElementSibling;""!==n.value?t.classList.add("show"):t.classList.remove("show")})),n.addEventListener("focus",(function(){var t=n.previousElementSibling;t.classList.add("focus")})),n.addEventListener("blur",(function(){var t=n.previousElementSibling;t.classList.remove("focus")})),s.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("hideLetter"),a.classList.remove("open"),a.classList.add("send")}))}),o=n("71ea"),c=n("a3a9"),l={name:"RootMailReply",data:function(){return{story:{counselId:0,detail:{detail:{content:"",createAt:"",title:""},letterId:0}},letter:{ids:{counselId:null,letterId:null},body:{content:"",createAt:"",title:""}}}},methods:{moveToBack:function(){this.$router.go(-1)},conversion:function(){var t=this.letter.body.content;t=t.replace(/(?:\r\n|\r|\n)/g,"<br/>"),this.letter.body.content=t},getStory:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["d"])(t);case 2:e.story=n.sent;case 3:case"end":return n.stop()}}),n)})))()},reply:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.conversion(),e.next=3,t.getStory(t.$store.state.selectedStory.storyId);case 3:return t.letter.ids.counselId=t.story.counselId,t.letter.ids.letterId=t.story.detail.letterId,e.next=7,Object(c["c"])(t.letter);case 7:setTimeout((function(){t.$router.push({name:"Mailbox"})}),5e3);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){i()},created:function(){var t=this.$store.getters.getAuthToken;""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))}},u=l,d=(n("2fca"),n("2877")),f=Object(d["a"])(u,s,r,!1,null,"18e19c52",null);e["default"]=f.exports},a3a9:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));n("99af");var s=n("365c"),r=function(t){return s["b"].post("/counsels/".concat(t.ids.counselId,"/letters/").concat(t.ids.letterId),t.body).then((function(t){}))},a=function(t){return s["b"].post("/counsels/".concat(t.counselId,"/finish"),t).then((function(t){}))},i=function(t){return s["b"].post("/counsels/".concat(t.ids.counselId,"/letters/").concat(t.ids.letterId,"/read"))}},a640:function(t,e,n){"use strict";var s=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var s=n("0366"),r=n("44ad"),a=n("7b0b"),i=n("50c4"),o=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,v=5==t||d;return function(p,m,b,h){for(var y,C,g=a(p),E=r(g),L=s(m,b,3),w=i(E.length),_=0,k=h||o,x=e?k(p,w):n||f?k(p,0):void 0;w>_;_++)if((v||_ in E)&&(y=E[_],C=L(y,_,g),t))if(e)x[_]=C;else if(C)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:c.call(x,y)}else switch(t){case 4:return!1;case 7:c.call(x,y)}return d?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}}}]);
//# sourceMappingURL=chunk-78df76d9.6ed39988.js.map