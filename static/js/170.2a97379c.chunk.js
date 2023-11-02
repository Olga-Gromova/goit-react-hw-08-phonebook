"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[170],{2828:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var r=t(2791),a=t(9434),i=t(3634),o=t(1775),s=t.p+"static/media/emptyImg.59515d85cace2329bdec.png",c=t(9439),l=t(8382),u=t(824),d=t(9657),f=t(930),p=t(6336),h=t(9055),m=t(4211),x=t(3329),g=function(){var e=(0,r.useState)(""),n=(0,c.Z)(e,2),t=n[0],s=n[1],g=(0,r.useState)(""),v=(0,c.Z)(g,2),y=v[0],b=v[1],j=(0,a.v9)(o.Af),w=(0,a.v9)(o.mv),S=(0,a.I0)(),Z=(0,l.p)(),C=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":s(r);break;case"number":b(r);break;default:return}};return(0,x.jsxs)(u.xu,{as:"form",maxWidth:"660px",width:"50%",minWidth:"200px",padding:"10px",onSubmit:function(e){e.preventDefault();var n=e.target,t=n.elements.name.value,r=n.elements.number.value;j.find((function(e){return e.name===t}))&&w?Z({position:"top",render:function(){return(0,x.jsxs)(u.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:["Contact wiht name: ",t," have already included in your phonebook"]})}}):!function(e){return j.some((function(n){return n.number===e}))}(r)?(w&&Z({position:"top",render:function(){return(0,x.jsx)(u.xu,{color:"white",p:3,bg:"#188C69",borderRadius:"10px",textAlign:"center",children:"The new contact was created!"})}}),S((0,i.uK)({name:t,number:r})),s(""),b(""),n.reset()):Z({position:"top",render:function(){return(0,x.jsxs)(u.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:["The number: ",r," have already included to your phonebook"]})}})},textAlign:"center",children:[(0,x.jsxs)(d.NI,{isRequired:!0,mb:"32px",children:[(0,x.jsx)(f.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Name"}),(0,x.jsx)(p.I,{type:"text",name:"name",onChange:C,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,autoComplete:"name",placeholder:"Enter name"})]}),(0,x.jsxs)(d.NI,{isRequired:!0,mb:"32px",children:[(0,x.jsx)(f.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Number"}),(0,x.jsx)(p.I,{type:"tel",name:"number",onChange:C,value:y,pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,placeholder:"Enter phone number"})]}),(0,x.jsx)(h.z,{fontFamily:"Merriweather Sans",fontWeight:"bold",fontSize:"18px",type:"submit",paddingX:"20px",paddingY:"12px",w:"160px",borderColor:"#89d3da",borderWidth:"1px",color:"#192655",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:w?"Add contact":(0,x.jsx)(m.D,{isIndeterminate:!0,size:"24px",color:"#188C69"})})]})},v=t(6582),y=t(6762),b=t(269),j=t(1917),w=t(2715),S=t(1413),Z=t(9640),C=t(5597);var k=function(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,a=e.d,i=e.displayName,o=e.defaultProps,s=void 0===o?{}:o,c=r.Children.toArray(e.path),l=(0,C.G)((function(e,n){return(0,x.jsx)(Z.J,(0,S.Z)((0,S.Z)((0,S.Z)({ref:n,viewBox:t},s),e),{},{children:c.length?c:(0,x.jsx)("path",{fill:"currentColor",d:a})}))}));return l.displayName=i,l}({displayName:"DeleteIcon",path:(0,x.jsx)("g",{fill:"currentColor",children:(0,x.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),z=function(e){var n=e.id,t=e.name,r=e.number,o=(0,a.I0)(),s=t.charAt(0);return(0,x.jsxs)(v.k,{as:"li",borderBottom:"1px",paddingY:"8px",justify:"space-between",align:"center",children:[(0,x.jsxs)(y.U,{children:[(0,x.jsx)(b.q,{name:s,color:"white",w:{base:"30px",md:"50px"},h:{base:"30px",md:"50px"},borderRadius:"50%",bg:"#acbcff"}),(0,x.jsxs)(j.g,{justify:"flex-start",align:"self-start",minW:"100px",mr:"10px",children:[(0,x.jsx)(w.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"14px",md:"18px"},children:t}),(0,x.jsx)(w.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"14px",md:"18px"},children:r})]})]}),(0,x.jsx)(u.Cd,{size:{base:"30px",md:"50px"},bg:"#ACBCFF",color:"white",type:"button",onClick:function(){return o((0,i.GK)(n))},_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:(0,x.jsx)(k,{})})]})},F=t(4942),A=t(4925),W=t(9886),N=t(7200),_=t(2481),I=t(2996),M=t(5113),L=["children","styleType","stylePosition","spacing"],O=["as"],P=["as"],E=(0,W.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),G=(0,c.Z)(E,2),q=G[0],D=G[1],X=(0,C.G)((function(e,n){var t=(0,_.jC)("List",e),r=(0,I.Lr)(e),a=r.children,i=r.styleType,o=void 0===i?"none":i,s=r.stylePosition,c=r.spacing,l=(0,A.Z)(r,L),u=(0,N.W)(a),d=c?(0,F.Z)({},"& > *:not(style) ~ *:not(style)",{mt:c}):{};return(0,x.jsx)(q,{value:t,children:(0,x.jsx)(M.m.ul,(0,S.Z)((0,S.Z)({ref:n,listStyleType:o,listStylePosition:s,role:"list",__css:(0,S.Z)((0,S.Z)({},t.container),d)},l),{},{children:u}))})}));X.displayName="List",(0,C.G)((function(e,n){e.as;var t=(0,A.Z)(e,O);return(0,x.jsx)(X,(0,S.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList";var R=(0,C.G)((function(e,n){e.as;var t=(0,A.Z)(e,P);return(0,x.jsx)(X,(0,S.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))}));R.displayName="UnorderedList",(0,C.G)((function(e,n){var t=D();return(0,x.jsx)(M.m.li,(0,S.Z)((0,S.Z)({ref:n},e),{},{__css:t.item}))})).displayName="ListItem",(0,C.G)((function(e,n){var t=D();return(0,x.jsx)(Z.J,(0,S.Z)((0,S.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var T=function(){var e=(0,a.v9)(o.hF);return(0,x.jsx)(R,{paddingX:"10px",m:"0",children:null===e||void 0===e?void 0:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,x.jsx)(z,{id:n,name:t,number:r},n)}))})},H=t(4808),B=function(){var e=(0,a.I0)();return(0,x.jsxs)(j.g,{gap:"5px",justify:"space-between",mb:"5px",children:[(0,x.jsx)(w.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Find contacts by name:"}),(0,x.jsx)(p.I,{maxW:"600px",w:"100%",minW:"200px",marginInlineStart:"0px",type:"text",name:"filter",onChange:function(n){return e((0,H.h)(n.target.value))},borderColor:"#89d3da",borderWidth:"1px",bg:"#fff"})]})},U=t(8410),Y=t(9589),J=t(6484),K=t(7762),V=["htmlWidth","htmlHeight","alt"],Q=(0,C.G)((function(e,n){var t=e.htmlWidth,r=e.htmlHeight,a=e.alt,i=(0,A.Z)(e,V);return(0,x.jsx)("img",(0,S.Z)({width:t,height:r,ref:n,alt:a},i))}));Q.displayName="NativeImage";var $=t(405),ee=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var ne=(0,C.G)((function(e,n){var t=e.fallbackSrc,r=e.fallback,a=e.src,i=e.srcSet,o=e.align,s=e.fit,c=e.loading,l=e.ignoreFallback,u=e.crossOrigin,d=e.fallbackStrategy,f=void 0===d?"beforeLoadOrError":d,p=e.referrerPolicy,h=(0,A.Z)(e,ee),m=null!=c||l||!(void 0!==t||void 0!==r),g=(0,$.d)((0,S.Z)((0,S.Z)({},e),{},{crossOrigin:u,ignoreFallback:m})),v=(0,$.z)(g,f),y=(0,S.Z)({ref:n,objectFit:s,objectPosition:o},m?h:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=(0,K.Z)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(o){a.e(o)}finally{a.f()}return r}(h,["onError","onLoad"]));return v?r||(0,x.jsx)(M.m.img,(0,S.Z)({as:Q,className:"chakra-image__placeholder",src:t},y)):(0,x.jsx)(M.m.img,(0,S.Z)({as:Q,src:a,srcSet:i,crossOrigin:u,loading:c,referrerPolicy:p,className:"chakra-image"},y))}));ne.displayName="Image";var te=t(4805);function re(){var e=(0,a.I0)(),n=(0,a.v9)(o.zh),t=(0,a.v9)(o.xU),c=(0,a.v9)(o.Af),l=(0,te.useMediaQuery)({query:"(max-width: 1190px)"});return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,x.jsx)(u.xu,{as:"main",paddingY:"5px",bg:"#FDF8D7",h:"100vh",children:(0,x.jsxs)(U.W,{maxW:"100%",marginX:"auto",paddingX:"10px",bg:"#FDF8D7",children:[(0,x.jsx)(Y.X,{align:"center",mb:"10px",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:l?"18px":"30px",color:"#497a86",children:"Welcom in your Personal Phonebook"}),(0,x.jsxs)(u.xu,{gap:"5px",justifyItems:"center",display:"grid",children:[(0,x.jsx)(Y.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:l?"16px":"28px",color:"#497a86",children:"Please, input name & number for a creation a new contact"}),(0,x.jsx)(g,{}),(0,x.jsxs)(u.xu,{padding:"10px",maxWidth:"660px",minWidth:"200px",width:"100%",children:[(0,x.jsx)(Y.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:"bold",fontSize:l?"18px":"28px",mb:"10px",color:"#497a86",children:"Contacts"}),0===(null===c||void 0===c?void 0:c.length)?(0,x.jsxs)(J.M,{flexDirection:"column",children:[(0,x.jsx)(w.x,{fontWeight:"bold",color:"#89d3da",fontFamily:"Merriweather Sans",fontSize:l?"18px":"24px",mb:"10px",children:"...Here is empty"}),(0,x.jsx)(ne,{src:s,alt:"empty image",boxSize:"150px"})]}):(0,x.jsxs)("div",{children:[t&&(0,x.jsx)(m.D,{isIndeterminate:!0,size:"24px",color:"#0cc0df"}),!t&&c.length>0&&(0,x.jsx)(B,{}),n&&(0,x.jsx)("p",{children:"Something goes wrong"}),!t&&c.length>0&&(0,x.jsx)(u.xu,{overflowY:"auto",h:"230px",children:(0,x.jsx)(T,{})})]})]})]})]})})}},1775:function(e,n,t){t.d(n,{Af:function(){return l},zh:function(){return f},mv:function(){return d},xU:function(){return u},hF:function(){return p}});var r="NOT_FOUND";var a=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},i=t.equalityCheck,o=void 0===i?a:i,s=t.maxSize,c=void 0===s?1:s,l=t.resultEqualityCheck,u=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(o),d=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(u):function(e,n){var t=[];function a(e){var a=t.findIndex((function(t){return n(e,t.key)}));if(a>-1){var i=t[a];return a>0&&(t.splice(a,1),t.unshift(i)),i.value}return r}return{get:a,put:function(n,i){a(n)===r&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,u);function f(){var n=d.get(arguments);if(n===r){if(n=e.apply(null,arguments),l){var t=d.getEntries(),a=t.find((function(e){return l(e.value,n)}));a&&(n=a.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i,s=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,d=u.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],h=o(r),m=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(p)),x=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return i=m.apply(null,e)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:m,dependencies:h,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),x};return a}var c=s(i),l=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.isContactAdded},f=function(e){return e.contacts.error},p=c([function(e){return e.filter},l],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}))},9589:function(e,n,t){t.d(n,{X:function(){return f}});var r=t(1413),a=t(4925),i=t(5597),o=t(2481),s=t(2996),c=t(5113),l=t(6992),u=t(3329),d=["className"],f=(0,i.G)((function(e,n){var t=(0,o.mq)("Heading",e),i=(0,s.Lr)(e),f=(i.className,(0,a.Z)(i,d));return(0,u.jsx)(c.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,l.cx)("chakra-heading",e.className)},f),{},{__css:t}))}));f.displayName="Heading"},6484:function(e,n,t){t.d(n,{M:function(){return l}});var r=t(1413),a=t(4925),i=t(5113),o=t(5597),s=t(3329),c=["axis"],l=(0,i.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});l.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)((function(e,n){var t=e.axis,o=void 0===t?"both":t,l=(0,a.Z)(e,c);return(0,s.jsx)(i.m.div,(0,r.Z)((0,r.Z)({ref:n,__css:u[o]},l),{},{position:"absolute"}))}))},8382:function(e,n,t){t.d(n,{p:function(){return c}});var r=t(1413),a=t(603),i=t(9517),o=t(1170),s=t(2791);function c(e){var n=(0,o.uP)().theme,t=(0,a.OX)();return(0,s.useMemo)((function(){return(0,i.Cj)(n.direction,(0,r.Z)((0,r.Z)({},t),e))}),[e,n.direction,t])}}}]);
//# sourceMappingURL=170.2a97379c.chunk.js.map