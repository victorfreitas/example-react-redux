module.exports = () => ({
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: true,
          chunks: 'all'
        }
      }
    }
  }
})
