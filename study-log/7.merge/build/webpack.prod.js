const merge = require('webpack-merge');
// JS文件压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin()
    ]
});