// 该方法出现在第六章
// 使用指定的原型对象及其属性创建对象
function inherit(p) {

	if (p == null) {
		throw TypeError();
	}

	if (Object.create) {
		return Object.create(p);
	}

	var t = typeof p;
	if (t !== 'object' && t !== 'function') {
		throw TypeError();
	}

	function f() {} 
	f.prototype = p;
	return new f();
}

// 这个工厂方法返回一个新的“范围对象”
function range(from, to){
	// 使用inherit()函数来创建对象，这个对象继承自在下面定义的原型对象
	// 原型对象作为函数的一个属性存储，并定义所有“范围对象”所共享的方法（行为）
	var r = inherit(range.methods);

	// 存储新的“范围对象”的起始位置和结束位置（状态）
	// 这两个属性时不可继承的，每个对象都拥有唯一的属性
	r.from = from;
	r.to = to;

	// 返回这个新创建的对象
	return r;
}

// 原型对象定义方法，这些方法为每个范围对象所继承
range.methods = {
	// 如果x在范围内，则返回true，否则返回false
	// 这个方法可以比较数字范围，也可以比较字符串和日期范围
	includes: function(x) {
		return this.from <= x && x <= this.to;
	},

	// 对于范围内的每个整数都调用一次f
	// 这个方法只可用做数字范围
	foreach: function(f) {
		for (var x = Math.ceil(this.from); x <= this.to; x++){
			f(x);
		}
	},

	// 返回表示这个范围的字符串
	toString: function() {
		return "(" + this.from + "..." + this.to + ")";
	}

}

var o = range(1,5);
o.includes(3);
o.includes(6);
o.foreach(console.log);
console.log(o.toString());