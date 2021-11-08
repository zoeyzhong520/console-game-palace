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