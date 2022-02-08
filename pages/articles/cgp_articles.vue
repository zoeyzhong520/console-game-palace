<template>
	<!-- cgp 热门文章 -->
	<view class="articles-container">
		<!-- 视频广告 -->
		<ad unit-id="adunit-522e583446038e4f" ad-type="video" ad-theme="white"></ad>
		<u-gap></u-gap>
		
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
			}
		},

		onLoad() {
			uni.startPullDownRefresh()
		},

		methods: {
			listClick(item) {
				uni.navigateTo({
					url: '../../pages_articles/articles_detail/cgp_articles_detail?detailInfo=' +
						encodeURIComponent(JSON.stringify(item))
				})
			},

			// 刷新数据
			refreshData(isLoadMore) {
				isLoadMore ? this.page++ : this.page = 0

				// 获取热门文章列表
				cgp_popular_articles_list(this.Bmob, this.page).then((res) => {
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
				title: '单机小助-热门文章也好看哦'
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
