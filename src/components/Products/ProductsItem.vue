<template lang="pug">
.product
    img.product__img(:src="require(`@/data${product.image.url}`)" :title="product.name" :alt="product.name")
    span.product__sku {{ product.code }}
    h2.product__title {{ product.name }}
    .product__row.product__row_price
        span.product__price.product__price_old(v-if="product.price.old_price") {{ Math.round(product.price.old_price) }}₽
        span.product__price.product__price_current {{ Math.round(product.price.current_price) }}₽
</template>

<script>
export default {
    name: 'ProductsItem',
    components: {

    },
    props: ['product'],
    setup() {

        console.log(

        );

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    .product {
        padding: 9px;
        border: 1px solid #EEEEEE;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        font-family: 'SF UI Text';

        &__img {
            /*border: 1px solid #7b7b7b;*/
            box-sizing: border-box;
            max-width: 100%;
            flex-shrink: 0;
            align-self: center;
        }

        &__sku {
            margin-top: 23px;
            display: block;
            color: #888888;
            font-size: 10px;
            line-height: 1.4;
            min-height: 14px;
        }

        &__title {
            margin: 6px 0 0;
            font-size: 16px;
            line-height: 1.4;
            font-weight: 500;
        }

        &__row {

            &_price {
                margin-top: 9px;
            }
        }

        &__price {
            font-size: 16px;
            line-height: 1.4;

            &_old {
                margin-right: 9px;
                color: #888888;
                text-decoration: line-through;
            }


        }

    }



</style>
