const common = require('./common')

const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(common(true), {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
})
