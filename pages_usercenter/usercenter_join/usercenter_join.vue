<template>
	<!-- 加入俱乐部 -->
	<view class="usercenter-join-container">
		<u-notice-bar style="width: 690rpx;" mode="horizontal" :list="list" :speed="150" type="primary"></u-notice-bar>
		<view v-if="!joinRewardedVideoAdFlag">
			<u-gap></u-gap>
			<u-button size="default" type="primary" shape="circle" :ripple="true" :plain="false" @click="lookRewardedVideoAd()">观看广告获取图片二维码</u-button>
		</view>

		<view v-if="isEnded || joinRewardedVideoAdFlag" style="display: flex;flex-direction: column;align-items: center;">
			<image @error="imgLoadErr" :show-menu-by-longpress="true" src="../static/wechatCode.jpg" mode="aspectFit">
			</image>
			<!-- 说明 -->
			<text class="usercenter-join-description">长按图片识别二维码\n申请加入俱乐部，与游友们一起开心畅谈！</text>
		</view>
	</view>
</template>

<script>
	// 在页面中定义激励视频广告
	let videoAd = null
	
	import {
		mapMutations
	} from 'vuex' // 使用Vuex
	
	export default {
		data() {
			return {
				// u-notice-bar 数据
				list: [
					'长按图片识别二维码',
					'申请添加好友时，备注游戏'
				],
				// 判断是否视频是否播放结束、可以向用户下发奖励
				isEnded: false,
			}
		},

		computed: {
			// 微信二维码
			wechatCode() {
				return this.$store.state.wechatCode
			},
			
			joinRewardedVideoAdFlag() {
				return this.store.state.joinRewardedVideoAdFlag
			}
		},

		onLoad() {
			// 在页面onLoad回调事件中创建激励视频广告实例
			this.createRewardedVideoAd()
		},

		methods: {
			...mapMutations(['setJoinRewardedVideoAdFlag']),
			
			// 图片加载失败
			imgLoadErr(err) {
				console.log(JSON.stringify(err))
			},
			
			// 创建激励视频广告
			createRewardedVideoAd() {
				if (wx.createRewardedVideoAd && !this.store.state.joinRewardedVideoAdFlag) {
					videoAd = wx.createRewardedVideoAd({
						adUnitId: 'adunit-d9eb6feb0a3f3ba0'
					})
					videoAd.onLoad(() => {})
					videoAd.onError((err) => {})
					videoAd.onClose(res => {
					    // 用户点击了【关闭广告】按钮
					    if (res && res.isEnded) {
					      // 正常播放结束，可以下发游戏奖励
						  this.isEnded = true
						  this.setJoinRewardedVideoAdFlag(true)
					    } else {
					      // 播放中途退出，不下发游戏奖励
					    }
					})
				
				}
			},

			// 观看激励视频广告
			lookRewardedVideoAd() {
				// 用户触发广告后，显示激励视频广告
				if (videoAd) {
					videoAd.show().catch(() => {
						// 失败重试
						videoAd.load()
							.then(() => videoAd.show())
							.catch(err => {
								console.log('激励视频 广告显示失败')
							})
					})
				}
			},
		}
	}
</script>

<style>
	@import url("./usercenter_join.css");
</style>
