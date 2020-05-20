var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../auto.js');

Object.prototype[1] = 2; // try to break `arguments[1]`

assertEquals(String.prototype.includes.length, 1);
assertEquals(String.prototype.propertyIsEnumerable('includes'), false);

assertEquals('abc'.includes(), false);
assertEquals('aundefinedb'.includes(), true);
assertEquals('abc'.includes(undefined), false);
assertEquals('aundefinedb'.includes(undefined), true);
assertEquals('abc'.includes(null), false);
assertEquals('anullb'.includes(null), true);
assertEquals('abc'.includes(false), false);
assertEquals('afalseb'.includes(false), true);
assertEquals('abc'.includes(NaN), false);
assertEquals('aNaNb'.includes(NaN), true);
assertEquals('abc'.includes('abc'), true);
assertEquals('abc'.includes('def'), false);
assertEquals('abc'.includes(''), true);
assertEquals(''.includes(''), true);

assertEquals('abc'.includes('b', -Infinity), true);
assertEquals('abc'.includes('b', -1), true);
assertEquals('abc'.includes('b', -0), true);
assertEquals('abc'.includes('b', +0), true);
assertEquals('abc'.includes('b', NaN), true);
assertEquals('abc'.includes('b', 'x'), true);
assertEquals('abc'.includes('b', false), true);
assertEquals('abc'.includes('b', undefined), true);
assertEquals('abc'.includes('b', null), true);
assertEquals('abc'.includes('b', 1), true);
assertEquals('abc'.includes('b', 2), false);
assertEquals('abc'.includes('b', 3), false);
assertEquals('abc'.includes('b', 4), false);
assertEquals('abc'.includes('b', +Infinity), false);
assertEquals('abc'.includes('bc'), true);
assertEquals('abc'.includes('bc\0'), false);

assertEquals('abc123def'.includes(1, -Infinity), true);
assertEquals('abc123def'.includes(1, -1), true);
assertEquals('abc123def'.includes(1, -0), true);
assertEquals('abc123def'.includes(1, +0), true);
assertEquals('abc123def'.includes(1, NaN), true);
assertEquals('abc123def'.includes(1, 'x'), true);
assertEquals('abc123def'.includes(1, false), true);
assertEquals('abc123def'.includes(1, undefined), true);
assertEquals('abc123def'.includes(1, null), true);
assertEquals('abc123def'.includes(1, 1), true);
assertEquals('abc123def'.includes(1, 2), true);
assertEquals('abc123def'.includes(1, 3), true);
assertEquals('abc123def'.includes(1, 4), false);
assertEquals('abc123def'.includes(1, 5), false);
assertEquals('abc123def'.includes(1, +Infinity), false);

assertEquals('abc123def'.includes(9, -Infinity), false);
assertEquals('abc123def'.includes(9, -1), false);
assertEquals('abc123def'.includes(9, -0), false);
assertEquals('abc123def'.includes(9, +0), false);
assertEquals('abc123def'.includes(9, NaN), false);
assertEquals('abc123def'.includes(9, 'x'), false);
assertEquals('abc123def'.includes(9, false), false);
assertEquals('abc123def'.includes(9, undefined), false);
assertEquals('abc123def'.includes(9, null), false);
assertEquals('abc123def'.includes(9, 1), false);
assertEquals('abc123def'.includes(9, 2), false);
assertEquals('abc123def'.includes(9, 3), false);
assertEquals('abc123def'.includes(9, 4), false);
assertEquals('abc123def'.includes(9, 5), false);
assertEquals('abc123def'.includes(9, +Infinity), false);

assertEquals('foo[a-z]+(bar)?'.includes('[a-z]+'), true);
assertThrows(function() { 'foo[a-z]+(bar)?'.includes(/[a-z]+/); }, TypeError);
assertThrows(function() { 'foo/[a-z]+/(bar)?'.includes(/[a-z]+/); }, TypeError);
assertEquals('foo[a-z]+(bar)?'.includes('(bar)?'), true);
assertThrows(function() { 'foo[a-z]+(bar)?'.includes(/(bar)?/); }, TypeError);
assertThrows(function() { 'foo[a-z]+/(bar)?/'.includes(/(bar)?/); }, TypeError);

// https://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
assertEquals(string.includes(''), true);
assertEquals(string.includes('\xF1t\xEBr'), true);
assertEquals(string.includes('\xE0liz\xE6'), true);
assertEquals(string.includes('\xF8n\u2603\uD83D\uDCA9'), true);
assertEquals(string.includes('\u2603'), true);
assertEquals(string.includes('\uD83D\uDCA9'), true);

assertThrows(function() { String.prototype.includes.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.includes.call(undefined, 'b'); }, TypeError);
assertThrows(function() { String.prototype.includes.call(undefined, 'b', 4); }, TypeError);
assertThrows(function() { String.prototype.includes.call(null); }, TypeError);
assertThrows(function() { String.prototype.includes.call(null, 'b'); }, TypeError);
assertThrows(function() { String.prototype.includes.call(null, 'b', 4); }, TypeError);
assertEquals(String.prototype.includes.call(42, '2'), true);
assertEquals(String.prototype.includes.call(42, 'b', 4), false);
assertEquals(String.prototype.includes.call(42, '2', 4), false);
assertEquals(String.prototype.includes.call({ 'toString': function() { return 'abc'; } }, 'b', 0), true);
assertEquals(String.prototype.includes.call({ 'toString': function() { return 'abc'; } }, 'b', 1), true);
assertEquals(String.prototype.includes.call({ 'toString': function() { return 'abc'; } }, 'b', 2), false);
assertThrows(function() { String.prototype.includes.call({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);
assertThrows(function() { String.prototype.includes.call({ 'toString': function() { return 'abc'; } }, /./); }, TypeError);

assertThrows(function() { String.prototype.includes.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.includes.apply(undefined, ['b']); }, TypeError);
assertThrows(function() { String.prototype.includes.apply(undefined, ['b', 4]); }, TypeError);
assertThrows(function() { String.prototype.includes.apply(null); }, TypeError);
assertThrows(function() { String.prototype.includes.apply(null, ['b']); }, TypeError);
assertThrows(function() { String.prototype.includes.apply(null, ['b', 4]); }, TypeError);
assertEquals(String.prototype.includes.apply(42, ['2']), true);
assertEquals(String.prototype.includes.apply(42, ['b', 4]), false);
assertEquals(String.prototype.includes.apply(42, ['2', 4]), false);
assertEquals(String.prototype.includes.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), true);
assertEquals(String.prototype.includes.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), true);
assertEquals(String.prototype.includes.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), false);
assertThrows(function() { String.prototype.includes.apply({ 'toString': function() { throw RangeError(); } }, [/./]); }, RangeError);
assertThrows(function() { String.prototype.includes.apply({ 'toString': function() { return 'abc'; } }, [/./]); }, TypeError);
