import Vue from 'vue'
import App from './App.vue'
import request from './request.js'
import axios from 'axios'
import './assets/css/global.css'
import './assets/css/main.less'
import 'vant/lib/index.css';
import { Button } from 'vant'
Vue.use(Button)
Vue.prototype.$request = request
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import '@/rem.js'
new Vue({
  render: h => h(App),
}).$mount('#app')
