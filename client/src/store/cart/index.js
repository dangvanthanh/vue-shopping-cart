import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
  tax: 10
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
