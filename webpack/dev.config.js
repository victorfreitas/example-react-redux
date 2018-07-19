const merge = require('webpack-merge')

const options = require('./options')

module.exports = merge(options(false), {
  mode: 'development',
  devtool: 'inline-source-map'
})
