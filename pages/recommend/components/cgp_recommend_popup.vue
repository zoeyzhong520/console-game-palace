<template>
	<u-popup v-model="isShow" mode="right" @close="close">
		<u-gap :height="statusNavBarH" bg-color="#fff"></u-gap>
	
		<view class="popup">
			<image src="../../../static/recommend/recommend_close.png" mode="aspectFit" @click="close()"></image>
			<text class="popup-title">选择游戏类别：</text>
			<view class="popup_item" v-for="(item,index) in list" :key="index" @click="listClick(index)"
			:style="{'background': item.isSelect ? '#2979ff' : '#EBEBEB', 'color': item.isSelect ? '#fff' : '#666'}">
				{{item.name}}
			</view>
		</view>
	</u-popup>
</template>

<script>
	import { cgp_recommend_tabsList } from '../../../pages_recommend/common/cgp_recommend.js'
	
	export default {
		props: {
			// 显示状态
			show: {
				type: Boolean,
				default: false
			},
			// 列表
			array: {
				type: Array,
				default: []
			}
		},
		watch: {
			show(newVal) {
				this.isShow = newVal
			},
			array(newVal) {
				this.list = newVal
			}
		},
		data() {
			return {
				isShow: false,
				list: [],
			}
		},
		mounted() {
			this.init()
		},
		computed: {
			statusNavBarH() {
				return (uni.getSystemInfoSync().statusBarHeight + 44) * 2
			}
		},
		methods: {
			// 初始化
			init() {
				this.isShow = this.show
				// 因为Array是引用类型，所以popup中对list进行修改后，会把状态同步到父组件
				this.list = this.array
			},
			close() {
				this.isShow = false
				this.$emit('close')
			},
			listClick(index) {
				// 遍历数组
				this.list.map((item, idx) => {
					item.isSelect = idx == index
				})
				this.$emit('click', index)
				this.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 筛选-弹出框 */
	.popup {
		position: relative;
		padding-top: 30rpx;
		width: 530rpx;
		
		image {
			position: absolute;
			right: 30rpx;
			top: 40rpx;
			width: 44rpx;
			height: 44rpx;
		}
		
		.popup-title {
			display: block;
			margin-left: 30rpx;
			margin-bottom: 20rpx;
			padding: 10rpx;
			font-size: 30rpx;
			font-weight: 500;
		}
		
		.popup_item {
			float: left;
			padding: 10rpx;
			margin: 0 0 30rpx 30rpx;
			width: 220rpx;
			border-radius: 8rpx;
			font-size: 30rpx;
			text-align: center;
			color: #666;
			background: #EBEBEB;
		}
	}
</style>
