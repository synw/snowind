import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/api.ts',
  output: [
    {
      file: 'dist/api.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/api.min.js',
      format: 'iife',
      name: '$api',
      //plugins: [terser()]
    }],
  plugins: [
    typescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    isProduction && terser({ format: { comments: false } }),
  ],
};