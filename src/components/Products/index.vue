<template lang="pug">
template(v-if="loading")
    .products-list-loading
template(v-else)
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
    props: {
        products: Array,
        loading: Boolean
    },
    setup() {

        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .products-list-loading {
        height: 100px;
        background: url('~@/assets/img/loading-ico.svg') no-repeat center;
    }
    .products-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 48px;
        grid-row-gap: 40px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 24px;
            grid-row-gap: 20px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 20px;
        }

        @media (max-width: 540px) {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
        }

        &__item {
            box-sizing: border-box;
            display: flex;
        }
    }
</style>
