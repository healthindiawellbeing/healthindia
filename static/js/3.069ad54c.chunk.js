(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[3],{36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(0),c=i.n(a),r=i(8),s=i(18),o=(i(36),i(19));i(37),i(38);function l(e){return Object(n.jsxs)("div",{className:"slide-image-container",children:[Object(n.jsx)("img",{className:"slide-image",src:e.data.image,alt:"sample"}),Object(n.jsx)("div",{className:"image-caption ".concat(e.active?"active":""),style:e.imageCaptionStyle,children:Object(n.jsxs)("a",{href:e.target,children:[e.titleVisible&&Object(n.jsx)("h2",{children:e.data.title}),e.excerptVisible&&Object(n.jsx)("p",{children:e.data.excerpt})]})})]})}var d=function(){var e=c.a.useRef(),t=Object(a.useState)({}),i=Object(o.a)(t,2),n=i[0],r=i[1],s=function(){r(e&&e.current?e.current.getBoundingClientRect():{})};return Object(a.useEffect)((function(){s();var e=function(e,t){var i;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return clearTimeout(i),i=setTimeout((function(){return e.apply(void 0,n)}),t)}}(s,500);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),[n,e]};i(39);var h=function(e){var t=e.count,i=e.active,a=e.onSelect,r=e.color,s=new Array(t).fill("");return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("div",{className:"indicator-container",style:{"--color":r},children:s.map((function(e,t){return Object(n.jsx)("div",{className:"indicator-box ".concat(i===t?"active":""),onClick:function(){a(t)},children:Object(n.jsx)("div",{className:"indicator"})},t)}))})})};function u(e){var t=e.data,i=d(),r=Object(o.a)(i,2),s=r[0],u=r[1],p=Object(a.useState)(5),j=Object(o.a)(p,1)[0],f=Object(a.useState)(0),b=Object(o.a)(f,2),m=b[0],g=b[1],v=Object(a.useState)(!0),x=Object(o.a)(v,2),O=x[0],y=x[1];return function(e,t){var i=Object(a.useRef)();Object(a.useEffect)((function(){i.current=e})),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){return i.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){!function(e){var t=e+1;t>=20&&(t-=j),g(t)}(m)}),O&&e.autoplay?e.slideshowDelay:null),Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{className:"slide-show-container",ref:u,style:{"--slider-height":e.sliderHeightInpx?e.sliderHeightInpx+"px":"400px"},children:[t.map((function(t,i){var a=i===m?"selected":"",c="".concat((i-m)*(s&&s.width),"px");return Object(n.jsx)("div",{id:"car-img-".concat(i),className:"slide ".concat(a),style:{left:c},onClick:function(){window.open(t.target)},children:Object(n.jsx)(l,{imageCaptionStyle:e.imageCaptionStyle,data:t,active:m===i,titleVisible:e.titleVisible,excerptVisible:e.excerptVisible})},i)})),e.indicatorVisible&&Object(n.jsx)(h,{count:j,active:m,onSelect:function(e){y(!1),g(e),setTimeout((function(){return y(!0)}),5e3)},color:"white"})]})})}u.defaultProps={autoplay:!0,indicatorColor:"white",data:function(){var e=new Array(5).fill(0);return e=e.map((function(e,t){return{image:"".concat("/healthindia","/images/").concat(t+1,".jpeg"),id:t,title:"This is Sample Title:".concat(t+1),excerpt:"This is a sample excerpt.This is a sample excerpt.This is a sample excerpt.This is a sample excerpt.",target:"http://healthindiawellbeing.github.io/healthindia"}}))}(),titleVisible:!0,excerptVisible:!0,indicatorVisible:!0,sliderHeightInpx:400,slideshowDelay:4e3,imageCaptionstyle:{}};t.default=function(){return Object(n.jsx)(s.a,{description:"Health India's commercial website",children:Object(n.jsxs)("article",{className:"post",id:"index",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("img",{src:"".concat("/healthindia","/images/favicon.png"),alt:"",width:"100",height:"100","object-fit":"cover"}),Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/",children:"Health India"})}),Object(n.jsx)("p",{children:"ancient well-being"})]})}),Object(n.jsx)("p",{align:"justify",children:"We are a unique fraternity of well-being experts striving together, with the common goal of improving human health. We accomplish this by helping people take the organic route. Diet has a direct impact on human health, and we help fine-tune your diet to cater to the needs of your body. Diet plays a major role in controlling health issues such as diabetes, cholestrol, liver problems, in addition to helping manage weight in case of PCOS and thyroid problems. We cater to individuals suffering from such issues, in addition to helping the general population attain and maintain optimal health."}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(u,{})}),Object(n.jsx)("p",{align:"justify",children:"Food need not always be correlated with just taste, when its primary role is that of providing nourishment. But there are exceptions, where you can enjoy the pleasure of good taste, in addition to taking care of your body\u2019s nutritional requirements. This is what Health India provides you with. A stressful life, faulty food habits, frequent use of medications can take a toll on your health. Even \u201chealthy\u201d individuals are required to provide their bodies with the right set of nutrients to maintain that state of overall well-being."})]})})}}}]);
//# sourceMappingURL=3.069ad54c.chunk.js.map