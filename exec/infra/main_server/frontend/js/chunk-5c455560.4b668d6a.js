(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c455560"],{"09d9":function(t,n,e){"use strict";e("a3b9")},"159b":function(t,n,e){var r=e("da84"),i=e("fdbc"),a=e("17c2"),o=e("9112");for(var c in i){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==a)try{o(s,"forEach",a)}catch(d){s.forEach=a}}},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,i=e("a640"),a=i("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"71ea":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"e",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return u}));var r=e("365c"),i=function(){return r["b"].get("/stories").then((function(t){return t.data}))},a=function(t){return r["b"].post("/stories",t)},o=function(t){return r["b"].get("/stories/".concat(t,"/counsels")).then((function(t){return t.data}))},c=function(t){return r["b"].post("/stories/".concat(t)).then((function(t){return t.data}))},u=function(){return r["b"].get("/stories/candidates").then((function(t){return t.data}))}},"81d5":function(t,n,e){"use strict";var r=e("7b0b"),i=e("23cb"),a=e("50c4");t.exports=function(t){var n=r(this),e=a(n.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,e),u=o>2?arguments[2]:void 0,s=void 0===u?e:i(u,e);while(s>c)n[c++]=t;return n}},8269:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"random-mail"},[e("Star",{staticClass:"star"}),e("canvas",{staticClass:"fireworks"}),e("div",{staticClass:"random-ball-wrapper",on:{click:t.pop}},[e("div",{staticClass:"random_ball",on:{click:t.pop}})]),t._m(0),t._m(1)],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"big"},[e("div"),e("div"),e("div")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mystery"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}],a=e("1da1"),o=(e("96cf"),e("53f2")),c=(e("cb29"),e("a434"),e("159b"),function(){var t=function(){return parseFloat(getComputedStyle(document.documentElement).fontSize)},n=document.querySelector(".fireworks"),e=n.getContext("2d"),r=24,i=200,a=0,o=0,c=[],u=function(){n.width=window.innerWidth,n.height=window.innerHeight},s=function(t){a=t.clientX||t.touches[0].clientX,o=t.clientY||t.touches[0].clientY},d=["#b721ff","#00dbde","#ff758c","#0fd850"],f=function(t,n){var r={};return r.x=t,r.y=n,r.color=d[anime.random(0,d.length-1)],r.color="#FFF",r.radius=0,r.alpha=1,r.lineWidth=6,r.draw=function(){e.globalAlpha=r.alpha,e.beginPath(),e.arc(Math.abs(r.x),Math.abs(r.y),Math.abs(r.radius),0,2*Math.PI,!0),e.lineWidth=r.lineWidth,e.strokeStyle=r.color,e.stroke(),e.globalAlpha=1},r},l=function(n,r){var i={};i.x=n,i.y=r,i.color=d[anime.random(0,d.length-1)],i.radius=anime.random(t(),2*t());while(i.radius<0)i.radius=anime.random(t(),2*t());return i.draw=function(){e.beginPath(),e.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),e.fillStyle=i.color,e.fill()},i},h=function(t,n){for(var e=[],i=0;i<r;i++){var a=l(t,n);e.push(a)}return e},m=function(t){var n=c.indexOf(t);n>-1&&c.splice(n,1)},p=function(n,e){u();var r=h(n,e),a=f(n,e),o=anime({targets:r,x:function(t){return t.x+anime.random(-i,i)},y:function(t){return t.y+anime.random(-i,i)},radius:0,duration:function(){return anime.random(1200,1800)},easing:"easeOutExpo",complete:m}),s=anime({targets:a,radius:function(){return anime.random(8.75*t(),11.25*t())},lineWidth:0,alpha:{value:0,easing:"linear",duration:function(){return anime.random(400,600)}},duration:function(){return anime.random(1e3,1200)},easing:"easeOutExpo",complete:m});c.push(o),c.push(s)};anime({duration:1/0,update:function(){e.clearRect(0,0,n.width,n.height),c.forEach((function(t){t.animatables.forEach((function(t){t.target.draw()}))}))}});return document.addEventListener("click",(function(t){s(t),p(a,o)}),!1),window.addEventListener("resize",u,!1),{boom:p}}),u=e("71ea"),s={name:"RandomMail",data:function(){return{randomMails:[1,2,3,4,5,6],stories:[]}},components:{Star:o["a"]},methods:{getRandomStories:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(u["a"])();case 2:t.stories=n.sent;case 3:case"end":return n.stop()}}),n)})))()},goToRootMailReply:function(t){this.$router.push({name:"RootMailReply",params:{storyId:t}})},pop:function(t){t.target.classList.add("pop-ball");var n=document.querySelector(".big"),e=document.querySelector(".mystery");n.classList.add("show"),e.classList.add("show"),setTimeout((function(){c()}),3e3)}},mounted:function(){this.getRandomStories()}},d=s,f=(e("09d9"),e("2877")),l=Object(f["a"])(d,r,i,!1,null,"7bf43988",null);n["default"]=l.exports},a3b9:function(t,n,e){},a434:function(t,n,e){"use strict";var r=e("23e7"),i=e("23cb"),a=e("a691"),o=e("50c4"),c=e("7b0b"),u=e("65f0"),s=e("8418"),d=e("1dde"),f=d("splice"),l=Math.max,h=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,n){var e,r,d,f,v,b,g=c(this),w=o(g.length),y=i(t,w),x=arguments.length;if(0===x?e=r=0:1===x?(e=0,r=w-y):(e=x-2,r=h(l(a(n),0),w-y)),w+e-r>m)throw TypeError(p);for(d=u(g,r),f=0;f<r;f++)v=y+f,v in g&&s(d,f,g[v]);if(d.length=r,e<r){for(f=y;f<w-r;f++)v=f+r,b=f+e,v in g?g[b]=g[v]:delete g[b];for(f=w;f>w-r+e;f--)delete g[f-1]}else if(e>r)for(f=w-r;f>y;f--)v=f+r-1,b=f+e-1,v in g?g[b]=g[v]:delete g[b];for(f=0;f<e;f++)g[f+y]=arguments[f+2];return g.length=w-r+e,d}})},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},b727:function(t,n,e){var r=e("0366"),i=e("44ad"),a=e("7b0b"),o=e("50c4"),c=e("65f0"),u=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,d=4==t,f=6==t,l=7==t,h=5==t||f;return function(m,p,v,b){for(var g,w,y=a(m),x=i(y),E=r(p,v,3),M=o(x.length),k=0,S=b||c,R=n?S(m,M):e||l?S(m,0):void 0;M>k;k++)if((h||k in x)&&(g=x[k],w=E(g,k,y),t))if(n)R[k]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:u.call(R,g)}else switch(t){case 4:return!1;case 7:u.call(R,g)}return f?-1:s||d?d:R}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},cb29:function(t,n,e){var r=e("23e7"),i=e("81d5"),a=e("44d2");r({target:"Array",proto:!0},{fill:i}),a("fill")}}]);
//# sourceMappingURL=chunk-5c455560.4b668d6a.js.map