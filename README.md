# turndown-plugin-gfm

A [Turndown](https://github.com/domchristie/turndown) plugin which adds
extensions for [Polar Bear](https://bear.app/faq/Markup%20:%20Markdown/Polar%20Bear%20markup%20language/), 
the markdown inspired markup language created for [bear.app](https://bear.app/)

## Installation

npm:

```
npm install turndown-plugin-polar-bear
```

Browser:

```html
<script src="https://unpkg.com/turndown/dist/turndown.js"></script>
<script src="https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js"></script>
```

## Usage

```js
// For Node.js
var TurndownService = require('turndown')
var turndownPluginPolarBear = require('turndown-plugin-polar-bear')

var bear = turndownPluginPolarBear.bear
var turndownService = new TurndownService()
turndownService.use(bear)
var markdown = turndownService.turndown('<strike>Hello world!</strike>')
```

turndown-plugin-gfm is a suite of plugins which can be applied individually. The available plugins are as follows:

- `strikethrough` (for converting `<strike>`, `<s>`, and `<del>` elements)
- `tables`
- `taskListItems`
- `gfm` (which applies all of the above)

So for example, if you only wish to convert tables:

```js
var tables = require('turndown-plugin-gfm').tables
var turndownService = new TurndownService()
turndownService.use(tables)
```

## License

turndown-plugin-polar-bear is copyright © 2018+ chee and released under the MIT license.
it is heavily based on [turndown-plugin-gfm](https://github.com/domchristie/turndown-plugin-gfm)