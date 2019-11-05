import LxButton from './src/lxButton'
import '../fonts/iconfont.css'

LxButton.install = function(Vue) {
    Vue.component(LxButton.name, LxButton)
}

export default LxButton
