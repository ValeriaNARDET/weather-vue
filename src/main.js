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
  // created: function() {
  //   this.$http.get(sourceURL).then(
  //     function (response) { // Success.
  //       this.rowData = response.data;
  //       console.log("it is doable")
  //     },
  //     function (response) { // Error.
  //       console.log('An error occurred.');
  //     }
  //   )
  // },
  store: store,
  // router: router,
  render: h => h(App)
})
