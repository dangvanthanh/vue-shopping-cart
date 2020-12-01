export default {
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product)
  },
  removeProductFromCart({ commit }, productId) {
    commit('REMOVE_PRODUCT_FROM_CART', productId)
  },
}
