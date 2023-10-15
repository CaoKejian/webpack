/* 异步Loader */
module.exports = function (ctx) {
  const callback = this.async()
  console.log('-----loader2', ctx)
  setTimeout(() => {
    callback(null, ctx + 'y')
  }, 3000);
}

/* 同步Loader */
// module.exports = function (ctx) {
//   console.log('-----loader2', ctx)
//   return ctx + 'y'
// }

// module.exports.pitch = function() {
//   console.log('loader2  X')
// }