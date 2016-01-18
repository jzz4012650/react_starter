var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
    ],
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                "css?sourceMap!less?sourceMap")
        }, {
            test: /\.jsx?$/,
            // exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
    ]
}