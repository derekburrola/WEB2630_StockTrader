//DONE: Import vue and name it Vue
import Vue from 'vue'
//DONE: Import vue-router and name it VueRouter
import VueRouter from 'vue-router'
//DONE: Import vue-resource and name it VueResource
import VueResource from 'vue-resource'

//DONE: Import App.vue and name it App
import App from './App.vue'
//DONE: Import routes.js and use the {} passing routes
import { routes } from './routes.js'
//DONE: Import store/store.js and name it store
import store from './store/store.js'

Vue.config.productionTip = false

//DONE Initialize VueRouter using Vue.use()
Vue.use(VueRouter)
//DONE Initialize VueResource using Vue.use()
Vue.use(VueResource)

Vue.http.options.root = "https://stocktrade-74e6a.firebaseio.com/"//DONE: Set Equal to your Firebase Database URL

  Vue.filter('currency', (value) => {
    //DONE: Return value.toLocaleString(), Add '$' sign before value
    return "$"+value.toLocaleString();
  })

const router = new VueRouter({
  //DONE: Set router mode to history
  mode: 'history',
  //DONE: Pass routes constant imported from above
  routes
})

new Vue({
  //DONE: Pass the router constant to vue application
  router,
  //DONE: Pass store constant to vue application  
  store,
  render: h => h(App),
}).$mount('#app')
