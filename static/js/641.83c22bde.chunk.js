"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[641],{641:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(420),a=t(791),u=function(e){return e.contacts.items},c=t(808),s=t(634),i=t(184);var o=function(){var e=(0,r.I0)(),n=(0,r.v9)(c.zK),t=(0,r.v9)(u);(0,a.useEffect)((function(){e((0,s.yF)())}),[e]);var o=n.toLowerCase(),l=t.filter((function(e){return e.name.toLowerCase().includes(o)}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:l.map((function(n){var t=n.name,r=n.number,a=n.id;return(0,i.jsxs)("li",{children:[t,": ",r," ",(0,i.jsx)("button",{type:"button",onClick:function(){return n=a,e((0,s.GK)(n));var n},children:"delete"})]},a)}))})})};var l=function(){var e=(0,r.v9)(c.zK),n=(0,r.I0)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsxs)("label",{children:["Find contact:",(0,i.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var t=e.currentTarget;return n((0,c.ML)(t.value))}})]})]})},m=t(439),d="Form_formdiv__8u5jV",h="Form_form__e1yzW",f="Form_btn__0ebGo";var x=function(e){e.onSubmit;var n=(0,a.useState)(),t=(0,m.Z)(n,2),c=t[0],o=t[1],l=(0,a.useState)(),x=(0,m.Z)(l,2),j=x[0],v=x[1],b=(0,r.I0)(),p=(0,r.v9)(u),_=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":v(r);break;default:console.log("ERROR")}},g=function(){o(""),v("")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"numberbook"}),(0,i.jsx)("div",{className:d,children:(0,i.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),p.find((function(e){return e.name===c}))?alert("".concat(c," is already exist in the numberbook!")):(b((0,s.uK)({name:c,number:j})),g())},children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("p",{children:"Name:"}),(0,i.jsx)("input",{type:"text",name:"name",value:c,onChange:_,required:!0})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("p",{children:"Number:"}),(0,i.jsx)("input",{type:"tel",name:"number",value:j,onChange:_,pattern:"[0-9\\-]+",required:!0})]}),(0,i.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})})]})},j=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:"Contacts Page"}),(0,i.jsx)(x,{}),(0,i.jsx)(l,{}),(0,i.jsx)(o,{})]})}}}]);
//# sourceMappingURL=641.83c22bde.chunk.js.map