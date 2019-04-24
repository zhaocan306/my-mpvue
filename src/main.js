import Vue from 'vue'
import App from '@/App'
import store from '@/store/store'

Vue.config.productionTip = false

// 使用vuex
Vue.prototype.$store = store

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
