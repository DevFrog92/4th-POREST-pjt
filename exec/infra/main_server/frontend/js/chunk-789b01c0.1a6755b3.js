(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-789b01c0"],{5464:function(e,t,s){"use strict";function a(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}function i(e){var t=/^[A-Za-z0-9+]{6,12}$/;return t.test(e)}s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i}))},"6c05":function(e,t,s){},"72b7":function(e,t,s){"use strict";s("6c05")},9905:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("header",[e._v(" Login page ")]),s("article",[s("div",[s("p",[e._v("email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.isValidEmail?e._e():s("p",{staticClass:"error_message"},[e._v(" 잘못된 이메일 양식입니다. ")])]),s("div",[s("p",[e._v("비밀번호")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"6~12자의 영문, 숫자 입력"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),!e.isValidPwd&&e.password.length<6?s("p",{staticClass:"error_message"},[e._v("6자 이상의 비밀번호를 입력해주세요.")]):!e.isValidPwd&&e.password.length>12?s("p",{staticClass:"error_message"},[e._v(" 12자 이하의 비밀번호를 입력해주세요. ")]):e._e()])]),s("br"),s("button",{attrs:{disabled:!e.checkForm}},[e._v("로그인 하기")]),s("br"),s("p",{on:{click:e.goToSignup}},[e._v("회원가입 페이지 이동")])])},i=[],r=s("5464"),n={data:function(){return{email:"",nickname:"",password:""}},computed:{isValidEmail:function(){return""===this.email||Object(r["a"])(this.email)},isValidPwd:function(){return""===this.password||Object(r["b"])(this.password)},checkForm:function(){return Object(r["a"])(this.email)&&Object(r["b"])(this.password)}},methods:{goToSignup:function(){this.$router.push({name:"Signup"})}}},o=n,c=(s("72b7"),s("2877")),u=Object(c["a"])(o,a,i,!1,null,"91257064",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-789b01c0.1a6755b3.js.map