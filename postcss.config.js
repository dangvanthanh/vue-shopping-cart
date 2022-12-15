const tailwindcss = require('tailwindcss')
const postcssImport = require('postcss-import')
const postcssEach = require('postcss-each')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNesting = require('postcss-nesting')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    postcssImport(),
    postcssNesting(),
    tailwindcss('./tailwind.config.js'),
    postcssEach(),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions',
    }),
    cssnano(),
  ],
}
