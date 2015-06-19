'use strict'

var glob = require('glob')
var wrapPromise = require('wrap-promise')

module.exports = function readFilesPromise (pattern, options) {
  return wrapPromise(function (resolve, reject) {
    glob(pattern, options, function (err, files) {
      if (err) {
        return reject(err)
      }

      resolve(files)
    })
  })
}
