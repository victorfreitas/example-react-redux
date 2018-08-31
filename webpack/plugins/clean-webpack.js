const CleanWebpackPlugin = require('clean-webpack-plugin')

const { root, public } = require('../paths')

module.exports = new CleanWebpackPlugin([public], {
  root,
  verbose: true,
})
