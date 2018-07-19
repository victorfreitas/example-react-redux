const merge = require('webpack-merge')

const options = require('./options')

module.exports = merge(options(true), {
  mode: 'production'
})
