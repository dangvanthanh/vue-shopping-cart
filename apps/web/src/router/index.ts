import {
	type RouteLocationNormalized,
	createRouter,
	createWebHistory,
} from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// const Home = () => import('../views/Home.vue')
// const Login = () => import('../views/Login.vue')
// const Signup = () => import('../views/Signup.vue')
// const ProductById = () => import('../views/ProductById.vue')
// const ProductByCategory = () => import('../views/ProductByCategory.vue')
// const NotFound = () => import('../views/NotFound.vue')
//
// const routes = [
// 	{ path: '/', component: Home },
// 	{ path: '/login', component: Login },
// 	{ path: '/signup', component: Signup },
// 	{ path: '/product/:id', component: ProductById },
// 	{ path: '/category/:category', component: ProductByCategory },
// 	{ path: '/not-found', component: NotFound },
// 	{ path: '/:pathMatch(.*)*', component: NotFound },
// ]
//
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
