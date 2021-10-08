<template>
	<!-- CGP 筛选页 -->
	<view class="">
		<u-search class="slot-wrap" placeholder="请输入游戏名称" v-model="keyword" :focus="true" @custom="startSearch" @search="startSearch"></u-search>
		
		<!-- 列表 -->
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
			</view>
		</view>
	</view>
</template>

<script>
	import {
		fuzzyQuery
	} from './cgp_recommend_search.js'
	
	export default {
		watch: {
			keyword(val) {
				// console.log(val)
			}
		},
		
		data() {
			return {
				// 搜索关键词
				keyword: '',
				// 查询后的列表数据
				list: [],
				// 全部数据
				allData: [],
			}
		},
		
		onLoad() {
			// 获取全部数据
			const query = this.Bmob.Query('CGP_HotRecommend')
			query.find().then(res => {
			    // console.log(res)
				this.allData = res
			});
		},
		
		methods: {
			startSearch() {
				this.list = fuzzyQuery(this.allData, this.keyword)
			},
			
			listClick(item) {
				uni.navigateTo({
					url:'../recommend_detail/cgp_recommend_detail?detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
		}
	}
</script>

<style>
	@import url("../common/cgp_recommend.css");
</style>
