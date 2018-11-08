import Api from './api';

const resource = '/categories';
export default {
  getCategories() {
    return Api().get(`${resource}`);
  },

  getCategoriesByTitle(category) {
    return Api().get(`${resource}/${category}`);
  },

  getCategoriesByPage(category, page) {
    return Api().get(`${resource}/${category}?page=${page}`);
  }
};
