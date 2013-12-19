# ES6 `String.prototype.contains` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.contains.png?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.contains)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.contains` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains).

Other polyfills for `String.prototype.contains` are available:

* <https://github.com/paulmillr/es6-shim/blob/d8c4ec246a15e7df55da60b7f9b745af84ca9021/es6-shim.js#L186-L190> by [Paul Miller](http://paulmillr.com/) (~~[fails some tests](https://github.com/paulmillr/es6-shim/issues/175)~~ passes all tests)
* <https://github.com/google/traceur-compiler/blob/928cbdc9586ef2f74f612fde8f36c3370828a716/src/runtime/runtime.js#L102-L104> by Google (~~[fails a lot of tests](https://github.com/google/traceur-compiler/pull/556)~~ now uses this polyfill and passes all tests)

## Installation

In a browser:

```html
<script src="contains.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.contains
```

Then, in [Node.js](http://nodejs.org/):

```js
require('string.prototype.contains');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('String.prototype.contains');
```

## Notes

Polyfills + test suites for [`String.prototype.startsWith`](http://mths.be/startswith) and [`String.prototype.endsWith`](http://mths.be/endswith) are available, too.

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
