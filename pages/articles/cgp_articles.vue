<template>
	<!-- cgp 热门文章 -->
	<view class="articles-container">
		<view class="articles-card" v-for="(item,index) in list" :key="index" @click="listClick(item)">
			<!-- 图片 -->
			<image class="articles-image" :src="item.image" mode="aspectFill"></image>
			
			<!-- 标题 -->
			<text class="articles-title">{{ item.title }}</text>
		</view>
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
				list: []
			}
		},
		
		onLoad() {
			uni.startPullDownRefresh()
		},
		
		methods: {
			listClick(item) {
				uni.navigateTo({
					url:'../../pages_articles/articles_detail/cgp_articles_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
		},
		
		onShareAppMessage() {
			return {
				title: '单机小助-热门文章'
			}
		},
		
		onPullDownRefresh() {
			// 获取热门文章列表
			cgp_popular_articles_list(this.Bmob).then((res) => {
				uni.stopPullDownRefresh()
				
				this.list = res
			})
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
