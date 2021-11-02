(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),o=c(8),r=c.n(o),d=(c(14),c.p,c(15),c(3)),l=c(0),a=function(t){return Object(l.jsxs)("div",{className:"filter",id:"filter",children:[Object(l.jsxs)("p",{id:"active__count",children:[t.active," items left"]}),Object(l.jsx)("p",{className:1===t.filter?"filter__link active":"filter__link",onClick:function(){return t.changeFilter(1)},id:"1",children:"All"}),Object(l.jsx)("p",{className:2===t.filter?"filter__link active":"filter__link",onClick:function(){return t.changeFilter(2)},id:"2",children:"Active"}),Object(l.jsx)("p",{className:3===t.filter?"filter__link active":"filter__link",onClick:function(){return t.changeFilter(3)},id:"3",children:"Completed"}),Object(l.jsx)("p",{id:"clear__completed",style:{opacity:t.clear},onClick:t.clearButton,children:"Clear completed"})]})},s=function(t){var e=Object(i.useState)(""),c=Object(d.a)(e,2),n=c[0],o=c[1];return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("div",{className:"toggle-all-button",children:Object(l.jsx)("input",{style:{color:t.toggleColor},type:"button",id:"toggle-all",value:"\u276f",onClick:t.toggleAll})}),Object(l.jsx)("form",{id:"todo__form",onSubmit:function(e){e.preventDefault(),t.submit(n),o("")},children:Object(l.jsx)("input",{type:"text",name:"todo__text",id:"todo__text",placeholder:"What needs to be done?",value:n,onChange:function(t){return o(t.target.value)}})})]})},u=function(t){return Object(l.jsx)("ul",{id:"todo__list",children:t.todos})},f=function(t){var e=Object(i.useState)(t.text),c=Object(d.a)(e,2),n=c[0],o=c[1];return Object(l.jsxs)("li",{id:t.id,className:"items",children:[Object(l.jsx)("input",{type:"checkbox",className:"checkbox",onChange:function(){return t.checkAction(t.id,t.checked)},checked:t.checked?"checked":""}),t.editing?Object(l.jsx)("input",{className:"edit",autoFocus:!0,onChange:function(t){return o(t.target.value)},onBlur:function(){return t.apply(t.id,n)},onKeyUp:function(e){"Enter"===e.key&&t.apply(t.id,n),"Escape"===e.key&&(t.edit(t.id),o(t.text))},value:n}):Object(l.jsx)("label",{className:"label",onDoubleClick:function(){return t.edit(t.id)},children:t.text}),Object(l.jsx)("button",{id:"todo__remove",onClick:function(){return t.deleteAction(t.id,t.checked)},children:"X"})]})},h=c(2),j=c(9),O=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):{todolist:[],active_count:0,filter_count:1,clear_completed_opacity:!0},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TODO":return e.text.replace(/\s+/g," ").trim(),e.text&&" "!==e.text?(c=0===t.todolist.length?1:t.todolist[t.todolist.length-1].id+1,t.active_count+=1,t.todolist=[].concat(Object(j.a)(t.todolist),[{id:c,text:e.text,checked:!1,inEdit:!1}]),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t)):t;var c;case"CHECK":return t.todolist.forEach((function(c){c.id===e.ind&&(c.checked=!c.checked,c.checked?t.active_count-=1:t.active_count+=1)})),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"DELETE-TODO":return t.todolist.forEach((function(c,i){c.id===e.ind&&(c.checked||(t.active_count-=1),t.todolist.splice(i,1))})),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"CHANGE-FILTER":return t.filter_count=e.ind,localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"CLEAR-COMPLETED":var i=function(){t.todolist.forEach((function(t){t.checked&&n()}))},n=function(){t.todolist.forEach((function(e,c){e.checked&&(t.todolist.splice(c,1),i())}))};return i(),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"TOGGLE-ALL":var o=0;return t.todolist.forEach((function(t){t.checked||(o+=1)})),0===o?(t.active_count=t.todolist.length-o,t.todolist.forEach((function(t){t.checked=!t.checked}))):(t.active_count=0,t.todolist.forEach((function(t){t.checked||(t.checked=!t.checked)}))),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"EDIT":return t.todolist.forEach((function(t){t.id===e.ind&&(t.inEdit=!t.inEdit)})),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);case"APPLY-EDIT":return e.text.replace(/\s+/g," ").trim(),t.todolist.forEach((function(t){t.id===e.ind&&(e.text?(t.text=e.text,t.inEdit=!1):t.inEdit=!1)})),localStorage.setItem("todo",JSON.stringify(t)),Object(h.a)({},t);default:return t}},b=function(t){var e=t.store.getState().tasks,c=function(e){t.store.dispatch(function(t){return{type:"CHECK",ind:t}}(e)),b()},n=function(e){t.store.dispatch(function(t){return{type:"DELETE-TODO",ind:t}}(e)),b()},o=function(e){t.store.dispatch(function(t){return{type:"EDIT",ind:t}}(e)),b()},r=function(e,c){t.store.dispatch(function(t,e){return{type:"APPLY-EDIT",ind:t,text:e}}(e,c)),b()},h=Object(i.useState)(e.todolist.map((function(t){return Object(l.jsx)(f,{id:t.id,text:t.text,checked:t.checked,editing:t.inEdit,checkAction:c,deleteAction:n,edit:o,apply:r},t.id)}))),j=Object(d.a)(h,2),O=j[0],p=j[1],b=function(){var t=e.filter_count;2===t&&p(e.todolist.map((function(t){t.checked&&(t.id,t.text,t.checked,t.inEdit,t.id)}))),p(3===t?e.todolist.map((function(t){t.checked||(t.id,t.text,t.checked,t.inEdit,t.id)})):e.todolist.map((function(t){return Object(l.jsx)(f,{id:t.id,text:t.text,checked:t.checked,editing:t.inEdit,checkAction:c,deleteAction:n,edit:o,apply:r},t.id)})))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(s,{submit:function(e){t.store.dispatch(function(t){return{type:"ADD-TODO",text:t}}(e)),b()},toggleAll:function(){t.store.dispatch({type:"TOGGLE-ALL"}),b()},toggleColor:0===e.active_count&e.todolist.length>0?"#26de81":"#778ca3"}),Object(l.jsx)(u,{todos:O}),Object(l.jsx)(a,{active:e.active_count,filter:e.filter_count,changeFilter:function(e){t.store.dispatch(function(t){return{type:"CHANGE-FILTER",ind:t}}(e)),b()},clear:e.todolist.length!==e.active_count?1:0,clearButton:function(){t.store.dispatch({type:"CLEAR-COMPLETED"}),b()}})]})},g=function(t){return Object(l.jsx)("div",{className:"Wrapper",children:Object(l.jsx)(b,{store:t.store})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,i=e.getFID,n=e.getFCP,o=e.getLCP,r=e.getTTFB;c(t),i(t),n(t),o(t),r(t)}))},k=c(7),E=Object(k.a)({tasks:p}),m=Object(k.b)(E);window.store=m;var v=m;r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{store:v})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.8ca1d50e.chunk.js.map