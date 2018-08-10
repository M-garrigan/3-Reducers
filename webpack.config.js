const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ]
}
