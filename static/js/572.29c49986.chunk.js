"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[572],{5014:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r,i=t(2791),o=t(9434),a=t(3634),s=t(2946),d=t.p+"static/media/emptyImg.0a4da7b0bd0dbaa8c0cf.png",u=t(9439),c=t(8382),l=t(824),x=t(9657),p=t(930),f=t(6336),m=t(9055),h=t(4211),b=t(3329),g=function(){var e=(0,i.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],d=(0,i.useState)(""),g=(0,u.Z)(d,2),j=g[0],w=g[1],v=(0,o.v9)(s.Af),y=(0,o.v9)(s.mv),S=(0,o.I0)(),C=(0,c.p)(),W=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"name":r(i);break;case"number":w(i);break;default:return}};return(0,b.jsxs)(l.xu,{as:"form",maxWidth:"660px",width:"50%",minWidth:"200px",padding:"10px",onSubmit:function(e){e.preventDefault();var n=e.target,t=n.elements.name.value,i=n.elements.number.value;v.find((function(e){return e.name===t}))&&y?C({position:"top",render:function(){return(0,b.jsxs)(l.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:["Contact wiht name: ",t," have already included in your phonebook"]})}}):!function(e){return v.some((function(n){return n.number===e}))}(i)?(S((0,a.uK)({name:t,number:i})),r(""),w(""),C({position:"top",render:function(){return(0,b.jsxs)(l.xu,{color:"white",p:3,bg:"#5F8D4E",borderRadius:"10px",textAlign:"center",children:["The new contact wiht name: ",t," was created successfully"]})}}),n.reset()):C({position:"top",render:function(){return(0,b.jsxs)(l.xu,{color:"white",p:3,bg:"#e84a5f",borderRadius:"10px",textAlign:"center",children:["The number: ",i," have already included to your phonebook"]})}})},textAlign:"center",children:[(0,b.jsxs)(x.NI,{isRequired:!0,mb:"32px",children:[(0,b.jsx)(p.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Name"}),(0,b.jsx)(f.I,{type:"text",name:"name",onChange:W,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,autoComplete:"name",placeholder:"Enter name"})]}),(0,b.jsxs)(x.NI,{isRequired:!0,mb:"32px",children:[(0,b.jsx)(p.l,{fontFamily:"Merriweather Sans",fontWeight:400,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Number"}),(0,b.jsx)(f.I,{type:"tel",name:"number",onChange:W,value:j,pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",borderColor:"#89d3da",borderWidth:"1px",bg:"#fff",required:!0,placeholder:"Enter phone number"})]}),(0,b.jsx)(m.z,{fontFamily:"Merriweather Sans",fontWeight:"bold",fontSize:"18px",type:"submit",paddingX:"20px",paddingY:"12px",w:"160px",borderColor:"#89d3da",borderWidth:"1px",color:"#192655",_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:y?"Add contact":(0,b.jsx)(h.D,{isIndeterminate:!0,size:"24px",color:"#188C69"})})]})},j=t(9129),w=t(6582),v=t(6762),y=t(269),S=t(1917),C=t(2715),W=t(9640),F=t(8771),z=t(3656),k=function(){return(0,b.jsx)(z.s5,{strokeColor:"#192655",strokeWidth:"5",animationDuration:"0.75",width:"32",visible:!0})},I=t(1413),A=t(4695),Z=t(1134),M=t(4651),_=t(8007),q=t(168),B=t(8126).ZP.form(r||(r=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  input {\n    max-width: 200px;\n    border: none;\n    border-radius: 20px;\n    padding-left: 10px;\n  }\n\n  .saveButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    border: 2px solid #007bff;\n    transition: all 0.3s ease-in-out;\n    font-size: 22px;\n    color: #007bff;\n    &:hover,\n    &:focus {\n      background-color: #007bff;\n      color: white;\n      box-shadow: 0px 0px 10px 5px rgba(0, 0, 255, 0.4);\n    }\n  }\n"]))),X=t(9459),E=_.Ry({name:_.Z_().min(3).max(32).required(),number:_.Z_().min(3).max(16).required()}).required(),N=function(e){var n=e.id,t=e.toggleEdit,r=e.name,i=e.number,s=(0,Z.cI)({defaultValues:{name:r,number:i},resolver:(0,A.X)(E)}),d=s.register,u=s.handleSubmit,c=(0,o.I0)();return(0,b.jsxs)(B,{onSubmit:u((function(e){var r={name:e.name,number:e.number,id:n};c((0,a.mP)(r)),t()})),autoComplete:"off",children:[(0,b.jsx)("input",(0,I.Z)((0,I.Z)({type:"text"},d("name")),{},{autoFocus:!0,autoComplete:"name"})),(0,b.jsx)("input",(0,I.Z)((0,I.Z)({type:"text"},d("number")),{},{autoComplete:"number"})),(0,b.jsx)("button",{className:"saveButton",type:"submit",children:(0,b.jsx)(X.T,{})}),(0,b.jsx)("button",{className:"saveButton",type:"submit",children:(0,b.jsx)(M.SYS,{})})]})},P=function(e){var n=e.id,t=e.name,r=e.number,s=(0,o.I0)(),d=(0,i.useState)(!1),c=(0,u.Z)(d,2),x=c[0],p=c[1],f=(0,i.useState)(!1),m=(0,u.Z)(f,2),h=m[0],g=m[1],z=function(){g(!h)},I=t.charAt(0);return(0,b.jsx)(w.k,{as:"li",borderBottom:"1px",paddingY:"8px",justify:"space-between",align:"center",children:h?(0,b.jsx)(N,{id:n,toggleEdit:z,name:t,number:r}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(v.U,{children:[(0,b.jsx)(y.q,{name:I,color:"white",w:{base:"30px",md:"50px"},h:{base:"30px",md:"50px"},borderRadius:"50%",bg:"#80B3FF"}),(0,b.jsxs)(S.g,{justify:"flex-start",align:"self-start",minW:"100px",mr:"10px",children:[(0,b.jsx)(C.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"14px",md:"18px"},children:t}),(0,b.jsx)(C.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"14px",md:"18px"},children:r})]})]}),(0,b.jsxs)(v.U,{justify:"flex-end",align:"self-end",children:[(0,b.jsx)(l.Cd,{size:{base:"30px",md:"50px"},bg:"#80B3FF",color:"white",type:"button",onClick:z,_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:(0,b.jsx)(W.J,{as:j.j1C,w:5,h:5,color:"white"})}),(0,b.jsx)(l.Cd,{size:{base:"30px",md:"50px"},bg:"#80B3FF",color:"white",type:"button",disabled:x,onClick:function(){return function(e){p(!0),s((0,a.GK)(e)).unwrap().then((function(){return p(!1)}))}(n)},_hover:{bg:"#0cc0df",borderColor:"transparent",color:"#fff"},children:x?(0,b.jsx)(k,{}):(0,b.jsx)(F.p,{})})]})]})})},R=t(6661),D=function(){var e=(0,o.v9)(s.hF);return(0,b.jsx)(R.QI,{paddingX:"10px",m:"0",children:null===e||void 0===e?void 0:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,b.jsx)(P,{id:n,name:t,number:r},n)}))})},U=t(4808),Y=function(){var e=(0,o.I0)();return(0,b.jsxs)(S.g,{gap:"5px",justify:"space-between",mb:"5px",children:[(0,b.jsx)(C.x,{fontFamily:"Merriweather Sans",fontWeight:300,fontSize:{base:"18px",md:"24px"},color:"#497a86",children:"Find contacts by name:"}),(0,b.jsx)(f.I,{maxW:"600px",w:"100%",minW:"200px",marginInlineStart:"0px",type:"text",name:"filter",onChange:function(n){return e((0,U.h)(n.target.value))},borderColor:"#89d3da",borderWidth:"1px",bg:"#fff"})]})},L=t(8410),T=t(9589),J=t(6484),K=t(1146),Q=t(4805);function G(){var e=(0,o.I0)(),n=(0,o.v9)(s.zh),t=(0,o.v9)(s.xU),r=(0,o.v9)(s.Af),u=(0,Q.useMediaQuery)({query:"(max-width: 1190px)"});return(0,i.useEffect)((function(){e((0,a.yF)())}),[e]),(0,b.jsx)(l.xu,{as:"main",bg:"#98b7d545",h:"100vh",children:(0,b.jsxs)(L.W,{maxW:"100%",marginX:"auto",paddingX:"10px",bg:"#98b7d545",children:[(0,b.jsx)(T.X,{align:"center",pt:"10px",mb:"10px",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:u?"18px":"30px",color:"#497a86",children:"Welcom in your Personal Phonebook"}),(0,b.jsxs)(l.xu,{gap:"5px",justifyItems:"center",display:"grid",children:[(0,b.jsx)(T.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:400,fontSize:u?"16px":"28px",color:"#497a86",children:"Please, input name & number for a creation a new contact"}),(0,b.jsx)(g,{}),(0,b.jsxs)(l.xu,{padding:"10px",maxWidth:"660px",minWidth:"200px",width:"100%",children:[(0,b.jsx)(T.X,{align:"center",fontFamily:"Merriweather Sans",fontWeight:"bold",fontSize:u?"18px":"28px",mb:"10px",color:"#497a86",children:"Contacts"}),0===(null===r||void 0===r?void 0:r.length)?(0,b.jsxs)(J.M,{flexDirection:"column",children:[(0,b.jsx)(C.x,{fontWeight:"bold",color:"#497a86",fontFamily:"Merriweather Sans",fontSize:u?"18px":"24px",mb:"10px",children:"...Here is empty"}),(0,b.jsx)(K.E,{src:d,alt:"empty image",boxSize:"150px",fill:"#497a86"})]}):(0,b.jsxs)("div",{children:[t&&(0,b.jsx)(h.D,{isIndeterminate:!0,size:"24px",color:"#0cc0df"}),!t&&r.length>0&&(0,b.jsx)(Y,{}),n&&(0,b.jsx)("p",{children:"Something goes wrong"}),!t&&r.length>0&&(0,b.jsx)(l.xu,{overflowY:"auto",h:"230px",children:(0,b.jsx)(D,{})})]})]})]})]})})}},2946:function(e,n,t){t.d(n,{Af:function(){return i},hF:function(){return d},mv:function(){return a},xU:function(){return o},zh:function(){return s}});var r=t(6916),i=function(e){return e.contacts.items},o=function(e){return e.contacts.isLoading},a=function(e){return e.contacts.isContactAdded},s=function(e){return e.contacts.error},d=(0,r.P1)([function(e){return e.filter},i],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}))}}]);
//# sourceMappingURL=572.29c49986.chunk.js.map