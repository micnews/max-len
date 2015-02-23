'use strict';

module.exports = maxLen;

function maxLen (string, warningLength, errorLength) {
  return string.split('\n').map(function (row, index) {
    var line = index + 1;
    if (row.length < warningLength) {
      return false;
    }
    if (row.length < errorLength) {
      return {
        fatal: false,
        line: line,
        message: 'Line ' + line + ' exceeds the recommended line length of ' +
          warningLength + '.',
        ruleId: 'max-len',
        severity: 1
      };
    }
    return {
      fatal: false,
      line: line,
      message: 'Line ' + line + ' exceeds the maximum line length of ' +
        errorLength + '.',
      ruleId: 'max-len',
      severity: 2

    };
  }).filter(Boolean);
}
