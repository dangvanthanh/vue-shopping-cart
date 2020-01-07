export default {
  state: {
    categories: []
  },
  mutations: {
    GET_ALL_CATEGORIES: (state: any, categories: any) => {
      console.log(categories)
      state.categories = categories;
    }
  },
  actions: {
    getAllCategories({ commit }: any, categories: any) {
      debugger
      commit('GET_ALL_CATEGORIES', categories);
    }
  }
};
