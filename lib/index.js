'use strict'

var glob = require('glob')

module.exports = function (pattern, options) {
  return new Promise(function (resolve, reject) {
    glob(pattern, options, function (err, files) {
      return err === null ? resolve(files) : reject(err)
    })
  })
}
