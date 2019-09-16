const flowEntry = require('rollup-plugin-flow-entry');

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
  plugins: [flowEntry()],
  external: ['@lukekaalim/model']
}