(this["webpackJsonpeth-auth"]=this["webpackJsonpeth-auth"]||[]).push([[17],{236:function(e,t,a){"use strict";var r=a(57),i=a(0),n=a(237),o=a.n(n),l=a(6);t.a=function(e){var t=e.series,a=e.color,n=e.width,s=void 0===n?150:n,c=e.height,b=void 0===c?40:c,u=e.strokeWidth,d=void 0===u?5:u,p=Object(i.useState)({chart:{type:"line",width:s,height:b,sparkline:{enabled:!0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:d,dashArray:0},colors:[a],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}),h=Object(r.a)(p,1)[0];return Object(l.jsx)(o.a,{options:h,series:t,width:s,height:b})}},478:function(e,t,a){},804:function(e,t,a){"use strict";a.r(t);var r,i=a(57),n=a(0),o=(a(478),a(141)),l=a(479),s=a.n(l),c=a(138),b=a(60),u=a(6),d=c.default.input(r||(r=Object(o.a)(["\n  height: 32px;\n  width: 200px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),p=function(e){var t=e.filterText,a=e.onFilter,r=e.filterHeading;return Object(u.jsx)(d,{id:"search",type:"text",className:"form-control",placeholder:r,"aria-label":"Search Input",value:t,onChange:a})},h=function(e){var t=e.title,a=e.columns,r=e.data,o=e.filterHeading,c=e.customStyles,d=Object(b.b)().currentTheme,h=Object(n.useState)(""),m=Object(i.a)(h,2),f=m[0],T=m[1],j=null===r||void 0===r?void 0:r.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())||e.symbol.toLowerCase().includes(f.toLowerCase())})),g=Object(n.useMemo)((function(){return Object(u.jsx)(p,{filterHeading:o,onFilter:function(e){return T(e.target.value)},filterText:f})}),[f,o]);return Object(l.createTheme)("dark",{text:{primary:"rgba(225, 235, 245, 0.87)",secondary:"#7888fc"},background:{default:"#253345"},button:{default:"rgba(225, 235, 245, 0.87)",focus:"rgba(225, 235, 245, 0.5)",hover:"rgba(225, 235, 245, 0.5)",disabled:"rgba(225, 235, 245, 0.2)"}}),Object(l.createTheme)("light",{text:{primary:"#5b5b5b",secondary:"#7888fc"},background:{default:"#fff"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"}}),Object(u.jsx)(s.a,{title:t,columns:a,data:j,theme:"dark"===d?"dark":"light",pagination:!0,paginationResetDefaultPage:0===f.length,subHeader:!0,subHeaderComponent:g,persistTableHead:!0,customStyles:c})},m=a(236);t.default=function(){var e=Object(n.useState)([{data:[25,66,41,89,63,25,44,12,36,9,54]}]),t=Object(i.a)(e,1)[0],a=[{name:"Rank",selector:"rank",sortable:!0},{name:"Symbol",selector:"symbol",sortable:!0},{name:"Name",selector:"name",sortable:!0},{name:"Price",selector:"price",sortable:!0},{name:"Mk. Cap",selector:"cap",sortable:!0},{name:"Pairs",selector:"pairs",sortable:!0},{name:"Graph",cell:function(e){return Object(u.jsx)(m.a,{series:t,color:"#f00",width:100,height:20,strokeWidth:3})},ignoreRowClick:!0,allowOverflow:!0,button:!0}];return Object(u.jsx)("div",{class:"page-content",children:Object(u.jsx)("div",{class:"main-wrapper",children:Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col",children:Object(u.jsx)("div",{class:"card",children:Object(u.jsx)("div",{class:"card-body",children:Object(u.jsx)(h,{title:"Coin List",columns:a,data:[{rank:1,symbol:"BTC",name:"Bitcoin",price:"$35000",cap:"$1 Trillion",pairs:"BTC/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"},{rank:2,symbol:"ETH",name:"Ethereum",price:"$2000",cap:"$500 Million",pairs:"ETH/USDT"}],filterHeading:"Find Coin",customStyles:{title:{style:{fontColor:"#f00",fontWeight:"900"}},headCells:{style:{fontSize:"15px",fontWeight:"500"}},cells:{style:{fontSize:"13px"}}}})})})})})})})}}}]);