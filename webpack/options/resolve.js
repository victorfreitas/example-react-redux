const { src, scss } = require('../paths')

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '~': scss,
      'src': src
    }
  }
})
