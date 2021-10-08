<template>
	<!-- 热门文章 详情页 -->
	<view class="articles-detail-container">
		<!-- 标题 -->
		<text class="articles-detail-title">{{ detailInfo.title }}</text>

		<!-- 文章内容 -->
		<view class="articles-detail-box">
			<u-parse :html="detailInfo.content" :tag-style="style" :lazy-load="true" :show-with-animation="true" :use-cache="true"></u-parse>
		</view>
		
		<view class="articles-detail-box">
			<u-link :href="detailInfo.source" :under-line="true">内容来源</u-link>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 详情页数据
				detailInfo: {},
				style: {
					// 字符串的形式
					p: 'color: #333333;font-size:36rpx;line-heught:68rpx',
				},
			}
		},

		onLoad(e) {
			if (e.detailInfo) {
				this.detailInfo = JSON.parse(decodeURIComponent(e.detailInfo))
				// console.log(this.detailInfo)
			}
		},

		methods: {

		},
	}
</script>

<style>
	@import url("./cgp_articles_detail.css");
</style>
