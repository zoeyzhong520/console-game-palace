<template>
	<!-- 排行榜列表 -->
	<view class="leaderboards-list-container">
		<!-- 视频广告 -->
		<ad unit-id="adunit-9738cef38f29d674" ad-type="video" ad-theme="white"></ad>
		
		<!-- 列表 -->
		<view class="list-cell" v-for="(item, index) in list" :key="index" @click="listClick(item)">
			<!-- 图片 -->
			<u-image :src="item.image" width="230rpx" height="156rpx" borderRadius="8rpx"></u-image>
				<!-- 排行榜标识 -->
				<text class="list-cell-new-tag">
					{{ 'Top'+(index+1) }}
				</text>
			</image>
			<view style="display: flex;flex-direction: column;position: relative;">
				<!-- 标题 -->
				<text class="list-cell-title">{{ item.title }}</text>
				<!-- 简介 -->
				<text class="list-cell-description">{{ item.description }}</text>
			</view>
			<!-- video标识 -->
			<text v-if="item.videoPath && item.videoPath.length > 0" class="list-cell-video-tag">▷</text>
		</view>
	</view>
</template>

<script>
	import {
		leaderboards_query_list
	} from './leaderboards_list.js'
 	
	export default {
		data() {
			return {
				// 导航标题
				navTitle: '',
				// 游戏类型
				type: '',
				// 列表数据
				list: [],
			}
		},
		
		onLoad(e) {
			if (e.type) {
				this.type = e.type
			}
			
			if (e.navTitle) {
				this.navTitle = e.navTitle
				uni.setNavigationBarTitle({
					title:e.navTitle
				})
			}
			
			this.refreshData()
		},
		
		methods: {
			// 刷新数据
			refreshData(isLoadMore) {
				// 获取热门文章列表
				leaderboards_query_list(this.Bmob, this.type, this.page).then((res) => {
					if (this.page == 0) {
						this.list = res
					} else {
						this.list = this.list.concat(res)
					}
				})
			},
			
			// 点击列表
			listClick(item) {
				uni.navigateTo({
					url:'/pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
		},
		
		onShareAppMessage() {
			return {
				title: this.navTitle,
				imageUrl: this.list[0].image,
				path: '/pages_usercenter/usercenter_leaderboards/leaderboards_list/leaderboards_list?navTitle='+this.navTitle+'&type='+this.type
			}
		},
	}
</script>

<style>
	@import url("./leaderboards_list.css");
	@import url("../../../pages_recommend/common/cgp_recommend.css");
</style>
