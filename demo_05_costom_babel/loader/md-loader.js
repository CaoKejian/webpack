const {marked} = require('marked')
const hljs = require('highlight.js')
module.exports = function(ctx) {
  // marked解析前 设置高亮标识
  
  marked.setOptions({
    highlight: function(code, lang){
      return hljs.highlight(lang, code).value
    }
  })

  // 转换
  const content = marked(ctx)

  // 返回的结果必须是模块化的内容
  const innerContent = "`" + content + "`"
  const moduleContent = `var code = ${innerContent}; export default code;`
  return moduleContent
}