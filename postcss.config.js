module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions'],
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          safe: true,
          autoprefixer: false,
        },
      ],
    }),
  ],
}
