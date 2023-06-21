"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[729],{2639:function(e,t,r){r.d(t,{a:function(){return s},Z:function(){return i}});var n=r(8966),a=(r(2791),"Loader_loaderWrapper__6ypwD"),c=r(184),s=function(e){var t=e.visible;return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.VF,{height:"100",width:"100",color:"#bf3989",secondaryColor:"#096bde)",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperClass:"loaderWrapper",visible:t})})},i=s},8313:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7689),a=r(1087),c=r(184),s=function(e){var t=e.movie,r=(0,n.TH)();return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(t.id),state:{from:r},children:[t.poster_path&&(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}),(0,c.jsx)("h3",{children:t.title}),(0,c.jsx)("p",{children:t.release_date&&t.release_date.slice(0,4)}),(0,c.jsx)("p",{children:t.vote_average&&t.vote_average.toFixed(1)})]})},t.id)},i=r(6815),o=function(e){var t=e.movies;return(0,c.jsx)(i.W,{children:(0,c.jsx)(i.$,{children:t.map((function(e){return(0,c.jsx)(s,{movie:e},e.id)}))})})}},6815:function(e,t,r){r.d(t,{$:function(){return i},W:function(){return o}});var n,a,c=r(168),s=r(5397),i=s.Z.ul(n||(n=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 271px);\n  gap: 20px;\n"]))),o=s.Z.div(a||(a=(0,c.Z)(["\n  max-width: 1180px;\n  padding: 20px 16px;\n  margin: 0px auto;\n"])))},1729:function(e,t,r){r.r(t),r.d(t,{Movies:function(){return b},default:function(){return Z}});var n=r(5861),a=r(9439),c=r(4687),s=r.n(c),i=r(2791),o=r(2639),u=r(3243),p=r(8313),l=r(1413),h=r(1087),d=r(887),v=r(3728),f="SearchBar_SearchForm__J+i1a",m="SearchBar_SearchForm-button__9dEGw",g="SearchBar_SearchForm-input__pGYri",x="SearchBar_search-icon__OScmK",_=r(184),w=function(e){var t=e.onSearch,r=(0,d.cI)(),n=r.register,c=r.handleSubmit,s=r.reset,i=(0,h.lr)(),o=(0,a.Z)(i,2),u=o[0],p=o[1];return(0,_.jsxs)("form",{className:f,onSubmit:c((function(e){var r=e.searchQuery;t(r),s({searchQuery:""});var n=new URLSearchParams(u.toString());n.set("query",r),p(n)})),children:[(0,_.jsx)("input",(0,l.Z)({className:g,type:"text",placeholder:"Search Movies"},n("searchQuery",{required:!0}))),(0,_.jsx)("button",{className:m,type:"submit",children:(0,_.jsx)("span",{className:"button-label",children:(0,_.jsx)(v.Vph,{className:x})})})]})},b=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,i.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1],f=(0,i.useState)(!1),m=(0,a.Z)(f,2),g=m[0],x=m[1],b=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,u.gH)(t);case 4:r=e.sent,c(r.results),x(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error searching movies:",e.t0);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)("section",{children:[(0,_.jsx)(w,{onSearch:b}),d&&(0,_.jsx)(o.Z,{visible:d}),g&&0===r.length&&(0,_.jsx)("p",{style:{textAlign:"center"},children:"No search results found"}),r.length>0&&(0,_.jsx)(p.Z,{movies:r})]})},Z=b},3243:function(e,t,r){r.d(t,{Bt:function(){return v},Df:function(){return l},Ny:function(){return d},gH:function(){return h},y:function(){return f}});var n=r(1413),a=r(5861),c=r(4687),s=r.n(c),i=r(1243),o=r(184),u="https://api.themoviedb.org/3/",p="c209603f4e1441562adec7f34b907cef",l=function(){var e=(0,a.Z)(s().mark((function e(){var t,r,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,i.Z.get("".concat(u,"trending/movie/week"),{params:{api_key:p,page:t}});case 3:return r=e.sent,a=r.data.results.slice(0,12),e.abrupt("return",(0,n.Z)((0,n.Z)({},r.data),{},{results:a}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.Z.get("".concat(u,"search/movie"),{params:{api_key:p,query:t,page:r}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n,a,c,l,h,d,v,f,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(p));case 3:return r=e.sent,n=r.data,a=n.poster_path,c=n.title,l=n.vote_average,h=n.overview,d=n.genres,v=a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://cdn-icons-png.flaticon.com/512/2748/2748558.png",f=Math.ceil(10*l),m=d.map((function(e){var t=e.id,r=e.name;return(0,o.jsx)("li",{children:r},t)})),e.abrupt("return",{src:v,title:c,userScore:f,overview:h,genresList:m});case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(p));case 3:return r=e.sent,n=r.data.results.map((function(e){return{author:e.author,id:e.id,content:e.content}})),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(p));case 3:return r=e.sent,n=r.data.cast.map((function(e){var t=e.name,r=e.character,n=e.id,a=e.profile_path;return{name:t,character:r,id:n,src:a?"https://image.tmdb.org/t/p/w200/".concat(a):"https://cdn-icons-png.flaticon.com/512/2748/2748558.png"}})),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=729.f038ec4a.chunk.js.map