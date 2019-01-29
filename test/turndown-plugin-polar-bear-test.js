var Attendant = require('turndown-attendant')
var TurndownService = require('turndown')
var bear = require('../lib/turndown-plugin-polar-bear.cjs').bear

var attendant = new Attendant({
  file: __dirname + '/index.html',
  TurndownService: TurndownService,
  beforeEach: function (turndownService) {
    turndownService.use(bear)
  }
})

attendant.run()
