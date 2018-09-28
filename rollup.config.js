const pkg = require('./package.json');

const name = pkg.name
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

module.exports = {
  input: './src/index.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name
  },
  context: 'window',
  plugins: [
    require('rollup-plugin-svelte')(),
    require('rollup-plugin-buble')(),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-replace')({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    require('rollup-plugin-terser').terser()
  ]
};
