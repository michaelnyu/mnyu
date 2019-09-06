const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const ExtractTextPlugin = require("mini-css-extract-plugin");
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');

const webpackModeConfig = env =>
  require(`./build_system/webpack.${env.mode}.js`)(env);

const createConfig = ({ mode } = { mode: 'production' }) => {
  const config = webpackMerge(
    {
      target: 'web',
      context: path.resolve(__dirname, 'src'), // set context path to folder src
      entry: {
        // tells webpack where to start bundling files
        main: ['main.js'],
      },
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
      module: {
        // defines how exported JS modules are transformed
        rules: [
          // babel-loader takes ES6 code and makes it understandable to browsers
          {
            test: /\.(js$|jsx$)/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
        ],
      },
      optimization: {
        // creates only a single runtime file to be shared
        // for all chunks
        runtimeChunk: 'single',
        // splits our node_modules so they don't have
        // be downloaded all at once
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
        // override default
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
        ],
      },
      plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new HtmlPlugin({
          title: 'Creative Labs',
          filename: 'index.html',
          inject: 'body',
          template: '../template/index.html',
        }),
        new CopyPlugin([
          {
            from: '../public',
          },
        ]),
      ],

      output: {
        path: path.resolve(__dirname, 'bin'),
        publicPath: '/',
        filename: 'static/[name].[hash].js',
        chunkFilename: 'static/chunk.[name].[chunkhash].js',
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
      },

      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: true,
        historyApiFallback: true,
      },
    },
    webpackModeConfig({ mode }),
  );
  return config;
};

module.exports = createConfig;
