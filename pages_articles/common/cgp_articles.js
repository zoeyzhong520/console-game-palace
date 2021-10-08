// 热门文章列表数据
export const cgp_popular_articles_list = function(Bmob) {
	return new Promise((resolve, reject) => {

		const query = Bmob.Query('CGP_PopularArticles')
		// 对createdAt字段降序排列
		query.order("-createdAt")
		query.find().then(res => {
			// console.log(res)
			resolve(res)
		});

	})
}