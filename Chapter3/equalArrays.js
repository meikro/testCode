/*数组比较函数*/
function equalArrays(a, b) {
	// 比较数组长度是否相等
	if (a.length !== b.length) {
		return false;
	}
	// 遍历循环，比较所有元素是否相等
	for(var i = 0; i < a.length; i++) {
		// 如果有其中任意一个元素不相等，则数组不相等
		if (a[i] !== b[i]) {
			return false;
		}
	}
	// 否则数组相等
	return true;
}