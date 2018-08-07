const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCssAssetsPlugin({})
  ]
}
