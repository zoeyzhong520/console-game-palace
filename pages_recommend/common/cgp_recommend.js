// tabs标签数组
export const cgp_recommend_tabsList = [{
		name: "热门推荐"
	},
	{
		name: "动作游戏"
	},
	{
		name: "射击游戏"
	},
	{
		name: "角色扮演"
	},
	{
		name: "动作冒险"
	},
	{
		name: "冒险解谜"
	},
	{
		name: "格斗游戏"
	},
	{
		name: "赛车竞技"
	},
	{
		name: "模拟经营"
	},
	{
		name: "即时战略"
	},
	{
		name: "文字游戏"
	},
	{
		name: "恐怖冒险"
	},
	{
		name: "休闲益智"
	},
	{
		name: "音乐游戏"
	},
	{
		name: "策略游戏"
	},
	{
		name: "生存冒险"
	},
	{
		name: "卡通可爱"
	},
	{
		name: "体育竞技"
	},
	{
		name: "街机游戏"
	}
]

// 获取配置信息
export const cgp_configs = function(Bmob) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_Configs')
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}

// 获取广告位数据
export const cgp_recommend_banner_list = function(Bmob) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_Banner')
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}

// 获取全部推荐数据
export const cgp_recommend_all_list = function(Bmob) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_HotRecommend')
		// 对createdAt字段降序排列
		query.order("-createdAt")
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}

/**
 * 根据 tabs 标签查询数据
 * @param  {String} index    tabs 对应的下标
 * @return {Array}           查询的结果
 */
export const cgp_recommend_query_list = function(Bmob, index) {
	return new Promise((resolve, reject) => {
		
		if (cgp_recommend_types[index] == 'ALL') {
			return
		}
		
		const query = Bmob.Query('CGP_HotRecommend')
		query.equalTo("type", "==", cgp_recommend_types[index])
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}

// type类型数组
export const cgp_recommend_types = [
	"ALL",
	"A", "B", "C",
	"D", "E", "F",
	"G", "H", "I",
	"J", "K", "L",
	"M", "N", "O",
	"P", "Q", "R"
]
