import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { currency } from './utils/currency';
import './styles/app.css';

Vue.config.productionTip = false;
Vue.filter('currency', currency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
