(this["webpackJsonpdice-game"]=this["webpackJsonpdice-game"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),l=n.n(o),r=(n(13),n(1)),c=n(2),s=n(3),h=n(5),u=n(4),d=(n(14),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("i",{className:"Dice fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling&&"wobble")})}}]),n}(a.Component)),f=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={dice1:"one",dice2:"one",rolling:!1},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"roll",value:function(){var e=this,t=this.props.sides[Math.floor(Math.random()*this.props.sides.length)],n=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];this.setState({dice1:t,dice2:n,rolling:!0}),setTimeout((function(){e.setState({rolling:!1})}),1e3)}},{key:"handleClick",value:function(){this.roll()}},{key:"render",value:function(){return i.a.createElement("div",{className:"Rolldice"},i.a.createElement("div",{className:"Roll-Container"},i.a.createElement(d,{face:this.state.dice1,rolling:this.state.rolling}),i.a.createElement(d,{face:this.state.dice2,rolling:this.state.rolling})),i.a.createElement("button",{onClick:this.handleClick,disabled:this.state.rolling},this.state.rolling?"Rolling...":"Click!"))}}]),n}(a.Component));f.defaultProps={sides:["one","two","three","four","five","six"]};var m=f;n(16);var p=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a501f7f0.chunk.js.map