import { LOGIN, LOGOUT } from './mutation-types';

export default {
  logIn({ commit, rootState }) {
    commit(LOGIN, rootState.auth);
  },
  logOut({ commit, rootState }) {
    commit(LOGOUT, rootState.auth);
  }
};
