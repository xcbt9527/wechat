
var utils = require("./util.js");
/**
 * 登陆接口
 * appid:小程序id
 * secret:小程序唯一标示
 * js_code 人的唯一标示
 */
const login = (js_code)=>{
  let _this = this;

  let promise = new Promise(function (resolve, reject) {
    console.log(utils.conf);
    utils.post('https://api.weixin.qq.com/sns/jscode2session', { appid: utils.conf.appid, secret: utils.conf.secret, js_code: js_code, grant_type: 'authorization_code', }, 'GET').then(res => {
    resolve(res);
  })

  })
  return promise;
}
const getSetting = ()=>{

  let promise = new Promise(function (resolve, reject) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              wx.checkSession({
                success: function () {
                  resolve(res)
                  //session 未过期，并且在本生命周期一直有效
                },
                fail: function () {
                  //登录态过期
                  resolve();
                  // 登录
                  wx.login({
                    success: res => {
                      login(res.code).then(ret => {
                        console.log(ret);
                        //登陆暂未确认
                      })
                    }
                  })
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