import Api from './api';
const resource = '/products';

export default {
  getProducts(params = {}) {
    return Api().get(`${resource}`, { params: params });
  },

  getProductsById(id: any) {
    return Api().get(`${resource}/${id}`);
  },

  getProductsRelatedById(id: any) {
    return Api().get(`${resource}/${id}/related`);
  },

  getProductsByPage(page: any) {
    return Api().get(`${resource}?page=${page}`);
  }
};
