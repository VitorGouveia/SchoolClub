(this["webpackJsonp@fobos/web"]=this["webpackJsonp@fobos/web"]||[]).push([[0],{18:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return a.a}));var o=t(9),r=t(0),c=t(2),i=Object(r.createContext)({}),s=function(n){var e=n.children,t=Object(r.useState)((function(){return Number(getComputedStyle(document.querySelector("html")).fontSize.slice(0,-2)||16)})),s=Object(o.a)(t,2),a=s[0],l=s[1];return Object(c.jsx)(i.Provider,{value:{rootFontSize:a,setRootFontSize:l},children:e})},a=t(24)},23:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t(9),r=t(0);function c(n,e){var t=Object(r.useState)((function(){return e})),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,s]}},24:function(n,e,t){"use strict";t.d(e,"b",(function(){return m})),t.d(e,"a",(function(){return p}));var o,r,c=t(9),i=t(0),s=t(10),a=t(23),l=t(14),u=Object(s.b)(o||(o=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: background 400ms;\n  }\n\n  html, body {\n    width: 100%;\n    height: 100%;\n    \n    ","\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  [data-reset] {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    background: transparent;\n    display: grid;\n    place-items: center;\n  }\n\n  :focus {\n    outline: 0;\n  }\n"])),(function(n){var e=n.theme,t=e.colors,o=e.fonts;return Object(s.c)(r||(r=Object(l.a)(["\n      font-family: ",";\n      color: ",";\n      background: ","\n    "])),o.Rubik,t.gray[50],t.gray[600])})),h=t(7),d=t(21),f={title:"default",fonts:{DM:"'DM Sans', sans-serif",Rubik:"'Rubik', sans-serif"},sizes:{sm:"3.125rem"},colors:{accent:{100:"#FD6868",200:"#FD4D4D",300:""},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}},b="#FD4D4D",j=Object(h.a)(Object(h.a)({},f),{},{title:"dark",fonts:Object(h.a)({},f.fonts),sizes:Object(h.a)({},f.sizes),colors:{accent:{100:Object(d.b)(.1,b),200:b,300:Object(d.a)(.1,b)},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}}),g=Object(h.a)(Object(h.a)({},f),{},{title:"light",fonts:Object(h.a)({},f.fonts),sizes:Object(h.a)({},f.sizes),colors:{accent:{100:"#FD6868",200:"#FD4D4D",300:""},gray:{50:"hsl(255, 1%, 98%)",100:"hsl(255, 6%, 90%)",200:"hsl(220, 6%, 80%)",300:"hsl(220, 6%, 70%)",400:"hsl(220, 6%, 60%)",500:"hsl(220, 6%, 50%)",600:"hsl(220, 6%, 40%)",700:"hsl(220, 6%, 30%)",800:"hsl(220, 6%, 20%)",900:"hsl(220, 6%, 9%)"}}}),O=t(2),v={light:g,dark:j},m=Object(i.createContext)({}),p=function(n){var e=n.children,t=Object(a.a)("theme",j),o=Object(c.a)(t,2),r=o[0],i=o[1];return Object(O.jsx)(m.Provider,{value:{currentTheme:r,themes:"light",toggleTheme:function(n){i("light"===n.title?j:g)},getThemes:function(){return v}},children:Object(O.jsxs)(s.a,{theme:r,children:[e,Object(O.jsx)(u,{})]})})}},40:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),c=t(25),i=t.n(c),s=t(1),a=t(18),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(n){if("serviceWorker"in navigator){if(new URL("/fobos",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/fobos","/service-worker.js");l?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):h(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(e,n)}))}}function h(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var d=t(17),f=t(2),b=function(n){var e=n.children;return Object(f.jsx)(d.a,{children:Object(f.jsx)(s.c,{children:e})})},j=Object(o.lazy)((function(){return t.e(3).then(t.bind(null,41))})),g=function(){return Object(o.useEffect)((function(){u()}),[]),Object(f.jsx)(b,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(a.c,{children:Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("h1",{children:"loading..."}),children:Object(f.jsx)(s.a,{exact:!0,path:"/",component:function(){return Object(f.jsx)(j,{})}})})})})})};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.querySelector("body"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f0600e7a.chunk.js.map