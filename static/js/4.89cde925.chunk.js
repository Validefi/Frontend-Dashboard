(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[4],{103:function(e,n){},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="https://validefi.io"},250:function(e,n){},275:function(e,n){},277:function(e,n){},358:function(e,n){},360:function(e,n){},392:function(e,n){},397:function(e,n){},399:function(e,n){},406:function(e,n){},419:function(e,n){},442:function(e,n){},528:function(e,n,t){"use strict";t.r(n);var a=t(68),c=t.n(a),r=t(137),s=t(88),i=t(0),o=t.p+"static/media/metamask.53f2bee2.svg",u=t(237),d=t.n(u),l=t(13),h=(t(103),t(6)),f=(t(104),t(515),t(517)),b={position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},j=function(e,n){f.a.configure(),"error"===n?f.a.error(e,b):"warning"===n?f.a.warning(e,b):"success"===n?f.a.success(e,b):f.a.info(e,b)},m=t(1);n.default=Object(l.b)((function(e){return{address:e.auth.wallet_address,chainId:e.auth.chainId}}),(function(e){return{setAddr:function(n){e(function(e){return{type:h.k,address:e}}(n))},setChainId:function(n){e(function(e){return{type:h.j,chainId:e}}(n))}}}))((function(e){var n=e.setAddr,t=e.setChainId,a=Object(i.useState)(!0),u=Object(s.a)(a,2),l=u[0],h=u[1];Object(i.useEffect)((function(){"undefined"===typeof window.ethereum&&(h(!1),j("Please install MetaMask","error"))}),[]);var f=function(){var e=Object(r.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.ethereum){e.next=4;break}return h(!1),j("Please install MetaMask","error"),e.abrupt("return");case 4:if(!window.ethereum){e.next=15;break}return e.prev=5,e.next=8,window.ethereum.request({method:"eth_requestAccounts"});case 8:(a=e.sent).length>0&&n(a[0]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),4001===e.t0.code&&j("Please connect MetaMask","error");case 15:window.ethereum.on("accountsChanged",(function(e){0===e.length?n(null):d.a.utils.isAddress(e[0])&&n(e[0])})),window.ethereum.on("chainChanged",(function(e){e.length>0&&(t(e),window.location.reload())}));case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"login-page",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-md-center",children:Object(m.jsx)("div",{className:"col-md-12 col-lg-4",children:Object(m.jsx)("div",{className:"card login-box-container",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{className:"authent-logo",children:Object(m.jsx)("img",{src:o,alt:"MetaMask"})}),Object(m.jsx)("div",{className:"authent-text",children:Object(m.jsx)("p",{children:l?"Please connect your MetaMask wallet":"Please install MetaMask in your browser"})}),l&&Object(m.jsx)("div",{className:"d-grid",children:Object(m.jsx)("button",{className:"btn btn-danger m-b-xs",onClick:f,children:"Connect your wallet"})})]})})})})})})}))}}]);