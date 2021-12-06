/**
 * 根据 tabs 标签查询数据
 * @param  {String} type     类型
 * @return {Array}           查询的结果
 */
export const leaderboards_query_list = function(Bmob, type, page) {
	return new Promise((resolve, reject) => {
		
		const query = Bmob.Query('CGP_HotRecommend')
		query.equalTo("type", "==", type)
		// 对readCount字段降序排列
		query.order("-readCount")
		query.limit(20)
		// query.skip(page * 10)
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}