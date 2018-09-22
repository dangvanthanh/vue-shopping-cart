import Api from './api';

export default {
  login() {
    return Api().post(`/users/login`);
  },

  signup(params) {
    return Api().post(`/users/signup`, params);
  }
};
