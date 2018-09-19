import { getProductById } from '@/utils/utils';

export default {
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  getters: {
    getCart: state => state.cart,
    getCartTotal: state => {
      let total = 0;
      state.cart.map(item => {
        total += item.subtotal;
      });
      return total;
    }
  },
  mutations: {
    addCart: (state, payload) => {
      state.cart.push(payload);
    },
    incrementCart: (state, payload) => {
      let item = getProductById(state.cart, payload.id);
      item.qty++;
      item.subtotal = item.price * item.qty;
    },
    decrementCart: (state, payload) => {
      let item = getProductById(state.cart, payload.id);
      item.qty--;
      item.subtotal = item.price * item.qty;
    }
  },
  actions: {
    addCart({ state, getters, commit, rootState }, product) {
      commit('addCart', product);
    },
    incrementCart({ state, getters, commit, rootState }, product) {
      commit('incrementCart', product);
    },
    decrementCart({ state, getters, commit, rootState }, product) {
      commit('decrementCart', product);
    }
  }
};
