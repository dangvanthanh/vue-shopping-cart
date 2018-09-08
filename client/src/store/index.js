import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    charge: {}
  },
  mutations: {
    setCart: (state, payload) => {
      state.cart.push(payload);
    },
    setQuantity: (state, payload) => {
      let item = state.cart.find(product => {
        return product.id === payload.id;
      });
      item.qty = payload.qty;
    },
    setPrice: (state, payload) => {
      let item = state.cart.find(product => {
        return product.id === payload.id;
      });
      item.subtotal = payload.subtotal;
    },
    setCharge: (state, payload) => {
      state.charge = payload;
    }
  },
  getters: {
    getCart: state => state.cart,
    getCharge: state => state.charge
  }
});

export default store;
