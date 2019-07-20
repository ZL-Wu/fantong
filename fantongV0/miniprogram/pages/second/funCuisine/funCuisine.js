// pages/secondPages/funCuisine/funCuisine.js
// 拖动图片
var prex = 0;
const app = getApp()
// 菜品素材数据库
var cuisineData = require("/cuisinesData.js").default

// 倒计时
// function countdown(that) {
//   var second = that.data.second
//   if (second == 0) {
//     // var unclear = cuisineData.unReadArr.shift(0)
//     // cuisineData.unclassifiedArr.push(unclear)
//     that.setData({
//       // currentShowId: cuisineData.unReadArr[0],
//       // nextShowId: cuisineData.unReadArr[1],
//       second: 100,
//     });
//     // countdown(this)
//     return;
//   }
//   var time = setTimeout(function () {
//     that.setData({
//       second: second - 0.5
//     });
//     countdown(that);
//   }, 20)
// }


Page({
  data: {
    // 倒计时
    // second: 100,

    // 拖动图片
    currentShowId: cuisineData.unReadArr[0],
    nextShowId: cuisineData.unReadArr[1],
    x: 0,
    y: 0,
    showImg: true,
    dx: 45,

    // 签约flag
    flag: true
  },

  moveimg: function (e) {
    var that = this;
    prex = e.detail.x;
  },

  touchendimg: function (e) {
    console.log(prex);
    var that = this;
    if (prex < -50) {
      // 不喜欢
      this.addDislikeArr(that)
    } else if (prex > 50) {
      // 喜欢
      this.addLikeArr(that);
    } else {
      // 还原
      setTimeout(function () {
        that.setData({
          x: 0,
          y: 0,
        })
      }, 30)
    }
    console.log("剩余菜品：", cuisineData.unReadArr);
    console.log("current Id is： ", this.data.currentShowId);
    console.log("next Id is： ", this.data.nextShowId);
  },

  getFirstElement(arr) {
    // 获取第一个元素，并删除其在原数组的记录
    var res = arr.shift(0);
    if (arr.length === 0) {
      this.endGame()
    }
    return res;
  },

  addDislikeArr(that) {
    // 将图片归入不喜欢组
    var dislike = this.getFirstElement(cuisineData.unReadArr)
    if (dislike !== void 0) {
      cuisineData.dislikeArr.push(dislike)
    }
    console.log("不喜欢菜品：", cuisineData.dislikeArr);
    // 更新当前图片和下一图片
    that.setData({
      x: -340,
      y: 0,
    }, () => {
      this.updateImg(that);
    })
  },

  addLikeArr(that) {
    // 将当前图片归入喜欢组里
    var like = this.getFirstElement(cuisineData.unReadArr)
    if (like !== void 0) {
      cuisineData.likeArr.push(like)
    }
    console.log("喜欢菜品：", cuisineData.likeArr);
    // 更新当前图片和下一图片
    // this.updateImg(that)
    that.setData({
      x: 340,
      y: 0,
    }, () => {
      this.updateImg(that)
    })
  },

  updateImg(that) {
    // this.setData({
    //   second: 100,
    // })
    // countdown(this)
    // 显示下一张图片
    setTimeout(function () {
      that.setData({
        showImg: false,
        currentShowId: cuisineData.unReadArr[0],
        nextShowId: cuisineData.unReadArr[1],
        x: 0,
      }, () => {
        setTimeout(function () {
          that.setData({
            showImg: true,
          })
        })
      })
    }, 100)
  },

  // 按钮
  dislike: function (e) {
    // 不喜欢
    var that = this;
    this.addDislikeArr(that);
  },

  like: function (e) {
    // 喜欢
    var that = this;
    this.addLikeArr(that);
  },


  // 结束
  endGame: function () {
    // console.log("结束了，重新开始吗？????????")
    this.setData ({
      flag: !this.data.flag
    })
    
    cuisineData.unReadArr = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016]
    cuisineData.likeArr = []
    cuisineData.dislikeArr = []
    cuisineData.unclassifiedArr = []
  },

  signConfirm: function(e) {
    wx.navigateTo({
      url: "../personas/personas",
    })
  },

  signCancel: function(e) {
    this.setData ({
      flag: !this.data.flag
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // countdown(this)
    var cuisines = cuisineData.cuisines;
    this.setData({
      cuisines,
    })
  },

  onReady: function (options) {

    // countdown(this)
  }
})