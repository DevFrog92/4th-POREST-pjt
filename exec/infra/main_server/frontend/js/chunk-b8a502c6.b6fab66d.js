(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a502c6"],{"04d7":function(t,a,s){t.exports=s.p+"img/game_final.0eff7e90.svg"},2048:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mainisland"},[s("div",{staticClass:"short-profile"},[t._v("프로필")]),s("Star",{staticClass:"star"}),s("div",{staticClass:"main_wrapper"},[s("div",{staticClass:"post_ground_wrapper"},[s("div",{staticClass:"post_ground_container",on:{click:t.goToMailbox}},[t._m(0),s("div",{staticClass:"post_island"},[s("object",{attrs:{data:t.post_island,type:"image/svg+xml"}})])])]),s("div",{staticClass:"game_ground_wrapper"},[s("div",{staticClass:"game_ground_container",on:{click:t.goToJoy}},[s("div",{staticClass:"pointer-game"}),s("div",{staticClass:"game_island"},[s("object",{attrs:{data:t.game_island,type:"image/svg+xml"}})])])]),s("div",{staticClass:"chat_ground_wrapper"},[s("div",{staticClass:"chat_ground_container",on:{click:t.goToGurumi}},[s("form",{staticClass:"gurumi",on:{submit:function(t){t.preventDefault()}}}),s("div",{staticClass:"pointer-chat"}),s("div",{staticClass:"chat_island"},[s("object",{attrs:{data:t.chat_island,type:"image/svg+xml"}})])])]),s("div",{staticClass:"video_ground_wrapper"},[s("div",{staticClass:"video_ground_container",on:{click:t.goToAllRooms}},[s("div",{staticClass:"pointer-video"}),s("div",{staticClass:"video_island"},[s("object",{attrs:{data:t.video_island,type:"image/svg+xml"}})])])]),s("div",{staticClass:"calender_ground_wrapper"},[s("div",{staticClass:"calender_ground_container",on:{click:t.goToFeelingRecord}},[s("div",{staticClass:"pointer-calender"}),s("div",{staticClass:"calender_island"},[s("object",{attrs:{data:t.calender_island,type:"image/svg+xml"}})])])])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"paper-plane"},[i("img",{attrs:{src:s("cdab"),alt:""}})])}],o=s("53f2"),n={data:function(){return{post_island:s("49bb"),game_island:s("04d7"),chat_island:s("455c"),video_island:s("ff92"),calender_island:s("b1c5")}},components:{Star:o["a"]},methods:{goToJoy:function(){this.$router.push({name:"JoyMainPage"})},goToGurumi:function(){var t=document.querySelector(".gurumi");t.action="http://localhost:3000/secret",t.method="POST",t.target="pop",window.open("","pop"),t.submit()},goToMailbox:function(){this.$router.push({name:"MailBoxIntro"})},goToFeelingRecord:function(){this.$router.push({name:"FeelingRecord"})},goToAllRooms:function(){this.$router.push({name:"AllRoom"})}},mounted:function(){var t=document.querySelector(".main_wrapper"),a=document.querySelector(".mainisland");a.classList.add("show"),t.classList.add("show")},created:function(){var t=this.$store.getters.getAuthToken;""!=t&&null!=t||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))}},c=n,r=(s("c756"),s("2877")),l=Object(r["a"])(c,i,e,!1,null,"aaa5b0ee",null);a["default"]=l.exports},"455c":function(t,a,s){t.exports=s.p+"img/chat_final.f538dd9d.svg"},"49bb":function(t,a,s){t.exports=s.p+"img/post_final.614cf674.svg"},b1c5:function(t,a,s){t.exports=s.p+"img/calender_final.bed77f88.svg"},b8b2:function(t,a,s){},c756:function(t,a,s){"use strict";s("b8b2")},cdab:function(t,a,s){t.exports=s.p+"img/plane2.7a4f2139.svg"},ff92:function(t,a,s){t.exports=s.p+"img/video_final.f9618dbb.svg"}}]);
//# sourceMappingURL=chunk-b8a502c6.b6fab66d.js.map