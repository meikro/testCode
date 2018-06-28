第一篇： webpack 的安装
===
## webpack 概念
>webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
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
