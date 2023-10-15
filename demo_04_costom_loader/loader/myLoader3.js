module.exports = function (ctx) {
  // const callback = this.callback
  const callback = this.async()
  console.log('------loader3', ctx)
  setTimeout(() => {
    callback(null, ctx + 'x')
  }, 2000);
}

// module.exports = function(ctx){
//   console.log('------loader3', ctx)
//   return ctx + 'x'
// }

// module.exports.pitch = function() {
//   console.log('loader3  X')
// }