'use strict';

var appendType = require('append-type');

/*!
 * find-indexes | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/find-indexes
*/
function findIndexes(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError(
      'Expected an array, but got ' +
      (arr === '' ? 'an empty string' : appendType(arr)) +
      '.'
    );
  }

  if (typeof fn !== 'function') {
    throw new TypeError(
      'Expected a function to test all values in an array, but got ' +
      (fn === '' ? 'an empty string' : appendType(fn)) +
      '.'
    );
  }

  return arr.reduce(function(results, current, index, arrItself) {
    if (fn(current, index, arrItself)) {
      results.push(index);
    }

    return results;
  }, []);
}

module.exports = findIndexes;
