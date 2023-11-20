import Vue from 'vue'
import App from './App.vue'
import "uno.css";
import channel from './services/channel';
async function test() {
  const channels = await channel.getChannels()
  console.log(channels)
} 
test()

Vue.config.productionTip = false // TODO: Vue.config.productionTip的作用
new Vue({
  render: h => h(App),
}).$mount('#app')
