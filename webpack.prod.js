var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: [
        path.resolve(__dirname, 'lib/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'rich-editor.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.css', '.scss', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin('rich-editor.css')
    ]
};
