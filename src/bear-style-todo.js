function selectTodoCheckbox (node) {
  return node.firstElementChild
}

function selectTodoText (node) {
  return node.firstElementChild && node.firstElementChild.nextElementSibling
}

export default function todo (turndownService) {
  turndownService.addRule('todo', {
    filter: function (node) {
      var todoCheckboxElement = selectTodoCheckbox(node)
      var todoTextElement = selectTodoText(node)

      return node.nodeName === 'LI' &&
        todoCheckboxElement &&
        todoTextElement &&
        todoCheckboxElement.classList.contains('todo-checkbox') &&
        todoTextElement.classList.contains('todo-text')
    },
    replacement: function (content, node) {
      var checked = selectTodoCheckbox(node)
        .classList
        .contains('todo-checked')

      return (
        checked
          ? '+ '
          : '- '
      ) + content
    }
  })
}
