import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import storeConfigs from './store'
const store = new Vuex.Store(storeConfigs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
