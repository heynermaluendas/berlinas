"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3733],{70789:function(b,i,n){n.r(i);var l=n(45629),e=n(35312),h=n(55102),s=n(85893),u=[{key:"articles",tab:"Articulos"},{key:"projects",tab:"Proyectos"},{key:"applications",tab:"Aplicaciones"}],d=function(){var r=(0,e.useLocation)(),a=(0,e.useMatch)(r.pathname),p=function(t){var c=(a==null?void 0:a.pathname)==="/"?"":a==null?void 0:a.pathname.substring(0,a.pathname.lastIndexOf("/"));switch(t){case"articles":e.history.push("".concat(c,"/articles"));break;case"applications":e.history.push("".concat(c,"/applications"));break;case"projects":e.history.push("".concat(c,"/projects"));break;default:break}},v=function(t){console.log(t)},_=function(){var t=r.pathname.substring(r.pathname.lastIndexOf("/")+1);return t&&t!=="/"?t:"articles"};return(0,s.jsx)(l._z,{content:(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(h.Z.Search,{placeholder:"Por favor escribe",enterButton:"Buscar",size:"large",onSearch:v,style:{maxWidth:522,width:"100%"}})}),tabList:u,tabActiveKey:_(),onTabChange:p,children:(0,s.jsx)(e.Outlet,{})})};i.default=d}}]);
