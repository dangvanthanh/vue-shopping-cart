import Api from './api';

export default {
  getCategories() {
    return Api().get(`/categories`);
  },

  getCategoriesByTitle(category) {
    return Api().get(`/categories/${category}`);
  },

  getCategoriesByPage(category, page) {
    return Api().get(`/categories/${category}?page=${page}`);
  }
};
