(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{18:function(e,t,n){"use strict";var c=n(1),i=n(0),l=n(14),a=n(3),r=n(10),s=Object({NODE_ENV:"production",PUBLIC_URL:"/healthindia",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,b=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(b);var u=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},o=n(8),d=n(20),h=[{index:!0,label:"Health India",path:"/"},{label:"Overview",path:"/about"},{label:"Ingredients",path:"/ingredients"},{label:"Contact Us",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,157,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(o.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},m=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},f=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(m,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Health India",defaultTitle:"Health India",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children})]})]})};f.defaultProps={children:null,title:null,description:"Health India's commercial website."};t.a=f},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),l=n.n(i),a=n(13),r=n(8),s=n(3),j=n(18),b=(n(34),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,153))}))),u=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,154))})),o=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,155))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,156))})),h=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,159))})),O=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,160))})),x=Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(12)]).then(n.bind(null,158))})),p=function(){return Object(c.jsx)(r.a,{basename:"/healthindia",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:o}),Object(c.jsx)(s.a,{path:"/about",component:b}),Object(c.jsx)(s.a,{path:"/projects",component:h}),Object(c.jsx)(s.a,{path:"/stats",component:x}),Object(c.jsx)(s.a,{path:"/contact",component:u}),Object(c.jsx)(s.a,{path:"/ingredients",component:O}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},m=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(p,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(m,{}),f):Object(a.render)(Object(c.jsx)(m,{}),f)}},[[35,1,3]]]);
//# sourceMappingURL=main.c2527f1d.chunk.js.map