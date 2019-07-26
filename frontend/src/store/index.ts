import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import auth from './modules/auth';
import cart from './modules/cart';
import category from './modules/category';

Vue.use(Vuex);

const store = new Store({
  modules: { auth, cart, category }
});

export default store;
