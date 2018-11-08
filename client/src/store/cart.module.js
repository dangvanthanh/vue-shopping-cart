import { getProductById } from '@/utils/utils';
import { ADD_CART, INCREMENT_CART, DECREMENT_CART, CHANGE_CART } from './types';

const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
};

const getters = {
  getCart: state => state.cart,
  getCartTotal: state => {
    let total = 0;
    state.cart.map(item => {
      total += item.subtotal;
    });
    return total;
  }
};

const mutations = {
  [ADD_CART](state, payload) {
    state.cart.push(payload);
  },
  [INCREMENT_CART](state, payload) {
    payload.qty++;
    payload.subtotal = payload.price * payload.qty;
  },
  [DECREMENT_CART](state, payload) {
    payload.qty--;
    payload.subtotal = payload.price * payload.qty;
  },
  [CHANGE_CART](state, payload) {
    payload.subtotal = payload.price * payload.qty;
  }
};

const actions = {
  addCart({ commit }, product) {
    commit(ADD_CART, product);
  },
  incrementCart({ state, commit }, product) {
    let item = getProductById(state.cart, product.id);
    commit(INCREMENT_CART, item);
  },
  decrementCart({ state, commit }, product) {
    let item = getProductById(state.cart, product.id);
    commit(DECREMENT_CART, item);
  },
  changeCart({ state, commit }, product) {
    let item = getProductById(state.cart, product.id);
    commit(CHANGE_CART, item);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
