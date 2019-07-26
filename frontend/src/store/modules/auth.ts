import UserService from '@/services/user';

export default {
  state: {
    loggedIn: localStorage.getItem('loggedIn') || false
  },

  getters: {
    isAuthenticated: (state: any) => state.loggedIn
  },

  mutations: {
    LOGIN: (state: any) => {
      state.loggedIn = true;
    },

    LOGOUT: (state: any) => {
      state.loggedIn = false;
    }
  },

  actions: {
    logIn({ commit }: any, body: any) {
      return new Promise((resolve, reject) => {
        UserService.login(body)
          .then((res: any) => {
            if (res.data.success) {
              localStorage.setItem('loggedIn', 'true');
              commit('LOGIN');
            }

            resolve(res.data);
          })
          .catch((err: Error) => {
            reject(err);
          });
      });
    },
    logOut({ commit }: any) {
      commit('LOGOUT');
    }
  }
};
