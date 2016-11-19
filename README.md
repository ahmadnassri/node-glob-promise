# glob-promise [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

[Promise] version of [glob]:

> Match files using the patterns the shell uses, like stars and stuff.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save glob-promise
```

## Usage

I recommend using an optimized build matching your Node.js environment version, otherwise, the standard `require` would work just fine with any version of Node `>= v4.0` .

```js
/*
 * Node 7
 */
const glob = require('glob-promise/lib/node7')

/*
 * Node 6
 */
const glob = require('glob-promise/lib/node6')

/*
 * Node 4 (Default)
 * Note: additional ES2015 polyfills may be required
 */
var glob = require('glob-promise')
```

## API

### glob(pattern [, options])

*pattern*: `String` (glob pattern)
*options*: `Object` or `String`
Return: `Object` ([Promise])

When it finishes, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with an `Array` of filenames as its first argument.

When it fails to read the files, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

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

#### options

The option object will be directly passed to [glob](https://github.com/isaacs/node-glob#options).

----
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/

[travis-url]: https://travis-ci.org/ahmadnassri/glob-promise
[travis-image]: https://img.shields.io/travis/ahmadnassri/glob-promise.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/glob-promise
[npm-license]: https://img.shields.io/npm/l/glob-promise.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/glob-promise.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/glob-promise.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/glob-promise
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/glob-promise.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/glob-promise.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/glob-promise
[david-image]: https://img.shields.io/david/ahmadnassri/glob-promise.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/glob-promise
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/glob-promise/badge?style=flat-square

[glob]: https://github.com/isaacs/node-glob
[Promise]: http://promisesaplus.com/
