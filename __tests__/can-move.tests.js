/* globals test, expect */

import canMove from '../src/can-move'

test('Cannot move when no gap between marker positions', () => {
  expect(canMove(0, 1)).toBe(false)
})

test('Can move when gap of one between marker positions', () => {
  expect(canMove(0, 2)).toBe(true)
})

test('Can move when multiple gap between marker positions', () => {
  expect(canMove(5, 8)).toBe(true)
})
