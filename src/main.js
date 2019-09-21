import Vue from 'vue';//导入vue方法对象
import App from '@/App';//导入最底层组件App
import VueRouter from 'vue-router';//1,导入下载好的vue路由

import Login from '@/pages/Login'//导入其他页面组件
Vue.use(VueRouter);//2,注册路由

const routes=[//3,配置路由
    {path:'/login',component:Login}
]
 const router=new VueRouter({routes})//4,创建路由实例对象
new Vue({
    el:'#app',
    router,//5,将路由挂载到根实例
    render(createElement){
        return createElement(App);
    }
})