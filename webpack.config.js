var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: "tag-input.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    "react": "React"
  }
};