
var app = getApp()
Page({
  data: {
    specification: '玩法说明：\n 进入游戏后，点击数字及运算符得出结果；前几步计算出的结果同样可以点击进行下一步运算。将给出的牌数用尽并得出24即为胜出。',
    userInfo: {},
    gradeArr:[{name: '简单', value: '容易', checked: 'true'},{name: '中等', value: '中等'},{name: '难', value: '难'}],
    grade:'简单'
  },
  radioChange: function(e) {
      // console.log('radio发生change事件，携带value值为：', e.detail.value)
       this.setData({
         grade:e.detail.value
       })
    },
   //计算页
    gotoCount() {     
        wx.navigateTo({ url: '../count/count?grade='+this.data.grade});
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
