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
export const cgp_recommend_all_list = function(Bmob, page) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_HotRecommend')
		// 对createdAt字段降序排列
		query.order("-createdAt")
		query.limit(10)
		query.skip(page * 10)
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
export const cgp_recommend_query_list = function(Bmob, index, page) {
	return new Promise((resolve, reject) => {

		if (cgp_recommend_types[index] == 'ALL') {
			return
		}

		const query = Bmob.Query('CGP_HotRecommend')
		query.equalTo("type", "==", cgp_recommend_types[index])
		// 对createdAt字段降序排列
		query.order("-createdAt")
		query.limit(10)
		query.skip(page * 10)
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

// 新增一行记录 设备ID
export const cgp_recommend_insert_deviceId = function(Bmob) {
	return new Promise((resolve, reject) => {

		// 获取设备ID
		var deviceId = uni.getSystemInfoSync().deviceId

		const query = Bmob.Query('CGP_DeviceIds')

		// 查询是否已有此设备ID
		query.equalTo("deviceId", "==", deviceId);
		query.find().then(res => {
			if (JSON.stringify(res) == '[]') {
				// 新增一条数据
				query.set("deviceId", deviceId)
				query.set('hasPermission', false)
				query.save().then(res => {
					// objectId 主键唯一值
					// hasPermission 是否有查看下载地址权限
					// isNewDevice 是否新注册设备
					resolve({
						objectId: res.objectId,
						hasPermission: false,
						isNewDevice: true
					})
				}).catch(err => {
					reject(err)
				})
			} else {
				resolve({
					objectId: res[0].objectId,
					hasPermission: res[0].hasPermission,
					isNewDevice: false
				})
			}
		});
	})
}

// 通过主键修改一行记录
// objectId 主键
export const recommend_detail_editRecord_with_objectId = function(Bmob, objectId) {
	return new Promise((resolve, reject) => {

		uni.showLoading({
			mask: false
		})

		const query = Bmob.Query('CGP_DeviceIds');
		query.get(objectId).then(res => {
			uni.hideLoading()
			res.set('hasPermission', true)
			res.save().then(res => {
				resolve(res)
			})
		}).catch(err => {
			reject(err)
		})

	})
}
