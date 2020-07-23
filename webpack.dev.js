const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',// determine entry point

    output : {
        libraryTarget: 'var',
        library : 'Client',
    },

    devServer: {
        port: 3012,
    },

    module: {
        rules: [
            {
                /* to handler with javascript file*/
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {   
                /* to handler with css/sass file*/
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },

            {
                /* to handler with html file and handler with image*/
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                /* to handler with image*/
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                      
                    }
                ]
                
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",

        }),

        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    }),
    new WorkboxPlugin.GenerateSW()

    ]

}