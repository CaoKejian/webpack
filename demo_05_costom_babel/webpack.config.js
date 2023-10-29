const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options:{
            // plugins: [
            //   "@babel/plugin-transform-arrow-functions"
            // ]
            // presets: [
            //   "@babel/preset-env"
            // ]
          // } 
        }
      },
      {
        test: /\.md$/,
        use: 'md-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}