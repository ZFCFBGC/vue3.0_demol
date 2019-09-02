import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import List from './components/list.vue'
import Scroller from './components/scroller.vue'
import Scroll from './components/scroll/scroll.vue'
import Swipers from './components/gqg_swiper/swiper.vue'
import Swipers1 from './components/gqg_swiper/swiper1.vue'
import Swipers2 from './components/gqg_swiper/swiper2.vue'
import Demol from './components/bottomTab.vue'
import Address from './components/address.vue'
import Login from './pages/login.vue'
import Home from './pages/index.vue'
import AddGoods from './pages/addGoods.vue'
import AddShop from './pages/addShop.vue'
import AdminSetting from './pages/adminSetting.vue'
import Edit from './pages/edit.vue'
import FoodList from './pages/foodList.vue'
import Intruduce from './pages/intruduce.vue'
import OrderList from './pages/orderList.vue'
import ShopList from './pages/shopList.vue'
import User from './pages/user.vue'
import UserList from './pages/userList.vue'
import AdminList from './pages/adminList.vue'
import Manage from './pages/manage.vue'
import Info from './pages/info.vue'
const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
			name:'Home',
      component: Home,
      children:[
      {
        path:'',
        name:'Manage',
        component: Manage,
      },{
        path:'/addGoods',
        name:'AddGoods',
        component: AddGoods,
      },{
        path:'/addShop',
        name:'AddShop',
        component: AddShop,
      },{
        path:'/adminList',
        name:'AdminList',
        component: AdminList,
      },{
        path:'/adminSetting',
        name:'AdminSetting',
        component: AdminSetting,
      },{
        path:'/edit',
        name:'Edit',
        component: Edit,
      },{
        path:'/foodList',
        name:'FoodList',
        component: FoodList,
      },{
        path:'/intruduce',
        name:'Intruduce',
        component: Intruduce,
      },{
        path:'/orderList',
        name:'OrderList',
        component: OrderList,
      },{
        path:'/shopList',
        name:'ShopList',
        component: ShopList,
      },{
        path:'/user',
        name:'User',
        component: User,
      },{
        path:'/userList',
        name:'UserList',
        component: UserList,
      }]
    },
    {
      path:'/login',
			name:'Login',
			component: Login,
    },
    {
      path:'/address',
			name:'Address',
			component: Address,
    },
    {
      path:'/info',
			name:'Info',
			component: Info,
    },{
      path:'/list',
			name:'List',
			component: List,
    },{
      path:'/scroller',
			name:'Scroller',
			component: Scroller,
    },{
      path:'/scroll',
			name:'Scroll',
			component: Scroll,
    },{
      path:'/swipers',
			name:'Swipers',
			component: Swipers,
    },{
      path:'/swipers1',
			name:'Swipers1',
			component: Swipers1,
    },{
      path:'/swipers2',
			name:'Swipers2',
			component: Swipers2,
    },{
      path:'/demol',
			name:'Demol',
			component: Demol,
    }
  ]
})

export default router;