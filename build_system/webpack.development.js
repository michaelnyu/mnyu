const webpackMerge = require('webpack-merge');

module.exports = () =>
  webpackMerge(
    {
      mode: 'development',
      devtool: 'cheap-module-source-map',
    },
    require('./presets/webpack.svg.js')({ minify: false }),
    require('./presets/webpack.md.js')(),
    require('./presets/webpack.image.js')(),
  );
