// pages/home/home.js
const app = getApp()
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
        icon: 'icon-lianxi font-blue'
      }, {
        text: '章节智能练习',
        icon: 'icon-zhinenghua font-orange',
        color: ''
      }, {
        text: '真题模考',
        icon: 'icon-lunwentimu font-yellow',
        color: ''
      }, {
        text: '巩固模考',
        icon: 'icon-gonggujieguo font-violet',
        color: ''
      }, {
        text: '错题练习',
        icon: 'icon-cuotiku font-red',
        color: ''
      }, {
        text: '收藏',
        icon: 'icon-icon- font-cyan',
        color: ''
      }, {
        text: '练习历史',
        icon: 'icon-yuanlishi font-orange-1',
        color: ''
      }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 分享
    onShareAppMessage: ()=> {    
      return {
        title: '自考小程序',
        desc: '最全面的自考小程序!',
        path: '/page/home?id=123'
      }
    },
    // icon点击事件，跳转事件
    jump: (event)=> {
      let linklist = ['./sub/practice/practice', './sub/practice/practice', './sub/practice/practice', './sub/practice/practice', './sub/practice/practice', './sub/practice/practice', './sub/practice/practice', './sub/subjectlist/subjectlist'];
      console.log(event.currentTarget.id);
      console.log(linklist[event.currentTarget.id]);
      wx.navigateTo({
        url:linklist[event.currentTarget.id]
      })
    },
    onLoad:()=>{
      console.log(app);
    },
  },
})
