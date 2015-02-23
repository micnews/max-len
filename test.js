'use strict';

var test = require('tape');
var maxLen = require('./');

test('maxLen', function (t) {
  var input = createString(10) + '\n' + createString(79);
  t.deepEqual(maxLen(input, 80, 100), []);
  t.deepEqual(maxLen(input, 75, 100), [{
    message: 'Line 2 exceeds the recommended line length of 75.',
    severity: 1,
    fatal: false,
    ruleId: 'max-len',
    line: 2
  }]);
  t.deepEqual(maxLen(input, 50, 75), [{
    message: 'Line 2 exceeds the maximum line length of 75.',
    severity: 2,
    fatal: false,
    ruleId: 'max-len',
    line: 2
  }]);
  t.end();
});

function createString (len) {
  return Array.prototype.join.call(Array(len + 1), '+');
}
