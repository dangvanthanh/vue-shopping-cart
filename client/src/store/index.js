import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import category from './category';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    category,
  },
});

export default store;
