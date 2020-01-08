import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import store from '../store/';

Vue.use(VueRouter);

const isAuthenticated = (to: any, from: any, next: any) => {
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
    path: '*',
    redirect: { name: 'home' }
  }
];

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return { selector: to.hash };
  }

  return { x: 0, y: 0 };
};

// const originalPush = VueRouter.prototype.push;

// VueRouter.prototype.push = function push(location:any, onResolve:any, onReject:any) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err:any => err:any);
// };

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history'
});

router.beforeEach((to: any, from: any, next: any) => {
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

router.beforeResolve((to: any, from: any, next: any) => {
  if (to.name) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
