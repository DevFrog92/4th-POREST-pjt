(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b5e1cf4"],{"123b":function(e,t,c){},"5d73":function(e,t,c){"use strict";c("123b")},c5a7:function(e,t,c){"use strict";c.r(t);var a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"checkin-wrapper"},[c("div",{staticClass:"checkin-inner-wrapper"},[c("h1",{staticClass:"room-name"},[e._v(e._s(e.roomName))]),e.user?c("div",{staticClass:"for-user"},[c("p",{staticClass:"checkin-warning"},[e._v("잠깐!")]),c("p",{staticClass:"checkin-warning"},[e._v(" 화상채팅은 웹캠을 이용한 서비스로 개인적인 공간의 노출이 발생할 수 있습니다. 비디오를 시작하기 전 주변에 개인적인 정보를 노출할 수 있는 위험 요소를 다시 한번 확인해 주시기 바랍니다. 또한, 개인적인 정보를 요구하는 등의 행위는 불법임으로 즉각 신고 조치를 취해주십시오. 신고된 사용자는 저희 POREST가 법적 조취를 취할 것입니다. 개인적인 부주의로 인한 개인정보 노출에 대해서는 POREST가 책임지지 않습니다. ")]),c("div",{staticClass:"warning-checkbox"},[c("p",[e._v("위의 내용을 확인했습니다.")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkState,expression:"checkState"}],staticClass:"checkbox",attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(e.checkState)?e._i(e.checkState,null)>-1:e.checkState},on:{change:function(t){var c=e.checkState,a=t.target,s=!!a.checked;if(Array.isArray(c)){var n=null,i=e._i(c,n);a.checked?i<0&&(e.checkState=c.concat([n])):i>-1&&(e.checkState=c.slice(0,i).concat(c.slice(i+1)))}else e.checkState=s}}})]),c("span",{staticClass:"warning-checkbox-nonactive"},[e._v("확인 여부를 체크해주세요.")])]):e._e(),c("form",{on:{submit:function(t){return t.preventDefault(),e.handleCheckIn(t)}}},[e.user?c("div",{staticClass:"card-body"},[e._m(0)]):c("div",{staticClass:"non-user"},[c("h1",{},[e._v("죄송합니다.")]),c("p",{},[e._v(" 로그인한 유저만 입장이 가능합니다. "),c("br"),c("router-link",{attrs:{to:"/login"}},[e._v("로그인")]),e._v(" 혹은 "),c("router-link",{attrs:{to:"/register"}},[e._v("회원가입")]),e._v("을 진행 후 이용해 주세요. "),c("br"),e._v(" 감사합니다. ")],1)])])])])},s=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{},[c("button",{staticClass:"checkin-btn",attrs:{type:"submit"}},[e._v("입장하기")])])}],n=c("260b"),i=(c("b7aa"),c("17e1")),o={name:"Checkinpage",data:function(){return{nickName:null,checkState:!1}},props:["user","roomId","roomName","hostId"],methods:{handleCheckIn:function(){var e=this,t=document.querySelector(".warning-checkbox-nonactive");if(console.log(this.checkState),this.checkState){t.classList.remove("warning-show");var c=i["a"].collection("users").doc(this.hostId).collection("rooms").doc(this.roomId);c.get().then((function(t){t.exists&&(console.log("존재한다."),c.collection("attendees").doc(e.user.uid).set({createdAt:n["a"].firestore.FieldValue.serverTimestamp()}).then((function(){e.$emit("showApprove")})))}))}else t.classList.add("warning-show")}},mounted:function(){var e=this;n["a"].auth().onAuthStateChanged((function(t){t&&(e.nickName=t.nickName)})),console.log(this.user,this.roomName,this.roomId,this.hostId)}},r=o,h=(c("5d73"),c("2877")),l=Object(h["a"])(r,a,s,!1,null,"7406aa3f",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5b5e1cf4.8e0112bf.js.map