<template>
    <a class="product-cart" :class="{sold:product.status?.sold}" href="javascript:void(0);">
        <div class="product-cart__header">
            <div class="status-list">
                <div class="status-list__item top" v-if="product.status?.top">
                    топ продаж
                </div>
                <div class="status-list__item new" v-if="product.status?.new">
                    Новинка
                </div>
                <div class="status-list__item stock" v-if="product.status?.stock">
                    Акция
                </div>
                <div class="status-list__item sold" v-if="product.status?.sold">
                    ПроданО
                </div>
            </div>
            <div class="product-cart__top-tools-w">
                <WishBtn/>
                <input class="ui-checkbox product-cart__checkbox" type="checkbox">
            </div>
        </div>
        <img class="product-cart__img" :src="product.imgSrc"
             alt="">
        <div class="product-cart__body">
            <div class="product-cart__first-row">
                <div class="product-label" v-if="product.label?.delivery">
                    <img class="product-label__img" src="/icons/label_delivery.svg" alt="">
                    <span class="product-label__text">
                        бесплатная
                        доставка
                    </span>
                </div>
                <div class="product-label" v-if="product.label?.credit">
                    <img class="product-label__img" src="/icons/label_credit.svg" alt="">
                    <span class="product-label__text">
                        оплата
                        частями
                    </span>
                </div>
                <div class="product-cart__code">Код: {{product.id}}</div>
            </div>
            <h5 class="product-cart__category">{{product.category}}</h5>
            <h4 class="product-cart__name">{{product.alias}}</h4>
            <div class="product-cart__body-footer">
                <div class="price">
                    <div class="price__new" v-if="product.newPrice">
                        {{product.newPrice}} грн
                    </div>
                    <div class="price__text">
                        {{product.price}} грн
                    </div>
                </div>
                <div class="ui-main-btn grey" v-if="product.status?.sold">
                    <img class="ui-ico" src="/icons/message.svg" alt="">
                    <span>Сообщить</span>
                </div>
                <div class="ui-main-btn" v-else>Купить</div>
            </div>
        </div>
    </a>
</template>

<script>
	import WishBtn from "./WishBtn";
	import Product from "../../models/Product";
	
	export default {
		components: {WishBtn},
		props: {
			product: {
				type: Product,
				required: true
			}
		},
		data() {
			return {
				testVal: null,
			}
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
    @import "../../../public/scss/abstract";
    
    .product-cart {
        position: relative;
        
        height: 480px;
        width: 24%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-left: 1%;
        margin-bottom: 16px;
        
        padding: 8px 16px 16px;
        
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        
        @include smallScreen {
            width: 32%;
        }
        
        @include smallestScreen {
            width: 49%;
        }
        
        @include mobile {
            height: 440px;
            width: 50%;
            
            margin: 0;
            padding: 8px 10px 10px;
            
            box-shadow: none;
            border: $border-grey;
        }
        
        &__header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        
        &__top-tools-w {
            display: flex;
            align-items: center;
            
            gap: 8px;
            margin-left: 4px;
            padding: 2px 0;
            
            @include mobile {
                flex-direction: column-reverse;
            }
        }
        
        &__img {
            max-width: 200px;
            max-height: 200px;
            width: 100%;
            object-fit: contain;
            
            @include mobile {
                max-width: 180px;
                max-height: 180px;
            }
        }
        
        &__body {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            
            width: 100%;
            padding: 8px 16px 16px;
            
            box-shadow: 0 -2px 3px 0 #e7e7e7;
            background-color: #ffffff;
            border-radius: 8px;
            
            z-index: 3;
            
            & > * + * {
                margin-top: 8px;
            }
            
            @include mobile {
                padding: 8px 10px 10px;
                
                & > * + * {
                    margin-top: 4px;
                }
            }
        }
        
        &__first-row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            @include mobile {
                justify-content: flex-start;
            }
        }
        
        &__code {
            @include fontCaption();
            color: #8a8a8a;
            
            @include mobile {
                margin-left: auto;
            }
        }
        
        &__category {
            @include fontSmall(500);
            @include lineClamp();
        }
        
        &__name {
            @include fontMid(500);
            @include lineClamp(3);
        }
        
        &__body-footer {
            margin-top: 8px;
            
            & > * + * {
                margin-top: 6px;
            }
        }
    }
    
    .status-list {
        display: flex;
        flex-wrap: wrap;
        max-width: 90%;
        
        margin-left: -4px;
        margin-top: -4px;
        
        $top: #44b1bb;
        $new: #e29450;
        $sold: #8a8a8a;
        $stock: #e25750;
        
        &__item {
            border-radius: 8px;
            
            margin-left: 4px;
            margin-top: 4px;
            
            padding: 4px 8px;
            @include fontCaption();
            color: white;
            text-transform: uppercase;
            
            background-color: $color-main;
            
            &.top {
                background-color: $top;
            }
            
            &.new {
                background-color: $new;
            }
            
            &.sold {
                background-color: $sold;
            }
            
            &.stock {
                background-color: $stock;
            }
        }
    }
    
    .product-label {
        max-width: 80px;
        display: flex;
        align-items: center;
        
        &__img {
            max-height: 24px;
            object-fit: contain;
        }
        
        &__text {
            margin-left: 4px;
            
            font-size: 8px;
            line-height: 10px;
            
            text-transform: uppercase;
            color: $color-main;
        }
        
        @include mobile {
            & + & {
                margin-left: 12px;
            }
            
            &__text {
                display: none;
            }
        }
    }
    
    .price {
        display: flex;
        flex-direction: column-reverse;
        
        font-weight: 500;
        font-size: 28px;
        line-height: 28px;
        
        @include mobile {
            @include fontBig();
        }
        
        
        $that: &;
        
        @at-root {
            .sold #{$that} > * {
                color: $color-text-orders !important;
            }
        }
        
        
        &__new {
            color: red;
            
            & + #{$that}__text {
                font-size: 18px;
                font-weight: 400;
                line-height: 20px;
                text-decoration: line-through;
                color: #434343;
                
                @include mobile {
                    @include fontCaption();
                }
            }
        }
        
        &__text {
            color: $color-main;
        }
    }


</style>
