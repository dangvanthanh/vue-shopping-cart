import { config as configDotenv } from 'dotenv'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

configDotenv()

const production = !process.env.ROLLUP_WATCH
const port = 8080

export default {
  input: 'client/src/main.js',
  output: {
    file: 'client/public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app',
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: `${__dirname}/client/src/` }],
    }),
    postcss({ extract: true }),
    vue({ css: false }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __myapp: JSON.stringify({
        env: {
          APP_WRITE_API_ENDPOINT: process.env.APP_WRITE_API_ENDPOINT,
          APP_WRITE_PROJECT_ID: process.env.APP_WRITE_PROJECT_ID,
        },
      }),
      preventAssignment: true
    }),
    json(),
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs(),
    esbuild({
      minify: production,
      target: 'es2015',
    }),
    !production &&
      serve({
        open: true,
        contentBase: 'client/public',
        port,
        historyApiFallback: true,
      }),
    !production && livereload({ watch: 'client/public' }),
  ],
}
