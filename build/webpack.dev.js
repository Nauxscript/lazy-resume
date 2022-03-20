const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devServer: {
    static: './docs',
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
      }
      // , {
      //   test: /\.ejs$/,
      //   loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      // }
    ],
  }
}

module.exports = merge(commonConfig,devConfig)