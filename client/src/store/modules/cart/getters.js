export default {
  getCart: state => state.cart,
  getCartTotal: state => {
    let total = 0;
    state.cart.map(item => {
      total += item.subtotal;
    });
    return total;
  }
};
