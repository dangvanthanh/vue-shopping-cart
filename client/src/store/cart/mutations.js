export default {
  ADD_TO_CART(state, product) {
    const cart = state.carts.find((cart) => cart.id === product.id);

    if (cart) {
      cart.quantity += 1;
    } else {
      state.carts.push(
        Object.assign(product, {
          quantity: 1,
        })
      );
    }
  },
  DECREMENT_PRODUCT(state, id) {
    state.carts = state.carts.map((cart) => {
      if (cart.id === id) {
        if (cart.quantity) {
          cart.quantity -= 1;
        } else {
          cart.quantity = 0;
        }
      }

      return cart;
    });
  },
  INCREMENT_PRODUCT(state, id) {
    state.carts = state.carts.map((cart) => {
      if (cart.id === id) {
        cart.quantity += 1;
      }

      return cart;
    });
  },
};
