import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	
	// 定义状态值
	state: {
		// 审核状态
		isInReview: false,
		// 游戏总数目
		gamesCount: 0,
		// 设备ID 合集主键 deviceIdsObjectId
		deviceIdsObjectId: ''
	},
	
	mutations: {
		// 设置审核状态的值
		setIsInReview(state, provider) {
			// console.log("设置审核状态的值为：",provider)
			state.isInReview = provider
		},
		
		// 设置游戏总数目
		setGamesCount(state, provider) {
			// console.log("设置游戏总数目：",provider)
			state.gamesCount = provider
		},
		
		// 设备ID 合集主键 deviceIdsObjectId
		setDeviceIdsObjectId(state, provider) {
			// console.log("设置设备ID 合集主键 deviceIdsObjectId：",provider)
			state.deviceIdsObjectId = provider
		},
		
	}
	
})