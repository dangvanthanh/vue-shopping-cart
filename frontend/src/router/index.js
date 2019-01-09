import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import store from '../store/';

const isAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next('/home');
  } else {
    next();
  }
};

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
    component: () => import('@/views/Login.vue'),
    beforeEnter: isAuthenticated
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/Signup.vue'),
    beforeEnter: isAuthenticated
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import('@/views/dashboard/Dashboard.vue')
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return { selector: to.hash };
  }

  return { x: 0, y: 0 };
};

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next();
  }

  if (!store.getters.isAuthenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  }

  next();
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
