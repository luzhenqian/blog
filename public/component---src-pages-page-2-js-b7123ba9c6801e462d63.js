(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(239),i=a(205),l=a(226);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(133),a(295)),i=a(235),l=a(299),c=a(300),s=a(297),u=a(301),m=a(305),p=a(298),d=a(306),h=a(303),g=a(214),E=a.n(g),f=a(215),b=a.n(f),w=a(213),v=a.n(w),y=a(210),k=a.n(y),C=a(212),M=a.n(C),x=a(216),N=a.n(x),O=Object(o.a)(function(e){var t,a,n,r,o;return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"block"},t),search:(a={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(i.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(i.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},a[e.breakpoints.up("sm")]={marginLeft:e.spacing(3),width:"auto"},a),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(n={padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},n[e.breakpoints.up("md")]={width:200},n),sectionDesktop:(r={display:"none"},r[e.breakpoints.up("md")]={display:"flex"},r),sectionMobile:(o={display:"flex"},o[e.breakpoints.up("md")]={display:"none"},o)}});function R(){var e=O(),t=r.a.useState(null),a=t[0],n=t[1],o=r.a.useState(null),i=o[0],g=o[1],f=Boolean(a),w=Boolean(i);function y(e){n(e.currentTarget)}function C(){g(null)}function x(){n(null),C()}var R="primary-search-account-menu",j=r.a.createElement(h.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:R,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:x},r.a.createElement(d.a,{onClick:x},"Profile"),r.a.createElement(d.a,{onClick:x},"My account")),z=r.a.createElement(h.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:w,onClose:C},r.a.createElement(d.a,null,r.a.createElement(s.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(p.a,{badgeContent:4,color:"secondary"},r.a.createElement(k.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(d.a,null,r.a.createElement(s.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(p.a,{badgeContent:11,color:"secondary"},r.a.createElement(M.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(d.a,{onClick:y},r.a.createElement(s.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(v.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(l.a,{position:"static"},r.a.createElement(c.a,null,r.a.createElement(s.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(E.a,null)),r.a.createElement(u.a,{className:e.title,variant:"h6",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(b.a,null)),r.a.createElement(m.a,{placeholder:"Search…",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(s.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(p.a,{badgeContent:4,color:"secondary"},r.a.createElement(k.a,null))),r.a.createElement(s.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(p.a,{badgeContent:17,color:"secondary"},r.a.createElement(M.a,null))),r.a.createElement(s.a,{edge:"end","aria-label":"account of current user","aria-controls":R,"aria-haspopup":"true",onClick:y,color:"inherit"},r.a.createElement(v.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(s.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){g(e.currentTarget)},color:"inherit"},r.a.createElement(N.a,null))))),z,j)}a(193),t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with luzhenqian")))}},226:function(e,t,a){"use strict";var n=a(227),r=a(0),o=a.n(r),i=a(237),l=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Luzhenqian",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@Luzhenqian"}}}}},228:function(e,t,a){var n;e.exports=(n=a(240))&&n.default||n},239:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),i=a.n(o);a.d(t,"a",function(){return i.a});a(228),a(9).default.enqueue,r.a.createContext({})},240:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b7123ba9c6801e462d63.js.map