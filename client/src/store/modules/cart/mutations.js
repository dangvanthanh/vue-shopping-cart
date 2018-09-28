import {
  ADD_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  CHANGE_CART
} from './mutation-types';

export default {
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
