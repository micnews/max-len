var maxLen = require('./');

var string = 'beep boop'; // string of length 9

// empty array
console.log(maxLen(string, 10, 15));

// one warning
console.log(maxLen(string, 5, 10));

// one error
console.log(maxLen(string, 3, 5));
