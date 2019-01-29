export default function bold (turndownService) {
  turndownService.addRule('bold', {
    filter: ['b', 'strong'],
    replacement: function (content) {
      return '*' + content + '*'
    }
  })
}
