# ES6 `String.prototype.contains` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.contains.png?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.contains)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.contains` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains).

Other polyfills for `String.prototype.contains` are available:

* <https://github.com/paulmillr/es6-shim/blob/f9b8b19923cd9ed9caeb100cd5e5506349b35171/es6-shim.js#L160-L165> by [Paul Miller](http://paulmillr.com/) (passes all tests)

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

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
