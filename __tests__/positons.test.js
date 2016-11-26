/* globals test, expect */

import positions from '../src/positions'

test('Positions returns correct items when created with an integer (1)', () => {
  expect(positions(1)).toEqual([ 0 ])
})

test('Positions returns correct items when created with an integer (2)', () => {
  expect(positions(2)).toEqual([ 0, 1 ])
})

test('Positions returns correct items when created with an integer (3)', () => {
  expect(positions(3)).toEqual([ 0, 1, 2 ])
})

test('Positions returns identicle items when created with an array', () => {
  expect(positions([ 2, 3, 4 ])).toEqual([ 2, 3, 4 ])
})

test('Positions returns correct items when passed an adjust argument', () => {
  expect(positions([ 0, 3, 6 ], { i: 1, p: 4 })).toEqual([ 0, 4, 5 ])
})

test('Positions returns correct items when passed an adjust argument', () => {
  expect(positions([ 2, 3, 6 ], { i: 1, p: 4 })).toEqual([ 2, 4, 5 ])
})
