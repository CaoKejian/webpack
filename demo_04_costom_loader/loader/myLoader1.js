module.exports = function(ctx, map, meta){
  console.log('------loader1', ctx)
  return ctx 
}

// module.exports.pitch = function() {
//   console.log('loader1  X')
// }