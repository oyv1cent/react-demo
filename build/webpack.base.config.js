const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      {
        // for img/font/media
        test: /\.(jpe?g|png|svg|gif|ogg|mp3|ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name][hash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            options: {
              sourceMap: !isProd,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
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
