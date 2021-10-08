import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	
	// 定义状态值
	state: {
		// 审核状态
		isInReview: false,
	},
	
	mutations: {
		// 设置审核状态的值
		setIsInReview(state, provider) {
			// console.log("设置审核状态的值为：",provider)
			state.isInReview = provider
		},
	}
	
})