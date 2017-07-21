const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
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
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NodeEnvironmentPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new ExtractTextPlugin('./styles.css'),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js'
      }),
      new HtmlWebpackPlugin({
        title: 'React Router task with Webpack',
        files : {
          css: ['/styles.css']
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
          include: [ path.resolve(__dirname, 'src') ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: [ require('babel-plugin-transform-runtime') ]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        }
      ]
    }
};