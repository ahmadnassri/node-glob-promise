'use strict'

var glob = require('glob')

module.exports = function (pattern, options) {
  return new Promise(function (_resolve, _reject) {
    glob(pattern, options, function (err, files) {
      return err === null ? _resolve(files) : _reject(err)
    })
  })
}
