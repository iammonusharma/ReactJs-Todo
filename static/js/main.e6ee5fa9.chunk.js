(this["webpackJsonpeight-localstorageapp"]=this["webpackJsonpeight-localstorageapp"]||[]).push([[0],{23:function(t,e,n){},26:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(15),r=n.n(a),i=(n(23),n(13)),s=n.n(i),d=n(18),u=n(16),l=n(11),j=n(39),f=(n(25),n(26),n(32)),b=n(33),p=n(17),O=n(3),g=function(t){var e=t.todos,n=t.markComplete;return Object(O.jsx)(f.a,{className:"mt-5 mb-2 items text-uppercase",children:e.map((function(t){return Object(O.jsxs)(b.a,{children:[t.todoString,Object(O.jsx)("span",{className:"mt-1 float-end",onClick:function(){return n(t.id)},children:Object(O.jsx)(p.a,{})})]},t.id)}))})},h=n(34),m=n(35),x=n(36),v=n(37),S=n(41),C=n(38),T=n(40),k=function(t){var e=t.addTodos,n=Object(c.useState)(""),o=Object(l.a)(n,2),a=o[0],r=o[1];return Object(O.jsx)(h.a,{onSubmit:function(t){if(t.preventDefault(),""===a)return alert("Please fill some value");var n={todoString:a,id:Object(T.a)()};e(n),r("")},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)(v.a,{type:"text",name:"todo",id:"todo",placeholder:"Enter a todo String",value:a,onChange:function(t){return r(t.target.value)}}),Object(O.jsx)(S.a,{addonType:"prepend",children:Object(O.jsx)(C.a,{color:"warning",children:"Add Todo"})})]})})})},w=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];Object(c.useEffect)((function(){var t=localStorage.getItem("todos");console.log({localStorage:localStorage}),t&&o(JSON.parse(t))}),[]);var a=function(){var t=Object(u.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o([].concat(Object(d.a)(n),[e]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(O.jsxs)(j.a,{fluid:!0,children:[Object(O.jsx)("h1",{children:"Add Your Todo Here :"}),Object(O.jsx)(g,{todos:n,markComplete:function(t){o(n.filter((function(e){return e.id!==t})))}}),Object(O.jsx)(k,{addTodos:a})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.e6ee5fa9.chunk.js.map