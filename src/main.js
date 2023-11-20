import Vue from 'vue'
import App from './App.vue'
import "uno.css";
import channel from './services/channel';
channel.getChannels()
const resp = fetch('/a')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
