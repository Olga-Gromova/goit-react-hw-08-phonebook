"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[649],{4649:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var i=n(9434),l=n(9273),a=n(824),s=n(9657),t=n(930),o=n(6336),d=n(9055),u=n(3329),c=function(){var e=(0,i.I0)();return(0,u.jsxs)(a.xu,{as:"form",width:400,mx:"auto",onSubmit:function(r){r.preventDefault();var n=r.currentTarget;e((0,l.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),n.reset()},textAlign:"center",children:[(0,u.jsxs)(s.NI,{isRequired:!0,mb:"16px",children:[(0,u.jsx)(t.l,{children:"Username"}),(0,u.jsx)(o.I,{type:"text",name:"name",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",autoComplete:"name"})]}),(0,u.jsxs)(s.NI,{isRequired:!0,mb:"16px",children:[(0,u.jsx)(t.l,{children:"Email"}),(0,u.jsx)(o.I,{type:"email",name:"email",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",autoComplete:"email"})]}),(0,u.jsxs)(s.NI,{isRequired:!0,children:[(0,u.jsx)(t.l,{children:"Password"}),(0,u.jsx)(o.I,{type:"password",name:"password",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",autoComplete:"new-password"})]}),(0,u.jsx)(d.z,{type:"submit",width:"200px",mt:4,borderColor:"#89d3da",borderWidth:"1px",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:"Sign up"})]})},m=n(8410);function v(){return(0,u.jsx)(a.xu,{as:"main",paddingY:"50px",bg:"#FDF8D7",h:"100vh",children:(0,u.jsx)(m.W,{as:"section",children:(0,u.jsx)(c,{})})})}},930:function(e,r,n){n.d(r,{l:function(){return v}});var i=n(1413),l=n(4925),a=n(9657),s=n(5597),t=n(2481),o=n(2996),d=n(5113),u=n(6992),c=n(3329),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,r){var n,s=(0,t.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),h=v.requiredIndicator,b=void 0===h?(0,c.jsx)(p,{}):h,x=v.optionalIndicator,Z=void 0===x?null:x,g=(0,l.Z)(v,m),I=(0,a.NJ)(),y=null!=(n=null==I?void 0:I.getLabelProps(g,r))?n:(0,i.Z)({ref:r},g);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},s),children:[f,(null==I?void 0:I.isRequired)?b:Z]}))}));v.displayName="FormLabel";var p=(0,s.G)((function(e,r){var n=(0,a.NJ)(),l=(0,a.e)();if(!(null==n?void 0:n.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:l.requiredIndicator,className:s}))}));p.displayName="RequiredIndicator"},9657:function(e,r,n){n.d(r,{NI:function(){return R},NJ:function(){return N},e:function(){return g}});var i=n(1413),l=n(4925),a=n(9439),s=n(9886),t=n(4591),o=n(5597),d=n(2481),u=n(2996),c=n(5113),m=n(6992),v=n(2791),p=n(3329),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],g=x[1],I=(0,s.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(I,2),q=y[0],N=y[1];var R=(0,o.G)((function(e,r){var n=(0,d.jC)("Form",e),s=function(e){var r=e.id,n=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,f),c=(0,v.useId)(),p=r||"field-".concat(c),h="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),g=(0,a.Z)(Z,2),I=g[0],y=g[1],q=(0,v.useState)(!1),N=(0,a.Z)(q,2),R=N[0],C=N[1],_=(0,v.useState)(!1),j=(0,a.Z)(_,2),k=j[0],F=j[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,t.lq)(r,(function(e){e&&C(!0)}))})}),[x]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(k),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,o,k,s,d,h]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,t.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!k,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:R,setHasHelpText:C,id:p,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:D,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=s.getRootProps,b=(s.htmlProps,(0,l.Z)(s,h)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(Z,{value:n,children:(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},r)),{},{className:x,__css:n.container}))})})}));R.displayName="FormControl",(0,o.G)((function(e,r){var n=N(),l=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},6336:function(e,r,n){n.d(r,{I:function(){return h}});var i=n(1413),l=n(4925),a=n(9657),s=n(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,t,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,f=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,g=(0,l.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:b)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=m?m:h)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:p)?t:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,Z)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,l.Z)(r,t);return(0,i.Z)((0,i.Z)({},m),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=n(5597),c=n(2481),m=n(2996),v=n(5113),p=n(3329),f=["htmlSize"],h=(0,u.G)((function(e,r){var n=e.htmlSize,a=(0,l.Z)(e,f),t=(0,c.jC)("Input",a),o=d((0,m.Lr)(a)),u=(0,s.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:n},o),{},{__css:t.field,ref:r,className:u}))}));h.displayName="Input",h.id="Input"},8410:function(e,r,n){n.d(r,{W:function(){return m}});var i=n(1413),l=n(4925),a=n(5597),s=n(2996),t=n(2481),o=n(5113),d=n(6992),u=n(3329),c=["className","centerContent"],m=(0,a.G)((function(e,r){var n=(0,s.Lr)(e),a=n.className,m=n.centerContent,v=(0,l.Z)(n,c),p=(0,t.mq)("Container",e);return(0,u.jsx)(o.m.div,(0,i.Z)((0,i.Z)({ref:r,className:(0,d.cx)("chakra-container",a)},v),{},{__css:(0,i.Z)((0,i.Z)({},p),m&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));m.displayName="Container"}}]);
//# sourceMappingURL=649.031ec601.chunk.js.map