(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[0],{127:function(e,t){},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://validefi.io"},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return d})),n.d(t,"l",(function(){return b})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return O})),n.d(t,"m",(function(){return f}));var r="LOGIN_REQUEST",c="LOGIN_SUCCESS",i="LOGIN_FAILED",s="LOGOUT_REQUEST",a="LOGOUT_SUCCESS",u="LOGOUT_FAILED",l="REGISTER_REQUEST",o="REGISTER_SUCCESS",d="REGISTER_FAILED",b="SET_WALLET_ADDRESS",j="SET_CHAIN_ID",O="SET_NETWORK",f="TOGGLE_SIDEBAR"},254:function(e,t){},279:function(e,t){},281:function(e,t){},360:function(e,t){},362:function(e,t){},394:function(e,t){},399:function(e,t){},401:function(e,t){},408:function(e,t){},421:function(e,t){},444:function(e,t){},519:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(79),s=n.n(i),a=n(54),u=n(18),l=n(42),o=n(10),d=function(){return Object(o.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%"},children:Object(o.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},b=n(13),j=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,600))})),O=Object(r.lazy)((function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,603))})),f=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,594))})),h=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,595))})),m=[{link:"/dashboard",private:!0,layout:!0,render:function(){return Object(o.jsx)(j,{})}},{link:"/login",private:!1,restricted:!0,layout:!1,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}},{link:"/404",private:!1,layout:!1,render:function(){return Object(o.jsx)(f,{})}},{link:"/contact",private:!1,layout:!0,render:function(){return Object(o.jsx)(h,{})}},{link:"/",private:!1,layout:!1,restricted:!0,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}}],g=n(25),E=n.n(g),S=n(78),x=n(230),k=n(96),p=n(129),_=n.n(p),v=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,604))})),w=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,599))})),y=Object(a.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}}),(function(e){return{setAddress:function(t){e(Object(k.a)(t))},setChainId:function(t){e(Object(k.b)(t))}}}))((function(e){var t=e.children,n=e.layout,i=e.setAddress,s=e.setChainId,a=Object(x.a)(e,["children","layout","setAddress","setChainId"]);return Object(r.useEffect)((function(){sessionStorage.getItem("wallet_address")&&_.a.utils.isAddress(sessionStorage.getItem("wallet_address"))&&i(sessionStorage.getItem("wallet_address"))}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(S.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum.on("accountsChanged",(function(e){0===e.length?(i(null),sessionStorage.removeItem("wallet_address")):_.a.utils.isAddress(e[0])&&(i(e[0]),sessionStorage.setItem("wallet_address",e[0]))})),window.ethereum.on("chainChanged",(function(e){e.length>0&&(s(e),sessionStorage.setItem("chain_id",e),window.location.reload())}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,s]),Object(o.jsx)(o.Fragment,{children:n?Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)(v,{}),Object(o.jsx)(w,{}),c.a.cloneElement(t,Object(b.a)({},a))]}):Object(o.jsx)(o.Fragment,{children:c.a.cloneElement(t,Object(b.a)({},a))})})})),T=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,581))})),I=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,582))})),L=Object(l.c)(u.g,Object(a.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}})))((function(e){var t=e.isSidebarVisible,n=m;return Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(d,{}),children:Object(o.jsx)("div",{className:"h-100 ".concat(t?"":"sidebar-hidden"),children:Object(o.jsxs)(u.d,{children:[n.map((function(e,t){return e.private?Object(o.jsx)(T,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(y,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t):Object(o.jsx)(I,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(y,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t)})),Object(o.jsx)(u.a,{to:"/404"})]})})})})),A=n(94),C=n(527),R=n(524),G=new C.a,N=function(){return Object(o.jsx)(A.a,{children:Object(o.jsx)(R.a,{client:G,children:Object(o.jsx)(L,{})})})},U=(n(518),n(519),n(229)),D=(n(520),n(17)),V={isAuthenticated:!1,isLoading:!1,errmess:null,wallet_address:null,network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"},chainId:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.b:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case D.c:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:t.accessToken,refreshToken:t.refreshToken,user_id:t.data.user_id,isLoading:!1});case D.a:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,access:null,refreshToken:null,isLoading:!1});case D.e:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!0});case D.f:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!1});case D.d:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,accessToken:null,refreshToken:null,isLoading:!1});case D.h:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case D.i:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!1});case D.g:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,isLoading:!1});case D.l:return t.address?Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!0}):Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!1});case D.k:return t.network.value&&t.network.label?Object(b.a)(Object(b.a)({},e),{},{network:t.network}):Object(b.a)(Object(b.a)({},e),{},{network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"}});default:return e}},M={isSidebarVisible:!0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.m:return Object(b.a)(Object(b.a)({},e),{},{isSidebarVisible:t.isSidebarVisible});default:return e}},P=Object(l.b)({auth:z,settings:F}),Q=n(225),B=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c;return Object(l.d)(P,e(Object(l.a)(U.a)))}();s.a.render(Object(o.jsx)(Q.a,{themeMap:{light:"./index.css",dark:"./dark.css"},defaultTheme:"dark",children:Object(o.jsx)(a.a,{store:B,children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})})})}),document.getElementById("root")),console.log=function(){}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));n(25),n(78),n(127);var r=n(17),c=(n(128),function(e){return{type:r.l,address:e}}),i=function(e){return{type:r.j,chainId:e}},s=function(e){return{type:r.k,network:e}}}},[[521,1,2]]]);