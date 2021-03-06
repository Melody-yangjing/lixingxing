import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
// import './lib/rem.js';
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
