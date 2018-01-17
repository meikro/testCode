/*
 * 把p中的可枚举属性复制到O中，并返回O
 * 如果o和p中含有同名属性，则覆盖o中的属性
 * 这个函数并不处理getter和setter以及复制属性
 */
function extend(o, p) {
	for (prop in p) {       // 遍历p中的所有属性
		o[prop] = p[prop];  // 将属性添加到o中
	}
	return o;
}