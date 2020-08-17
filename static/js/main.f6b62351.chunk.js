(this["webpackJsonpcovid-weather-tracker"]=this["webpackJsonpcovid-weather-tracker"]||[]).push([[0],{102:function(e,a,t){e.exports={container:"Chart_container__2dgZJ"}},104:function(e,a,t){e.exports={container:"Weather_container__12ElW"}},112:function(e,a,t){e.exports=t(236)},117:function(e,a,t){},235:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),o=(t(117),t(13)),i=t(14),s=t(17),m=t(16),d=t(249),u=t(257),p=t(251),y=t(258),h=t(25),E=t.n(h),f=t(51),b=t.n(f),v=t(34),g=t.n(v),x=function(e){var a=e.data,t=a.date;return console.log(a.country),a.country.TotalConfirmed?r.a.createElement("div",{className:E.a.container},r.a.createElement(d.a,{container:!0,spacing:4,justify:"center"},r.a.createElement(d.a,{item:!0,component:u.a,xs:12,md:3,className:g()(E.a.card,E.a.infected)},r.a.createElement(p.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:a.country.TotalConfirmed,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(t).toString()),r.a.createElement(y.a,{variant:"body2"},"Number of active cases"))),r.a.createElement(d.a,{item:!0,component:u.a,xs:12,md:3,className:g()(E.a.card,E.a.recovered)},r.a.createElement(p.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:a.country.TotalRecovered,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(t).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of recovered cases"))),r.a.createElement(d.a,{item:!0,component:u.a,xs:12,md:3,className:g()(E.a.card,E.a.deaths)},r.a.createElement(p.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:a.country.TotalDeaths,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(t).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of deaths "))))):"Loading..."},w=t(22),S=t.n(w),k=t(30),N=t(105),_=t(15),C=t.n(_),j=function(){var e=Object(k.a)(S.a.mark((function e(){var a,t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://covid19.mathdro.id/api/daily");case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=t(48),O=t(102),D=t.n(O),W=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var l=t.length?r.a.createElement(T.Line,{data:{labels:t.map((function(e){return e.date})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(2555,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:D.a.container},l)},z=t(52),B=t.n(z),L=t(103),A=t.n(L),F=t(18),H=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={countries:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api.covid19api.com/summary").then((function(a){console.log(a.data.Countries),e.setState({countries:a.data.Countries})}))}},{key:"render",value:function(){var e=this.state.countries,a=e.length?e.map((function(e,a){return r.a.createElement("span",{className:B.a.country,key:a},r.a.createElement("span",null,r.a.createElement(F.b,{to:"/country/"+a},r.a.createElement("span",{className:B.a.label},e.Country,"\xa0\xa0\xa0\xa0",e.TotalConfirmed))))})):r.a.createElement("p",null,"Loading...");return r.a.createElement("div",{style:{whiteSpace:"nowrap",width:"90%",height:"50px"}},r.a.createElement(A.a,{className:B.a.marque,direction:"left",speed:"0.05"},a))}}]),t}(n.Component),I=t(37),M=t.n(I),J=(t(45),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light blue lighten-1",style:{height:"90px"}},r.a.createElement("a",{className:"navbar-brand text-white display-6",href:"#"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/64/coronavirus.png",className:"d-inline-block align-top",alt:""}),r.a.createElement("span",{style:{fontSize:"25px"}},"Covid19-Tracker")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse blue lighten-1",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(F.c,{to:"/"},r.a.createElement("i",{className:"material-icons left"},"home"),"Home"),r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(F.c,{to:"/Weather"},r.a.createElement("i",{className:"material-icons left"},"cloud"),"Weather")))))}),P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={country:{},date:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id;C.a.get("https://api.covid19api.com/summary").then((function(a){console.log(a.data.Countries),e.setState({country:a.data.Global,date:a.data.Countries[0].Date})}))}},{key:"render",value:function(){var e=this.state;e.country,e.date;return r.a.createElement("div",{className:M.a.container},r.a.createElement(J,null),r.a.createElement("br",null),r.a.createElement("h2",{className:M.a.heading},"Global"),r.a.createElement(x,{data:this.state}),r.a.createElement("h4",{className:M.a.countries},"Countries"),r.a.createElement(H,null),r.a.createElement("h4",{className:M.a.stats},"Statistics"),r.a.createElement(W,null))}}]),t}(n.Component),G=t(104),R=t.n(G),q=(t(98),t(49)),U=t.n(q),V=t(62),Y=t.n(V),Z=t(63),$=t.n(Z),K=t(64),Q=t.n(K),X=t(65),ee=t.n(X),ae=t(66),te=t.n(ae),ne=t(67),re=t.n(ne),ce=t(70),le=t.n(ce),oe=t(255),ie=t(252),se=t(254),me=function(e){var a=e.data,t=a.temperature,n=a.city,c=(a.country,a.humidity),l=a.pressure,o=a.error,i=a.icon,s=a.image,m=a.minTemp,h=a.maxTemp,E=a.feels,f=a.description,b=a.date,v=(a.rain,a.cloudiness),g=a.visibility,x=a.sunrise,w=a.sunset,S=a.windSpeed,k=a.windDirection,N=a.color;a.clicked;return console.log(o),t?r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{container:!0,spacing:4,justify:"center"},r.a.createElement(d.a,{item:!0,component:u.a,xs:12,md:5,style:{position:"relative",backgroundColor:"whitesmoke",borderBottom:"10px solid"+N},className:le.a.card},r.a.createElement(oe.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(ie.a,{component:"img",height:"600",src:s,title:"lorem ipsum"}),r.a.createElement(se.a,{style:{position:"absolute",top:"10px"},fontWeight:700,fontSize:"h5.fontSize"},n),r.a.createElement(se.a,{style:{position:"absolute",top:"55px"},fontWeight:500,fontSize:"h6.fontSize"},Date(b).toString().slice(0,15)),r.a.createElement(y.a,{style:{position:"absolute",top:"145px",color:"white"},variant:"h1"},t,"\xb0c"),r.a.createElement(se.a,{fontStyle:"italic",fontSize:"h5.fontSize",style:{position:"absolute",top:"265px"},fontWeight:500},"Feels like"),r.a.createElement(se.a,{fontStyle:"italic",fontSize:"h3.fontSize",style:{position:"absolute",top:"285px",color:"#f5f5f5"}},E,"\xb0"))),r.a.createElement(d.a,{item:!0,component:u.a,xs:12,md:5,style:{position:"relative",backgroundColor:"whitesmoke",borderBottom:"10px solid"+N},className:le.a.card},r.a.createElement(oe.a,{gutterBottom:!0,style:{margin:"10px 0"}},r.a.createElement(se.a,{fontWeight:700,fontSize:"h5.fontSize",gutterBottom:!0},"".concat(f.charAt(0).toUpperCase()+f.slice(1)))),r.a.createElement(oe.a,{gutterbottom:!0,style:{backgroundColor:N}},r.a.createElement("h1",{style:{margin:"50px",color:"white"}},r.a.createElement("i",{className:"wi ".concat(i," display-1")}))),r.a.createElement(p.a,null,r.a.createElement(d.a,{container:!0,spacing:4,justify:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Max Temp:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},h,"\xb0c")),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0,style:{display:"inline-block"}},"Min Temp:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},m,"\xb0c"))),r.a.createElement(d.a,{item:!0},r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0,style:{display:"inline-block"}},"Humidity:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},c),"%"),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Pressure:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},l),"\xa0hPa")),r.a.createElement(d.a,{item:!0},r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Wind Direction:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},k,"\xa0\xb0")),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Wind Speed:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},S),"\xa0m/sec")),r.a.createElement(d.a,{item:!0},r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Cloudiness:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},v),"%"),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Visibility:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},g),"\xa0meters")),r.a.createElement(d.a,{item:!0},r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Sunrise:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},new Date(x).toString().slice(15,24)," am")),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(y.a,{color:"textSecondary",style:{display:"inline-block"}},"Sunset:\xa0\xa0")),r.a.createElement("span",null,r.a.createElement(y.a,{variant:"h5",style:{display:"inline-block"}},new Date(w).toString().slice(15,24)," pm")))))))):o?r.a.createElement("div",{style:{color:"red",marginLeft:"-150px"}},o):r.a.createElement("div",null)},de=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light blue lighten-1",style:{height:"90px"}},r.a.createElement("a",{className:"navbar-brand text-white display-6",href:"#"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/64/cloud.png",className:"d-inline-block align-top",alt:""}),r.a.createElement("span",{style:{fontSize:"25px"}},"Weather-Tracker")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse blue lighten-1",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(F.c,{to:"/"},r.a.createElement("i",{className:"material-icons left"},"home"),"Home"),r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("li",{className:"nav-item active "},r.a.createElement(F.c,{to:"/Weather"},r.a.createElement("i",{className:"material-icons left"},"cloud"),"Weather")))))},ue=(t(235),function(e){return r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",{className:"row",style:{contentAlign:"center"}},r.a.createElement("div",{className:"col-md-4 offset-md-3"},r.a.createElement("input",{autoComplete:"off",className:"form-control",type:"text",name:"city",value:e.loadweather.City,placeholder:"Choose a city"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 text-md-left"},r.a.createElement("button",{className:"btn btn-info blue"},"Search")))))}),pe="65ccf1982f0663d791aa5b0f4c262250",ye="https://api.openweathermap.org/data/2.5/",he="wi-thunderstorm",Ee="wi-sleet",fe="wi-storm-showers",be="wi-snow",ve="wi-fog",ge="wi-day-sunny",xe="wi-day-fog",we=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={city:"",country:"",temperature:"",humidity:"",pressure:"",minTemp:"",maxTemp:"",feels:"",date:"",rain:"",sunrise:"",sunset:"",visibility:"",description:"",error:"",icon:"",windDirection:"",windSpeed:"",cloudiness:"",image:"",color:"",clicked:!1},e.handleChange=function(a){var t=a.target.city.value;a.preventDefault(),console.log(t),e.fetchdata(t),e.setState({clicked:!0}),a.target.city.value=null},e.get_WeatherIcon=function(a){switch(!0){case a>=200&&a<=232:e.setState({icon:he,image:re.a,color:"#d1c4e9"});break;case a>=300&&a<=221:e.setState({icon:Ee,image:Y.a,color:"#80cbc4"});break;case a>=500&&a<=531:e.setState({icon:fe,image:Q.a,color:"#b0bec5"});break;case a>=600&&a<=622:e.setState({icon:be,image:te.a,color:"#bdbdbd"});break;case a>=700&&a<=781:e.setState({icon:ve,image:$.a,color:"#dcdbdf"});break;case 800===a:e.setState({icon:ge,image:ee.a,color:"#81d4fa"});break;case a>=801&&a<=804:e.setState({icon:xe,image:U.a,color:"#607d8b"});break;default:e.setState({icon:xe,image:U.a,color:"#607d8b"})}},e.fetchdata=function(){var a=Object(k.a)(S.a.mark((function a(t){var n;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.a.get("https://cors-anywhere.herokuapp.com/".concat(ye,"weather?q=").concat(t,"&units=metric&appid=").concat(pe));case 3:n=a.sent,console.log(n.data),n.data&&t?(e.setState({city:n.data.name,country:n.data.sys.country,temperature:n.data.main.temp,minTemp:n.data.main.temp_min,maxTemp:n.data.main.temp_max,feels:n.data.main.feels_like,humidity:n.data.main.humidity,pressure:n.data.main.pressure,windSpeed:n.data.wind.speed,windDirection:n.data.wind.deg,visibility:n.data.visibility,cloudiness:n.data.clouds.all,sunset:n.data.sys.sunset,sunrise:n.data.sys.sunrise,description:n.data.weather[0].description,date:n.data.dt,error:""}),e.get_WeatherIcon(n.data.weather[0].id)):e.setState({city:"",country:"",temperature:"",humidity:"",pressure:"",minTemp:"",maxTemp:"",feels:"",date:"",rain:"",sunrise:"",sunset:"",visibility:"",description:"",icon:"",windDirection:"",windSpeed:"",cloudiness:"",image:"",error:"Loading..."}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),e.setState({city:"",country:"",temperature:"",humidity:"",pressure:"",minTemp:"",maxTemp:"",feels:"",date:"",rain:"",sunrise:"",sunset:"",visibility:"",description:"",icon:"",windDirection:"",windSpeed:"",cloudiness:"",image:"",error:"Please enter proper city name!"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state;e.temperature,e.city,e.country,e.humidity,e.pressure,e.error,e.icon,e.image,e.minTemp,e.maxTemp,e.feels,e.description,e.date,e.rain,e.cloudiness,e.visibility,e.sunrise,e.sunset,e.windSpeed,e.windDirection,e.color,e.clicked;return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement("div",{className:R.a.container},r.a.createElement(ue,{loadweather:this.handleChange}),r.a.createElement(me,{data:this.state})))}}]),t}(n.Component),Se=t(5),ke=t(38),Ne=t.n(ke),_e=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={country:{},date:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;C.a.get("https://api.covid19api.com/summary").then((function(t){console.log(t.data.Countries[a]),e.setState({country:t.data.Countries[a],date:t.data.Countries[a].Date})}))}},{key:"render",value:function(){console.log(this.props.match.params.id);var e=this.state,a=e.country,t=(e.date,a?r.a.createElement(T.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{labels:"People",backgroundColor:["rgba(255,0,0,0.5)","rgba(0,255,0,0.5)","rgba(0,0,255,0.5)"],data:[a.TotalConfirmed,a.TotalRecovered,a.Totaldeaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(a.Country)}}}):r.a.createElement("div",null,"Loading..."));return r.a.createElement("div",{className:Ne.a.container},r.a.createElement(J,null),r.a.createElement("h3",{className:Ne.a.heading,style:{marginTop:"25px"}},a.Country),r.a.createElement(x,{data:this.state}),r.a.createElement("h4",{className:Ne.a.stats},"Statistics"),r.a.createElement("div",{className:Ne.a.bbar},t))}}]),t}(n.Component),Ce=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement(Se.a,{exact:!0,path:"/",component:P}),r.a.createElement(Se.a,{exact:!0,path:"/Weather",component:we}),r.a.createElement(Se.a,{path:"/country/:id",component:_e})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){e.exports={container:"cards_container__15nmr",card:"cards_card__2G__L",infected:"cards_infected__1iUdE",recovered:"cards_recovered__3kxJv",deaths:"cards_deaths__2FTfT"}},37:function(e,a,t){e.exports={container:"Home_container__28DwO",heading:"Home_heading__1vYo8",countries:"Home_countries__3uF9m",stats:"Home_stats__2fFG9"}},38:function(e,a,t){e.exports={bbar:"Country_bbar__3miV0",heading:"Country_heading__1BrL-",stats:"Country_stats__3Yh7J"}},49:function(e,a,t){e.exports=t.p+"static/media/Clouds.83dd9350.jpg"},52:function(e,a,t){e.exports={country:"CountryPicker_country__3vqF6"}},62:function(e,a,t){e.exports=t.p+"static/media/drizzle.ade49d8d.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/foggy.c27cc1c9.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/rain.6391e874.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/sunny.9163b11c.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/snow.28af8fbf.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/thunderstorm.de75e0d6.jpg"},70:function(e,a,t){e.exports={card:"ForeCast_card__38Aep",container:"ForeCast_container__3IOuB"}}},[[112,1,2]]]);
//# sourceMappingURL=main.f6b62351.chunk.js.map