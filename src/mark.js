export default function mark (turndownService) {
  turndownService.addRule('mark', {
    filter: ['mark'],
    replacement: function (content) {
      return '::' + content + '::'
    }
  })
}
