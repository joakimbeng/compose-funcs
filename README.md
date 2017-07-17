# compose-funcs

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> Compose functions (i.e. f(g(x)) -> (f ∘ g)(x)). Returns a function with correct length and a descriptive name

## Features

* Composes functions, duh
* Returns a function with the correct length, i.e. the same length as the rightmost function
* Returns a function with a descriptive name for easier debugging, e.g:
  ```
  compose(f, g, h) -> a function named "f ∘ g ∘ h"
  ```
* Returns the [identity function](https://en.wikipedia.org/wiki/Identity_function) when given no arguments to make it extra functional

## Installation

Install `compose-funcs` using [npm](https://www.npmjs.com/):

```bash
npm install --save compose-funcs
```

## Usage

```javascript
const compose = require('compose-funcs');

const add = (a, b) => a + b;
const double = a => a * 2;
const doubleAndAdd = compose(double, add);
// doubleAndAdd.length === 2
// doubleAndAdd.name === double ∘ add
doubleAndAdd(3, 4); // the same as: double(add(3, 4))
// (3 + 4) * 2 = 14
```

## API

### `compose(...functions)`

| Name | Type | Description |
|------|------|-------------|
| functions | `Function` | Any number of functions to compose to a new function |

**Returns:** `Function`. The composed function.

## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/compose-funcs
[npm-image]: https://badge.fury.io/js/compose-funcs.svg
[travis-url]: https://travis-ci.org/joakimbeng/compose-funcs
[travis-image]: https://travis-ci.org/joakimbeng/compose-funcs.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
