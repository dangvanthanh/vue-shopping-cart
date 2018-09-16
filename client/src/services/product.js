import Api from './api';

export default {
  getProducts() {
    return Api().get('/products');
  },

  getProductsByPage(page) {
    return Api().get(`/products?page=${page}`);
  }
};
