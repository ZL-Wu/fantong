// pages/mealTicket/mealTicket.js
Page({
  data: {
    categoryOpen: false,
    tasteOpen: false,
    materialsOpen: false,

    categoryName : "",
    tasteName:"",
    materialName:"",
    key:0,

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

    dishTastes:[
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
  },

  tapCategoryNav: function(e) {
    this.setData({
      categoryOpen: !this.data.categoryOpen,
      tasteOpen: false,
      materialsOpen: false,
    });
  },

  tapTasteNav: function(e) {
    this.setData({
      tasteOpen: !this.data.tasteOpen,
      categoryOpen: false,
      materialsOpen: false,
    });
  },

  tapMaterialsNav: function(e) {
    this.setData({
      materialsOpen: !this.data.materialsOpen,
      categoryOpen: false,
      tasteOpen: false,
    })
  },

  categoryChoose: function(e) {
    this.setData({
      categoryName: e.currentTarget.dataset.item.name,
      key: e.currentTarget.dataset.item.id,
    })
  },
  categorySubChoose: function(e) {
    var currentName = e.currentTarget.dataset.item;
    // var newName = this.data.categoryName + "--" + currentName;
    this.setData({
      categoryName: currentName,
    });
    this.closeNav();
  },
  tasteChoose: function(e) {
    this.setData({
      tasteName: e.currentTarget.dataset.item.name,
    })
  },

  materialChoose: function(e) {
    this.setData({
      materialName: e.currentTarget.dataset.item.name,
    })
  },

  // 关闭下拉菜单
  closeNav(e) {
    this.setData({
      categoryOpen: false,
      tasteOpen: false,
      materialsOpen: false,
    })
  }
})