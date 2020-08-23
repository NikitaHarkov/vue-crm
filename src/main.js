import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAnY7CKP9dGKXjNvUBxbu_vcMFMhdteU3w",
  authDomain: "vue-crm-starter.firebaseapp.com",
  databaseURL: "https://vue-crm-starter.firebaseio.com",
  projectId: "vue-crm-starter",
  storageBucket: "vue-crm-starter.appspot.com",
  messagingSenderId: "148931199624",
  appId: "1:148931199624:web:4cec4b6a50060270ad953d",
  measurementId: "G-TF64LB726Z"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
