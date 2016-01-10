var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.jsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                "css?sourceMap!less?sourceMap")
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}