// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   wathContentBase: true,
  //   liveReload: true
  // }
}