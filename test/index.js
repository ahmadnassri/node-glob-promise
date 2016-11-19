import glob from '../src/index'
import { test } from 'tap'

test('should successfully parse', (assert) => {
  assert.plan(2)

  glob('test/**')
    .then((files) => {
      assert.type(files, Array)
      assert.same(files, [ 'test', 'test/index.js' ])
    })
})

test('should be rejected when globbing fails', (assert) => {
  assert.plan(1)

  glob('/**/*')
    .catch((err) => assert.equal(err.code, 'EACCES'))
})

test('should throw a type error when the first argument is not a string.', (assert) => {
  assert.plan(1)

  glob({})
    .catch((err) => assert.equal(err.message, 'glob pattern string required'))
})

test('should throw a type error when it takes no arguments.', (assert) => {
  assert.plan(1)

  glob()
    .catch((err) => assert.equal(err.message, 'glob pattern string required'))
})
