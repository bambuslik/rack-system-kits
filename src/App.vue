<template lang="pug">
.products-list-page
    header.products-list-page__header.page-wrapper
        app-pathway(:pathway="pathway")
    aside.products-list-page__filters.page-wrapper
    main.products-list-page__items.page-wrapper




</template>

<script>
    //import components
    import AppPathway from '@/components/AppPathway/index.vue'
    import AppPageTitle from '@/components/AppPageTitle/index.vue'

export default {
    name: 'App',
    components: {
        AppPathway
    },
    setup() {
        //получаем pathway из роутера
        const pathway = [
            {
                title: 'Главная',
                link: '#'
            },
            {
                title: 'Системы хранения',
                link: '#'
            },
            {
                title: 'Комплекты стеллажных систем',
                link: ''
            }
        ]

        return {
            pathway

        }
    }

}
</script>

<style lang="scss" scoped>
    .products-list-page {
        &__wrapper {

        }
    }


</style>
