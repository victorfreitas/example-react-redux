const { src, public, stylesheets } = require('./paths')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = isProd => ({
	entry: {
		app: `${src}/index.jsx`
	},
	output: {
		path: `${public}/js`,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: [
							'transform-object-rest-spread',
							'array-includes'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
						{
							loader: 'css-loader',
							options: {
								minimize: isProd,
								sourceMap: !isProd
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !isProd
							}
						}
					]
        })
			},
			{
				test: /\.(png|gif|jpe?g|svg)$/,
				rules: [
					{
						loader: 'file-loader',
						options: {
							outputPath: `../icons`
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			'~': stylesheets
		}
	},
	plugins: [
		new ExtractTextPlugin('../css/style.css')
	]
})
