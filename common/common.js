// 去掉html标记、换行符、空格
export const formattingStr = function(str) {
	return str == null ? '' : str.replace(/<\/?.+?>/g, "").replace(/\ +/g, "").replace(/[\r\n]/g, "")
}

// 比较两个时间的大小
export const bjDate = function(date, date1) {
	var date = new Date(date);
	var date1 = new Date(date1);
	if (date.getTime() - date1.getTime() < 0) {
		return '第二个时间大';
	} else {
		return '第一个时间大';
	}
}

//两个时间相差天数 兼容firefox chrome    
export const dateDifference = function(startTime, endTime, diffType) {
	//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
	startTime = startTime.replace(/\-/g, "/");
	endTime = endTime.replace(/\-/g, "/");
	//将计算间隔类性字符转换为小写
	diffType = diffType.toLowerCase();
	var sTime = new Date(startTime); //开始时间
	var eTime = new Date(endTime); //结束时间
	//作为除数的数字
	var timeType = 1;
	switch (diffType) {
		case "second":
			timeType = 1000;
			break;
		case "minute":
			timeType = 1000 * 60;
			break;
		case "hour":
			timeType = 1000 * 3600;
			break;
		case "day":
			timeType = 1000 * 3600 * 24;
			break;
		default:
			break;
	}
	return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
};

// 从本地缓存中异步获取指定 key 对应的内容 
export const getStorage = function(key) {
	return new Promise((resolve, reject) => {

		uni.getStorage({
			key: key,
			success(res) {
				resolve(res.data)
			},
			fail() {
				resolve(null)
			}
		})

	})
}

// 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口 
export const setStorage = function(key, data) {
	return new Promise((resolve, reject) => {

		uni.setStorage({
			key: key,
			data: data,
			success() {
				resolve(true)
			},
			fail() {
				resolve(false)
			}
		})

	})
}

export const rgbRandom = function() { //rgb颜色随机
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = '(' + r + ',' + g + ',' + b + ')';
	return rgb;
}

export const color16Random = function() { //十六进制颜色随机
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	return color;
}

/**
 * @description 更新用户信息
 * @param {type} obj 
 */
export const upUserInfo = function(obj) {
	const bmobInfo = uni.getStorageSync('bmob')
	obj.$store.commit('setUserInfo', !!bmobInfo ? JSON.parse(bmobInfo) : null) // 把用户信息存储到全局
}

/**
 * @description 判断时间戳是否是今天
 * @param {Number} str 
 * @return {Boolean}
 */
export const isToday = function(str) {
	return new Date().getTime() - new Date(str).getTime() < 86400000;
}

/**
 * @description 判断小程序版本： 1 develop开发版 2 trial体验本 3 release正式版
 * @param {Bmob} Bmob 
 * @return {String}
 */
export const mpVersion = function(Bmob) {
	console.log('判断小程序版本: ', __wxConfig.envVersion)

	// 获取小程序版本
	let version = __wxConfig.envVersion;
	// 开发版自动打开调试
	uni.setEnableDebug({
		enableDebug: version === 'develop'
	})
	// Bmob开发版打开调试模式
	Bmob.debug(version === 'develop')
	return version
}

/**
 * @description 小程序更新
 */
export const mpCheckUpdate = function() {
	// #ifdef MP-WEIXIN 
	const updateManager = uni.getUpdateManager();
	updateManager.onCheckForUpdate(function(res) {
		// 请求完新版本信息的回调
		if (res.hasUpdate) {
			updateManager.onUpdateReady(function(obj) {
				uni.showModal({
					title: '新版抢先体验',
					content: '新版本已经准备好，敬请体验',
					confirmText: '立即体验',
					success(obj) {
						if (obj.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						} else if (obj.cancel) {
							updateManager.applyUpdate();
						}
					}
				});
			});
		}
	});

	updateManager.onUpdateFailed(function(res) {
		// 新的版本下载失败
		uni.showModal({
			title: '提示',
			content: '检查到有新版本，但下载失败，请检查网络设置',
			success(res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate();
				} else if (res.cancel) {
					updateManager.applyUpdate();
				}
			}
		});
	});
	// #endif
}
