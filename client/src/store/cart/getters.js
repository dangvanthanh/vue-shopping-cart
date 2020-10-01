export default {
  totalCart: (state) => state.carts.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0),
  totalAmount: (state) =>
    state.carts.reduce(
      (currentAmount, cart) => currentAmount + cart.quantity * cart.price,
      0
    ),
};
