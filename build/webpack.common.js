const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.[fullhash].js',
    clean: true,
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'asset/img/[name][ext]'
        }
      }, {
        test: /\.ejs$/,
        use: [{
          loader: 'ejs-compiled-loader',
          options: {
            htmlmin: true,
            htmlminOptions: {
              removeComments: true
            }
          }
        }]
      }, {
        test: /\.md/,
        use: [{
          loader: 'ejs-compiled-loader',
          options: {
            htmlmin: true,
            htmlminOptions: {
              removeComments: true
            }
          }
        }, 'markdown-loader']
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.ejs'
    // }),
    new HtmlWebpackPlugin({
      title: 'Nauxscript',
      filename: 'index.html',
      // template: '!!ejs-compiled-loader!./src/index.ejs'
      template: './src/index.ejs'
    })
  ]
}