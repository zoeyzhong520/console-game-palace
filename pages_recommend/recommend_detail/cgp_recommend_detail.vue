<template>
	<!-- cgp 游戏推荐 详情页 -->
	<view class="recommend-detail-container">
		<u-notice-bar v-if="!cgp_isInReview" mode="horizontal" type="primary" :list="list" :speed="50"></u-notice-bar>

		<!-- 标题 -->
		<view class="recommend-detail-box">
			<text class="recommend-detail-title">{{ detailInfo.title }}</text>
		</view>
		
		<!-- 游戏简介 -->
		<view class="recommend-detail-box">
			<u-section title="游戏简介" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<text class="recommend-detail-description">{{ detailInfo.description }}</text>
			</view>
		</view>

		<!-- 游戏截图 -->
		<view class="recommend-detail-box">
			<u-section title="游戏截图" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<u-lazy-load v-for="(item, index) in detailInfo.imageList" :key="index" :image="item"
					@click="previewImage(index)"></u-lazy-load>
			</view>
		</view>

		<!-- 系统需求 -->
		<view class="recommend-detail-box" v-if="detailInfo.requirements">
			<u-section title="系统需求" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;">
				<text class="recommend-detail-description">{{ detailInfo.requirements }}</text>
			</view>
		</view>
		
		<!-- 视频广告 -->
		<ad unit-id="adunit-3e6f2246eecabc7d" ad-type="video" ad-theme="white"></ad>
		
		<!-- 资源地址 -->
		<view class="recommend-detail-box" v-if="!cgp_isInReview && detailInfo.resources">
			<u-section title="资源地址" color="#2979ff" :right="false"></u-section>
			<view style="padding-top: 30rpx;" v-if="hasPermission">
				<u-parse :html="detailInfo.resources" :tag-style="style" :lazy-load="true" :show-with-animation="true"
					:use-cache="true"></u-parse>
					
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link v-if="detailInfo.tyUrl" :href="detailInfo.tyUrl" :under-line="true">点击拷贝天翼云下载链接</u-link>
				
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link :href="detailInfo.baiduUrl" :under-line="true">点击拷贝百度网盘下载链接</u-link>
				
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-link href="zhongzhaojunJoe" :under-line="true" mp-tips="微信号已复制">点击复制微信号</u-link>
			</view>
			
			<!-- 无查看权限，点击调起分享 -->
			<view style="padding-top: 30rpx;" v-if="!hasPermission">
				<!-- 分享规则 -->
				<text class="recommend-detail-share-rule">分享规则：点击分享按钮发送给给任一未使用过该小程序的好友，好友成功打开分享的卡片后，即可查看下载链接，自己分享给自己无效</text>
				<u-gap height="30" bg-color="#fff"></u-gap>
				<u-button size="default" type="primary" shape="circle" open-type="share" :ripple="true" :plain="false">点击分享后可见</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		recommend_detail_getRecord_with_objectId,
		recommend_detail_editRecord_with_objectId
	} from './cgp_recommend_detail.js'
	
	export default {
		data() {
			return {
				// 详情页数据
				detailInfo: {},
				style: {
					// 字符串的形式
					p: 'color: #333333;font-size:36rpx;line-heught:68rpx',
				},
				// 设置需要滚动的内容
				list: [
					'如遇网盘链接失效问题',
					'请加微：zhongzhaojunJoe',
					'微信号在页面底部点击可复制',
					'备注：单机小助网盘失效'
				],
				// 是否有查看下载地址的权限
				hasPermission: false,
			}
		},

		onLoad(e) {
			if (e.detailInfo) {
				this.detailInfo = JSON.parse(decodeURIComponent(e.detailInfo))
				// console.log(JSON.stringify(this.detailInfo))
			}
			
			// 根据设备ID合集主键 objectId 获取一行记录
			recommend_detail_getRecord_with_objectId(this.Bmob, this.store.state.deviceIdsObjectId).then(res => {
				this.hasPermission = res.hasPermission
			})
			
			// 根据主键修改一行记录
			recommend_detail_editRecord_with_objectId(this.Bmob, this.detailInfo.objectId).then(res => {
				
			})
		},

		computed: {
			// 审核状态
			cgp_isInReview() {
				return this.store.state.isInReview
			},
		},

		methods: {
			previewImage(index) {
				var urls = []
				this.detailInfo.imageList.map((item, index) => {
					urls.push(item)
				})

				uni.previewImage({
					urls: urls,
					current: index
				})
			},
		},
		
		onShareAppMessage() {
			let title = this.hasPermission ? this.detailInfo.title : '「单机小助」快来和我一起玩吧！'
			// shareObjectId 分享者的 objectId
			let path = this.hasPermission ? ('/pages_recommend/recommend_detail/cgp_recommend_detail?detailInfo=' +
						encodeURIComponent(JSON.stringify(this.detailInfo))) : ('/pages/recommend/cgp_recommend?shareObjectId=' + this.store.state.deviceIdsObjectId)
			return {
				title: title,
				path: path,
				imageUrl: this.detailInfo.imageList[0]
			}
		}
	}
</script>

<style>
	@import url("./cgp_recommend_detail.css");
</style>
