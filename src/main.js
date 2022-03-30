import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JwPagination from 'jw-vue-pagination';
import './assets/style.css'
import store from './store'

Vue.config.productionTip = false

Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
