import Vue from "vue";
import App from "./App.vue";

import Icon from './packages/icon'
import LxButton from './packages/button'

Vue.use(Icon)
Vue.use(LxButton)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
