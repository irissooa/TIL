import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'

Vue.config.productionTip = false // 배포팁 보는 것을 false로 해야 중간에 warning 뜨는 것을 안 보이게 할 수 있다.
Vue.use(VueSession)

new Vue({
  router, // vue instance routing
  render: h => h(App)
}).$mount('#app')
