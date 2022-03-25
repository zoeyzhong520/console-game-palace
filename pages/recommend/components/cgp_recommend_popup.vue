<template>
	<u-popup v-model="isShow" mode="right" @close="close">
		<u-gap :height="statusNavBarH" bg-color="#fff"></u-gap>
	
		<view class="popup">
			<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQqADAAQAAAABAAAAQgAAAAD6cK8JAAADwElEQVR4Ae2ZOW8UMRiGQ7gkQFAgSv4ABSAgh7jScxPCDUGiQKIiHBKROBJCi/gHNBQIUVJQgERPi0QHSbgPIcgB4cgBzxvhyJmMvRuS8eys/Env2mN7/fl79vOsd6emJlokEAlEApFAJBAJRAKRQCQQCUQClUdgXgUtqTaPtSzFaRd6jO6gOpSX7cDxffQQnUZBgdzA4U80gobRK9SEQlsrDvuR1qC1DKGTKIgtxks3+mNpjLpgbEWhzECw16H6g1ALWICjZyi5AANjS4CFHMOHMiG5Bl3fC+B/wsUpaqMouRDBeIk2o6zMB6EPp01ZOU6bdz6N7UiBh4RxFH+uTBCEZjQXBTVtER+MHvo3zeKKjjCXD0IL/bl9nS/EuWC4tslswRAEfeLJ7NO12nOFgP8Ja6OWBkML/Yhmcs84wft/oTQIypBtqKJMMNLuGQrgA/qfbVIKwvaKImAt5ix1F4z39G20xpaqtjLAlwkVC8EE5oOhzCgHhiDo5OraDjpWF8LOsUrXPUOZ0eiJQucEF4QB+nZ63luRXYLh2ibv6EuDIQg/UFomCMIuVEjzwXhLRA1WVDos+TKhsBBMjOepuDJDMNah/ciVCYP0FR4CMYybD8ZnRnxHadtBEHaPz1BFLz4YLgh7qij+SaFc4Mq1TWwYyoS9k95ZhRdniOk3sgO361/pK8w5YSafj34guW6MAvIJ6QZa1XaA6Fw3Rjsr9G1SX60kyoVggLwBRF21wdA5YQiZIO1yxNGuMVUFQ/cE13ZQ+z7Ujmw4dl0wNqBCm4L8huzATF0Zou1i7CoV05csX9O33gwsWlkKwsGUgDpoS0Iw13puUrhvk2YW7cuEQykQTFMnFRN8stSjgsLA0InQBUHnh8OolF1jQBKCuRaMtaUmyLvfB0E/sfVvdLlWWBj6gTSIzCdnl4KgP12ma128wZ7HrvfQt2a6E2Y9PgsIZs3XqdgA7Ho3favNwDxLPVlSursy4Qt95dwTSsVwmQHKKhuCqffS3ohqUS4mCApyAJlF2WXfv36KWbFLzOKD0UB/cBjlQJjOjbFcUr7M0DapDw1DD1d8maA/YrOyK0zsyowX9K3KynFyXmXDE2RvA1Pvpz1LCGYtOo67YNwyg7Iul+BAx10TvCkF4XjWzq35O6mnwXhkjcm0OofZb6NhNIZGkSC0otDWgUOdVrUOSc9KL6JgthJPd1Ev0jZpQXlZG46foufoJlLGBrcVeFwU3OtUh8toWj61ObZEApFAJBAJRAKRQCQQCUQCkUAkkC+Bv/k5F7f4ChvQAAAAAElFTkSuQmCC" mode="aspectFit"
			 @click="close()"></image>
			 
			<view class="" style="overflow: hidden;">
				<text class="popup-title">选择游戏类别：</text>
				<view class="popup-item" v-for="(item,index) in list" :key="index" @click="listClick(index)"
				:style="{'background': item.isSelect ? '#2979ff' : '#EBEBEB', 'color': item.isSelect ? '#fff' : '#666'}">
					{{item.name}}
				</view>
			</view>
			
			<view class="" style="overflow: hidden;">
				<text class="popup-title">更多筛选条件（多选）：</text>
				<view class="popup-item" v-for="(item,index) in filterList" :key="index" @click="filterListClick(index)"
					:style="{'background': item.isSelect ? '#2979ff' : '#EBEBEB', 'color': item.isSelect ? '#fff' : '#666'}">
					{{item.name}}
				</view>
			</view>
			
			<!-- 清空筛选、确定 -->
			<view class="popup-bottom">
				<view class="popup-bottom-item" v-for="(item,index) in ['清空筛选','确定']" :key="index">
					<u-button type="primary" shape="circle" :plain="index == 0" @click="bottomClick(index)">{{item}}</u-button>
				</view>
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
			},
			// 当前选中的
			current: {
				type: Number,
				default: 0
			}
		},
		watch: {
			show(newVal) {
				this.isShow = newVal
			},
			array(newVal) {
				this.list = newVal
			},
			current(newVal) {
				// 遍历数组
				this.list.map((item, idx) => {
					item.isSelect = idx == this.current
				})
				this.currentIndex = newVal
			}
		},
		data() {
			return {
				currentIndex: 0, // 游戏类型
				isShow: false,
				list: [],
				filterList: [
					{
						name: '更新时间',
						isSelect: true
					},
					{
						name: '浏览数量',
						isSelect: false
					}
				],
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
				this.currentIndex = index
				// this.$emit('click', index)
				// this.close()
			},
			filterListClick(index) {
				this.filterList[index].isSelect = !this.filterList[index].isSelect
			},
			bottomClick(index) {
				if (index == 0) {
					// 清空筛选
					this.list.map((item, idx) => {
						item.isSelect = idx == this.current
					})
					this.filterList.map((item, idx) => {
						item.isSelect = false
					})
					this.currentIndex = this.current
				}
				if (index == 1) {
					// 确定
					this.$emit('confirm', {
						index: this.currentIndex, // 类别A-Z
						updatedAt: this.filterList[0].isSelect, // 更新时间
						readCount: this.filterList[1].isSelect // 浏览数量
					})
					this.close()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 筛选-弹出框 */
	.popup {
		position: relative;
		padding-top: 30rpx;
		width: 600rpx;
		
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
		
		.popup-item {
			float: left;
			padding: 10rpx;
			margin: 0 0 30rpx 30rpx;
			width: 160rpx;
			border-radius: 8rpx;
			font-size: 28rpx;
			text-align: center;
			color: #666;
			background: #EBEBEB;
		}
		
		.popup-bottom {
			position: fixed;
			bottom: 30rpx;
			
			&-item {
				float: left;
				margin: 0 0 30rpx 30rpx;
				width: 255rpx;
				text-align: center;
			}
		}
	}
</style>
