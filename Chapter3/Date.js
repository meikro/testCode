// 2011年1月1日
var then = new Date(2011, 0, 1);
var later = new Date(2011, 0, 1, 17, 10, 30);
var now  = new Date();
var elapsed = now - then;

// 获取年份
later.getFullYear();

// 获取月份，从0开始计数
later.getMonth();

// 获取天数
later.getDate();

// 获取一周的某一天，0表示周日
later.getDay();

// 获取小时
later.getHours();

// 获取分钟
later.getMinutes();

// 获取秒
later.getSeconds();

// 获取毫秒
later.getMilliseconds();

// 根据世界时返回小时
later.getUTCHours();