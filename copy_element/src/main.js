import Vue from "vue";
import App from "./App.vue";

import './fonts/iconfont.css'

import Icon from './packages/icon'
import LxButton from './packages/button'
import LxButtonGroup from './packages/button-group'

Vue.use(Icon)
Vue.use(LxButton)
Vue.use(LxButtonGroup)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
