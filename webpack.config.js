const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const SOURCE = /src/;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.jsx$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })]
};

