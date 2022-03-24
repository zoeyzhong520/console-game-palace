<template>
	<!-- CGP 筛选页 -->
	<view class="">
		<u-navbar :autoBack="true">
			<u-search class="slot-wrap" placeholder="请输入游戏名称" v-model="keyword" :focus="true" :showAction="true" @custom="startSearch()"
				@search="startSearch"></u-search>
		</u-navbar>
		
		<!-- 列表 -->
		<view class="list-cell" v-for="(item, index) in list" :key="index" @click="listClick(item)">
			<!-- 图片 -->
			<u-image :src="item.image" width="230rpx" height="156rpx" borderRadius="8rpx"></u-image>
			<view style="display: flex;flex-direction: column;position: relative;">
				<!-- 标题 -->
				<text class="list-cell-title">{{ item.title }}</text>
				<!-- 简介 -->
				<text class="list-cell-description">{{ item.description }}</text>
			</view>
			<!-- 新上架标识 -->
			<text v-if="item.isNew" class="list-cell-new-tag">New</text>
			<!-- video标识 -->
			<text v-if="item.videoPath && item.videoPath.length > 0" class="list-cell-video-tag">▷</text>
		</view>
		
		<!-- 视频广告 -->
		<!-- <ad unit-id="adunit-34e2b370403d64f8" ad-type="video" ad-theme="white"></ad> -->
	</view>
</template>

<script>
	import {
		fuzzyQuery,
		recommend_search_all_data
	} from './cgp_recommend_search.js'

	import {
		mapMutations
	} from 'vuex' // 使用Vuex

	const all_data_cached_key = 'cgp_recommend_search_all_data' // 游戏数据
	const allDataPart1CachedKey = 'allDataPart1CachedKey' // 游戏数据第一部分
	const allDataPart2CachedKey = 'allDataPart2CachedKey' // 游戏数据第二部分
	const allDataPart3CachedKey = 'allDataPart3CachedKey' // 游戏数据第三部分
	
	export default {
		watch: {
			keyword(val) {
				this.startSearch()
			}
		},

		data() {
			return {
				// 搜索关键词
				keyword: '',
				// 查询后的列表数据
				list: [],
				// 全部数据
				allData: [],
			}
		},

		onLoad(e) {
			this.keyword = e.keyword ? e.keyword : ''
			this.init() // 初始化
		},

		methods: {
			...mapMutations(['setSearchFlag']),
			
			// 初始化
			init() {
				// 获取今天是X年X月X日
				this.todayTime = this.$u.timeFormat(new Date().getTime(), 'yyyy-mm-dd hh:MM:ss')
				
				// 获取全部数据
				this.getAllData()
			},
			
			getAllData() {
				// 调用API前，先判断本地是否有已经缓存的全部数据
				const storagePart1 = uni.getStorageSync(allDataPart1CachedKey)
				const storagePart2 = uni.getStorageSync(allDataPart2CachedKey)
				const storagePart3 = uni.getStorageSync(allDataPart3CachedKey)
				const gamesCount = uni.getStorageSync('gamesCount')
				if (!!storagePart1 && !!storagePart2 && !!storagePart3 && !!gamesCount) {
					console.log('已经缓存过并且有游戏总数记录，直接赋值')
					this.allData = this.allData.concat(storagePart1).concat(storagePart2).concat(storagePart3)
					this.setNewTag() // 设置上新标识
				} else {
					console.log('没有缓存过，请求HTTP')
					this.callingAPI()
				}
			},

			callingAPI() {
				// 目前有2000余部游戏资源，设置自动分页请求
				uni.showLoading({
					mask: false
				})

				// 根据当前游戏总数目计算出需要分页多少
				var maxCount = Math.ceil(this.store.state.gamesCount / 100)
				// console.log(maxCount)
				for (var i = 0; i < maxCount; i++) {
					recommend_search_all_data(this.Bmob, i).then((res) => {
						if (i == 1) {
							this.allData = res
						} else {
							this.allData = this.allData.concat(res)
						}
						
						this.setNewTag() // 设置上新标识
						
						// 分段缓存下数据，如果数据量过大会导致性能问题						
						let storage1 = JSON.parse(JSON.stringify(this.allData)) // 深拷贝
						let storage2 = JSON.parse(JSON.stringify(this.allData)) // 深拷贝
						let storage3 = JSON.parse(JSON.stringify(this.allData)) // 深拷贝
						uni.setStorageSync(allDataPart1CachedKey, storage1.slice(0,storage1.length/3))
						uni.setStorageSync(allDataPart2CachedKey, storage2.slice(storage2.length/3,storage2.length/3*2))
						uni.setStorageSync(allDataPart3CachedKey, storage3.slice(storage3.length/3*2,storage3.length))
						uni.setStorageSync('gamesCount', this.allData.length)

						if (i == maxCount) {
							uni.hideLoading()
						}
					})
				}
			},
			
			// 设置上新标识
			setNewTag() {
				this.allData.map((item) => {
					// 筛选出3天内更新的游戏
					if (this.dateDifference(item.createdAt, this.todayTime, 'day') <= 3) {
						// 设置新上架的标识
						item.isNew = true
					}
				})
			},

			startSearch() {
				if (this.keyword.length == 0) {
					this.list = []
					return
				}
				this.list = fuzzyQuery(this.allData, this.keyword)

				// 更新搜索行为的标识
				this.setSearchFlag(true)
			},

			listClick(item) {
				uni.navigateTo({
					url: '../recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON
						.stringify(item))
				})
			},
		}
	}
</script>

<style>
	@import url("../common/cgp_recommend.css");
</style>

<style lang="scss" scoped>
	@import './cgp_recommend_search.scss';
</style>
