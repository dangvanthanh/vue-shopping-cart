export default {
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product);
  },
  removeAllCarts({commit}) {
    commit('REMOVE_ALL_CARTS');
  }
};
