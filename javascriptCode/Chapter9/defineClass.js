function extend(o, p) {
	for (prop in p) {
		o[prop] = p[prop];
	}
	return o;
}
/**
 * 一个用以定义简单类的函数
 * @param  {[type]} constructor [用以设置实例的属性的函数]
 * @param  {[type]} methods     [实例的方法，复制至原型中]
 * @param  {[type]} statics     [类属性，复制至构造函数中]
 * @return {[type]}             [description]
 */
function defineClass(constructor, methods, statics) {
	if (methods) {
		extend(constructor.prototype, methods);
	}
	if (statics) {
		extend(constructor, statics);
	}
	return constructor;
}