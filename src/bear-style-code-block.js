export default function bearStyleCodeBlock (turndownService) {
  turndownService.addRule('bearStyleCodeBlock', {
    filter: function (node) {
      let child = node.firstChild
      return (
        node.nodeName === 'PRE' &&
        child &&
        child.nodeName === 'CODE' &&
          child.classList.contains('code-multiline')
      )
    },
    replacement: function (content, node, options) {
      let child = node.firstChild
      return (
        '\n```' + child.lang + '\n' +
          child.textContent +
        '\n' + '```\n'
      )
    }
  })
}
