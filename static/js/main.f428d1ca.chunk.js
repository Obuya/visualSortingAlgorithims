(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(4),c=n(5),a=n(8),u=n(7),s=n(0),i=n.n(s),l=n(6),f=n.n(l);n(13),n(14);function h(t){var e=[];if(t.length<=1)return t;var n=t.slice();return g(t,0,t.length-1,n,e),e}function g(t,e,n,r,o){if(e!==n){var c=Math.floor((e+n)/2);g(r,e,c,t,o),g(r,c+1,n,t,o),function(t,e,n,r,o,c){var a=e,u=e,s=n+1;for(;u<=n&&s<=r;)c.push([u,s]),c.push([u,s]),o[u]<=o[s]?(c.push([a,o[u]]),t[a++]=o[u++]):(c.push([a,o[s]]),t[a++]=o[s++]);for(;u<=n;)c.push([u,u]),c.push([u,u]),c.push([a,o[u]]),t[a++]=o[u++];for(;s<=r;)c.push([s,s]),c.push([s,s]),c.push([a,o[s]]),t[a++]=o[s++]}(t,e,c,n,r,o)}}var m=n(1),b=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).newArray=function(){r.setState({array:y()}),console.log(r.state.array)},r.state={array:y()},r}return Object(c.a)(n,[{key:"bubbleSort",value:function(){for(var t=function(t){var e=[];return t.length<=1?t:(function(t,e){var n;do{n=!1;for(var r=0;r<e.length-1;r++)if(e[r]>e[r+1]){var o=e[r];e[r]=e[r+1],e[r+1]=o,t.push([r,r+1]),n=!0}}while(n)}(e,t.slice()),e)}(this.state.array),e=function(e){var n=document.getElementsByClassName("rec"),o=Object(r.a)(t[e],2),c=o[0],a=o[1],u=n[a].style,s=n[c].style;setTimeout((function(){u.backgroundColor="#6547c9",s.backgroundColor="#6547c9",setTimeout((function(){var t=n[a].offsetHeight;n[a].style.height="".concat(n[c].offsetHeight,"px"),s.height="".concat(t,"px")}),1*(e+1))}),1*e)},n=0;n<t.length;n++)e(n);console.log("bubbleSort"),console.log(this.state.array)}},{key:"quickSort",value:function(){console.log("quickSort")}},{key:"mergeSort",value:function(){for(var t=h(this.state.array),e=function(e){var n=document.getElementsByClassName("rec");if(e%3!==2){var o=Object(r.a)(t[e],2),c=o[0],a=o[1],u=n[c].style,s=n[a].style,i=e%3===0?"red":"#6547c9";setTimeout((function(){u.backgroundColor=i,s.backgroundColor=i}),1*e)}else setTimeout((function(){var o=Object(r.a)(t[e],2),c=o[0],a=o[1];n[c].style.height="".concat(a,"px")}),1*e)},n=0;n<t.length;n++)e(n)}},{key:"render",value:function(){var t=this;return document.getElementById("genArray").onclick=function(){return t.newArray()},document.getElementById("bubbleSort").onclick=function(){return t.bubbleSort()},document.getElementById("quickSort").onclick=function(){return t.quickSort()},document.getElementById("mergeSort").onclick=function(){return t.mergeSort()},Object(m.jsx)("div",{className:"game",children:this.state.array.map((function(t,e){return Object(m.jsx)("div",{className:"rec",style:{backgroundColor:"#6547c9",height:"".concat(t,"px"),bottom:"10px"}},e)}))})}}]),n}(i.a.Component);function y(){for(var t,e,n=[],r=0;r<100;r++)n.push((t=5,e=750,Math.floor(Math.random()*(e-t+1)+t)));return n}f.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f428d1ca.chunk.js.map