/*! For license information please see 13.d3bd1a58.chunk.js.LICENSE.txt */
(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[13],{153:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return y}));var a=n(20),r=n(168),i=n.p+"static/media/walletConnectIcon.1e5a2e2f.svg",c=n.p+"static/media/coinbaseWalletIcon.9c00fe7e.svg",s=n.p+"static/media/portisIcon.f44aba13.png",o=n.p+"static/media/arrow-right.fbab7863.svg",l=n(785),d=n(786),u=n(787),h=n(788),j=n(789),b=n(790),f=n(791),p=n(792),m=n(793),v=n(794),x=n(4);function O(e){try{return Object(a.a)(e)}catch(t){return!1}}function g(e){switch(e){case"metamask":return r.a;case"walletconnect":return i;case"walletlink":case"coinbaselink":return c;case"fortmatic":return"data:image/png;base64,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";case"portis":return s;case"injected":default:return o}}var y=function(e){switch(e){case"send":return Object(x.jsx)(l.a,{});case"receive":return Object(x.jsx)(d.a,{});case"swap":return Object(x.jsx)(u.a,{});case"claim_reward":case"approve":return Object(x.jsx)(h.a,{});case"staked":return Object(x.jsx)(j.a,{});case"unstaked":return Object(x.jsx)(b.a,{});case"mint":return Object(x.jsx)(f.a,{});case"burn":return Object(x.jsx)(p.a,{});case"contract_execution":return Object(x.jsx)(m.a,{});default:return Object(x.jsx)(v.a,{})}}},154:function(e,t,n){"use strict";n(0);var a=n(4);t.a=function(e){var t=e.color;return Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,display:"grid",placeItems:"center"},children:Object(a.jsx)("div",{className:"spinner-border ".concat(t||"text-primary"),role:"status",children:Object(a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},159:function(e,t,n){"use strict";var a=n(7),r=n(52),i=n(0),c=n(54),s=n(4);t.a=function(e){var t=e.label,n=void 0===t?"Enter wallet address":t,o=e.handleSubmit,l=e.icon,d=e.autoFocus,u=void 0!==d&&d,h=e.style,j=Object(c.b)().currentTheme,b=Object(i.useState)(""),f=Object(r.a)(b,2),p=f[0],m=f[1];return Object(s.jsxs)("div",{className:"input-group flex-nowrap",style:Object(a.a)({},h),children:[Object(s.jsx)("input",{type:"text",className:"form-control accordion-flush",placeholder:n,"aria-label":n,value:p,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&o(p)},autoFocus:u}),Object(s.jsx)("button",{className:"input-group-text nav-link search-icon","aria-expanded":"false",style:{backgroundColor:"dark"===j?"#2B3B52":"#fff"},onClick:function(){return o(p)},children:l})]})}},162:function(e,t,n){"use strict";var a,r,i,c,s,o=n(151),l=(n(0),n(148)),d=n(54),u=n(4);t.a=function(e){var t=e.title,n=e.width,h=void 0===n?50:n,j=e.height,b=void 0===j?50:j,f=e.handleClose,p=e.children,m=e.isOpen;(h<=0||h>100||b<=0||b>100)&&console.error("Modal height and width should be in range of [0,100]");var v=Object(d.b)().currentTheme,x=l.default.div(a||(a=Object(o.a)(["\n    position: fixed;\n    z-index: 12;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  "]))),O=l.default.div(r||(r=Object(o.a)(["\n    position: fixed;\n    z-index: 12;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.3);\n  "]))),g=l.default.h5(i||(i=Object(o.a)(["\n    margin: 0 2rem 0 2rem;\n  "]))),y=l.default.div(c||(c=Object(o.a)(["\n    padding: 18px 0;\n    width: ","%;\n    max-height: ","%;\n    z-index: 13;\n    background-color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 12px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  "])),h,b,"dark"===v?"#253347":"#fff"),w=l.default.svg(s||(s=Object(o.a)(["\n    width: 15px;\n    height: 15px;\n    position: absolute;\n    right: 25px;\n    top: 21px;\n    cursor: pointer;\n  "])));return Object(u.jsx)(u.Fragment,{children:m&&Object(u.jsxs)(x,{children:[Object(u.jsx)(O,{onClick:f}),Object(u.jsxs)(y,{children:[Object(u.jsxs)(w,{onClick:f,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20.39 20.39",id:"modal-close-button",children:[Object(u.jsx)("title",{children:"close"}),Object(u.jsx)("line",{x1:"19.39",y1:"19.39",x2:"1",y2:"1",fill:"none",stroke:"dark"===v?"#fff":"currentcolor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"3"}),Object(u.jsx)("line",{x1:"1",y1:"19.39",x2:"19.39",y2:"1",fill:"none",stroke:"dark"===v?"#fff":"currentcolor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"3"})]}),Object(u.jsx)(g,{children:t}),p]})]})})}},168:function(e,t,n){"use strict";t.a=n.p+"static/media/metamask.02e3ec27.png"},172:function(e,t,n){"use strict";n(0);var a=n(803),r=n(801),i=n(153),c=n(27),s=n(4);t.a=Object(c.b)((function(e){return{isEthereum:e.auth.isEthereum}}))((function(e){var t=e.data,n=e.isEthereum;return Object(s.jsx)(a.a,{className:"todo-list",children:t.length>0?t.map((function(e,t){var a;return Object(s.jsx)(r.a,{timeout:500,classNames:"item",children:Object(s.jsx)("div",{className:"transactions-list",children:Object(s.jsx)("div",{className:"tr-item",children:Object(s.jsxs)("div",{className:"tr-company-name",children:[Object(s.jsx)("div",{className:"tr-icon tr-card-icon text-primary tr-card-bg-primary",children:Object(i.a)(null===e||void 0===e?void 0:e.type)}),Object(s.jsxs)("div",{className:"tr-text",children:[Object(s.jsxs)("a",{href:n?"https://etherscan.io/tx/".concat(null===e||void 0===e?void 0:e.id):"https://bscscan.com/tx/".concat(null===e||void 0===e?void 0:e.id),target:"_blank",rel:"noreferrer nofollow",children:[Object(s.jsx)("h4",{children:null===e||void 0===e||null===(a=e.type)||void 0===a?void 0:a.toUpperCase().replace("_"," ")}),Object(s.jsx)("p",{style:{width:"100%"},children:new Date(1e3*(null===e||void 0===e?void 0:e.date)).toDateString()})]}),Object(s.jsx)("a",{href:n?"https://etherscan.io/tx/".concat(null===e||void 0===e?void 0:e.id):"https://bscscan.com/tx/".concat(null===e||void 0===e?void 0:e.id),target:"_blank",rel:"noreferrer nofollow",children:Object(s.jsx)("p",{children:null===e||void 0===e?void 0:e.description})})]})]})})})},t)})):Object(s.jsx)("p",{children:"You don't have any transactions"})})}))},173:function(e,t,n){"use strict";var a,r=n(151),i=n(52),c=n(0),s=n.n(c),o=n(167),l=n(148),d=n(54),u=n(161),h=n(803),j=n(801),b=n(153),f=n(162),p=n(27),m=n(154),v=n(4),x=function(e){var t,n,a=e.item,r=Object(d.b)().currentTheme;return Object(v.jsx)("div",{className:"transactions-list box-shadow",children:Object(v.jsx)("div",{className:"tr-item",children:Object(v.jsxs)("div",{className:"tr-company-name w-100",children:[Object(v.jsx)("div",{className:"tr-icon tr-card-icon text-primary tr-card-bg-primary",children:Object(v.jsx)("img",{alt:"Favicon",src:"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(null===a||void 0===a||null===(t=a.source)||void 0===t?void 0:t.domain),width:"25px"})}),Object(v.jsxs)("a",{className:"tr-text w-100",href:"".concat(null===a||void 0===a?void 0:a.url),target:"_blank",rel:"noreferrer nofollow",children:[Object(v.jsx)("h6",{style:{fontWeight:"400"},className:"dark"===r?"text-white":"text-dark",children:null===a||void 0===a?void 0:a.title}),Object(v.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(v.jsx)("p",{className:"text-muted",style:{flex:1},children:new Date(null===a||void 0===a?void 0:a.published_at).toDateString().split(" ").slice(1).join(" ")}),Object(v.jsx)("p",{style:{color:"dark"===r?"#fff":"#1a1a1a",fontWeight:600,flex:1,textAlign:"right"},children:null===a||void 0===a||null===(n=a.source)||void 0===n?void 0:n.domain})]})]})]})})})},O=function(e){var t,n=e.item,a=e.isEthereum;return Object(v.jsx)("div",{className:"transactions-list",children:Object(v.jsx)("div",{className:"tr-item",children:Object(v.jsxs)("div",{className:"tr-company-name w-100",children:[Object(v.jsx)("div",{className:"tr-icon tr-card-icon text-primary tr-card-bg-primary",children:Object(b.a)(null===n||void 0===n?void 0:n.type)}),Object(v.jsxs)("div",{className:"tr-text w-100",children:[Object(v.jsx)("a",{href:a?"https://etherscan.io/tx/".concat(null===n||void 0===n?void 0:n.id):"https://bscscan.com/tx/".concat(null===n||void 0===n?void 0:n.id),target:"_blank",rel:"noreferrer nofollow",children:Object(v.jsx)("h4",{children:null===n||void 0===n||null===(t=n.type)||void 0===t?void 0:t.toUpperCase().replace("_"," ")})}),Object(v.jsxs)("div",{className:"d-flex w-100",children:[Object(v.jsx)("p",{style:{width:"100%",flex:1},children:new Date(1e3*(null===n||void 0===n?void 0:n.date)).toDateString()}),Object(v.jsx)("a",{href:a?"https://etherscan.io/tx/".concat(null===n||void 0===n?void 0:n.id):"https://bscscan.com/tx/".concat(null===n||void 0===n?void 0:n.id),target:"_blank",rel:"noreferrer nofollow",style:{flex:1},children:Object(v.jsx)("p",{style:{textAlign:"right"},children:null===n||void 0===n?void 0:n.description})})]})]})]})})})};t.a=Object(p.b)((function(e){return{isEthereum:e.auth.isEthereum}}))((function(e){var t=e.isOpen,n=e.handleClose,d=e.title,b=e.reqBody,p=e.refetchInterval,g=e.isEthereum,y=Object(c.useState)(null),w=Object(i.a)(y,2),A=w[0],N=w[1],k=s.a.useMemo((function(){return"News & Updates"===d?"".concat("https://api.validefi.io","/news/"):"".concat("https://api.validefi.io","/").concat(g?"ethTransactionsAll/":"bscTransactionsAll/")}),[d,g]),E=Object(u.a)({url:k,method:"News & Updates"===d?"GET":"POST",data:"News & Updates"===d?void 0:b,timeout:2e4}),I=Object(i.a)(E,2),C=I[0],T=C.data,Q=C.loading,S=C.error,B=I[1],D=l.default.div(a||(a=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 1.6rem 0 1.6rem;\n  "])));return Object(c.useEffect)((function(){var e=setInterval((function(){B()}),p);return function(){clearInterval(e)}}),[B,p]),Object(c.useEffect)((function(){N("News & Updates"===d?null===T||void 0===T?void 0:T.results:null===T||void 0===T?void 0:T.transactions)}),[T,d]),Object(v.jsx)(f.a,{isOpen:t,handleClose:n,width:o.isMobile?85:"News & Updates"===d?50:40,height:o.isMobile?60:85,title:d,children:Object(v.jsxs)(D,{className:"flex-column",children:[Q&&!S&&Object(v.jsx)(m.a,{}),S&&Object(v.jsx)("p",{children:"There seems to be some problem while fetching the data. Please try again."}),Object(v.jsx)(h.a,{className:"todo-list w-100",children:!Q&&!S&&Object(v.jsx)(v.Fragment,{children:(null===A||void 0===A?void 0:A.length)>0?null===A||void 0===A?void 0:A.map((function(e,t){return Object(v.jsx)(j.a,{timeout:500,classNames:"item",children:"News & Updates"===d?Object(v.jsx)(x,{item:e}):Object(v.jsx)(O,{item:e})},t)})):Object(v.jsx)("p",{children:"News & Updates"===d?"No data to display":"You don't have any transactions"})})})]})})}))},174:function(e,t,n){"use strict";t.a=n.p+"static/media/sidewaysLogo.6bbab29b.png"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(2),r=n.n(a),i=n(42),c=n(57),s=n.n(c),o=n(13),l=n(59),d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:o.b,wallet:e.wallet||null}),t.next=3,s.a.post(l.a+"/api/wallet/monitor",e).then((function(e){var t;200===e.status&&n({type:o.c,message:(null===(t=e.data)||void 0===t?void 0:t.mssg)||"Wallet monitored successfully."})})).catch((function(e){var t;n({type:o.a,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response)||"Something went wrong. Please try again"})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return{type:o.g,balance:e}}},205:function(e,t,n){"use strict";var a=n(52),r=n(0),i=n(193),c=n.n(i),s=n(174),o=n(4);t.a=function(e){var t=e.type,n=void 0===t?"area":t,i=e.title,l=e.series,d=e.height,u=void 0===d?350:d,h=e.colors,j=e.tooltipFormat,b=e.Xcategories,f=Object(r.useState)({chart:{height:u,toolbar:{show:!0},sparkline:{enabled:!0}},dataLabels:{enabled:!0},stroke:{curve:"smooth"},colors:h,xaxis:{type:"datetime",categories:b,labels:{show:!0,style:{colors:"rgba(94, 96, 110, .5)"}}},yaxis:{color:"#000000",axisBorder:{color:"#000000"},crosshairs:{show:!0,position:"back",stroke:{color:"#000000"}}},tooltip:{x:{format:j}},grid:{show:!0,borderColor:"rgba(94, 96, 110, .5)",strokeDashArray:4},annotations:{position:"front",images:[{path:s.a,width:120,height:120,x:530,y:u-80,appendTo:".apexcharts-annotations"}]}}),p=Object(a.a)(f,1)[0];return Object(o.jsx)("div",{className:"col-sm-6 col-xl-8",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:i}),Object(o.jsx)("div",{id:"apexchart",children:Object(o.jsx)(c.a,{options:p,series:l,type:n,height:350})})]})})})}},230:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(42),c=n(52),s=n(0),o=n(27),l=n(161),d=n(56),u=n(172),h=n(803),j=n(801),b=n(54),f=n(4),p=function(e){var t=e.data,n=Object(b.b)().currentTheme;return Object(f.jsx)(h.a,{className:"todo-list",children:t.length>0?t.map((function(e,t){var a,r;return Object(f.jsx)(j.a,{timeout:500,classNames:"item",children:Object(f.jsx)("div",{className:"transactions-list box-shadow",children:Object(f.jsx)("div",{className:"tr-item",children:Object(f.jsxs)("div",{className:"tr-company-name",children:[Object(f.jsx)("div",{className:"tr-icon tr-card-icon text-primary tr-card-bg-primary",children:Object(f.jsx)("img",{alt:"Favicon",src:"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(null===e||void 0===e||null===(a=e.source)||void 0===a?void 0:a.domain),width:"25px"})}),Object(f.jsxs)("a",{className:"tr-text",href:"".concat(null===e||void 0===e?void 0:e.url),target:"_blank",rel:"noreferrer nofollow",children:[Object(f.jsx)("h6",{style:{fontWeight:"400"},className:"dark"===n?"text-white":"text-dark",children:null===e||void 0===e?void 0:e.title}),Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsx)("p",{className:"text-muted",children:new Date(null===e||void 0===e?void 0:e.published_at).toDateString().split(" ").slice(1).join(" ")}),Object(f.jsx)("p",{style:{color:"dark"===n?"#fff":"#1a1a1a",fontWeight:600},children:null===e||void 0===e||null===(r=e.source)||void 0===r?void 0:r.domain})]})]})]})})})},t)})):Object(f.jsx)("p",{children:"No data to display"})})},m=n(154),v=n(31),x=n(173);t.a=Object(o.b)((function(e){return{isEthereum:e.auth.isEthereum,isDataLoading:e.auth.isLoading}}),(function(e){return{toggleLoading:function(t){e(Object(d.b)(t))}}}))((function(e){var t=e.title,n=e.url,a=e.refetchInterval,o=e.isGetRequest,d=e.reqBody,h=e.isEthereum,j=e.toggleLoading,b=e.isDataLoading,O=Object(v.d)().account,g=Object(s.useState)(!1),y=Object(c.a)(g,2),w=y[0],A=y[1],N=Object(s.useState)([]),k=Object(c.a)(N,2),E=k[0],I=k[1],C=Object(l.a)({url:n,method:o?"GET":"POST",data:o?void 0:d,timeout:2e4}),T=Object(c.a)(C,3),Q=T[0],S=Q.data,B=Q.loading,D=Q.error,P=T[1],L=T[2];Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return e.prev=2,I([]),e.next=6,P();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Please try again");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O,L,h,P]),Object(s.useEffect)((function(){var e=setInterval((function(){P()}),a);return function(){clearInterval(e)}}),[P,a]),Object(s.useEffect)((function(){S&&(I(S),j(!1))}),[S,j]);var R=Object(s.useMemo)((function(){return!B&&!D&&!b&&S}),[B,D,b,S]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"col-sm-6 col-xl-4 ",children:Object(f.jsx)("div",{className:"card stat-widget ",children:Object(f.jsxs)("div",{className:"card-body",style:{height:"573px",padding:"News & Updates"===t?"20px":"30px"},children:[Object(f.jsxs)("div",{className:"card-body-header",style:{position:"sticky",top:0,height:"10%",padding:"News & Updates"===t?"10px":"0px"},children:[Object(f.jsx)("h5",{className:"card-title",children:t}),E&&"Current Holdings"!==t&&Object(f.jsx)("p",{className:"card-title-view",onClick:function(){return A(!0)},children:"View All"})]}),(B||b)&&!D&&Object(f.jsx)(m.a,{}),D&&Object(f.jsx)("p",{children:"There seems to be some problem while fetching the data. Please try again."}),Object(f.jsxs)("div",{style:{height:"90%",overflow:"hidden scroll"},children:[R&&E.transactions&&"Your Transactions"===t&&Object(f.jsx)(u.a,{data:null===E||void 0===E?void 0:E.transactions}),R&&E.results&&"News & Updates"===t&&Object(f.jsx)(p,{data:E.results})]})]})})}),w&&Object(f.jsx)(x.a,{isOpen:w,handleClose:function(){return A(!1)},title:t,reqBody:d,refetchInterval:a})]})}))},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=[{pair:"BTC/USD",change:"12",isPositive:!0},{pair:"ETH/USD",change:"5",isPositive:!0},{pair:"ADA/USD",change:"1.5",isPositive:!1},{pair:"FTX/USD",change:"8",isPositive:!0},{pair:"BNB/USD",change:"2.3",isPositive:!1},{pair:"XRP/USD",change:"2.3",isPositive:!1},{pair:"SOL/USD",change:"2.3",isPositive:!0},{pair:"DOGE/USD",change:"2.3",isPositive:!1}],r=[{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100},{date:"12/11/2020",sender:"Binance",receiver:"Rahul",amount:100}]},269:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(42),c=n(52),s=n(31),o=n(161),l=n(0),d=n(270),u=n(27),h=n(56),j=n(159),b=n(232),f=n(4);t.a=Object(u.b)((function(e){return{isEthereum:e.auth.isEthereum,isDataLoading:e.auth.isLoading}}),(function(e){return{toggleLoading:function(t){e(Object(h.b)(t))}}}))((function(e){var t=e.title,n=e.isSearch,a=e.url,u=e.refetchInterval,h=e.isGetRequest,p=e.reqBody,m=e.isEthereum,v=e.toggleLoading,x=e.isDataLoading,O=Object(l.useState)([]),g=Object(c.a)(O,2),y=(g[0],g[1]),w=Object(s.d)().account,A=Object(o.a)({url:a,method:h?"GET":"POST",data:h?void 0:p,timeout:2e4}),N=Object(c.a)(A,3),k=N[0],E=k.data,I=k.loading,C=k.error,T=N[1],Q=N[2];Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return e.prev=2,y([]),e.next=6,T();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Please try again");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w,Q,m,T]),Object(l.useEffect)((function(){var e=setInterval((function(){T()}),u);return function(){clearInterval(e)}}),[T,u]),Object(l.useEffect)((function(){E&&(y(E),v(!1))}),[E,v]);Object(l.useMemo)((function(){return!I&&!C&&!x&&E}),[I,C,x,E]);return Object(f.jsx)("div",{className:"col-md-12 col-lg-8",children:Object(f.jsx)("div",{className:"card table-widget",style:{height:"95%"},children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("div",{className:"d-flex",style:{alignItems:"center"},children:[Object(f.jsx)("h5",{className:"card-title",style:{flex:1},children:t}),n&&Object(f.jsx)(j.a,{style:{width:"30%",height:"100%",marginRight:"15px",marginTop:"-15px"},label:"Search",handleSubmit:function(e){},icon:Object(f.jsx)(d.a,{})})]}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Date"}),Object(f.jsx)("th",{scope:"col",children:"Sender"}),Object(f.jsx)("th",{scope:"col",children:"Receiver"}),Object(f.jsx)("th",{scope:"col",children:"Amount"})]})}),Object(f.jsx)("tbody",{children:b.a.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date}),Object(f.jsx)("th",{scope:"row",children:e.sender}),Object(f.jsx)("td",{children:e.receiver}),Object(f.jsx)("td",{children:Object(f.jsx)("span",{className:"badge bg-info",children:e.amount})})]},t)}))})]})})]})})})}))},270:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(34),c=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,l=o(e,["color","size"]);return r.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Search",t.a=l},337:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(42),c=n(52),s=n(0),o=n.n(s),l=n(27),d=n(161),u=n(56),h=n(172),j=n(154),b=n(31),f=n(173),p=n(34),m=n.n(p);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=Object(s.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=x(e,["color","size"]);return o.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));O.propTypes={color:m.a.string,size:m.a.oneOfType([m.a.string,m.a.number])},O.displayName="Plus";var g=O,y=n(4);t.a=Object(l.b)((function(e){return{isEthereum:e.auth.isEthereum,isDataLoading:e.auth.isLoading,monitored_wallet:e.wallet.monitored_wallet}}),(function(e){return{toggleLoading:function(t){e(Object(u.b)(t))}}}))((function(e){var t=e.title,n=e.url,a=e.refetchInterval,o=e.reqBody,l=e.isEthereum,u=e.toggleLoading,p=e.isDataLoading,m=e.monitored_wallet,v=e.toggleModal,x=Object(b.d)().account,O=Object(s.useState)(!1),w=Object(c.a)(O,2),A=w[0],N=w[1],k=Object(s.useState)([]),E=Object(c.a)(k,2),I=E[0],C=E[1],T=Object(d.a)({url:n,method:"POST",data:o,timeout:o.address?2e4:10}),Q=Object(c.a)(T,3),S=Q[0],B=S.data,D=S.loading,P=S.error,L=Q[1],R=Q[2];Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return e.prev=2,C([]),e.next=6,L();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Please try again");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x,R,l,L]),Object(s.useEffect)((function(){var e=setInterval((function(){L()}),a);return function(){clearInterval(e)}}),[L,a]),Object(s.useEffect)((function(){B&&(C(B),u(!1))}),[B,u]);var U=Object(s.useMemo)((function(){return!D&&!P&&!p&&B}),[D,P,p,B]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"col-sm-6 col-xl-4 ",children:Object(y.jsx)("div",{className:"card stat-widget ",children:Object(y.jsxs)("div",{className:"card-body",style:{height:"573px",padding:"30px"},children:[Object(y.jsxs)("div",{className:"card-body-header",style:{position:"sticky",top:0,height:"10%",padding:"0px"},children:[Object(y.jsx)("h5",{className:"card-title",children:t}),o.address&&I?Object(y.jsx)("p",{className:"card-title-view d-flex align-items-center",onClick:function(){return N(!0)},children:"View All"}):Object(y.jsxs)("p",{className:"card-title-view d-flex align-items-center",onClick:v,children:["Add ",Object(y.jsx)(g,{size:15})]})]}),(D||p)&&!P&&Object(y.jsx)(j.a,{}),!o.address&&Object(y.jsx)("p",{children:"You can monitor a specific wallet from here."}),P&&o.address&&Object(y.jsx)("p",{children:"There seems to be some problem while fetching the data. Please try again."}),Object(y.jsx)("div",{style:{height:"90%",overflow:"hidden scroll"},children:U&&m&&I.transactions&&Object(y.jsx)(h.a,{data:null===I||void 0===I?void 0:I.transactions})})]})})}),A&&Object(y.jsx)(f.a,{isOpen:A,handleClose:function(){return N(!1)},title:t,reqBody:o,refetchInterval:a})]})}))},486:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.default=function(e){var t,n,r,s,o=e.style,l=void 0===o?{}:o,d=e.className,u=void 0===d?"":d,h=e.play,j=void 0===h||h,b=e.pauseOnHover,f=void 0!==b&&b,p=e.pauseOnClick,m=void 0!==p&&p,v=e.direction,x=void 0===v?"left":v,O=e.speed,g=void 0===O?20:O,y=e.delay,w=void 0===y?0:y,A=e.gradient,N=void 0===A||A,k=e.gradientColor,E=void 0===k?[255,255,255]:k,I=e.gradientWidth,C=void 0===I?200:I,T=e.children,Q=e.loop,S=void 0===Q?0:Q,B=a.useState(0),D=B[0],P=B[1],L=a.useState(0),R=L[0],U=L[1],M=a.useState(0),z=M[0],F=M[1],H=a.useState(!1),G=H[0],W=H[1],J=a.useRef(null),V=a.useRef(null),q=function(){V.current&&J.current&&(P(J.current.getBoundingClientRect().width),U(V.current.getBoundingClientRect().width)),F(R<D?D/g:R/g)};a.useEffect((function(){return q(),window.addEventListener("resize",q),function(){window.removeEventListener("resize",q)}})),a.useEffect((function(){W(!0)}),[]);var K="rgba("+E[0]+", "+E[1]+", "+E[2];return i.default.createElement(a.Fragment,null,G?i.default.createElement("div",{ref:J,style:c(c({},l),(t={},t["--pause-on-hover"]=f?"paused":"running",t["--pause-on-click"]=m?"paused":"running",t)),className:u+" marquee-container"},N&&i.default.createElement("div",{style:(n={},n["--gradient-color"]=K+", 1), "+K+", 0)",n["--gradient-width"]="number"===typeof C?C+"px":C,n),className:"overlay"}),i.default.createElement("div",{ref:V,style:(r={},r["--play"]=j?"running":"paused",r["--direction"]="left"===x?"normal":"reverse",r["--duration"]=z+"s",r["--delay"]=w+"s",r["--iteration-count"]=S?""+S:"infinite",r),className:"marquee"},T),i.default.createElement("div",{style:(s={},s["--play"]=j?"running":"paused",s["--direction"]="left"===x?"normal":"reverse",s["--duration"]=z+"s",s["--delay"]=w+"s",s["--iteration-count"]=S?""+S:"infinite",s),className:"marquee"},T)):null)}},806:function(e,t,n){"use strict";n.r(t);var a,r=n(151),i=n(52),c=n(0),s=n(27),o=n(148),l=n(167),d=n(795),u=n(31),h=n(486),j=n.n(h),b=n(54),f=n(337),p=n(230),m=n(269),v=n(192),x=n(162),O=n(58),g=n(159),y=n(153),w=n(232),A=n(4),N=function(){var e=Object(b.b)().currentTheme;return Object(A.jsx)(A.Fragment,{children:w.b.map((function(t){var n=t.pair,a=t.change,r=t.isPositive;return Object(A.jsxs)("div",{className:"d-flex mx-2 px-3 py-1 align-items-center text-center",style:{backgroundColor:"dark"===e?"#253347":"#fff",borderRadius:"8px"},children:[Object(A.jsx)("p",{className:"mb-0",style:{marginRight:"8px",fontSize:"1.1rem",fontWeight:"500"},children:n}),Object(A.jsxs)("p",{className:"mb-0 ".concat(r?"text-success":"text-danger"),children:[r?"+":"-",a,"%"]})]})}))})},k=n(205);t.default=Object(s.b)((function(e){return{isEthereum:e.auth.isEthereum,monitored_wallet:e.wallet.monitored_wallet}}),(function(e){return{setMonitoredWallet:function(t){e(Object(v.a)(t))}}}))((function(e){var t=e.setMonitoredWallet,n=e.isEthereum,s=e.monitored_wallet,h=Object(c.useState)(!1),v=Object(i.a)(h,2),w=v[0],E=v[1],I=Object(u.d)().account,C=(Object(b.b)().currentTheme,o.default.div(a||(a=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 1.6rem 0 1.6rem;\n  "])))),T=Object(c.useState)([{name:"Transaction Value",data:[70,79,42,51,28,40,37]},{name:"DeFi Market Capitalization",data:[41,52,14,32,45,32,21]},{name:"BTC Dominance",data:[12,25,41,23,54,23,12]},{name:"ETH Dominance",data:[51,72,54,38,45,26,20]}]),Q=Object(i.a)(T,1)[0];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"page-content",children:Object(A.jsxs)("div",{className:"main-wrapper",children:[Object(A.jsx)("div",{className:"alert alert-danger",role:"alert",style:{display:"grid",placeItems:"center",height:"6rem",fontSize:"22px"},children:"Advertisement"}),Object(A.jsxs)("div",{className:"row",style:{flexDirection:"row"},children:[Object(A.jsx)("div",{className:"mx-2 px-3 py-1 align-items-center text-center badge bg-info",style:{borderRadius:"8px",flex:.1},children:Object(A.jsx)("p",{className:"mb-0",style:{fontSize:"1.1rem",fontWeight:"500"},children:"Hot Pairs"})}),Object(A.jsx)(j.a,{pauseOnHover:!0,pauseOnClick:!0,gradient:!1,style:{flex:1},children:Object(A.jsx)(N,{})})]}),Object(A.jsxs)("div",{className:"row mt-4",children:[Object(A.jsx)(f.a,{toggleModal:function(){return E(!0)},title:"Monitored Wallets",url:"".concat("https://api.validefi.io","/").concat(n?"ethTransactionsLatest/":"bscTransactionsLatest/"),refetchInterval:3e4,reqBody:{address:s}}),Object(A.jsx)(m.a,{title:"Pair/Pool Explorer",isSearch:!0,url:"".concat("https://api.validefi.io","/").concat(n?"ethTransactionsLatest/":"bscTransactionsLatest/"),refetchInterval:3e4,reqBody:{address:s}})]}),Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)(k.a,{title:"Market Analysis",series:Q,height:350,tooltipFormat:"dd/MM/yy HH:mm",colors:["#90e0db","#b3baff","#FEA889","#8BCACA"],Xcategories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]}),Object(A.jsx)(p.a,{title:"Live Token Holders",url:"".concat("https://api.validefi.io","/").concat(n?"ethTransactionsLatest/":"bscTransactionsLatest/"),refetchInterval:3e4,reqBody:{address:I}})]}),Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)(p.a,{title:"Your Transactions",url:"".concat("https://api.validefi.io","/").concat(n?"ethTransactionsLatest/":"bscTransactionsLatest/"),refetchInterval:3e4,reqBody:{address:I}}),Object(A.jsx)(m.a,{title:"Whale Transactions"})]})]})}),Object(A.jsx)(x.a,{isOpen:w,handleClose:function(){return E(!1)},width:l.isMobile?85:30,height:l.isMobile?20:15,title:"Monitor Wallet",children:Object(A.jsx)(C,{children:Object(A.jsx)(g.a,{autoFocus:!0,handleSubmit:function(e){Object(y.c)(e)?(t({wallet:e}),E(!1)):Object(O.a)("Please enter a valid wallet address","error")},icon:Object(A.jsx)(d.a,{})})})})]})}))}}]);