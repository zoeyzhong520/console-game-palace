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
export const dateDifference = function(sDate1, sDate2) {
	// sDate1和sDate2是2006-12-18格式        
	var dateSpan, tempDate, iDays;

	sDate1 = Date.parse(sDate1);

	sDate2 = Date.parse(sDate2);

	dateSpan = sDate2 - sDate1;
	
	dateSpan = Math.abs(dateSpan);

	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	// console.log(iDays)
	return iDays

};
