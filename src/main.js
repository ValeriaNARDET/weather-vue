import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const http=Vue.http
export default http

new Vue({
  el: '#app',
  data: {
     sourceURL: 'https://www.gismeteo.ru/api/',
     rowData: []
  },
  store: store,
  // router: router,
  render: h => h(App)
})
