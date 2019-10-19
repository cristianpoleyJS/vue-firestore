import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { CONFIG } from './utils/firestoreConfig'

Vue.config.productionTip = false

const firebase = initializeApp(CONFIG)
store.commit('SET_DATABASE', firebase.firestore())

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
