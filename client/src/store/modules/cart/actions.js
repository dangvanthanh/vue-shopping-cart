import { getProductById } from '@/utils/utils';
import {
  ADD_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  CHANGE_CART
} from './mutation-types';

export default {
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
