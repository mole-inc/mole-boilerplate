module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      flexbox: true,
    }),
    require('cssnano')({
      preset: 'default',
      discardComments: {
        removeAll: true,
      },
    }),
    require('css-declaration-sorter')({
      order: 'alphabetical',
    }),
    require('postcss-sort-media-queries')({
      sort: 'desktop-first',
    }),
  ],
}
