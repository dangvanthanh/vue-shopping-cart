export default {
  ADD_PRODUCT_TO_CART(state, product) {
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

    localStorage.setItem('carts', JSON.stringify(state.carts));
  },

  REMOVE_ALL_CARTS(state) {
    localStorage.removeItem('carts');
    state.carts = [];
  },
};
