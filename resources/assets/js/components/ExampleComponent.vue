<template>
    <label>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
