import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAMap from 'vue-amap';
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
// import './lib/rem.js';
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7e86adb44227f67253aaf06cf6885d1d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
