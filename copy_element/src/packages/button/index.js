import LxButton from './src/button'
import '../theme-chalk/icon.scss'
import '../theme-chalk/button.scss'

LxButton.install = function(Vue) {
    Vue.component(LxButton.name, LxButton)
}

export default LxButton
