'use strict'

var glob = require('glob')

module.exports = function (pattern, options) {
  var resolve
  var reject

  glob(pattern, options, function (err, files) {
    if (err) return reject(err)

    resolve(files)
  })

  return new Promise(function (_resolve, _reject) {
    resolve = _resolve
    reject = _reject
  })
}
