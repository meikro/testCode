var s = "Hellp, world!";

// 获取字符串的第一个字符
s.charAt(0);

// 获取字符串的最后一个字符
s.charAt(s.length - 1);

// 截取字符串
s.substring(1, 4);
s.slice(1, 4);

// 截取最后三个字符
s.slice(-3);

// 查找字符首次出现的位置
s.indexOf('l');

// 查找字符最后一次出现的位置
s.lastIndexOf('l');

// 查找字符在某个位置后首次出现的位置
s.indexOf('l', 4);

// 将字符串分隔成数组
s.split(',');

// 替换指定字符
s.replace(' ','');

// 转换大写字符
s.toUpperCase();

// 转换为小写字母
s.toLowerCase();

/*匹配模式*/

var text="testing: 1, 2, 3";
var pattern = /\d+/g;

// 匹配文本
pattern.test(text);

// 首次匹配成功的位置
text.search(pattern);

// 所有匹配项组成的数组
text.match(pattern);

// 将匹配到的内容进行替换
text.replace(pattern,"#");

// 用非字符串将字符截取成数组
text.split(/\D+/);


