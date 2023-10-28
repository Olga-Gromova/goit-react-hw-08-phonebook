"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[504],{7363:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(2791),i=t(9434),a=t(3634),o=t(1775),s=t.p+"static/media/emptyImg.59515d85cace2329bdec.png",c=t(9439),l=t(1413),u=t(1148),d=t(9517),f=t(1170);function p(e){var n=(0,f.uP)().theme,t=(0,u.OX)();return(0,r.useMemo)((function(){return(0,d.Cj)(n.direction,(0,l.Z)((0,l.Z)({},t),e))}),[e,n.direction,t])}var m=t(824),h=t(9657),x=t(930),g=t(6336),y=t(9055),v=t(4211),b=t(4805),j=t(3329),S=function(){var e=(0,r.useState)(""),n=(0,c.Z)(e,2),t=n[0],s=n[1],l=(0,r.useState)(""),u=(0,c.Z)(l,2),d=u[0],f=u[1],S=(0,i.v9)(o.Af),w=(0,i.v9)(o.mv),Z=(0,i.I0)(),k=p(),C=(0,b.useMediaQuery)({query:"(max-width: 1190px)"}),z=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":s(r);break;case"number":f(r);break;default:return}};return(0,j.jsxs)(m.xu,{as:"form",maxWidth:"660px",width:"50%",minWidth:"300px",padding:"10px",onSubmit:function(e){e.preventDefault();var n=e.target,t=n.elements.name.value,r=n.elements.number.value;S.find((function(e){return e.name===t}))&&w?k({position:"top-right",render:function(){return(0,j.jsxs)(m.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:[t," is already in contacts"]})}}):!function(e){return S.some((function(n){return n.number===e}))}(r)?(w&&k({position:"top-right",render:function(){return(0,j.jsx)(m.xu,{color:"white",p:3,bg:"#188C69",borderRadius:"10px",textAlign:"center",children:"The new contact was created!"})}}),Z((0,a.uK)({name:t,number:r})),s(""),f(""),n.reset()):k({position:"top-right",render:function(){return(0,j.jsxs)(m.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:[r," is already in contacts"]})}})},textAlign:"center",children:[(0,j.jsxs)(h.NI,{isRequired:!0,mb:"32px",children:[(0,j.jsx)(x.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:C?"18px":"24px",color:"#497a86",children:"Name"}),(0,j.jsx)(g.I,{type:"text",name:"name",onChange:z,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,autoComplete:"name",placeholder:"Enter name"})]}),(0,j.jsxs)(h.NI,{isRequired:!0,mb:"32px",children:[(0,j.jsx)(x.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:C?"18px":"24px",color:"#497a86",children:"Number"}),(0,j.jsx)(g.I,{type:"tel",name:"number",onChange:z,value:d,pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,placeholder:"Enter phone number"})]}),(0,j.jsx)(y.z,{fontFamily:"Merriweather Sans",fontWeight:"bold",fontSize:"18px",type:"submit",paddingX:"20px",paddingY:"12px",w:"160px",borderColor:"#89d3da",borderWidth:"1px",color:"#192655",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:w?"Add contact":(0,j.jsx)(v.D,{isIndeterminate:!0,size:"24px",color:"#188C69"})})]})},w=t(6582),Z=t(6762),k=t(269),C=t(3917),z=t(5597),F=(0,z.G)((function(e,n){return(0,j.jsx)(C.K,(0,l.Z)((0,l.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));F.displayName="VStack";var W=t(2715),N=function(e){var n=e.id,t=e.name,r=e.number,o=(0,i.I0)(),s=t.charAt(0);return(0,j.jsxs)(w.k,{as:"li",borderBottom:"1px",paddingY:"8px",justify:"space-between",align:"center",children:[(0,j.jsxs)(Z.U,{children:[(0,j.jsx)(k.q,{name:s,color:"#000",w:"50px",h:"50px",borderRadius:"50%",bg:"#abe1e8"}),(0,j.jsxs)(F,{justify:"flex-start",align:"self-start",children:[(0,j.jsx)(W.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:"18px",children:t}),(0,j.jsx)(W.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:"18px",children:r})]})]}),(0,j.jsx)(y.z,{type:"button",onClick:function(){return o((0,a.GK)(n))},borderColor:"#89d3da",borderWidth:"1px",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:"Delete"})]})},_=t(4942),A=t(4925),I=t(9640),L=t(9886),M=t(7200),O=t(2481),q=t(2996),P=t(5113),E=["children","styleType","stylePosition","spacing"],G=["as"],D=["as"],X=(0,L.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),R=(0,c.Z)(X,2),T=R[0],H=R[1],U=(0,z.G)((function(e,n){var t=(0,O.jC)("List",e),r=(0,q.Lr)(e),i=r.children,a=r.styleType,o=void 0===a?"none":a,s=r.stylePosition,c=r.spacing,u=(0,A.Z)(r,E),d=(0,M.W)(i),f=c?(0,_.Z)({},"& > *:not(style) ~ *:not(style)",{mt:c}):{};return(0,j.jsx)(T,{value:t,children:(0,j.jsx)(P.m.ul,(0,l.Z)((0,l.Z)({ref:n,listStyleType:o,listStylePosition:s,role:"list",__css:(0,l.Z)((0,l.Z)({},t.container),f)},u),{},{children:d}))})}));U.displayName="List",(0,z.G)((function(e,n){e.as;var t=(0,A.Z)(e,G);return(0,j.jsx)(U,(0,l.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList";var Y=(0,z.G)((function(e,n){e.as;var t=(0,A.Z)(e,D);return(0,j.jsx)(U,(0,l.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))}));Y.displayName="UnorderedList",(0,z.G)((function(e,n){var t=H();return(0,j.jsx)(P.m.li,(0,l.Z)((0,l.Z)({ref:n},e),{},{__css:t.item}))})).displayName="ListItem",(0,z.G)((function(e,n){var t=H();return(0,j.jsx)(I.J,(0,l.Z)((0,l.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var K=function(){var e=(0,i.v9)(o.hF);return(0,j.jsx)(Y,{paddingX:"10px",m:"0",children:null===e||void 0===e?void 0:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,j.jsx)(N,{id:n,name:t,number:r},n)}))})},Q=t(4808),B=function(){var e=(0,i.I0)(),n=(0,b.useMediaQuery)({query:"(max-width: 1190px)"});return(0,j.jsxs)(Z.U,{gap:"5px",justify:"space-between",mb:"5px",children:[(0,j.jsx)(W.x,{minH:"50%",fontFamily:"Merriweather Sans",fontWeight:300,fontSize:n?"18px":"24px",color:"#497a86",children:"Find contacts by name:"}),(0,j.jsx)(g.I,{maxW:"50%",marginInlineStart:"0px",type:"text",name:"filter",onChange:function(n){return e((0,Q.h)(n.target.value))},borderColor:"#89d3da",borderWidth:"1px",bg:"#fff"})]})},J=t(8410),V=t(9589),$=["axis"],ee=(0,P.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});ee.displayName="Center";var ne={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},te=((0,z.G)((function(e,n){var t=e.axis,r=void 0===t?"both":t,i=(0,A.Z)(e,$);return(0,j.jsx)(P.m.div,(0,l.Z)((0,l.Z)({ref:n,__css:ne[r]},i),{},{position:"absolute"}))})),t(7762)),re=["htmlWidth","htmlHeight","alt"],ie=(0,z.G)((function(e,n){var t=e.htmlWidth,r=e.htmlHeight,i=e.alt,a=(0,A.Z)(e,re);return(0,j.jsx)("img",(0,l.Z)({width:t,height:r,ref:n,alt:i},a))}));ie.displayName="NativeImage";var ae=t(405),oe=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var se=(0,z.G)((function(e,n){var t=e.fallbackSrc,r=e.fallback,i=e.src,a=e.srcSet,o=e.align,s=e.fit,c=e.loading,u=e.ignoreFallback,d=e.crossOrigin,f=e.fallbackStrategy,p=void 0===f?"beforeLoadOrError":f,m=e.referrerPolicy,h=(0,A.Z)(e,oe),x=null!=c||u||!(void 0!==t||void 0!==r),g=(0,ae.d)((0,l.Z)((0,l.Z)({},e),{},{crossOrigin:d,ignoreFallback:x})),y=(0,ae.z)(g,p),v=(0,l.Z)({ref:n,objectFit:s,objectPosition:o},x?h:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),i=(0,te.Z)(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;a in r&&delete r[a]}}catch(o){i.e(o)}finally{i.f()}return r}(h,["onError","onLoad"]));return y?r||(0,j.jsx)(P.m.img,(0,l.Z)({as:ie,className:"chakra-image__placeholder",src:t},v)):(0,j.jsx)(P.m.img,(0,l.Z)({as:ie,src:i,srcSet:a,crossOrigin:d,loading:c,referrerPolicy:m,className:"chakra-image"},v))}));function ce(){var e=(0,i.I0)(),n=(0,i.v9)(o.zh),t=(0,i.v9)(o.xU),c=(0,i.v9)(o.Af),l=(0,b.useMediaQuery)({query:"(max-width: 1190px)"});return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,j.jsx)(m.xu,{as:"main",paddingY:"10px",bg:"#FDF8D7",h:"100vh",children:(0,j.jsxs)(J.W,{maxW:"100%",marginX:"auto",paddingX:"44px",bg:"#FDF8D7",children:[(0,j.jsx)(V.X,{align:"center",mb:"10px",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:l?"24px":"30px",color:"#497a86",children:"Welcom in your Personal Phonebook"}),(0,j.jsxs)(m.xu,{gap:"5px",justifyItems:"center",display:"grid",children:[(0,j.jsx)(V.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:l?"26px":"28px",color:"#497a86",children:"Please, input name & number for a creation a new contact"}),(0,j.jsx)(S,{}),(0,j.jsxs)(m.xu,{padding:"10px",maxWidth:"660px",minWidth:"300px",children:[(0,j.jsx)(V.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:l?"26px":"28px",mb:"10px",color:"#497a86",children:"Contacts"}),0===(null===c||void 0===c?void 0:c.length)?(0,j.jsxs)(ee,{flexDirection:"column",children:[(0,j.jsx)(W.x,{fontWeight:"bold",color:"#89d3da",fontFamily:"Merriweather Sans",fontSize:l?"18px":"24px",mb:"10px",children:"...Here is empty"}),(0,j.jsx)(se,{src:s,alt:"empty image",boxSize:"150px"})]}):(0,j.jsxs)("div",{children:[t&&(0,j.jsx)(v.D,{isIndeterminate:!0,size:"24px",color:"#0cc0df"}),!t&&c.length>0&&(0,j.jsx)(B,{}),n&&(0,j.jsx)("p",{children:"Something goes wrong"}),!t&&c.length>0&&(0,j.jsx)(m.xu,{overflowY:"auto",h:"230px",children:(0,j.jsx)(K,{})})]})]})]})]})})}se.displayName="Image"},1775:function(e,n,t){t.d(n,{Af:function(){return l},zh:function(){return f},mv:function(){return d},xU:function(){return u},hF:function(){return p}});var r="NOT_FOUND";var i=function(e,n){return e===n};function a(e,n){var t="object"===typeof n?n:{equalityCheck:n},a=t.equalityCheck,o=void 0===a?i:a,s=t.maxSize,c=void 0===s?1:s,l=t.resultEqualityCheck,u=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(o),d=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(u):function(e,n){var t=[];function i(e){var i=t.findIndex((function(t){return n(e,t.key)}));if(i>-1){var a=t[i];return i>0&&(t.splice(i,1),t.unshift(a)),a.value}return r}return{get:i,put:function(n,a){i(n)===r&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,u);function f(){var n=d.get(arguments);if(n===r){if(n=e.apply(null,arguments),l){var t=d.getEntries(),i=t.find((function(e){return l(e.value,n)}));i&&(n=i.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a,s=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,d=u.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],m=o(r),h=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(p)),x=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:h,dependencies:m,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),x};return i}var c=s(a),l=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.isContactAdded},f=function(e){return e.contacts.error},p=c([function(e){return e.filter},l],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}))},9589:function(e,n,t){t.d(n,{X:function(){return f}});var r=t(1413),i=t(4925),a=t(5597),o=t(2481),s=t(2996),c=t(5113),l=t(6992),u=t(3329),d=["className"],f=(0,a.G)((function(e,n){var t=(0,o.mq)("Heading",e),a=(0,s.Lr)(e),f=(a.className,(0,i.Z)(a,d));return(0,u.jsx)(c.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,l.cx)("chakra-heading",e.className)},f),{},{__css:t}))}));f.displayName="Heading"}}]);
//# sourceMappingURL=504.d458aa50.chunk.js.map