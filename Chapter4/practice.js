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




