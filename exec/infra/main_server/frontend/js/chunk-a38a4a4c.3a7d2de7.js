(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a38a4a4c"],{"159b":function(t,n,e){var r=e("da84"),a=e("fdbc"),i=e("17c2"),o=e("9112");for(var c in a){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{o(s,"forEach",i)}catch(f){s.forEach=i}}},1723:function(t,n,e){t.exports=e.p+"img/postbox_1.6a5f49e0.svg"},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,a=e("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"5bbb":function(t,n,e){},6118:function(t,n,e){"use strict";e("5bbb")},"71ea":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return u}));var r=e("365c"),a=function(){return r["b"].get("/stories").then((function(t){return t.data}))},i=function(t){return r["b"].post("/stories",t)},o=function(t){return r["b"].get("/stories/".concat(t,"/counsels")).then((function(t){return t.data}))},c=function(t){return r["b"].post("/stories/".concat(t)).then((function(t){return t.data}))},u=function(){return r["b"].get("/stories/candidates").then((function(t){return t.data}))}},"81d5":function(t,n,e){"use strict";var r=e("7b0b"),a=e("23cb"),i=e("50c4");t.exports=function(t){var n=r(this),e=i(n.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,e),u=o>2?arguments[2]:void 0,s=void 0===u?e:a(u,e);while(s>c)n[c++]=t;return n}},8269:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"random-mail"},[r("Star",{staticClass:"star"}),r("canvas",{staticClass:"fireworks"}),r("div",{staticClass:"random-ball-wrapper",on:{click:t.pop}},[r("object",{attrs:{data:t.post_box_svg,type:"image/svg+xml"}})]),t._m(0),r("div",{staticClass:"mystery"},t._l(t.stories,(function(n,a){return r("div",{key:a,on:{click:function(e){return t.goToRootMailReply(n.storyId)}}},[r("img",{attrs:{src:e("f944"),alt:""}})])})),0)],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"big"},[e("div"),e("div")])}],i=e("1da1"),o=(e("96cf"),e("53f2")),c=(e("cb29"),e("a434"),e("159b"),function(){var t=function(){return parseFloat(getComputedStyle(document.documentElement).fontSize)},n=document.querySelector(".fireworks"),e=n.getContext("2d"),r=24,a=200,i=0,o=0,c=[],u=function(){n.width=window.innerWidth,n.height=window.innerHeight},s=function(t){i=t.clientX||t.touches[0].clientX,o=t.clientY||t.touches[0].clientY},f=["#b721ff","#00dbde","#ff758c","#0fd850"],l=function(t,n){var r={};return r.x=t,r.y=n,r.color=f[anime.random(0,f.length-1)],r.color="#FFF",r.radius=0,r.alpha=1,r.lineWidth=6,r.draw=function(){e.globalAlpha=r.alpha,e.beginPath(),e.arc(Math.abs(r.x),Math.abs(r.y),Math.abs(r.radius),0,2*Math.PI,!0),e.lineWidth=r.lineWidth,e.strokeStyle=r.color,e.stroke(),e.globalAlpha=1},r},d=function(n,r){var a={};a.x=n,a.y=r,a.color=f[anime.random(0,f.length-1)],a.radius=anime.random(t(),2*t());while(a.radius<0)a.radius=anime.random(t(),2*t());return a.draw=function(){e.beginPath(),e.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),e.fillStyle=a.color,e.fill()},a},h=function(t,n){for(var e=[],a=0;a<r;a++){var i=d(t,n);e.push(i)}return e},m=function(t){var n=c.indexOf(t);n>-1&&c.splice(n,1)},p=function(n,e){u();var r=h(n,e),i=l(n,e),o=anime({targets:r,x:function(t){return t.x+anime.random(-a,a)},y:function(t){return t.y+anime.random(-a,a)},radius:0,duration:function(){return anime.random(1200,1800)},easing:"easeOutExpo",complete:m}),s=anime({targets:i,radius:function(){return anime.random(8.75*t(),11.25*t())},lineWidth:0,alpha:{value:0,easing:"linear",duration:function(){return anime.random(400,600)}},duration:function(){return anime.random(1e3,1200)},easing:"easeOutExpo",complete:m});c.push(o),c.push(s)};anime({duration:1/0,update:function(){e.clearRect(0,0,n.width,n.height),c.forEach((function(t){t.animatables.forEach((function(t){t.target.draw()}))}))}});return document.addEventListener("click",(function(t){s(t),p(i,o)}),!1),window.addEventListener("resize",u,!1),{boom:p}}),u=e("71ea"),s={name:"RandomMail",data:function(){return{randomMails:[1,2,3,4,5,6],stories:[],post_box_svg:e("1723")}},components:{Star:o["a"]},methods:{getRandomStories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(u["a"])();case 2:t.stories=n.sent;case 3:case"end":return n.stop()}}),n)})))()},goToRootMailReply:function(t){this.$router.push({name:"RootMailReply",params:{storyId:t}})},pop:function(t){t.target.classList.add("pop-ball");var n=document.querySelector(".big"),e=document.querySelector(".mystery");n.classList.add("show"),e.classList.add("show"),setTimeout((function(){c()}),3e3)},postClick:function(t){console.log(t.target)}},mounted:function(){this.getRandomStories()}},f=s,l=(e("6118"),e("2877")),d=Object(l["a"])(f,r,a,!1,null,"6772b510",null);n["default"]=d.exports},a434:function(t,n,e){"use strict";var r=e("23e7"),a=e("23cb"),i=e("a691"),o=e("50c4"),c=e("7b0b"),u=e("65f0"),s=e("8418"),f=e("1dde"),l=f("splice"),d=Math.max,h=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(t,n){var e,r,f,l,b,g,v=c(this),w=o(v.length),y=a(t,w),x=arguments.length;if(0===x?e=r=0:1===x?(e=0,r=w-y):(e=x-2,r=h(d(i(n),0),w-y)),w+e-r>m)throw TypeError(p);for(f=u(v,r),l=0;l<r;l++)b=y+l,b in v&&s(f,l,v[b]);if(f.length=r,e<r){for(l=y;l<w-r;l++)b=l+r,g=l+e,b in v?v[g]=v[b]:delete v[g];for(l=w;l>w-r+e;l--)delete v[l-1]}else if(e>r)for(l=w-r;l>y;l--)b=l+r-1,g=l+e-1,b in v?v[g]=v[b]:delete v[g];for(l=0;l<e;l++)v[l+y]=arguments[l+2];return v.length=w-r+e,f}})},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},b727:function(t,n,e){var r=e("0366"),a=e("44ad"),i=e("7b0b"),o=e("50c4"),c=e("65f0"),u=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,d=7==t,h=5==t||l;return function(m,p,b,g){for(var v,w,y=i(m),x=a(y),E=r(p,b,3),k=o(x.length),M=0,R=g||c,_=n?R(m,k):e||d?R(m,0):void 0;k>M;M++)if((h||M in x)&&(v=x[M],w=E(v,M,y),t))if(n)_[M]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return M;case 2:u.call(_,v)}else switch(t){case 4:return!1;case 7:u.call(_,v)}return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},cb29:function(t,n,e){var r=e("23e7"),a=e("81d5"),i=e("44d2");r({target:"Array",proto:!0},{fill:a}),i("fill")},f944:function(t,n,e){t.exports=e.p+"img/letter_1.f9eeae95.png"}}]);
//# sourceMappingURL=chunk-a38a4a4c.3a7d2de7.js.map