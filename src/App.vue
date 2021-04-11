<template lang="pug">
.page.products-list-page
    header.products-list-page__header.page__wrapper
        app-pathway(:pathway="pathway")
        app-page-title(:pageTitle="pageTitle")
    aside.products-list-page__filters.page__wrapper
    main.products-list-page__items.page__wrapper
        products(:productsList="products")




</template>

<script>
//import hooks
import { ref } from "vue";

//import components
import AppPathway from '@/components/AppPathway/index.vue'
import AppPageTitle from '@/components/AppPageTitle/index.vue'
import Products from "./components/Products/index";

//import data
import productsJSON from '@/data/json/items.json'

export default {
    name: 'App',
    components: {
        Products,
        AppPathway,
        AppPageTitle

    },
    setup() {
        const delay = (ms) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, ms)
            })
        }

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

        //получаем товары
        const productsIsLoading = ref(true)
        const products = ref([])
        // const mainTableColumns = ref([])
        const getProducts = async () => {
            //имитация получения данных с бэка
            await delay(0)
            products.value = productsJSON
            productsIsLoading.value = false
        }

        getProducts()

        return {
            pathway,
            pageTitle,
            products
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
