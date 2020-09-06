export default {
  getCategories({ commit }, categories) {
    commit('SET_CATEGORIES', categories);
  }
}
