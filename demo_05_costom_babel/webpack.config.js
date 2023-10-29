const path = require('path')

module.exports = {
  mode: 'development',
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
      }
    ]
  }
}