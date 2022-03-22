<template>
	<view class="login-page">
		<image src="../static/logo.png" mode="aspectFit"></image>
		<u-button shape="circle" type="primary" @click="login()">一键登录</u-button>
	</view>
</template>

<script>
	import { userAuth, userUpInfo } from './login.js'
	
	export default {
		data() {
			return {
				userInfo: null,
			}
		},
		methods: {
			// 获取用户信息
			login() {
				// 获取微信用户信息
				if (uni.getUserProfile) {
					let _this = this
					uni.getUserProfile({
						desc:'用于完善用户信息',
						lang:'zh_CN',
						success(res) {
							_this.bmobLogin(res)
						},
						fail(err) {
							console.log(err)
						}
					})
				}
			},
			// Bmob一键登录
			bmobLogin(res) {
				userAuth(this.Bmob).then(userAuth => {
					// 小程序更新用户信息
					userUpInfo(this.Bmob, res.userInfo).then(result => {
						
						uni.showToast({
							title:'一键登陆成功',icon:'success'
						})
						
						this.upUserInfo(this) // 把用户信息存储到store
						
						setTimeout(() => {
							uni.navigateBack() // 回退页面
						},1500)
						
					}).catch(err => {
						console.log(err)
					})
					
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './login.scss';
</style>
