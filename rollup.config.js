import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const config = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'arrayCombos',
  plugins: [
    babel()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.dest = 'dist/array-combos.min.js'
  config.plugins.push(uglify())
} else {
  config.dest = 'dist/array-combos.js'
}

export default config
