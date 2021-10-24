/**
 * 使用test方法实现模糊查询
 * @param  {Array}  list     原数组
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
 */
export const fuzzyQuery = function(list, keyWord) {
	var reg = new RegExp(keyWord);
	var arr = [];
	for (var i = 0; i < list.length; i++) {
		if (reg.test(list[i].title)) {
			arr.push(list[i]);
		}
	}
	return arr;
}

// 获取全部数据
// page 请求的分页页码
export const recommend_search_all_data = function(Bmob, page) {
	return new Promise((resolve, reject) => {
		
		const query = Bmob.Query('CGP_HotRecommend')
		query.limit(100)
		query.skip(page * 100)
		query.find().then(res => {
			resolve(res)
		});
		
	})
}

