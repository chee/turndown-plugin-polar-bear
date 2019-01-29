import config from './rollup.config'

export default config({
  output: {
    format: 'cjs',
    file: 'lib/turndown-plugin-polar-bear.cjs.js'
  }
})
