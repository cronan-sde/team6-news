const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './front/src/index.js',
  output: {
    path: path.resolve(__dirname, 'front/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { 
          test: /\.(js|jsx)$/, exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.css$/,
          include: SRC_DIR,
          loader: 'css-loader'
        }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NEWS_API_KEY': JSON.stringify(process.env.NEWS_API_KEY),
      }
    })
  ]
};