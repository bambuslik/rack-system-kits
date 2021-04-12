<template lang="pug">
h1.page-title {{ pageTitle }}
</template>

<script>
export default {
    name: 'Pathway',
    components: {

    },
    props: {
        pageTitle: String
    },
    setup() {

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    .page-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 1.3;
        margin: 0;
        padding-top: 32px;

        @media (max-width: $viewport-tablet) {
            font-size: 24px;
            padding-top: 18px;
        }
    }
</style>
