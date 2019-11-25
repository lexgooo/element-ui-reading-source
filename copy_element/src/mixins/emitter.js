export default {
    methods: {
        dispatch(componentName, event, params) {
            let parent = this.$parent ||this.$root
            let name = parent.$options.componentName
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent
                if (parent) {
                    name = parent.$options.componentName
                }
            }
            if (parent) {
                // parent.$emit.apply(parent, [event].concat(params))
                parent.$emit(event, ...params)
            }
        } 
    }
}