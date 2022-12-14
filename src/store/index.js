import { defineStore } from 'pinia'

import localCache from '@/utils/cache'

export const useStore = defineStore('store', {
  state: () => ({
    phoneReg:
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/,
    identityReg:
      /(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
  }),
  actions: {
    login() {
      if (!localCache.getCache('code')) {
        // window.location.href =
        //   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf07fe334d165709e&redirect_uri=www&response=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      }
    }
  }
})
