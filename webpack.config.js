const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:{
        main:"./src/index.js"
    },
    output:{
        filename:'app.js',
        path:path.join(__dirname,'./dist') 
    },
    plugins:[
        /* 文档地址:https://github.com/johnagan/clean-webpack-plugin */
        new CleanWebpackPlugin('dist',{
            
        }),
        new HtmlWebpackPlugin({
            /* 具体见文档：https://github.com/jantimon/html-webpack-plugin */
            title:"test",
            filename:"index.html",
            template:"./index.html",
            inject:true
        }),
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