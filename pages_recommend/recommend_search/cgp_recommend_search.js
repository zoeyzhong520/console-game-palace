/**
   * 使用test方法实现模糊查询
   * @param  {Array}  list     原数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   */
  export const fuzzyQuery = function(list, keyWord) {
  	var reg = new RegExp(keyWord);
  	var arr = [];
  	for (var i = 0; i < list.length; i++) {
  		if (reg.test(list[i].title)) {
  			arr.push(list[i]);
  		}
  	}
  	return arr;
  }
