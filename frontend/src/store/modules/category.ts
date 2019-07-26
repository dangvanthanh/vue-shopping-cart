import CategoryService from '@/services/category';

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
    getAllCategories({ commit }: any) {
      CategoryService.getCategories().then(res => {
        const { data } = res;
        commit('GET_ALL_CATEGORIES', data.categories);
      });
    }
  }
};
