(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,c,s){},11:function(e,c,s){},13:function(e,c,s){"use strict";s.r(c);var i=s(1),t=s.n(i),n=s(5),l=s.n(n),r=(s(10),s(11),s(0));function a(){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{className:"footer-copyright",children:"\xa9 2021. Yoo Byeong Woo. All rights reserved."})]})}var o=s(2),j=s(3);function d(e){var c=e.handleScroll,s=Object(i.useState)({backgroundColor:!1}),t=Object(j.a)(s,2),n=t[0],l=t[1],a=Object(i.useState)({mobileView:!1}),d=Object(j.a)(a,2),b=d[0],m=d[1],h=Object(i.useState)({isFold:!0}),u=Object(j.a)(h,2),v=u[0],O=u[1],x=b.mobileView,p=n.backgroundColor,g=v.isFold,f=function(e){c(e)};Object(i.useEffect)((function(){var e=function(){return window.innerWidth<900?m((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileView:!0})})):m((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileView:!1})}))},c=function(){var e=window.scrollY||document.documentElement.scrollTop;return l(e<100?function(e){return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:!1})}:function(e){return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:!0})})};e(),c(),window.addEventListener("resize",(function(){return e()})),window.addEventListener("scroll",(function(){return c()}))}),[]);var N={color:"#453a33"};return Object(r.jsxs)("header",{className:p||x?"header header-has-background-color":"header",children:[Object(r.jsxs)("div",{className:"header-content ",children:[Object(r.jsx)("div",{className:"header-title",style:p||x?N:{},children:"Conner's Portfolio"}),x?Object(r.jsx)("div",{className:"header-hamburger-wrapper",onClick:function(){O((function(e){return Object(o.a)(Object(o.a)({},e),{},{isFold:!g})}))},children:Object(r.jsx)("img",{src:"img/hamburger.svg",alt:"hamburger-menu"})}):Object(r.jsxs)("div",{className:"header-navigation-menu",style:p?N:{},children:[Object(r.jsx)("div",{className:"header-navigation-item",style:p?N:{},onClick:function(){return f(0)},children:"About me"}),Object(r.jsx)("div",{className:"header-navigation-item",style:p?N:{},onClick:function(){return f(1)},children:"Skills"}),Object(r.jsx)("div",{className:"header-navigation-item",style:p?N:{},onClick:function(){return f(2)},children:"Archiving"}),Object(r.jsx)("div",{className:"header-navigation-item",style:p?N:{},onClick:function(){return f(3)},children:"Projects"})]})]}),x?Object(r.jsxs)("div",{className:g?"header-folded-navigation-menus header_is_folded":"header-folded-navigation-menus",children:[Object(r.jsx)("div",{className:"header-folded-navigation-menu",onClick:function(){return f(0)},children:"About me"}),Object(r.jsx)("div",{className:"header-folded-navigation-menu",onClick:function(){return f(1)},children:"Skills"}),Object(r.jsx)("div",{className:"header-folded-navigation-menu",onClick:function(){return f(2)},children:"Archiving"}),Object(r.jsx)("div",{className:"header-folded-navigation-menu",onClick:function(){return f(3)},children:"Projects"})]}):""]})}function b(e){return e.split("\n").map((function(e){return Object(r.jsxs)("span",{children:[e,Object(r.jsx)("br",{})]})}))}function m(e){var c=e.setItemsRef;return Object(r.jsx)("article",{children:Object(r.jsxs)("div",{className:"content",ref:function(e){return c(0,e)},children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("div",{className:"section-title-text",children:"About me"})}),Object(r.jsx)("div",{className:"about-me-basic-infos",children:[{label:"\uc774\ub984",value:"\uc720\ubcd1\uc6b0",imgUrl:"img/about-me/person-fill.svg"},{label:"\uc0dd\ub144\uc6d4\uc77c",value:"94.09.03",imgUrl:"img/about-me/calendar-fill.svg"},{label:"\uc8fc\uc18c\uc9c0",value:"\ucda9\ub0a8 \ucc9c\uc548\uc2dc",imgUrl:"img/about-me/geo-alt-fill.svg"},{label:"\uc5f0\ub77d\ucc98",value:"010-6890-1752",imgUrl:"img/about-me/telephone-fill.svg"},{label:"\uc774\uba54\uc77c",value:"conner903@naver.com",imgUrl:"img/about-me/envelope-fill.svg"},{label:"\ud559\ub825",value:"\ucda9\ubd81\ub300\ud559\uad50\n\uc815\ubcf4\ud1b5\uc2e0\uacf5\ud559\ubd80",imgUrl:"img/about-me/pencil-fill.svg"}].map((function(e,c){return Object(r.jsx)("div",{className:"aboutMe-info-wrapper",children:Object(r.jsxs)("div",{className:"aboutMe-basic-info",children:[Object(r.jsx)("div",{className:"aboutMe-icon-img-wrapper",children:Object(r.jsx)("img",{className:"aboutMe-icon-img",src:e.imgUrl,alt:e.label})}),Object(r.jsxs)("div",{className:"aboutMe-field",children:[Object(r.jsx)("div",{className:"aboutMe-field-label",children:e.label}),Object(r.jsx)("div",{className:"aboutMe-field-value",children:b(e.value)})]})]})},c)}))})]})})}function h(e){var c=e.setItemsRef;return Object(r.jsx)("article",{className:"skills",children:Object(r.jsxs)("div",{className:"skills-content",ref:function(e){return c(1,e)},children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("div",{className:"section-title-text",style:{color:"#000000",borderBottomColor:"#000000"},children:"Skills"})}),Object(r.jsx)("div",{className:"tech-stacks-container",children:[{skill_title:"Front-end",tech_stck_img_url:"img/skills/front-end.png"},{skill_title:"Back-end",tech_stck_img_url:"img/skills/back-end.png"},{skill_title:"Deployment",tech_stck_img_url:"img/skills/deployment.png"},{skill_title:"Version Control",tech_stck_img_url:"img/skills/version-control.png"}].map((function(e,c){return Object(r.jsxs)("div",{className:"tech-stacks",children:[Object(r.jsx)("div",{className:"skill_title",children:e.skill_title}),Object(r.jsx)("img",{className:"skill-img",src:e.tech_stck_img_url,alt:e.skill_title})]},c)}))})]})})}function u(e){var c=e.setItemsRef;return Object(r.jsx)("article",{className:"archiving",children:Object(r.jsxs)("div",{className:"archiving-content",ref:function(e){return c(2,e)},children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("div",{className:"section-title-text",style:{color:"#ffffff",borderBottomColor:"#ffffff"},children:"Archiving"})}),Object(r.jsxs)("div",{className:"archiving-container",children:[Object(r.jsxs)("div",{className:"archiving-card",onClick:function(){return window.open("https://github.com/ybw903")},children:[Object(r.jsx)("div",{className:"archiving-img-wrapper",children:Object(r.jsx)("img",{className:"archiving-img",src:"img/archiving/git-hub.png",alt:"github"})}),Object(r.jsx)("div",{className:"archiving-url",children:"https://github.com/ybw903"}),Object(r.jsxs)("div",{className:"archiving-description",children:[Object(r.jsx)("p",{children:"\uc18c\uc2a4 \ucf54\ub4dc \uc800\uc7a5\uc18c"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"\ud559\uc2b5\ud558\uba70 \ubc30\uc6e0\ub358 \ub0b4\uc6a9\uc758 \uc18c\uc2a4 \ucf54\ub4dc."}),Object(r.jsx)("li",{children:"\ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8 \ubc0f \ud559\ubd80 \uc2dc\uc808 \uc9c4\ud589\ud588\ub358 \ud504\ub85c\uc81d\ud2b8\uc758 \uc18c\uc2a4\ucf54\ub4dc"})]})]})]}),Object(r.jsxs)("div",{className:"archiving-card",onClick:function(){return window.open("https://velog.io/@ybw903")},children:[Object(r.jsx)("div",{className:"archiving-img-wrapper",children:Object(r.jsx)("img",{className:"archiving-img",src:"img/archiving/vel.png",alt:"velog"})}),Object(r.jsx)("div",{className:"archiving-url",children:"https://velog.io/@ybw903"}),Object(r.jsxs)("div",{className:"archiving-description",children:[Object(r.jsx)("p",{children:"\uacf5\ubd80 \ubc0f \uc9c0\uc2dd \uacf5\uc720 \ubaa9\uc801\uc758 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4."}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"\uacf5\ubd80\ud55c \uac83\uc744 \uc9c4\uc815\ud55c \ub098\uc758 \uac83\uc73c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud55c \uae30\ub85d"}),Object(r.jsx)("li",{children:"\uc9c0\uc2dd \uacf5\uc720\ub97c \ud1b5\ud55c \ud568\uaed8 \uc131\uc7a5\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uae30\uc704\ud55c \uc2e4\ucc9c"})]})]})]})]})]})})}function v(e){var c=e.setItemsRef;return Object(r.jsx)("article",{className:"projects",children:Object(r.jsxs)("div",{className:"projects-content",ref:function(e){return c(3,e)},children:[Object(r.jsx)("div",{className:"section-title",children:Object(r.jsx)("div",{className:"section-title-text",style:{color:"#ffffff",borderBottomColor:"#cccccc"},children:"Projects"})}),Object(r.jsxs)("div",{className:"projects-project",children:[Object(r.jsx)("div",{className:"projects-title",children:"\uac8c\uc2dc\ud310"}),Object(r.jsx)("div",{className:"projects-period",children:'"2021-07"'}),Object(r.jsxs)("div",{className:"projects-info",children:[Object(r.jsx)("div",{}),Object(r.jsxs)("div",{className:"projects-descriptions",children:[Object(r.jsx)("div",{className:"projects-main-description",children:"\ud0c0\uc784\ub9ac\ud504\uc640 \uc2a4\ud504\ub9c1 \ubd80\ud2b8\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \ud559\uc2b5\ud558\uace0\uc790 \uad6c\ud604\ud588\ub358 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4."}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"\uc8fc\uc694\uae30\ub2a5"}),Object(r.jsx)("div",{className:"projects-value",children:"\ud68c\uc6d0 \uc778\uc99d, \uac8c\uc2dc\uae00 \uc791\uc131, \uc0ad\uc81c,\uc218\uc815, \ub300\ub313\uae00 \uc791\uc131, \uc0ad\uc81c, \uc218\uc815, \uc88b\uc544\ud558\ub294 \uac8c\uc2dc\uae00 \ud45c\uc2dc"})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"GitHub"}),Object(r.jsx)("div",{className:"projects-value",children:Object(r.jsx)("div",{className:"projects-url",onClick:function(){return window.open("https://github.com/ybw903/SpringBoardApplication")},children:"https://github.com/ybw903/SpringBoardApplication"})})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"Front-end"}),Object(r.jsx)("div",{className:"projects-value",children:"Thymleaf"})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"Back-end"}),Object(r.jsx)("div",{className:"projects-value",children:"Spring Boot 2.43, Spring Security, Spring Data Jpa"})]})]})]})]}),Object(r.jsxs)("div",{className:"projects-project",children:[Object(r.jsx)("div",{className:"projects-title",children:"\uc878\uc5c5 \ud504\ub85c\uc81d\ud2b8"}),Object(r.jsx)("div",{className:"projects-period",children:'"2020-04 ~ 2020.10"'}),Object(r.jsxs)("div",{className:"projects-info",children:[Object(r.jsx)("div",{}),Object(r.jsxs)("div",{className:"projects-descriptions",children:[Object(r.jsx)("div",{className:"projects-main-description",children:b("\uc878\uc5c5\ud504\ub85c\uc81d\ud2b8\ub85c \uc778\uadfc\uc5d0 \uc704\uce58\ud55c \uc8fc\ucc28\uc7a5 \uc815\ubcf4 \uc870\ud68c \ubc0f \uad6c\ud604\ud55c \ucc28\ub7c9\ubc88\ud638 \uc778\uc2dd \uc8fc\ucc28\uc2dc\uc2a4\ud15c \uc608\uc57d \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.\n                                \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc API\uc11c\ubc84\ub97c \ub2f4\ub2f9\ud558\uc5ec \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.\n                                Flask\ub97c \uc0ac\uc6a9\ud558\uc5ec API\uc11c\ubc84\ub97c \uad6c\ud604\ud558\uc600\uace0 MySQL\ub85c DB\ub97c \uad6c\ucd95\ud558\uc600\uc2b5\ub2c8\ub2e4.\n                                \ud14c\uc774\ube14 \uac04\uc758 \ud544\uc694\ud55c \uc5f0\uad00\uad00\uacc4\uc5d0 \ub530\ub77c \uc678\ub798\ud0a4 \uc81c\uc57d\uc870\uac74\uacfc \uc815\uaddc\ud654\uacfc\uc815\uc5d0 \ub9de\ucd94\uc5b4 DB\ub97c \uc124\uacc4\ud558\uc600\uace0, \n                                \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 HTTP\ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud1b5\uc2e0\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \n                                \ub610\ud55c, JWT\ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc778\uc99d\uc744 \uad6c\ud604\ud558\uc600\uace0 AWS Lambda\uc5d0 \uad6c\ud604\ud55c API\uc11c\ubc84\ub97c \ubc30\ud3ec\ud558\ub294 \uacbd\ud5d8\uc744 \ud558\uc600\uc2b5\ub2c8\ub2e4.")}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"\uc8fc\uc694\uae30\ub2a5"}),Object(r.jsx)("div",{className:"projects-value",children:"\uc704\uce58 \uae30\ubc18 \uc8fc\ucc28\uc7a5 \uc815\ubcf4 \uc870\ud68c, JWT\ud1a0\ud070 \uc778\uc99d,\uc778\uac00, \uc8fc\ucc28\uc2dc\uc2a4\ud15c \uc608\uc57d"})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"GitHub"}),Object(r.jsx)("div",{className:"projects-value",children:Object(r.jsx)("div",{className:"projects-url",onClick:function(){return window.open("https://github.com/ybw903/Capstone-Application")},children:"https://github.com/ybw903/Capstone-Application"})})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"Front-end"}),Object(r.jsx)("div",{className:"projects-value",children:"Flutter"})]}),Object(r.jsxs)("div",{className:"projects-description",children:[Object(r.jsx)("div",{className:"projects-label",children:"Back-end"}),Object(r.jsx)("div",{className:"projects-value",children:"Flask, MySQL"})]})]})]})]})]})})}function O(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"introduce",children:Object(r.jsxs)("div",{className:"introduce-content",children:[Object(r.jsxs)("div",{className:"introduce-title",children:["- \uc720\ubcd1\uc6b0 -",Object(r.jsx)("br",{}),"Protfolio"]}),Object(r.jsx)("hr",{className:"introduce-divider"}),Object(r.jsxs)("div",{className:"introuduce-description",children:["\uc548\ub155\ud558\uc138\uc694.",Object(r.jsx)("br",{}),"\ud568\uaed8 \uc131\uc7a5\ud558\uace0 \uc2f6\uc740 \uac1c\ubc1c\uc790 \uc720\ubcd1\uc6b0\uc785\ub2c8\ub2e4."]})]})})})}var x=function(){var e=Object(i.useRef)(new Array(4)),c=function(c,s){e.current[c]=s};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{handleScroll:function(c){var s;null===e||void 0===e||null===(s=e.current[c])||void 0===s||s.scrollIntoView({behavior:"smooth"})}}),Object(r.jsx)(O,{}),Object(r.jsx)(m,{setItemsRef:c}),Object(r.jsx)(h,{setItemsRef:c}),Object(r.jsx)(u,{setItemsRef:c}),Object(r.jsx)(v,{setItemsRef:c}),Object(r.jsx)(a,{})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(c){var s=c.getCLS,i=c.getFID,t=c.getFCP,n=c.getLCP,l=c.getTTFB;s(e),i(e),t(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.345b6bf6.chunk.js.map