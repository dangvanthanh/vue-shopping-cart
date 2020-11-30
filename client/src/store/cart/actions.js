export default {
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product)
  },
  decProductToCart({ commit }, productId) {
    commit('DEC_PRODUCT_TO_CART', productId)
  },
  incProductToCart({ commit }, productId) {
    commit('INC_PRODUCT_TO_CART', productId)
  },
  removeAllCarts({ commit }) {
    commit('REMOVE_ALL_CARTS')
  },
}
