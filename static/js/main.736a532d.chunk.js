(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,l,s,d,u=t(1),h=t.n(u),p=t(14),x=t.n(p),j=t(9),b=t.n(j),m=t(12),f=t(11),g=t(15),O=t(5),v=t(2),w=t(3),k=v.c.div(r||(r=Object(w.a)(["\n  border-radius: 10px;\n  background-color: ",";\n  filter: drop-shadow(0 0 2px var(--drop-shadow));\n\n  figure {\n    margin: 0;\n    height: 160px;\n    overflow: hidden;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    img {\n      max-width: 100%;\n    }\n  }\n\n  .card-info {\n    padding: 20px;\n    h2,\n    p {\n      font-family: var(--font-nunito);\n      color: ",";\n    }\n\n    h2 {\n      font-size: 1.5rem;\n      font-weight: 600;\n      margin-bottom: 20px;\n    }\n    p {\n      font-weight: 300;\n      margin-bottom: 10px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n      strong {\n        font-weight: 600;\n        font-size: 1em;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colorCard}),(function(n){return n.theme.colorText})),T=t(0),C=function(n){var e=n.flags,t=n.name.common,r=n.population,o=n.region,c=n.capital;return Object(T.jsxs)(k,{children:[Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:e.svg,alt:t,title:t})}),Object(T.jsxs)("div",{className:"card-info",children:[Object(T.jsx)("h2",{children:t}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Population:"})," ",r]}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Region:"})," ",o]}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Capital:"})," ",c]})]})]})},y=v.c.select(o||(o=Object(w.a)(["\n  padding: 10px 20px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  font-family: var(--font-nunito);\n  font-weight: 300;\n  filter: drop-shadow(0 0 2px var(--drop-shadow));\n"])),(function(n){return n.theme.colorCard}),(function(n){return n.theme.colorText})),A=function(n){var e=n.continent,t=n.getUpdateRegion;return Object(T.jsxs)(y,{value:e,onChange:t,children:[Object(T.jsx)("option",{value:"",children:"Filter by Region"}),Object(T.jsx)("option",{value:"Africa",children:"Africa"}),Object(T.jsx)("option",{value:"Americas",children:"Americas"}),Object(T.jsx)("option",{value:"Antarctic",children:"Antarctic"}),Object(T.jsx)("option",{value:"Asia",children:"Asia"}),Object(T.jsx)("option",{value:"Europe",children:"Europe"}),Object(T.jsx)("option",{value:"Oceania",children:"Oceania"})]})},S=v.c.header(c||(c=Object(w.a)(["\n  padding: 20px 0;\n  background-color: ",";\n  @media (max-width: 767px) {\n    text-align: center;\n  }\n\n  div {\n    max-width: 1080px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    @media (max-width: 767px) {\n      flex-direction: column;\n    }\n\n    h1 {\n      font-size: 2rem;\n      font-family: var(--font-nunito);\n      color: ",";\n      &:hover {\n        cursor: pointer;\n      }\n    }\n\n    button{\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      font-weight: 700;\n      &:hover{\n        background-color: ",";\n      }\n\n      svg{\n        margin-right: 10px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colorCard}),(function(n){return n.theme.colorText}),(function(n){return n.theme.colorButton})),B=function(n){var e=n.changeTheme,t=n.theme;return Object(T.jsx)(S,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{onClick:function(){return window.location.reload(!1)},children:"Where in the world?"}),"lightTheme"!==t?Object(T.jsxs)("button",{onClick:e,children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(T.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),"Light theme"]}):Object(T.jsxs)("button",{onClick:e,children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(T.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),"Dark theme"]})]})})},z=v.c.form(i||(i=Object(w.a)(["\n  input {\n    border-radius: 5px;\n    background-color: ",";\n    max-width: 100%;\n    filter: drop-shadow(0 0 2px var(--drop-shadow));\n\n    &::placeholder {\n      color: ",";\n    }\n    @media (max-width: 767px) {\n      margin-bottom: 20px;\n    }\n  }\n\n  button {\n    border-left: 1px solid ",";\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n"])),(function(n){return n.theme.colorCard}),(function(n){return n.theme.colorText}),(function(n){return n.theme.colorTextDark})),D=function(n){var e=n.getSearch,t=n.getUpdateSearch;return Object(T.jsx)(z,{children:Object(T.jsx)("input",{type:"text",placeholder:"Search for a country...",value:e,onChange:t})})},L=Object(v.b)(a||(a=Object(w.a)(["\n\n  html{\n    --font-nunito: 'Nunito Sans', sans-serif;\n    --drop-shadow: hsl(209, 23%, 22%);\n  }\n\n  *{\n    margin: 0;\n    padding: 0;\n  }\n\n  input, button{\n    padding: 10px 20px;\n    outline: none;\n    border: none;\n    background-color: ",";\n    color: ",";\n    font-family: var(--font-nunito);\n    font-weight: 300;\n  }\n  button{\n    cursor: pointer;\n    text-align: center;\n    transition: all .5s ease;\n    &:hover{\n      background-color: ",";\n    }\n    &.show-more{\n      display: block;\n      margin: 0 auto;\n    }\n  }\n"])),(function(n){return n.theme.colorBackground}),(function(n){return n.theme.colorText}),(function(n){return n.theme.colorTextDark})),E=v.c.div(l||(l=Object(w.a)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colorBackground})),N=v.c.div(s||(s=Object(w.a)(["\n  margin: 0 auto;\n  max-width: 1080px;\n  padding: 0 0 40px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n\n  @media (max-width: 767px) {\n    padding: 20px;\n    grid-template-columns: 1fr;\n  }\n"]))),R=v.c.div(d||(d=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 40px 0;\n  margin: 0 auto;\n  max-width: 1080px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),U={colorBackground:"hsl(0, 0%, 100%)",colorCard:"hsl(0, 0%, 95%)",colorButton:"hsl(0, 0%, 90%)",colorTextDark:"hsl(207, 26%, 17%)",colorText:"hsl(200, 15%, 8%)"},M={colorBackground:"hsl(207, 26%, 17%)",colorCard:"hsl(209, 23%, 22%)",colorButton:"hsl(209, 23%, 30%)",colorTextDark:"hsl(0, 0%, 52%)",colorText:"hsl(0, 0%, 100%)"};var F=function(){var n,e,t,r,o,c=Object(u.useState)("darkTheme"),i=Object(O.a)(c,2),a=i[0],l=i[1],s=Object(u.useState)([]),d=Object(O.a)(s,2),h=d[0],p=d[1],x=Object(u.useState)(""),j=Object(O.a)(x,2),w=j[0],k=j[1],y=Object(u.useState)(""),S=Object(O.a)(y,2),z=S[0],F=S[1];function J(){return(J=Object(g.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://restcountries.com/v3.1/all");case 3:if(200===(e=n.sent).status){n.next=6;break}throw"N\xe3o poss\xedvel realizar essa a\xe7\xe3o";case 6:return n.next=8,e.json();case 8:t=n.sent,p(t),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),alert(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){J.apply(this,arguments)}()}),[z]),Object(T.jsx)(v.a,{theme:"darkTheme"===a?M:U,children:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(L,{}),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(B,{changeTheme:function(){l("darkTheme"===a?"lightTheme":"darkTheme")},theme:a}),Object(T.jsxs)(E,{children:[Object(T.jsxs)(R,{children:[Object(T.jsx)(D,{getSearch:w,getUpdateSearch:function(n){k(n.target.value)}}),Object(T.jsx)(A,{continent:z,getUpdateRegion:function(n){F(n.target.value)}})]}),Object(T.jsx)(N,{children:""===z?null===(n=Object(f.a)(h))||void 0===n||null===(e=n.filter((function(n){var e=n.name.common.toLowerCase().includes(w.toLowerCase());if(""===w||e)return n})))||void 0===e?void 0:e.map((function(n,e){return Object(T.jsx)(C,Object(m.a)({},n),e)})):null===(t=Object(f.a)(h))||void 0===t||null===(r=t.filter((function(n){var e=n.region.includes(z);if(""===z||e)return n})))||void 0===r||null===(o=r.filter((function(n){var e=n.name.common.toLowerCase().includes(w.toLowerCase());if(""===w||e)return n})))||void 0===o?void 0:o.map((function(n,e){return Object(T.jsx)(C,Object(m.a)({},n),e)}))})]})]})]})})};x.a.render(Object(T.jsx)(h.a.StrictMode,{children:Object(T.jsx)(F,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.736a532d.chunk.js.map