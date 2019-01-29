var highlightRegExp = /highlight-(?:text|source)-([a-z0-9]+)/

export default function githubStyleCodeBlock (turndownService) {
  turndownService.addRule('githubStyleCodeBlock', {
    filter: function (node) {
      var firstChild = node.firstChild
      return (
        node.nodeName === 'DIV' &&
        highlightRegExp.test(node.className) &&
        firstChild &&
        firstChild.nodeName === 'PRE'
      )
    },
    replacement: function (content, node, options) {
      var className = node.className || ''
      var language = (className.match(highlightRegExp) || [null, ''])[1]

      return (
        '\n```' + language + '\n' +
          node.firstChild.textContent +
        '\n' + '```\n'
      )
    }
  })
}
