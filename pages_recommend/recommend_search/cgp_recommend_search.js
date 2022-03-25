/**
 * 使用test方法实现模糊查询
 * @param  {Array}  list     原数组
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
 */
export const fuzzyQuery = function(list, keyWord) {
	uni.showLoading()
	var reg = new RegExp(keyWord);
	var arr = [];
	for (var i = 0; i < list.length; i++) {
		if (reg.test(list[i].title)) {
			arr.push(list[i]);
		}
	}
	uni.hideLoading()
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

/**
 * @description 获取本地缓存的搜索记录
 */ 
export const getSearchHistory = function() {
	return !!uni.getStorageSync('searchKeywordsKey') ? uni.getStorageSync('searchKeywordsKey').slice(0,19) : []
}

/**
 * @description 把搜索的关键词保存到本地
 * @param {String} keyword 
 */ 
export const saveSearchHistory = function(keyword) {
	const searchHistory = getSearchHistory()
	if (!!searchHistory && searchHistory.indexOf(keyword) == -1 && keyword.length > 0) {
		searchHistory.unshift(keyword) // 插入到数组头部
		// 搜索记录缓存到本地
		uni.setStorageSync('searchKeywordsKey', searchHistory)
	}
}

