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
    arr: [
      {
        text: '考点智能练习',
        img: '/images/icon/home.png'
      }, {
        text: '章节智能练习',
        img: '/images/icon/home.png'
      }, {
        text: '真题模考',
        img: '/images/icon/home.png'
      }, {
        text: '巩固模考',
        img: '/images/icon/home.png'
      }, {
        text: '错题练习',
        img: '/images/icon/home.png'
      }, {
        text: '收藏',
        img: '/images/icon/home.png'
      }, {
        text: '练习历史',
        img: '/images/icon/home.png'
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
