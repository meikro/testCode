const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "main": './source/script/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'New Production',
            template: './source/template/index.html',
            filename: 'index.html'
        }),
        new ExtractTextWebpackPlugin('style/css.css')
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname,'source/script'),
                exclude: path.resolve(__dirname,'node_modules')
            },
            {
                test: /\.css$/,
                // 分离CSS文件
                use:ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
};