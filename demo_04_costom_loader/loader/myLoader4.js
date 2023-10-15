const { validate } = require('schema-utils')
const loader4Schema = require('./schema/loader4_schema.json')

module.exports = function(ctx) {
  const args = this.getOptions()
  console.log(args)
  console.log('-------myLoader4', ctx)

  /* 校验格式 */
  validate(loader4Schema, args)
  return ctx
}