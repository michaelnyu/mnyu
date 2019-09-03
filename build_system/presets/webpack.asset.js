const loader = {
  loader: 'url-loader',
  options: {
    limit: 8182,
    name: '[name]-[hash].[ext]',
  },
};

module.exports = ({ minify }) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /icon/,
            use: 'svg-react-loader',
          },
          {
            use: minify ? [loader, 'image-webpack-loader'] : loader,
          },
        ],
      },
    ],
  },
});
