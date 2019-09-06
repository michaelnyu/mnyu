const webpackMerge = require('webpack-merge');

module.exports = () =>
  webpackMerge(
    {
      mode: 'production',
    },
    require('./presets/webpack.svg.js')({ minify: true }),
    require('./presets/webpack.md.js')(),
  );
