(this["webpackJsonp@fobos/web"]=this["webpackJsonp@fobos/web"]||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),c=t(22),i=t.n(c),a=t(6),s=t(4),l=t(1),d=Object(r.createContext)({}),b=function(n){var e=n.children,t=Object(r.useState)((function(){return Number(getComputedStyle(document.querySelector("html")).fontSize.slice(0,-2)||16)})),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(l.jsx)(d.Provider,{value:{rootFontSize:c,setRootFontSize:i},children:e})},u=t(2);var h,f,j,g,m,O,p,x,v,k,y,w,C,S,z,H,V,D,E,L,M,F,R,T,B,W=t(3),N=u.d.main(h||(h=Object(W.a)(["\n  padding-top: ","px;\n\n  background: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.paddingTop}),(function(n){return n.theme.colors.gray[800]})),P=Object(u.b)(f||(f=Object(W.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: background 400ms;\n  }\n\n  html, body {\n    width: 100%;\n    height: 100%;\n    \n    ","\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  [data-reset] {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    background: transparent;\n    display: grid;\n    place-items: center;\n  }\n\n  :focus {\n    outline: 0;\n  }\n"])),(function(n){var e=n.theme,t=e.colors,r=e.fonts;return Object(u.c)(j||(j=Object(W.a)(["\n      font-family: ",";\n      color: ",";\n      background: ","\n    "])),r.Rubik,t.gray[50],t.gray[600])})),U=t(9),I=t(12),Z={title:"default",fonts:{DM:"'DM Sans', sans-serif",Rubik:"'Rubik', sans-serif"},sizes:{sm:"3.125rem"},colors:{accent:{100:"#FD6868",200:"#FD4D4D",300:""},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}},A="#FD4D4D",J=Object(U.a)(Object(U.a)({},Z),{},{title:"dark",fonts:Object(U.a)({},Z.fonts),sizes:Object(U.a)({},Z.sizes),colors:{accent:{100:Object(I.b)(.1,A),200:A,300:Object(I.a)(.1,A)},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}}),q=Object(U.a)(Object(U.a)({},Z),{},{title:"light",fonts:Object(U.a)({},Z.fonts),sizes:Object(U.a)({},Z.sizes),colors:{accent:{100:"#FD6868",200:"#FD4D4D",300:""},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}}),$={light:q,dark:J},_=Object(r.createContext)({}),G=function(n){var e=n.children,t=function(n,e){var t=Object(r.useState)((function(){return e})),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(c))}),[n,c]),[c,i]}("theme",J),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(l.jsx)(_.Provider,{value:{currentTheme:c,themes:"light",toggleTheme:function(n){i("light"===n.title?J:q)},getThemes:function(){return $}},children:Object(l.jsxs)(u.a,{theme:c,children:[e,Object(l.jsx)(P,{})]})})},K=function(n,e){var t=Object(r.useContext)(d).rootFontSize,o=Number(n.split("rem")[0]),c=Number(e.split("rem")[0]),i=270/t,a=(c-o)/(1920/t-i),s=-i*a+o;return"\n    clamp(".concat(o,"rem, ").concat(s,"rem + ").concat(100*a,"vw, ").concat(c,"rem)\n  ")},Q=function(){return Object(r.useContext)(_)},X=Object(u.e)(g||(g=Object(W.a)(["\n  from {\n    transform: rotate(0turn);\n  }\n\n  to {\n    transform: rotate(1turn);\n  }\n"]))),Y=u.d.button(m||(m=Object(W.a)(["\n  border: 0;\n  outline: 0;\n  background: none;\n  position: relative;\n\n  a {\n    position: relative;\n    \n    font-weight: 600;\n    font-size: ",";\n    color: ",";\n\n    border-radius: 5px;\n  }\n\n  ","\n\n  &:disabled {\n    a {\n      cursor: not-allowed;\n      opacity: 0.7;\n    }\n  }\n\n  ","\n\n  ","\n\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.fontSize}),(function(n){return n.theme.colors.gray[50]}),(function(n){return Object(u.c)(O||(O=Object(W.a)(["\n    a {\n      padding: "," ",";\n    }\n  "])),n.paddingBlockClamp,n.paddingHorizontalClamp)}),(function(n){return n.outlined?Object(u.c)(p||(p=Object(W.a)(["\n      a {  \n        padding calc("," - 2px) calc("," - 3px);\n\n        border: 2px solid ",";\n        box-shadow: 0px 2px 5px 3px black;\n\n        background-image: linear-gradient(to right, ",", ",");\n        background-size: 100% 0%;\n        background-repeat: no-repeat;\n        background-position: right;\n        \n        color: ",";\n\n        transition: all 200ms;\n        \n        ","\n          \n        ","\n      }\n    "])),n.paddingBlockClamp,n.paddingHorizontalClamp,n.backgroundColor,n.backgroundColor,n.backgroundColor,n.theme.colors.gray[800],!1===n.disabled&&Object(u.c)(x||(x=Object(W.a)(["\n          &:hover, &:focus {\n            color: ",";\n            background-size: 100% 100%;\n          }\n        "])),n.theme.colors.gray[50]),n.active&&Object(u.c)(v||(v=Object(W.a)(["\n          color: ",";\n          background-size: 100% 100%;\n        "])),n.theme.colors.gray[50])):Object(u.c)(k||(k=Object(W.a)(["\n      a {\n        border: none;\n        background: "," !important;\n\n        ","\n          \n        ","\n      }\n    "])),n.backgroundColor,!1===n.disabled&&Object(u.c)(y||(y=Object(W.a)(["\n          &:hover, &:focus {\n            background: "," !important;\n          }\n          "])),Object(I.b)(.2,n.backgroundColor)),n.active&&Object(u.c)(w||(w=Object(W.a)(["\n          background: "," !important;\n        "])),Object(I.b)(.2,n.backgroundColor)))}),(function(n){return n.loading&&Object(u.c)(C||(C=Object(W.a)(['\n    span {\n      visibility: hidden;\n      opacity: 0;\n    }\n      \n    &::after {\n      content: "";\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      border: 4px solid transparent;\n      border-top-color: #ffffff;\n      border-radius: 50%;\n      animation: '," 1s ease infinite;\n    }\n  "])),X)})),nn=function(n){var e=n.children,t=n.variant,o=void 0===t?"primary":t,c=n.href,i=n.name,s=n.type,d=void 0===s?"button":s,b=n.loading,u=void 0!==b&&b,h=n.disabled,f=void 0!==h&&h,j=Object(r.useState)(u),g=Object(a.a)(j,2),m=g[0],O=g[1],p=Object(r.useRef)(null),x=Q().currentTheme,v=Object(r.useState)(x.colors.accent[200]),k=Object(a.a)(v,2),y=k[0],w=k[1],C=Object(r.useState)(!1),S=Object(a.a)(C,2),z=S[0],H=S[1],V=K("0.5rem","1rem");return Object(r.useEffect)((function(){H("outlined"===o||"secondary"===o)}),[o]),Object(r.useEffect)((function(){switch(o){case"primary":case"secondary":w(x.colors.accent[200]);break;case"tertiary":case"outlined":w(x.colors.gray[700]);break;default:w(x.colors.accent[200])}}),[x.colors.accent,x.colors.gray,o]),Object(r.useEffect)((function(){var n;null===(n=p.current)||void 0===n||n.addEventListener("click",(function(){O(!m)}))}),[m]),Object(l.jsx)(Y,{tabIndex:-1,ref:p,type:d,active:m,loading:m,disabled:f,outlined:z,fontSize:V,backgroundColor:y,paddingBlockClamp:K("0.2rem","0.8rem"),paddingHorizontalClamp:K("1rem","1.875rem"),children:Object(l.jsx)(jn,{href:c,name:i,children:Object(l.jsx)("span",{children:e})})})},en=Object(r.memo)(nn),tn=u.d.header(S||(S=Object(W.a)(["\n  width: 100%;\n\n  position: fixed;\n\n  display: grid;\n  \n  place-items: center;\n\n  background: ",";\n  padding: "," 0;\n"])),(function(n){return n.theme.colors.gray[900]}),(function(n){return n.paddingBlockClamp})),rn=u.d.nav(z||(z=Object(W.a)(['\n  width: 90%;\n\n  display: grid;\n\n  grid-template-areas: "logo . links . buttons";\n  grid-template-columns: 1fr 1fr 0.8fr 1fr 1fr;\n']))),on=u.d.div(H||(H=Object(W.a)(["\n  grid-area: logo;\n"]))),cn=u.d.ul(V||(V=Object(W.a)(["\n  grid-area: links;\n\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n"]))),an=u.d.li(D||(D=Object(W.a)(["\n  a {\n    font-weight: 500;\n    position: relative;\n\n    ","\n    background-size: 0% 100%;\n    background-repeat: no-repeat;\n    background-position: left bottom;\n    padding: 0.2rem;\n    transition: all 320ms cubic-bezier(0.215, 0.610, 0.355, 1);\n\n    &:hover, &:focus {\n      background-size: 100% 100%;\n    }\n  }\n"])),(function(n){var e=n.theme.colors.accent;return Object(u.c)(E||(E=Object(W.a)(["\n      background-image: linear-gradient(to right, ",", ",");\n    "])),e[200],e[100])})),sn=u.d.section(L||(L=Object(W.a)(["\n  grid-area: buttons;\n\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n"]))),ln=function(n){var e=n.headerRef,t=K("0.75rem","1.25rem");return Object(l.jsx)(tn,{ref:e,paddingBlockClamp:t,children:Object(l.jsxs)(rn,{children:[Object(l.jsx)(on,{children:Object(l.jsx)(vn,{size:64,variant:"full"})}),Object(l.jsxs)(cn,{children:[Object(l.jsx)(an,{children:Object(l.jsx)(jn,{href:"#blog",name:"blog",children:"Blog"})}),Object(l.jsx)(an,{children:Object(l.jsx)(jn,{href:"#Social",name:"Social",children:"Social"})}),Object(l.jsx)(an,{children:Object(l.jsx)(jn,{href:"#Study",name:"Study",children:"Study"})})]}),Object(l.jsxs)(sn,{children:[Object(l.jsx)(en,{href:"#login",name:"Login",variant:"secondary",children:"Login"}),Object(l.jsx)(en,{href:"#signup",name:"Sign Up",variant:"primary",children:"Sign Up"})]})]})})},dn=Object(r.memo)(ln),bn=t(26),un=t(14),hn=["children","name","href"],fn=function(n){var e=n.children,t=n.name,r=n.href,o=Object(bn.a)(n,hn);return Object(l.jsx)(un.b,Object(U.a)(Object(U.a)({to:r,href:r},o),{},{"aria-label":t,rel:"noopener noreferrer","data-reset":!0,children:e}))},jn=Object(r.memo)(fn),gn=Object(u.e)(M||(M=Object(W.a)(["\n  from {\n    background-size: 100% 2px;\n  }\n  \n  to {\n    background-size: 100% 100%;\n  }\n"]))),mn=u.d.div(F||(F=Object(W.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n  \n  flex-direction: ",';\n\n  [data-link="icon"] {\n    &:hover, &:focus {\n      #background {\n        fill: ',";\n      }\n\n      #logo {\n        fill: ",';\n      }\n    }\n  }\n\n  [data-link="title"] {\n    ',"\n    background-size: 0% 2px;\n    background-repeat: no-repeat;\n    background-position: left bottom;\n\n    transition: background 200ms;\n\n    &:hover {\n      cursor: pointer;\n      \n      background-size: 100% 2px;\n    }\n\n    &:focus {\n      animation: "," forwards 200ms;\n    }\n  }\n"])),(function(n){return n.direction}),(function(n){return n.theme.colors.gray[700]}),(function(n){return n.theme.colors.accent[100]}),(function(n){return Object(u.c)(R||(R=Object(W.a)(["\n      background-image: linear-gradient(to right, ",", ",");\n    "])),n.theme.colors.accent[200],n.theme.colors.accent[100])}),gn),On=u.d.svg(T||(T=Object(W.a)(["\n  background: ",";\n  cursor: pointer;\n  margin-right: ",";\n\n  path {\n    transition: all 200ms;  \n  }\n"])),(function(n){return n.theme.colors.gray[900]}),(function(n){return n.marginLeftClamp})),pn=u.d.h1(B||(B=Object(W.a)(["\n  font-size: ",";\n  font-family: ",";\n  font-weight: 400;\n\n  height: min-content;\n  \n  strong {\n    font-weight: 700\n  }\n"])),(function(n){return n.fontSizeClamp}),(function(n){return n.theme.fonts.DM})),xn=function(n){var e=n.variant,t=void 0===e?"full":e,o=n.size,c=void 0===o?64:o,i=Q().currentTheme,s=K("0.1rem","2rem"),d=K("0.8rem","1.25rem"),b=Object(r.useMemo)((function(){return Object(l.jsx)(jn,{"data-link":"icon",tabIndex:1,href:"/",name:"homepage",children:Object(l.jsx)(On,{marginLeftClamp:s,width:c,height:c,viewBox:"0 0 66 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsxs)("g",{clipPath:"url(#clip0_536:2834)",children:[Object(l.jsx)("path",{id:"background",d:"M54.0693 0H12.0693C5.9942 0 1.06934 4.92487 1.06934 11V53C1.06934 59.0751 5.9942 64 12.0693 64H54.0693C60.1445 64 65.0693 59.0751 65.0693 53V11C65.0693 4.92487 60.1445 0 54.0693 0Z",fill:i.colors.gray[900]}),Object(l.jsx)("path",{id:"logo",d:"M52.3926 21.7143V23C52.3926 23.1705 52.3241 23.334 52.2021 23.4546C52.08 23.5751 51.9145 23.6429 51.742 23.6429H49.7902V24.6072C49.7902 25.1397 49.3532 25.5714 48.8143 25.5714H16.9348C16.3958 25.5714 15.9589 25.1397 15.9589 24.6072V23.6429H14.007C13.8345 23.6429 13.6691 23.5751 13.547 23.4546C13.425 23.334 13.3564 23.1705 13.3564 23V21.7143C13.3564 21.5871 13.3946 21.4628 13.4662 21.3571C13.5376 21.2513 13.6393 21.1689 13.7583 21.1203L32.6258 14.0489C32.7851 13.9837 32.964 13.9837 33.1233 14.0489L51.9907 21.1203C52.1097 21.1689 52.2114 21.2513 52.2829 21.3571C52.3544 21.4628 52.3926 21.5871 52.3926 21.7143ZM50.4408 46.1429H15.3083C14.2303 46.1429 13.3564 47.0063 13.3564 48.0714V49.3571C13.3564 49.5276 13.425 49.6912 13.547 49.8117C13.6691 49.9323 13.8345 50 14.007 50H51.742C51.9145 50 52.08 49.9323 52.2021 49.8117C52.3241 49.6912 52.3926 49.5276 52.3926 49.3571V48.0714C52.3926 47.0063 51.5187 46.1429 50.4408 46.1429ZM19.8625 26.8572V42.2857H16.9348C16.3958 42.2857 15.9589 42.7175 15.9589 43.25V44.8571H49.7902V43.25C49.7902 42.7175 49.3532 42.2857 48.8143 42.2857H45.8866V26.8572H40.6818V42.2857H35.4769V26.8572H30.2721V42.2857H25.0673V26.8572H19.8625Z",fill:i.colors.accent[200]})]})})})}),[i.colors.accent,i.colors.gray,s,c]),u=Object(r.useMemo)((function(){return Object(l.jsx)(jn,{"data-link":"title",tabIndex:2,href:"/",name:"homepage",children:Object(l.jsxs)(pn,{fontSizeClamp:d,children:["School",Object(l.jsx)("strong",{children:"Club"})]})})}),[d]),h=Object(r.useState)(Object(l.jsxs)(mn,{children:[b,u]})),f=Object(a.a)(h,2),j=f[0],g=f[1];return Object(r.useEffect)((function(){switch(t){case"full":g(Object(l.jsxs)(mn,{children:[b,u]}));break;case"img":g(b);break;case"text":g(u);break;default:g(Object(l.jsxs)(mn,{children:[b,u]}))}}),[b,u,t]),Object(l.jsx)(l.Fragment,{children:j})},vn=Object(r.memo)(xn),kn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function yn(n){if("serviceWorker"in navigator){if(new URL("/fobos",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/fobos","/service-worker.js");kn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):wn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):wn(e,n)}))}}function wn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var Cn=function(n){var e=n.children;return Object(l.jsx)(un.a,{children:Object(l.jsx)(s.c,{children:e})})},Sn=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,39))})),zn=function(){var n=Object(r.useState)(0),e=Object(a.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null);return Object(r.useEffect)((function(){yn()}),[]),Object(r.useLayoutEffect)((function(){document.onreadystatechange=function(){var n;o((null===c||void 0===c||null===(n=c.current)||void 0===n?void 0:n.offsetHeight)||0)}}),[c]),Object(l.jsx)(Cn,{children:Object(l.jsx)(b,{children:Object(l.jsx)(G,{children:Object(l.jsxs)(r.Suspense,{fallback:Object(l.jsx)("h1",{children:"loading..."}),children:[Object(l.jsx)(dn,{headerRef:c}),Object(l.jsx)(N,{paddingTop:t,children:Object(l.jsx)(s.a,{exact:!0,path:"/",component:function(){return Object(l.jsx)(Sn,{})}})})]})})})})};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(zn,{})}),document.querySelector("body"))}},[[38,1,2]]]);
//# sourceMappingURL=main.54604d06.chunk.js.map