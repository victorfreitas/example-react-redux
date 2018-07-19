const { join } = require('path')

const root = join(__dirname, '..')
const assets = `${root}/assets`;

module.exports = {
  root,
  assets,
  src: `${root}/src`,
  scss: `${assets}/scss`,
  images: `${assets}/images`,
  public: `${root}/docs`
}
