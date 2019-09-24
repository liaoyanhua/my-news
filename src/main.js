import Vue from 'vue';//导入vue方法对象
import App from '@/App';//导入最底层组件App
import Vant from 'vant';//导入vant-ui组件
import VueRouter from 'vue-router';//1,导入下载好的vue路由
import axios from 'axios';

//导入其他页面组件
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.prototype.$axios=axios;//将axios绑定到prototype原型上
axios.defaults.baseURL="http://localhost:3000"//设置公共路径baseURL

Vue.use(VueRouter);//2,注册路由
Vue.use(Vant);//注册vant-ui组件库
const routes=[//3,配置路由
    {path:'/login',component:Login},
    {path:'/register',component:Register}
]
 const router=new VueRouter({routes})//4,创建路由实例对象
new Vue({
    el:'#app',
    router,//5,将路由挂载到根实例
    render(createElement){
        return createElement(App);
    }
})