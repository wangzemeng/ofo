// pages/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */

  data: {

  },
  charge: function (e) {
    if (this.data.value < 0 || isNaN(this.data.value))    {
      wx.showModal({
        title: '警告',
        content: '请输入正确的金额',
      })
    } else {
      wx.getStorage({
        key: 'money',
        success: (res)=>{
          wx.setStorage({
            key: 'money',
            data: parseInt(this.data.value)+res.data
          })
          wx.redirectTo({
            url: '../wallet/wallet',
          })
        },
        fail: (res)=>{
          wx.setStorage({
            key: 'money',
            data: parseInt(this.data.value)
          })
          wx.redirectTo({
            url: '../wallet/wallet',
          })
        }
      })
      wx.setStorage({
        key: 'money',
        data: parseInt(this.data.value)
      })
    }
  },
  input: function (e) {
    this.data.value = e.detail.value

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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