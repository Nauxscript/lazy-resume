const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8848,
    hot: true
  },
  // performance: {
  //   hints: "warning"
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      }, {
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }
    ],
  }
}

module.exports = merge(commonConfig,devConfig)