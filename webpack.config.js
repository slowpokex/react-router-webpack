const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const includePath = () => [ path.resolve(__dirname, 'src') ];


module.exports = {
    entry: glob.sync('./src/**/*.{js,jsx}'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new ExtractTextPlugin('./styles.css'),
        new webpack.NodeEnvironmentPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new HtmlWebpackPlugin({
            title: 'React Router task with Webpack',
            files : {
                css: ['./styles.css']
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/'
                })
            },
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /(node_modules)/,
                loader: 'react-hot-loader'
            },
            {
                test: /(\.jsx$|\.js$)/,
                include: includePath(),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0', 'react'],
                            plugins: [ require('babel-plugin-transform-runtime') ]
                        }
                    }
                ]
            }
        ]
    }
};