(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/recommend/cgp_recommend"],{45:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(46));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},46:function(e,t,n){"use strict";n.r(t);var r=n(47),i=n(49);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(52);var c,s=n(11),a=Object(s["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);a.options.__file="pages/recommend/cgp_recommend.vue",t["default"]=a.exports},47:function(e,t,n){"use strict";n.r(t);var r=n(48);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},48:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,124))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,131))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,138))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,145))},uGap:function(){return n.e("uview-ui/components/u-gap/u-gap").then(n.bind(null,152))},uGrid:function(){return n.e("uview-ui/components/u-grid/u-grid").then(n.bind(null,159))},uGridItem:function(){return n.e("uview-ui/components/u-grid-item/u-grid-item").then(n.bind(null,166))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,173))},uNoNetwork:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-no-network/u-no-network")]).then(n.bind(null,180))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!0})},o=!1,c=[];i._withStripped=!0},49:function(e,t,n){"use strict";n.r(t);var r=n(50),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},50:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(51),i=n(13);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){return{tabsList:[],current:0,bannerList:[],list:[],show:!1,shareObjectId:"",allData:{ALL:[],A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[]},statusNavBarH:0,pages:{ALL:0,A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0},pageScrollArr:{ALL:0,A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0}}},onLoad:function(t){var n=this;t.shareObjectId&&(this.shareObjectId=t.shareObjectId,this.isShare=!0),this.tabsList=r.cgp_recommend_tabsList,this.insertDeviceId(),this.getConfigs(),(0,r.cgp_recommend_banner_list)(this.Bmob).then((function(t){e.stopPullDownRefresh(),n.bannerList=t})),this.todayTime=this.$u.timeFormat((new Date).getTime(),"yyyy-mm-dd hh:MM:ss"),(0,r.cgp_recommend_all_list)(this.Bmob,0).then((function(t){e.stopPullDownRefresh(),n.list=t,n.list.map((function(e){n.dateDifference(e.createdAt,n.todayTime,"day")<=3&&(e.isNew=!0)})),n.allData.ALL=n.list}));var i=e.getSystemInfoSync();this.statusNavBarH=2*(i.statusBarHeight+44),e.showTabBarRedDot({index:2})},methods:c(c({},(0,i.mapMutations)(["setIsInReview","setGamesCount","setDeviceIdsObjectId","setSearchFlag","setArticlesCount"])),{},{insertDeviceId:function(){var e=this;(0,r.cgp_recommend_insert_deviceId)(this.Bmob).then((function(t){e.setDeviceIdsObjectId(t.objectId),e.isShare&&t.objectId!=e.shareObjectId&&t.isNewDevice&&(0,r.recommend_detail_editRecord_with_objectId)(e.Bmob,e.shareObjectId).then((function(e){}))}))},getConfigs:function(){var t=this;(0,r.cgp_configs)(this.Bmob).then((function(n){t.setIsInReview(n[0].isInReview),t.setGamesCount(n[0].gamesCount),t.setArticlesCount(n[0].articlesCount),e.getStorageSync("articlesCount")||e.setStorageSync("articlesCount",n[0].articlesCount),e.getStorageSync("articlesCount")&&n[0].articlesCount>e.getStorageSync("articlesCount")&&e.setTabBarBadge({index:1,text:""+(n[0].articlesCount-e.getStorageSync("articlesCount"))})}))},tabsChange:function(t){this.current=t,this.filterList(t),e.pageScrollTo({scrollTop:this.pageScrollArr[r.cgp_recommend_types[t]],duration:0})},gridClick:function(t){this.current=t,this.filterList(t),this.show=!1,e.pageScrollTo({scrollTop:0,duration:0})},filterList:function(t){var n=this,i=r.cgp_recommend_types[t];"[]"==JSON.stringify(this.allData[i])?(0,r.cgp_recommend_query_list)(this.Bmob,t,0).then((function(t){e.stopPullDownRefresh(),n.list=t,n.list.map((function(e){n.dateDifference(e.createdAt,n.todayTime,"day")<=3&&(e.isNew=!0)})),n.allData[i]=n.list})):this.list=this.allData[i]},refreshData:function(t){var n=this,i=r.cgp_recommend_types[this.current],o=this.pages[i];t?o++:o=0,this.pages[i]=o,0!=this.current?this.current>0&&(0,r.cgp_recommend_query_list)(this.Bmob,this.current,o).then((function(t){e.stopPullDownRefresh(),n.list=0==o?t:n.list.concat(t),n.list.map((function(e){n.dateDifference(e.createdAt,n.todayTime,"day")<=3&&(e.isNew=!0)})),n.allData[i]=n.list})):(0,r.cgp_recommend_all_list)(this.Bmob,o).then((function(t){e.stopPullDownRefresh(),n.list=0==o?t:n.list.concat(t),n.list.map((function(e){n.dateDifference(e.createdAt,n.todayTime,"day")<=3&&(e.isNew=!0)})),n.allData.ALL=n.list}))},swiperClick:function(t){var n=this.bannerList[t];e.navigateTo({url:"../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo="+encodeURIComponent(JSON.stringify(n))})},listClick:function(t){e.navigateTo({url:"../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo="+encodeURIComponent(JSON.stringify(t))})},searchClick:function(){e.navigateTo({url:"../../pages_recommend/recommend_search/cgp_recommend_search"})}}),onShareAppMessage:function(){return{title:"单机小助-为您精挑细选的游戏推荐"}},onPullDownRefresh:function(){this.refreshData()},onReachBottom:function(){this.refreshData(!0)},onPageScroll:function(e){var t=r.cgp_recommend_types[this.current];this.pageScrollArr[t]=e.scrollTop},onTabItemTap:function(){e.vibrateShort()}};t.default=a}).call(this,n(1)["default"])},52:function(e,t,n){"use strict";n.r(t);var r=n(53),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},53:function(e,t,n){}},[[45,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/recommend/cgp_recommend.js.map