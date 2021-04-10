<template lang="pug">
ul.pathway(v-if="pathway.length")
    li.pathway__item(v-for="(pathwayItem, key) in pathway" :key="key") {{ pathwayItem.title }}
</template>

<script>
export default {
    name: 'AppPathway',
    components: {

    },
    props: ['pathway'],
    setup() {

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    .pathway {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        font-family: 'SF UI Text', Arial, sans-serif;
        line-height: 1;

        &__item {
            color: #828282;

            &:after {
                content: '/';
                display: inline-block;
                margin: 0 14px;
            }

            &:last-child {
                color: $color-main;

                &:after {
                    display: none;
                }
            }
        }
    }
</style>
