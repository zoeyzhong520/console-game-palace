<template>
	<!-- CGP 筛选页 -->
	<view class="">
		<u-search class="slot-wrap" placeholder="请输入游戏名称" v-model="keyword" :focus="true" @custom="startSearch" @search="startSearch"></u-search>
		
		<!-- 视频广告 -->
		<ad unit-id="adunit-34e2b370403d64f8" ad-type="video" ad-theme="white"></ad>
		
		<!-- 列表 -->
		<view class="list-cell" v-for="(item, index) in list" :key="index" @click="listClick(item)">
			<!-- 图片 -->
			<image class="list-cell-image" :src="item.image" mode="aspectFill"></image>
			<view style="display: flex;flex-direction: column;position: relative;">
				<!-- 标题 -->
				<text class="list-cell-title">{{ item.title }}</text>
				<!-- 简介 -->
				<text class="list-cell-description">{{ item.description }}</text>
				<!-- 阅读全文 -->
				<!-- <view class="list-cell-check-detail">阅读全文</view> -->
			</view>
		</view>
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
	
	const all_data_cached_key = 'cgp_recommend_search_all_data'
	
	export default {
		watch: {
			keyword(val) {
				// console.log(val)
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
			// 获取全部数据
			// this.getAllData()
			this.callingAPI()
		},
		
		methods: {
			...mapMutations(['setSearchFlag']),
			
			getAllData() {
				// 调用API前，先判断本地是否有已经缓存的全部数据
				this.getStorage(all_data_cached_key).then((res) => {
					if (!!res) {
						// 已经缓存过了，直接返回
						this.allData = res
						return
					}
					
					// 没有缓存过
					this.callingAPI()
				})
			},
			
			callingAPI() {
				// 目前有1.3w余部游戏资源，设置自动分页请求
				uni.showLoading({
					mask:false
				})
				
				// 根据当前游戏总数目计算出需要分页多少
				var maxCount = Math.ceil(this.store.state.gamesCount / 100)
				// console.log(maxCount)
				for (var i=0; i<maxCount; i ++) {
					recommend_search_all_data(this.Bmob, i).then((res) => {
						if (i == 1) {
							this.allData = res
						} else {
							this.allData = this.allData.concat(res)
						}
						
						// 缓存下数据
						this.setStorage(all_data_cached_key, this.allData).then((res) => {})
						
						if (i == maxCount) {
							uni.hideLoading()
						}
					})
				}
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
					url:'../recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
		}
	}
</script>

<style>
	@import url("../common/cgp_recommend.css");
</style>
