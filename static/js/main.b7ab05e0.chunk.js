(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),l=a(2),s=(a(16),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),m=o[0],u=o[1];return c.a.createElement("div",{className:"row search-row mt-5 mb-5 justify-content-center "},c.a.createElement("div",{className:"col-auto"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r!==m&&e.submit(r),u(r)}},c.a.createElement("div",{className:"form-row align-items-center justify-content-center"},c.a.createElement("div",{className:"col-auto"},c.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Moscu...",onChange:function(e){i(e.target.value)},value:r,required:!0})),c.a.createElement("div",{className:"col-auto"},c.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Search"))))))}),o=a(3),m=a(4),u=function(e){return c.a.createElement("div",{className:"row header-row header-bar mb-5 "},c.a.createElement("div",{className:"col text-center"},c.a.createElement("h2",null,e.text,c.a.createElement(o.a,{icon:m.a,style:{marginLeft:"10px"}}))))},d=a(5),f=a.n(d),h=a(6),p=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(!0),o=Object(l.a)(s,2),m=o[0],u=o[1],d=function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(t,"&api_key=FGcKWs04zti40C9Hyhxu4CRPtL7bADFx"),{mode:"cors"});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,i(n.data[Math.floor(25*Math.random())].images.original.url),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("problem with gif");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){"hot summer"!==e.gif&&"freezing"!==e.gif&&"chilling"!==e.gif||(console.log(e.gif),d(e.gif),u(!1))}),[e.gif]),r?c.a.createElement("img",{src:r,className:"img-fluid gif",alt:"some-gif"}):m?c.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"15em"}}):c.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"15em"}},c.a.createElement("div",{className:"spinner-border ",role:"status"}))},b=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],f=u[1];return Object(n.useEffect)((function(){e.data.temp&&i(!1),f({icon:e.data.iconInfo,temp:e.data.temp,wind:e.data.wind,general:e.data.general,city:e.data.city,humidity:e.data.humidity,clouds:e.data.clouds,props:e.data.iconInfo})}),[e.data]),d.city?c.a.createElement("div",{className:"container w-100 weather-content-style mb-4"},c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col-auto text-wrap"},c.a.createElement("h1",{className:"city-style"},d.city),c.a.createElement("p",null,d.general),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(d.icon,"@2x.png"),alt:""})),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h1",{className:"temp-style"},d.temp," \xb0C"),c.a.createElement("p",null,c.a.createElement(o.a,{icon:m.d})," ",d.wind,c.a.createElement("span",{style:{fontSize:"10px"}},"km/h")),c.a.createElement("p",null,c.a.createElement(o.a,{icon:m.c})," ",d.humidity,"%"),c.a.createElement("p",null,c.a.createElement(o.a,{icon:m.b})," ",d.clouds,"%")))):r?c.a.createElement("div",{className:"container w-100 weather-content-style mb-4 d-flex align-items-center justify-content-center",style:{height:"15em"}},c.a.createElement("h2",null,"Write a city to get the weather")):c.a.createElement("div",{className:"container w-100 weather-content-style mb-4 d-flex align-items-center justify-content-center",style:{height:"15em"}},c.a.createElement("div",{className:"spinner-border ",role:"status"}))},E=function(e){var t=e.main.temp;return Math.floor(t-273)},g=function(e){var t=e.wind.speed;return Math.floor(3.6*t)},y=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(""),y=Object(l.a)(d,2),v=y[0],w=y[1],j=function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=45b8a5fd049781c6a9430490973be29b"),{mode:"cors"});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c=E(n)>=25?"hot summer":E(n)<=16?"freezing":"chilling",i(t),u({city:t,temp:E(n),wind:g(n),humidity:n.main.humidity,general:n.weather[0].description,clouds:n.clouds.all,iconInfo:n.weather[0].icon}),w(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Error, wrong city");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.city!==r&&j(e.city)})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center mt-5 row"},c.a.createElement("div",{className:"col-md-8 col-xs-12 text-center"},c.a.createElement(b,{data:m}),c.a.createElement(p,{gif:v}))))},v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(u,{text:"Joaquin Weather"}),c.a.createElement(s,{placeholder:"Write a location...",btnText:"Search",submit:function(e){r(e)}}),c.a.createElement(y,{city:a}))};i.a.render(c.a.createElement(v,null),document.querySelector("#root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b7ab05e0.chunk.js.map