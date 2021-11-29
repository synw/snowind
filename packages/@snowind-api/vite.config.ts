import { defineConfig } from 'vite'
import typescript2 from "rollup-plugin-typescript2"
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript2({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      clean: true
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'requix'
    },
  }
})