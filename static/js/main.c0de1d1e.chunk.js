(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),o=n(6),r=n(4),a=n(5),l=n(8),i=n(7),d=n(1),u=n.n(d),b=(n(13),n(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:["Jam"]},e.renderGoods=function(e){if(e.length>1){var t=e.slice(0,e.length-1).join(", "),n=e[e.length-1];return"".concat(t," and ").concat(n," is selected")}return"".concat(e[0]," is selected")},e.changeList=function(t){var n=e.state.selectedGood;n.includes(t)?e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}})):e.setState({selectedGood:[].concat(Object(o.a)(n),[t])})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("div",{className:"container-sm",children:[Object(b.jsx)("h1",{className:"fs-3 pb-5",children:t.length<1?"No goods selected":this.renderGoods(t)}),Object(b.jsx)("ul",{className:"list-group list d-flex justify-content-between",children:f.map((function(n){return Object(b.jsxs)("li",{className:"list-group-item row d-flex align-items-center justify-content-between fw-bold ".concat(t.includes(n)&&"active"," "),children:[Object(b.jsx)("p",{className:"col-2 align-self-end",children:n}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.changeList(n)},className:"btn btn-".concat(t.includes(n)?"danger":"primary"," btn-sm m-2 col-2 fw-bold"),children:t.includes(n)?"Remove":"Select"})]},f.indexOf(n))}))}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger my-3 me-2 fw-bold",onClick:function(){return e.setState({selectedGood:[]})},children:"Clear"})]})}}]),n}(u.a.Component),j=h;s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0de1d1e.chunk.js.map