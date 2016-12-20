'use strict';

const findIndexes = require('.');
const test = require('tape');

test('findIndexes()', t => {
  const arr = ['a', 10, 'b', 10, 'c'];

  t.deepEqual(
    findIndexes(arr, value => value === 10),
    [1, 3],
    'should return all indexes that satisfy the provided testing function.'
  );

  t.deepEqual(arr, ['a', 10, 'b', 10, 'c'], 'should not mutate the passed array.');

  t.deepEqual(
    findIndexes(['a', 'b'], (value, index, arrItself) => arrItself.length - index * 2),
    [0],
    'should pass three arguments to the testing function.'
  );

  t.throws(
    () => findIndexes(1, 'a'),
    /^TypeError.*Expected an array, but got 1 \(number\)\./,
    'should throw a type error when the first argument is not an array.'
  );

  t.throws(
    () => findIndexes('', 'a'),
    /^TypeError.*Expected an array, but got an empty string\./,
    'should throw a type error when the first argument is an empty string.'
  );

  t.throws(
    () => findIndexes(['a'], 'b'),
    /^TypeError.*Expected a function to test all values in an array, but got b \(string\)\./,
    'should throw a type error when the second argument is not a number.'
  );

  t.throws(
    () => findIndexes(['a'], ''),
    /^TypeError.*Expected a function to test all values in an array, but got an empty string\./,
    'should throw a type error when the second argument is an empty string.'
  );

  t.end();
});
