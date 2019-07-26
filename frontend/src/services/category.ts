import Api from './api';
const resource = '/categories';

export default {
  getCategories(params = {}) {
    return Api().get(`${resource}`, { params: params });
  },

  getCategoriesByTitle(category: any) {
    return Api().get(`${resource}/${category}`);
  },

  getCategoriesByPage(category: any, page: any) {
    return Api().get(`${resource}/${category}?page=${page}`);
  }
};
