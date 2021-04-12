<template lang="pug">
.page.products-list-page
    header.products-list-page__header.page__wrapper
        app-pathway(:pathway="pathway")
        page-title(:pageTitle="pageTitle")
    aside.products-list-page__filters.page__wrapper
        app-select(
            label="Сортировать по:"
            :options="sortingOptions"
            v-model="sortingState"
        )
        app-select(
            label="Материал"
            :options="materials"
            v-model="filterState"
        )
    main.products-list-page__items.page__wrapper
        products(
            :products="sortedAndFilteredProducts"
            :loading="productsIsLoading"
        )
</template>

<script>
import { ref, computed } from "vue";

import AppPathway from '@/components/AppPathway/index.vue'
import PageTitle from '@/components/PageTitle/index.vue'
import Products from "@/components/Products/index";
import AppSelect from "@/components/AppSelect/index";

//import data
import productsJSON from '@/data/json/items.json'
import materialsJSON from '@/data/json/materials.json'


export default {
    name: 'App',
    components: {
        AppSelect,
        Products,
        AppPathway,
        PageTitle
    },
    setup() {
        const setDelay = (ms) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, ms)
            })
        }

        //получаем pathway
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

        //получаем заголовок страницы
        const pageTitle = 'Комплекты стеллажных систем'

        //товары
        const productsIsLoading = ref(false)
        const products = ref([])
        const materials = ref([])
        const filterState = ref(null)
        const sortingOptions = ref([
            {
                "id": "1",
                "name": "Цена по возрастанию"
            },
            {
                "id": "2",
                "name": "Цена по убыванию"
            }
        ])
        const sortingState = ref(null)

        const getProducts = async () => {
            productsIsLoading.value = true
            //имитация задержки получения данных с бэка
            await setDelay(0)
            products.value = productsJSON
            materials.value = materialsJSON
            filterState.value = Number(materials.value[0].id)
            sortingState.value = Number(sortingOptions.value[0].id)
            productsIsLoading.value = false
        }

        const sortedAndFilteredProducts = computed(() => {
            const filteredProducts = products.value.filter((el) => {
                    return el.material === filterState.value
                })

            if(sortingState.value === 1) {
                return filteredProducts.sort((a, b) => {
                    return a.price.current_price - b.price.current_price
                })
            } else {
                return filteredProducts.sort((a, b) => {
                    return b.price.current_price - a.price.current_price
                })
            }
        })

        getProducts()

        return {
            pathway,
            pageTitle,
            materials,
            filterState,
            sortingOptions,
            sortingState,
            productsIsLoading,
            sortedAndFilteredProducts
        }
    }

}
</script>

<style lang="scss" scoped >
    .products-list-page {

        &__wrapper {

        }

        &__filters {
            margin-top: 32px;
            display: flex;

            @media (max-width: $viewport-tablet) {
                margin-top: 18px;
                flex-direction: column;
            }
        }

        &__items {
            margin-top: 23px;

            @media (max-width: $viewport-tablet) {
                margin-top: 16px;
            }
        }
    }
</style>