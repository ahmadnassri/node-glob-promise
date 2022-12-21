> _**Note**: This is just a [`Promise`][Promise] wrapped version of [`glob`][glob]_

## Install

```bash
npm install glob-promise glob
```

###### NOTE

[`glob`][glob] is set as a `peerDependency` in [`package.json`](package.json)

- `npm` >= 7 will automatically install `peerDependencies`
- `npm` <= 6 will **not** automatically install `peerDependencies`.

You will need to manually add `glob` as a dependency to your project for `glob-promise` to work.

## API

### `glob(pattern [, options])`

Alias for `glob.promise`

### `glob.promise(pattern [, options])`

_pattern_: `String` (glob pattern)
_options_: `Object` or `String`
Return: `Object` ([Promise])

When it finishes, it will be [_fulfilled_](http://promisesaplus.com/#point-26) with an `Array` of filenames as its first argument.

When it fails to read the files, it will be [_rejected_](http://promisesaplus.com/#point-30) with an error as its first argument.

```js
glob('**/*')
  .then(function(contents) {
    contents; //=> ['lorem', 'ipsum', 'dolor']
  });

glob('{foo,bar.baz}.txt', { nobrace: true })
  .then(function(contents) {
    contents; //=> []
  });
```

### `glob.glob(pattern [, options], cb)`

> see [`glob`](https://github.com/isaacs/node-glob#globpattern-options-cb)

### `glob.sync(pattern [, options])`

> see [`glob.sync()`](https://github.com/isaacs/node-glob#globsyncpattern-options)

### `glob.hasMagic(pattern, [options])`

> see [`glob.hasMagic()`](https://github.com/isaacs/node-glob#globhasmagicpattern-options)

### `Class: glob.Glob`

> see [`Glob`](https://github.com/isaacs/node-glob#class-globglob)

#### options

The option object will be directly passed to [glob](https://github.com/isaacs/node-glob#options).

[glob]: https://github.com/isaacs/node-glob
[Promise]: http://promisesaplus.com/
