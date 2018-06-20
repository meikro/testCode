const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname,'dist'), // 静态资源存放目录，推荐使用绝对路径
        port: 9000  // 端口号
    }
});