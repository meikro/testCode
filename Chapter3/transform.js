// 类型间的转换
// 字符串转为数值
Number("3");

// 布尔值转为字符串
String(false);

// 数组转为布尔值
Boolean([]);

// 数值转为对象
Object(3);

var n = 17;
binary_string = n.toString(2);
octal_string = "0" + n.toString(8);
hex_string = "0x" + n.toString(16);

/*将数值转化为不同形式的字符串*/
var n = 123456.789;
// 正常计数，小数点后显示n位
n.toFixed(0); // => '123457'
n.toFixed(2); // => '123456.79'
n.toFixed(5); // => '123456.78900'

// 科学计数法，小数点后显示n位
n.toExponential(1); // => '1.2e+5'
n.toExponential(3); // => '1.235e+5'

// 以指定精度将数值转换为字符串
n.toPrecision(4); // => '1.235e+5'
n.toPrecision(7); // => '123456.8'
n.toPrecision(10); // => '123456.7890'

/*字符串转换为数值*/

parseInt("3 blind mice"); // => 3
parseFloat(" 3.14 meters"); // => 3.14
parseInt("-12.34"); // => -12
parseInt("0xFF"); // => 255
parseInt("-0xFF"); // => -255
parseFloat(".1"); // => 0.1
parseInt("0.1"); // => 0
parseInt(".1"); // => NaN
parseFloat("$72.47"); // => NaN

// 设置转换基数
parseInt("11", 2);
parseInt("ff", 16);
parseInt("zz", 36);
parseInt("077", 8);
parseInt("077",10);
parseInt("077");







