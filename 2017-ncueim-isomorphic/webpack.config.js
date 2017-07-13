var path = require('path');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js',
        vendors: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "[name].[hash].js",
    },
    module: {
        rules: [{
            test: /\.(scss)|(css)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test: /\.(js)|(jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-2', 'stage-3', 'es2017'],
                    plugins: ['transform-es2015-arrow-functions', 'transform-runtime', 'transform-regenerator']
                }
            }
        }, /*
            for font-awesome
            ref:https://www.npmjs.com/package/font-awesome-loader
            */
        {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin 
            // loader: "url?limit=10000" 
            loader: "url-loader"
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        // 打包第3方module至一個檔案
        // 第一個參數對應到 entry 內的屬性名
        // 第二個參數是輸出檔案的名稱
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: "vendors.js",
        }),

        //額外生成style.css
        new ExtractTextPlugin("style.css"),

        //最小化程式碼
        //new UglifyJSPlugin(),

        //自動生成html
        new HtmlWebpackPlugin({
            title: 'BMI計算機',
            template: './index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })
    ],
    devServer: {
        //Make a change in one of your files and hit save. You should see that the console is recompiling.
        watchOptions: {
            poll: true
        },
        //Enable gzip compression for everything served
        compress: true,
    }
}