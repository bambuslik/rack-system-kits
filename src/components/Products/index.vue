<template lang="pug">
ul.products-list
    li.products-list__item(v-for="product in products" :key="product.id")
        products-item(:product="product")
</template>

<script>
import ProductsItem from "./ProductsItem";

export default {
    name: 'Products',
    components: {
        ProductsItem


    },
    props: ['products'],
    setup() {

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    .products-list {
        list-style: none;
        margin: 0;
        padding: 0;
        /*display: flex;*/
        /*column-gap: 48px;*/
        /*flex-wrap: wrap;*/
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 48px;
        grid-row-gap: 40px;

        &__item {
            /*width: calc(25% - (48px * 3 / 4));*/
            box-sizing: border-box;
            display: flex;

            @media (max-width: 1200px) {
                /*width: calc(33.33% - (48px * 2 / 3));*/
            }
        }
    }
</style>
