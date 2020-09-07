export default {
  addToCart({commit}, product) {
    commit('ADD_TO_CART', product);
  },
  decrementProduct({commit}, id) {
    commit('DECREMENT_PRODUCT', id);
  },
  incrementProduct({commit}, id) {
    commit('INCREMENT_PRODUCT', id);
  }
}
