import { LOGIN, LOGOUT } from './mutation-types';

export default {
  [LOGIN](state, payload) {
    payload.loggedIn = true;
  },

  [LOGOUT](state, payload) {
    payload.loggedIn = false;
  }
};
