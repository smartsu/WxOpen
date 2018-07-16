//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner:{
      src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531131892534&di=3791e2126a97f6c7a90aa3efc33654eb&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d6435830609da8012060c887fe67.jpg%401280w_1l_2o_100sh.jpg"
    },
    hotType:[
      {
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531131959475&di=4af981d57ad63d4787edac1b200e1d6c&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fallimg%2F20140703%2F1404347706101073.jpg",
      text:"啤酒"},
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531121916&di=bb135ec14dd8262001fbd202154cddd4&src=http://www.uimaker.com/uploads/allimg/140507/1_140507093853_3.gif",
        text: "饮料"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531132073842&di=6c153bbf4206cbf36c69e313864e6341&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F08%2F04%2FChMkJleF7WiIExOvABOYEec0dF4AATeTwHrcEQAE5gp558.jpg",
        text: "小吃"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122107&di=629e14d11bbdcdebc3972eaa59f7afb1&src=http://bizhi.cnanzhi.com/upload/bizhi/2014/1204/14176810437929.jpg",
        text: "白酒"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122138&di=926866160ed3dedc2eb48ee7a03145a0&src=http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1306/24/c0/22492875_1372047902462.jpg",
        text: "牛奶"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122173&di=9cae3330798c3914aa593f60bf54d6dd&src=http://www.th7.cn/d/file/p/2015/03/28/96e936c9fe94ce2501d75112187709b6.gif",
        text: "日化"
      },
    ],
    hotProduct: [
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531131959475&di=4af981d57ad63d4787edac1b200e1d6c&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fallimg%2F20140703%2F1404347706101073.jpg",
        name: "啤酒",
        price:15.8
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531121916&di=bb135ec14dd8262001fbd202154cddd4&src=http://www.uimaker.com/uploads/allimg/140507/1_140507093853_3.gif",
        name: "饮料",
        price: 15.8
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531132073842&di=6c153bbf4206cbf36c69e313864e6341&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F08%2F04%2FChMkJleF7WiIExOvABOYEec0dF4AATeTwHrcEQAE5gp558.jpg",
        name: "小吃",
        price: 15.8
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122107&di=629e14d11bbdcdebc3972eaa59f7afb1&src=http://bizhi.cnanzhi.com/upload/bizhi/2014/1204/14176810437929.jpg",
        name: "白酒",
        price: 15.8
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122138&di=926866160ed3dedc2eb48ee7a03145a0&src=http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1306/24/c0/22492875_1372047902462.jpg",
        name: "牛奶",
        price: 15.8
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1531122173&di=9cae3330798c3914aa593f60bf54d6dd&src=http://www.th7.cn/d/file/p/2015/03/28/96e936c9fe94ce2501d75112187709b6.gif",
        name: "日化",
        price: 15.8
      },
    ],
    zoneTitle:"热销专区",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
