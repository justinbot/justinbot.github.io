const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './src/build'),
  },
  module: {
    rules: [
      // Compiling styles
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          },
        ]
      },
      // Compiling JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Load SVGs
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ]
  },
  optimization: {
    // Split imports in packages into vendor files.
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
};
