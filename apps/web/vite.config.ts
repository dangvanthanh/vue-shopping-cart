import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vueRouter(), vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@styled-system': resolve(__dirname, 'styled-system'),
		},
	},
})
