require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_usercenter/usercenter_join/usercenter_join"],{121:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(122));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},122:function(e,n,t){"use strict";t.r(n);var r=t(123),o=t(125);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(127);var c,i=t(11),a=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);a.options.__file="pages_usercenter/usercenter_join/usercenter_join.vue",n["default"]=a.exports},123:function(e,n,t){"use strict";t.r(n);var r=t(124);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},124:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uNoticeBar:function(){return t.e("uview-ui/components/u-notice-bar/u-notice-bar").then(t.bind(null,256))},uGap:function(){return t.e("uview-ui/components/u-gap/u-gap").then(t.bind(null,175))},uButton:function(){return t.e("uview-ui/components/u-button/u-button").then(t.bind(null,210))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,c=[];o._withStripped=!0},125:function(e,n,t){"use strict";t.r(n);var r=t(126),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},126:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(13);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=null,a={data:function(){return{list:["长按图片识别二维码","申请添加好友时，备注游戏"],isEnded:!1}},computed:{wechatCode:function(){return this.$store.state.wechatCode},joinRewardedVideoAdFlag:function(){return this.store.state.joinRewardedVideoAdFlag}},onLoad:function(){this.createRewardedVideoAd()},methods:u(u({},(0,r.mapMutations)(["setJoinRewardedVideoAdFlag"])),{},{imgLoadErr:function(e){console.log(JSON.stringify(e))},createRewardedVideoAd:function(){var e=this;wx.createRewardedVideoAd&&!this.store.state.joinRewardedVideoAdFlag&&(i=wx.createRewardedVideoAd({adUnitId:"adunit-d9eb6feb0a3f3ba0"}),i.onLoad((function(){})),i.onError((function(e){})),i.onClose((function(n){n&&n.isEnded&&(e.isEnded=!0,e.setJoinRewardedVideoAdFlag(!0))})))},lookRewardedVideoAd:function(){i&&i.show().catch((function(){i.load().then((function(){return i.show()})).catch((function(e){console.log("激励视频 广告显示失败")}))}))}})};n.default=a},127:function(e,n,t){"use strict";t.r(n);var r=t(128),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},128:function(e,n,t){}},[[121,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_usercenter/usercenter_join/usercenter_join.js.map