var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: glob.sync('./src/**/*.{js,jsx}'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }
};