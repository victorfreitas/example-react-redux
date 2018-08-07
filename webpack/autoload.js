const fs = require('fs')
const path = require('path')

class Autoload {
  constructor(root) {
    this.options = {}
    this.root = path.join(root)
    this.noIndex = this.noIndex.bind(this)
    this.parse = this.parse.bind(this)
    this.parseOptions = this.parseOptions.bind(this)

    this.init()
  }

  init() {
    this.setFiles()
    this.filterFiles()
    this.processFiles()
  }

  setFiles() {
    this.files = fs.readdirSync(this.root)
  }

  filterFiles() {
    this.files = this.files.filter(this.noIndex)
  }

  noIndex(file) {
    return !/^index\.(js|php|html?)$/.test(file)
  }

  processFiles() {
    this.files = this.files.map(this.parse)
  }

  parse(file) {
    return require(`${this.root}/${file}`)
  }

  parseOptions(option) {
    this.options = Object.assign({}, this.options, option)
  }

  toArray() {
    return this.files.filter(v => !!v)
  }

  toObject() {
    this.toArray()
      .forEach(this.parseOptions)

    return this.options
  }
}

module.exports = (root, method = 'toArray') => {
  try {
    return (new Autoload(root))[method]()
  } catch(e) {
    console.error(`Autoload error: ${e.message}\nRoot: ${root}\nMethod: ${method}\n`)
    process.exit(1)
  }
}
