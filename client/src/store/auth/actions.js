export default {
  getAuthenticated({ commit }, user) {
    commit('AUTHENTICATED', user);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
};
