import code from './index.md'
import './index.css'
import 'highlight.js/styles/github.css'

console.log('src/index.js')
const name = 'colin'

const x = () => {
  console.log('---x')
}
x()
document.querySelector('body').insertAdjacentHTML('beforeend', code)