<template>
	<!-- 游戏排行榜组件 -->
	<view class="usercenter-leaderboards-container">
		<view class="usercenter-leaderboards-box">
			<view @click="leaderboarderClick(item,index)" :style="{'background': 'rgb'+item.background}" class="usercenter-leaderboards-box-item" v-for="(item,index) in data" :key="index">
				{{ item.title }}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		usercenter_leaderboards_cell_configs
	} from '../../pages_usercenter/usercenter_leaderboards/usercenter_leaderboards.js'
	
	export default {
		data() {
			return {
				// 列表
				data: []
			}
		},
		
		mounted() {
			// 获取cell配置
			this.data = usercenter_leaderboards_cell_configs
			// console.log(JSON.stringify(this.data))
		},
		
		methods:{
			// 点击某个排行榜按钮
			leaderboarderClick(item, index) {
				uni.navigateTo({
					url:'../../pages_usercenter/usercenter_leaderboards/leaderboards_list/leaderboards_list?navTitle='+(item.title+'排行榜Top20')+'&type='+item.type
				})
			}
		}
	}
</script>

<style>
	@import url("../../pages_usercenter/usercenter_leaderboards/usercenter_leaderboards.css");
</style>
