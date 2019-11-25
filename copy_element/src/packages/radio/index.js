import LxRadio from './src/radio' 
import '../theme-chalk/radio.scss'

LxRadio.install = function (Vue) {
    Vue.component(LxRadio.name, LxRadio)
}

export default LxRadio
