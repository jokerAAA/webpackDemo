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

}