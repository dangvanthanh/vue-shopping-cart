const tailwindcss = require('tailwindcss')
const postcssImport = require('postcss-import')
const postcssEach = require('postcss-each')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('./tailwind.config.js'),
    postcssEach(),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions',
    }),
    cssnano(),
  ],
}
