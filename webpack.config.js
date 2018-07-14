const webpack = require("webpack");
const path = require("path")

module.exports = {
    entry:{
        main:"./src/index.js"
    },
    output:{
        filename:'app.js',
        path:path.join(__dirname,'./dist') 
    },
    module:{
        rules:[
            {
                test:/\.less&/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-laoder'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}