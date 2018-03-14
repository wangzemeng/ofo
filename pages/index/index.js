Page({
  data: {
    longitude: "126.5358",
    latitude: "45.80216",
  },
  bindcontrol: function (e) {
    switch (e.controlId) {
      case 1:
        this.moveTocenter();
        break;
      case 2:
        if (this.flag) {
          wx.navigateBack({
            delta: 1
          })
        } else {
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5a6456a9dd3c7576ba67cefc/test123/ofo#!method=get",
                success: (res) => {
                  wx.redirectTo({
                    url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`,
                  })
                }
              })
            }
          })
        }
        break;
        case 3:
        wx.redirectTo({
          url: '../warn/warn',
        })
    }
  },
  onLoad: function (options) {
    this.flag = options.flag;
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            position: {
              width: 50,
              height: 50,
              left: 20,
              top: res.windowHeight - 100,
            },
            iconPath: "/images/location.png",
            clickable: true
          }, {
            id: 2,
            position: {
              width: 90,
              height: 90,
              left: res.windowWidth / 2 - 45,
              top: res.windowHeight - 140,
            },
            iconPath: "/images/use.png",
            clickable: true
          }, {
            id: 3,
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 100,
            },
            iconPath: "/images/warn.png",
            clickable: true
          }, {
            id: 4,
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 170,
            },
            iconPath: "/images/avatar.png",
            clickable: true
          }, {
            id: 5,
            position: {
              width: 34,
              height: 50,
              left: res.windowWidth / 2 - 17,
              top: res.windowHeight / 2 - 50,
            },
            iconPath: "/images/marker.png",
            clickable: true
          }]
        })
      },
    })
  },
  onReady: function () {
    console.log("onReady");
    this.moveTocenter();
  },
  onShow: function () {
    this.mapContext = wx.createMapContext("mapId", this)
  },
  moveTocenter: function () {
    this.mapContext.moveToLocation();
  },
  onUnload: function () {
    console.log("onUnload");
  },
  onHide: function () {
    console.log("onHide");
  },


})