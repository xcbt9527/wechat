// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
        link: '/pages/logs/logs',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
        link: '/pages/test/test',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {}  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShareAppMessage: function () {
      return {
        title: '自考小程序',
        desc: '最全面的自考小程序!',
        path: '/page/home?id=123'
      }
    }
  },
  onLoad:()=>{
    console.log(1);
  },
})
