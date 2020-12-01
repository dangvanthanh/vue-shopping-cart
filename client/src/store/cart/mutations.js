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
    const carts = [...state.carts]
    const index = carts.findIndex((cart) => cart.id === productId)

    if (index !== -1) {
      carts[index].quantity++
    }

    state.carts = [...carts]

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  DEC_PRODUCT_TO_CART(state, productId) {
    const carts = [...state.carts]
    const index = carts.findIndex((cart) => cart.id === productId)

    if (index !== -1) {
      const item = carts[index]
      if (item.quantity === 1) {
        carts.splice(index, 1)
      } else {
        carts[index].quantity--
      }
    }

    state.carts = [...carts]

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  REMOVE_ALL_CARTS(state) {
    localStorage.removeItem('carts')
    state.carts = []
  },
}
