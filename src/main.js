import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'


Vue.config.productionTip = false;




new Vue({
  router: router, store,
  render: h => h(App),
}).$mount('#app')
