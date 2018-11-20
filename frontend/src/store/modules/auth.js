import UserService from '@/services/user';

export default {
  state: {
    loggedIn: localStorage.getItem('loggedIn') || false,
  },

  getters: {
    isAuthenticated: state => state.loggedIn,
  },

  mutations: {
    LOGIN: state => {
      state.loggedIn = true;
    },

    LOGOUT: state => {
      state.loggedIn = false;
    },
  },

  actions: {
    logIn({ commit }, body) {
      return new Promise((resolve, reject) => {
        UserService.login(body)
          .then(res => {
            if (res.data.success) {
              localStorage.setItem('loggedIn', true);
              commit('LOGIN');
            }

            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logOut({ commit }) {
      commit('LOGOUT');
    },
  },
};
