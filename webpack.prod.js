const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js', // determine entry point
    optimization : {
        minimizer : [new TerserPlugin({}) , new OptimizeCSSAssetsPlugin({})]
    },
    output : {
        libraryTarget: 'var',
        library : 'Client',
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
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
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

    new MiniCssExtractPlugin({filename: '[name].css'}),

    new WorkboxPlugin.GenerateSW()

    ]

}
