export default {
  AUTHENTICATED(state, user) {
    state.authenticated = true;
    state.user = user;
  },
  LOGOUT(state) {
    state.authenticated = false;
    state.user = null;
  },
};
