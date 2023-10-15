const path = require('path')

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolveLoader:{
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use:'myLoader1.js',
        // use: './loader/myLoader1.js',
        use: [
          // 'myLoader1',
          // 'myLoader2',
          // 'myLoader3',

          /* 给loader4传递参数 */
          {
            loader: 'myLoader4',
            options: {
              name: 'colin',
              age: '21'
            }
          }
        ]
      }

      /* 分开打包 提升打包顺序 */
      // {
      //   test: /\.js$/,
      //   use: 'myLoader1'
      // },
      // {
      //   test: /\.js$/,
      //   use: 'myLoader2',
      //   // enforce: 'pre'
      // },
      // {
      //   test: /\.js$/,
      //   use: 'myLoader3'
      // }
    ]
  }
}