(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/wiki.88ed8a0b.png"},37:function(e,t,a){e.exports=a.p+"static/media/logo-w.c1ad6f31.png"},40:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(14),c=a.n(s),r=(a(46),a(8)),i=a(9),o=a(11),m=a(10),u=a(16),d=a(12),p=(a(47),a(28)),h=a(31),v=a(29),E=a(30),f=a(33),y=a.n(f),C=a(35),k=a.n(C),g=a(2),N=a.n(g),b="https://api.mapbox.com/styles/v1/jesusesteban/ck70xfbac03ik1irtiv3q29vp/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",j="https://api.mapbox.com/styles/v1/jesusesteban/ck73izmsr2bkh1inhs7yrxrv6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",_="https://api.mapbox.com/styles/v1/jesusesteban/ck73jms8z2c6p1inh6yu5krp1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",w="https://api.mapbox.com/styles/v1/jesusesteban/ck73jp92g2cb01iqwmgk74gw9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",R="https://api.mapbox.com/styles/v1/jesusesteban/ck73jk5410aoz1imwgf0lx62u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",x="https://api.mapbox.com/styles/v1/jesusesteban/ck6sg2kb86pin1it43e343zsz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",M="https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getMapStyles=function(e){var t="";switch(!0){case e<=1959:t=b;break;case e>=1960&&e<=1969:t=j;break;case e>=1970&&e<=1979:t=_;break;case e>=1980&&e<=1989:t=w;break;case e>=1990&&e<=1999:t=R;break;case e>=2e3&&e<=2009:t=x;break;case e>=2010&&e<=2019:case e>=2020&&e<=2029:default:t=M}return t},a.state={races:[]},a.props.handleResetZoom(),a.handleClickMarker=a.props.handleClickMarker.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.races,n=t.zoomLevel,s=t.mapCenter,c=t.handleResetZoom,r=t.round,i=t.year;return l.a.createElement("div",null,l.a.createElement(p.a,{ref:function(t){e.map=t},center:s,zoom:n,className:0===r?"":"show-content"},l.a.createElement(h.a,{attribution:"Jes\xfas Esteban",url:this.getMapStyles(parseInt(i))}),a.map(function(t){var a=N.a.divIcon({html:t.round});return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{icon:a,position:[t.Circuit.Location.lat,t.Circuit.Location.long],onClick:function(a){return e.handleClickMarker(a,t.round)}},l.a.createElement(E.a,null,l.a.createElement("ul",{className:"list-popup"},l.a.createElement("li",{className:"title"},l.a.createElement("span",null,t.raceName)),l.a.createElement("li",null,l.a.createElement("span",null,t.Circuit.Location.locality," "),"/",l.a.createElement("span",null," ",t.Circuit.Location.country)),l.a.createElement("li",null,l.a.createElement("a",{href:t.Circuit.url,target:"_blank"},"Wikipedia"))))))}),l.a.createElement(y.a,{position:"topright"},l.a.createElement("div",null,l.a.createElement("div",{style:{marginLeft:"37px",marginTop:"110px",zIndex:"0"}},l.a.createElement("button",{onClick:function(){return c()}},"Reset"))))),l.a.createElement("img",{src:k.a,alt:"wiki",className:"img-wiki"}))}}]),t}(n.Component),O=a(17),z=(a(53),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pilots,a=e.races,n=e.qualifyings,s=e.round,c=e.getCountryFlagFromDemonym;e.getCountryFlagFromName;console.log("pilots",t);var r=function(){return a.filter(function(e,t){return e.round===s})[0]};return console.log("RACESSSS",a),l.a.createElement("div",{className:0===s?"content":"content show-content"},l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"arrows"},l.a.createElement("span",null,"Prev"),l.a.createElement("span",null,"Next")),l.a.createElement("div",{className:"title-content"},r()&&l.a.createElement("h2",null,r().raceName)),l.a.createElement(O.d,null,l.a.createElement(O.b,null,l.a.createElement(O.a,null,"Race Result"),l.a.createElement(O.a,null,"Qualifying Results"),l.a.createElement(O.a,null,"Circuit info")),l.a.createElement(O.c,null,l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Pos.")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Constructor")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Time")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Status")))),l.a.createElement("div",{className:"st_table"},t.map(function(e,t){return l.a.createElement("div",{className:"st_row",key:t},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.position,".")),l.a.createElement("div",{className:"st_column"},l.a.createElement("img",{src:c(e.Driver.nationality)}),l.a.createElement("a",{href:e.Driver.url,target:"_blank"},e.Driver.familyName)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Constructor.name)),l.a.createElement("div",{className:"st_column"},e.Time?l.a.createElement("span",null,e.Time.time):""),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.status)))}))))),l.a.createElement(O.c,null,n?l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Pos.")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q1")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q2")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q3")))),l.a.createElement("div",{className:"st_table"},n.map(function(e,t){return l.a.createElement("div",{className:"st_row",key:t},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.position)),l.a.createElement("div",{className:"st_column"},l.a.createElement("a",{href:e.Driver.url,target:"_blank"},e.Driver.familyName)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q1)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q2)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q3)))})))):l.a.createElement("div",null,"No data results")),l.a.createElement(O.c,null,l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Locality")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Country")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Date")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Hour")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"More info")))),l.a.createElement("div",{className:"st_table"},r()&&l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,r().Circuit.Location.locality)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,r().Circuit.Location.country)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,r().date)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,r().time?r().time:"No data"," ")),l.a.createElement("div",{className:"st_column"},l.a.createElement("a",{href:r().Circuit.url,target:"_blank"},"Wikipedia"))))))))))}}]),t}(n.Component)),J=a(39),S=a(38),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getOptions=function(){return Object(J.a)(a.state.yearsCircuits).map(function(e){return{value:e.season,label:e.season}})},a.state={yearsCircuits:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://ergast.com/api/f1/seasons.json?limit=100").then(function(e){return e.json()}).then(function(t){var a=t.MRData.SeasonTable.Seasons.reverse();e.setState({yearsCircuits:a})})}},{key:"render",value:function(){var e=this,t=this.getOptions();return l.a.createElement("div",null,!!t[0]&&l.a.createElement("div",{className:"select-year"},l.a.createElement(S.a,{options:t,defaultValue:t[0],onChange:function(t){e.props.handleYearChange({target:{value:t.value}}),e.props.handleResetZoom()}})))}}]),t}(n.Component),D=a(37),X=a.n(D),T=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:X.a,alt:"Logo"}),l.a.createElement(Y,{year:this.props.year,handleYearChange:this.props.handleYearChange,handleResetZoom:this.props.handleResetZoom})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClickCarousel=a.props.handleClickCarousel.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.races,n=t.round,s=t.setActiveRound;return l.a.createElement("div",null,l.a.createElement("div",{className:"carousel"},l.a.createElement("ul",{id:"timeline"},a.map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("input",{class:"radio",type:"radio",checked:n===t.round?"checked":""}),l.a.createElement("div",{class:"relative"},l.a.createElement("span",{className:n===t.round?"details active":"details",onClick:function(a){e.handleClickCarousel(t.Circuit.Location),s(t.round)}},t.round," - ",t.raceName),l.a.createElement("span",{class:"circle"})))}))))}}]),t}(n.Component),V=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getCountryFlagFromDemonym=function(t){var a=e.state.countries.find(function(e){return"argentinean"===e.demonym.toLowerCase()?"argentine"===t.toLowerCase():t.toLowerCase()===e.demonym.toLowerCase()});return a?a.flag:"src/images/marker.png"},e.handleYearChange=function(t){var a=t.target.value;e.setState({year:a})},e.setMapCenter=function(t,a){e.setState({zoomLevel:t,mapCenter:a})},e.handleResetZoom=function(){e.setState({zoomLevel:2.2,mapCenter:[36.9837669,-10.2810849],round:0})},e.setActiveRound=function(t){e.setState({round:t})},e.state={year:"2019",races:[],pilots:[],qualifyings:[],circuits:[],circuitsYears:[],results:[],clickCircuit:void 0,zoomLevel:2.2,mapCenter:[22.9837669,-10.2810849],round:0,countries:[]},e.handleClickCarousel=e.handleClickCarousel.bind(Object(u.a)(e)),e.handleClickMarker=e.handleClickMarker.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.state.year!==t.year&&this.getData()}},{key:"getData",value:function(){this.getListCircuits(),this.getYearCircuits(),this.getRaces(),this.getPilots(),this.getQualifyings(),this.getCountries()}},{key:"getListCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+".json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuitsYears:t.MRData.RaceTable.Races})})}},{key:"getYearCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/circuits.json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuits:t.MRData.CircuitTable.Circuits})})}},{key:"getRaces",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+".json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({races:t.MRData.RaceTable.Races})})}},{key:"getPilots",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/"+this.state.round+"/results.json").then(function(e){return e.json()}).then(function(t){e.setState({pilots:t.MRData.RaceTable.Races[0].Results})})}},{key:"getQualifyings",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/"+this.state.round+"/qualifying.json").then(function(e){return e.json()}).then(function(t){var a=!!t.MRData.RaceTable.Races[0];e.setState({qualifyings:a?t.MRData.RaceTable.Races[0].QualifyingResults:""})})}},{key:"getCountries",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){return{demonym:e.demonym,flag:e.flag,name:e.name,altSpellings:e.altSpellings}});console.log("COUNTRIES",a),e.setState({countries:a})})}},{key:"handleClickMarker",value:function(e,t){var a=this,n=e.latlng,l=n.lat,s=n.lng;this.setMapCenter(15,[l,s]),this.setState({round:t},function(){a.getPilots(),a.getQualifyings()})}},{key:"handleClickCarousel",value:function(e){var t=e.lat,a=e.long;this.setMapCenter(15,[t,a])}},{key:"render",value:function(){var e=this.state,t=e.year,a=e.round,n=e.circuits,s=e.races,c=e.pilots,r=e.qualifyings,i=e.zoomLevel,o=e.mapCenter;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(T,{handleYearChange:this.handleYearChange,handleResetZoom:this.handleResetZoom}),l.a.createElement(I,{year:t,circuits:n,races:s,handleResetZoom:this.handleResetZoom,zoomLevel:i,mapCenter:o,setMapCenter:this.setMapCenter,handleClickMarker:this.handleClickMarker,round:a,setActiveRound:this.setActiveRound}),l.a.createElement(z,{round:a,pilots:c,qualifyings:r,races:s,getCountryFlagFromDemonym:this.getCountryFlagFromDemonym}),l.a.createElement(L,{races:s,handleClickMarker:this.handleClickMarker,handleClickCarousel:this.handleClickCarousel,round:a,setActiveRound:this.setActiveRound})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(V,null),document.getElementById("mount")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.629f8699.chunk.js.map