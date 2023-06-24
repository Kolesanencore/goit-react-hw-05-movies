"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[750],{2639:function(n,e,t){t.d(e,{a:function(){return o},Z:function(){return c}});var r=t(8966),a="Loader_loaderWrapper__6ypwD",i=t(184),o=function(n){var e=n.visible;return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(r.VF,{height:"100",width:"100",color:"#bf3989",secondaryColor:"#096bde)",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperClass:"loaderWrapper",visible:e})})},c=o},6815:function(n,e,t){t.d(e,{$:function(){return c},W:function(){return s}});var r,a,i=t(168),o=t(5397),c=o.Z.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, 271px);\n  gap: 20px;\n  margin-top: 14px;\n"]))),s=o.Z.div(a||(a=(0,i.Z)(["\n  max-width: 1180px;\n  padding: 0 16px;\n  margin: 0px auto;\n"])))},4750:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return R},default:function(){return U}});var r,a,i,o,c,s,p,u,l=t(9439),d=t(2791),f=t(7689),x=t(6355),g=t(2639),h=t(168),v=t(5397),m=v.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 24px;\n  background: linear-gradient(135deg, #bf3989, #096bde);\n"]))),b=v.Z.div(a||(a=(0,h.Z)(["\n  object-fit: cover;\n"]))),Z=v.Z.img(i||(i=(0,h.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),j=v.Z.div(o||(o=(0,h.Z)(["\n  font-size: 16px;\n  color: white;\n"]))),w=v.Z.h2(c||(c=(0,h.Z)(["\n  font-size: 32px;\n  color: #ffb30e;\n"]))),y=v.Z.span(s||(s=(0,h.Z)(["\n  color: #1ce72d;\n"]))),k=v.Z.h3(p||(p=(0,h.Z)(["\n  margin-top: 16px;\n  margin-bottom: 4px;\n  color: #0eff2a;\n"]))),_=v.Z.ul(u||(u=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  color: #f9f9f9;\n"]))),F=t(184),L=function(n){var e=n.movieData;return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(m,{children:[(0,F.jsx)(b,{children:(0,F.jsx)(Z,{src:e.src,alt:e.title})}),(0,F.jsxs)(j,{children:[(0,F.jsx)(w,{children:e.title}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("p",{children:["User score: ",(0,F.jsxs)(y,{children:[e.userScore," %"]})]}),(0,F.jsx)(k,{children:"Overview"}),(0,F.jsx)("p",{children:e.overview}),(0,F.jsx)(k,{children:"Genres"}),(0,F.jsx)(_,{children:e.genresList})]})]})]})})},z=t(3243),C=t(9944),D=t(6815),R=function(){var n,e,t=(0,f.UO)().movieId,r=(0,f.TH)(),a=(0,d.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),i=(0,d.useState)(null),o=(0,l.Z)(i,2),c=o[0],s=o[1],p=(0,d.useState)(!1),u=(0,l.Z)(p,2),h=u[0],v=u[1];return(0,d.useEffect)((function(){v(!0),(0,z.Ny)(Number(t)).then(s).catch(console.log).finally((function(){return v(!1)}))}),[t]),(0,F.jsxs)("section",{children:[(0,F.jsxs)(C.uj,{to:a.current,children:[(0,F.jsx)(x.xPU,{style:{marginRight:"5px"}}),"Back to"]}),h&&(0,F.jsx)(g.Z,{}),c&&(0,F.jsx)(L,{movieData:c}),(0,F.jsxs)(D.W,{children:[(0,F.jsx)(C.F,{children:"Additional information"}),(0,F.jsxs)(C.Mc,{children:[(0,F.jsx)("li",{children:(0,F.jsx)(C.Fg,{to:"cast",children:"Cast"})}),(0,F.jsx)("li",{children:(0,F.jsx)(C.Fg,{to:"reviews",children:"Reviews"})})]}),(0,F.jsx)(f.j3,{})]})]})},U=R},9944:function(n,e,t){t.d(e,{F:function(){return l},Fg:function(){return f},Mc:function(){return d},uj:function(){return u}});var r,a,i,o,c=t(168),s=t(1087),p=t(5397),u=(0,p.Z)(s.rU)(r||(r=(0,c.Z)(["\n  margin-left: 8px;\n  margin-top: 8px;\n  margin-right: 8px;\n  display: flex;\n  margin-bottom: 8px;\n  padding: 6px;\n  align-items: center;\n  font-weight: 700;\n  justify-content: center;\n  background-color: #e5a536;\n  color: white;\n\n  border-radius: 2px;\n\n  :hover {\n    box-shadow: 0 2px 8px rgba(255, 107, 1, 0),\n      inset 0 1px hsla(0, 0%, 100%, 0.3), inset 0 10px hsla(0, 0%, 100%, 0.2),\n      inset 0 10px 20px hsla(0, 0%, 100%, 0.25),\n      inset 0 -15px 30px rgba(255, 107, 1, 0.3);\n    text-transform: uppercase;\n  }\n"]))),l=p.Z.p(a||(a=(0,c.Z)(["\n  font-family: Roboto;\n  font-size: 25px;\n  margin-top: 14px;\n  color: black;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 1px 1px 0 #e5a536, -1px -1px 0 black, 1px -1px 0 black,\n    -1px 1px 0 black;\n"]))),d=p.Z.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  margin-top: 14px;\n"]))),f=(0,p.Z)(s.OL)(o||(o=(0,c.Z)(["\n  padding: 8px;\n  border-radius: 12px;\n  font-size: 20px;\n  color: #e5a536;\n  font-weight: bold;\n  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);\n\n  :hover,\n  :focus {\n    transform: scale(1.02);\n  }\n\n  &.active {\n    color: #ffffff;\n\n    text-transform: uppercase;\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.64);\n    background: linear-gradient(135deg, #bf3989, #096bde);\n    box-shadow: 0 2px 8px rgba(255, 107, 1, 0),\n      inset 0 1px hsla(0, 0%, 100%, 0.3), inset 0 10px hsla(0, 0%, 100%, 0.2),\n      inset 0 10px 20px hsla(0, 0%, 100%, 0.25),\n      inset 0 -15px 30px rgba(255, 107, 1, 0.2);\n  }\n"])))},3243:function(n,e,t){t.d(e,{Bt:function(){return f},Df:function(){return u},Ny:function(){return d},gH:function(){return l},y:function(){return x}});var r=t(1413),a=t(5861),i=t(4687),o=t.n(i),c=t(1243),s=t(184),p=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c209603f4e1441562adec7f34b907cef"}}),u=function(){var n=(0,a.Z)(o().mark((function n(){var e,t,a,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,n.prev=1,n.next=4,p.get("trending/movie/week",{params:{page:e}});case 4:return t=n.sent,a=t.data.results.slice(0,12),n.abrupt("return",(0,r.Z)((0,r.Z)({},t.data),{},{results:a}));case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,p.get("search/movie",{params:{query:e,page:t}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(o().mark((function n(e){var t,r,a,i,c,u,l,d,f,x;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("movie/".concat(e));case 3:return t=n.sent,r=t.data,a=r.poster_path,i=r.title,c=r.vote_average,u=r.overview,l=r.genres,d=a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://cdn-icons-png.flaticon.com/512/2748/2748558.png",f=Math.ceil(10*c),x=l.map((function(n){var e=n.id,t=n.name;return(0,s.jsx)("li",{children:t},e)})),n.abrupt("return",{src:d,title:i,userScore:f,overview:u,genresList:x});case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,r=t.data.results.map((function(n){return{author:n.author,id:n.id,content:n.content}})),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("movie/".concat(e,"/credits"));case 3:return t=n.sent,r=t.data.cast.map((function(n){var e=n.name,t=n.character,r=n.id,a=n.profile_path;return{name:e,character:t,id:r,src:a?"https://image.tmdb.org/t/p/w200/".concat(a):"https://cdn-icons-png.flaticon.com/512/2748/2748558.png"}})),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=750.73fc88a8.chunk.js.map