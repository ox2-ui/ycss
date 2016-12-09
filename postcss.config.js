
var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-discard-comments',
    'autoprefixer',
  ],
  input: 'src/index.css',
  dir: 'build/no-important/',
  autoprefixer: {
    browsers: "last 1 version, iOS 9"
  }
}


