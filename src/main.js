import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "uno.css";

Vue.config.productionTip = false // TODO: Vue.config.productionTip的作用
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
