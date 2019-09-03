const createConfig = api => {
  api.cache(false);
  return {
    presets: [
      [
        '@emotion/babel-preset-css-prop',
        { autoLabel: true, labelFormat: '[local]' },
      ],
    ],
    plugins: [
      // ['@babel/plugin-transform-react-jsx'],
      '@babel/syntax-dynamic-import',
      '@babel/plugin-transform-react-display-name',
      '@babel/plugin-syntax-jsx',
      // Resolve modules start w/ ~ to be relative to proj
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '~': '.',
          },
        },
      ],
    ],
  };
};

module.exports = createConfig;
