//  router/index.js  用来配置路由

import Vue from 'vue';
import Router from 'vue-router';
// import Login from '@/components/login';
import Login from '../components/login.vue';  //登录组件
import Main from '../components/main.vue';  //主页组件

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'login', component: Login },
        { path: '/main', name: 'main', component: Main }
    ]
})
