(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[30],{986:function(t,e,c){"use strict";c.r(e);var n=c(6),i=c(60),s=c(70),a=c(0),u=c.n(a),o=c(28),h=c(67),d=c(40),b=c(14),j=c(5);e.default=Object(o.b)((function(t){return{isAuthenticated:t.auth.isAuthenticated}}))((function(t){var e=Object(d.d)(),c=e.active,o=e.account,l=t.children,r=Object(s.a)(t,["children"]),f=Object(a.useState)("loading"),O=Object(i.a)(f,2),p=O[0],v=O[1],g=Object(b.f)();return Object(a.useLayoutEffect)((function(){void 0!==typeof window&&(c&&o&&r.isAuthenticated?v("success"):g.push("/login"))}),[o,c,g,r.isAuthenticated]),Object(j.jsxs)(j.Fragment,{children:["success"===p&&u.a.cloneElement(l,Object(n.a)({},r)),"loading"===p&&Object(j.jsx)("div",{className:"d-flex p-4 justify-content-center align-items-center vw-100 vh-100 position-absolute top-0 left-0",children:Object(j.jsx)(h.a,{})})]})}))}}]);