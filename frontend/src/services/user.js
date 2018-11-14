import Api from './api';

const resource = '/users';
export default {
  login(params) {
    return Api().post(`${resource}/login`, params);
  },

  signup(params) {
    return Api().post(`${resource}/signup`, params);
  }
};
