const { src, scss, assets } = require('../paths')

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': scss,
      src,
      assets
    }
  }
})
