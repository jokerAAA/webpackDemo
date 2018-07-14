const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"production",
    entry:{
        main:"./src/app.js"
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
         * 用于混淆js代码
         */
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
        }),
        /**
         * https://www.webpackjs.com/plugins/babel-minify-webpack-plugin/
         * 用于压缩代码，与loader中略有不同
         */
        new MinifyPlugin({

        }),
        /**
         * https://www.webpackjs.com/plugins/hot-module-replacement-plugin/
         * 永远不要在生产环境中启用，随后做生产环境和开发环境的单独配置
         */
        // new webpack.HotModuleReplacementPlugin({
            
        // })
        new VueLoaderPlugin(),
        
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'vue-loader',
                    
                }
            },
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
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
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        // presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            Page:path.resolve(__dirname,'src/page'),
            
        }
    }
}