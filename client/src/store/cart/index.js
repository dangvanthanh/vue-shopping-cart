import mutations from './mutations';
import actions from './actions';

const state = {
  carts: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
