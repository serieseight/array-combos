/* globals test, expect */

import combos from '../src'

test('An empty array returns one combination', () => {
  expect(combos([])).toEqual([
    []
  ])
})

test('An array with one item returns two combinations', () => {
  expect(combos([ 1 ])).toEqual([
    [],
    [ 1 ]
  ])
})

test('An array with two items returns four combinations', () => {
  expect(combos([ 1, 2 ])).toEqual([
    [],
    [ 1 ],
    [ 2 ],
    [ 1, 2 ]
  ])
})

test('An array with three items returns eight combinations', () => {
  expect(combos([ 1, 2, 3 ])).toEqual([
    [],
    [ 1 ],
    [ 2 ],
    [ 3 ],
    [ 1, 2 ],
    [ 1, 3 ],
    [ 2, 3 ],
    [ 1, 2, 3 ]
  ])
})

test('An array with four items returns sixteen combinations', () => {
  expect(combos([ 1, 2, 3, 4 ])).toEqual([
    [],
    [ 1 ],
    [ 2 ],
    [ 3 ],
    [ 4 ],
    [ 1, 2 ],
    [ 1, 3 ],
    [ 1, 4 ],
    [ 2, 3 ],
    [ 2, 4 ],
    [ 3, 4 ],
    [ 1, 2, 3 ],
    [ 1, 2, 4 ],
    [ 1, 3, 4 ],
    [ 2, 3, 4 ],
    [ 1, 2, 3, 4 ]
  ])
})

test('An array with five items returns thirty two combinations', () => {
  expect(combos([ 1, 2, 3, 4, 5 ])).toEqual([
    [],
    [ 1 ],
    [ 2 ],
    [ 3 ],
    [ 4 ],
    [ 5 ],
    [ 1, 2 ],
    [ 1, 3 ],
    [ 1, 4 ],
    [ 1, 5 ],
    [ 2, 3 ],
    [ 2, 4 ],
    [ 2, 5 ],
    [ 3, 4 ],
    [ 3, 5 ],
    [ 4, 5 ],
    [ 1, 2, 3 ],
    [ 1, 2, 4 ],
    [ 1, 2, 5 ],
    [ 1, 3, 4 ],
    [ 1, 3, 5 ],
    [ 1, 4, 5 ],
    [ 2, 3, 4 ],
    [ 2, 3, 5 ],
    [ 2, 4, 5 ],
    [ 3, 4, 5 ],
    [ 1, 2, 3, 4 ],
    [ 1, 2, 3, 5 ],
    [ 1, 2, 4, 5 ],
    [ 1, 3, 4, 5 ],
    [ 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ]
  ])
})

test('An array with four items returns six two item combinations', () => {
  expect(combos([ 1, 2, 3, 4 ], 2)).toEqual([
    [ 1, 2 ],
    [ 1, 3 ],
    [ 1, 4 ],
    [ 2, 3 ],
    [ 2, 4 ],
    [ 3, 4 ]
  ])
})

test('An array with five items returns ten three items combinations', () => {
  expect(combos([ 1, 2, 3, 4, 5 ], 3)).toEqual([
    [ 1, 2, 3 ],
    [ 1, 2, 4 ],
    [ 1, 2, 5 ],
    [ 1, 3, 4 ],
    [ 1, 3, 5 ],
    [ 1, 4, 5 ],
    [ 2, 3, 4 ],
    [ 2, 3, 5 ],
    [ 2, 4, 5 ],
    [ 3, 4, 5 ]
  ])
})

test('An array with six items returns twenty three items combinations', () => {
  expect(combos([ 1, 2, 3, 4, 5, 6 ], 3)).toEqual([
    [ 1, 2, 3 ],
    [ 1, 2, 4 ],
    [ 1, 2, 5 ],
    [ 1, 2, 6 ],
    [ 1, 3, 4 ],
    [ 1, 3, 5 ],
    [ 1, 3, 6 ],
    [ 1, 4, 5 ],
    [ 1, 4, 6 ],
    [ 1, 5, 6 ],
    [ 2, 3, 4 ],
    [ 2, 3, 5 ],
    [ 2, 3, 6 ],
    [ 2, 4, 5 ],
    [ 2, 4, 6 ],
    [ 2, 5, 6 ],
    [ 3, 4, 5 ],
    [ 3, 4, 6 ],
    [ 3, 5, 6 ],
    [ 4, 5, 6 ]
  ])
})
