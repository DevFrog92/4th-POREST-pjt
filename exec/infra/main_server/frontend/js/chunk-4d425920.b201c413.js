(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d425920"],{5464:function(e,t,s){"use strict";function r(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}function a(e){var t=/^[A-Za-z0-9+]{6,12}$/;return t.test(e)}s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return a}))},"9dac":function(e,t,s){},b0c8:function(e,t,s){"use strict";s("9dac")},ce61:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("header",[e._v(" signup page ")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[s("article",[s("div",[s("p",[e._v("email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.isValidEmail?e._e():s("p",{staticClass:"error_message"},[e._v(" 잘못된 이메일 양식입니다. ")])]),s("div",[s("p",[e._v("닉네임")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"닉네임을 입력해주세요.",autocomplete:"off"},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}})]),s("div",[s("p",[e._v("비밀번호")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",placeholder:"6~12자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:e.password1},on:{input:function(t){t.target.composing||(e.password1=t.target.value)}}}),!e.isValidPwd&&e.password1.length<6?s("p",{staticClass:"error_message"},[e._v("6자 이상의 비밀번호를 입력해주세요.")]):!e.isValidPwd&&e.password1.length>12?s("p",{staticClass:"error_message"},[e._v(" 12자 이하의 비밀번호를 입력해주세요. ")]):e._e()]),s("div",[s("p",[e._v("비밀번호 확인")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",placeholder:"비밀번호를 다시 입력해주세요.",autocomplete:"off"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}}),e.isValidPwdConfirm?e._e():s("p",{staticClass:"error_message"},[e._v(" 다시 비밀번호를 확인해주세요. ")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",name:"terms",value:"true"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,"true")>-1:e.terms},on:{change:function(t){var s=e.terms,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i="true",o=e._i(s,i);r.checked?o<0&&(e.terms=s.concat([i])):o>-1&&(e.terms=s.slice(0,o).concat(s.slice(o+1)))}else e.terms=a}}}),e._v(" 약관 확인 "),e.isTermsChecked?e._e():s("p",{staticClass:"error_message"},[e._v(" 이용 약관을 확인해주세요 ")])])]),s("br"),s("button",{attrs:{disabled:!e.checkForm}},[e._v("회원가입하기")])]),s("br"),s("p",{on:{click:e.goToLogin}},[e._v("로그인 페이지 이동")])])},a=[],i=s("260b"),o=(s("ea7b"),s("5464")),n={data:function(){return{email:"",nickname:"",password1:"",password2:"",terms:!1}},computed:{isValidEmail:function(){return""===this.email||Object(o["a"])(this.email)},isValidPwd:function(){return""===this.password1||Object(o["b"])(this.password1)},isValidPwdConfirm:function(){return""===this.password2||this.password1===this.password2},isTermsChecked:function(){return!0===this.terms},checkForm:function(){return Object(o["a"])(this.email)&&Object(o["b"])(this.password1)&&this.password1===this.password2&&""!==this.username&&!0===this.terms}},methods:{goToLogin:function(){this.$router.push({name:"Login"})},register:function(){var e=this;this.error||i["a"].auth().createUserWithEmailAndPassword(this.email,this.password1).then((function(t){return t.user.updateProfile({nickname:e.nickname}).then((function(){e.$router.push("/home")}))}),(function(t){return e.error=t.message}))}}},c=n,u=(s("b0c8"),s("2877")),m=Object(u["a"])(c,r,a,!1,null,"213df3b8",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-4d425920.b201c413.js.map