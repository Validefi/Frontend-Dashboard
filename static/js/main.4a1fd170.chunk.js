(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[6],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));n(1),n(76),n(112);var r=n(21),i=(n(113),function(e){return{type:r.m,address:e}}),c=function(e){return{type:r.j,chainId:e}},a=function(e){return{type:r.l,network:e}}},112:function(e,t){},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://validefi.io"},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return d})),n.d(t,"m",(function(){return b})),n.d(t,"j",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"n",(function(){return f})),n.d(t,"k",(function(){return h}));var r="LOGIN_REQUEST",i="LOGIN_SUCCESS",c="LOGIN_FAILED",a="LOGOUT_REQUEST",s="LOGOUT_SUCCESS",l="LOGOUT_FAILED",u="REGISTER_REQUEST",o="REGISTER_SUCCESS",d="REGISTER_FAILED",b="SET_WALLET_ADDRESS",j="SET_CHAIN_ID",O="SET_NETWORK",f="TOGGLE_SIDEBAR",h="SET_MONITOR_WALLET"},274:function(e,t){},297:function(e,t){},299:function(e,t){},375:function(e,t){},377:function(e,t){},409:function(e,t){},414:function(e,t){},416:function(e,t){},423:function(e,t){},436:function(e,t){},459:function(e,t){},532:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),c=n(89),a=n.n(c),s=n(63),l=n(23),u=n(47),o=n(13),d=function(){return Object(o.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%"},children:Object(o.jsx)("div",{className:"spinner-border",role:"status",style:{color:"#7888fc",display:"inline-block",width:"2rem",height:"2rem",verticalAlign:"-.125em",border:".25em solid currentColor",borderRightColor:"transparent",borderRadius:"50%",animation:".75s linear infinite spinner-border"},children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},b=n(17),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(3),n.e(11),n.e(14)]).then(n.bind(null,987))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(15),n.e(18)]).then(n.bind(null,986))})),f=Object(r.lazy)((function(){return n.e(21).then(n.bind(null,984))})),h=Object(r.lazy)((function(){return n.e(20).then(n.bind(null,985))})),m=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(22)]).then(n.bind(null,993))})),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(19),n.e(16)]).then(n.bind(null,994))})),p=[{link:"/dashboard",private:!0,layout:!0,render:function(){return Object(o.jsx)(j,{})}},{link:"/login",private:!1,restricted:!0,layout:!1,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}},{link:"/404",private:!1,layout:!1,render:function(){return Object(o.jsx)(f,{})}},{link:"/contact",private:!1,layout:!0,render:function(){return Object(o.jsx)(h,{})}},{link:"/coins",private:!1,layout:!0,render:function(){return Object(o.jsx)(g,{})}},{link:"/profile",private:!0,layout:!0,render:function(){return Object(o.jsx)(m,{})}},{link:"/",private:!1,layout:!1,restricted:!0,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}}],w=n(1),v=n.n(w),E=n(76),S=n(245),y=n(110),x=n(114),_=n.n(x),k=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(12)]).then(n.bind(null,988))})),I=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,989))})),T=Object(s.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}}),(function(e){return{setAddress:function(t){e(Object(y.a)(t))},setChainId:function(t){e(Object(y.b)(t))}}}))((function(e){var t=e.children,n=e.layout,c=e.setAddress,a=e.setChainId,s=Object(S.a)(e,["children","layout","setAddress","setChainId"]),l=localStorage.getItem("wallet_address");return console.log(l),Object(r.useEffect)((function(){localStorage.getItem("wallet_address")&&_.a.utils.isAddress(localStorage.getItem("wallet_address"))&&c(localStorage.getItem("wallet_address"))}),[l]),Object(r.useEffect)((function(){function e(){return(e=Object(E.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=window.ethereum)||void 0===t||t.on("accountsChanged",(function(e){0===e.length?(c(null),localStorage.removeItem("wallet_address")):_.a.utils.isAddress(e[0])&&(c(e[0]),localStorage.setItem("wallet_address",e[0]))})),null===(n=window.ethereum)||void 0===n||n.on("chainChanged",(function(e){e.length>0&&(a(e),localStorage.setItem("chain_id",e),window.location.reload())}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==window.ethereum&&function(){e.apply(this,arguments)}()}),[c,a]),Object(o.jsx)(o.Fragment,{children:n?Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)(k,{}),Object(o.jsx)(I,{}),i.a.cloneElement(t,Object(b.a)({},s))]}):Object(o.jsx)(o.Fragment,{children:i.a.cloneElement(t,Object(b.a)({},s))})})})),L=Object(r.lazy)((function(){return n.e(23).then(n.bind(null,969))})),R=Object(r.lazy)((function(){return n.e(24).then(n.bind(null,970))})),A=Object(u.c)(l.g,Object(s.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}})))((function(e){var t=e.isSidebarVisible,n=p;return Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(d,{}),children:Object(o.jsx)("div",{className:"h-100 ".concat(t?"":"sidebar-hidden"),children:Object(o.jsxs)(l.d,{children:[n.map((function(e,t){return e.private?Object(o.jsx)(L,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(T,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t):Object(o.jsx)(R,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(T,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t)})),Object(o.jsx)(l.a,{to:"/404"})]})})})})),C=n(109),N=n(542),G=n(536),z=new N.a,U=function(){return Object(o.jsx)(C.a,{children:Object(o.jsx)(G.a,{client:z,children:Object(o.jsx)(A,{})})})},D=(n(531),n(532),n(140)),V=n(244),M=(n(533),n(21)),P={isAuthenticated:!1,isLoading:!1,errmess:null,wallet_address:null,network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"},chainId:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.b:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case M.c:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:t.accessToken,refreshToken:t.refreshToken,user_id:t.data.user_id,isLoading:!1});case M.a:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,access:null,refreshToken:null,isLoading:!1});case M.e:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!0});case M.f:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!1});case M.d:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,accessToken:null,refreshToken:null,isLoading:!1});case M.h:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case M.i:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!1});case M.g:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,isLoading:!1});case M.m:return t.address?Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!0}):Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!1});case M.l:return t.network.value&&t.network.label?Object(b.a)(Object(b.a)({},e),{},{network:t.network}):Object(b.a)(Object(b.a)({},e),{},{network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"}});default:return e}},W={isSidebarVisible:!0},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.n:return Object(b.a)(Object(b.a)({},e),{},{isSidebarVisible:t.isSidebarVisible});default:return e}},B={monitored_wallet:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.k:return Object(b.a)(Object(b.a)({},e),{},{monitored_wallet:t.wallet});default:return e}},K=Object(u.b)({auth:F,settings:Q,wallet:J}),X=n(145),H=n(541);function q(e){var t=new H.a(e,"number"===typeof e.chainId?e.chainId:"string"===typeof e.chainId?parseInt(e.chainId):"any");return t.pollingInterval=15e3,t}var Y=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c;return Object(u.d)(K,e(Object(u.a)(V.a)))}(),Z=Object(D.c)("NETWORK");window.ethereum&&(window.ethereum.autoRefreshOnNetworkChange=!1);a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(X.a,{themeMap:{light:"./public/index.css",dark:"./public/dark.css"},defaultTheme:"light",children:Object(o.jsx)(s.a,{store:Y,children:Object(o.jsx)(D.b,{getLibrary:q,children:Object(o.jsx)(Z,{getLibrary:q,children:Object(o.jsx)(U,{})})})})})}),document.getElementById("root")),console.log=function(){}}},[[534,7,8]]]);