//app.js
var utils = require("./utils/util.js");
var wxrequet = require("./utils/wxrequet.js");
App({
    onLaunch: function () {
        if (!this.globalData.userInfo) {
            wx.getUserInfo({
                success: res = > {
                this.globalData.userInfo = res.userInfo;
        }
        })
        }
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        // 获取用户信息
        wxrequet.getSetting().then(res = > {
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