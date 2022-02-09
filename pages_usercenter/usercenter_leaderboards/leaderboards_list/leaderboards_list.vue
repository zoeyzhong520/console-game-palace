<template>
	<!-- 排行榜列表 -->
	<view class="leaderboards-list-container">
		<!-- 视频广告 -->
		<ad unit-id="adunit-9738cef38f29d674" ad-type="video" ad-theme="white"></ad>
		
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
				<view class="list-cell-check-detail">阅读全文</view>
				<!-- 排行榜标识 -->
				<view class="list-cell-new-tag">
					{{ 'Top'+(index+1) }}
				</view>
			</view>
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
