var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './example/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css|less)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|eot|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html', //相对publicPath
      template: './example/index.tpl.html',  //相对config
      inject: 'body',
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ],
  devtool: 'source-map'
}
