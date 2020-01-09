import Vue from 'vue'
import App from './App.vue'

import Message from './Message.vue'
Vue.component('app-own_message',Message);

new Vue({
  el: '#app',
  render: h => h(App)
})
