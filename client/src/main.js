import Vue from 'vue';
import router from './router'
import App from './App.vue';
import './styles/app.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
