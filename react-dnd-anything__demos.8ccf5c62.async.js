"use strict";(self.webpackChunkreact_dnd_anything=self.webpackChunkreact_dnd_anything||[]).push([[406],{9915:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"},{id:"9",title:"item 9"},{id:"10",title:"item 10"},{id:"11",title:"item 11"},{id:"12",title:"item 12"},{id:"13",title:"item 13"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(i){D(i)};return(0,n.jsx)(g.DndAnything,{renderChildren:function(i,l){var s=l.isDragging,r=l.isDraggingOver;return(0,n.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:s?.7:1,borderLeft:r?"10px solid #ff4a4a":0},children:i.title})},direction:"horizontal",list:_,onListUpdate:E})}},67233:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"},{id:"9",title:"item 9"},{id:"10",title:"item 10"},{id:"11",title:"item 11"},{id:"12",title:"item 12"},{id:"13",title:"item 13"}],h=[{id:"1-1",title:"item 1-1"},{id:"2-1",title:"item 2"},{id:"3-1",title:"item 3"},{id:"4-1",title:"item 4"},{id:"5-1",title:"item 5"},{id:"6-1",title:"item 6"},{id:"7-1",title:"item 7"},{id:"8-1",title:"item 8"},{id:"9-1",title:"item 9"},{id:"10-1",title:"item 10"},{id:"11-1",title:"item 11"},{id:"12-1",title:"item 12"},{id:"13-1",title:"item 13"}];e.default=function(){var d=(0,m.useState)([{id:"data1",list:a},{id:"data2",list:h}]),_=u()(d,2),D=_[0],E=_[1];return(0,n.jsx)("div",{children:(0,n.jsx)(g.DndAnythingMultiple,{style:{border:"1px solid black",marginBottom:"20px",padding:"20px"},renderChildren:function(i,l){var s=l.isDragging,r=l.isDraggingOver;return(0,n.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:s?.7:1,borderLeft:r?"10px solid #ff4a4a":0},children:i.title})},direction:"horizontal",dataGroup:D,onDataGroupChange:function(i){return E(i)}})})}},67574:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"},{id:"9",title:"item 9"},{id:"10",title:"item 10"},{id:"11",title:"item 11"},{id:"12",title:"item 12"},{id:"13",title:"item 13"}],h=[{id:"1-1",title:"item 1-1"},{id:"2-1",title:"item 2"},{id:"3-1",title:"item 3"},{id:"4-1",title:"item 4"},{id:"5-1",title:"item 5"},{id:"6-1",title:"item 6"},{id:"7-1",title:"item 7"},{id:"8-1",title:"item 8"},{id:"9-1",title:"item 9"},{id:"10-1",title:"item 10"},{id:"11-1",title:"item 11"},{id:"12-1",title:"item 12"},{id:"13-1",title:"item 13"}];e.default=function(){var d=(0,m.useState)([{id:"group1",title:"Group 1",list:a},{id:"group2",title:"Group 2",list:h}]),_=u()(d,2),D=_[0],E=_[1];return(0,n.jsx)(g.DndAnythingMultiple,{style:{border:"1px solid black",marginBottom:"20px",padding:"20px",marginRight:"10px"},renderGroup:function(i,l){var s=l.group;return(0,n.jsxs)(n.Fragment,{children:[s.title&&(0,n.jsx)("div",{style:{marginBottom:"10px",fontWeight:"bold"},children:s.title}),i]})},renderChildren:function(i,l){var s=l.isDragging,r=l.isDraggingOver;return(0,n.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:s?.7:1,borderLeft:r?"10px solid #ff4a4a":0},children:i.title})},direction:"horizontal",dataGroup:D,onDataGroupChange:function(i){return E(i)}})}},53281:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"},{id:"9",title:"item 9"},{id:"10",title:"item 10"},{id:"11",title:"item 11"},{id:"12",title:"item 12"},{id:"13",title:"item 13"}],h=[{id:"1-1",title:"item 1-1"},{id:"2-1",title:"item 2"},{id:"3-1",title:"item 3"},{id:"4-1",title:"item 4"},{id:"5-1",title:"item 5"},{id:"6-1",title:"item 6"},{id:"7-1",title:"item 7"},{id:"8-1",title:"item 8"},{id:"9-1",title:"item 9"},{id:"10-1",title:"item 10"},{id:"11-1",title:"item 11"},{id:"12-1",title:"item 12"},{id:"13-1",title:"item 13"}];e.default=function(){var d=(0,m.useState)([{id:"data1",list:a},{id:"data2",list:h}]),_=u()(d,2),D=_[0],E=_[1];return(0,n.jsx)(g.DndAnythingMultiple,{wrapperClassName:"flex items-center justify-center",style:{border:"1px solid black",marginBottom:"20px",padding:"20px",marginRight:"10px"},renderChildren:function(i,l){var s=l.isDragging,r=l.isDraggingOver;return(0,n.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:s?.7:1,borderLeft:r?"10px solid #ff4a4a":0},children:i.title})},direction:"horizontal",dataGroup:D,onDataGroupChange:function(i){return E(i)}})}},43593:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"},{id:"4",title:"item 4"},{id:"5",title:"item 5"},{id:"6",title:"item 6"},{id:"7",title:"item 7"},{id:"8",title:"item 8"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(i){D(i)};return(0,n.jsx)(g.DndAnything,{renderChildren:function(i,l){var s=l.isDragging,r=l.isDraggingOver;return(0,n.jsx)("div",{style:{display:"flex",padding:"10px",height:"20px",lineHeight:"20px",margin:"0 10px",borderRadius:"6px",background:"#2688fa",color:"#fff",opacity:s?.7:1,borderLeft:r?"10px solid #ff4a4a":0},children:i.title})},direction:"horizontal",list:_,onListUpdate:E})}},98084:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(i){D(i)};return(0,n.jsx)(g.DndAnything,{list:_,onListUpdate:E})}},81637:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(i){D(i)};return(0,n.jsx)(g.DndAnything,{draggable:!1,list:_,onListUpdate:E})}},24479:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(r){D(r)},c=function(r,O){console.log("handleDragStart",r,O)},i=function(r,O){console.log("handleDragOver",r,O)},l=function(r,O){console.log("handleDrop",r,O)};return(0,n.jsx)(g.DndAnything,{list:_,onListUpdate:E,onDragStart:c,onDragOver:i,onDrop:l})}},38115:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(85893),a=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var h=(0,m.useState)(a),d=u()(h,2),_=d[0],D=d[1],E=function(i){D(i)};return(0,n.jsx)(g.DndAnything,{direction:"horizontal",list:_,onListUpdate:E})}},43017:function(v,e,t){t.r(e);var o=t(27424),u=t.n(o),m=t(67294),g=t(31081),n=t(28533),a=t(85893),h=[{id:"1",title:"item 1"},{id:"2",title:"item 2"},{id:"3",title:"item 3"}];e.default=function(){var d=(0,m.useState)(h),_=u()(d,2),D=_[0],E=_[1],c=function(s){E(s)},i=function(s,r){var O=document.getElementById("drag-image");if(O){var f;O.innerText="\u81EA\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF\u5185\u5BB9\u53CA\u6837\u5F0F".concat(r==null?void 0:r.title),(f=s.dataTransfer)===null||f===void 0||f.setDragImage(O,40,40)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.DndAnything,{list:D,onListUpdate:c,onDragStart:i}),(0,a.jsx)("div",{id:"drag-image",children:"\u81EA\u5B9A\u4E49\u62D6\u62FD\u56FE\u50CF\u5185\u5BB9\u53CA\u6837\u5F0F"})]})}}}]);
