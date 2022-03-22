<template>
	<view class="usercenter-setting-page">
		<u-cell-group :border="false">
			<u-cell-item icon="setting" title="退出登录" @click="logout"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 退出登录
			logout() {
				let _this = this
				uni.showModal({
					title:'温馨提示',
					content:'是否确定退出登录？',
					confirmText:'确定',
					cancelText:'取消',
					success(res) {
						if (res.confirm) {
							uni.setStorageSync('bmob', null)
							_this.upUserInfo(_this)
							uni.navigateBack()
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './usercenter_setting.scss'
</style>
