import Icon from './src/icon'
import '../fonts/iconfont.css'

Icon.install = function(Vue) {
	Vue.component(Icon.name, Icon)
}

export default Icon
