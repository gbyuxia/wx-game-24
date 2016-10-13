
var app = getApp()
Page({
  data: {
    specification: '玩法说明：\n 进入游戏后，点击数字及运算符得出结果；前几步计算出的结果同样可以点击进行下一步运算。将给出的牌数用尽并得出24即为胜出。',
    userInfo: {}
  },
   //计算页
    gotoCount() {     
        wx.navigateTo({ url: '../count/count'});
    } ,
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
