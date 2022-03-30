/**
 * @description 小程序一键登录
 * @param {Bmob} Bmob 
 */
export const userAuth = function(Bmob) {
	return new Promise((resolve, reject) => {
		uni.showLoading()
		Bmob.User.auth().then(res => {
			uni.hideLoading()
			
			// 获取用户信息
			const userInfo = JSON.parse(uni.getStorageSync('bmob')) 
			// 初始化signin、level
			const query = Bmob.Query('_User');
			uni.showLoading()
			query.get(userInfo.objectId).then(res => {
				uni.hideLoading()
				res.set('level', userInfo.level ? userInfo.level : '斗之气·低阶')
				res.set('signin', userInfo.signin ? userInfo.signin : 0)
				res.save()
				resolve(res)
			}).catch(err => {
				uni.hideLoading()
				uni.showToast({
					title: '登录错误，请重试',
					icon: 'none'
				})
				reject(err)
			})
		}).catch(err => {
			uni.hideLoading()
			uni.showToast({
				title: '登录错误，请重试',
				icon: 'none'
			})
			reject(err)
		});
	})
}

/**
 * @description 小程序更新用户信息
 * @param {Bmob} Bmob 
 * @param {Object} userInfo 
 */
export const userUpInfo = function(Bmob, userInfo) {
	return new Promise((resolve, reject) => {
		Bmob.User.upInfo(userInfo).then(result => {
			resolve(result)
		}).catch(err => {
			uni.showToast({
				title: '登录错误，请重试',
				icon: 'none'
			})
			reject(err)
		})
	})
}
