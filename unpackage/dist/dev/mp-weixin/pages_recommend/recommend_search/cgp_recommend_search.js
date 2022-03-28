require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_recommend/recommend_search/cgp_recommend_search"],{100:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(101));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},101:function(e,t,n){"use strict";n.r(t);var r=n(102),a=n(104);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(107),n(109);var c,i=n(11),u=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"3556f6b6",null,!1,r["components"],c);u.options.__file="pages_recommend/recommend_search/cgp_recommend_search.vue",t["default"]=u.exports},102:function(e,t,n){"use strict";n.r(t);var r=n(103);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},103:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,154))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,161))},uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,189))},uLoading:function(){return n.e("uview-ui/components/u-loading/u-loading").then(n.bind(null,376))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,c=[];a._withStripped=!0},104:function(e,t,n){"use strict";n.r(t);var r=n(105),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},105:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(22)),a=n(106),o=n(13);function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,u,"next",e)}function u(e){i(o,r,a,c,u,"throw",e)}c(void 0)}))}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d="allDataPart1CachedKey",h="allDataPart2CachedKey",m="allDataPart3CachedKey",g={watch:{keyword:function(e){}},data:function(){return{keyword:"",list:[],allData:[],show:!1}},onLoad:function(e){this.keyword=e.keyword?e.keyword:"",this.init()},methods:l(l({},(0,o.mapMutations)(["setSearchFlag"])),{},{init:function(){var e=this;return u(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.todayTime=e.$u.timeFormat((new Date).getTime(),"yyyy-mm-dd hh:MM:ss"),t.next=3,e.getAllData();case 3:return t.next=5,e.startSearch();case 5:case"end":return t.stop()}}),t)})))()},getAllData:function(){var t=e.getStorageSync(d),n=e.getStorageSync(h),r=e.getStorageSync(m),a=e.getStorageSync("gamesCount");t&&n&&r&&a?(console.log("已经缓存过并且有游戏总数记录，直接赋值"),this.allData=this.allData.concat(t).concat(n).concat(r),this.setNewTag()):(console.log("没有缓存过，请求HTTP"),this.callingAPI())},callingAPI:function(){var t=this;this.show=!0;for(var n=Math.ceil(this.store.state.gamesCount/100),r=0;r<n;r++)(0,a.recommend_search_all_data)(this.Bmob,r).then((function(n){t.allData=1==r?n:t.allData.concat(n),t.setNewTag();var a=JSON.parse(JSON.stringify(t.allData)),o=JSON.parse(JSON.stringify(t.allData)),c=JSON.parse(JSON.stringify(t.allData));e.setStorageSync(d,a.slice(0,a.length/3)),e.setStorageSync(h,o.slice(o.length/3,o.length/3*2)),e.setStorageSync(m,c.slice(c.length/3*2,c.length)),e.setStorageSync("gamesCount",t.allData.length),t.allData.length==t.store.state.gamesCount&&(console.log("HTTP请求结束"),t.show=!1,t.startSearch())}))},setNewTag:function(){var e=this;this.allData.map((function(t){e.dateDifference(t.createdAt,e.todayTime,"day")<=3&&(t.isNew=!0)}))},startSearch:function(){0!=this.keyword.length?(this.list=(0,a.fuzzyQuery)(this.allData,this.keyword),(0,a.saveSearchHistory)(this.keyword),this.setSearchFlag(!0)):this.list=[]},listClick:function(t){e.navigateTo({url:"../recommend_detail/cgp_recommend_detail?detailInfo="+encodeURIComponent(JSON.stringify(t))})}})};t.default=g}).call(this,n(1)["default"])},107:function(e,t,n){"use strict";n.r(t);var r=n(108),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var r=n(110),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},110:function(e,t,n){}},[[100,"common/runtime","common/vendor","pages_recommend/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_recommend/recommend_search/cgp_recommend_search.js.map