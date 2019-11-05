<template>
    <button :autofocus="autofocus" :disabled="disabled || loading" :class="[
        'lx-button',
        'lx-button-size-' + size,
        'lx-button-type-' + type,
        {
            'is-loading': loading,
            'is-disabled': disabled,
            'is-plain': plain,
            'is-circle': circle 
        }
    ]">
        <span v-if="loading">加载中...</span>
        <span v-else>
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
        circle: Boolean,
        size: String,
        type: {
            type: String,
            default: 'default'
        }
    }
};
</script>
<style lang="scss" scoped>
@import '../../theme-chalk/common/var.scss';
.lx-button {
    padding: 12px 16px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:focus {
        outline: none;
    }
}
.lx-button-type-primary {
    background: $--primary-color;
    border-color: $--primary-color;
    color: #fff;
}
</style>