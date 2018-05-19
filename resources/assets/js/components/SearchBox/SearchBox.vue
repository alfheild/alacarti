<template>
    <div class="AlSearchBox">
        <input-group class="AlSearchBox__input AlFullWidth" icon="search">
            <input class="AlInput--large AlInput--shadowBig AlFullWidth"
                   type="text"
                   placeholder="Search you fucking great food"
            />
        </input-group>
    </div>
</template>

<script>
    import InputGroup from './../FormComponents/InputGroup.vue'

    export default {
        name: 'SearchBox',
        props: {

        },
        components: {
            InputGroup
        }
    };

</script>