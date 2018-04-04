const common = require('./common')

const merge = require('webpack-merge')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common(false), {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new BrowserSyncPlugin({
			host: '127.0.0.1',
      port: 3002,
			proxy: 'http://react-redux.site',
			reload: true
		})
	]
})
