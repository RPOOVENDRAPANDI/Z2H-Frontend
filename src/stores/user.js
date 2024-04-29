import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    userInfo: undefined,
  }),
  getters: {},
  actions: {
    userLoginWithPassword(payload) {
      let url = '/api/z2h/user/login/';
      return api.post(url, payload)
    },

    getUserInfo() {
      let url = '/api/z2h/user/info/';
      return api.get(url).then(res => {
        this.userInfo = res.data.user_info;
      })
    }
  },
});
