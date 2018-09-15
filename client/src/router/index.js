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
    path: '*',
    redirect: { name: 'home' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
