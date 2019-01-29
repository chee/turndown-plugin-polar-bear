export default function italic (turndownService) {
  turndownService.addRule('italic', {
    filter: ['i', 'em'],
    replacement: function (content) {
      return '/' + content + '/'
    }
  })
}
