const HTMLWebpackPlugin = require('html-webpack-plugin')

const { public } = require('../paths')

module.exports = prod => (
  !prod && new HTMLWebpackPlugin({
    template: `${public}/index.html`
  })
)
