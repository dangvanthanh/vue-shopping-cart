import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  authenticated: !!localStorage.getItem('cookieFallback'),
  user: null
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
