<template>
	<!-- cgp 游戏推荐 -->
	<view class="container">
		<u-navbar :is-back="false" :border-bottom="false">
			<!-- 导航搜索 -->
			<u-search class="slot-wrap" placeholder="请输入游戏名称" action-text="筛选" :disabled="true" @custom="show = true" @click="searchClick"></u-search>
		</u-navbar>
		
		<!-- 吸顶 -->
		<u-tabs class="sticky" :list="tabsList" :current="current" @change="tabsChange"></u-tabs>
		
		<!-- Popup 弹出层 -->
		<u-popup v-model="show" mode="top" :closeable="true" close-icon-pos="bottom-right">
			<u-gap :height="statusNavBarH" bg-color="#fff"></u-gap>
			
			<u-grid :col="3">
				<u-grid-item v-for="(item,index) in tabsList" :key="index" :index="index" @click="gridClick">
					<view class="grid-text">{{ item.name }}</view>
				</u-grid-item>
			</u-grid>
		</u-popup>
		
		<view v-show="current == 0">
			<u-gap height="80" bg-color="#fff"></u-gap>
			
			<!-- 图片轮播 -->
			<u-swiper :list="bannerList" :title="true" :effect3d="false" border-radius="0" :height="388" @click="swiperClick"></u-swiper>
		</view>

		<!-- 列表 -->
		<view :style="{'margin-top': current > 0 ? '80rpx' : ''}">
			<view class="list-cell" v-for="(item, index) in list" :key="index" @click="listClick(item)">
				<!-- 图片 -->
				<image class="list-cell-image" :src="item.image" mode="aspectFill"></image>
				<view style="display: flex;flex-direction: column;position: relative;">
					<!-- 标题 -->
					<text class="list-cell-title">{{ item.title }}</text>
					<!-- 简介 -->
					<text class="list-cell-description">{{ item.description }}</text>
					<!-- 阅读全文 -->
					<view class="list-cell-check-detail">阅读全文</view>
					<!-- 新上架标识 -->
					<text v-if="item.isNew" class="list-cell-new-tag">New</text>
				</view>
			</view>
		</view>
		<!-- NoNetwork 无网络提示 -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {
		cgp_recommend_tabsList,
		cgp_configs,
		cgp_recommend_banner_list,
		cgp_recommend_all_list,
		cgp_recommend_query_list,
		cgp_recommend_types
	} from '../../pages_recommend/common/cgp_recommend.js'

	import {
		mapMutations
	} from 'vuex' // 使用Vuex
	
	export default {
		data() {
			return {
				// tabs标签数组
				tabsList: [],
				// 当前选中的标签
				current: 0,
				// 广告位数据
				bannerList: [],
				// 热门推荐数据
				list: [],
				// 控制弹出层打开、收起的变量
				show: false,
				// 缓存的数据
				allData: {
					ALL: [],
					
					A: [],
					B: [],
					C: [],
					
					D: [],
					E: [],
					F: [],
					
					G: [],
					H: [],
					I: [],
					
					J: [],
					K: [],
					L: [],
					
					M: [],
					N: [],
					O: [],
					
					P: [],
					Q: [],
					R: []
				},
				// 导航栏高度
				statusNavBarH: 0,
				// 当前页数【字典元素分别对应不同标签】
				pages: {
					ALL: 0,
					
					A: 0,
					B: 0,
					C: 0,
					
					D: 0,
					E: 0,
					F: 0,
					
					G: 0,
					H: 0,
					I: 0,
					
					J: 0,
					K: 0,
					L: 0,
					
					M: 0,
					N: 0,
					O: 0,
					
					P: 0,
					Q: 0,
					R: 0
				},
				// 记录每个标签的滚动位置
				pageScrollArr: {
					ALL: 0,
					
					A: 0,
					B: 0,
					C: 0,
					
					D: 0,
					E: 0,
					F: 0,
					
					G: 0,
					H: 0,
					I: 0,
					
					J: 0,
					K: 0,
					L: 0,
					
					M: 0,
					N: 0,
					O: 0,
					
					P: 0,
					Q: 0,
					R: 0
				},
			}
		},

		onLoad() {
			// tabs标签数组
			this.tabsList = cgp_recommend_tabsList
			
			// 获取配置信息
			this.getConfigs()
			
			// 获取广告位数据
			cgp_recommend_banner_list(this.Bmob).then((res) => {
				uni.stopPullDownRefresh()
				
				this.bannerList = res
			})
			
			// 获取今天是X年X月X日
			this.todayTime = this.$u.timeFormat(new Date().getTime(), 'yyyy-mm-dd hh:MM:ss')
			
			// 获取全部推荐数据
			cgp_recommend_all_list(this.Bmob,0).then((res) => {
				uni.stopPullDownRefresh()
				
				this.list = res
				
				this.list.map((item) => {
					// 筛选出一天内更新的游戏
					if (this.dateDifference(item.createdAt, this.todayTime) <= 3) {
						// 设置新上架的标识
						item.isNew = true
					}
				})
				
				this.allData.ALL = this.list
			})
			
			// 获取导航栏高度
			const sysInfo = uni.getSystemInfoSync()
			this.statusNavBarH = (sysInfo.statusBarHeight + 44) * 2
		},

		methods: {
			...mapMutations(['setIsInReview']),
			
			// 获取配置信息
			getConfigs() {
				cgp_configs(this.Bmob).then((res) => {
					// console.log(res)
					this.setIsInReview(res[0].isInReview)
				})
			},
			
			// tabs 标签切换
			tabsChange(index) {
				this.current = index;
				
				this.filterList(index)
				
				// 设置标签的滚动位置
				uni.pageScrollTo({
					scrollTop:this.pageScrollArr[cgp_recommend_types[index]],
					duration:0
				})
			},
			
			// 点击筛选菜单的某项
			gridClick(index) {
				this.current = index;
				
				this.filterList(index)
				
				// 关闭 Popup 弹出层
				this.show = false
				
				// 页面滚动到顶部
				uni.pageScrollTo({
					scrollTop:0,
					duration:0
				})
			},
			
			// 筛选列表数据
			filterList(index) {
				var type = cgp_recommend_types[index]
				// console.log(type)
				
				if (JSON.stringify(this.allData[type]) != '[]') {
					this.list = this.allData[type]
					return
				}
				
				// 筛选数据
				cgp_recommend_query_list(this.Bmob,index,0).then((res) => {
					uni.stopPullDownRefresh()
					
					this.list = res
					
					this.list.map((item) => {
						// 筛选出一天内更新的游戏
						if (this.dateDifference(item.createdAt, this.todayTime) <= 1) {
							// 设置新上架的标识
							item.isNew = true
						}
					})
					
					this.allData[type] = this.list
				})
			},
			
			// 刷新数据
			// isLoadMore 是否是加载更多
			refreshData(isLoadMore) {
				var type = cgp_recommend_types[this.current]
				var page = this.pages[type]
				isLoadMore ? page ++ : page = 0
				// console.log(page)
				this.pages[type] = page
				
				if (this.current == 0) {
					// 获取全部推荐数据
					cgp_recommend_all_list(this.Bmob,page).then((res) => {
						uni.stopPullDownRefresh()
						
						if (page == 0) {
							this.list = res
						} else {
							this.list = this.list.concat(res)
						}
						
						this.list.map((item) => {
							// 筛选出一天内更新的游戏
							if (this.dateDifference(item.createdAt, this.todayTime) <= 1) {
								// 设置新上架的标识
								item.isNew = true
							}
						})
						
						this.allData.ALL = this.list
					})
					return
				}
				
				if (this.current > 0) {
					// 筛选数据
					cgp_recommend_query_list(this.Bmob,this.current,page).then((res) => {
						uni.stopPullDownRefresh()
						
						if (page == 0) {
							this.list = res
						} else {
							this.list = this.list.concat(res)
						}
						
						this.allData[type] = this.list
					})
				}
			},
			
			// 点击广告位的某项
			swiperClick(index) {
				var item = this.bannerList[index]
				uni.navigateTo({
					url:'../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			
			// 点击列表的某项
			listClick(item) {
				uni.navigateTo({
					url:'../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			
			// 点击搜索框
			searchClick() {
				uni.navigateTo({
					url:'../../pages_recommend/recommend_search/cgp_recommend_search'
				})
			},
		},

		onShareAppMessage() {
			return {
				title: '单机小助-游戏推荐'
			}
		},
		
		onPullDownRefresh() {
			this.refreshData()
		},
		
		onReachBottom() {
			this.refreshData(true)
		},
		
		onPageScroll(e) {
			var type = cgp_recommend_types[this.current]
			this.pageScrollArr[type] = e.scrollTop
		},
	}
</script>

<style>
	@import url("../../pages_recommend/common/cgp_recommend.css");
</style>
