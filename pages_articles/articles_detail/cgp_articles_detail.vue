<template>
	<!-- 热门文章 详情页 -->
	<view class="articles-detail-container">
		<!-- 标题 -->
		<text class="articles-detail-title">{{ detailInfo.title }}</text>

		<!-- 文章内容 -->
		<view class="articles-detail-box">
			<u-parse :html="detailInfo.content" :tag-style="style" :lazy-load="true" :show-with-animation="true" :use-cache="true"></u-parse>
		</view>
		
		<!-- 视频广告 -->
		<ad unit-id="adunit-27b65fb3a43490ad" ad-type="video" ad-theme="white"></ad>
		
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
		
		onShareAppMessage() {
			return {
				title: this.detailInfo.title,
				imageUrl: this.detailInfo.image,
				path: '/pages_articles/articles_detail/cgp_articles_detail?detailInfo=' +
						encodeURIComponent(JSON.stringify(this.detailInfo))
			}
		},
	}
</script>

<style>
	@import url("./cgp_articles_detail.css");
</style>
