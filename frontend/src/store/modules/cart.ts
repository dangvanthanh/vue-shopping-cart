import { getProductById } from '@/utils/utils';

export default {
  state: {
    cart: [] //JSON.parse(localStorage.getItem('cart')) || [],
  },

  getters: {
    getCart: (state: any) => state.cart,
    getCartTotal: (state: any) => {
      let total = 0;
      state.cart.map((item: any) => {
        total += item.subtotal;
      });
      return total;
    }
  },

  mutations: {
    ADD_CART: (state: any, payload: any) => {
      state.cart.push(payload);
    },
    INCREMENT_CART: (state: any, payload: any) => {
      payload.qty++;
      payload.subtotal = payload.price * payload.qty;
    },
    DECREMENT_CART: (state: any, payload: any) => {
      payload.qty--;
      payload.subtotal = payload.price * payload.qty;
    },
    CHANGE_CART: (state: any, payload: any) => {
      payload.subtotal = payload.price * payload.qty;
    }
  },

  actions: {
    addCart({ commit }: any, product: any) {
      commit('ADD_CART', product);
    },
    incrementCart({ state, commit }: any, product: any) {
      const item = getProductById(state.cart, product.id);
      commit('INCREMENT_CART', item);
    },
    decrementCart({ state, commit }: any, product: any) {
      const item = getProductById(state.cart, product.id);
      commit('DECREMENT_CART', item);
    },
    changeCart({ state, commit }: any, product: any) {
      const item = getProductById(state.cart, product.id);
      commit('CHANGE_CART', item);
    }
  }
};
