import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import cart from './modules/cart';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { auth, cart }
});

export default store;
