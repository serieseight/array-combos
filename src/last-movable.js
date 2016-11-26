import canMove from './can-move'

const lastMovable = (positions, outOfBounds) => {
  const p = [ ...positions, outOfBounds ]

  for (let i = p.length - 1; i > 0; i--) {
    if (canMove(p[ i - 1 ], p[ i ])) {
      return i - 1
    }
  }

  return null
}

export default lastMovable
