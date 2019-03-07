import Vue from "vue"
import App from "./App"
import router from "./router/index"
import store from './store'
import toast from 'components/common/toast'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)
// new Vue({
//   el:"#app",
//   router,
//   // store,

// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')