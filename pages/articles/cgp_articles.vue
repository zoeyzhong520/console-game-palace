<template>
	<!-- cgp 热门文章 -->
	<view class="articles-container">
		<view class="articles-card" v-for="(item,index) in list" :key="index" @click="listClick(item)">
			<!-- 图片 -->
			<image class="articles-image" :src="item.image" mode="aspectFill"></image>
			
			<!-- 标题 -->
			<text class="articles-title">{{ item.title }}</text>
		</view>
		<!-- NoNetwork 无网络提示 -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	// 在页面中定义插屏广告
	let interstitialAd = null
	
	import {
		cgp_popular_articles_list
	} from '../../pages_articles/common/cgp_articles.js'
	
	export default {
		data() {
			return {
				// 热门文章列表数据
				list: [],
				// 分页加载的页码
				page: 0,
				onShowCount: 0,
			}
		},
		
		onShow() {
			this.onShowCount++
			// 在适合的场景显示插屏广告
			if (interstitialAd && this.onShowCount >= 2) {
			  interstitialAd.show().catch((err) => {
			    console.error(err)
			  })
			  console.log('onShow')
			}
		},
		
		onLoad() {
			console.log('onLoad')
			uni.startPullDownRefresh()
			
			// 在页面onLoad回调事件中创建插屏广告实例
			if (wx.createInterstitialAd) {
			  interstitialAd = wx.createInterstitialAd({
			    adUnitId: 'adunit-d23270abf06d64d0'
			  })
			  interstitialAd.onLoad(() => {})
			  interstitialAd.onError((err) => {})
			  interstitialAd.onClose(() => {})
			}
		},
		
		methods: {
			listClick(item) {
				uni.navigateTo({
					url:'../../pages_articles/articles_detail/cgp_articles_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			
			// 刷新数据
			refreshData(isLoadMore) {
				isLoadMore ? this.page ++ : this.page = 0
				
				// 获取热门文章列表
				cgp_popular_articles_list(this.Bmob,this.page).then((res) => {
					uni.stopPullDownRefresh()
					
					if (this.page == 0) {
						this.list = res
					} else {
						this.list = this.list.concat(res)
					}
				})
			},
		},
		
		onShareAppMessage() {
			return {
				title: '单机小助-热门文章'
			}
		},
		
		onPullDownRefresh() {
			this.refreshData()
		},
		
		onReachBottom() {
			this.refreshData(true)
		},
	}
</script>

<style>
	page {
		background-color: #f5f6f7;
	}
</style>

<style>
	@import url("../../pages_articles/common/cgp_articles.css");
</style>
