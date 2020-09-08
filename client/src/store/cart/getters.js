export default {
  totalCart: (state) => state.carts.length,
  totalAmount: (state) =>
    state.carts.reduce(
      (currentAmount, cart) => currentAmount + cart.quantity * cart.price,
      0
    ),
};
