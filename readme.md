# max-len 

small module to warn/error when the length of a row is to long

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install max-len --save
```

## Usage

```js
var maxLen = require("max-len");

var string = 'beep boop'; // string of length 9

// empty array
console.log(maxLen(string, 10, 15));

// one warning
console.log(maxLen(string, 5, 10));

// one error
console.log(maxLen(string, 3, 5));

```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
