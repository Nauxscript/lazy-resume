const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const resumeData = require('../resume.config')

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
        use: [
          {
            loader: 'ejs-loader',
            options: {
              variable: 'data',
              esModule: false,
            },
          }
        ]
      }
      // {
      //   test: /\.ejs$/,
      //   use: [
      //     'html-loader',
      //     {
      //       loader: 'ejs-compiled-loader',
      //       options: {
      //         htmlmin: true,
      //         htmlminOptions: {
      //           removeComments: true
      //         }
      //       },
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.ejs'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '!!ejs-compiled-loader!./src/index.ejs'
    }),
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ]
}