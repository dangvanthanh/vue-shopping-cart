export default {
  totalCart: (state) => state.carts.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0),
  totalAmount: (state) => state.carts.reduce((currentAmount, cart) => currentAmount + cart.quantity * cart.price, 0),
  totalTax: (state, getters) => (getters.totalAmount * state.tax) / 100,
  totalGrand: (state, getters) => getters.totalAmount + getters.totalTax,
}
