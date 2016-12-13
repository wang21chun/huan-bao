var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/client/app.js',
    output: {
        path: './public/javascripts/',
        publicPath: '/javascripts/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: 'style!css',
        }, {
            test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
            loader: "file-loader"
        }, ]
    },
    "babel": {
        "presets": [
            "es2015"
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
};
