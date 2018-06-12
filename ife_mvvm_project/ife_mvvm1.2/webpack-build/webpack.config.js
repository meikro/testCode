/**
 * 安装模块/插件
 * npm install --save-dev css-loader style-loader
 * npm install --save-dev html-webpack-plugin
 * npm install clean-webpack-plugin --save-dev
 * npm install --save-dev extract-text-webpack-plugin
 * npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-stage-0
 */

const path = require('path');
// HTML 文件管理插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除指定目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// CSS文件分离
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 设置为开发模式
    mode: 'development',
    // 设置多个入口
    entry:{
        app: './src/js/index.js',
        print: './src/js/print.js'
    },
    // 设置文件解析模块
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include:path.resolve(__dirname,'src'),
                exclude: path.resolve(__dirname,'node_modules')
            }
        ]
    },
    // 配置输出
    output: {
        filename: 'js/[name].build.[hash:6].js', // 输出的文件包含六位的HASH值
        path: path.resolve(__dirname,'dist')
    },
    // 创建本地虚拟服务
    devServer:{
        // contentBase: path.join(__dirname, "dist"), // 访问根目录
        contentBase: './dist',
        compress: true, // 是否压缩
        port: 9000  // 端口号
    },
    devtool:'inline-source-map',// 输入错误具体位置
    // 配置使用插件
    plugins:[
        // 清空 dist 文件夹下的所有内容
        new CleanWebpackPlugin(['dist']),
        // 分离css文件
        new ExtractTextWebpackPlugin('style/index.css'),
        // 自动生成 html 文件
        new HtmlWebpackPlugin({
            title: 'app',
            template: './src/index.html',
            filename: 'app.html',
            hash: true, // 在文件名后添加HASH值
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            title: 'print',
            filename: 'pring.html',
            chunks: ['print']
        })
    ]
};