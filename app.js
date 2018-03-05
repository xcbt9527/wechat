//app.js
var utils = require("./utils/util.js");
var wxrequet = require("./utils/wxrequet.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    console.log(wxrequet);
    wxrequet.getSetting(this.globalData.conf.appid, this.globalData.conf.secret).then(res=>{
      this.globalData.userInfo = res.userInfo;
      /**
       * 回调用户初始化
       */
      if (this.userInfoReadyCallback) {
        this.userInfoReadyCallback(res)
      }
    })
  },
  globalData: {
    userInfo: null,
    conf:{
      host:'http://localhost:8090/api',
      appid:'wxe31de532ace0ab98',
      secret:'a975e557797d8bd2b5a8f67059feab7c'
    }
  }
})