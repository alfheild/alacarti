<template>
    <label :class="[
               'AlInputGroup',
               `AlInputGroup--${positionChecked}`
               ]
    ">
        <div class="AlInputGroup__icon">
            <svg-icon :name="icon" :width="iconWidth" :height="iconHeight"></svg-icon>
        </div>

        <slot></slot>
    </label>
</template>

<script>
    import SvgIcon from './svgIcon.vue';

    const POSITIONS = ['left', 'right'];

    export default {
        name: 'InputGroup',
        props: {
            icon: {
                required: true,
                type: String,
                default: 'default'
            },
            iconWidth: {
                type: Number,
                default: 20
            },
            iconHeight: {
                type: Number,
                default: 20
            },
            position: {
                type: String,
                default: 'left',
            }
        },

        computed: {
            positionChecked() {
                if (POSITIONS.indexOf(this.position) > -1) {
                    return this.position;
                }

                return POSITIONS[0];
            }
        },

        components: {
            SvgIcon,
        },

        mounted() {
            if (this.$slots.default && this.$slots.default.length > 0) {
                this.$slots.default[0].elm.classList.add('AlInputGroup__input');
            }
        }
    }
</script>