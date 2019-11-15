import Vue from "vue";
import App from "./App.vue";

import './fonts/iconfont.css'

import Icon from './packages/icon'
import LxButton from './packages/button'
import LxButtonGroup from './packages/button-group'
import LxRadio from './packages/radio'
import LxRadioGroup from './packages/radio-group'

Vue.use(Icon)
Vue.use(LxButton)
Vue.use(LxButtonGroup)
Vue.use(LxRadio)
Vue.use(LxRadioGroup)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
