const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry:{
        main:"./src/index.js"
    },
    output:{
        filename:'app.js',
        path:path.join(__dirname,'./dist') 
    },
    plugins:[
        /**
         * 文档地址:https://github.com/johnagan/clean-webpack-plugin 
         * 用于清除每次构建后生成的dist文件夹
         * */
        new CleanWebpackPlugin('dist',{
            
        }),
        new HtmlWebpackPlugin({
            /**
             * 
             *  具体见文档：https://github.com/jantimon/html-webpack-plugin
             * 用于配置打包的bundle注入的模板文件
             *  */
            title:"test",
            filename:"index.html",
            template:"./index.html",
            inject:true
        }),
        /**
         *  文档地址：https://github.com/webpack-contrib/uglifyjs-webpack-plugin
         * 用于压缩混淆js代码
         */
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
        })
        
    ],
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-laoder'}
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]
            },{
                test:/\.js/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}