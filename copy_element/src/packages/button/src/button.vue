<template>
    <button @click="handleClick" :autofocus="autofocus" :disabled="disabled || loading" :class="[
        'lx-button',
        size ? 'lx-button--' + size : '',
        type ? 'lx-button--' + type : '',
        {
            'is-loading': loading,
            'is-disabled': disabled,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle 
        }
    ]">
        <i v-if="loading" class="lx-icon-loading"></i>
        <i v-if="icon && !loading" :class="['lx-icon', icon]"></i>
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>
<script>
export default {
    name: "LxButton",
    props: {
        autofocus: Boolean,
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        size: String,
        type: {
            type: String,
            default: 'default'
        },
        icon: String
    },
    methods: {
        handleClick(evt) {
            console.log('按钮点击事件')
            this.$emit('click', evt)
        }
    }
};
</script>