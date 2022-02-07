import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {store} from './common/store.js'
import uView from "uview-ui";
import {
	formattingStr,
	dateDifference,
	getStorage,
	setStorage,
	color16Random
} from 'common/common.js'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()

// uView
Vue.use(uView)

// Bmob
var Bmob = require('common/Bmob-2.2.5.min.js')
Bmob.initialize("df3cba52942cb8b9", "kn03PK")
// 当小程序开发的时候，有时在手机端不便看出请求的网址，与参数，可以初始化后开启调试模式，开启后会请求到测试服务器，并打印调试信息。注意：上线后请关闭此选项
Bmob.debug(true)

// 挂载到全局使用
Vue.prototype.Bmob = Bmob
Vue.prototype.formattingStr = formattingStr
Vue.prototype.dateDifference = dateDifference
Vue.prototype.store = store // 挂载 Vuex
Vue.prototype.getStorage = getStorage
Vue.prototype.setStorage = setStorage
Vue.prototype.color16Random = color16Random

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
