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
