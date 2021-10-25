import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/"
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
