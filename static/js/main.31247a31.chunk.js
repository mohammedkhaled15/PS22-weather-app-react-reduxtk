(this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]=this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]||[]).push([[0],{20:function(e,t,a){e.exports={card:"CurrentDay_card__1XVNY",cardInner:"CurrentDay_cardInner__3KJVN",gradient:"CurrentDay_gradient__12ZmT",img:"CurrentDay_img__1j8i7",weekday:"CurrentDay_weekday__32qxd"}},26:function(e,t,a){e.exports={heading:"Header_heading__1sNyN",light:"Header_light__1AHb_"}},27:function(e,t,a){e.exports={input:"Form_input__1yfwo",button:"Form_button__3wFkP"}},28:function(e,t,a){e.exports={card:"Forecast_card__1c9du",box:"Forecast_box__3cFnH"}},40:function(e,t,a){e.exports={box:"Page_box__1lMJo",button:"Page_button__3MoTc"}},41:function(e,t,a){e.exports={box:"Loader_box__wBCom"}},42:function(e,t,a){e.exports={weekList:"UpcomingDaysForecast_weekList__2C40H"}},43:function(e,t,a){e.exports={weekday:"UpcomingDaysForecastItem_weekday__1Hp2L"}},44:function(e,t,a){e.exports={error:"Error_error__cvgXO"}},50:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),i=a.n(c),s=(a(49),a(50),a(5)),o=a(8),l=a(12),d=a(19),u=a(14),j=a.n(u),m="f3df22d37e0ab270347f62a9b3d4cc89",f=Object(o.b)("getForecast",function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var a,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?","q=").concat(t,"&appid=").concat(m));case 2:return a=e.sent,e.next=5,j.a.get("".concat("https://api.openweathermap.org/data/2.5/forecast?","units=metric&lat=").concat(a.data.coord.lat,"&lon=").concat(a.data.coord.lon,"&appid=").concat(m));case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(o.c)({name:"forecast",initialState:{loading:!1,forecast:[],error:""},extraReducers:function(e){e.addCase(f.pending,(function(e){e.loading=!0})),e.addCase(f.fulfilled,(function(e,t){e.loading=!1,e.forecast=t.payload,e.error=""})),e.addCase(f.rejected,(function(e,t){e.loading=!1,e.forecast=[],e.error="There is No Data For This City"}))}}).reducer,x=Object(o.b)("getLatLong",function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?","q=").concat(t,"&appid=").concat("f3df22d37e0ab270347f62a9b3d4cc89"));case 2:return a=e.sent,e.abrupt("return",a.data.coord);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(o.c)({name:"city",initialState:{loading:!1,cityLatLong:"",error:""},extraReducers:function(e){e.addCase(x.pending,(function(e){e.loading=!0})),e.addCase(x.fulfilled,(function(e,t){e.loading=!1,e.cityLatLong=t.payload,e.error=""})),e.addCase(x.rejected,(function(e,t){e.loading=!1,e.cityLatLong="",e.error=t.error.message}))}}).reducer,p=Object(o.a)({reducer:{forecast:b,city:h}}),g=a(26),O=a.n(g),w=a(0),v=function(){return Object(w.jsxs)("h1",{className:O.a.heading,children:[Object(w.jsx)("span",{className:O.a.light,children:"Weather"})," Forecast"]})},y=a(40),_=a.n(y),N=a(15),A=a(27),F=a.n(A),C=function(){var e=Object(s.b)(),t=(Object(s.c)((function(e){return e.forecast})),Object(n.useState)("")),a=Object(N.a)(t,2),r=a[0],c=a[1],i=function(t){t.preventDefault(),r&&""!==r&&e(f(r))};return Object(w.jsxs)("form",{onSubmit:i,children:[Object(w.jsx)("input",{"aria-label":"location",type:"text",className:"".concat(F.a.input," form-control"),placeholder:"Search for location",required:!0,value:r,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)("button",{type:"submit",className:F.a.button,onClick:i,children:"SEARCH"})]})},D=a(41),L=a.n(D),S=function(){return Object(w.jsx)("div",{className:L.a.box,children:Object(w.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"54px",height:"60px",viewBox:"0 0 24 30",children:[Object(w.jsx)("rect",{x:"0",y:"0",width:"3",height:"10",fill:"#333",children:Object(w.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),Object(w.jsx)("rect",{x:"10",y:"0",width:"3",height:"10",fill:"#333",children:Object(w.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),Object(w.jsx)("rect",{x:"20",y:"0",width:"3",height:"10",fill:"#333",children:Object(w.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]})})},k=a(78),H=a(79),T=a(80),P=a(28),V=a.n(P),I=a(20),K=a.n(I),R=a(9),W=a.n(R),B=function(e){return{weekday:W()(e.forecast).format("dddd"),date:W()(e.forecast).format("MMMM Do"),location:e.forecast.city.name,temperature:e.forecast.list[0].main.temp.toFixed(1),weatherIcon:"http://openweathermap.org/img/wn/".concat(e.forecast.list[0].weather[0].icon,"@2x.png"),weatherDescription:e.forecast.list[0].weather[0].description}},J=function(){var e=Object(s.c)((function(e){return e.forecast})),t=B(e),a=t.weekday,n=t.date,r=t.location,c=t.temperature,i=t.weatherIcon,o=t.weatherDescription;return Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("div",{className:K.a.img}),Object(w.jsx)("div",{className:K.a.gradient}),Object(w.jsxs)("div",{className:"".concat(K.a.cardInner," d-flex flex-column justify-content-between pt-3 pb-2 pl-2"),children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{className:"font-weight-bold mb-1",children:a}),Object(w.jsx)("p",{className:"mb-8",children:n}),Object(w.jsxs)("p",{className:"d-flex align-items-baseline font-weight-lighter mb-1",children:[Object(w.jsx)("img",{width:"10",height:"15",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABHCAAAAABgu0sfAAAAAnRSTlMAAHaTzTgAAAKXSURBVHgBldQDtyNLFMXx/eln4RljW89vbNtzbdtW8p/qpHWq+6ZyfwvtrrNLKnPi3XQVmP9yQU25PUfO8lMF7F+gYP2iGlijVOWkdtFD3crLQ6r55VFS5LRKVYls35JxZY2awyo4QaRyVgU/1T+6I895Iu9U6iaRxzJOEtGutnEeKK+WQg0s4JwIfWHN2jI6cBSwCcybRhSE85fqVoBXyjk8Ss3MJTNC2Z/3AxVlDuyQ+VOZOeBWenZKqTaMSakYwPbWGJFK78N7HVtE1pSaBH6Kh/a6El9x1vfnSmFKid+BDknTgLlJh1JPcG74lQFLSmwB7cq5j2OWR312vVDsALAhYwK4rdgl4D+9BY4o1g/slwWs5i/aNQU0nAZL3gsLqnh3BuR57r1QFd6d1/JcAg6aMvxPXslzEThsPql6n/TI86hQ2Ezhjsd/YVEfgQOKjQLyAFv5i26dA54pdgpYktGb31vOAjfirs7He1G+riJd9Yt5wG5nz5W6av8Rf/8Q+EeJIZxZxQYx0+V7oF+OnYrLRFZfX738ZJ4apUaS+bhiN+kJjLWyhXzWdKP0Pyk7f8aznNvAPeVcW6Fm66lyDuSqPIwjz7598lSAu/ldZUwBj239dlsvh/OTUnfDu/Kov/w2gM9qYD+ODP9OWfaHMtqAlcbZt8vSXW+Y/Vd5zuE0yj6sgmlgSD5/3C2cA7tmf6AST3DKH/jZzbb/RuHs4cEZtSGtbmAxnN3A+TuY3fgDJ5zdmAd6Cw3/ElwVP4eyWy+BnXD2Qtrn5uq+An7L//dhnD2gH5i12YNwLioyHGcP+hfH1hi0DHRK2jHjHi6tnn1HTXoPzNTK+l3NIjaiph2hTnswSuSR9gI/e9iN4noP6uOVyn0DXHepivCQVPgAAAAASUVORK5CYII=",alt:"location",className:"mr-1"}),Object(w.jsx)("span",{children:r})]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:i,alt:"weather icon"}),Object(w.jsxs)("h2",{className:"font-weight-bold mb-1",children:[Object(w.jsx)("span",{children:c}),"\xb0C"]}),Object(w.jsx)("h5",{className:"font-weight-lighter",children:o})]})]})]})},Q=function(e){var t=function(e){var t=0;console.log(e);for(var a=0;a<8;a++)e.forecast.list[a].main.temp_max>t&&(t=e.forecast.list[a].main.temp_max);return t.toFixed(1)}(e),a=function(e){var t=e.forecast.list[0].main.temp_min;console.log(e);for(var a=0;a<8;a++)e.forecast.list[a].main.temp_min<t&&(t=e.forecast.list[a].main.temp_min);return t.toFixed(1)}(e);return[{name:"Feels Like",value:e.forecast.list[0].main.feels_like.toFixed(1),unit:"%"},{name:"Humidity",value:e.forecast.list[0].main.humidity,unit:"%"},{name:"Wind",value:e.forecast.list[0].wind.speed,unit:"km/h"},{name:"air pressure",value:e.forecast.list[0].main.pressure,unit:"mb"},{name:"max temp",value:t,unit:"\xb0C"},{name:"min temp",value:a,unit:"\xb0C"}]},Y=function(){var e=Object(s.c)((function(e){return e.forecast})),t=Q(e);return Object(w.jsx)("div",{className:"mt-4 mt-md-2",children:Object(w.jsx)("div",{className:"d-flex flex-column mb-2",children:t.map((function(e,t){return Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsx)("p",{className:"mb-0 font-weight-bolder text-uppercase",children:e.name}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:"mb-0 mr-2",children:e.value}),Object(w.jsx)("span",{className:"mb-0",children:e.unit})]})]},t)}))})})},E=a(42),q=a.n(E),M=function(e){return e.forecast.list.filter((function(e,t){return[7,15,23,31,39].includes(t)}))},Z=a(43),U=a.n(Z),z=function(e){var t=e.day;return Object(w.jsxs)("li",{className:"".concat(U.a.weekday," d-flex flex-column justify-content-center align-items-center p-2"),children:[Object(w.jsx)("img",{className:"mb-2",width:"30",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"weather icon"}),Object(w.jsx)("span",{className:"mb-2",children:W()(t.dt_txt).format("dddd").slice(0,3)}),Object(w.jsxs)("span",{className:"font-weight-bold",children:[t.main.feels_like.toFixed(0)," \xb0"]})]})},X=function(){var e=Object(s.c)((function(e){return e.forecast})),t=M(e);return Object(w.jsx)("ul",{className:"".concat(q.a.weekList," d-flex justify-content-between p-0"),children:t.map((function(e,t){return Object(w.jsx)(z,{day:e},t)}))})},G=function(){return Object(w.jsx)(k.a,{className:V.a.box,children:Object(w.jsxs)(H.a,{children:[Object(w.jsx)(T.a,{xs:12,md:4,children:Object(w.jsx)("div",{className:V.a.card,children:Object(w.jsx)(J,{})})}),Object(w.jsxs)(T.a,{xs:12,md:8,className:"d-flex flex-column justify-content-between",children:[Object(w.jsx)(Y,{}),Object(w.jsx)(X,{})]})]})})},$=a(44),ee=a.n($),te=function(e){var t=e.message;return Object(w.jsx)("div",{className:"".concat(ee.a.error," alert position-absolute"),role:"alert",children:t})};te.defaultProps={message:"An error occurred"};var ae=te,ne=function(){var e=Object(s.c)((function(e){return e.forecast}));return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(v,{}),Object(w.jsxs)("div",{className:_.a.box,children:["200"!==e.forecast.cod&&!e.loading&&Object(w.jsx)(C,{}),e.loading&&Object(w.jsx)(S,{}),"200"===e.forecast.cod&&Object(w.jsx)(G,{}),"200"!==e.forecast.cod&&e.error&&Object(w.jsx)(ae,{message:e.error})]})]})};var re=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(ne,{})})};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(s.a,{store:p,children:Object(w.jsx)(re,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.31247a31.chunk.js.map