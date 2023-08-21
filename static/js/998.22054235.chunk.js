"use strict";(self.webpackChunkhw_08_test=self.webpackChunkhw_08_test||[]).push([[998],{5998:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var s,a=t(2791),r=t(9434),o=t(4270),c=t(1775),i=function(){return{isLoading:(0,r.v9)(c.xU),filteredContacts:(0,r.v9)(c.DI),contacts:(0,r.v9)(c.DI)}},l=t(3634),d={subTitle:"ContactForm_subTitle__uRYz+",btn:"ContactForm_btn__wll+u",btnBox:"ContactForm_btnBox__PlDEK"},u=t(168),m=t(1413),b=t(3733),h=t(6670),x=t(3457),p=t(6314),f=t(184),_=a.forwardRef((function(n,e){var t=n.children,s=n.disabled,a=(0,h.U)((0,m.Z)((0,m.Z)({},n),{},{rootRef:e})),r=a.active,o=a.focusVisible,c=a.getRootProps,i={active:r,disabled:s,focusVisible:o};return(0,f.jsx)(C,(0,m.Z)((0,m.Z)({},c()),{},{className:(0,b.Z)(i),children:t}))}));function j(){return(0,f.jsx)(p.Z,{spacing:2,direction:"row",children:(0,f.jsx)(_,{onClick:function(){return console.log("click!")},children:"Add contact"})})}var v="#007FFF",g="#0072E5",N="#0059B2",C=(0,x.Z)("button")(s||(s=(0,u.Z)(["\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  // background-color: ",";\n  background-color: transparent;\n\n  color: #b1b1b1;\n  border-radius: 8px;\n  border: 1px solid #c0c0c0;\n  font-weight: 600;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all 150ms ease;\n\n  &:hover {\n    // background-color: ",";\n    background-color: #c0c0c0;\n    color: white;\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.focusVisible {\n    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);\n    outline: none;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])),v,g,N),w=function(){var n=(0,r.I0)(),e=i(),t=e.isLoading,s=e.filteredContacts;return(0,f.jsxs)("form",{className:d.form,onSubmit:function(e){e.preventDefault();var a=e.target,r=a.elements.name.value,o=a.elements.number.value;t||(s.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts!")):n((0,l.uK)({name:r,number:o})),a.reset())},children:[(0,f.jsxs)("div",{className:d.contactFormBox,children:[(0,f.jsxs)("label",{className:d.subTitle,children:["Name",(0,f.jsx)("input",{className:d.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",autoFocus:"on"})]}),(0,f.jsxs)("label",{className:d.subTitle,children:["Number",(0,f.jsx)("input",{className:d.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number"})]})]}),(0,f.jsx)("div",{className:d.btnBox,children:(0,f.jsxs)(j,{children:[(0,f.jsx)("button",{className:d.btn,type:"submit",children:"Add contact"})," "]})})]})},F=t(1523),y="Loader_Loader__wqo9C",k=function(){return(0,f.jsx)("div",{className:y,children:(0,f.jsx)(F.VF,{height:"100",width:"100",color:"#fce357",secondaryColor:"#4fa94d",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})},L="ContactList_list__csErn",Z="ContactList_item__EZYHO",E="ContactList_btnDelete__Eeo9v",B="ContactList_contactInfo__Sgq6p",I=function(){var n=(0,r.I0)(),e=i(),t=e.isLoading,s=e.contacts;(0,a.useEffect)((function(){n((0,l.yF)())}),[n]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{children:[t&&(0,f.jsx)(k,{}),(0,f.jsx)("ul",{className:L,children:s.map((function(e){return(0,f.jsxs)("li",{className:Z,children:[(0,f.jsxs)("span",{className:B,children:[e.name,":"]}),(0,f.jsx)("span",{className:B,children:e.number}),(0,f.jsx)("button",{type:"button",className:E,onClick:function(){return t=e.id,void n((0,l.GK)(t));var t},children:"Delete"})]},e.id)}))})]})})},T=t(4808),z={subTitle:"Filter_subTitle__ntO3U",input:"Filter_input__N7T3z"},A=function(){var n=(0,r.I0)();return(0,f.jsxs)("div",{className:z.filterBox,children:[(0,f.jsx)("label",{className:z.subTitle,children:"Find contacts by Name"}),(0,f.jsx)("input",{className:z.input,type:"text",name:"filter",placeholder:"Enter filter",onChange:function(e){return n((0,T.b)(e.target.value))}})]})};function D(){var n=(0,r.I0)();return(0,a.useEffect)((function(){n((0,l.yF)())}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(w,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(A,{}),(0,f.jsx)(I,{})]})}}}]);
//# sourceMappingURL=998.22054235.chunk.js.map