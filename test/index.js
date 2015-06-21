/* global describe, it*/

'use strict'

var glob = require('..')

require('should')

describe('node module', function () {
  it('should successfully parse', function (done) {
    glob('test/**').then(function (files) {
      files.should.be.an.Array
      files.should.eql([ 'test', 'test/index.js' ])

      done()
    })
  })

  it('should be rejected when globbing fails', function (done) {
    glob('/**/*').catch(function (err) {
      err.code.should.be.true
      done()
    })
  })

  it('should throw a type error when the first argument is not a string.', function (done) {
    glob({}).catch(function (err) {
      err.message.should.equal('glob pattern string required')
      done()
    })
  })

  it('should throw a type error when it takes no arguments.', function (done) {
    glob().catch(function (err) {
      err.message.should.equal('glob pattern string required')
      done()
    })
  })
})
