(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42d08411"],{"041c":function(e,t,i){"use strict";i("ffb3")},"372a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vr__wrapper"},[i("div",{staticClass:"before"},[i("i",{staticClass:"fas fa-arrow-left",on:{click:e.moveToBack}})]),e._m(0),i("section",{staticClass:"video__list__Wrapper"},[i("div",{staticClass:"video__list"},e._l(e.videoList,(function(t,a){return i("div",{key:a,staticClass:"video__item",attrs:{"data-value":a},on:{click:function(t){return e.showVideo(a)}}},[i("div",{staticClass:"content__wrapper"},[i("div",{staticClass:"title"},[e._v(" "+e._s(e.videoListTitle[a])+" ")]),i("div",{staticClass:"content"},[e._v(" "+e._s(e.videoListContent[a])+" ")]),i("div",{staticClass:"footer"},[e._v(" "+e._s(5!=a?"Copyright 2021. PIXMEDIA inc. all rights reserved.":"Copyright 2021. 힐링한스푼 inc. all rights reserved.")+" ")])]),i("iframe",{staticClass:"vr__thumbnail",attrs:{src:e.videoList[a],title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])})),0)])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"video__main__Wrapper"},[i("iframe",{staticClass:"healing__VR",attrs:{src:"https://www.youtube.com/embed/6cVeAcvJMso",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],r={name:"VrRoomPage",data:function(){return{videoList:["https://www.youtube.com/embed/6cVeAcvJMso","https://www.youtube.com/embed/YAKaiyqET1E","https://www.youtube.com/embed/j7hq9y8n-4Y","https://www.youtube.com/embed/prHVYrHUg7w","https://www.youtube.com/embed/BzWRuF4u7d8","https://www.youtube.com/embed/LZlclmsAUNU"],videoListTitle:["아름다운 수중세계 360도 힐링VR 8K']","힐링영상_북유럽감성, 인제 자작나무숲","감성 가을 힐링 VR","VR 최면 심리치료에 사용된 힐링, 명상, 휴식 콘텐츠","제주 휴일로 카페의 늦은 오후 VR 타임랩스","푸른 바다에서 물고기를 만나 보세요 "],videoListContent:["복잡하고 지친 일상에서 벗어나 스스로에 집중하며,잠시 쉬어 보는 건 어떨까요.        강원도 인제 원대리 설경 속 도도하고 깨끗한 자태의 자작나무.        360도 VR동영상으로 힐링의 시간을 갖어보시기 바랍니다.","깊고 푸른 아름다운 수중세계를 아무 생각        없이 바라보는 '물멍'의 시간을 갖어보는 것은 어떨까요... 자연, 특히        물을 바라보며 찾는 힐링의 시간이 되시길 바랍니다.","노랗게 물든 은행나무의 가을 정취를 만끽하기 좋은 계절입니다.        픽스미디어는 아름다운 늦가을 하늘과 울긋불긋 물든 가을의 정취를 느끼며 음악과 함께  편안한 마음으로 힐링할 수 있는 360도 Relaxation VR영상을 준비했습니다.          짧기만 한 가을,  VR영상으로 잠시 힐링해 보세요! ","최근 스트레스를 풀 수 있는 음악, 영상, 소리 등을 찾아 힐링하고 마음을 치료하고자 하는 분들이 많습니다.  특히 최근 전세계적으로 VR기술을 의학적 치료 목적으로 활용, 높은 효과를 보고 있다고 합니다.  몰입감과 현장감 있는 VR 콘텐츠로 심리적 안정과 힐링을 느껴보시죠...","겨울 바다를 마주하고 있는 조용한 휴일로 카페에서 잠시 힐링해 보시기 바랍니다.","팔라완에서 가장 아름다운 바다를 자랑하는 혼다베이의 섬들을 방카배를 이용하여 아름다운 비치에서 해수욕, 맑은 바다에서의 스노쿨링을 하며 형형색색의 열대어와 아름다운 바다를 몸으로 느껴보실 수 있어요. 사람의 손길이 닿지 않는 섬에서 즐기는 낭만적인 시간은 잊지못할 추억이 되는 곳입니다. 그럼 스노쿨링으로 바다속 세계를 VR로 체험해보세요"],bgArray:[["#0272a4","#f6a564"],["#b6bfc8","#36595b"],["#e58e82","#6f569f"],["#ffecd2","#fcb69f"],["#ff9a9e","#fecfef"],["#4facfe","#66a6ff"],["#e0c3fc","#8ec5fc"]]}},created:function(){var e=this.$store.getters.getAuthToken;""!=e&&null!=e||(alert("로그인이 필요합니다."),this.$router.push({name:"Login"}))},methods:{moveToBack:function(){this.$router.push({name:"JoyMainPage"})},showVideo:function(e){var t=document.querySelector(".healing__VR"),i=document.querySelector(".vr__wrapper");i.style.background="linear-gradient(120deg,"+this.bgArray[e][0]+", "+this.bgArray[e][1]+")",t.src=this.videoList[e]}}},o=r,c=(i("041c"),i("2877")),n=Object(c["a"])(o,a,s,!1,null,"8cc78ad4",null);t["default"]=n.exports},ffb3:function(e,t,i){}}]);
//# sourceMappingURL=chunk-42d08411.0dd535e2.js.map