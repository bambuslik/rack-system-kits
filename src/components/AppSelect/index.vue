<template lang="pug">
.select-item
    span.select-item__label {{ label }}
    select.select-item__select(v-model="modelValue" @change="onChange")
        option(v-for="option in options" :key="option.id" :value="option.id") {{ option.name }}
</template>

<script>

export default {
    name: 'AppSelect',
    components: {

    },
    props: {
        label: String,
        options: Array,
        modelValue: Number
    },
    emits: ['update:modelValue'],
    setup(_, { emit }) {
        const onChange = (e) => {
            emit('update:modelValue', Number(e.target.value))
        }
        return {
            onChange
        }
    }

}
</script>

<style lang="scss" scoped>
    .select-item {
        margin: 10px;

        &__label {
            display: block;
        }

        &__select {
            width: 288px;
        }

    }

</style>
