const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    // mode: 'development',
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port: 9090,
        hot: true
    },
    plugins: [
        // new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
        // new webpack.HotModuleReplacementPlugin() // Hot Module Replacement 的插件
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
    ],
    optimization:{
        namedModules: true
    }
})