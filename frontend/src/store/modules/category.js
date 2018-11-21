import CategoryService from '@/services/category';

export default {
  state: {
    categories: []
  },
  mutations: {
    GET_ALL_CATEGORIES: (state, categories) => {
      state.categories = categories;
    }
  },
  actions: {
    getAllCategories({ commit }) {
      CategoryService.getCategories().then(res => {
        const { data } = res;
        commit('GET_ALL_CATEGORIES', data.categories);
      });
    }
  }
};
