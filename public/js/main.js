!function(e){function t(t){for(var n,l,o=t[0],i=t[1],s=t[2],m=0,d=[];m<o.length;m++)l=o[m],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==c[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},c={0:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=this["webpackJsonpmy-content"]=this["webpackJsonpmy-content"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;r.push([285,1]),a()}({285:function(e,t,a){e.exports=a(626)},290:function(e,t,a){},420:function(e,t){},422:function(e,t){},454:function(e,t){},455:function(e,t){},625:function(e,t,a){},626:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=(a(290),a(18)),i=a(39),s=a(7),u=a(35),m=a.n(u),d=c.a.createContext(null),f=function(e){return c.a.createElement(d.Provider,{value:Object(n.useReducer)(e.reducer,e.initValue)},e.children)},p=function(){return Object(n.useContext)(d)},v=function(e){var t,a,r=Object(n.useState)(0),l=Object(s.a)(r,2),i=l[0],u=l[1],d=p(),f=Object(s.a)(d,2),v=f[0];f[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:3000/users").then((function(e){console.log("555",e)})).catch((function(e){console.log(e)}))}),[]),console.log("props",v.username),c.a.createElement("div",{className:"IndexPage-block"},c.a.createElement("div",{className:"user-img"}),c.a.createElement("div",{className:"enter-text",onClick:(t=function(){console.log("id:",i),u(i+1)},a=2e3,Object(n.useCallback)((function(){var e=setTimeout((function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];t.call.apply(t,[null].concat(a))}),a);return function(){clearTimeout(e)}}),[t,a]))},c.a.createElement(o.b,{to:"/intro"},"Enter")),c.a.createElement("div",{className:"bruce"},c.a.createElement("ul",{className:"bubble-bgwall"},c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"),c.a.createElement("li",null,"Love"))))},b=a(13),E=a.n(b),g=(a(312),a(162)),h=a(34),k=a(78),N=(a(384),function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){console.log(e.current);k.init(e.current).setOption({backgroundColor:"#fff",visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"\u6280\u80fd\u6784\u6210",type:"pie",radius:"55%",data:[{value:235,name:"webpack"},{value:274,name:"es6"},{value:310,name:"react"},{value:335,name:"js"},{value:400,name:"html+css"}],roseType:"angle",itemStyle:{normal:{shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})})),c.a.createElement("div",{className:"shapeIntro-block",ref:e,id:"shape-init"})}),O=function(){return c.a.createElement("div",{className:"header-block"},c.a.createElement("div",{className:"search-title"},c.a.createElement("div",{className:"logo-left"},c.a.createElement("img",{src:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v229d1e5aebc3c4682a939caf98eae35ae.png",alt:""})),c.a.createElement("div",{className:"title-welcome"},"welcome"),c.a.createElement("input",{type:"text",placeholder:"search..."})))},j=function(e){return c.a.createElement("div",{className:"DetailList-block"},c.a.createElement(o.b,{to:"/article/".concat(e.data.id)},c.a.createElement("div",{className:"type-text"},"\u4e13\u680f.user"),c.a.createElement("p",{className:"title"},e.data.title),c.a.createElement("div",{className:"other"},c.a.createElement("span",null,"\u2764\ufe0f"),c.a.createElement("span",null,e.data.publishTime))))},w=(Object(i.g)((function(e){var t=function(e){var t,a,n=null===(t=window)||void 0===t||null===(a=t.localStorage)||void 0===a?void 0:a.getItem("edit-list-value");if(n){var c=JSON.parse(n).dataList;for(var r in c)c[r].id==e.id&&c.splice(r,1);window.localStorage.setItem("edit-list-value",JSON.stringify({value:"list-value",dataList:c}))}};return c.a.createElement("div",{className:"content-newlist"},c.a.createElement("ul",null,e.List.map((function(a,n){return c.a.createElement(o.b,{to:"/edit/".concat(a.id),key:a.id,onClick:function(){return t=a,console.log("----",document.getElementsByClassName("text-content")[0].innerHTML),void e.handler(t);var t}},c.a.createElement("li",{className:-1==window.location.hash.indexOf(a.id)?"list-item":"list-item actived-list-item"},a.title,c.a.createElement("div",{className:"setting"},c.a.createElement("div",{className:"setting-block"},c.a.createElement("p",{className:"setting-item"},"\u76f4\u63a5\u53d1\u5e03"),c.a.createElement("p",{className:"setting-item",onClick:function(){return function(a,n){e.List.splice(n,1),console.log("list",e.List,n),e.history.goBack(),console.log(4),t(a)}(a,n)}},"\u5220\u9664"),c.a.createElement("p",{className:"setting-item"},"\u5b9a\u65f6\u53d1\u5e03")))))}))))})),[{value:{id:"0",title:"\u77ed\u89c6\u9891\u4e13\u533a",tech:"\u4f7f\u7528\u5230\u7684\u6280\u672f \uff1areact-hook + ts + es6 + css3 + IntersectionObsever",detail:["\u9879\u76ee\u7b80\u4ecb\uff1a \u8868\u73b0\u5185\u5bb9\u4e3a\u77ed\u89c6\u9891\u62db\u8058\u76f8\u5173\uff0c\u9875\u9762\u529f\u80fd\u5305\u542b\u5438\u9876 \uff0c\u4e0a\u62c9\u52a0\u8f7d\uff0c\u4e0b\u62c9\u5237\u65b0\uff0c\u5438\u9876\u3002\u4e3aapp\u5185\u9875\u9762","\u6280\u672f\u652f\u6301\uff1a \u4f7f\u7528reactHook+ts\u642d\u5efa\u6574\u4f53\u9879\u76ee\u7ed3\u6784\uff0c\u5212\u5206\u9879\u76ee\u76ee\u5f55\uff0c\u8fdb\u884c\u7ec4\u4ef6\u62c6\u5206\uff0c\u5c01\u88c5\u5e38\u7528\u7684\u5de5\u5177\u3002\u9879\u76ee\u4e2d\u7684\u4e0a\u62c9\u548c\u4e0b\u62c9\u6570\u636e\u5237\u65b0\u4f7f\u7528\u7684\u662f\u65b0\u7684Api-IntersectionObsever\u6765\u76d1\u542c\u8fdb\u51fa\u5165\u89c6\u53e3\u7684\u53d8\u5316","\u6280\u672f\u96be\u70b9\uff1a \u4e0b\u62c9\u5237\u65b0\u5728\u672a\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\u7684\u60c5\u51b5\u4e0b,\u4e14\u517c\u5bb9\u6027\u597d","\u4f53\u9a8c\u5730\u5740\uff1a https://zprecommend.58.com/api/find/?type=getBannerInfo#/"]},url:" //pic1.58cdn.com.cn/nowater/cxnomark/n_v2bb23cd2ffaf64c0a856956f3a5d2f16e.jpg"},{value:{id:"1",title:"\u4f18\u8d28\u804c\u4f4d\u4e13\u533a",tech:"react-hook + ts + es6 + css3 + IntersectionObsever",detail:["\u9879\u76ee\u7b80\u4ecb\uff1aapp\u7aefpush\u2eda\u9762\uff0c\u5305\u542b\u804c\u4f4d\u5217\u8868\uff0c\u804c\u4f4d\u8ba2\u9605\u2eda\u9762\u3002\u6709\u4e0a\u62c9\u52a0\u8f7d\uff0c\u5438\u9876\uff0c\u8ba2\u9605\u804c\u4f4d\uff0c\u7533\u8bf7\u804c\u4f4d\u7b49\u529f\u80fd","\u6280\u672f\u652f\u6301\uff1a \u9879\u76ee\u6846\u67b6\u4f7f\u7528reacthook+ts\u3002\u6784\u5efa\u548c\u521d\u59cb\u5316\u9879\u76ee\u7ed3\u6784\uff0c\u4ea7\u51fa\u804c\u4f4d\u8ba2\u9605\u2eda\u9762\u7684\u7ec4\u4ef6\u4f7f\u7528IntersectionObserver\u89e3\u51b3\u5438\u9876\u548c\u4e0a\u62c9\u52a0\u8f7d\uff0c\u63d0\u4f9b\u4e86\u2eda\u9762\u4e0b\u62c9\u5237\u65b0\u7684\u53ef\u884c\u6027\uff0c\u4f18\u5316tab\u5207\u6362\u52a8\u4f5c\uff0c\u4ea7\u51faloding\u7ec4\u4ef6\u3002","\u6280\u672f\u96be\u70b9\uff1a \u804c\u4f4dtab\u5207\u6362\u548c\u6570\u636e\u8ba2\u9605\uff0c\u5237\u65b0\u804c\u4f4d\u5217\u8868\uff0c\u4f7f\u7528userReducer+context\u5b9e\u73b0redux\u6570\u636e\u5171\u4eab"]},url:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v2a0668b0308c94c6c86e811e355faed56.jpg"},{value:{id:"2",title:"IM\u6d88\u606f\u4e13\u533a",tech:"react-hook + ts + es6 + css3 + IntersectionObsever",detail:["\u9879\u76ee\u7b80\u4ecb\uff1a \u8868\u73b0\u5185\u5bb9\u4e3a\u804c\u4f4d\u957f\u5217\u8868\uff0c\u9875\u9762\u529f\u80fd\u5305\u542b\u4e0a\u62c9\u52a0\u8f7d\uff0c\u5438\u9876\u548c\u6ed1\u52a8\u70b9\u51fb\u529f\u80fd\u3002\u4e3aapp\u5185\u9875\u9762\uff0c\u901a\u8fc7\u6765\u6e90\u533a\u5206\u5c55\u73b0\u4e0d\u540c\u6837\u5f0f","\u6280\u672f\u652f\u6301\uff1a \u4f7f\u7528reactHook+ts\u642d\u5efa\u6574\u4f53\u9879\u76ee\u7ed3\u6784\uff0c\u5212\u5206\u9879\u76ee\u76ee\u5f55\uff0c\u8fdb\u884c\u7ec4\u4ef6\u62c6\u5206\uff0c\u5c01\u88c5\u5e38\u7528\u7684\u5de5\u5177\u3002\u9879\u76ee\u4e2d\u7684\u4e0b\u62c9\u6570\u636e\u5237\u65b0\u4f7f\u7528\u7684\u662f\u65b0\u7684Api-IntersectionObsever\u6765\u76d1\u542c\u8fdb\u51fa\u5165\u89c6\u53e3\u7684\u53d8\u5316","\u6280\u672f\u96be\u70b9\uff1a \u4e0b\u62c9\u5237\u65b0\u5728\u672a\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\u7684\u60c5\u51b5\u4e0b,\u4e14\u517c\u5bb9\u6027\u597d"]},url:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v2ca165d928f814e13a14c1bff88389fc1.jpg"},{value:{id:"3",title:"\u62db\u8058\u53d1\u73b0\u9875",tech:"react + antd-mobile + es6 + css3",detail:["\u9879\u76ee\u7b80\u4ecb\uff1a \u8868\u73b0\u4e3a\u5185\u5bb9\u6d41\u9875\u9762\uff0c\u62db\u8058\u4fe1\u606f\u76f8\u5173\uff0c\u9875\u9762\u529f\u80fd\u5305\u542b\u4e0a\u62c9\u52a0\u8f7d\uff0c\u4e0b\u62c9\u5237\u65b0\u3002\u4e3aapp\u5185\u5355\u9875\u9762\u5e94\u7528","\u6280\u672f\u652f\u6301\uff1a \u4f7f\u7528react\u642d\u5efa\u6574\u4f53\u9879\u76ee\u7ed3\u6784\uff0c\u5212\u5206\u9879\u76ee\u76ee\u5f55\uff0c\u8fdb\u884c\u7ec4\u4ef6\u62c6\u5206\uff0c\u5c01\u88c5\u5e38\u7528\u7684\u5de5\u5177\u3002\u4f7f\u7528antd-mobile\u5b8c\u6210\u4e0a\u62c9\u5237\u65b0\u548c\u4e0b\u62c9\u52a0\u8f7d\u3002\u4f7f\u7528pwa\u548c\u9aa8\u67b6\u5c4f\u8fdb\u884c\u9996\u5c4f\u52a0\u8f7d\u4f18\u5316\u548c\u79bb\u7ebf\u6570\u636e\u5b58\u50a8\u3002","\u6280\u672f\u96be\u70b9\uff1a \u4e1a\u52a1\u7e41\u6742\uff0cpwa\u79bb\u7ebf\u5b58\u50a8"]},url:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v2cf5d6c9adaef41dea5629094f8b25322.jpg"}]),y=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1];return console.log("xxx",a),c.a.createElement("div",{className:"Slide-block"},c.a.createElement("div",{className:"slide-main"},w.map((function(e,t){return c.a.createElement("div",{className:a==e.value?"slide-item width-frame":"slide-item",key:t,style:{transform:"translate3d(0px ,".concat(-100*a,"%,0px)")}},c.a.createElement("img",{src:a==e.value.id?e.url:"","data-src":e.url}),c.a.createElement("div",{className:"intro-item"},c.a.createElement("p",{className:"pro-title"},e.value.title),c.a.createElement("p",{className:"pro-tech"},e.value.tech),e.value.detail.map((function(e,t){return c.a.createElement("p",{className:"pro-detail",key:t},e)}))))}))),0==a?"":c.a.createElement("div",{className:"btn-pre",onClick:function(){0!=a&&r(a-1)}},"\u2190"),a==w.length-1?"":c.a.createElement("div",{className:"btn-next",onClick:function(){a>w.length-1||r(a+1)}},"\u2192"))},x=function(){return c.a.createElement("div",{className:"ToolMenu-tips"},c.a.createElement("div",{className:"tool-line"},c.a.createElement("div",{className:"tool-block"},c.a.createElement("ul",null,c.a.createElement(o.b,{to:"/"},c.a.createElement("li",{className:"menu-item"},"\u9996\u9875")),c.a.createElement(o.b,{to:"/edit"},c.a.createElement("li",{className:"menu-item"},"\u53d1\u5e03")),c.a.createElement(o.b,{to:"/list"},c.a.createElement("li",{className:"menu-item"},"\u5217\u8868"))))))},S="//49.235.235.22:3000/api",L=function(){var e=Object(n.useState)(-1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),p=f[0],v=f[1],b=Object(n.useState)(""),k=Object(s.a)(b,2),O=k[0],j=k[1],w=Object(n.useRef)(null),L=Object(n.useRef)(null),C=function(){var e=Object(h.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.length>10&&""!==O)){e.next=6;break}return e.next=4,t=O,a=p,m.a.post("".concat(S,"/user/sayWords/save"),{nickName:t,sayText:a}).then((function(e){return console.log(e),e.data})).catch((function(e){console.log(e)}));case 4:"0"==e.sent.status?(g.a.success("\u7559\u8a00\u6210\u529f~"),window.location.href="//49.235.235.22:3000/web/mylog#/list"):g.a.error("\u53d1\u9001\u5931\u8d25\uff01");case 6:case"end":return e.stop()}var t,a}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"IntroPage-block"},c.a.createElement("ul",{className:"person-cards-content"},[{front:"\u4e2a\u4eba\u8d44\u6599",back:["\u59d3\u540d \uff1a \u5468\u8679","\u6027\u522b \uff1a \u5973","\u6c42\u804c\u610f\u5411 \uff1a web\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08","\u90ae\u7bb1 \uff1a 17691148782@163.com"]},{front:"\u5de5\u4f5c\u7ecf\u5386",back:["\u516c\u53f8 \uff1a 58\u540c\u57ce","\u804c\u52a1 \uff1a web\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08","\u5de5\u4f5c\u5185\u5bb9 \uff1a \u5f00\u53d1\u65b0\u9879\u76ee\u7ef4\u62a4\u8001\u9879\u76ee\uff0c\u4ea7\u51fa\u516c\u5171\u7ec4\u4ef6\u548c\u5de5\u5177\uff0c\u76f8\u5173\u9875\u9762\u7684\u6027\u80fd\u4f18\u5316\u548c\u6280\u672f\u521b\u65b0~","\u5de5\u4f5c\u804c\u8d23 \uff1a \u8d1f\u8d2358\u62db\u8058\u5168\u804cC\u7aef\u6240\u6709\u9879\u76ee\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\uff0c\u6d89\u53caPC/M/APP"]},{front:"\u9879\u76ee\u7ecf\u5386",back:["\u62db\u8058\u53d1\u73b0\u9875 \uff1a \u5355\u9875\u9762\uff0c\u4f7f\u7528PWA\u548c\u9aa8\u67b6\u5c4f\u4f18\u5316","IM\u63a8\u8350\u6d88\u606f\u9875 \uff1a \u804c\u4f4d\u5217\u8868\u4e3a\u4e3b\uff0capp\u5185push\u9875\u9762\uff0c\u652f\u6301\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a\u548c\u804c\u4f4d\u6807\u7b7e\u7684\u5207\u6362","\u77ed\u89c6\u9891\u4e13\u533a \uff1a \u4ee5\u77ed\u89c6\u9891\u62db\u8058\u4e3a\u4e3b\uff0c\u4f7f\u7528react-hook+ts\u4e3a\u6574\u4f53\u67b6\u6784\uff0c\u652f\u6301\u4e0a\u62c9\u5237\u65b0\u548c\u4e0b\u62c9\u52a0\u8f7d","\u4f18\u8d28\u804c\u4f4d\u4e13\u533a \uff1a \u4e3b\u8981\u4e3a\u804c\u4f4d\u5217\u8868\u548c\u517c\u804c\u5f15\u5bfc\u3002\u5305\u542b\u4e0b\u62c9\u5237\u65b0\uff0c\u804c\u4f4d\u6807\u7b7e\u5207\u6362\u548c\u804c\u4f4d\u8ba2\u9605\u5237\u65b0\u529f\u80fd\uff0c\u4ea7\u51fa\u7ec4\u4ef6"]},{front:"\u6211\u7684\u6280\u80fd",back:["\u6211 \uff1a 100%","html+css \uff1a 30%","react \uff1a 30%","webpack \uff1a 10%","js/es6 \uff1a 30%"]},{front:"\u6559\u80b2\u80cc\u666f",back:["\u65f6\u95f4 \uff1a 2014/9-2018/7","\u5b66\u6821 \uff1a \u897f\u5b89\u90ae\u7535\u5927\u5b66","\u4e13\u4e1a \uff1a \u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f","\u5b66\u4f4d \uff1a \u672c\u79d1"]},{front:"\u5176\u4ed6\u7ecf\u5386",back:["\u6709\u5f85\u8865\u5145"]}].map((function(e,t){return c.a.createElement("li",{className:a==t?"person-cards-block person-cards-block-hide":"person-cards-block",key:t,onMouseEnter:function(){return function(e){r(e)}(t)}},c.a.createElement("div",{className:"normal-intro"},c.a.createElement("div",{className:"title-img"}),c.a.createElement("div",{className:"title-intro"},e.front)),c.a.createElement("div",{className:a==t?"reverse-detail reverse-detail-show":"reverse-detail"},e.back.map((function(e,t){return c.a.createElement("p",{key:t},e)}))))}))),c.a.createElement("div",{className:"icon-more"}),c.a.createElement("div",{className:"userTool-content"},c.a.createElement(N,null)),c.a.createElement("div",{className:"icon-more"}),c.a.createElement(y,null),c.a.createElement("div",{className:"icon-more"}),c.a.createElement("div",{className:"extends-intro"},c.a.createElement("textarea",{name:"youSaid",id:"",ref:w,cols:30,rows:10,className:"youSaid-block",placeholder:"\u6709\u4ec0\u4e48\u60f3\u5bf9\u6211\u8bf4\u7684\u7545\u6240\u6b32\u8a00\u5427~",onChange:function(e){return console.log("I say:",w.current.value.length),v(w.current.value),void u(w.current.value.length)}}),i>10?c.a.createElement("div",{className:"youSaid-person-msg"},c.a.createElement("input",{ref:L,type:"text",placeholder:"\u6635\u79f0",onChange:function(){j(L.current.value)}})):"",c.a.createElement("div",{className:"youSaid-submit",onClick:function(){return C()}},"\u4fdd\u5b58")),c.a.createElement(x,null))},C=a(160),I=a.n(C),P=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),v=f[0],b=f[1],g=Object(n.useState)(""),k=Object(s.a)(g,2),N=k[0],O=k[1],j=Object(n.useState)(1),w=Object(s.a)(j,2),y=(w[0],w[1],p()),x=Object(s.a)(y,2),L=(x[0],x[1],function(){var e=Object(h.a)(E.a.mark((function e(){var t,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>0&&i.length>0&&v.length<1&&N.length<1)){e.next=19;break}return"34565E5T3",t=I.a.HmacMD5(i,"34565E5T3").toString(I.a.enc.Hex),n={name:a,password:t},e.next=7,r=n,m.a.post("".concat(S,"/user/login"),{username:r.name,password:r.password}).then((function(e){return console.log(e),e.data})).catch((function(e){console.log(e)}));case 7:c=e.sent,console.log("result",c),e.t0=c.status,e.next="0"===e.t0||"2"===e.t0?12:14;break;case 12:return window.location.href=window.location.origin,e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:e.next=17;break;case 17:e.next=21;break;case 19:O("\u672a\u6b63\u786e\u586b\u5199\u4fe1\u606f"),console.log(33);case 21:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){console.log(a,i);!/^[a-zA-Z0-9_-]{4,16}$/.test(a)&&a.length>0?b("4\u523016\u4f4d\uff08\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u3001\u51cf\u53f7\uff09"):b(""),!/^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(i)&&i.length>0?O("\u81f3\u5c116\u4f4d1\u4e2a\u5927\u5199\u5b57\u6bcd,1\u4e2a\u5c0f\u5199\u5b57\u6bcd,1\u4e2a\u6570\u5b57"):O("")}),[a,i]),c.a.createElement("div",{className:"loginPage-block"},c.a.createElement("div",{className:"main-block"},c.a.createElement("div",{className:"user-icon"},c.a.createElement("div",{className:"img"})),c.a.createElement("div",{className:"user-name"},c.a.createElement("input",{type:"text",name:"username",id:"name-input",onChange:function(e){return function(e){r(e.target.value)}(e)},maxLength:16}),""==v?"":c.a.createElement("p",null,v)),c.a.createElement("div",{className:"user-password"},c.a.createElement("input",{type:"password",name:"userpassword",id:"password-input",onChange:function(e){return function(e){u(e.target.value)}(e)},maxLength:20}),""==N?"":c.a.createElement("p",null,N)),c.a.createElement("div",{className:"button-login",onClick:function(e){var t=null,a=!0;return function(){if(a){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];e.call.apply(e,[null].concat(c)),a=!1}t&&clearTimeout(t),t=setTimeout((function(){a=!0}),2e3)}}(L)},"\u767b\u5f55")))},T=Object(i.g)((function(e){var t=Object(n.useState)({publishTime:"",title:"",context:"\u6682\u65e0\u66f4\u591a"}),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e.location.pathname.split("/")[2]||"",m.a.get("".concat(S,"/article/detail"),{params:{id:n},timeout:5e3}).then((function(e){return console.log(e),e.data.data})).catch((function(e){console.log(e)}));case 2:a=t.sent,console.log("list---",a),l(a);case 5:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement("div",{className:"ArticlePage-block"},c.a.createElement("div",{className:"content-main custom-html-style",dangerouslySetInnerHTML:{__html:r.context}})))})),M=(a(627),a(161)),_=a(278),A=a.n(_),H=a(279),R=a.n(H),B=(a(576),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)((new Date).toLocaleDateString()),f=Object(s.a)(d,2),p=f[0],v=f[1],b=Object(n.useState)([]),g=Object(s.a)(b,2),k=g[0],N=g[1],O=Object(n.useState)({}),j=Object(s.a)(O,2),w=j[0],y=j[1],x=Object(n.useRef)(null),L=new R.a,C=function(e){var t;e.stopPropagation(),console.log("html",i,p),(t={title:p,context:i,textType:w},m.a.post("".concat(S,"/article/save"),{title:t.title,context:t.context}).then((function(e){return console.log(e),e.data})).catch((function(e){console.log(e)}))).then((function(e){"0"==e.status?M.a.success({title:"\u53d1\u5e03\u6210\u529f",onOk:function(){window.location.href="//49.235.235.22:3000/web/mylog#/article"}}):M.a.error({title:"\u53d1\u5e03\u5931\u8d25"})}))};return Object(n.useEffect)((function(){document.addEventListener("click",(function(){r(!1)})),function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(S,"/article/tagList"),{timeout:5e3}).then((function(e){return console.log(e),e.data.data})).catch((function(e){console.log(e)}));case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c.a.createElement("div",{className:"MarkedPage-block"},c.a.createElement("div",{className:"Marked-nav-bar"},c.a.createElement("input",{type:"text",ref:x,className:"article-title",placeholder:"\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898...",onChange:function(){return v(x.current.value),void console.log("e",x.current.value)}}),c.a.createElement("div",{className:"save-intime"},"\u5df2\u81ea\u52a8\u4fdd\u5b58"),c.a.createElement("div",{className:"article-publish",onClick:function(e){return function(e){e.nativeEvent.stopImmediatePropagation(),r(!a)}(e)}},"\u53d1\u5e03",c.a.createElement("div",{className:a?"selectType":"selectType-hidden",onClick:function(e){return function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}(e)}},c.a.createElement("div",{className:"type-content"},k.map((function(e,t){return c.a.createElement("span",{className:"item-type",key:t,onClick:function(){return function(e){console.log(e),y(e)}(e)}},e.tagName)}))),c.a.createElement("div",{className:"button-submit",onClick:function(e){return C(e)}},"\u786e\u5b9a\u53d1\u5e03"))),c.a.createElement("div",{className:"user-icon"})),c.a.createElement(A.a,{value:"Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.",renderHTML:function(e){return L.render(e)},onChange:function(e){var t=e.html;e.text;u(t)}}))}),D=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(S,"/article/list"),{timeout:5e3}).then((function(e){return console.log(e),e.data})).catch((function(e){console.log(e)}));case 2:t=e.sent,console.log("list---",t.list),r(t.list);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{className:"ListPage-block"},c.a.createElement(O,null),c.a.createElement("div",{className:"center-List"},a.map((function(e,t){return c.a.createElement(j,{data:e,key:t})}))))};a(625);var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{initValue:{login:!1,username:""},reducer:function(e,t){var a=t.login,n=t.username;return"CHANGE_LIGIN"===t.type?{login:a}:"GETUSER_NAME"===t.type?{name:n}:void 0}},c.a.createElement(o.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:v}),c.a.createElement(i.b,{exact:!0,path:"/login",component:P}),c.a.createElement(i.b,{exact:!0,path:"/intro",component:L}),c.a.createElement(i.b,{path:"/article",component:T}),c.a.createElement(i.b,{path:"/edit",component:B}),c.a.createElement(i.b,{exact:!0,path:"/list",component:D}),c.a.createElement(i.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}});
//# sourceMappingURL=main.js.map