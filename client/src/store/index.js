import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import cart from './cart';
import category from './category';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
    category,
  },
});

export default store;
