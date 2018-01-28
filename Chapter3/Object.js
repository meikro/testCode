/*对象的访问及属性添加*/
// 定义一个对象
var o = { x: 1};

console.info(o.x);
// 修改对象的值
o.x = 2;
console.info(o.x);

// 添加一个新的对象并赋值
console.info(o.y);
o.y = 3;
console.info(o.y);

/*对象的比较*/
var o = {x: 1}, p = {x: 1};

console.info(o === p);

var a = [], b = [];
console.info(a === b);

/*数组复制*/
var c = ['a', 'b', 'c'];
var d = [];
for(var i = 0; i < c.length; i++) {
	d[i] = c[i];
}
console.info(d);

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

var a1 = [1, 2, 3],
	a2 = [1, 2, 3],
	a3 = ["1", "2", "3"];
console.info(equalArrays(a1, a2));
console.info(equalArrays(a1, a3));


