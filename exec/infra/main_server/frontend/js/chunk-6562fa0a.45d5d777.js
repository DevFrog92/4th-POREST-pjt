(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6562fa0a"],{"159b":function(t,e,a){var s=a("da84"),i=a("fdbc"),n=a("17c2"),r=a("9112");for(var o in i){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,i=a("a640"),n=i("forEach");t.exports=n?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"18f8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"snackbar"}},[t.$store.state.snackbarStatus?a("div",{staticClass:"snackbar",class:t.classes},[a("div",{staticClass:"snackbar__wrap"},[a("div",{staticClass:"snackbar__body"},[t._t("default")],2)])]):t._e()])},i=[];function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a("a9e3");var r={name:"Snackbar",props:{timeout:{type:Number,default:4e3},infinity:{type:Boolean,default:!1},position:{type:String,default:"top-center"}},data:function(){return{timer:null}},watch:{"$store.state.snackbarStatus":function(){this.setTimer()}},computed:{classes:function(){return n({},"snackbar--".concat(this.position),!0)}},methods:{setTimer:function(){var t=this;this.timer&&clearTimeout(this.timer),this.infinity||(this.timer=setTimeout((function(){t.$store.dispatch("saveSnackbarStatus",!1),console.log(t.$store.state.snackbarStatus)}),this.timeout))}},mounted:function(){this.setTimer()}},o=r,c=(a("ce24"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=l.exports},"3ea7":function(t,e,a){},"497b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])]),a("div",{staticClass:"paper-plane"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.04 61.39"}},[a("g",{attrs:{id:"레이어_2","data-name":"레이어 2"}},[a("g",{attrs:{id:"Capa_1","data-name":"Capa 1"}},[a("g",[a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 95.04 23.47 59.64 37.59 0 0"}}),a("polygon",{staticClass:"cls-2",attrs:{points:"59.64 37.59 57.04 56.59 0 0 59.64 37.59"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"51 41.92 57.04 56.59 0 0 51 41.92"}}),a("polygon",{staticClass:"cls-1",attrs:{points:"0 0 51 41.92 17.36 61.39 0 0"}})])])])])])])},i=[],n={},r=n,o=(a("4d75"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"31be62d8",null);e["a"]=c.exports},"4d75":function(t,e,a){"use strict";a("3ea7")},5464:function(t,e,a){"use strict";function s(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}function i(t){var e=/^[\S+]{8,20}$/;return e.test(t)}a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}))},"7c36":function(t,e,a){"use strict";var s,i,n,r,o,c,l,u,d,m,p,v;a.d(e,"a",(function(){return f})),d=0,m=1e-5,p=window.innerWidth,v=window.innerHeight;var f=function(){h(),g(),window.addEventListener("resize",b,!1)};function h(){i=new THREE.Scene,i.fog=new THREE.FogExp2("#222",.001),s=new THREE.PerspectiveCamera(75,p/v,1,1e3),s.position.z=0,s.position.y=1,s.rotation.x=Math.PI/2;var t=(new THREE.TextureLoader).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1823170/star-sprite.png");c=new THREE.PointsMaterial({color:16777215,size:.9,map:t,transparent:!0,blending:THREE.AdditiveBlending}),l=35e3,r=new THREE.Geometry;for(var e=0;e<l;e++){var a=2e3*Math.random()-1e3,d=1e3*Math.random()-1e3,m=2e3*Math.random()-1e3;o=new THREE.Vector3(a,d,m),o.velocity=new THREE.Vector3(0,Math.random(),0),r.vertices.push(o)}u=new THREE.Points(r,c),u.sortParticles=!0,i.add(u),n=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),n.setSize(p,v),document.getElementById("canvas").appendChild(n.domElement)}function g(){requestAnimationFrame(g),i.rotation.y+=d;var t=l;while(t--){var e=r.vertices[t];e.y>1e3&&(e.y=-1e3,e.velocity.y=Math.random()),e.velocity.y+=Math.random()*m,e.add(e.velocity)}u.geometry.verticesNeedUpdate=!0,w()}function w(){s.lookAt(i.position),n.render(i,s)}function b(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}},"7db5":function(t,e,a){"use strict";a("c6a9")},"80cb":function(t,e,a){},"883a":function(t,e,a){"use strict";a("bf16")},a640:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,a){var s=a("0366"),i=a("44ad"),n=a("7b0b"),r=a("50c4"),o=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,d=6==t,m=7==t,p=5==t||d;return function(v,f,h,g){for(var w,b,y=n(v),_=i(y),C=s(f,h,3),k=r(_.length),x=0,T=g||o,E=e?T(v,k):a||m?T(v,0):void 0;k>x;x++)if((p||x in _)&&(w=_[x],b=C(w,x,y),t))if(e)E[x]=b;else if(b)switch(t){case 3:return!0;case 5:return w;case 6:return x;case 2:c.call(E,w)}else switch(t){case 4:return!1;case 7:c.call(E,w)}return d?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bf16:function(t,e,a){},c6a9:function(t,e,a){},ce24:function(t,e,a){"use strict";a("80cb")},ce61:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-wrapper"},[a("section",[a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("p",{staticClass:"title"},[t._v(" 이메일 "),t.emailRedundancy&&t.isValidEmail&&t.email.length>4?a("span",{staticClass:"redundancy_check",staticStyle:{color:"#6FFFC4"}},[t._v("중복확인 완료")]):t._e()]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"이메일 주소를 입력해주세요",autocomplete:"on"},domProps:{value:t.email},on:{blur:t.checkEmail,focus:t.setCodeInput,input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t.isValidEmail?!t.emailRedundancy&&t.email?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 다음 텝으로 이동하면 이메일 중복체크를 진행합니다 ")]):t._e():a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 잘못된 이메일 양식입니다 ")]),t.emailRedundancy?a("p",{staticClass:"title"},[t._v(" 인증코드 "),t.verify?a("span",{staticClass:"redundancy_check",staticStyle:{color:"#6FFFC4","font-size":"8px"}},[t._v("인증완료")]):t._e()]):t._e(),t.emailRedundancy?a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input_verify",attrs:{type:"text",placeholder:"인증코드를 입력해주세요",autocomplete:"off"},domProps:{value:t.code},on:{blur:t.checkVerify,input:function(e){e.target.composing||(t.code=e.target.value)}}}),!t.verify&&t.remainTime>="3:00"?a("div",{staticClass:"re_send_button",on:{click:t.sendEmail}},[t._v(" 전송 ")]):t.verify||"0:00"!=t.remainTime?t.verify?t._e():a("span",{staticClass:"timer",domProps:{textContent:t._s(t.remainTime)}}):a("div",{staticClass:"re_send_button",on:{click:t.sendEmail}},[t._v(" 재전송 ")])]):t._e(),!t.verify&&t.emailRedundancy&&t.code.length<1&&t.remainTime<"3:00"?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 다음 텝으로 이동하면 인증코드 확인을 진행합니다 ")]):!t.verify&&t.emailRedundancy&&5==t.code.length?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"},domProps:{textContent:t._s(t.verifyCodeText)}}):t._e(),a("p",{staticClass:"title"},[t._v("닉네임")]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"닉네임을 입력해주세요",autocomplete:"off"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t.nickname.length>20?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 20자 이하의 닉네임을 입력해주세요. ")]):t._e(),a("p",{staticClass:"title"},[t._v("비밀번호")]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password1,expression:"password1"}],attrs:{type:"password",placeholder:"8~20자의 영문, 숫자 입력",autocomplete:"off"},domProps:{value:t.password1},on:{input:function(e){e.target.composing||(t.password1=e.target.value)}}})]),!t.isValidPwd&&t.password1.length<8?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 8자 이상의 비밀번호를 입력해주세요. ")]):!t.isValidPwd&&t.password1.length>20?a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 20자 이하의 비밀번호를 입력해주세요. ")]):t._e(),a("p",{staticClass:"title"},[t._v("비밀번호 확인")]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",placeholder:"비밀번호를 다시 입력해주세요",autocomplete:"off"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),t.isValidPwdConfirm?t._e():a("p",{staticClass:"error_message",staticStyle:{color:"#FF6A89"}},[t._v(" 다시 비밀번호를 확인해주세요. ")]),a("p",{staticClass:"title"},[t._v("가입 약관 동의")]),a("div",{staticClass:"terms-check"},[a("div",{staticClass:"accordion"},[a("register-terms")],1),t.isTermsChecked?t._e():a("p",{staticClass:"error_message_2",staticStyle:{color:"#FF6A89"}},[t._v(" 이용 약관을 확인해주세요. ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"checkbox",name:"terms",value:"true"},domProps:{checked:Array.isArray(t.terms)?t._i(t.terms,"true")>-1:t.terms},on:{change:function(e){var a=t.terms,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n="true",r=t._i(a,n);s.checked?r<0&&(t.terms=a.concat([n])):r>-1&&(t.terms=a.slice(0,r).concat(a.slice(r+1)))}else t.terms=i}}}),a("span",{staticClass:"term",on:{click:t.checkTerms}},[t._v("약관 확인")])]),a("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.submitForm}},[t._v(" Sign up ")]),a("div",{staticClass:"go-to-login-container"},[a("span",{staticClass:"go-to-login",on:{click:t.goToLogin}},[t._v("로그인 하러 가기")])])])])])])]),a("div",{attrs:{id:"canvas"}}),a("div",[a("snackbar",{attrs:{infinity:t.infinity,position:t.position}},[t._v(" "+t._s(t.snackbarText)+" "),a("button",{staticClass:"close-btn",on:{click:function(e){t.$store.state.snackbarStatus=!1}}},[t._v("close")])])],1)])},i=[],n=a("1da1"),r=(a("96cf"),a("ac1f"),a("1276"),a("159b"),a("3786")),o=a("7c36"),c=a("260b"),l=(a("ea7b"),a("5464")),u=a("497b"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.open?"form open":"form",on:{click:t.toggleOpen}},[a("div",{staticClass:"info"},[t._v("회원가입 약관 안내")]),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("p",[t._v("제 1조 (목적)")]),t._v(' 본 약관은 Porest(이하 "Porest")가 제공하는 사이트 이용과 관련하여 기본적인 사항을 규정함을 목적으로 합니다. '),a("p",[t._v("제 2조 (약관의 효력 및 변경)")]),t._v(' (1) 이 약관은 Porest 사이트 화면에 게시하거나 기타의 방법으로 회원에게 공시함으로써 효력이 발생합니다. (2) Porest 관리자(이하 "관리자")는 약관의 규제 등에 관한 법률, 전자거래기본법, 정보통신사업법 기타 관련법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 적용일자 및 개정 사유를 명시하여 적용일자 전일까지 제1항과 같은 방법으로 공지합니다. (3) 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 Porest을 탈퇴할 수 있습니다. 변경된 약관의 적용일자 이후의 계속적인 서비스 이용은 약관의 변경 사항에 동의한 것으로 간주됩니다. '),a("p",[t._v("제 3조 (약관 외 준칙)")]),t._v(" 이 약관에 명시되지 아니한 사항에 대해서는 전기통신기본법, 전기통신사업법 및 기타 관련 법령의 규정에 따릅니다. "),a("p",[t._v("제 4조 (회원 가입 신청 및 유보)")]),t._v(" 회원 가입은 회원이 Porest의 제시 양식에 따라 각 항목을 성실히 기재하고 본 약관에 동의함으로써 신청합니다. 관리자는 다음 각 호의 2에 해당하는 경우 회원가입에 대한 승인을 그 사유가 해소될 때까지 유보하거나 거부할 수 있습니다. (1) 이용 신청 시 필요 내용을 허위로 기재하여 신청한 경우 (2) 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우 "),a("p",[t._v("제 5조 (회원 정보의 변경 및 회원 탈퇴)")]),t._v(" 회원이 가입사항을 변경하거나 Porest을 탈퇴하고자 할 때에는 본인이 사이트 내 회원정보 변경 메뉴를 통해 변경합니다. "),a("p",[t._v("제 6조 (회원 신상정보 관리 등 의무)")]),t._v(" Porest은 서비스 제공을 위해 수집한 회원 신상정보를 본인의 승낙 없이 제3자에게 배포, 제공하는 등 외부로 유출하지 않습니다. 단, 적법한 절차를 거친 국가기관의 요구나 기타 공익을 위해 필요하다고 인정되는 경우는 예외로 합니다. "),a("p",[t._v("제 7조 (면책 및 손해 배상)")]),t._v(" (1) Porest은 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다. (2) Porest은 회원이 서비스를 이용하여 기대하는 손익이나, 사이트를 통해 얻은 정보 또는 자료 등으로 인해 발생한 손익에 대하여 책임을 지지 않습니다. (3) Porest은 회원이 직접 사이트에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다. (4) Porest은 회원 간의 상호거래나 관계에서 발생되는 어떠한 결과에도 보상이나 책임이 있지 않습니다. (5) 약관의 적용은 회원에 한하며, 제3자로부터의 어떠한 배상, 클레임 등에 대하여 Porest은 책임을 지지 않습니다. (6) Porest 사이트의 명백한 고의나 중과실에 의해 회원이 피해를 입은 경우는 Porest이 회원에 대해 책임을 집니다. "),a("p",[t._v("제 8조 (관할 법원)")]),t._v(" 서비스 이용 중 회원과 Porest간에 분쟁이 발생, 소송이 제기될 경우 Porest 총 관리자의 주거지 관할 법원을 관할 법원으로 합니다. "),a("p",[t._v("(부칙) 이 규정은 2021년 5월 1일부터 시행합니다.")])])}],p={data:function(){return{open:!1}},methods:{toggleOpen:function(){this.open=!this.open}}},v=p,f=(a("7db5"),a("2877")),h=Object(f["a"])(v,d,m,!1,null,"193a267e",null),g=h.exports,w=a("18f8"),b={components:{AuthForm:u["a"],RegisterTerms:g,Snackbar:w["a"]},data:function(){return{email:"",nickname:"",password1:"",password2:"",code:"",terms:!1,emailRedundancy:!1,checkedEmailList:[],verify:!1,verifyCodeText:"다음 텝으로 이동하면 인증코드 확인을 진행합니다",remainTime:"3:00",position:"top-center",infinity:!1,snackbarText:""}},computed:{isValidEmail:function(){return""===this.email||Object(l["a"])(this.email)},isValidPwd:function(){return""===this.password1||Object(l["b"])(this.password1)},isValidPwdConfirm:function(){return""===this.password2||this.password1===this.password2},isTermsChecked:function(){return!0===this.terms},checkForm:function(){return Object(l["a"])(this.email)&&Object(l["b"])(this.password1)&&this.password1===this.password2&&""!==this.username&&!0===this.terms&&this.emailRedundancy&&""!==this.code}},methods:{setCodeInput:function(){this.verify=!1,this.remainTime="3:34",this.emailRedundancy=!1},verifyTime:function(){var t=this.remainTime.split(/[:]+/),e=t[0],a=t[1]-1;if(a<10&&a>=0?a="0"+a:a<0&&(a=59),59==a&&(e-=1),this.remainTime=e+":"+a,"3:33"==this.remainTime||0==e&&0==a)return clearTimeout(this.verifyTime),void(this.remainTime="3:00");setTimeout(this.verifyTime,1e3)},goToLogin:function(){this.$router.push({name:"Login"})},checkTerms:function(){this.terms=!this.terms},submitForm:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.checkForm){e.next=18;break}return e.prev=1,e.next=4,Object(r["e"])({email:t.email,nickname:t.nickname,password:t.password1,code:t.code});case 4:return a=e.sent,a.status||(t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText=a.message),e.next=8,t.$store.dispatch("LOGIN",{email:t.email,password:t.password1});case 8:return e.next=10,c["a"].auth().createUserWithEmailAndPassword(t.email,t.password1).then((function(e){return e.user.updateProfile({nickname:t.nickname}).then((function(){t.$router.push({name:"Login"})}))}),(function(e){return t.error=e.message}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText=e.t0;case 16:e.next=20;break;case 18:t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText="모든 항목을 입력해주세요.";case 20:case"end":return e.stop()}}),e,null,[[1,12]])})))()},checkEmail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.email.length<1)&&t.isValidEmail){e.next=5;break}t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText="사용하실 이메일 주소를 올바르게 입력해주세요.",e.next=27;break;case 5:if(e.prev=5,a=!1,t.checkedEmailList.forEach((function(e){e.email==t.email&&(a=!0)})),a){e.next=20;break}return e.next=11,Object(r["a"])({email:t.email});case 11:if(s=e.sent,s.status){e.next=16;break}return t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText=s.message,e.abrupt("return");case 16:t.emailRedundancy=s.data.redundancy,t.emailRedundancy?t.checkedEmailList.push({email:t.email,remainTime:t.remainTime}):(t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText="이미 존재하는 이메일 주소입니다."),e.next=21;break;case 20:t.emailRedundancy=!0;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e["catch"](5),t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText=e.t0;case 27:case"end":return e.stop()}}),e,null,[[5,23]])})))()},sendEmail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["b"])({email:t.email});case 2:a=e.sent,t.$store.dispatch("saveSnackbarStatus",!0),t.snackbarText=a.message,t.remainTime="3:00",t.verifyTime();case 7:case"end":return e.stop()}}),e)})))()},checkVerify:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["f"])({email:t.email,code:t.code});case 2:a=e.sent,t.verify=a.data.verify,t.verifyCodeText=t.verify?t.verifyCodeText:"인증코드가 다릅니다";case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){Object(o["a"])()}},y=b,_=(a("883a"),Object(f["a"])(y,s,i,!1,null,"5f768826",null));e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-6562fa0a.45d5d777.js.map