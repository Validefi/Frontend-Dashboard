(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[20],{154:function(e,t,r){"use strict";r(0);var n=r(4);t.a=function(e){var t=e.color;return Object(n.jsx)("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,display:"grid",placeItems:"center"},children:Object(n.jsx)("div",{className:"spinner-border ".concat(t||"text-primary"),role:"status",children:Object(n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},159:function(e,t,r){"use strict";var n=r(7),a=r(52),o=r(0),i=r(54),c=r(4);t.a=function(e){var t=e.label,r=void 0===t?"Enter wallet address":t,l=e.handleSubmit,s=e.icon,u=e.autoFocus,d=void 0!==u&&u,b=e.style,f=Object(i.b)().currentTheme,p=Object(o.useState)(""),j=Object(a.a)(p,2),h=j[0],v=j[1];return Object(c.jsxs)("div",{className:"input-group flex-nowrap",style:Object(n.a)({},b),children:[Object(c.jsx)("input",{type:"text",className:"form-control accordion-flush",placeholder:r,"aria-label":r,value:h,onChange:function(e){return v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&l(h)},autoFocus:d}),Object(c.jsx)("button",{className:"input-group-text nav-link search-icon","aria-expanded":"false",style:{backgroundColor:"dark"===f?"#2B3B52":"#fff"},onClick:function(){return l(h)},children:s})]})}},270:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(34),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,s=l(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),a.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Search",t.a=s},799:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(52),o=r(0),i=r.n(o),c=r(34),l=r.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=u(e,["color","size"]);return i.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.a.createElement("polyline",{points:"12 19 5 12 12 5"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="ArrowLeft";var b=d,f=r(270);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=j(e,["color","size"]);return i.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));h.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},h.displayName="Moon";var v=h;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=O(e,["color","size"]);return i.a.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),i.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),i.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),i.a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),i.a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),i.a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),i.a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),i.a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),i.a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));m.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},m.displayName="Sun";var g=m,x=r(27),w=r(13),k=r(56),E=r(463),S=r.p+"static/media/logo1.4228ee83.svg",N=r(54),C=r(154),z=r(159),P=r(31),L=r(4);t.default=Object(x.b)((function(e){return{isSidebarVisible:e.settings.isSidebarVisible,isEthereum:e.auth.isEthereum}}),(function(e){return{toggleSidebar:function(t){e(function(e){return{type:w.j,isSidebarVisible:e}}(t))},toggleNetwork:function(t){e(Object(k.c)(t))}}}))((function(e){var t=e.isSidebarVisible,r=e.toggleSidebar,i=e.isEthereum,c=e.toggleNetwork,l=Object(N.b)(),s=l.switcher,u=l.themes,d=l.currentTheme,p=l.status,j=Object(o.useState)("dark"===d),h=Object(a.a)(j,2),y=h[0],O=h[1],m=Object(P.d)().account;if("loading"===p)return Object(L.jsx)(C.a,{});var x={menu:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{backgroundColor:y?"#253345":"#fff"})},option:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{color:y?t.isSelected?"rgba(225, 235, 245, 0.87)":"rgba(225, 235, 245, 0.4)":t.isSelected?"white":"#5b5b5b",backgroundColor:y?t.isSelected?"#212d3d":"#253345":t.isSelected?"#7888fc":"#fff"})}},w=[{value:"ETH",label:"Ethereum Mainnet"},{value:"BSC",label:"Binance Smart Chain"}];return Object(L.jsx)("div",{className:"page-header",children:Object(L.jsxs)("nav",{className:"navbar navbar-expand-lg d-flex justify-content-between",children:[Object(L.jsx)("div",{id:"navbarNav",children:Object(L.jsxs)("ul",{className:"navbar-nav",id:"leftNav",children:[Object(L.jsx)("li",{className:"nav-item nav-link",onClick:function(){r(!t)},id:"sidebar-toggle",children:Object(L.jsx)(b,{})}),Object(L.jsx)("div",{className:"logo align-items-center",children:Object(L.jsx)("img",{src:S,alt:"MetaMask",height:"55px",width:"auto"})})]})}),Object(L.jsx)("div",{id:"headerNav",children:Object(L.jsxs)("ul",{className:"navbar-nav w-100 align-items-center",children:[Object(L.jsx)("li",{className:"nav-item dropdown m-r-xs dashboard-search",style:{flex:1},children:Object(L.jsx)("div",{className:"d-flex justify-content-center",children:Object(L.jsx)(z.a,{handleSubmit:function(e){return console.log(e)},icon:Object(L.jsx)(f.a,{})})})}),Object(L.jsx)("li",{className:"nav-item dropdown dashboard-dropdown",style:{width:"30%"},children:Object(L.jsx)(E.a,{styles:x,defaultValue:w[i?0:1],isSearchable:!1,onChange:function(e){return function(e){"ETH"===e.value?c(!0):c(!1)}(e)},options:w})}),Object(L.jsx)("li",{className:"nav-item dropdown dashboard-dropdown",style:{width:"20%",marginLeft:"8px"},children:Object(L.jsx)("div",{className:"d-flex justify-content-center",children:Object(L.jsx)("span",{className:"form-control form-text",style:{overflow:"hidden",whiteSpace:"nowrap",textAlign:"center"},children:"".concat(null===m||void 0===m?void 0:m.slice(0,8),"...").concat(null===m||void 0===m?void 0:m.slice(-3))})})}),Object(L.jsx)("li",{style:{marginLeft:"12px",cursor:"pointer"},onClick:function(){return function(e){s({theme:e?u.light:u.dark}),O(!e)}(y)},children:y?Object(L.jsx)(v,{}):Object(L.jsx)(g,{})})]})})]})})}))}}]);