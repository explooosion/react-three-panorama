(this["webpackJsonpreact-three-panorama"]=this["webpackJsonpreact-three-panorama"]||[]).push([[0],{18:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return o}));var r=t(10),a="FETCH_EXAMPLE",c="FETCH_EXAMPLE_SUCCESS",o="FETCH_EXAMPLE_ERROR",i={lists:[],loading:!1,error:null};n.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c:return Object(r.a)(Object(r.a)({},e),{},{lists:n.payload,loading:!1});case o:return Object(r.a)(Object(r.a)({},e),{},{error:n.payload,loading:!1});default:return e}}},26:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(7),a=t.n(r),c=t(24),o=a.a.mark(s),i=["example"].map((function(e){return t(75)("./".concat(e)).default()}));function s(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(i);case 2:case"end":return e.stop()}}),o)}},47:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t(7),a=t.n(r),c=t(24),o=t(18),i=t(16),s=t(36),u=t.n(s),d=function(){return function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:o.a});case 2:return e.next=4,u.a.get("").then((function(e){return n({type:o.c,payload:e.data})})).catch((function(e){return n({type:o.b,payload:e})}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},l=a.a.mark(b),p=a.a.mark(f);function b(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(c.b)(d);case 3:if(200!==(e=n.sent).status){n.next=9;break}return n.next=7,Object(c.c)({type:o.c,payload:e.data});case 7:n.next=11;break;case 9:return n.next=11,Object(c.c)({type:o.b,payload:e.data});case 11:n.next=0;break;case 13:case"end":return n.stop()}}),l)}function f(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(o.a,b);case 2:case"end":return e.stop()}}),p)}},75:function(e,n,t){var r={"./":26,"./example":47,"./example.js":47,"./index":26,"./index.js":26};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=75},93:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u,d=t(23),l=t(0),p=t(29),b=t.n(p),f=t(60),m=t(21),j=t(10),h=t(9),x=t(58),w=t(49),O=t(27),g=t(61),v=t(7),y=t.n(v),M=t(16),k=t(11),E=t(52),P=t.n(E),_=t(53),S=t.n(_),A=t(54),C=t(5),H=0,F=m.c.main(r||(r=Object(d.a)(["\n"])));function L(e){var n=Object(l.useRef)(null),t=Object(l.useRef)(null),r=e.images,d=e.autoPlay,p=e.resourceMode,b=function(){var e=Object(M.a)(y.a.mark((function e(){var n,t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(A.isArray)(r)){e.next=6;break}return e.next=3,m(r);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,j(r);case 8:n=e.sent;case 9:t=[],n.forEach((function(e){return t.push(new k.MeshBasicMaterial({map:e}))})),(c=new k.Mesh(new k.BoxGeometry(50,50,50),t)).geometry.scale(1,1,-1),a.add(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(new k.TextureLoader).load(r),n=new k.SphereGeometry(50,50,50),t=new k.MeshBasicMaterial({map:e}),c=new k.Mesh(n,t);n.scale(1,1,-1),a.add(c)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(e.map((function(e){return(new k.TextureLoader).load(e)})))},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return new Promise((function(t){var r=Array.from({length:n}),a=new Image;a.src=e,a.onload=function(){var e,n,c=a.height;r=r.map((function(t,r){var o=new k.Texture;return e=document.createElement("canvas"),n=e.getContext("2d"),e.height=c,e.width=c,n.drawImage(a,c*r,0,c,c,0,0,c,c),o.image=e,o.needsUpdate=!0,o})),t(r)}}))},h=function(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},x=function e(){u=requestAnimationFrame(e),i.update(),s.update(),function(){if(d){H+=.05;var e=Math.sin(Math.PI/180*H),n=Math.cos(Math.PI/180*H);c.position.set(n,c.position.y,e),360===H&&(H=0)}}(),o.render(a,c)};return Object(l.useEffect)((function(){!function(){cancelAnimationFrame(u),(o=new k.WebGLRenderer).setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),n.current.innerHTML="",n.current.appendChild(o.domElement),a=new k.Scene,(c=new k.PerspectiveCamera(90,window.innerWidth/window.innerHeight,.1,1e3)).position.z=1,(i=new P.a(c,o.domElement)).enableZoom=!1,i.enablePan=!1,i.enableDamping=!0,i.rotateSpeed=-.25,i.dampingFactor=.8;var e=new k.AxesHelper(1e3);switch(a.add(e),s=new S.a,p){case 0:b();break;case 1:f();break;default:throw Error("Unknow resource mode ".concat(p))}x()}(),s.setMode(0),s.domElement.style.position="absolute",s.domElement.style.left="0px",s.domElement.style.top="0px",t.current.appendChild(s.domElement),window.addEventListener("resize",h,!1)})),Object(C.jsxs)(F,{children:[Object(C.jsx)("div",{ref:n}),Object(C.jsx)("div",{ref:t,style:{position:"absolute",left:"20px",top:"15px"}})]})}L.defaultProps={resourceMode:1};var R,T,D=L,z=m.c.main(R||(R=Object(d.a)(["\n"]))),I=m.c.div(T||(T=Object(d.a)(["\n  position: absolute;\n  top: 80px;\n  left: 20px;\n  padding: 1rem;\n  color: #fff;\n  background-color: ",";\n  border-radius: .25rem;\n\n  select {\n    margin-bottom: .5rem;\n  }\n\n  label {\n    cursor: pointer;\n    user-select: none;\n  }\n"])),(function(){return Object(g.a)("#fff",.3)}));var U=[{key:"root",path:"/",exact:!0,component:function(){var e=Object(l.useState)(1),n=Object(O.a)(e,2),t=n[0],r=n[1],a=Object(l.useState)(!1),c=Object(O.a)(a,2),o=c[0],i=c[1],s=[{label:"2D_Spilit",resourceMode:0,images:["./room1/cubemap_r.jpg","./room1/cubemap_l.jpg","./room1/cubemap_u.jpg","./room1/cubemap_d.jpg","./room1/cubemap_f.jpg","./room1/cubemap_b.jpg"]},{label:"2D_Merge",resourceMode:0,images:"./2D_Merge.jpg"},{label:"360\xb0_View",resourceMode:1,images:"./360_View.jpg"}];return Object(C.jsxs)(z,{children:[Object(C.jsxs)(I,{children:[Object(C.jsx)("select",{value:t,onChange:function(e){return r(e.target.value)},children:s.map((function(e,n){return Object(C.jsx)("option",{value:n,children:e.label},e.label)}))}),Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{id:"chkAutoPlay",type:"checkbox",value:o,onChange:function(e){return i(e.target.checked)}}),Object(C.jsx)("label",{htmlFor:"chkAutoPlay",children:"AutoPlay"})]})]}),Object(C.jsx)(D,{images:s[t].images,autoPlay:o,resourceMode:s[t].resourceMode})]})},title:"Example"}];var W=function(){return Object(C.jsx)(x.a,{children:Object(C.jsx)(h.c,{children:U.map((function(e){var n=e.key,t=e.path,r=e.exact,a=e.component,c=e.title;return Object(C.jsx)(h.a,{exact:r,path:t,title:c,render:function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w.a,{children:Object(C.jsx)("title",{children:c})}),Object(C.jsx)(a,Object(j.a)({},e))]})}},n)}))})})},X=t(17),B=t(62),G=t(59),J=t(18),N=Object(X.combineReducers)({example:J.d}),V=t(26),q=Object(B.a)(),Z=Object(X.createStore)(N,Object(G.composeWithDevTools)(Object(X.applyMiddleware)(q)));q.run(V.default);var K,Q=Object(j.a)(Object(j.a)(Object(j.a)({},{black:"#111",white:"#fefefe",gray:"#87868c",blue:"#1e78a9",green:"#009f9d",red:"#f2724f"}),{globalFont:"'Microsoft JhengHei', 'Segoe UI', Helvetica, Arial, Helvetica, sans-serif;"}),{screenXs:"480px",screenSm:"576px",screenMd:"768px",screenLg:"992px",screenXl:"1200px"}),Y=Object(m.b)(K||(K=Object(d.a)(["\n\n  *,\n  ::after,\n  ::before {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    font-family: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),(function(e){return e.theme.globalFont}));b.a.render(Object(C.jsxs)(m.a,{theme:Q,children:[Object(C.jsx)(Y,{}),Object(C.jsx)(f.a,{store:Z,children:Object(C.jsx)(W,{})})]}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.5632f3a3.chunk.js.map