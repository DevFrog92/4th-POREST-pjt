(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efcdcd6a"],{"35b7":function(t,a,s){},"3ea7":function(t,a,s){},"3ede":function(t,a,s){"use strict";s("35b7")},"497b":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"paper-plane"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[s("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[s("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[s("g",[s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),s("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),s("div",{staticClass:"paper-plane"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[s("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[s("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[s("g",[s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),s("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),s("div",{staticClass:"paper-plane"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[s("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[s("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[s("g",[s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),s("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),s("div",{staticClass:"paper-plane"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[s("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[s("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[s("g",[s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),s("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])])])},e=[],n={},o=n,l=(s("4d75"),s("2877")),c=Object(l["a"])(o,i,e,!1,null,"31be62d8",null);a["a"]=c.exports},"4d75":function(t,a,s){"use strict";s("3ea7")},"64cc":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home-wrapper"},[s("auth-form"),s("section",[s("div",{staticClass:"box"},[s("div",{staticClass:"square",staticStyle:{"--i":"0"}}),s("div",{staticClass:"square",staticStyle:{"--i":"1"}}),s("div",{staticClass:"square",staticStyle:{"--i":"2"}}),s("div",{staticClass:"square",staticStyle:{"--i":"3"}}),s("div",{staticClass:"square",staticStyle:{"--i":"4"}}),s("div",{staticClass:"container"},[s("div",{staticClass:"form"},[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("p",{staticClass:"title"},[t._v(" Email ")]),s("div",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.email,expression:"userData.email"}],staticClass:"input",attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:t.userData.email},on:{input:function(a){a.target.composing||t.$set(t.userData,"email",a.target.value)}}})]),s("p",{staticClass:"title"},[t._v("닉네임")]),s("div",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.nickname,expression:"userData.nickname"}],attrs:{type:"text",placeholder:"닉네임을 입력해주세요.",autocomplete:"off"},domProps:{value:t.userData.nickname},on:{input:function(a){a.target.composing||t.$set(t.userData,"nickname",a.target.value)}}})]),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.submitForm}},[t._v("임시 비밀번호 발급")]),s("div",{staticClass:"go-to-login-container"},[s("span",{staticClass:"go-to-login",on:{click:t.goToLogin}},[t._v("로그인 하러 가기")])])])])])])])],1)},e=[],n=s("1da1"),o=(s("96cf"),s("3786")),l=s("497b"),c={components:{AuthForm:l["a"]},data:function(){return{userData:{email:"",nickname:""}}},methods:{goToLogin:function(){this.$router.push({name:"Login"})},submitForm:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(o["c"])(t.userData);case 2:case"end":return a.stop()}}),a)})))()}}},r=c,p=(s("3ede"),s("2877")),u=Object(p["a"])(r,i,e,!1,null,"1b947a14",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-efcdcd6a.978aeb3c.js.map