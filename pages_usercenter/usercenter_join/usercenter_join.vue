<template>
	<!-- 加入俱乐部 -->
	<view class="usercenter-join-container">
		<u-notice-bar style="width: 690rpx;" mode="horizontal" :list="list" :speed="150"></u-notice-bar>
		<image @error="imgLoadErr" :show-menu-by-longpress="true" src="../static/wechatCode.jpg" mode="aspectFit"></image>
		<!-- 说明 -->
		<text class="usercenter-join-description">长按图片识别二维码\n申请加入俱乐部，与游友们一起开心畅谈！</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// u-notice-bar 数据
				list: [
					'长按图片识别二维码',
					'申请添加好友时，备注游戏'
				]
			}
		},

		computed: {
			// 微信二维码
			wechatCode() {
				return this.$store.state.wechatCode
			}
		},

		methods: {
			// 图片加载失败
			imgLoadErr(err) {
				console.log(JSON.stringify(err))
			}
		}
	}
</script>

<style>
	@import url("./usercenter_join.css");
</style>
