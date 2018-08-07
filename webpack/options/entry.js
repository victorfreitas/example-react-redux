const { src, scss } = require('../paths')

module.exports = {
  entry: {
    app: [
      `${src}/index.jsx`,
      `${scss}/style.scss`
    ]
  }
}
