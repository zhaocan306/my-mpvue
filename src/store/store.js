// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common
  }
});

export default store
