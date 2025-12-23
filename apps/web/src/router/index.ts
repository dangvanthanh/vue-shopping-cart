import {
	createRouter,
	createWebHistory,
	type RouteLocationNormalized,
} from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to: RouteLocationNormalized) => {
		if (to) {
			return { selector: to.hash }
		}

		return { left: 0, top: 0 }
	},
})

export default router
