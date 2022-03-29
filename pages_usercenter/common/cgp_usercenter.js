/**
 * @description 签到，签到成功后更新下用户的level等级
 * @param {Bmob} Bmob 
 * @param {Boolean} isSignIn 
 */
export const userSignIn = function(Bmob, isSignIn) {
	return new Promise((resolve, reject) => {
		if (isSignIn) {
			uni.showToast({
				title:'今日已签到，明天再来吧',icon:'none'
			})
			reject('今日已签到，明天再来吧')
			return
		}
		
		// 获取用户信息
		const bmobInfo = uni.getStorageSync('bmob')
		// 已登录状态
		if (!!bmobInfo) {
			// 用户信息
			let userInfo = JSON.parse(bmobInfo)
			// 签到次数加1
			let signin = userInfo.signin
			signin++
			// 把签到次数换算成等级称号
			let level = signinToLevel(signin)
			
			// 修改一行记录
			const query = Bmob.Query('_User');
			uni.showLoading()
			query.get(userInfo.objectId).then(res => {
				uni.hideLoading()
				res.set('level', level)
				res.set('signin', signin)
				res.save()
				
				// 更新签到标记的时间戳
				uni.setStorageSync('signin',new Date().getTime())
				// 签到成功后更新本地用户信息
				userInfo.signin = signin
				userInfo.level = level
				uni.setStorageSync('bmob', JSON.stringify(userInfo))
				
				uni.showToast({
					title:'签到成功',icon:'success'
				})
				resolve(res)
			}).catch(err => {
				uni.showToast({
					title:'签到时发生错误，请重试',icon:'none'
				})
				uni.setStorageSync('signin',null)
				reject(err)
			})
		}
	})
}

/**
 * @description 签到次数换算为level等级
 * @param {Number} signin 
 * @return {String}
 */ 
export const signinToLevel = function(signin) {
	/*
	用户等级level：
	- 划分为十一阶：斗之气30、斗者30-60、斗师60-90、大斗师90-120、斗灵120-150、斗王150-180、斗皇180-210、斗宗210-240、斗尊240-270、斗圣270-300、斗帝300-330
	- 每阶有三个等级：低阶、中阶、高阶，比如斗皇·高阶
	- 每过24:00可充新签到，每签到10次可以提升一个等级：比如低阶到中阶
	- 用户等级作用：名称加颜色特效、高级称号专享游戏（斗尊、斗圣、斗帝 sign >= 240）、更换用户中心主题等
	  名称加颜色特效：紫＞粉＞蓝＞绿＞黄＞橙＞灰
	*/ 
   
   // 将签到次数对10进行除法运算，并对结果取整
   let divisionRes = Math.floor(signin/10)
   // 创建等级称号数组
   let levels = [
	   '斗之气·低阶','斗之气·中阶','斗之气·高阶',	// 灰
	   '斗者·低阶','斗者·中阶','斗者·高阶',			// 灰
	   '斗师·低阶','斗师·中阶','斗师·高阶',			// 橙
	   '大斗师·低阶','大斗师·中阶','大斗师·高阶',	// 橙
	   '斗灵·低阶','斗灵·中阶','斗灵·高阶',			// 黄
	   '斗王·低阶','斗王·中阶','斗王·高阶',			// 黄
	   '斗皇·低阶','斗皇·中阶','斗皇·高阶',			// 绿
	   '斗宗·低阶','斗宗·中阶','斗宗·高阶',			// 绿
	   '斗尊·低阶','斗尊·中阶','斗尊·高阶',			// 蓝
	   '斗圣·低阶','斗圣·中阶','斗圣·高阶',			// 粉
	   '斗帝·低阶','斗帝·中阶','斗帝·高阶'			// 紫
	   ]
	// 换算后的等级称号
	// console.log(divisionRes, levels[divisionRes])
	return levels[divisionRes]
}
