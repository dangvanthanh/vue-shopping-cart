import Api from './api';

const resource = '/products';
export default {
  getProducts() {
    return Api().get(`${resource}`);
  },

  getProductsById(id) {
    return Api().get(`${resource}/${id}`);
  },

  getProductsRelatedById(id) {
    return Api().get(`${resource}/${id}/related`);
  },

  getProductsByPage(page) {
    return Api().get(`${resource}?page=${page}`);
  }
};
