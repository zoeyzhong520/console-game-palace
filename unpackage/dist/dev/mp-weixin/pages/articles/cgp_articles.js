(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/articles/cgp_articles"],{54:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(55));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},55:function(e,t,n){"use strict";n.r(t);var r=n(56),o=n(58);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(61),n(63);var a,u=n(11),c=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);c.options.__file="pages/articles/cgp_articles.vue",t["default"]=c.exports},56:function(e,t,n){"use strict";n.r(t);var r=n(57);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},57:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));try{r={uGap:function(){return n.e("uview-ui/components/u-gap/u-gap").then(n.bind(null,162))},uNoNetwork:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-no-network/u-no-network")]).then(n.bind(null,176))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},i=!1,a=[];o._withStripped=!0},58:function(e,t,n){"use strict";n.r(t);var r=n(59),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},59:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(60),o={data:function(){return{list:[],page:0}},onLoad:function(){e.startPullDownRefresh(),this.todayTime=this.$u.timeFormat((new Date).getTime(),"yyyy-mm-dd hh:MM:ss")},onShow:function(){e.removeTabBarBadge({index:1})},methods:{listClick:function(t){e.navigateTo({url:"../../pages_articles/articles_detail/cgp_articles_detail?detailInfo="+encodeURIComponent(JSON.stringify(t))})},refreshData:function(t){var n=this;t?this.page++:this.page=0,(0,r.cgp_popular_articles_list)(this.Bmob,this.page).then((function(t){e.stopPullDownRefresh(),0==n.page?n.list=t:n.list=n.list.concat(t),n.list.map((function(e){n.dateDifference(e.createdAt,n.todayTime,"day")<=3&&(e.isNew=!0)}))}))}},onShareAppMessage:function(){return{title:"单机小助-热门文章也好看哦",imageUrl:this.list[0].image}},onPullDownRefresh:function(){this.refreshData()},onReachBottom:function(){this.refreshData(!0)},onTabItemTap:function(){e.vibrateShort(),e.setStorageSync("articlesCount",this.store.state.articlesCount)}};t.default=o}).call(this,n(1)["default"])},61:function(e,t,n){"use strict";n.r(t);var r=n(62),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(64),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},64:function(e,t,n){}},[[54,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/articles/cgp_articles.js.map