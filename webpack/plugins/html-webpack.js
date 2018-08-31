const HTMLWebpackPlugin = require('html-webpack-plugin')

const { public, html } = require('../paths')

module.exports = new HTMLWebpackPlugin({
  filename: `${public}/index.html`,
  template: `${html}/index.html`,
  hash: true,
})
