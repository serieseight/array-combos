# Array Combos

A function to get the unique item combinations from an array

- Plain old vanilla JS
- Just 0.6kb gzipped
- Does **not** use generators

## Installation

```
npm install array-combos
```

## Usage

```js
import combos from 'array-combos'

const arr = [ 1, 2, 3 ]

console.log(combos(arr))

// [
//   [],
//   [ 1 ],
//   [ 2 ],
//   [ 3 ],
//   [ 1, 2 ],
//   [ 1, 3 ],
//   [ 2, 3 ],
//   [ 1, 2, 3 ]
// ]
```

An optional second argument will restrict results
to combinations with that number of items.

```js
import combos from 'array-combos'

const arr = [ 1, 2, 3 ]

console.log(combos(arr, 2))

// [
//   [ 1, 2 ],
//   [ 1, 3 ],
//   [ 2, 3 ],
// ]
```

## Browser support

Array Combos is packaged with Babel, and
[makes use of `Array.from`](https://babeljs.io/docs/usage/caveats).
If you want Array Combos to work on browsers that don't support
this method (e.g. IE11), then you will need to
[polyfill `Array.from`](https://github.com/zloirock/core-js)
before using `combos`.
