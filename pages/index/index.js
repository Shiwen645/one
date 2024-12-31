// page.js
Page({
  data:{
    navList: [
      { title: '首页' },
      { title: '电视剧' },
      { title: '综艺' },
      { title: '电影' },
      { title: '动漫' },
      { title: '少儿' },
      { title: '冒险' },
    ],
    activeIndex: 0
  },
  onSearchInput: function(e) {
    // e.detail.value 是输入框的值
    console.log('搜索内容：', e.detail.value);
    // 这里可以添加搜索逻辑
    
  },
  // 导航栏
  switchTab: function(e) {
    // 切换导航项
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeIndex: index
    });
  },
})

