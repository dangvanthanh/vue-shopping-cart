export default {
  ADD_PRODUCT_TO_CART(state, product) {
    const cart = state.carts.find((cart) => cart.id === product.id)

    if (cart) {
      cart.quantity += 1
    } else {
      state.carts.push(
        Object.assign(product, {
          quantity: 1,
        })
      )
    }

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  INC_PRODUCT_TO_CART(state, productId) {
    state.carts.map((cart) => {
      if (cart.id === productId) {
        cart.quantity += 1
      }

      return cart
    })

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  DEC_PRODUCT_TO_CART(state, productId) {
    state.carts.map((cart) => {
      if (cart.id === productId) {
        cart.quantity -= 1
      }

      if (cart.quantity < 0) {
        cart.quantity = 0;
      }

      return cart
    })

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  REMOVE_ALL_CARTS(state) {
    localStorage.removeItem('carts')
    state.carts = []
  },
}
