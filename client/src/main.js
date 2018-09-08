import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
