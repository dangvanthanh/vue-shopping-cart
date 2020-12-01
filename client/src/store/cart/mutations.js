export default {
  ADD_PRODUCT_TO_CART(state, product) {
    const carts = [...state.carts]
    const cartIndex = carts.findIndex((cart) => cart.id === product.id)

    if (cartIndex !== -1) {
      carts[cartIndex].quantity++
    } else {
      carts.push({ ...product, quantity: 1 })
    }

    state.carts = [...carts]

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },

  REMOVE_PRODUCT_FROM_CART(state, product) {
    const carts = [...state.carts]
    const cartIndex = carts.findIndex((cart) => cart.id === product.id)

    if (cartIndex !== -1) {
      const item = carts[cartIndex]

      if (item.quantity === 1) {
        carts.splice(cartIndex, 1)
      } else {
        carts[cartIndex].quantity--
      }
    }

    state.carts = [...carts]

    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
}
