const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
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
  ]
}
