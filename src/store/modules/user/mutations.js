import { LOGIN, LOGOUT, SET_USERINFO } from "./mutation-types";
export default {
  [LOGIN](state, v) {
    state.$globalData.$userinfo = v;
    state.$globalData.$hasLogin = true;
  },
  [LOGOUT](state) {
    const $userinfo = {
      userName: "",
      url: "",
      access: "nomal"
    };
    state.$globalData = {
      $userinfo: {
        ...$userinfo
      },
      $hasLogin: false
    };
  },
  [SET_USERINFO](state, data) {
    state.$globalData.$userinfo = data;
  }
};
