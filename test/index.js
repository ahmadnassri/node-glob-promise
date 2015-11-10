/* global describe, it*/

'use strict'

var assert = require('assert')
var glob = require('..')
var util = require('util')

describe('node module', function () {
  it('should successfully parse', function (done) {
    glob('test/**').then(function (files) {
      assert.equal(true, util.isArray(files))
      assert.deepEqual([ 'test', 'test/index.js' ], files)

      done()
    })
  })

  it('should be rejected when globbing fails', function (done) {
    glob('/**/*').catch(function (err) {
      assert.equal('EACCES', err.code)
      done()
    })
  })

  it('should throw a type error when the first argument is not a string.', function (done) {
    glob({}).catch(function (err) {
      assert.equal('glob pattern string required', err.message)
      done()
    })
  })

  it('should throw a type error when it takes no arguments.', function (done) {
    glob().catch(function (err) {
      assert.equal('glob pattern string required', err.message)
      done()
    })
  })
})
