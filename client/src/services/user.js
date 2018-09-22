import Api from './api';

export default {
  login(params) {
    return Api().post(`/users/login`, params);
  },

  signup(params) {
    return Api().post(`/users/signup`, params);
  }
};
