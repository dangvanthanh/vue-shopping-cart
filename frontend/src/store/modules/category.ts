export default {
  state: {
    categories: []
  },
  mutations: {
    GET_ALL_CATEGORIES: (state: any, categories: any) => {
      state.categories = categories;
    }
  },
  actions: {
    getAllCategories({ commit }: any, categories: any) {
      commit('GET_ALL_CATEGORIES', categories);
    }
  }
};
