(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_recommend/recommend_search/cgp_recommend_search"],{90:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(91));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},91:function(e,t,n){"use strict";n.r(t);var r=n(92),o=n(94);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n(97);var a,i=n(11),u=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages_recommend/recommend_search/cgp_recommend_search.vue",t["default"]=u.exports},92:function(e,t,n){"use strict";n.r(t);var r=n(93);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},93:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return r}));try{r={uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,131))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},c=!1,a=[];o._withStripped=!0},94:function(e,t,n){"use strict";n.r(t);var r=n(95),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a},95:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(96),o=n(13);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u="cgp_recommend_search_all_data",s={watch:{keyword:function(e){this.startSearch()}},data:function(){return{keyword:"",list:[],allData:[]}},onLoad:function(e){this.callingAPI()},methods:a(a({},(0,o.mapMutations)(["setSearchFlag"])),{},{getAllData:function(){var e=this;this.getStorage(u).then((function(t){t?e.allData=t:e.callingAPI()}))},callingAPI:function(){var t=this;e.showLoading({mask:!1});for(var n=Math.ceil(this.store.state.gamesCount/100),o=0;o<n;o++)(0,r.recommend_search_all_data)(this.Bmob,o).then((function(r){t.allData=1==o?r:t.allData.concat(r),t.setStorage(u,t.allData).then((function(e){})),o==n&&e.hideLoading()}))},startSearch:function(){0!=this.keyword.length?(this.list=(0,r.fuzzyQuery)(this.allData,this.keyword),this.setSearchFlag(!0)):this.list=[]},listClick:function(t){e.navigateTo({url:"../recommend_detail/cgp_recommend_detail?detailInfo="+encodeURIComponent(JSON.stringify(t))})}})};t.default=s}).call(this,n(1)["default"])},97:function(e,t,n){"use strict";n.r(t);var r=n(98),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a},98:function(e,t,n){}},[[90,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_recommend/recommend_search/cgp_recommend_search.js.map