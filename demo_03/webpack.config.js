const path = require('path')
module.exports = {
  mode: 'production',
  // entry: ["./src/test1.js", "./src/test2.js"]
  // entry: {
  //   test1: './src/test1.js',
  //   test2: './src/test2.js',
  // }

  // entry: {
  //   t1: './src/test1.js',
  //   t2: {
  //     dependOn: 't1',
  //     import: './src/test2.js',
  //     runtime: 'x2'
  //   }
  // }

  // entry: {
  //   t1: './src/test1.js',
  //   t2: {
  //     import: './src/test2.js',
  //     runtime: 't1'
  //   }
  // }

  // entry: {
  //   t1: {
  //     import: './src/test1.js',
  //     dependOn: 't2'
  //   },
  //   t2: {
  //     import: './src/test2.js',
  //     dependOn: 't1'
  //   }
  // }

  //  entry introdcuct
  // entry: './src/test1.js',
  // output: {
  //   filename: 'colin1.js',
  //   clean: true,
  //   path: path.resolve(__dirname, 'colin_package')
  // }

  // 报错 Multiple chunks emit assets to the same filename colin.js 
  // entry: {
  //   test1: './src/test1.js',
  //   test2: './src/test2.js'
  // },
  // output: {
  //   // filename: 'colin.js',
  //   // filename: '[name].js',
  //   filename: '[name]-[id]-[hash].js',
  //   clean: true,
  //   path: path.resolve(__dirname, 'colin_package')
  // }
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpeg|jpg|png)/,
        type: 'asset/resource'
      }
    ]
  }
}