import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
import { currency } from './utils/currency';
import './app.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter('currency', currency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
