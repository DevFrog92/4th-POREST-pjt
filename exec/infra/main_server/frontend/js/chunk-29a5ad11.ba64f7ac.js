(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29a5ad11"],{5464:function(e,a,t){"use strict";function n(e){var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(e).toLowerCase())}function r(e){var a=/^[A-Za-z0-9+]{8,20}$/;return a.test(e)}t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}))},"662f":function(e,a,t){"use strict";t("f159")},ce61:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("header",[e._v(" signup page ")]),t("article",[t("div",[t("p",[e._v("email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요.",autocomplete:"on"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),e.emailRedundancy?t("span",{staticClass:"after_redundancy_check",on:{click:e.checkEmail}},[e._v("중복확인 완료")]):t("span",{staticClass:"before_redundancy_check",on:{click:e.checkEmail}},[e._v("중복확인")]),e.isValidEmail?e._e():t("p",{staticClass:"error_message"},[e._v(" 잘못된 이메일 양식입니다. ")])]),t("div",[t("p",[e._v("닉네임")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"닉네임을 입력해주세요.",autocomplete:"off"},domProps:{value:e.nickname},on:{input:function(a){a.target.composing||(e.nickname=a.target.value)}}}),e.nicknameRedundancy?t("span",{staticClass:"after_redundancy_check",on:{click:e.checkNickname}},[e._v("중복확인 완료")]):t("span",{staticClass:"before_redundancy_check",on:{click:e.checkNickname}},[e._v("중복확인")])]),t("div",[t("p",[e._v("비밀번호")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",placeholder:"8~20자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:e.password1},on:{input:function(a){a.target.composing||(e.password1=a.target.value)}}}),!e.isValidPwd&&e.password1.length<8?t("p",{staticClass:"error_message"},[e._v("8자 이상의 비밀번호를 입력해주세요.")]):!e.isValidPwd&&e.password1.length>20?t("p",{staticClass:"error_message"},[e._v(" 20자 이하의 비밀번호를 입력해주세요. ")]):e._e()]),t("div",[t("p",[e._v("비밀번호 확인")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",placeholder:"비밀번호를 다시 입력해주세요.",autocomplete:"off"},domProps:{value:e.password2},on:{input:function(a){a.target.composing||(e.password2=a.target.value)}}}),e.isValidPwdConfirm?e._e():t("p",{staticClass:"error_message"},[e._v(" 다시 비밀번호를 확인해주세요. ")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",name:"terms",value:"true"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,"true")>-1:e.terms},on:{change:function(a){var t=e.terms,n=a.target,r=!!n.checked;if(Array.isArray(t)){var s="true",c=e._i(t,s);n.checked?c<0&&(e.terms=t.concat([s])):c>-1&&(e.terms=t.slice(0,c).concat(t.slice(c+1)))}else e.terms=r}}}),e._v(" 약관 확인 "),e.isTermsChecked?e._e():t("p",{staticClass:"error_message"},[e._v(" 이용 약관을 확인해주세요 ")])])]),t("br"),t("button",{attrs:{disabled:!e.checkForm},on:{click:e.submitForm}},[e._v("회원가입하기")]),t("br"),t("p",{on:{click:e.goToLogin}},[e._v("로그인 페이지 이동")])])},r=[],s=t("1da1"),c=(t("96cf"),t("3786")),i=t("5464"),o={data:function(){return{email:"",nickname:"",password1:"",password2:"",terms:!1,nicknameRedundancy:!1,emailRedundancy:!1}},computed:{isValidEmail:function(){return""===this.email||Object(i["a"])(this.email)},isValidPwd:function(){return""===this.password1||Object(i["b"])(this.password1)},isValidPwdConfirm:function(){return""===this.password2||this.password1===this.password2},isTermsChecked:function(){return!0===this.terms},checkForm:function(){return Object(i["a"])(this.email)&&Object(i["b"])(this.password1)&&this.password1===this.password2&&""!==this.username&&!0===this.terms&&this.nicknameRedundancy&&this.emailRedundancy}},methods:{goToLogin:function(){this.$router.push({name:"Login"})},submitForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.checkForm){a.next=9;break}return a.prev=1,a.next=4,Object(c["d"])({email:e.email,nickname:e.nickname,password:e.password1});case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),alert(a.t0);case 9:case"end":return a.stop()}}),a,null,[[1,6]])})))()},checkEmail:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(c["a"])({email:e.email});case 3:t=a.sent,n=t.data,e.emailRedundancy=n.redundancy,e.emailRedundancy||alert("이미 존재하는 이메일 주소입니다."),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},checkNickname:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(c["c"])({nickname:e.nickname});case 3:t=a.sent,n=t.data,e.nicknameRedundancy=n.redundancy,console.log(e.nicknameRedundancy),e.nicknameRedundancy||alert("이미 존재하는 닉네임입니다."),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),alert(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},d=o,u=(t("662f"),t("2877")),m=Object(u["a"])(d,n,r,!1,null,"228d6da8",null);a["default"]=m.exports},f159:function(e,a,t){}}]);
//# sourceMappingURL=chunk-29a5ad11.ba64f7ac.js.map