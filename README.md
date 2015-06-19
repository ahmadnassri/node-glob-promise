# glob-promise [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

[Promise] version of [glob]:

> Match files using the patterns the shell uses, like stars and stuff.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

```sh
npm install --save glob-promise
```

## API

```js
var glob = require('glob-promise')
```

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

## License

[ISC License](LICENSE) &copy; [Ahmad Nassri](https://www.ahmadnassri.com/)

[license-url]: https://github.com/ahmadnassri/glob-promise/blob/master/LICENSE

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

[glob]: https://github.com/isaacs/node-glob
[Promise]: http://promisesaplus.com/
