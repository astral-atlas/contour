const flowEntry = require('rollup-plugin-flow-entry');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: 'src/index',
  output: [
    {
      file: 'dist/contour.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/contour.esm.js',
      format: 'esm'
    }
  ],
  plugins: [flowEntry({ mode: 'strict' }), terser()],
  external: ['@lukekaalim/model']
}