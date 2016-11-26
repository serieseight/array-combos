const arrFromN = n => {
  const a = []

  for (let i = 0, p = 0; i < n; i++, p++) {
    a.push(i)
  }

  return a
}

const positions = (arrOrN, adjust) => {
  const p = Array.isArray(arrOrN) ? [ ...arrOrN ] : arrFromN(arrOrN)

  if (adjust) {
    for (let i = adjust.i, j = 0, l = p.length; i < l; i++, j++) {
      p[ i ] = adjust.p + j
    }
  }

  return p
}

export default positions
