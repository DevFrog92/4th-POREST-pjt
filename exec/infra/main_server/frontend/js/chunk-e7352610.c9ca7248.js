(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7352610"],{"4f44":function(t,s,e){t.exports=e.p+"img/letter.f9eeae95.png"},5132:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mail_box_main_wrapper"},[e("span",{staticClass:"back",on:{click:t.moveToBack}},[e("i",{staticClass:"fas fa-arrow-left"})]),e("div",{staticClass:"mailbox_main_title"},[e("div",{staticClass:"mailbox_name"},[t._v(t._s(t.$store.state.nickname)+"의 우체통")]),e("div",{staticClass:"mailbox_title"},[t._v(" 심리 상담은 자격증이 있어야 되지만, 고민 대화는 따뜻한 마음씨만 있으면 됩니다. ")])]),e("div",{staticClass:"postmenu_wrapper"},[e("div",{staticClass:"postmenu1",on:{click:t.goToStoryLetterPage}},[t._m(0)]),e("div",{staticClass:"postmenu2",on:{click:t.goToRandomMail}},[t._m(1)]),e("div",{staticClass:"postmenu3",on:{click:t.goToMyReceivedMail}},[t._m(2)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"postmenu1_content"},[a("h1",{staticClass:"postmenu1_title"},[t._v("편지쓰기")]),a("h2",{staticClass:"postmenu1_subtitle"},[t._v("당신의 고민은 무엇인가요?")]),a("div",{staticClass:"pen_wrapper"},[a("img",{staticClass:"pen_img",attrs:{src:e("7c366"),alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"postmenu2_content"},[a("h1",{staticClass:"postmenu2_title"},[t._v("사연 고르기")]),a("h2",{staticClass:"postmenu2_subtitle"},[t._v("당신의 경험을 공유해주세요.")]),a("div",{staticClass:"post_wrapper"},[a("img",{staticClass:"post_img",attrs:{src:e("6c5b"),alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"postmenu3_content"},[a("h1",{staticClass:"postmenu3_title"},[t._v("편지함")]),a("h2",{staticClass:"postmenu3_subtitle"},[t._v("편지에 고민을 담아 주고받아요.")]),a("div",{staticClass:"letter_wrapper"},[a("img",{staticClass:"letter_img",attrs:{src:e("4f44"),alt:""}})]),a("div",{staticClass:"letter_wrapper2"},[a("img",{staticClass:"letter2_img",attrs:{src:e("4f44"),alt:""}})])])}],n={methods:{moveToBack:function(){this.$router.push({name:"MainIsland"})},goToStoryLetterPage:function(t){var s=this;t.target.classList.add("click1"),setTimeout((function(){s.$router.push({name:"WriteLetter"})}),100)},goToRandomMail:function(t){var s=this;t.target.classList.add("click2"),setTimeout((function(){s.$router.push({name:"RandomMail"})}),100)},goToMyReceivedMail:function(t){var s=this;t.target.classList.add("click3"),setTimeout((function(){s.$router.push({name:"MyReceivedMail"})}),100)}},created:function(){var t=this.$store.getters.getAuthToken;""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))}},c=n,o=(e("5b3b"),e("2877")),l=Object(o["a"])(c,a,i,!1,null,"e593a8a6",null);s["default"]=l.exports},"5b3b":function(t,s,e){"use strict";e("ed29")},"6c5b":function(t,s,e){t.exports=e.p+"img/postbox.1a7301fd.png"},"7c366":function(t,s,e){t.exports=e.p+"img/pen.591b9e18.png"},ed29:function(t,s,e){}}]);
//# sourceMappingURL=chunk-e7352610.c9ca7248.js.map