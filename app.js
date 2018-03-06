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
    wxrequet.getSetting().then(res=>{
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
  }
})