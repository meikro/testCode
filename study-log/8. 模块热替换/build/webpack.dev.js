const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    mode: 'development',
    output:{
        publicPath: '/'
    },
    devServer:{
        contentBase: path.join(__dirname, "..", "dist"), // 静态资源存放目录，推荐使用绝对路径
        port: 9000  // 端口号
    },
    plugins:[
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, '..', 'dist', 'manifest.json')
        // })
    ]
    // watchOptions: {
    //     ignored: /node_modules/, //忽略不用监听变更的目录
    //     aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
    //     poll:1000 //每秒询问的文件变更的次数
    // }
});