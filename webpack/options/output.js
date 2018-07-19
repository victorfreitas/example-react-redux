const { public } = require('../paths')

module.exports = () => ({
  output: {
    path: `${public}/js`,
    filename: 'bundle.js'
  }
})
