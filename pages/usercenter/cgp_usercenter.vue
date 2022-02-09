<template>
	<!-- cgp 用户中心 -->
	<view class="cgp-usercenter-container">
		<!-- 排行榜单-动作游戏榜、角色扮演榜等 -->
		<leaderboards-com></leaderboards-com>
		<!-- 加入俱乐部、关于单机小助 -->
		<u-cell-group :border="false">
			<view @click="cellClick(item)" v-for="(item,index) in cellTitles" :key="index">
				<u-cell-item :icon="item.icon" :title="item.title"></u-cell-item>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
	// 排行榜组件
	import leaderboardsCom from './usercenter_leaderboards_component.vue'

	export default {
		components: {
			leaderboardsCom
		},

		data() {
			return {
				// cell单元格数组
				cellTitles: [{
						title: '加入俱乐部',
						icon: 'chat',
						path: '/pages_usercenter/usercenter_join/usercenter_join'
					},
					{
						title: '关于单机小助',
						icon: 'info-circle',
						path: '/pages_usercenter/usercenter_about/usercenter_about'
					}
				]
			}
		},

		onLoad() {
			// 审核中不显示 加入俱乐部
			if (this.store.state.isInReview) {
				this.cellTitles.splice(0, 1)
			}

			// 隐藏 tabBar 某一项的右上角的红点
			uni.hideTabBarRedDot({
				index: 2
			})
		},

		methods: {
			// 点击cell
			cellClick(item) {
				uni.navigateTo({
					url: item.path
				})
			}
		},
		
		onShareAppMessage() {
			return {
				title: '单机小助-快戳我进宝库'
			}
		},
		
		onTabItemTap() {
			uni.vibrateShort()
		},
	}
</script>

<style>
	@import url("../../pages_usercenter/common/cgp_usercenter.css");
</style>
