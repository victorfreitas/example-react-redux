const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const { public } = require('../paths')

module.exports = (
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3002,
    reload: true,
    server: {
      baseDir: [public]
    }
  })
)
