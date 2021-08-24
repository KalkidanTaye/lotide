# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kali.taye/lotide`

**Require it:**

`const _ = require('@kali.taye/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: returns the first element in an array
- `tail()`: returns the last element in an array
- `middle()`: returns the middle element in an array
- `countLetters()`: counts a letter in a given words
- `countOnly()`: count items in an array
- `eqArrays()`: compares and returns true or false for two arrays
- `eqObjects()`: compares and returns true or false for two objects
- `findKey()`: returns an element from an object based on passed condition
- `findKeyByValue()`: compares and returns a value from an object based on a key value
- `letterPositions()`: loops through a word and returns posion of a letter based of given condition
- ` map()`: loops through an array of words and returns the first letter of the words
- ` takeUntil()`: loops through an array until a condition is met
- ` without()`: takes out an element form an array.
