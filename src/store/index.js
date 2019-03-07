import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Vuex.Store对象
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')):{
  cartList:[],
  currentUser:""
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 3.导出store对象
export default store
