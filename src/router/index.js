/**路由器对象模块 */

/**
 * 5个主要页面的router声明
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../pages/Search/Search.vue'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

//申明使用路由
Vue.use(VueRouter)
//导出所有路由
export default new VueRouter({
routes:[
  {
path:'/',
redirect:'/msite'
  },
    {
        path:'/msite',
        component:MSite,
        meta :{
            showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta :{
            showFooter:true
        }
    },   {
        path:'/order',
        component:Order,
        meta :{
            showFooter:true
        }
    },   {
        path:'/profile',
        component:Profile,
        meta :{
            showFooter:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/shop',
        component:Shop,
        children:[
            {
                path:'/shop/goods',
                component:ShopGoods
            },
            {
                path:'/shop/info',
                component:ShopInfo
            },
            {
                path:'/shop/ratings',
                component:ShopRatings
            },
            {
                path:'',
                redirect:'/shop/goods'
                  },
        ]
    },
]
})
