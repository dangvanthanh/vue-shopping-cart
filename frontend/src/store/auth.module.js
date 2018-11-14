import { LOGIN, LOGOUT } from './types';

const state = {
  loggedIn: localStorage.getItem('loggedIn') || false
};

const getters = {
  getLoggedIn: state => state.loggedIn
};

const mutations = {
  [LOGIN](state, payload) {
    payload.loggedIn = true;
  },

  [LOGOUT](state, payload) {
    payload.loggedIn = false;
  }
};

const actions = {
  logIn({ commit, rootState }) {
    commit(LOGIN, rootState.auth);
  },
  logOut({ commit, rootState }) {
    commit(LOGOUT, rootState.auth);
  }
};

export default {
  getters,
  state,
  mutations,
  actions
};
