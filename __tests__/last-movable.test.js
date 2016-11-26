/* globals test, expect */

import lastMovable from '../src/last-movable'

test('Returns null when one item in only position', () => {
  expect(lastMovable([ 0 ], 1)).toBe(null)
})

test('Returns null when one item in last position', () => {
  expect(lastMovable([ 1 ], 2)).toBe(null)
})

test('Returns null when three items and in only positions', () => {
  expect(lastMovable([ 0, 1, 2 ], 3)).toBe(null)
})

test('Returns null when three items are in last positions', () => {
  expect(lastMovable([ 3, 4, 5 ], 6)).toBe(null)
})

test('Returns correct index when one item can move', () => {
  expect(lastMovable([ 0 ], 2)).toBe(0)
})

test('Returns correct index when one item can move', () => {
  expect(lastMovable([ 3 ], 6)).toBe(0)
})

test('Returns correct index when last item can move', () => {
  expect(lastMovable([ 0, 1 ], 3)).toBe(1)
})

test('Returns correct index when last item can move', () => {
  expect(lastMovable([ 0, 1, 2, 6 ], 10)).toBe(3)
})

test('Returns correct index when last but one item can move', () => {
  expect(lastMovable([ 0, 1, 4 ], 5)).toBe(1)
})

test('Returns correct index when last but one item can move', () => {
  expect(lastMovable([ 0, 5, 6, 9 ], 10)).toBe(2)
})

test('Returns correct index when last but two item can move', () => {
  expect(lastMovable([ 0, 1, 3, 4 ], 5)).toBe(1)
})

test('Returns correct index when last but two item can move', () => {
  expect(lastMovable([ 0, 4, 5, 8, 9 ], 10)).toBe(2)
})
