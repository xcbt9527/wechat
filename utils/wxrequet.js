
var utils = require("./util.js");
const login = (appid, secret, js_code)=>{
  let _this = this;

  let promise = new Promise(function (resolve, reject) {
    
  utils.post('https://api.weixin.qq.com/sns/jscode2session', { appid: appid, secret: secret, js_code: js_code, grant_type: 'authorization_code', }, 'GET').then(res => {
    resolve(res);
  })

  })
  return promise;
}
const getSetting = (appid, secret,)=>{

  let promise = new Promise(function (resolve, reject) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              resolve(res)
              // 登录
              wx.login({
                success: res => {
                  login(appid,secret, res.code).then(ret => {
                    console.log(ret);
                  })
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                }
              })
            }
          })
        }
      }
    })
  })
  return promise;
}
module.exports = {
  login: login,
  getSetting: getSetting
}