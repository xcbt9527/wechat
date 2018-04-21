// pages/my/my.js
const app = getApp()
var wxrequet = require("../../utils/wxrequet.js");
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    bgimg: '../../images/demo/headerbg.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function () {
    // 获取用户信息
    wxrequet.getSetting().then(res => {
      console.log(res);
      this.globalData.userInfo = res.userInfo;
      this.setData({
        userInfo: res.userInfo,
        userInfo: res.userInfo,
        hasUserInfo: true
      })
      /**
       * 回调用户初始化
       */
      if (this.userInfoReadyCallback) {
        this.userInfoReadyCallback(res)
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
   
  }
})
