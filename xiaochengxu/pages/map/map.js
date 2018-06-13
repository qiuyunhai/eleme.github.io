//logs.js

Page({
  data: {
    height:"height:500rpx",
    latitude: 27.82681,
    longitude: 113.08231,
    markers: [{
      latitude: 27.814820,
      longitude: 113.07960,
      name: '高科智商科技大厦'
    }],
    controls: [{
      id: 1,
      iconPath: '/pages/img/location.png',
      position: {
        left: 320,
        bottom: 100 - 50,
        width: 45,
        height: 45
      },
      clickable: true
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    var that=this;
    console.log(that.data.markers[0]['latitude'])
    wx.getLocation({
      type:'gcj02',
      success: function (res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        }, function () {
          
        })
      },
    }) 
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        //设置map高度，根据当前设备宽高满屏显示
        that.setData({
          Height: res.windowHeight,
          controls: [{
            id: 1,
            iconPath: '/pages/img/location.png',
            position: {
              left: res.windowWidth-75,
              top: res.windowHeight - 75,
              width: 45,
              height: 45
            },
            clickable: true
          }]
        })
      }
    })
  },
  controltap:function(e){
    this.mapCtx.moveToLocation()
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }
})
