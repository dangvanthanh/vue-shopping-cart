import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import nodePolyfills from 'rollup-plugin-node-polyfills'

const production = !process.env.ROLLUP_WATCH;
const port = 8080;

export default {
  input: 'client/src/main.js',
  output: {
    file: 'client/public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app',
  },
  plugins: [
    nodePolyfills(),
    postcss({ extract: true }),
    vue({ css: false }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
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
};
