import Api from './api';

export default {
  getProducts() {
    return Api().get('/products');
  },

  getProductsById(id) {
    return Api().get(`/products/${id}`);
  },

  getProductsByPage(page) {
    return Api().get(`/products?page=${page}`);
  }
};
