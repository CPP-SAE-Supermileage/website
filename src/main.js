import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
