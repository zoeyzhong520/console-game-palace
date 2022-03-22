/**
 * @description 小程序一键登录
 * @param {Bmob} Bmob 
 */
export const userAuth = function(Bmob) {
	return new Promise((resolve, reject) => {
		uni.showLoading()
		Bmob.User.auth().then(res => {
			uni.hideLoading()
			resolve(res)
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
