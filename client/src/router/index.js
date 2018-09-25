import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/ProductDetail.vue'),
    props: true
  },
  {
    path: '/category/:category',
    name: 'category',
    component: () => import('@/views/ProductCategory.vue'),
    props: true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckOut.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: true },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { requiresAuth: true },
    component: () => import('@/views/Signup.vue')
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn) {
      next({
        path: 'home'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
