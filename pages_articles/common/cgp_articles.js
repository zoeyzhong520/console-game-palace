// 热门文章列表数据
export const cgp_popular_articles_list = function(Bmob,page) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_PopularArticles')
		// 对createdAt字段降序排列
		query.order("-createdAt")
		query.limit(10)
		query.skip(page*10)
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}