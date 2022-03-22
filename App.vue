<script>	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.init() // 初始化
		},
		
		onShow: function() {
			console.log('App Show')
		},
		
		onHide: function() {
			console.log('App Hide')
		},
		
		methods: {
			// 初始化
			init() {
				
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
