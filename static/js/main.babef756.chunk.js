(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/logo-w.c1ad6f31.png"},37:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=(a(43),a(8)),l=a(9),s=a(11),u=a(10),m=a(12),h=(a(44),a(22)),p=a(26),d=a(29),f=a(27),v=a(28),b=a(31),E=a.n(b),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={circuits:[]},a.handleClickMarker=a.handleClickMarker.bind(Object(h.a)(a)),a.props.handleResetZoom(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleClickMarker",value:function(e){var t=e.latlng,a=t.lat,n=t.lng;this.props.setMapCenter(15,[a,n])}},{key:"getPolyLineArray",value:function(){return this.props.circuits.map(function(e){return[e.Location.lat,e.Location.long]})}},{key:"render",value:function(){var e=this,t=this.props,a=t.circuits,n=t.zoomLevel,i=t.mapCenter,c=t.handleResetZoom;return r.a.createElement("div",null,r.a.createElement(p.a,{ref:function(t){e.map=t},center:i,zoom:n},r.a.createElement(d.a,{attribution:"Jes\xfas Esteban",url:"https://api.mapbox.com/styles/v1/jesusesteban/ck6gzx8x604xk1ipgqkwomp1g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw"}),a.map(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{position:[t.Location.lat,t.Location.long],onClick:function(t){return e.handleClickMarker(t)}},r.a.createElement(v.a,null,r.a.createElement("ul",{className:"list-popup"},r.a.createElement("li",{className:"title"},r.a.createElement("span",null,t.circuitName)),r.a.createElement("li",null,r.a.createElement("span",null,t.Location.locality," "),"/",r.a.createElement("span",null," ",t.Location.country)),r.a.createElement("li",null,r.a.createElement("a",{href:t.url,target:"_blank"},"Wikipedia"))))))}),r.a.createElement(E.a,{position:"topright"},r.a.createElement("div",null,r.a.createElement("div",{style:{marginLeft:"37px",marginTop:"37px"}},r.a.createElement("button",{onClick:function(){return c()}},"Reset Zoom"))))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.circuitsYears;return r.a.createElement("div",null,r.a.createElement("div",{className:"list-circuits"},r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"#"},e.raceName))}))))}}]),t}(n.Component),C=(n.Component,a(36)),j=a(35),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getOptions=function(){return Object(C.a)(a.state.yearsCircuits).map(function(e){return{value:e.season,label:e.season}})},a.state={yearsCircuits:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://ergast.com/api/f1/seasons.json?limit=100").then(function(e){return e.json()}).then(function(t){var a=t.MRData.SeasonTable.Seasons.reverse();e.setState({yearsCircuits:a})})}},{key:"render",value:function(){var e=this,t=this.getOptions();return r.a.createElement("div",null,r.a.createElement("div",{className:"select-year"},r.a.createElement(j.a,{options:t,onChange:function(t){e.props.handleYearChange({target:{value:t.value}}),e.props.handleResetZoom()}})))}}]),t}(n.Component),O=a(34),R=a.n(O),w=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:R.a,alt:"Logo"}),r.a.createElement(k,{year:this.props.year,handleYearChange:this.props.handleYearChange,handleResetZoom:this.props.handleResetZoom})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={circuits:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.circuits;return r.a.createElement("div",null,r.a.createElement("div",{className:"carousel"},r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",null,e.circuitName))}))))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleYearChange=function(t){var a=t.target.value;e.setState({year:a})},e.setMapCenter=function(t,a){e.setState({zoomLevel:t,mapCenter:a})},e.handleResetZoom=function(){e.setState({zoomLevel:2.2,mapCenter:[22.9837669,-10.2810849]})},e.state={year:"2019",circuits:[],circuitsYears:[],results:[],clickCircuit:void 0,zoomLevel:2.2,mapCenter:[22.9837669,-10.2810849]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.state.year!==t.year&&this.getData()}},{key:"getData",value:function(){this.getListCircuits(),this.getYearCircuits()}},{key:"getListCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+".json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuitsYears:t.MRData.RaceTable.Races})})}},{key:"getYearCircuits",value:function(){var e=this;fetch("https://ergast.com/api/f1/"+this.state.year+"/circuits.json?limit=100").then(function(e){return e.json()}).then(function(t){e.setState({circuits:t.MRData.CircuitTable.Circuits})})}},{key:"render",value:function(){var e=this.state,t=e.year,a=e.circuits,n=e.zoomLevel,i=e.mapCenter;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(w,{handleYearChange:this.handleYearChange,handleResetZoom:this.handleResetZoom}),r.a.createElement(y,{year:t,circuits:a,handleResetZoom:this.handleResetZoom,zoomLevel:n,mapCenter:i,setMapCenter:this.setMapCenter}),r.a.createElement(L,{year:t,circuits:a})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("mount")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.babef756.chunk.js.map