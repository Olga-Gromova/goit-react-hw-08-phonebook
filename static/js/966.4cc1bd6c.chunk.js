"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[966],{4889:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t.p+"static/media/imageBg.af6e251f8a810b5eb3aa.png",u=t(9434),o=t(6582),i=t(2577),c=t(824),a=t(9589),f=t(1775),l=t(4805),s=t(3329);function p(){var n=(0,u.v9)(f.xU),e=(0,l.useMediaQuery)({query:"(max-width: 1190px)"});return(0,s.jsx)(s.Fragment,{children:n?(0,s.jsx)(o.k,{w:"100%",h:"100vh",align:"center",justify:"center",paddingY:"400px",children:(0,s.jsx)(i.$,{size:"xl",color:"#188C69",thickness:"4px",speed:"0.65s",emptyColor:"gray.200"})}):(0,s.jsx)(c.xu,{as:"main",position:"relative",h:"100vh",backgroundImage:r,backgroundPosition:e?"left":"center",backgroundRepeat:"no-repet",backgroundSize:"cover",children:(0,s.jsx)(o.k,{flexDirection:"column",textAlign:"center",justifyContent:"center",children:(0,s.jsx)(a.X,{as:"h1",position:"absolute",top:"10px",color:"#192655",fontFamily:"Merriweather Sans",textShadow:"0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #2dd6f4,0 0 82px #2dd6f4,0 0 92px #2dd6f4,0 0 102px #2dd6f4,0 0 151px #2dd6f4",fontSize:e?"16px":"30px",width:"100%",children:"Welcome to contact book"})})})})}},1775:function(n,e,t){t.d(e,{Af:function(){return f},zh:function(){return p},mv:function(){return s},xU:function(){return l},hF:function(){return d}});var r="NOT_FOUND";var u=function(n,e){return n===e};function o(n,e){var t="object"===typeof e?e:{equalityCheck:e},o=t.equalityCheck,i=void 0===o?u:o,c=t.maxSize,a=void 0===c?1:c,f=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(i),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function u(n){var u=t.findIndex((function(t){return e(n,t.key)}));if(u>-1){var o=t[u];return u>0&&(t.splice(u,1),t.unshift(o)),o.value}return r}return{get:u,put:function(e,o){u(e)===r&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),f){var t=s.getEntries(),u=t.find((function(n){return f(n.value,e)}));u&&(e=u.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function i(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var o,c=0,a={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(a=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],h=i(r),v=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(d)),y=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return o=v.apply(null,n)}));return Object.assign(y,{resultFunc:f,memoizedResultFunc:v,dependencies:h,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),y};return u}var a=c(o),f=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},s=function(n){return n.contacts.isContactAdded},p=function(n){return n.contacts.error},d=a([function(n){return n.filter},f],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}))},9589:function(n,e,t){t.d(e,{X:function(){return p}});var r=t(1413),u=t(4925),o=t(5597),i=t(2481),c=t(2996),a=t(5113),f=t(6992),l=t(3329),s=["className"],p=(0,o.G)((function(n,e){var t=(0,i.mq)("Heading",n),o=(0,c.Lr)(n),p=(o.className,(0,u.Z)(o,s));return(0,l.jsx)(a.m.h2,(0,r.Z)((0,r.Z)({ref:e,className:(0,f.cx)("chakra-heading",n.className)},p),{},{__css:t}))}));p.displayName="Heading"}}]);
//# sourceMappingURL=966.4cc1bd6c.chunk.js.map