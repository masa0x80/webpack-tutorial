const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './entry.js'
  },
  output: {
    path:     __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port:        3000
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: 'style!css'
      }, {
        test:    /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};
