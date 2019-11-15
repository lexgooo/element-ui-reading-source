<template>
    <label role="radio">
        <input v-model="model" :value="label" type="radio">
        <span>
            <slot />
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
    name: 'LxRadio',
    componentName: 'LxRadio',
    props: {
        label: {},
        value: {}
        
    },
    computed: {
        model: {
            get () {
                return this.isGroup ? this._radioGroup.value : this.value
                // return this.value
            },
            set (val) {
                // TODO
                this.$emit('input', val)
            }
        },
        isGroup () {
            let parent = this.$parent
            while(parent) {
                debugger
                if (parent.$options.componentName !== 'LxRadioGroup') {
                    parent = parent.$parent
                } else {
                    this._radioGroup = parent
                    return true
                }
            }
            return false
        }
    }
}
</script>