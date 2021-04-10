<template lang="pug">
.page.products-list-page
    header.products-list-page__header.page__wrapper
        app-pathway(:pathway="pathway")
        app-page-title(:pageTitle="pageTitle")
    aside.products-list-page__filters.page__wrapper
    main.products-list-page__items.page__wrapper




</template>

<script>
    //import components
    import AppPathway from '@/components/AppPathway/index.vue'
    import AppPageTitle from '@/components/AppPageTitle/index.vue'

export default {
    name: 'App',
    components: {
        AppPathway,
        AppPageTitle

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

        //получаем h1 страницы из роутера
        const pageTitle = 'Комплекты стеллажных систем'

        return {
            pathway,
            pageTitle
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
