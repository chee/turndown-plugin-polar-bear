export default function todo (turndownService) {
  turndownService.addRule('todo', {
    filter: function (node) {
      return node.nodeName === 'LI' &&
        node.firstChild &&
        node.firstChild.type === 'checkbox'
    },
    replacement: function (content, node) {
      return (
        node.firstChild.checked
          ? '+ '
          : '- '
      ) + content
    }
  })
}
