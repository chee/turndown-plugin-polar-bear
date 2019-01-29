export default function underline (turndownService) {
  turndownService.addRule('underline', {
    filter: ['u'],
    replacement: function (content) {
      return '_' + content + '_'
    }
  })
}
