const babel = require('@babel/core') // 引入@babel/core

module.exports = function (ctx) {
  let options = this.getOptions() // 拿到options 放进transform第二个参数里
  if (!Object.keys(options).length) {
    options = require('../babel.config')
  }
  console.log(options)

  // 使用异步，防止拿到数据不为同步
  const callback = this.async()
  // 使用transform进行代码转换
  babel.transform(ctx, options, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.code) // 结果在 result.code 里
    }
  })

  // return ctx
}