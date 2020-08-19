import Vue from 'vue';
import { VLazyImagePlugin } from 'v-lazy-image';
import router from './router';
import store from './store';
import App from './App.vue';
import './styles/app.css';

Vue.config.productionTip = false;

Vue.use(VLazyImagePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
