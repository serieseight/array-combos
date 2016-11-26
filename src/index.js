import canMove from './can-move'
import lastMovable from './last-movable'
import positions from './positions'

const combosOfLength = (a, n) => {
  const c = []
  const outOfBounds = a.length
  const last = n - 1

  let p = positions(n)

  c.push(p.map(x => a[ x ]))

  const move = base => {
    if (canMove(p[ last ], outOfBounds)) {
      p[ last ]++
      c.push(p.map(x => a[ x ]))
      move(last)
    }

    const m = lastMovable(p, outOfBounds)

    if (m !== null) {
      p = positions(p, { i: m, p: p[ m ] + 1 })
      c.push(p.map(x => a[ x ]))
      move()
    }
  }

  move(last)

  return c
}

const combos = (a = [], n = 0) => {
  if (n) {
    return combosOfLength(a, n)
  }

  const l = a.length
  let c = []

  while (n <= l) {
    c = c.concat(combosOfLength(a, n))
    n++
  }

  return c
}

export default combos
