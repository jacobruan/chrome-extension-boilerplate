const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ZipPlugin = require('zip-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WriteWebpackPlugin = require('write-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');


const config = {
  entry: {
    content: './src/content/index.js',
    background: './src/background/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'extension'),
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new MiniCssExtractPlugin(),
      new TerserPlugin({
        terserOptions: {
          output: {
            ascii_only: true
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin({
      silent: true
    }),
    new DotenvPlugin(),
    new ESLintPlugin({
      extensions: ['js']
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{
        from: 'src/popup',
        to: "popup"
      }, {
        from: 'src/options',
        to: "options"
      }, {
        from: 'src/assets',
        to: "assets"
      }, {
        from: 'src/scripts',
        to: "scripts"
      }, {
        from: 'src/styles',
        to: "styles"
      }, {
        from: 'src/manifest'
      }],
    }),
  ],
};

module.exports = config;