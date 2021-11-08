// 通过主键获取一行记录
// objectId 主键
export const recommend_detail_getRecord_with_objectId = function(Bmob, objectId) {
	return new Promise((resolve, reject) => {

		uni.showLoading({
			mask: false
		})

		const query = Bmob.Query('CGP_DeviceIds');
		query.get(objectId).then(res => {
			uni.hideLoading()
			resolve(res)
		}).catch(err => {
			uni.hideLoading()
			reject(err)
		})

	})
}

// 通过主键修改一行记录
// objectId 主键
export const recommend_detail_editRecord_with_objectId = function(Bmob, objectId) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_HotRecommend');
		query.get(objectId).then(res => {	
			// 每次打开游戏详情页，给readCount增加1
			res.set('readCount', (!!!res.readCount ? 0 : res.readCount)+1)
			res.save().then(res => {
				// console.log(res)
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		}).catch(err => {
			reject(err)
		})

	})
}
