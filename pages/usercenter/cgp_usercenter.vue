<template>
	<!-- cgp 用户中心 -->
	<view class="cgp-usercenter-page">
		<!-- 用户头像 -->
		<view class="cgp-usercenter-page-avatar" @click="!!!userInfo ? $u.route('/pages_login/login/login') : ''">
			<u-avatar :src="!!userInfo && !!userInfo.userPic ? userInfo.userPic : ''"></u-avatar>
			<view class="r">
				<text>{{!!userInfo && !!userInfo.userPic ? userInfo.nickName : '立即登录'}}</text>
				<text class="level" :style="{'color': userLevelColor}">{{!!userInfo && !!userInfo.level ? userInfo.level : '登录查看级别'}}</text>
			</view>
			<!-- 签到 -->
			<u-button class="signin" type="error" size="mini" :plain="!isSignIn" shape="circle"
			 @click="!!!userInfo ? $u.route('/pages_login/login/login') : signin()">签到</u-button>
		</view>
		<!-- 排行榜单-动作游戏榜、角色扮演榜等 -->
		<leaderboards-com></leaderboards-com>
		<!-- 加入、关于、设置 -->
		<u-cell-group :border="false">
			<view @click="$u.route(!!!userInfo && item.title == '设置' ? '/pages_login/login/login' : item.path)"
			 v-for="(item,index) in cellTitles" :key="index">
				<u-cell-item :icon="item.icon" :title="item.title"></u-cell-item>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
	import { userSignIn } from '../../pages_usercenter/common/cgp_usercenter.js'
	
	// 排行榜组件
	import leaderboardsCom from './usercenter_leaderboards_component.vue'

	export default {
		components: {
			leaderboardsCom
		},

		data() {
			return {
				// 用户信息
				userInfo: null,
				// 签到标记
				isSignIn: false,
				// cell单元格数组
				cellTitles: [{
						title: '加入',
						icon: 'man-add',
						path: '/pages_usercenter/usercenter_join/usercenter_join'
					},
					{
						title: '关于',
						icon: 'info-circle',
						path: '/pages_usercenter/usercenter_about/usercenter_about'
					},
					{
						title: '设置',
						icon: 'setting',
						path: '/pages_usercenter/usercenter_setting/usercenter_setting'
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

		onShow() {
			this.userInfo = this.$store.state.userInfo // 配置用户信息
			this.isSignIn = !!uni.getStorageSync('signin') && this.isToday(uni.getStorageSync('signin')) // 签到标记
		},
		
		computed: {
			// 等级称号字体颜色
			userLevelColor() {
				return this.$store.state.userLevelColor
			}
		},

		methods: {
			// 签到
			signin() {
				userSignIn(this.Bmob, this.isSignIn).then(res => {
					this.isSignIn = true
					// 签到成功后更新本地用户信息
					this.upUserInfo(this)
				}).catch(err => {
					console.log(err)
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

<style lang="scss" scoped>
	@import '../../pages_usercenter/common/cgp_usercenter.scss';
</style>
