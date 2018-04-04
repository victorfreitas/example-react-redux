const { join } = require('path')

module.exports = {
	root: join(__dirname, '..', '/'),
	src: join(__dirname, '..', 'src'),
	public: join(__dirname, '..', 'public'),
	stylesheets: join(__dirname, '..', 'assets/stylesheets')
}
