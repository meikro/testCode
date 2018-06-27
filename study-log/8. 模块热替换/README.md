模块热更新
==
### 安装插件
```diff
- 所有的插件安装皆为本地安装
```

```npm
    npm i -D mini-css-extract-plugin css-hot-loader postcss-loader optimize-css-assets-webpack-plugin
```

### 配置 webpack.comm.js 文件
---

```diff
module.exports = {
    context: path.join(__dirname,'../'),
    entry: {
        "main": './source/script/index.js'
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
                include: path.join(Root,'./source/script'),
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader',MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(Root, 'source/script'), // js源码文件目录
            path.resolve(Root, 'source/style'), // css源码文件目录
            path.resolve(Root,'node_modules')// 安装插件、依赖的目录
        ],
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".css"],
        alias:{
            Style: path.join(Root,'./source/style'),
            Script: path.join(Root,'./source/script')
        },
        // 设置解析目录时的默认文件名
        mainFiles:['index']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(Root,'dist')
    }
};
```


- 这个方法是参考文章 [webpack4 进阶](https://www.jianshu.com/p/6c998f83e637) 没有直接下载源代码测试，不过加载后的效果扔不理想，修改JS可以实现浏览器自动刷新，修改CSS文件扔需要手动刷新浏览器。