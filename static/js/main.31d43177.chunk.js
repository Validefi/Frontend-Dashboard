(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[6],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));n(1),n(76),n(112);var r=n(18),c=(n(113),function(e){return{type:r.m,address:e}}),i=function(e){return{type:r.j,chainId:e}},a=function(e){return{type:r.l,network:e}}},112:function(e,t){},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://validefi.io"},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return d})),n.d(t,"m",(function(){return b})),n.d(t,"j",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"o",(function(){return h})),n.d(t,"k",(function(){return f})),n.d(t,"n",(function(){return m}));var r="LOGIN_REQUEST",c="LOGIN_SUCCESS",i="LOGIN_FAILED",a="LOGOUT_REQUEST",s="LOGOUT_SUCCESS",l="LOGOUT_FAILED",u="REGISTER_REQUEST",o="REGISTER_SUCCESS",d="REGISTER_FAILED",b="SET_WALLET_ADDRESS",j="SET_CHAIN_ID",O="SET_NETWORK",h="TOGGLE_SIDEBAR",f="SET_MONITOR_WALLET",m="SET_WALLET_BALANCE"},274:function(e,t){},297:function(e,t){},299:function(e,t){},375:function(e,t){},377:function(e,t){},409:function(e,t){},414:function(e,t){},416:function(e,t){},423:function(e,t){},436:function(e,t){},459:function(e,t){},532:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(89),a=n.n(i),s=n(63),l=n(23),u=n(47),o=n(13),d=function(){return Object(o.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%"},children:Object(o.jsx)("div",{className:"spinner-border",role:"status",style:{color:"#7888fc",display:"inline-block",width:"2rem",height:"2rem",verticalAlign:"-.125em",border:".25em solid currentColor",borderRightColor:"transparent",borderRadius:"50%",animation:".75s linear infinite spinner-border"},children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},b=n(16),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(11),n.e(15)]).then(n.bind(null,986))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(14),n.e(18)]).then(n.bind(null,985))})),h=Object(r.lazy)((function(){return n.e(21).then(n.bind(null,983))})),f=Object(r.lazy)((function(){return n.e(20).then(n.bind(null,984))})),m=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(22)]).then(n.bind(null,992))})),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(19),n.e(16)]).then(n.bind(null,993))})),p=[{link:"/dashboard",private:!0,layout:!0,render:function(){return Object(o.jsx)(j,{})}},{link:"/login",private:!1,restricted:!0,layout:!1,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}},{link:"/404",private:!1,layout:!1,render:function(){return Object(o.jsx)(h,{})}},{link:"/contact",private:!1,layout:!0,render:function(){return Object(o.jsx)(f,{})}},{link:"/coins",private:!1,layout:!0,render:function(){return Object(o.jsx)(g,{})}},{link:"/profile",private:!0,layout:!0,render:function(){return Object(o.jsx)(m,{})}},{link:"/",private:!1,layout:!1,restricted:!0,render:function(e){return Object(o.jsx)(O,Object(b.a)({},e))}}],E=n(1),w=n.n(E),S=n(76),v=n(245),_=n(111),y=n(114),x=n.n(y),k=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(12)]).then(n.bind(null,987))})),I=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,988))})),T=Object(s.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}}),(function(e){return{setAddress:function(t){e(Object(_.a)(t))},setChainId:function(t){e(Object(_.b)(t))}}}))((function(e){var t=e.children,n=e.layout,i=e.setAddress,a=e.setChainId,s=Object(v.a)(e,["children","layout","setAddress","setChainId"]),l=localStorage.getItem("wallet_address")||"";return Object(r.useEffect)((function(){localStorage.getItem("wallet_address")&&x.a.utils.isAddress(localStorage.getItem("wallet_address"))&&i(localStorage.getItem("wallet_address")),localStorage.getItem("chain_id")&&a(localStorage.getItem("chain_id"))}),[l]),Object(r.useEffect)((function(){function e(){return(e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=window.ethereum)||void 0===t||t.on("accountsChanged",(function(e){0===e.length?(i(null),localStorage.removeItem("wallet_address")):x.a.utils.isAddress(e[0])&&(i(e[0]),localStorage.setItem("wallet_address",e[0]))})),null===(n=window.ethereum)||void 0===n||n.on("chainChanged",(function(e){e.length>0&&(localStorage.setItem("chain_id",e),window.location.reload())}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==window.ethereum&&function(){e.apply(this,arguments)}()}),[]),Object(o.jsx)(o.Fragment,{children:n?Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)(k,{}),Object(o.jsx)(I,{}),c.a.cloneElement(t,Object(b.a)({},s))]}):Object(o.jsx)(o.Fragment,{children:c.a.cloneElement(t,Object(b.a)({},s))})})})),L=Object(r.lazy)((function(){return n.e(23).then(n.bind(null,968))})),A=Object(r.lazy)((function(){return n.e(24).then(n.bind(null,969))})),R=Object(u.c)(l.g,Object(s.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible}})))((function(e){var t=e.isSidebarVisible,n=p;return Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(d,{}),children:Object(o.jsx)("div",{className:"h-100 ".concat(t?"":"sidebar-hidden"),children:Object(o.jsxs)(l.d,{children:[n.map((function(e,t){return e.private?Object(o.jsx)(L,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(T,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t):Object(o.jsx)(A,{restricted:e.restricted,exact:!0,path:e.link,children:Object(o.jsx)(T,{layout:e.layout,children:Object(o.jsx)(e.render,{})})},t)})),Object(o.jsx)(l.a,{to:"/404"})]})})})})),C=n(109),N=n(542),D=n(536),G=new N.a,z=function(){return Object(o.jsx)(C.a,{children:Object(o.jsx)(D.a,{client:G,children:Object(o.jsx)(R,{})})})},U=(n(531),n(532),n(140)),V=n(244),M=(n(533),n(18)),F={isAuthenticated:!1,isLoading:!1,errmess:null,wallet_address:null,network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"},chainId:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.b:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case M.c:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:t.accessToken,refreshToken:t.refreshToken,user_id:t.data.user_id,isLoading:!1});case M.a:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,access:null,refreshToken:null,isLoading:!1});case M.e:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!0});case M.f:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,accessToken:null,refreshToken:null,isLoading:!1});case M.d:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,accessToken:null,refreshToken:null,isLoading:!1});case M.h:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!0});case M.i:return Object(b.a)(Object(b.a)({},e),{},{errmess:null,isLoading:!1});case M.g:return Object(b.a)(Object(b.a)({},e),{},{errmess:t.errmess,isLoading:!1});case M.m:return t.address?Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!0}):Object(b.a)(Object(b.a)({},e),{},{wallet_address:t.address,isAuthenticated:!1});case M.l:return t.network.value&&t.network.label?Object(b.a)(Object(b.a)({},e),{},{network:t.network}):Object(b.a)(Object(b.a)({},e),{},{network:{value:"Ethereum Mainnet",label:"Ethereum Mainnet"}});case M.j:return Object(b.a)(Object(b.a)({},e),{},{chainId:t.chainId});default:return e}},W={isSidebarVisible:!0},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.o:return Object(b.a)(Object(b.a)({},e),{},{isSidebarVisible:t.isSidebarVisible});default:return e}},Q={monitored_wallet:null,balance:0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.k:return Object(b.a)(Object(b.a)({},e),{},{monitored_wallet:t.wallet});case M.n:return Object(b.a)(Object(b.a)({},e),{},{balance:t.balance});default:return e}},K=Object(u.b)({auth:P,settings:B,wallet:J}),X=n(145),H=n(541);function q(e){var t=new H.a(e,"number"===typeof e.chainId?e.chainId:"string"===typeof e.chainId?parseInt(e.chainId):"any");return t.pollingInterval=15e3,t}var Y=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c;return Object(u.d)(K,e(Object(u.a)(V.a)))}(),Z=Object(U.c)("NETWORK");window.ethereum&&(window.ethereum.autoRefreshOnNetworkChange=!1);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(X.a,{themeMap:{light:"Frontend-Dashboard/public/index.css",dark:"Frontend-Dashboard/public/dark.css"},defaultTheme:"light",children:Object(o.jsx)(s.a,{store:Y,children:Object(o.jsx)(U.b,{getLibrary:q,children:Object(o.jsx)(Z,{getLibrary:q,children:Object(o.jsx)(z,{})})})})})}),document.getElementById("root")),console.log=function(){}}},[[534,7,8]]]);