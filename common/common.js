// 去掉html标记、换行符、空格
export const formattingStr = function(str) {
	return str == null ? '' : str.replace(/<\/?.+?>/g,"").replace(/\ +/g,"").replace(/[\r\n]/g,"")
}