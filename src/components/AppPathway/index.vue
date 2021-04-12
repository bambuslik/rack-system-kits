<template lang="pug">
ul.pathway(v-if="pathway.length")
    li.pathway__item(v-for="(pathwayItem, key) in pathway" :key="key") {{ pathwayItem.title }}
</template>

<script>
export default {
    name: 'AppPathway',
    components: {

    },
    props: {
        pathway: Array
    },
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
        font-family: 'SF UI Text', sans-serif;
        line-height: 1.4;

        @media (max-width: $viewport-tablet) {
            font-size: 14px;
        }

        &__item {
            color: #828282;

            &:after {
                content: '/';
                display: inline-block;
                margin: 0 14px;

                @media (max-width: $viewport-tablet) {
                    margin: 0 10px;
                }
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
