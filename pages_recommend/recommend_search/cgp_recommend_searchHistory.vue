<template>
	<view class="">
		<u-navbar :autoBack="true">
			<u-search class="slot-wrap" placeholder="请输入游戏名称" v-model="keyword" :focus="true" :showAction="true" @custom="startSearch"
				@search="startSearch(keyword)"></u-search>
		</u-navbar>
		
		<!-- 搜索记录 -->
		<view class="search-history">
			<view class="search-history-item" v-for="(item,index) in searchHistory" :key="index" @click="startSearch(item)">
				<u-tag :text="item" shape="circle" size="mini"></u-tag>
			</view>
		</view>
	</view>
</template>

<script>
	const searchKeywordsKey = 'searchKeywordsKey'
	
	import { getSearchHistory, saveSearchHistory } from './cgp_recommend_search.js'
	
	export default {
		data() {
			return {
				// 搜索记录
				searchHistory: [],
				// 关键词
				keyword: '',
			}
		},
		watch: {
			keyword(newVal) {
				this.keyword = newVal
			}
		},
		onLoad() {
			/*搜索记录保留20条*/ 
		},
		onShow() {
			this.searchHistory = getSearchHistory() // 从本地缓存取出搜索记录
		},
		methods: {
			startSearch(keyword) {
				saveSearchHistory(keyword) // 保存关键词记录
				
				uni.$u.route('/pages_recommend/recommend_search/cgp_recommend_search', {
					keyword: keyword
				})
			}
		}
	}
</script>

<style>
	@import url("../common/cgp_recommend.css");
</style>

<style lang="scss" scoped>
	@import './cgp_recommend_search.scss';
</style>
