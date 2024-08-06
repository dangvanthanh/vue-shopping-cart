import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vueRouter(), vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@/styled-system': path.resolve(__dirname, 'styled-system'),
		},
	},
})
