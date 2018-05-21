<template>
    <div class="AlDropdown">
        <slot></slot>
        <ul class="AlDropdown__list">
            <li v-for="(option, i) in options"
            :key="i">
                <a :class="[
                    'AlDropdown__listItem',
                    { 'AlDropdown__listItem--active': selected === option }
                    ]"
                   href="#"
                   @click.prevent="selectOption(option)"
                >
                    {{ itemText(option) }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: {
            options: {
                type: Array,
                default: () => [],
            },
            label: {
                type: String,
                default: 'name',
            },
            value: {
                type: [String, Object],
                default: null
            }
        },

        data() {
            return {
                selected: null,
            };
        },

        watch: {
            value(val) {
                this.selected = val;
            }
        },

        methods: {
            itemIsObject(item) {
                return _.isObject(item);
            },
            itemText(item) {
                if (this.itemIsObject(item)) {
                    return _.get(item, this.label, '-');
                }

                return item;
            },
            selectOption(item) {
                this.selected = item;

                if (this.itemIsObject(item) && this.return) {
                    this.$emit('input', _.get(item, this.return, 'AttributeNotFound'));
                    return;
                }
                this.$emit('input', item);
            }
        }
    }
</script>