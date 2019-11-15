<template>
    <div class="lx-radio-group">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'LxRadioGroup',
    componentName: 'LxRadioGroup',
    props: {
        value: {}
    }
}
</script>