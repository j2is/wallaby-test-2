const path = require('path'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
  webpack = require('webpack'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'app': ['babel-polyfill', './src/js/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader?cacheDirectory'
        }]
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'Website',
      logo: path.resolve('./img/favicon.png'),
      suppressSuccess: true,
      activateTerminalOnError: true,
      sound: false
    }),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true
  }
};