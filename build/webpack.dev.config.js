const merge = require('webpack-merge');
const path = require('path')
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');

const PORT = 1314
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: 'eval',
  devServer: {
    port: PORT,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    hot: true,
    https: false,
    noInfo: false,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('https://easy-mock.com/mock/5cf8b928e4047c4cd7831942/example'),
    }),
  ]
});
