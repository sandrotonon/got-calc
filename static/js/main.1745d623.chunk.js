(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(47)},28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(3),i=n.n(o),r=(n(28),n(17)),l=n(18),c=n(21),u=n(19),m=n(22),f=(n(29),n(11)),d=n.n(f),p=n(12),h=n.n(p),E=n(20),g=[10,10,10,10,10,10,7],v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).createEpisodeList=function(){for(var e=[],t=0;t<g[n.state.season];t++)e.push(n.createEpisodeButton(t));return e},n.setCurrentSeason=function(e){n.setState(function(t,n){return{season:e}}),d.a.scroller.scrollTo("episodes",{duration:1e3,smooth:"easeInOutCubic"})},n.setCurrentEpisode=function(e){n.setState(function(t,n){return{episode:e}}),d.a.scroller.scrollTo("timeleft",{duration:1e3,smooth:"easeInOutCubic"})},n.createSeasonsList=function(){for(var e=[],t=1;t<=g.length;t++)e.push(n.createSeasonButton(t));return e},n.createEpisodeList=function(){for(var e=[],t=1;t<=g[n.state.season-1];t++)e.push(n.createEpisodeButton(t));return e},n.createSeasonButton=function(e){return s.a.createElement("button",{className:n.state.season===e?"active":"",key:"season-"+e,onClick:function(){return n.setCurrentSeason(e)}},"Staffel "+e)},n.createEpisodeButton=function(e){return s.a.createElement("button",{className:n.state.episode===e?"active":"",key:"episode-"+e,onClick:function(){return n.setCurrentEpisode(e)}},"Folge "+e)},n.getRemainingEpsisodeCount=function(){for(var e=0,t=n.state.season-1;t<g.length;t++)e+=g[t];return e-n.state.episode},n.getTimeleft=function(){var e=n.getRemainingEpsisodeCount(),t=h()("15.04.2019","DD.MM.YYYY"),a=h()().subtract(1,"days"),o=t.diff(a,"days"),i=o/e,r=e%o;return i<1?s.a.createElement("p",null,"Du musst pro Tag eine Folge schauen, musst aber ",r," Folgen aufholen"):i>1?s.a.createElement("p",null,"Wenn du pro Tag eine Folge schaust wirst du vor dem Staffelfinale fertig."):1===i?s.a.createElement("p",null,"Wenn du pro Tag eine Folge schaust wirst du genau zum Staffelfinale fertig."):void 0},n.state={season:0,episode:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E.Helmet,null,s.a.createElement("title",null,"GoT Calculator"),s.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),s.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),s.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),s.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),s.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#000000"}),s.a.createElement("meta",{name:"msapplication-TileColor",content:"#000000"}),s.a.createElement("meta",{name:"theme-color",content:"#000000"})),s.a.createElement("div",{className:"section section-one"},s.a.createElement("h2",null,"Aktuelle Staffel"),s.a.createElement("div",null,this.createSeasonsList())),s.a.createElement("div",{className:"section section-episodes",id:"episodes"},s.a.createElement("h2",null,"Zuletzt gesehene Folge"),s.a.createElement("div",null,0!==this.state.season&&this.createEpisodeList(),0===this.state.season&&s.a.createElement("p",null,"Bitte w\xe4hle zun\xe4chst eine Staffel aus."))),s.a.createElement("div",{className:"section section-timeleft",id:"timeleft"},s.a.createElement("h2",null,"Anzahl verbleibende Folgen"),0!==this.state.season&&0!==this.state.episode&&this.getTimeleft(),(0===this.state.season||0===this.state.episode)&&s.a.createElement("p",null,"Bitte w\xe4hle zun\xe4chst eine Staffel und Folge aus.")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.1745d623.chunk.js.map