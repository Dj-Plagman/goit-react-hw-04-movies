(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{34:function(t,e,n){"use strict";var r=n(41),a=n.n(r),o={axiosFilms:function(t){return a.a.get("https://api.themoviedb.org/3/search/movie?api_key=307a3a6727b61e9c7d90851fae347f85&query=".concat(t)).then((function(t){return t.data.results}))},axiosTrendingFilms:function(){return a.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=307a3a6727b61e9c7d90851fae347f85").then((function(t){return t.data.results}))},axiosMovieDetails:function(t){return a.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=307a3a6727b61e9c7d90851fae347f85&language=en-US")).then((function(t){return t.data}))},axiosCast:function(t){return a.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=307a3a6727b61e9c7d90851fae347f85")).then((function(t){return t.data}))},axiosReviews:function(t){return a.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=307a3a6727b61e9c7d90851fae347f85&language=en-US&page=1")).then((function(t){return t.data}))}};e.a=o},42:function(t,e,n){t.exports={link:"MoviesFolderStyles_link__1NSEi",activeLink:"MoviesFolderStyles_activeLink__3yIlu",list:"MoviesFolderStyles_list__3BT1R"}},43:function(t,e,n){"use strict";n(0);var r,a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&i.test(t)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(t,e,n){var r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return l(r)},p=n(10),d=n(7),h=n(42),m=n.n(h),v=n(2);e.a=function(t){var e=t.arrayOfMovies,n=t.locationTo;return Object(v.jsx)("ul",{className:m.a.list,children:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(p.b,{className:m.a.link,activeClassName:m.a.activeLink,to:{pathname:"".concat(d.a.movies,"/").concat(t.id),state:{from:n}},children:Object(v.jsx)("p",{children:t.title?t.title:t.name})})},f())}))})}},72:function(t,e,n){"use strict";var r=n(73),a=n(12);function o(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function i(t){return Array.isArray(t)?t.sort():"object"===typeof t?i(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=a({arrayFormat:"none"},e)),r=Object.create(null);return"string"!==typeof t?r:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),a=e.shift(),o=e.length>0?e.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(t,e){var n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=i(n):t[e]=n,t}),Object.create(null))):r},e.stringify=function(t,e){var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[o(e,t),"[",r,"]"].join(""):[o(e,t),"[",o(r,t),"]=",o(n,t)].join("")};case"bracket":return function(e,n){return null===n?o(e,t):[o(e,t),"[]=",o(n,t)].join("")};default:return function(e,n){return null===n?o(e,t):[o(e,t),"=",o(n,t)].join("")}}}(e=a({encode:!0,strict:!0,arrayFormat:"none"},e));return t?Object.keys(t).sort().map((function(r){var a=t[r];if(void 0===a)return"";if(null===a)return o(r,e);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(t){void 0!==t&&i.push(n(r,t,i.length))})),i.join("&")}return o(r,e)+"="+o(a,e)})).filter((function(t){return t.length>0})).join("&"):""}},73:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},79:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(35),a=n(36),o=n(38),i=n(37),c=n(0),u=n(72),s=n.n(u),l=n(2),f=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={searchValue:""},t.inputValueHolder=function(e){t.setState({searchValue:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.searchValue),t.setState({searchValue:""})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchValue,onChange:this.inputValueHolder}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})})}}]),n}(c.Component),p=n(34),d=n(43),h=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={films:[]},t.componentDidMount=function(){var e=s.a.parse(t.props.location.search).query;e&&p.a.axiosFilms(e).then((function(e){return t.setState({films:e})})).catch((function(e){return t.setState({error:e})}))},t.componentDidUpdate=function(e){var n=s.a.parse(e.location.search).query,r=s.a.parse(t.props.location.search).query;n!==r&&p.a.axiosFilms(r).then((function(e){return t.setState({films:e})})).catch((function(e){return t.setState({error:e})}))},t.handleSearchQuery=function(e){t.props.history.push({pathname:t.props.location.pathname,search:"query=".concat(e)})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state.films;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{onSubmit:this.handleSearchQuery}),t.length>0&&Object(l.jsx)(d.a,{arrayOfMovies:t,locationTo:this.props.location})]})}}]),n}(c.Component)}}]);
//# sourceMappingURL=6.6ea93541.chunk.js.map