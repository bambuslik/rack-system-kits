<template lang="pug">
.product
    img.product__img.product__img_loading(
        :src="require(`@/assets/img/product/product-img-fallback.svg`)"
        v-show="!imgLoadState"
    )
    img.product__img(
        :src="require(`@/data${product.image.url}`)"
        @load="imgLoadState = true"
        v-show="imgLoadState"
        :title="product.name"
        :alt="product.name"
    )
    span.product__sku {{ product.code }}
    h2.product__title {{ product.name }}
    .product__row.product__row_price
        span.product__price.product__price_old(v-if="product.price.old_price") {{ Math.round(product.price.old_price) }}₽
        span.product__price.product__price_current {{ Math.round(product.price.current_price) }}₽
    .product__buttons
        button.product__btn.product__btn_cart()
        //button.product__btn.product__btn_cart.product__btn_cart-active()
        button.product__btn.product__btn_like()
        //button.product__btn.product__btn_like.product__btn_like-active()
    span.product__sale(v-if="product.price.old_price") Скидка
</template>

<script>
import { ref } from "vue";

export default {
    name: 'ProductsItem',
    components: {

    },
    props: {
        product: Object
    },
    setup() {
        const imgLoadState = ref(false)

        return {
            imgLoadState
        }
    }
}
</script>

<style lang="scss" scoped>
    .product {
        position: relative;
        padding: 9px;
        border: 1px solid #EEEEEE;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        font-family: 'SF UI Text', sans-serif;

        &__img {
            box-sizing: border-box;
            max-width: 100%;
            flex-shrink: 0;
            align-self: center;

            &_loading {

            }
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

        &__buttons {
            position: absolute;
            bottom: 4px;
            right: 14px;
        }

        &__btn {
            padding: 0;
            width: 30px;
            height: 30px;
            background: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            transition: opacity .3s ease;

            &:hover {
                opacity: .6;
            }

            &_cart {
                background: url('~@/assets/img/product/cart-ico.svg') no-repeat center;

                &-active {
                    background: url('~@/assets/img/product/cart-active-ico.svg') no-repeat center;
                }
            }

            &_like {
                margin-left: 16px;
                background: url('~@/assets/img/product/heart-ico.svg') no-repeat center;

                &-active {
                    background: url('~@/assets/img/product/heart-active-ico.svg') no-repeat center;
                }
            }
        }

        &__sale {
            position: absolute;
            top: 8px;
            left: 0;
            background: #EB5757;
            font-family: 'SF Pro Display', sans-serif;
            color: #FFF;
            font-size: 14px;
            line-height: 1.3;
            font-weight: 500;
            letter-spacing: 1px;
            padding: 3px 16px;
        }
    }
</style>
