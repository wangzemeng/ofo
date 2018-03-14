// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second : 8
  },
  movetoIndex : function (){
    wx.redirectTo({
      url: '../index/index',
    })
    clearInterval(this.timer)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      pass : options.pass
    })
    var time = 8;
    
    this.timer = setInterval(()=>{
      time--;
      this.setData({
        second : time
      })
      if(time == 1){
        clearInterval(this.timer);
        wx.redirectTo({
          url: `../billing/billing?num=${options.num}`,
        })
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})