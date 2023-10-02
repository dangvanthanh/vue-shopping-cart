import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// NOTE(bartlomieju): this is a papercut that shouldn't be required, see README.md
import "npm:vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
