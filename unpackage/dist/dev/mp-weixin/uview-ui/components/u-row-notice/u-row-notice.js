(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-row-notice/u-row-notice"],{314:function(t,e,n){"use strict";n.r(e);var o=n(315),i=n(317);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n(319);var u,a=n(11),c=Object(a["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"d36ba0c0",null,!1,o["components"],u);c.options.__file="uview-ui/components/u-row-notice/u-row-notice.vue",e["default"]=c.exports},315:function(t,e,n){"use strict";n.r(e);var o=n(316);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},316:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return o}));try{o={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,284))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.show?t.__get_style([t.textStyle]):null);t.$mp.data=Object.assign({},{$root:{s0:n}})},r=!1,u=[];i._withStripped=!0},317:function(t,e,n){"use strict";n.r(e);var o=n(318),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},318:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},volumeSize:{type:[Number,String],default:34},speed:{type:[Number,String],default:160},playState:{type:String,default:"play"},padding:{type:[Number,String],default:"18rpx 24rpx"}},data:function(){return{textWidth:0,boxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}},watch:{list:{immediate:!0,handler:function(t){var e=this;this.showText=t.join("，"),this.$nextTick((function(){e.initSize()}))}},playState:function(t){this.animationPlayState="play"==t?"running":"paused"},speed:function(t){this.initSize()}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var e=this,n=[],o=new Promise((function(n,o){t.createSelectorQuery().in(e).select("#u-notice-content").boundingClientRect().exec((function(t){e.textWidth=t[0].width,n()}))}));n.push(o),Promise.all(n).then((function(){e.animationDuration="".concat(e.textWidth/t.upx2px(e.speed),"s"),e.animationPlayState="paused",setTimeout((function(){"play"==e.playState&&e.autoplay&&(e.animationPlayState="running")}),10)}))},click:function(t){this.$emit("click")},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")}}};e.default=n}).call(this,n(1)["default"])},319:function(t,e,n){"use strict";n.r(e);var o=n(320),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},320:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-row-notice/u-row-notice.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-row-notice/u-row-notice-create-component',
    {
        'uview-ui/components/u-row-notice/u-row-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(314))
        })
    },
    [['uview-ui/components/u-row-notice/u-row-notice-create-component']]
]);
