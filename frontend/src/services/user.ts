import Api from './api';
const resource = '/users';

export default {
  login(params: any) {
    return Api().post(`${resource}/login`, params);
  },

  signup(params: any) {
    return Api().post(`${resource}/signup`, params);
  }
};
