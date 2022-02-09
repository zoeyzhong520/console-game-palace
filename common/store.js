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
		deviceIdsObjectId: '',
		// 记录搜索行为的标识
		searchFlag: false,
		// 记录是否已观看过加入我们激励视频广告
		joinRewardedVideoAdFlag: false,
		// 文章总数
		articlesCount: 0,
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
		
		// 记录搜索行为的标识
		setSearchFlag(state, provider) {
			// console.log('记录搜索行为的标识:',provider)
			state.searchFlag = provider
		},
		
		// 记录是否已观看过加入我们激励视频广告
		setJoinRewardedVideoAdFlag(state, provider) {
			// console.log('记录是否已观看过加入我们激励视频广告:',provider)
			state.joinRewardedVideoAdFlag = provider
		},
		
		// 文章总数
		setArticlesCount(state, provider) {
			// console.log('文章总数:',provider)
			state.articlesCount = provider
		},
	}
	
})