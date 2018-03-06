const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const conf ={
    host: 'http://localhost:8090/api',
    appid: 'wxe31de532ace0ab98',
    secret: 'a975e557797d8bd2b5a8f67059feab7c'
  
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 封装请求
 */
const sendRrquest = (url, data, method)=> {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method ? method :'POST',
      header: { 'content-type': 'application/json' },
      success: resolve,
      fail: reject
    })
  });
  return promise;
};
module.exports = {
  formatTime: formatTime,
  post: sendRrquest,
  conf: conf
}
