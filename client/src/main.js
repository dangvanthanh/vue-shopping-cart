import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
import { currency } from './utils/currency';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter('currency', currency);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
