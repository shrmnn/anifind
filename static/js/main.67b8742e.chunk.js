(this.webpackJsonpanifind=this.webpackJsonpanifind||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(7),s=n.n(i),u=(n(15),n(16),n(9)),o=n(2);n(17);var l=n(6),j=n.n(l),f=n(8);function b(e){return h.apply(this,arguments)}function h(){return(h=Object(f.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://malendar.herokuapp.com/v3/search/anime",n="?q=".concat(t),e.next=4,fetch("".concat("https://malendar.herokuapp.com/v3/search/anime").concat(n)).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.error(e),[]}));case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0=[];case 7:return c=e.t0,e.abrupt("return",c.slice(0,5));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(19);var m=function(e){var t=e.malId,n=e.imageUrl,a=e.title;return Object(c.jsxs)("div",{className:"Anime-item",children:[Object(c.jsx)("img",{alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u0442\u0430\u0439\u0442\u043b\u0430",src:n,className:"Anime-img"}),Object(c.jsx)("p",{className:"Anime-title",children:a})]},t)},d=r.a.memo(m),O=function(e){var t=e.anime,n=[];try{n=t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d,{malId:e.mal_id||"",imageUrl:e.image_url||"",title:e.title||""})},"li_".concat(e.mal_id||""))}))}catch(a){return console.error(a),null}return Object(c.jsx)("ul",{className:"Anime",children:n})},p=r.a.memo(O);var v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2),m=h[0],d=h[1],O=Object(a.useState)([]),v=Object(o.a)(O,2),x=v[0],g=v[1],S=Object(a.useState)([]),N=Object(o.a)(S,2),w=N[0],A=N[1],E=function(e){var t=Object(a.useState)((function(){return localStorage.getItem(e)})),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t=function(t){t.storageArea===localStorage&&t.key===e&&r(t.newValue)};return window.addEventListener("storage",t),function(){window.removeEventListener("storage",t)}})),Object(a.useEffect)((function(){localStorage.setItem(e,c)}),[e,c]),[c,r]}("history"),k=Object(o.a)(E,2),y=k[0],_=k[1],F=function(e,t){var n=Object(a.useState)(e),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e]),r}(n,1e3),I=function(){var e=Object(a.useRef)(!1);return Object(a.useEffect)((function(){e.current=!0}),[]),function(){return e.current}}();return Object(a.useEffect)((function(){F&&F.length>2&&(d(!0),l.length>0&&A(l||[]),b(F).then((function(e){g([F].concat(Object(u.a)(x))),_(F),d(!1),j(e)})))}),[F]),Object(a.useEffect)((function(){0===w.length&&I()&&b(y).then((function(e){A(e)})),y!==F&&y!==x[0]&&l!==w&&r(y)}),[y]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"Search-container",children:[Object(c.jsx)("input",{"aria-label":"\u041f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ".concat(y||"pupa"),className:"Search",onChange:function(e){return r(e.target.value)}}),Object(c.jsxs)("div",{className:"Search-history",children:[Object(c.jsx)("h4",{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b:"}),Object(c.jsx)("ul",{children:x.slice(0,3).map((function(e,t){return Object(c.jsx)("li",{children:e},"".concat(Math.random()*t,"_").concat(e))}))})]})]}),m&&Object(c.jsx)("div",{children:"\u041f\u043e\u0438\u0441\u043a..."}),l&&y!==x[1]?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{anime:l})}):null,w?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u043e\u0438\u0441\u043a"}),Object(c.jsx)(p,{anime:w})]}):null]})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("div",{className:"App-header__logo",children:"anifind"})}),Object(c.jsx)("main",{className:"App-main",children:Object(c.jsx)(v,{})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.67b8742e.chunk.js.map