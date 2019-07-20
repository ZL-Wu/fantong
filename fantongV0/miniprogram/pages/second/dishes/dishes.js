// pages/second/dishes/dishes.js
import dishes from '../../../data/dishes.js';

Page({

  /**
   * Page initial data
   */
  data: {
    // 筛选器
    categoryOpen: false,
    tasteOpen: false,
    materialsOpen: false,
    categoryName: "",
    tasteName: "",
    materialName: "",
    category_select: "",
    taste_select: "",
    material_select:"",

    // 访问右边的二级分类
    key: 0,
    dishCategories: [
      { id: 0, name: "不限" },
      { id: 1, name: "川菜", sub: ["A", "B"] },
      { id: 2, name: "鲁菜", sub: ["C", "D"] },
      { id: 3, name: "粤菜", sub: ["E", "F"] },
      { id: 4, name: "苏菜", sub: ["G", "H"] },
      { id: 5, name: "闽菜", sub: ["I", "J"] },
      { id: 6, name: "浙菜", sub: ["K", "L"] },
      { id: 7, name: "湘菜", sub: ["M", "N"] },
      { id: 8, name: "徽菜", sub: ["O", "P"] },
      { id: 9, name: "东北菜", sub: ["Q", "R"] },
      { id: 10, name: "西北菜", sub: ["S", "T"] },
    ],

    dishTastes: [
      { id: 1, name: "酸" },
      { id: 2, name: "甜" },
      { id: 3, name: "苦" },
      { id: 4, name: "辣" },
      { id: 5, name: "咸" },
    ],

    dishMaterials: [
      { id: 1, name: "猪肉" },
      { id: 2, name: "牛肉" },
      { id: 3, name: "羊肉" },
      { id: 4, name: "白菜" },
      { id: 5, name: "辣椒" },
      { id: 6, name: "..." },
    ],

    // 菜单列表
    dishes: dishes.dishesData,
    currentDishes: dishes.dishesData.slice(0,10),

    // 购物车动画监听
    // hideCart: false,
    // scrollPosition: 0,
    // timeStart: 0,
  },

  menuClick: function(e) {
    console.log(e.currentTarget)
  },

  labelClick: function(e) {
    console.log(e)
    wx.navigateTo({
      url: "../detail/detail",
    })
  },


  // 筛选器功能
  closeShade: function(e){
    console.log(e)
  },
  
  tapCategoryNav: function (e) {
    this.setData({
      categoryOpen: !this.data.categoryOpen,
      // shadeFlag: false,
      tasteOpen: false,
      materialsOpen: false,
    });
  },

  tapTasteNav: function (e) {
    this.setData({
      tasteOpen: !this.data.tasteOpen,
      // shadeFlag: false,
      categoryOpen: false,
      materialsOpen: false,
    });
  },

  tapMaterialsNav: function (e) {
    this.setData({
      materialsOpen: !this.data.materialsOpen,
      // shadeFlag: false,
      categoryOpen: false,
      tasteOpen: false,
    })
  },

  categoryChoose: function (e) {
    var selectID = e.currentTarget.dataset.item.id;
    this.setData({
      categoryName: e.currentTarget.dataset.item.name,
      key: e.currentTarget.dataset.item.id,
      category_select: selectID,
    })
  },
  categorySubChoose: function (e) {
    var currentName = e.currentTarget.dataset.item;
    this.setData({
      categoryName: currentName,
    });
    this.closeNav();
  },
  tasteChoose: function (e) {
    var selectID = e.currentTarget.dataset.item.id;
    this.setData({
      tasteName: e.currentTarget.dataset.item.name,
      taste_select: selectID,
    });
    // this.closeNav();
  },

  materialChoose: function (e) {
    var selectID = e.currentTarget.dataset.item.id;
    this.setData({
      materialName: e.currentTarget.dataset.item.name,
      material_select: selectID,
    });
    // this.closeNav();
  },

  // 关闭下拉菜单
  closeNav: function(e) {
    this.setData({
      categoryOpen: false,
      tasteOpen: false,
      materialsOpen: false,
      // shadeFlag: true,
    })
  },

  // 购物车功能
  goRiceBucket: function(e) {
    console.log(e);
    wx.navigateTo({
      url: "../myBucket/myBucket",
    })
  },
  addRiceBucket: function(e) {
    // wx.setStorageSync('cart', "demo")
    
    console.log(e)

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(this.data.dishes)
    console.log(this.selectComponent("#allShow"))
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    wx.navigateTo({
      url: "../funCuisine/funCuisine",
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.loadMore(this.data.currentDishes)
  },

  loadMore(currentDishes) {
    // 每次加载6个
    var addNum = 6;
    // 总数目
    var totalNum = this.data.dishes.length;
    // 现在的数目
    var currentNum = currentDishes.length;
    // 新数组给dishes
    var newDishes =  this.data.dishes.slice(0, currentNum+addNum);
    this.setData({
      currentDishes: newDishes,
    });
    if (currentNum+addNum >= totalNum) {
      wx.showToast({
        title: "到头啦！",
        // icon: "none",
      })
    }
  },

  onPageScroll: function(e) {
    
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})