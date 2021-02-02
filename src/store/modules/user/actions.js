export default {
  handleLogin({ commit }, { loginName, password }) {
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  },
  handleLogOut({ state, commit }) {
    return new Promise((resolve, reject) => {});
  },
  getUserInfo({ state, commit }) {
    return new Promise((resolve, reject) => {});
  }
};
