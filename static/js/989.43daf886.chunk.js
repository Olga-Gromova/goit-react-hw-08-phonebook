"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[989],{1989:function(e,r,i){i.r(r),i.d(r,{default:function(){return g}});var n=i(9434),a=i(9273),t=i(824),s=i(2949),o=i(6848),l=i(3959),d=i(3329),u=function(e){var r=e.message;return(0,d.jsx)(t.xu,{my:4,children:(0,d.jsxs)(s.b,{status:"error",borderRadius:4,children:[(0,d.jsx)(o.z,{}),(0,d.jsx)(l.X,{children:r})]})})},c=i(9657),v=i(930),m=i(6336),f=i(9055),h=i(4211),p=i(4217),x=function(){var e=(0,n.v9)(p.zh),r=(0,n.v9)(p.xU),i=(0,n.I0)();return(0,d.jsxs)(t.xu,{as:"form",minWidth:200,mx:"auto",onSubmit:function(e){e.preventDefault();var r=e.currentTarget;i((0,a.Ib)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()},textAlign:"center",children:[e&&(0,d.jsx)(u,{message:"Invalid email or password"}),(0,d.jsxs)(c.NI,{isRequired:!0,mb:"16px",children:[(0,d.jsx)(v.l,{children:"Email"}),(0,d.jsx)(m.I,{type:"email",name:"email",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",autoComplete:"email"})]}),(0,d.jsxs)(c.NI,{isRequired:!0,children:[(0,d.jsx)(v.l,{children:"Password"}),(0,d.jsx)(m.I,{type:"password",name:"password",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",autoComplete:"new-password"})]}),(0,d.jsx)(f.z,{type:"submit",width:"200px",mt:4,borderColor:"#89d3da",borderWidth:"1px",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:r?(0,d.jsx)(h.D,{isIndeterminate:!0,size:"24px",color:"#0cc0df"}):"Log in"})]})},b=i(8410);function g(){return(0,d.jsx)(t.xu,{as:"main",paddingY:"50px",bg:"#98b7d545",h:"100vh",children:(0,d.jsx)(b.W,{as:"section",children:(0,d.jsx)(x,{})})})}},930:function(e,r,i){i.d(r,{l:function(){return m}});var n=i(1413),a=i(4925),t=i(9657),s=i(5597),o=i(2481),l=i(2996),d=i(5812),u=i(6992),c=i(3329),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,s.G)((function(e,r){var i,s=(0,o.mq)("FormLabel",e),m=(0,l.Lr)(e),h=(m.className,m.children),p=m.requiredIndicator,x=void 0===p?(0,c.jsx)(f,{}):p,b=m.optionalIndicator,g=void 0===b?null:b,k=(0,a.Z)(m,v),Z=(0,t.NJ)(),I=null!=(i=null==Z?void 0:Z.getLabelProps(k,r))?i:(0,n.Z)({ref:r},k);return(0,c.jsxs)(d.m.label,(0,n.Z)((0,n.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,n.Z)({display:"block",textAlign:"start"},s),children:[h,(null==Z?void 0:Z.isRequired)?x:g]}))}));m.displayName="FormLabel";var f=(0,s.G)((function(e,r){var i=(0,t.NJ)(),a=(0,t.e)();if(!(null==i?void 0:i.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,r)),{},{__css:a.requiredIndicator,className:s}))}));f.displayName="RequiredIndicator"},9657:function(e,r,i){i.d(r,{NI:function(){return _},NJ:function(){return j},e:function(){return k}});var n=i(1413),a=i(4925),t=i(9439),s=i(9886),o=i(4591),l=i(5597),d=i(2481),u=i(2996),c=i(5812),v=i(6992),m=i(2791),f=i(3329),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],x=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,t.Z)(x,2),g=b[0],k=b[1],Z=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,t.Z)(Z,2),y=I[0],j=I[1];var _=(0,l.G)((function(e,r){var i=(0,d.jC)("Form",e),s=function(e){var r=e.id,i=e.isRequired,s=e.isInvalid,l=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,h),c=(0,m.useId)(),f=r||"field-".concat(c),p="".concat(f,"-label"),x="".concat(f,"-feedback"),b="".concat(f,"-helptext"),g=(0,m.useState)(!1),k=(0,t.Z)(g,2),Z=k[0],I=k[1],y=(0,m.useState)(!1),j=(0,t.Z)(y,2),_=j[0],N=j[1],R=(0,m.useState)(!1),C=(0,t.Z)(R,2),q=C[0],F=C[1],D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,o.lq)(r,(function(e){e&&N(!0)}))})}),[b]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:r,"data-focus":(0,v.PB)(q),"data-disabled":(0,v.PB)(l),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,l,q,s,d,p]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,o.lq)(r,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),z=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!l,isFocused:!!q,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:_,setHasHelpText:N,id:f,labelId:p,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:D,getErrorMessageProps:T,getRootProps:w,getLabelProps:P,getRequiredIndicatorProps:z}}((0,u.Lr)(e)),l=s.getRootProps,x=(s.htmlProps,(0,a.Z)(s,p)),b=(0,v.cx)("chakra-form-control",e.className);return(0,f.jsx)(y,{value:x,children:(0,f.jsx)(g,{value:i,children:(0,f.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},l({},r)),{},{className:b,__css:i.container}))})})}));_.displayName="FormControl",(0,l.G)((function(e,r){var i=j(),a=k(),t=(0,v.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getHelpTextProps(e,r)),{},{__css:a.helperText,className:t}))})).displayName="FormHelperText"},6336:function(e,r,i){i.d(r,{I:function(){return p}});var n=i(1413),a=i(4925),t=i(9657),s=i(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],l=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,i,o,d=(0,t.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,f=e.isRequired,h=e.isInvalid,p=e.isReadOnly,x=e.isDisabled,b=e.onFocus,g=e.onBlur,k=(0,a.Z)(e,l),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,n.Z)((0,n.Z)({},k),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:x)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=v?v:p)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=m?m:f)?o:null==d?void 0:d.isRequired,isInvalid:null!=h?h:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,g)})}(e),i=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,v=(0,a.Z)(r,o);return(0,n.Z)((0,n.Z)({},v),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=i(5597),c=i(2481),v=i(2996),m=i(5812),f=i(3329),h=["htmlSize"],p=(0,u.G)((function(e,r){var i=e.htmlSize,t=(0,a.Z)(e,h),o=(0,c.jC)("Input",t),l=d((0,v.Lr)(t)),u=(0,s.cx)("chakra-input",e.className);return(0,f.jsx)(m.m.input,(0,n.Z)((0,n.Z)({size:i},l),{},{__css:o.field,ref:r,className:u}))}));p.displayName="Input",p.id="Input"},8410:function(e,r,i){i.d(r,{W:function(){return v}});var n=i(1413),a=i(4925),t=i(5597),s=i(2996),o=i(2481),l=i(5812),d=i(6992),u=i(3329),c=["className","centerContent"],v=(0,t.G)((function(e,r){var i=(0,s.Lr)(e),t=i.className,v=i.centerContent,m=(0,a.Z)(i,c),f=(0,o.mq)("Container",e);return(0,u.jsx)(l.m.div,(0,n.Z)((0,n.Z)({ref:r,className:(0,d.cx)("chakra-container",t)},m),{},{__css:(0,n.Z)((0,n.Z)({},f),v&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));v.displayName="Container"},4211:function(e,r,i){i.d(r,{D:function(){return h}});var n=i(1413),a=i(4925),t=i(5812),s=i(3329),o=function(e){return(0,s.jsx)(t.m.circle,(0,n.Z)({cx:50,cy:50,r:42,fill:"transparent"},e))};o.displayName="Circle";var l=i(2554);var d=(0,l.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),u=(0,l.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});(0,l.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),(0,l.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});var c=["size","isIndeterminate"],v=function(e){var r=e.size,i=e.isIndeterminate,o=(0,a.Z)(e,c);return(0,s.jsx)(t.m.svg,(0,n.Z)({viewBox:"0 0 100 100",__css:{width:r,height:r,animation:i?"".concat(u," 2s linear infinite"):void 0}},o))};v.displayName="Shape";var m=i(5597),f=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],h=(0,m.G)((function(e,r){var i,l=e.size,u=void 0===l?"48px":l,c=e.max,m=void 0===c?100:c,h=e.min,p=void 0===h?0:h,x=e.valueText,b=e.getValueText,g=e.value,k=e.capIsRound,Z=e.children,I=e.thickness,y=void 0===I?"10px":I,j=e.color,_=void 0===j?"#0078d4":j,N=e.trackColor,R=void 0===N?"#edebe9":N,C=e.isIndeterminate,q=(0,a.Z)(e,f),F=function(e){var r=e.value,i=void 0===r?0:r,n=e.min,a=e.max,t=e.valueText,s=e.getValueText,o=e.isIndeterminate,l=e.role,d=void 0===l?"progressbar":l,u=function(e,r,i){return 100*(e-r)/(i-r)}(i,n,a);return{bind:{"data-indeterminate":o?"":void 0,"aria-valuemax":a,"aria-valuemin":n,"aria-valuenow":o?void 0:i,"aria-valuetext":function(){if(null!=i)return"function"===typeof s?s(i,u):t}(),role:d},percent:u,value:i}}({min:p,max:m,value:g,valueText:x,getValueText:b,isIndeterminate:C}),D=C?void 0:2.64*(null!=(i=F.percent)?i:0),P=null==D?void 0:"".concat(D," ").concat(264-D),T=C?{css:{animation:"".concat(d," 1.5s linear infinite")}}:{strokeDashoffset:66,strokeDasharray:P,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},w={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:u};return(0,s.jsxs)(t.m.div,(0,n.Z)((0,n.Z)((0,n.Z)({ref:r,className:"chakra-progress"},F.bind),q),{},{__css:w,children:[(0,s.jsxs)(v,{size:u,isIndeterminate:C,children:[(0,s.jsx)(o,{stroke:R,strokeWidth:y,className:"chakra-progress__track"}),(0,s.jsx)(o,(0,n.Z)({stroke:_,strokeWidth:y,className:"chakra-progress__indicator",strokeLinecap:k?"round":void 0,opacity:0!==F.value||C?void 0:0},T))]}),Z]}))}));h.displayName="CircularProgress"}}]);
//# sourceMappingURL=989.43daf886.chunk.js.map