const isDev = require('../is-dev')

module.exports = {
  devtool: isDev ? 'cheap-module-source-map' : false
}
