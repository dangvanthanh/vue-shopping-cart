import Api from './api';

export default {
  getProducts() {
    return Api().get('/products');
  },

  getProductsById(id) {
    return Api().get(`/products/${id}`);
  },

  getProductsRelatedById(id) {
    return Api().get(`/products/${id}/related`);
  },

  getProductsByPage(page) {
    return Api().get(`/products?page=${page}`);
  }
};
