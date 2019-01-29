import bearStyleCodeBlock from './bear-style-code-block'
import bearStyleTodo from './bear-style-todo'
import bold from './bold'
import githubStyleCodeBlock from './github-style-code-block'
import githubStyleTodo from './github-style-todo'
import lineSeparator from './line-separator'
import italic from './italic'
import mark from './mark'
import strikethrough from './strikethrough'
import underline from './underline'

function bear (turndownService) {
  turndownService.use([
    bearStyleCodeBlock,
    bearStyleTodo,
    bold,
    githubStyleCodeBlock,
    githubStyleTodo,
    italic,
    lineSeparator,
    mark,
    strikethrough,
    underline
  ])
}

export {
  bear,
  bearStyleCodeBlock,
  bearStyleTodo,
  bold,
  githubStyleCodeBlock,
  githubStyleTodo,
  italic,
  lineSeparator,
  mark,
  strikethrough,
  underline
}
