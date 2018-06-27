const path = require('path');
const webpack = require('webpack');
// 清除指定文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 指定HTML模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// CSS文件分离
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Root = path.join(__dirname,'../');


module.exports = {
    context: path.join(__dirname,'../'),
    entry: {
        "main": './source/script/index.js'
        // "another": "./source/script/another-module.js"
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: Root,
            exclude:  ['shared.js'],
            verbose:  true,
            dry:      false
        }),
        new HtmlWebpackPlugin({
            title: 'New Production', // 页面title
            template: './source/template/index.html', // 应用的模板
            filename: 'index.html' // 生成HTML文件名
        }),
        // new ExtractTextWebpackPlugin('style/css[hash].css')
        new MiniCssExtractPlugin({
            filename: 'style/[name][hash].css',
            chunkFilename: 'style/[id].css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/, // 解析文件扩展名
                use: 'babel-loader', // 使用的依赖
                // include: path.join(Root,'source/script'), // 需要转换文件的位置
                // exclude: path.join(Root,'node_modules') // 排除不需要转换的文件
                include: path.join(Root,'./source/script'),
                exclude:/node_modules/
            },
            // {
            //     test: /\.css$/,
            //     // 分离CSS文件
            //     use:ExtractTextWebpackPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options:{
            //                     minimize: true // 压缩CSS文件
            //                 }
            //             }
            //         ]
            //     })
            // },
            {
                test: /\.css$/,
                use: ['css-hot-loader',MiniCssExtractPlugin.loader,'css-loader']
            }
            // {
            //     test: /\.css$/,
            //     use: ['css-hot-loader',MiniCssExtractPlugin.loader,'css-loader','style-loader'],
            //     include: path.join(Root,'./source/style'),
            //     exclude: /node_modules/
            // }
        ]
    },
    resolve: {
        modules: [
            // "node_modules", // 安装插件、依赖的目录
            path.resolve(Root, 'source/script'), // js源码文件目录
            path.resolve(Root, 'source/style'), // css源码文件目录
            path.resolve(Root,'node_modules')// 安装插件、依赖的目录
        ],
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".css"],
        alias:{
            // Style: path.resolve(__dirname,'source/style'), // css源码文件引用路径
            // Script: path.resolve(__dirname,'source/script') // js源码文件引用路径
            // Style: './source/style',
            // Script: './source/script'
            // Style: path.join('/source/style'),
            // Script: path.join('/source/script')
            Style: path.join(Root,'./source/style'),
            Script: path.join(Root,'./source/script')
        },
        // 设置解析目录时的默认文件名
        mainFiles:['index']
    },
    output: {
        filename: 'js/[name].bundle.js',
        // path: path.resolve(__dirname,'dist')
        // path: path.resolve(__dirname,'..','dist')
        path: path.join(Root,'dist')
        // path: resolve('dist')
    }
};