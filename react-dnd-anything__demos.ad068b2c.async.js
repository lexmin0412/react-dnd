(self.webpackChunkreact_dnd_anything=self.webpackChunkreact_dnd_anything||[]).push([[406],{77147:function(n,e,t){"use strict";t.r(e);var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"},{id:"9",title:"item 9"},{id:"10",title:"item 10"},{id:"11",title:"item 11"},{id:"12",title:"item 12"},{id:"13",title:"item 13"}];e.default=function(){var v=(0,s.useState)(o),l=d()(v,2),c=l[0],D=l[1],a=function(u){D(u)};return(0,i.jsx)(h.DndAnything,{renderChildren:function(u,f){var m=f.isDragging,_=f.isDraggingOver;return(0,i.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:m?.7:1,borderLeft:_?"10px solid #ff4a4a":0},children:u.title})},direction:"horizontal",list:c,onListUpdate:a})}},28914:function(n,e,t){"use strict";t.r(e);var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"}];e.default=function(){var v=(0,s.useState)(o),l=d()(v,2),c=l[0],D=l[1],a=function(u){D(u)};return(0,i.jsx)(h.DndAnything,{renderChildren:function(u,f){var m=f.isDragging,_=f.isDraggingOver;return(0,i.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:m?.7:1,borderLeft:_?"10px solid #ff4a4a":0},children:u.title})},direction:"horizontal",list:c,onListUpdate:a})}},68909:function(n,e,t){"use strict";t.r(e);var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var v=(0,s.useState)(o),l=d()(v,2),c=l[0],D=l[1],a=function(u){D(u)};return(0,i.jsx)(h.DndAnything,{list:c,onListUpdate:a})}},92631:function(n,e,t){"use strict";t.r(e);var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var v=(0,s.useState)(o),l=d()(v,2),c=l[0],D=l[1],a=function(_){D(_)},y=function(_,O){console.log("handleDragStart",_,O)},u=function(_,O){console.log("handleDragOver",_,O)},f=function(_,O){console.log("handleDrop",_,O)};return(0,i.jsx)(h.DndAnything,{list:c,onListUpdate:a,onDragStart:y,onDragOver:u,onDrop:f})}},75491:function(n,e,t){"use strict";t.r(e);var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var v=(0,s.useState)(o),l=d()(v,2),c=l[0],D=l[1],a=function(u){D(u)};return(0,i.jsx)(h.DndAnything,{direction:"horizontal",list:c,onListUpdate:a})}},59929:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var g=t(27424),d=t.n(g),s=t(67294),h=t(65713),i=t(85893),o=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}],v=function(){var l=(0,s.useState)(o),c=d()(l,2),D=c[0],a=c[1],y=function(m){a(m)},u=function(m,_){var O=document.getElementById("drag-image");if(O){var S;O.innerText="\u81EA\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF\u5185\u5BB9\u53CA\u6837\u5F0F".concat(_==null?void 0:_.title),(S=m.dataTransfer)===null||S===void 0||S.setDragImage(O,40,40)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.DndAnything,{list:D,onListUpdate:y,onDragStart:u}),(0,i.jsx)("div",{id:"drag-image",children:"\u81EA\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF\u5185\u5BB9\u53CA\u6837\u5F0F"})]})}},65713:function(n,e,t){"use strict";t.d(e,{DndAnything:function(){return D}});var g=t(42122),d=t.n(g),s=t(861),h=t.n(s),i=t(27424),o=t.n(i),v=t(67294),l="dnd-item",c=t(85893);function D(a){var y=a.direction,u=y===void 0?"vertical":y,f=a.list,m=a.onListUpdate,_=a.onDragStart,O=a.onDragOver,S=a.onDrop,B=a.renderChildren,F=a.draggingItemStyle,b=a.draggingOverStyle,N=(0,v.useState)(null),R=o()(N,2),j=R[0],W=R[1],z=(0,v.useState)(null),K=o()(z,2),P=K[0],p=K[1],H=(0,v.useMemo)(function(){var x=[l];return x.join(" ")},[]),X=function(r,E){var A;r==null||(A=r.dataTransfer)===null||A===void 0||A.setData("id",E.id),W(E),_&&_(r,E)},$=function(r,E){r.preventDefault(),(P==null?void 0:P.id)!==E.id&&p(E),O&&O(r,E)},G=function(r,E){var A,T=r==null||(A=r.dataTransfer)===null||A===void 0?void 0:A.getData("id");if(E.id!==T){var L=h()(f),C=L.findIndex(function(U){return U.id===T}),I=L[C];if(C>-1){L.splice(C,1);var M=L.findIndex(function(U){return U.id===E.id});L.splice(M,0,I)}W(null),p(null),m(L),S&&S(r,E)}},J=function(r){var E=function(M){var U=[l];return U.join(" ")},A=E(r),T=(P==null?void 0:P.id)===r.id,L=(j==null?void 0:j.id)===r.id,C=d()(d()({},T?b:{}),L?F:{});return(0,c.jsx)("div",{className:A,onDragStart:function(M){return X(M,r)},onDragOver:function(M){return $(M,r)},onDrop:function(M){return G(M,r)},draggable:!0,style:d()({},C),children:B?B(r,{isDragging:L,isDraggingOver:T}):r.title},r.id)},Q=(0,v.useMemo)(function(){if(u==="horizontal")return{display:"flex",flexWrap:"wrap"}},[u]);return(0,c.jsx)("div",{className:H,style:Q,children:f?f.map(function(x){return J(x)}):(0,c.jsx)("div",{children:"\u6682\u65E0\u6570\u636E"})})}},63405:function(n,e,t){var g=t(73897);function d(s){if(Array.isArray(s))return g(s)}n.exports=d,n.exports.__esModule=!0,n.exports.default=n.exports},79498:function(n){function e(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},42281:function(n){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},861:function(n,e,t){var g=t(63405),d=t(79498),s=t(86116),h=t(42281);function i(o){return g(o)||d(o)||s(o)||h()}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports}}]);