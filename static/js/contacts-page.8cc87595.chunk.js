(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{100:function(e,t,n){e.exports={"error-container":"Error_error-container__X-Viu","error-text":"Error_error-text__3lVge"}},101:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(0),a=n(10),c=n(16),o=function(e){return e.contacts.filter},s=function(e){return e.contacts.items},i=function(e){return e.contacts.status},l=n(94),u=n.n(l),m=n(1),f=function(e){var t=e.title,n=e.children,r=e.classEl;return Object(m.jsx)("section",{className:u.a[r],children:Object(m.jsxs)("div",{className:u.a.container,children:[Object(m.jsx)("h2",{className:u.a.title,children:t}),Object(m.jsx)("div",{className:u.a.forChildrens,children:n})]})})},d=n(89),b=n(88),j=n(32),p=n(95),h=n.n(p),_=function(){var e=Object(a.b)(),t=Object(a.c)(s);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=Object(d.a)(n),a=r.name,o=r.number;if(!a||!o)return alert("Please fill the form");!function(n){var r=n.name,a=r.toLowerCase(),o=t.find((function(e){return e.name.toLowerCase()===a}));if(o)return alert("".concat(r," is already in your contacts!"));e(Object(c.a)(n))}(r),Object(d.b)("contactForm")},className:h.a.form,id:"contactForm",children:[Object(m.jsx)(b.a,{labelName:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholderValue:"Jane Doe"}),Object(m.jsx)(b.a,{labelName:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholderValue:"+38-099-123-45-67"}),Object(m.jsx)(j.a,{type:"submit",text:"Add contact"})]})})},O=n(42),x=function(){var e=Object(a.c)(o),t=Object(a.b)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.a,{labelName:"Find contact by name",value:e,onChange:function(e){var n=e.target.value;t(Object(O.a)(n))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholderValue:"Search"})})},v=n(96),g=n.n(v),C=n(99),A=n.n(C),E=function(){var e=Object(a.c)(o),t=Object(a.c)(s),n=Object(a.b)();return Object(m.jsx)("ul",{className:A.a.contactList,children:function(){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(e){var t=e.id,r=e.name,a=e.number;return Object(m.jsxs)("li",{className:A.a.contactItem,children:[Object(m.jsx)("img",{src:g.a.generate_avatar(),alt:"img",width:"60",className:A.a.contactImg}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:[r,":"]}),Object(m.jsx)("p",{children:a})]}),Object(m.jsx)(j.a,{type:"button",text:"\ud83d\uddd9",onClick:function(){return n(Object(c.b)(t))}})]},t)}))})},N=Object(r.memo)(E),L=n(100),I=n.n(L),M=function(e){var t=e.text,n=Object(a.c)((function(e){return e[t].error}));return Object(m.jsxs)("div",{className:I.a["error-container"],children:[Object(m.jsx)("img",{src:"https://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Alarm-Error-icon.png",alt:"error",width:"50",className:I.a["error-img"]}),Object(m.jsxs)("p",{className:I.a["error-text"],children:[Object(m.jsx)("span",{children:"Error: "}),n]})]})},y=n(43),w=function(){var e=Object(a.b)(),t=Object(a.c)(i);return Object(r.useEffect)((function(){e(Object(c.c)())}),[e]),Object(m.jsxs)(m.Fragment,{children:["pending"===t&&Object(m.jsx)(y.a,{}),Object(m.jsxs)(f,{title:"Phonebook",classEl:"phonebook",children:[Object(m.jsx)(_,{}),Object(m.jsx)(x,{})]}),Object(m.jsxs)(f,{title:"Contacts",classEl:"contacts",children:["rejected"===t&&Object(m.jsx)(M,{text:"contacts"}),"resolved"===t&&Object(m.jsx)(N,{})]})]})}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(90),a=n.n(r),c=n(1),o=function(e){var t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}(),n=e.labelName,r=e.value,o=e.onChange,s=e.type,i=e.name,l=e.pattern,u=e.title,m=e.placeholderValue;return Object(c.jsxs)("div",{className:"filter"===i?a.a.filterComponent:a.a.formComponent,children:[Object(c.jsxs)("label",{htmlFor:t,className:a.a.formLabel,children:[n,":"]}),Object(c.jsx)("input",{className:a.a.formInput,id:t,value:r,onChange:o,type:s,name:i,pattern:l,title:u,placeholder:m})]})},s=o;o.defaultProps={type:"text",placeholder:void 0}},89:function(e,t,n){"use strict";function r(e){var t=new FormData(e.currentTarget),n={};return t.forEach((function(e,t){return n[t]=e})),n}function a(e){document.querySelector("#".concat(e)).querySelectorAll("input").forEach((function(e){return e.value=""}))}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},90:function(e,t,n){e.exports={formComponent:"Input_formComponent__3oLmR",filterComponent:"Input_filterComponent__3Aah-",formLabel:"Input_formLabel__3N9O3",formInput:"Input_formInput__3gIDN"}},94:function(e,t,n){e.exports={contacts:"Section_contacts__Gg5B-",phonebook:"Section_phonebook__1TAIY",container:"Section_container__2lFzm",title:"Section_title__1qmO6",forChildrens:"Section_forChildrens__1fMzE"}},95:function(e,t,n){e.exports={form:"FormContacts_form__1ucML"}},96:function(e,t,n){e.exports=n(97)},97:function(e,t,n){var r=n(98);e.exports={generate_avatar:function(e){var t,n;return"undefined"!=typeof e&&e?(t="undefined"===typeof e.gender?a(0,1)%2?"male":"female":function(e){if("male"===(e=e.trim().toLowerCase())||"m"===e)return"male";if("female"===e||"f"===e)return"female"}(e.gender),n="undefined"===typeof e.id?a(1,"male"===t?r.MALE_IMAGE_COUNT:r.FEMALE_IMAGE_COUNT):0===(n=e.id%Math.round("male"===t?r.MALE_IMAGE_COUNT+1:r.FEMALE_IMAGE_COUNT+1))?1:n):(t=a(0,1)%2?"male":"female",n=a(1,"male"===t?r.MALE_IMAGE_COUNT:r.FEMALE_IMAGE_COUNT)),"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/"+t+"/"+n+".png"}};function a(e,t){return Math.floor(Math.random()*(t-e+1))+e}},98:function(e,t){e.exports.MALE_IMAGE_COUNT=129,e.exports.FEMALE_IMAGE_COUNT=114},99:function(e,t,n){e.exports={contactList:"ContactList_contactList__3Ej-o",contactItem:"ContactList_contactItem__32wJr",contactImg:"ContactList_contactImg__1reaZ"}}}]);
//# sourceMappingURL=contacts-page.8cc87595.chunk.js.map