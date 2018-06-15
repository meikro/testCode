const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports= {
    mode: "development",
    entry:{
        "main": './source/script/index.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                // 分离CSS文件
                use:ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname,'source/script'),
                exclude: path.resolve(__dirname,'node_modules')
            }
        ]
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name][hash].js'
    },
    devServer:{
        contentBase: './dist',
        compress: true, // 是否压缩
        port: 9000,  // 端口号
        hot: true
    },
    devtool: 'inline-source-map',
    plugins:[
        // 先清除文件
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '构建第一个项目',
            template: './source/template/index.html',
            // hash: true,
            filename: 'index.html'
        }),
        new ExtractTextWebpackPlugin('style/css.css'),
        new webpack.NamedModulesPlugin(), // 显示模块相对路径
        new webpack.HotModuleReplacementPlugin() // 模块热更新插件
    ]
}
