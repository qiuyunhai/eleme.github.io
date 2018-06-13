//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    
  },
  toLocation:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  totel: function () {
    wx.makePhoneCall({
      phoneNumber: '18974181780' //仅为示例，并非真实的电话号码
    })
  },
  previewImage:function(event){
    console.log(event.target);
    var url = 'https://qiuyunhai.github.io/eleme.github.io/static/other/data.json'
    wx.request({
      url: 'https://qiuyunhai.github.io/eleme.github.io/static/other/data.json',
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523512325861&di=f78885db17dd55fd709023e76522610a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1511%2Fapic24063_sc115.com.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523512376991&di=2f1336b60ae31195bf90ea9c970d28e0&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2017%2F0313%2F25%2F2.jpg%2521960.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523513078466&di=6c3667db4e80f3820f9b4e13468d74d7&imgtype=0&src=http%3A%2F%2Fppt.downhot.com%2Fd%2Ffile%2Fp%2F2013%2F10%2F28%2F511413511a314b5308e62a79942600b7.jpg'] // 需要预览的图片http链接列表
    });
  }
})
