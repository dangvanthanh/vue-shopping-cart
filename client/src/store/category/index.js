import mutations from './mutations';
import actions from './actions';

const state = {
  categories: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
