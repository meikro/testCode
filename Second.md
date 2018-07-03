第二篇：Webpack 文件配置与概念理解
===
## webpack 配置文件
>比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能。
  先编写一个配置文件，通过这个配置文件对 webpack 配置做一个初步了解。
***project***
```diff
    webpack_study
    |- package-lock.json
    |- package.json
+   |- webpack.config.js
    |- /dist
      |- index.html
    |- /src
      |- index.js 
```
***webpack.config.js***
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    }
}
```
`如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。`

  通过配置文件进行构建操作：
```npm
npx webpack --config webpack.config.js
```

  如果每次构建都运行这段命令会很繁琐，况且随着项目的复杂，可能命令中的属性配置也会随着增多，为了解决这个问题，就运用到了 `npm scripts`，只需要把命令写入到 `package.json`文件中的`scripts`下即可：
```diff
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
+   "build": "webpack --config webpack.config.js"
}
```
  添加完成后只需运行`npm run build`命令即可；
  运行后查看效果，和使用webpack-cli 的效果基本一致。都能得到构建后的结果。
#### 入口（entry）
>入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
>每个依赖项随即被处理，最后输出到称之为 bundles 的文件中，我们将在下一章节详细讨论这个过程。
>可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。

  `webpack.config.js`示例中的入口是指：
```javascript
module.exports = {
  entry: './src/index.js',
}
```
#### 出口（output）
>output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。
>    output.filename 构建文件的名称
>    output.path 文件构建位置
  `webpack.config.js`示例中的出口是指：
```javascript
module.export = {
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname,'dist')
  }
}
```
***还有几个核心概念没有在示例中体现，在后面的配置中会用到，在这里先提前说明一下***
#### 模式
  在安装插件的时候会有一个命令选项：`npm install --save-dev ***` 或 `npm install --save`，其实这两个命令是对插件使用模式的一种区分，使用了`--save-dev`即表示是在开发环境中使用的插件，使用`--save`表示生产环境和开发环境都将使用到的插件；
  所以很明显的看出，这里的模式划分氛围 `生产模式(production)`和`开发模式(development)`，通过设置 mode 参数，可以启用相应模式下的 webpack 内置的优化。
***开发模式***
```javascript
module.exports = {
  mode: 'development'
}
```
***生产模式***
```javascript
module.exports = {
  mode: 'production'
}
```
#### loader
>loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
>本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
>在 webpack 的配置中 loader 有两个目标：
>  1.test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
>  2.use 属性，表示进行转换时，应该使用哪个 loader。
  在构建过程中使用频率比较高的比如有：图片（file-loader,image-loader）、样式（css-loader,style-loader）、ES6转换（babel-loader）等这些都会在后面的配置中遇到。loader的使用是需要使用`npm`进行安装的
  举一个示例，如何识别样式文件：
***安装 css-loader 和 style-loader***
```npm
npm i -D css-loader style-loader
```
***webpack.config.js***
```javascript
module.exports = {
  module:[
    rules:[{
      test: /.css$/,
      use:[
        'css-loader',
        'style-loader'
      ]
    }]
  ]
}
```

#### 插件（plugins）
>loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
>想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。
  这里举一个如何操作`html`模板的例子，在使用插件前还是需要使用`npm`进行安装，安装完成在当前页面使用`requier()`引入，引入后才能正常使用。
***安装 html-webpack-plugin***
```npm
npm i -D html-webpack-plugin
```
***webpack.config.js***
```javascript
const HtmlWebpackPlugin = require()
module.exports = {
  plugins:[
    new HtmlWebpackPlugin({
      title: 'New Production', // 页面title
      template: './source/template/index.html', // 应用的模板
      filename: 'index.html' // 生成HTML文件名
    })
  ]
}
```
  基本的概念介绍就先到这里，弄清这些概念该如何使用，还是需要实操进行。
