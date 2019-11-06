import LxButton from './src/lxButton'
import '../fonts/iconfont.css'
import '../theme-chalk/button.scss'

LxButton.install = function(Vue) {
    Vue.component(LxButton.name, LxButton)
}

export default LxButton
