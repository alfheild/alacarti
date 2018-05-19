<template>
    <img :src="routeToSvg" :width="width" :height="height"/>
</template>

<script>
    export default {
        name: 'SvgIcon',
        props: {
            name: {
                required: true,
                type: String,
                default: 'default',
            },
            height: {
                type: Number,
                default: 20,
            },
            width: {
                type: Number,
                default: 20,
            }
        },
        computed: {
            routeToSvg(){
                return `/icons/${this.name}.svg`;
            }
        }
    }
</script>
