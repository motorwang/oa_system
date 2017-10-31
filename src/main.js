// main.js 用来配置页面

import Vue from 'vue';
import App from './App';
import router from './router';

// 引入 element-ui
import Element from 'element-ui';
// 引入 element的css的样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

Vue.config.productionTip = false

// 创建一个vue实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
