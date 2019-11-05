<template>
    <i :class="'icon-'+ name"></i>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        name: String
    }
}
</script>
