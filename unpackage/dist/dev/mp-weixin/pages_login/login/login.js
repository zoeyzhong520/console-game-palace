require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_login/login/login"],{74:function(n,e,t){"use strict";(function(n){t(5);o(t(3));var e=o(t(75));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},75:function(n,e,t){"use strict";t.r(e);var o=t(76),r=t(78);for(var c in r)"default"!==c&&function(n){t.d(e,n,(function(){return r[n]}))}(c);t(81);var u,i=t(11),s=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"4c9cb3c4",null,!1,o["components"],u);s.options.__file="pages_login/login/login.vue",e["default"]=s.exports},76:function(n,e,t){"use strict";t.r(e);var o=t(77);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},77:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={uButton:function(){return t.e("uview-ui/components/u-button/u-button").then(t.bind(null,210))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},c=!1,u=[];r._withStripped=!0},78:function(n,e,t){"use strict";t.r(e);var o=t(79),r=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},79:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(80),r={data:function(){return{userInfo:null}},methods:{login:function(){if(n.getUserProfile){var e=this;n.getUserProfile({desc:"用于完善用户信息",lang:"zh_CN",success:function(n){e.bmobLogin(n)},fail:function(n){console.log(n)}})}},bmobLogin:function(e){var t=this;(0,o.userAuth)(this.Bmob).then((function(r){(0,o.userUpInfo)(t.Bmob,e.userInfo).then((function(e){n.showToast({title:"一键登陆成功",icon:"success"}),t.upUserInfo(t),setTimeout((function(){n.navigateBack()}),1500)})).catch((function(n){console.log(n)}))})).catch((function(n){console.log(n)}))}}};e.default=r}).call(this,t(1)["default"])},81:function(n,e,t){"use strict";t.r(e);var o=t(82),r=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},82:function(n,e,t){}},[[74,"common/runtime","common/vendor","pages_login/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_login/login/login.js.map