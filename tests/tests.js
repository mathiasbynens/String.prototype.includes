var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../contains.js');

assertEquals(String.prototype.contains.length, 1);

assertEquals('abc'.contains(), false);
assertEquals('aundefinedb'.contains(), true);
assertEquals('abc'.contains(undefined), false);
assertEquals('aundefinedb'.contains(undefined), true);
assertEquals('abc'.contains(null), false);
assertEquals('anullb'.contains(null), true);
assertEquals('abc'.contains(false), false);
assertEquals('afalseb'.contains(false), true);
assertEquals('abc'.contains(NaN), false);
assertEquals('aNaNb'.contains(NaN), true);
assertEquals('abc'.contains('abc'), true);
assertEquals('abc'.contains('def'), false);
assertEquals('abc'.contains(''), true);
assertEquals(''.contains(''), true);

assertEquals('abc'.contains('b', -Infinity), true);
assertEquals('abc'.contains('b', -1), true);
assertEquals('abc'.contains('b', -0), true);
assertEquals('abc'.contains('b', +0), true);
assertEquals('abc'.contains('b', NaN), true);
assertEquals('abc'.contains('b', 'x'), true);
assertEquals('abc'.contains('b', false), true);
assertEquals('abc'.contains('b', undefined), true);
assertEquals('abc'.contains('b', null), true);
assertEquals('abc'.contains('b', 1), true);
assertEquals('abc'.contains('b', 2), false);
assertEquals('abc'.contains('b', 3), false);
assertEquals('abc'.contains('b', 4), false);
assertEquals('abc'.contains('b', +Infinity), false);
assertEquals('abc'.contains('bc'), true);
assertEquals('abc'.contains('bc\0'), false);

assertEquals('abc123def'.contains(1, -Infinity), true);
assertEquals('abc123def'.contains(1, -1), true);
assertEquals('abc123def'.contains(1, -0), true);
assertEquals('abc123def'.contains(1, +0), true);
assertEquals('abc123def'.contains(1, NaN), true);
assertEquals('abc123def'.contains(1, 'x'), true);
assertEquals('abc123def'.contains(1, false), true);
assertEquals('abc123def'.contains(1, undefined), true);
assertEquals('abc123def'.contains(1, null), true);
assertEquals('abc123def'.contains(1, 1), true);
assertEquals('abc123def'.contains(1, 2), true);
assertEquals('abc123def'.contains(1, 3), true);
assertEquals('abc123def'.contains(1, 4), false);
assertEquals('abc123def'.contains(1, 5), false);
assertEquals('abc123def'.contains(1, +Infinity), false);

assertEquals('abc123def'.contains(9, -Infinity), false);
assertEquals('abc123def'.contains(9, -1), false);
assertEquals('abc123def'.contains(9, -0), false);
assertEquals('abc123def'.contains(9, +0), false);
assertEquals('abc123def'.contains(9, NaN), false);
assertEquals('abc123def'.contains(9, 'x'), false);
assertEquals('abc123def'.contains(9, false), false);
assertEquals('abc123def'.contains(9, undefined), false);
assertEquals('abc123def'.contains(9, null), false);
assertEquals('abc123def'.contains(9, 1), false);
assertEquals('abc123def'.contains(9, 2), false);
assertEquals('abc123def'.contains(9, 3), false);
assertEquals('abc123def'.contains(9, 4), false);
assertEquals('abc123def'.contains(9, 5), false);
assertEquals('abc123def'.contains(9, +Infinity), false);

assertEquals('foo[a-z]+(bar)?'.contains('[a-z]+'), true);
assertEquals('foo[a-z]+(bar)?'.contains(/[a-z]+/), false);
assertEquals('foo/[a-z]+/(bar)?'.contains(/[a-z]+/), true);
assertEquals('foo[a-z]+(bar)?'.contains('(bar)?'), true);
assertEquals('foo[a-z]+(bar)?'.contains(/(bar)?/), false);
assertEquals('foo[a-z]+/(bar)?/'.contains(/(bar)?/), true);

// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
assertEquals(string.contains(''), true);
assertEquals(string.contains('\xF1t\xEBr'), true);
assertEquals(string.contains('\xE0liz\xE6'), true);
assertEquals(string.contains('\xF8n\u2603\uD83D\uDCA9'), true);
assertEquals(string.contains('\u2603'), true);
assertEquals(string.contains('\uD83D\uDCA9'), true);

assertThrows(function() { String.prototype.contains.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.contains.call(undefined, 'b'); }, TypeError);
assertThrows(function() { String.prototype.contains.call(undefined, 'b', 4); }, TypeError);
assertThrows(function() { String.prototype.contains.call(null); }, TypeError);
assertThrows(function() { String.prototype.contains.call(null, 'b'); }, TypeError);
assertThrows(function() { String.prototype.contains.call(null, 'b', 4); }, TypeError);
assertEquals(String.prototype.contains.call(42, '2'), true);
assertEquals(String.prototype.contains.call(42, 'b', 4), false);
assertEquals(String.prototype.contains.call(42, '2', 4), false);
assertEquals(String.prototype.contains.call({ 'toString': function() { return 'abc'; } }, 'b', 0), true);
assertEquals(String.prototype.contains.call({ 'toString': function() { return 'abc'; } }, 'b', 1), true);
assertEquals(String.prototype.contains.call({ 'toString': function() { return 'abc'; } }, 'b', 2), false);

assertThrows(function() { String.prototype.contains.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.contains.apply(undefined, ['b']); }, TypeError);
assertThrows(function() { String.prototype.contains.apply(undefined, ['b', 4]); }, TypeError);
assertThrows(function() { String.prototype.contains.apply(null); }, TypeError);
assertThrows(function() { String.prototype.contains.apply(null, ['b']); }, TypeError);
assertThrows(function() { String.prototype.contains.apply(null, ['b', 4]); }, TypeError);
assertEquals(String.prototype.contains.apply(42, ['2']), true);
assertEquals(String.prototype.contains.apply(42, ['b', 4]), false);
assertEquals(String.prototype.contains.apply(42, ['2', 4]), false);
assertEquals(String.prototype.contains.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), true);
assertEquals(String.prototype.contains.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), true);
assertEquals(String.prototype.contains.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), false);
