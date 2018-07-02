第一篇： webpack 的安装
===
## webpack 概念
>webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

![webpack原理图](/resource/images/webpack/webpack.png "webpack原理图")
#### 四个核心概念
- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)

## webpack 安装
***在安装前需要确定本地已经安装完成 node.js，且成功运行***
#### 确定目录
在安装前需要进行项目目录的确定，创建目录，并完成npm 的初始化操作
（因为要使用 npm 的缘故，所以这里习惯使用命令来运行操作）
```npm
mkdir webpack_study && cd webpack_study ::创建根目录并进入目录中
npm init -y ::完成 npm 的初始化操作
```
(如果使用默认配置可以直接使用 `npm init -y` 命令，如果需要自行配置，运行 `npm init` 命令，完成配置向后同意就行)
#### 本地安装
安装稳定版本：
```npm
npm install --save-dev webpack
```
上面的命令可以简写为：
```npm
npm i -D webpack
```
后面的命令为了使用方便，采用简写的模式（谁让我懒呢）

安装完成后的文件目录：`之后的目录列表中将不再写明/node_modules文件夹`
```diff
  webpack_study
  |- /node_modules
  |- package-lock.json
  |- package.json
```
>说点儿题外话，关于git方面的，可以自动忽略。
>在提交项目源代码的时候，有些文件或者文件夹是没有必要提交的，比如 '/node_modules' 这个文件夹，这个时候可以创建一个 .gitignore 文件，将不提交的文件或者文件夹罗列出来即可。
>详细书写规则这里就不再赘述了。

## 开始我们的学习之旅
  在开始之前，先创建一个简单的小DOME实验一下效果，先不进行配置，使用`webpack-cli`工具进行构建。
*** project ***
```diff
    webpack_study
    |- package-lock.json
    |- package.json
   +|- /dist
   +  |- index.html
   +|- /src
   +  |- index.js 
```
*** dist/index.html ***
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpack 构建工具学习</title>
</head>
<body>
    <script src="main.js"></script>
</body>
</html>
```
  因为使用了webpack-cli工具，可以直接运行命令进行构建工作。
```npm
npx webpack
```
  `npx`命令是Node 8.2+提供的，还可以使用下面的命令：
```npm
./node_modules/.bin/webpack
```
  虽然使用 webpack-cli 工具可以免配置，但个人认为还是无法满足大型项目的需求，仍然需要自行设置配置文件。