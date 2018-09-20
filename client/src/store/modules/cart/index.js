import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
};

export default {
  state,
  getters,
  mutations,
  actions
};
