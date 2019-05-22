const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['jsx', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isProd ? 'js/[name].[hash:8].js' : 'js/[name].js',
    publicPath: './'
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
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
