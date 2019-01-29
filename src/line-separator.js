export default function lineSeparator (turndownService) {
  turndownService.addRule('lineSeparator', {
    filter: ['hr'],
    replacement: function () {
      return '---'
    }
  })
}
