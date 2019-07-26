import axios from 'axios';
import NProgress from 'nprogress';

export default () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND
  });

  instance.interceptors.request.use(
    (config: any) => {
      NProgress.start();
      return config;
    },
    (error: any) => {
      NProgress.done();
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use((response: any) => {
    NProgress.done();
    return response;
  });

  return instance;
};
