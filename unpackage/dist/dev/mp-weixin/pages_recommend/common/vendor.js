(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_recommend/common/vendor"],{106:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.recommend_search_all_data=n.fuzzyQuery=void 0;var t=function(n,t){e.showLoading();for(var o=new RegExp(t),c=[],i=0;i<n.length;i++)o.test(n[i].title)&&c.push(n[i]);return e.hideLoading(),c};n.fuzzyQuery=t;var o=function(e,n){return new Promise((function(t,o){var c=e.Query("CGP_HotRecommend");c.limit(100),c.skip(100*n),c.find().then((function(e){t(e)}))}))};n.recommend_search_all_data=o}).call(this,t(1)["default"])},97:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.recommend_detail_editRecord_with_objectId=n.recommend_detail_getRecord_with_objectId=void 0;var t=function(n,t){return new Promise((function(o,c){e.showLoading({mask:!1});var i=n.Query("CGP_DeviceIds");i.get(t).then((function(n){e.hideLoading(),o(n)})).catch((function(n){e.hideLoading(),c(n)}))}))};n.recommend_detail_getRecord_with_objectId=t;var o=function(e,n){return new Promise((function(t,o){var c=e.Query("CGP_HotRecommend");c.get(n).then((function(e){e.set("readCount",(e.readCount?e.readCount:0)+1),e.save().then((function(e){t(e)})).catch((function(e){o(e)}))})).catch((function(e){o(e)}))}))};n.recommend_detail_editRecord_with_objectId=o}).call(this,t(1)["default"])}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_recommend/common/vendor.js.map