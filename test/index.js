const glob = require('../lib')
const { test } = require('tap')

test('exports', assert => {
  assert.plan(6)

  assert.type(glob, 'function')
  assert.type(glob.glob, 'function')
  assert.type(glob.Glob, 'function')
  assert.type(glob.hasMagic, 'function')
  assert.type(glob.promise, 'function')
  assert.type(glob.sync, 'function')
})

test('successfully parse', assert => {
  assert.plan(2)

  glob('test/**')
    .then(files => {
      assert.type(files, Array)
      assert.same(files, ['test', 'test/index.js'])
    })
})

test('be rejected when globbing fails', assert => {
  assert.plan(1)

  glob('/**/*', { silent: true })
    .catch(err => assert.true(err instanceof Error))
})

test('throw a type error when the first argument is not a string.', assert => {
  assert.plan(1)

  glob({})
    .catch(err => assert.equal(err.message, 'glob pattern string required'))
})

test('throw a type error when it takes no arguments.', assert => {
  assert.plan(1)

  glob()
    .catch(err => assert.equal(err.message, 'glob pattern string required'))
})
