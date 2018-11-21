import Api from './api';

const resource = '/categories';
export default {
  getCategories(params = {}) {
    return Api().get(`${resource}`, { params: params });
  },

  getCategoriesByTitle(category) {
    return Api().get(`${resource}/${category}`);
  },

  getCategoriesByPage(category, page) {
    return Api().get(`${resource}/${category}?page=${page}`);
  }
};
