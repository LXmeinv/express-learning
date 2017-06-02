/**
 * Created by zhongzhengkai on 2017/6/2.
 */


var subTitleComponent = {
  props: ['list', 'default'],
  template: '#sub-title',
  delimiters: ['${', '}'],
  data: function () {
    return {
      current: this.default
    }
  },
  methods: {
    goLink: function (item) {
      //当前请求的link与current的link不一样时才进行跳转
      if (this.current.value != item.value) {
        this.current = item;
        //进行跳转
        window.location.href = item.value;
      }
    }
  }
};
var subTitleVue;
$(function(){
  if ($('.sub-title').length > 0) {
    subTitleVue = new Vue({
      el: '.sub-title',
      data: {
        list: [
          { text: '首页', value: '/home' },
          { text: '分类', value: '/classify' },
          { text: '约惠', value: '/data' },
          { text: '购物车', value: '/shopcar' },
          { text: '我的', value: '/mine' }
        ],
        default: { text: '首页', value: '' }
      },
      delimiters: ['${', '}'],
      components: {
        'sub-title': subTitleComponent
      }
    });
  }
});