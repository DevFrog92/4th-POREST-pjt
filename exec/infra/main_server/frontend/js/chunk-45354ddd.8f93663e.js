(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45354ddd"],{"1c5e":function(e,t,a){"use strict";a("5369")},5369:function(e,t,a){},5464:function(e,t,a){"use strict";function i(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}function r(e){var t=/^[A-Za-z0-9+]{8,20}$/;return t.test(e)}a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}))},9905:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("header",[e._v(" Login page ")]),a("article",[a("div",[a("p",[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.isValidEmail?e._e():a("p",{staticClass:"error_message"},[e._v(" 잘못된 이메일 양식입니다. ")])]),a("div",[a("p",[e._v("비밀번호")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"8~20자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),!e.isValidPwd&&e.password.length<8?a("p",{staticClass:"error_message"},[e._v("8자 이상의 비밀번호를 입력해주세요.")]):!e.isValidPwd&&e.password.length>20?a("p",{staticClass:"error_message"},[e._v(" 20자 이하의 비밀번호를 입력해주세요. ")]):e._e()])]),a("br"),a("button",{attrs:{disabled:!e.checkForm},on:{click:e.submitForm}},[e._v("로그인 하기")]),a("br"),a("p",{on:{click:e.goToSignup}},[e._v("회원가입 페이지 이동")])])},r=[],s=a("1da1"),n=(a("96cf"),a("5464")),o={data:function(){return{email:"",password:"",token_payload:"",id:"",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm9maWxlX2ltZyI6bnVsbCwibmlja25hbWUiOiJiIiwidGVtcGVyYXR1cmUiOm51bGwsImlkIjo5LCJleHAiOjE2MjAyNTkyMDAsImVtYWlsIjoiYkBiLmNvbSJ9.pD28NE-IsvhOACF9EF-SdeDCrbo8ggYm-_uCm_RqCEUklYs8emF3p4YY79rPHrVHfaPu2zKutK5p_RGsaEQiGg"}},computed:{isValidEmail:function(){return""===this.email||Object(n["a"])(this.email)},isValidPwd:function(){return""===this.password||Object(n["b"])(this.password)},checkForm:function(){return Object(n["a"])(this.email)&&Object(n["b"])(this.password)}},methods:{goToSignup:function(){this.$router.push({name:"Signup"})},submitForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("LOGIN",{email:e.email,password:e.password});case 3:e.$router.push("/main"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("이메일이나 비밀번호를 다시 확인해주세요.");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},c=o,u=(a("1c5e"),a("2877")),l=Object(u["a"])(c,i,r,!1,null,"73b0dcd5",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-45354ddd.8f93663e.js.map