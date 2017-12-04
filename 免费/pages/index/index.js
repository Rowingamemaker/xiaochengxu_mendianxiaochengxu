//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    arr: [
      '../img/1.jpg',
      '../img/2.jpg',
      '../img/3.jpg',
      '../img/4.jpg',
      '../img/5.jpg',
      '../img/6.jpg',
      '../img/7.jpg',
      '../img/8.jpg',
      '../img/9.png',
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    var userInfo = this.data.userInfo.avatarUrl
    wx.previewImage({
      urls: [userInfo]

    })
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
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  phone: function () {
    wx.makePhoneCall({
      phoneNumber: '13388726006',
    })
  },
  imgs: function (e) {
    console.log(e.currentTarget.dataset.img)
    var userInfo = e.currentTarget.dataset.img
    wx.previewImage({
      urls: [userInfo]

    })
  },
  map:function(){
    wx.navigateTo({
      url: '../map/map',

    })
  }
})
