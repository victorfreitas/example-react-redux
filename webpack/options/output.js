const { public } = require('../paths')

module.exports = {
  output: {
    path: `${public}/dist`,
    filename: 'bundle.js',
    chunkFilename: 'vendor.bundle.js'
  }
}
