import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyLoad from 'vue-lazyload'
import Toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(vueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
