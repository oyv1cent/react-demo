const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {

  mode: "development",
  // 用法：entry: {[entryChunkName: string]: string|Array<string>}
  entry: path.resolve(__dirname, '../src') + '/index.jsx',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['jsx', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isProd ? 'js/[name].[hash:8].js' : 'js/[name].js',
  },
  devServer: {
    port: '1314',
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    // historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        include: [path.join(__dirname, '../src')],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
