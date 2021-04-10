<template lang="pug">
h1.page-title {{ pageTitle }}
</template>

<script>
export default {
    name: 'AppPathway',
    components: {

    },
    props: ['pageTitle'],
    setup() {

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    .page-title {
        font-family: 'SF Pro Display';
        font-weight: 600;
        font-size: 36px;
        line-height: 1.3;
        margin: 0;
        padding-top: 32px;
    }
</style>
