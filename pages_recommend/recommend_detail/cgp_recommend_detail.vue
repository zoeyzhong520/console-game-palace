<template>
	<!-- cgp 游戏推荐 详情页 -->
	<view class="recommend-detail-container">
		<u-notice-bar v-if="!cgp_isInReview" mode="horizontal" type="primary" :list="list" :speed="50"></u-notice-bar>

		<!-- 标题 -->
		<view class="recommend-detail-box">
			<text class="recommend-detail-title">{{ detailInfo.title }}</text>
		</view>
		
		<!-- 游戏简介 -->
		<view class="recommend-detail-box">
			<u-section title="游戏简介" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<text class="recommend-detail-description">{{ detailInfo.description }}</text>
			</view>
		</view>

		<!-- 游戏截图 -->
		<view class="recommend-detail-box">
			<u-section title="游戏截图" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<u-lazy-load v-for="(item, index) in detailInfo.imageList" :key="index" :image="item"
					@click="previewImage(index)"></u-lazy-load>
			</view>
		</view>

		<!-- 系统需求 -->
		<view class="recommend-detail-box" v-if="detailInfo.requirements">
			<u-section title="系统需求" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<text class="recommend-detail-description">{{ detailInfo.requirements }}</text>
			</view>
		</view>

		<!-- 资源地址 -->
		<view class="recommend-detail-box" v-if="!cgp_isInReview && detailInfo.resources">
			<u-section title="资源地址" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<u-parse :html="detailInfo.resources" :tag-style="style" :lazy-load="true" :show-with-animation="true"
					:use-cache="true"></u-parse>
					
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link v-if="detailInfo.tyUrl" :href="detailInfo.tyUrl" :under-line="true">点击拷贝天翼云下载链接</u-link>
				
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link :href="detailInfo.baiduUrl" :under-line="true">点击拷贝百度网盘下载链接</u-link>
				
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link href="zhongzhaojunJoe" :under-line="true" mp-tips="微信号已复制">点击复制微信号</u-link>
			</view>
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
				// 设置需要滚动的内容
				list: [
					'如遇网盘链接失效问题',
					'请加微：zhongzhaojunJoe',
					'微信号在页面底部点击可复制',
					'备注：单机小助网盘失效'
				]
			}
		},

		onLoad(e) {
			if (e.detailInfo) {
				this.detailInfo = JSON.parse(decodeURIComponent(e.detailInfo))
				// console.log(this.detailInfo)
			}
		},

		computed: {
			// 审核状态
			cgp_isInReview() {
				return this.store.state.isInReview
			},
		},

		methods: {
			previewImage(index) {
				var urls = []
				this.detailInfo.imageList.map((item, index) => {
					urls.push(item)
				})

				uni.previewImage({
					urls: urls,
					current: index
				})
			},
			
			// 视频播放出错时触发
			videoError(e) {
				console.log(e)
			},
		}
	}
</script>

<style>
	@import url("./cgp_recommend_detail.css");
</style>
