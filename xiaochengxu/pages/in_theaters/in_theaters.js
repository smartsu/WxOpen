const url ='https://www.smartsu.net/api/mms/mysql'
//https://douban.uieee.com/v2/movie/in_theaters
Page({
  data: {
    filmlist: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    var that = this;
    wx.request({
      url: url,
      method: 'GET',      
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        "content-type": "json"       
      },
      success: function (res) {       
        console.log(res.data.rows)
        that.setData({
          filmlist: res.data.rows
        })
                
    }
    })   
   
 
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  viewDetail: function(e) {
    var film = e.currentTarget;
    wx.navigateTo({
      url: '../detail/detail?id=' + film.id
    })
  }
})