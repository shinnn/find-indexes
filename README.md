# find-indexes

[![NPM version](https://img.shields.io/npm/v/find-indexes.svg)](https://www.npmjs.com/package/find-indexes)
[![Bower version](https://img.shields.io/bower/v/find-indexes.svg)](https://github.com/shinnn/find-indexes/releases)
[![Build Status](https://travis-ci.org/shinnn/find-indexes.svg?branch=master)](https://travis-ci.org/shinnn/find-indexes)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/find-indexes.svg)](https://coveralls.io/r/shinnn/find-indexes)

Like [`Array#findIndex()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), but return all indexes instead of the first one

```javascript
import findIndexes from 'find-indexes';

findIndexes(['a', 'b', 'c', 'b'], val => val === 'b'); //=> [1, 3]
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install find-indexes
```

### [bower](https://bower.io/)

```
bower install find-indexes
```

## API

```javascript
import findIndexes from 'find-indexes';
```

### findIndexes(*array*, *fn*)

*array*: `Array`  
*fn*: `Function`  
Return: `Array`

It returns all indexes of the the array that satisfy the provided testing function. Otherwise it returns an empty array.

```javascript
findIndexes([0.1, 0.5], Math.ceil); //=> [0, 1]
findIndexes([0.1, 0.5], Math.round); //=> [1]
findIndexes([0.1, 0.5], Math.floor); //=> []
```

## Related projects

* [arr-indexes-of](https://github.com/shinnn/arr-indexes-of) - [`Array#indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) version
* [str-indexes-of](https://github.com/shinnn/str-indexes-of) - [`String#indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) version

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
