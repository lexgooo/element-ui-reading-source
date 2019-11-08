import Icon from './src/icon'
import '../theme-chalk/icon.scss'

Icon.install = function(Vue) {
	Vue.component(Icon.name, Icon)
}

export default Icon
