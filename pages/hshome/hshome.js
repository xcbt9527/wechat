// pages/hshome/hshome.js
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
        id: 1, url:
        '../../images/demo/l1.png'
      }, {
        id: 2, url:
        '../../images/demo/l2.png'
      },
    ],
    newtheme: [{
      id: 2, url:
      '../../images/demo/l1.png',
      title:'简约风·纯色爱恋'
    }, {
      id: 2, url:
      '../../images/demo/l2.png',
      title:'简约风·纯色爱恋2'
    }, {
      id: 2, url:
      '../../images/demo/l1.png',
      title: '简约风·纯色爱恋1'
    }, {
      id: 2, url:
      '../../images/demo/l2.png',
      title: '简约风·纯色爱恋2'
    }],
    share:'../../images/icon/share.png',
    ificationclass:1,
    ification: [{ id: 1, text: '婚纱作品' }, { id: 2, text: '写真作品' }, { id: 3, text: '全球旅拍' }, { id: 4, text: '客片欣赏' }, { id: 5, text: '最新作品' }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickswiper(event){
      console.log(event.target.dataset.postid);
    },
    changeclass(e){
      this.setData({
        ificationclass: e.target.dataset.postid
      });
    }
  }
})
