const state = {
  categories: [],
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

const actions = {
  getCategories({ commit }, categories) {
    commit('SET_CATEGORIES', categories);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
