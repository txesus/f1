(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/wiki.88ed8a0b.png"},37:function(e,t,a){e.exports=a.p+"static/media/logo-w.c1ad6f31.png"},40:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),r=a.n(s),c=(a(46),a(8)),i=a(9),o=a(12),u=a(10),m=a(13),d=a(11),h=(a(47),a(28)),p=a(31),v=a(29),E=a(30),f=a(33),C=a.n(f),g=a(35),y=a.n(g),k=a(2),N=a.n(k),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClickCarousel=a.props.handleClickCarousel.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.races,n=t.round,s=t.setActiveRound;t.getCountryFlagFromName;return l.a.createElement("div",null,l.a.createElement("div",{className:"carousel"},l.a.createElement("ul",{className:"progress"},a.map(function(t,a){return l.a.createElement("li",{key:a,className:n===t.round?"active":"",onClick:function(a){e.handleClickCarousel(t.Circuit.Location),s(t.round)}},l.a.createElement("div",{class:"relative"},l.a.createElement("span",{className:n===t.round?"details active":"details"},t.round)))}))))}}]),t}(n.Component),R="https://api.mapbox.com/styles/v1/jesusesteban/ck8hh5aar057y1ioh7udmpcpo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw",_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getMapStyles=function(e){return R},a.state={races:[]},a.props.handleResetZoom(),a.handleClickMarker=a.props.handleClickMarker.bind(Object(m.a)(a)),a.handleClickRaceResults=a.props.handleClickRaceResults.bind(Object(m.a)(a)),a.handleClickCarousel=a.props.handleClickCarousel.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.races,n=t.zoomLevel,s=t.mapCenter,r=t.handleResetZoom,c=t.round,i=t.year,o=t.setActiveRound,u=t.handleClickMarker,m=(t.handleClickRaceResults,t.handleClickCarousel),d=t.getCountryFlagFromName;return l.a.createElement("div",null,l.a.createElement(h.a,{ref:function(t){e.map=t},center:s,zoom:n,className:0===c?"":"show-content"},l.a.createElement(p.a,{attribution:"Jes\xfas Esteban",url:this.getMapStyles(parseInt(i))}),a.map(function(t){var a=N.a.divIcon({html:t.round});return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{icon:a,position:[t.Circuit.Location.lat,t.Circuit.Location.long],onClick:function(a){return e.handleClickMarker(a,t.round)}},l.a.createElement(E.a,null,l.a.createElement("ul",{className:"list-popup"},l.a.createElement("li",{className:"title"},l.a.createElement("span",null,t.raceName)),l.a.createElement("li",null,l.a.createElement("span",null,t.Circuit.Location.locality," "),"/",l.a.createElement("span",null," ",t.Circuit.Location.country)),l.a.createElement("li",{className:"show-results"},l.a.createElement("span",{onClick:function(a){return e.handleClickRaceResults(a,t.round)}},"\ud83c\udfc1 Click to Race results \ud83c\udfc1")),l.a.createElement("li",null,l.a.createElement("a",{href:t.Circuit.url,target:"_blank"},"Wikipedia"))))))}),l.a.createElement(C.a,{position:"topright"},l.a.createElement("div",null,l.a.createElement("div",{style:{marginLeft:"37px",marginTop:"110px",zIndex:"0"}},l.a.createElement("button",{onClick:function(){return r()}},"Reset")))),l.a.createElement(b,{races:a,handleClickMarker:u,handleClickCarousel:m,round:c,setActiveRound:o,getCountryFlagFromName:d})),l.a.createElement("img",{src:y.a,alt:"wiki",className:"img-wiki"}))}}]),t}(n.Component),j=a(17),w=(a(53),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).props.handleResetZoom(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pilots,a=e.races,n=e.qualifyings,s=e.round,r=e.getCountryFlagFromDemonym,c=e.handleResetZoom,i=function(){return a.filter(function(e,t){return e.round===s})[0]};return console.log("RACESSSS",a),l.a.createElement("div",{className:0===s?"content":"content show-content"},l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"close-content"},l.a.createElement("span",{onClick:function(){return c()}},"\u2190 Back")),l.a.createElement("div",{className:"arrows"},l.a.createElement("span",null,"Prev"),l.a.createElement("span",null,"Next")),l.a.createElement("div",{className:"title-content"},i()&&l.a.createElement("h2",null,i().raceName)),l.a.createElement(j.d,null,l.a.createElement(j.b,null,l.a.createElement(j.a,null,"Race Result"),l.a.createElement(j.a,null,"Qualifying Results"),l.a.createElement(j.a,null,"Circuit info")),l.a.createElement(j.c,null,l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Pos.")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Constructor")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Time")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Status")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Points")))),l.a.createElement("div",{className:"st_table"},t.map(function(e,t){return l.a.createElement("div",{className:"st_row",key:t},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.position,".")),l.a.createElement("div",{className:"st_column"},l.a.createElement("img",{src:r(e.Driver.nationality),alt:"country"}),l.a.createElement("a",{href:e.Driver.url,target:"_blank"},e.Driver.familyName)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Constructor.name)),l.a.createElement("div",{className:"st_column"},e.Time?l.a.createElement("span",null,e.Time.time):""),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.status)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.points)))}))))),l.a.createElement(j.c,null,n?l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Pos.")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q1")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q2")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Q3")))),l.a.createElement("div",{className:"st_table"},n.map(function(e,t){return l.a.createElement("div",{className:"st_row",key:t},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.position)),l.a.createElement("div",{className:"st_column"},l.a.createElement("img",{src:r(e.Driver.nationality),alt:"country"}),l.a.createElement("a",{href:e.Driver.url,target:"_blank"},e.Driver.familyName)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q1)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q2)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,e.Q3)))})))):l.a.createElement("div",null,"No data results")),l.a.createElement(j.c,null,l.a.createElement("div",{className:"st_viewport"},l.a.createElement("div",{className:"st_wrap_table"},l.a.createElement("header",{className:"st_table_header"},l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Locality")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Country")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Date")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"Hour")),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,"More info")))),l.a.createElement("div",{className:"st_table"},i()&&l.a.createElement("div",{className:"st_row"},l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,i().Circuit.Location.locality)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,i().Circuit.Location.country)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,i().date)),l.a.createElement("div",{className:"st_column"},l.a.createElement("span",null,i().time?i().time:"No data"," ")),l.a.createElement("div",{className:"st_column"},l.a.createElement("a",{href:i().Circuit.url,target:"_blank"},"Wikipedia"))))))))))}}]),t}(n.Component)),O=a(39),L=a(38),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getOptions=function(){return Object(O.a)(a.state.yearsCircuits).map(function(e){return{value:e.season,label:e.season}})},a.state={yearsCircuits:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://ergast.com/api/f1/seasons.json?limit=100").then(function(e){return e.json()}).then(function(t){var a=t.MRData.SeasonTable.Seasons.reverse();e.setState({yearsCircuits:a})})}},{key:"render",value:function(){var e=this,t=this.getOptions();return l.a.createElement("div",null,!!t[0]&&l.a.createElement("div",{className:"select-year"},l.a.createElement(L.a,{options:t,defaultValue:t[0],onChange:function(t){e.props.handleYearChange({target:{value:t.value}}),e.props.handleResetZoom()}})))}}]),t}(n.Component),D=a(37),S=a.n(D),F=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:S.a,alt:"Logo"}),l.a.createElement(M,{year:this.props.year,handleYearChange:this.props.handleYearChange,handleResetZoom:this.props.handleResetZoom})))}}]),t}(n.Component),Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getCountryFlagFromDemonym=function(t){var a=e.state.countries.find(function(e){return"argentinean"===e.demonym.toLowerCase()?"argentine"===t.toLowerCase():t.toLowerCase()===e.demonym.toLowerCase()});return a?a.flag:"src/images/marker.png"},e.getCountryFlagFromName=function(t){var a=e.state.countries.find(function(e){switch(e.name.toLowerCase()){case"united kingdom of great britain and northern ireland":return"uk"===t.toLowerCase();case"russian federation":return"russia"===t.toLowerCase();case"united states of america":return"usa"===t.toLowerCase();case"united arab emirates":return"uae"===t.toLowerCase();case"korea (republic of)":return"korea"===t.toLowerCase();default:return t.toLowerCase()===e.name.toLowerCase()}});return a?a.flag:t},e.handleYearChange=function(t){var a=t.target.value;e.setState({year:a})},e.setMapCenter=function(t,a){e.setState({zoomLevel:t,mapCenter:a})},e.handleResetZoom=function(){e.setState({zoomLevel:2.2,mapCenter:[36.9837669,-10.2810849],round:0})},e.setActiveRound=function(t){e.setState({round:t})},e.state={year:"2019",races:[],pilots:[],qualifyings:[],circuits:[],circuitsYears:[],results:[],clickCircuit:void 0,zoomLevel:2.2,mapCenter:[22.9837669,-10.2810849],round:0,countries:[]},e.handleClickCarousel=e.handleClickCarousel.bind(Object(m.a)(e)),e.handleClickMarker=e.handleClickMarker.bind(Object(m.a)(e)),e.handleClickRaceResults=e.handleClickRaceResults.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.state.year!==t.year&&this.getData()}},{key:"getData",value:function(){this.getListCircuits(),this.getYearCircuits(),this.getRaces(),this.getPilots(),this.getQualifyings(),this.getCountries()}},{key:"getListCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+".json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuitsYears:t.MRData.RaceTable.Races})})}},{key:"getYearCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/circuits.json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuits:t.MRData.CircuitTable.Circuits})})}},{key:"getRaces",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+".json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({races:t.MRData.RaceTable.Races})})}},{key:"getPilots",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/"+this.state.round+"/results.json").then(function(e){return e.json()}).then(function(t){e.setState({pilots:t.MRData.RaceTable.Races[0].Results})})}},{key:"getQualifyings",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/"+this.state.round+"/qualifying.json").then(function(e){return e.json()}).then(function(t){var a=!!t.MRData.RaceTable.Races[0];e.setState({qualifyings:a?t.MRData.RaceTable.Races[0].QualifyingResults:""})})}},{key:"getCountries",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){return{demonym:e.demonym,flag:e.flag,name:e.name,altSpellings:e.altSpellings}});console.log("COUNTRIES",a),e.setState({countries:a})})}},{key:"handleClickMarker",value:function(e,t){var a=e.latlng,n=a.lat,l=a.lng;this.setMapCenter(15,[n,l])}},{key:"handleClickRaceResults",value:function(e,t){var a=this;this.setState({round:t},function(){a.getPilots(),a.getQualifyings()})}},{key:"handleClickCarousel",value:function(e){var t=e.lat,a=e.long;this.setMapCenter(15,[t,a])}},{key:"render",value:function(){var e=this.state,t=e.year,a=e.round,n=e.circuits,s=e.races,r=e.pilots,c=e.qualifyings,i=e.zoomLevel,o=e.mapCenter;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(F,{handleYearChange:this.handleYearChange,handleResetZoom:this.handleResetZoom}),l.a.createElement(_,{circuits:n,getCountryFlagFromName:this.getCountryFlagFromName,handleClickCarousel:this.handleClickCarousel,handleClickMarker:this.handleClickMarker,handleClickRaceResults:this.handleClickRaceResults,handleResetZoom:this.handleResetZoom,mapCenter:o,races:s,round:a,setActiveRound:this.setActiveRound,setMapCenter:this.setMapCenter,year:t,zoomLevel:i}),l.a.createElement(w,{getCountryFlagFromDemonym:this.getCountryFlagFromDemonym,handleResetZoom:this.handleResetZoom,pilots:r,qualifyings:c,races:s,round:a})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Z,null),document.getElementById("mount")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.66fa6faf.chunk.js.map