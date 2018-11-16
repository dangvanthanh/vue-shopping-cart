import UserService from '@/services/user';

export default {
  state: {
    loggedIn: localStorage.getItem('loggedIn') || false
  },

  getters: {
    isAuthenticated: state => state.loggedIn
  },

  mutations: {
    LOGIN: (state, payload) => {
      payload.loggedIn = true;
    },

    LOGOUT: (state, payload) => {
      payload.loggedIn = false;
    }
  },

  actions: {
    logIn({ commit, rootState }, body) {
      return new Promise((resolve, reject) => {
        UserService.login(body)
          .then(res => {
            if (res.data.success) {
              localStorage.setItem('loggedIn', true);
              commit('LOGIN', rootState.auth);
            }

            resolve(res.data);
          })
          .catch(() => {
            reject(err);
          });
      });
    },
    logOut({ commit, rootState }) {
      commit('LOGOUT', rootState.auth);
    }
  }
};
