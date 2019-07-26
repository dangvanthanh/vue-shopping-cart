const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssEach = require('postcss-each');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const cssMqPacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('./tailwind.config.js'),
    postcssEach(),
    postcssNested(),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions'
    }),
    cssMqPacker(),
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  ]
};
