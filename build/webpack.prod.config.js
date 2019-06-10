const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new cleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('https://easy-mock.com/mock/5cf8b928e4047c4cd7831942/example'),
    }),
  ]
});
