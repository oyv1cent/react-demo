const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new cleanWebpackPlugin(),
  ]
});
