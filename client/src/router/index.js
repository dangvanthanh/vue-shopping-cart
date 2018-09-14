import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Category from '../components/Category.vue';
import CheckOut from '../components/CheckOut.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail,
    props: true
  },
  {
    path: '/category/:category',
    name: 'category',
    component: Category,
    props: true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
