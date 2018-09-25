import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  loggedIn: localStorage.getItem('loggedIn') || false
};

export default {
  getters,
  state,
  mutations,
  actions
};
