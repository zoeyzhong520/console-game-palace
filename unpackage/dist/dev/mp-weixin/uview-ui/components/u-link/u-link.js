(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-link/u-link"],{237:function(n,t,e){"use strict";e.r(t);var r=e(238),u=e(240);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e(242);var o,c=e(11),a=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"e1732180",null,!1,r["components"],o);a.options.__file="uview-ui/components/u-link/u-link.vue",t["default"]=a.exports},238:function(n,t,e){"use strict";e.r(t);var r=e(239);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},239:function(n,t,e){"use strict";var r;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return o})),e.d(t,"recyclableRender",(function(){return i})),e.d(t,"components",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},i=!1,o=[];u._withStripped=!0},240:function(n,t,e){"use strict";e.r(t);var r=e(241),u=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=u.a},241:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"u-link",props:{color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""}},methods:{openLink:function(){var t=this;n.setClipboardData({data:this.href,success:function(){n.hideToast(),t.$nextTick((function(){t.$u.toast(t.mpTips)}))}})}}};t.default=e}).call(this,e(1)["default"])},242:function(n,t,e){"use strict";e.r(t);var r=e(243),u=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=u.a},243:function(n,t,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-link/u-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-link/u-link-create-component',
    {
        'uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(237))
        })
    },
    [['uview-ui/components/u-link/u-link-create-component']]
]);
