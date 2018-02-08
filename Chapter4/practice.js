// in 运算符

// 如果右侧对象拥有一个左侧的属性名，则返回TRUE，否则返回FALSE


var point = { x: 1, y: 1};
"x" in point; // => true
"z" in point; // => false
"toString" in point; // => true 继承 toString() 方法

var data = [7, 8, 9];
"0" in data; // => true
1 in data; // => true
3 in data; // => false


// instanceof 运算符

// 如果左侧对象是右侧对象的实例则返回TRUE，否则返回FALSE

var d = new Date();
d instanceof Date; // => true d 是 Date() 的实例
d instanceof Object; // => true 所有的对象都是Object的实例
d instanceof Number; // => false


var a = [1, 2, 3];
a instanceof Array; // => true 
a instanceof Object; // => true 
a instanceof RegExp; // => false 


// 通过这个示例的验证可以看出，逻辑与返回的并不是 true 或 false ，而是返回的最终的计算结果 "真值" 或 "假值"。 
var o = { x: 1},
	p = null;
o && o.x; // => 1  返回一个真值。即 o.x 的结果
p && p.x; // => null

// 
