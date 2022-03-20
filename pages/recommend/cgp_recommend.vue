<template>
	<!-- cgp 游戏推荐 -->
	<view class="container">
		<u-navbar :is-back="false" :border-bottom="false">
			<!-- 导航搜索 -->
			<u-search class="slot-wrap" placeholder="搜索" :showAction="true" action-text="筛选" :disabled="true" @custom="show = true"
				@click="searchClick"></u-search>
		</u-navbar>

		<!-- 吸顶 -->
		<u-tabs class="sticky" :list="tabsList" :current="current" @change="tabsChange"></u-tabs>
		
		<!-- Popup 弹出层 -->
		<screeningPopup :show="show" :array="tabsList" @close="show = false" @click="tabsChange" />

		<view v-show="current == 0">
			<u-gap height="118" bg-color="#fff"></u-gap>

			<!-- 图片轮播 -->
			<u-swiper :list="bannerList" :title="true" effect3d="true" previousMargin="30rpx" nextMargin="30rpx"
				bgColor="#fff" @click="swiperClick"></u-swiper>
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
				</view>
				<!-- 新上架标识 -->
				<text v-if="item.isNew" class="list-cell-new-tag">New</text>
			</view>
		</view>
		<!-- NoNetwork 无网络提示 -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {
		cgp_recommend_tabsList,
		cgp_recommend_insert_deviceId,
		recommend_detail_editRecord_with_objectId,
		cgp_configs,
		cgp_recommend_banner_list,
		cgp_recommend_all_list,
		cgp_recommend_query_list,
		cgp_recommend_types
	} from '../../pages_recommend/common/cgp_recommend.js'

	import {
		mapMutations
	} from 'vuex' // 使用Vuex

	import screeningPopup from './components/cgp_recommend_popup.vue'
	
	export default {
		components: {
			screeningPopup,
		},
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
				// 分享携带的 objectId
				shareObjectId: '',
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

		onLoad(e) {
			if (e.shareObjectId) {
				// 分享打开
				this.shareObjectId = e.shareObjectId
				// 是否分享打开
				this.isShare = true
			}
			
			this.init()
		},

		methods: {
			...mapMutations(['setIsInReview', 'setGamesCount', 'setDeviceIdsObjectId', 'setSearchFlag',
				'setArticlesCount'
			]),
			
			// 初始化
			init() {
				// 获取今天是X年X月X日
				this.todayTime = this.$u.timeFormat(new Date().getTime(), 'yyyy-mm-dd hh:MM:ss')
				
				// tabs标签数组
				this.tabsList = cgp_recommend_tabsList
				this.tabsList.map((item, index) => {
					item.isSelect = index == 0 // 默认选中第一项
				})
				
				// 显示 tabBar 某一项的右上角的红点
				uni.showTabBarRedDot({
					index: 2
				})
				
				// HTTP
				this.getConfigs() // 获取配置信息
				this.insertDeviceId() // 新增一行记录 设备ID
				this.getBannerAllRecommendList() // 获取全部推荐、广告
			},
			
			// 新增一行记录 设备ID
			insertDeviceId() {
				cgp_recommend_insert_deviceId(this.Bmob).then(res => {
					this.setDeviceIdsObjectId(res.objectId)
					// 如果是分享打开此页面，则比对下两个 objectId 是否相同
					// objectId 不相同并且是新注册的设备，表明打开分享页的是新用户，把分享者权限打开	
					if (this.isShare) {
						if (res.objectId != this.shareObjectId && res.isNewDevice) {
							// 修改一行数据
							recommend_detail_editRecord_with_objectId(this.Bmob, this.shareObjectId).then(res => {
								// 好友点开自己分享的卡片，权限开通成功！
							})
						} else {
							// 点开自己分享的卡片，权限开通失败！
						}
					}
				})
			},

			// 获取配置信息
			getConfigs() {
				cgp_configs(this.Bmob).then((res) => {
					// console.log(res)
					this.setIsInReview(res[0].isInReview)
					this.setGamesCount(res[0].gamesCount)
					this.setArticlesCount(res[0].articlesCount)

					// 缓存文章总数
					if (!!!uni.getStorageSync('articlesCount')) {
						uni.setStorageSync('articlesCount', res[0].articlesCount)
					}

					// 为 tabBar 某一项的右上角添加文本
					if (!!uni.getStorageSync('articlesCount') && res[0].articlesCount > uni.getStorageSync(
							'articlesCount')) {
						uni.setTabBarBadge({
							index: 1,
							text: '' + (res[0].articlesCount - uni.getStorageSync('articlesCount'))
						})
					}
				})
			},
			
			// 获取广告、全部推荐
			async getBannerAllRecommendList() {
				await this.getAllRecommendList()
				await this.getBannerList()
			},
			
			// 获取广告位
			getBannerList() {
				cgp_recommend_banner_list(this.Bmob).then((res) => {
					uni.stopPullDownRefresh()
					this.bannerList = res
				})
			},
			
			// 获取全部推荐
			getAllRecommendList() {
				uni.showLoading()
				cgp_recommend_all_list(this.Bmob, 0).then((res) => {
					uni.stopPullDownRefresh()
					uni.hideLoading()
				
					this.list = res
				
					this.list.map((item) => {
						// 筛选出3天内更新的游戏
						if (this.dateDifference(item.createdAt, this.todayTime, 'day') <= 3) {
							// 设置新上架的标识
							item.isNew = true
						}
					})
				
					this.allData.ALL = this.list
				}).catch(err => {
					uni.hideLoading()
				})
			},

			// tabs 标签切换
			tabsChange(index) {
				this.current = index;
				
				this.filterList(index)

				// 设置标签的滚动位置
				uni.pageScrollTo({
					scrollTop: this.pageScrollArr[cgp_recommend_types[index]],
					duration: 0
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
				cgp_recommend_query_list(this.Bmob, index, 0).then((res) => {
					uni.stopPullDownRefresh()

					this.list = res

					this.list.map((item) => {
						// 筛选出3天内更新的游戏
						if (this.dateDifference(item.createdAt, this.todayTime, 'day') <= 3) {
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
				isLoadMore ? page++ : page = 0
				// console.log(page)
				this.pages[type] = page

				if (this.current == 0) {
					// 获取全部推荐数据
					cgp_recommend_all_list(this.Bmob, page).then((res) => {
						uni.stopPullDownRefresh()

						if (page == 0) {
							this.list = res
						} else {
							this.list = this.list.concat(res)
						}

						this.list.map((item) => {
							// 筛选出3天内更新的游戏
							if (this.dateDifference(item.createdAt, this.todayTime, 'day') <= 3) {
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
					cgp_recommend_query_list(this.Bmob, this.current, page).then((res) => {
						uni.stopPullDownRefresh()

						if (page == 0) {
							this.list = res
						} else {
							this.list = this.list.concat(res)
						}

						this.list.map((item) => {
							// 筛选出3天内更新的游戏
							if (this.dateDifference(item.createdAt, this.todayTime, 'day') <= 3) {
								// 设置新上架的标识
								item.isNew = true
							}
						})

						this.allData[type] = this.list
					})
				}
			},

			// 点击广告位的某项
			swiperClick(index) {
				var item = this.bannerList[index]
				uni.navigateTo({
					url: '../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' +
						encodeURIComponent(JSON.stringify(item))
				})
			},

			// 点击列表的某项
			listClick(item) {
				uni.navigateTo({
					url: '../../pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' +
						encodeURIComponent(JSON.stringify(item))
				})
			},

			// 点击搜索框
			searchClick() {
				uni.navigateTo({
					url: '../../pages_recommend/recommend_search/cgp_recommend_search'
				})
			},
		},

		onShareAppMessage() {
			return {
				title: '单机小助-为您精挑细选的游戏推荐'
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

		onTabItemTap() {
			uni.vibrateShort()
		},
	}
</script>

<style>
	@import url("../../pages_recommend/common/cgp_recommend.css");
</style>
