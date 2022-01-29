// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    //   path: __dirname + '/dist',
  //   filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'] 
      }
    ]
  },
  watch: true,
  devServer: {
    static: {
        directory: path.join(__dirname, "dist"),
        watch: true,
    }
  }
  // watch: true,
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   wathContentBase: true,
  //   liveReload: true
  // }
}