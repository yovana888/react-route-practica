(this.webpackJsonprutas=this.webpackJsonprutas||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),r=c.n(a),i=(c(23),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))}),l=c(7),j=(c(24),c(2)),o=c(9),d=c.n(o),h=c(11),b=c(12),u=c(0),O=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Math.floor(100*Math.random())+1,r=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://www.superheroapi.com/api.php/").concat("3875372609247663","/").concat(a)).then((function(e){return e.json()})).then((function(e){s([e])}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"text-muted",children:["API HEROES ",Object(u.jsx)("button",{type:"button",onClick:function(){r()},className:"btn btn-purple",children:"Ver Otro"})]}),c.length?c.map((function(e,t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.image.url,alt:""}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h4",{children:["Nombre: ",Object(u.jsx)("span",{className:"detalle",children:e.name})]}),Object(u.jsxs)("h4",{children:["Ocupacion: ",Object(u.jsx)("span",{className:"detalle",children:e.work.occupation})]}),Object(u.jsxs)("h4",{children:["Raza: ",Object(u.jsx)("span",{className:"detalle",children:e.appearance.race})]}),Object(u.jsx)("h4",{children:"Poder:"}),Object(u.jsxs)("ul",{className:"detalle",children:[Object(u.jsxs)("li",{children:["Combate: ",e.powerstats.combat]}),Object(u.jsxs)("li",{children:["Velocidad: ",e.powerstats.speed]}),Object(u.jsxs)("li",{children:["Durabilidad: ",e.powerstats.durability]})]})]})]},t.toString())})):Object(u.jsx)("span",{children:"Loading..."})]})},x=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"Page Home"})})},p=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){return s(e.results)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"text-muted",children:["RandomAPI ",Object(u.jsx)("button",{type:"button",onClick:function(){a()},className:"btn btn-success",children:"Ver Otro"})," "]}),c.length?c.map((function(e,t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.picture.large,alt:""}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h4",{children:["Nombre: ",Object(u.jsxs)("span",{className:"detalle",children:[e.name.title," ",e.name.first," ",e.name.last]})]}),Object(u.jsxs)("h4",{children:["Ciudad: ",Object(u.jsx)("span",{className:"detalle",children:e.location.city})]}),Object(u.jsxs)("h4",{children:["Estado: ",Object(u.jsx)("span",{className:"detalle",children:e.location.state})]}),Object(u.jsxs)("h4",{children:["Email: ",Object(u.jsx)("span",{className:"detalle",children:e.email})]}),Object(u.jsxs)("h4",{children:["Celular: ",Object(u.jsx)("span",{className:"detalle",children:e.cell})]})]})]},t.toString())})):Object(u.jsx)("span",{children:"Loading..."})]})},m=function(){return Object(u.jsxs)("header",{className:"main-header",children:[Object(u.jsx)("span",{className:"logo",children:"API-REST"}),Object(u.jsx)("nav",{className:"main-nav",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/",className:"link",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/persona",className:"link",children:"Persona"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/hero",className:"link",children:"Heroes"})})]})})]})},f=(c(35),function(){return Object(u.jsx)("div",{className:"l_footer__wrapper",children:"Hero 2021 Copyright \xa9 Todos los derechos reservados"})}),N=(c(36),function(e){var t=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"container-main",children:t}),Object(u.jsx)(f,{})]})}),v=function(){return Object(u.jsx)(N,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(u.jsx)(j.a,{path:"/hero",component:O}),Object(u.jsx)(j.a,{path:"/persona",component:p})]})})},g=function(){return Object(u.jsx)(v,{})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(g,{})})}),document.getElementById("root")),i()}},[[37,1,2]]]);
//# sourceMappingURL=main.b096ad75.chunk.js.map