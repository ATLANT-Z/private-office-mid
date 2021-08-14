<template>
    <article class="reviews-wrp-title">
        <div class="reviews-icon-mob-wrp">
            <img src="@/assets/icons/sale_my_orders_icon.svg" alt="товар"/>
            <h1>Промокоды</h1>
        </div>
        <div class="promo-list-wrp">
            <PromoCodeRow v-for="promoCode in promoCodes"
                          :key="promoCode.id"
                          :promocode="promoCode"/>
        </div>
        <div class="promotions-wrp">
            <div class="reviews-icon-mob-wrp">
                <img src="@/assets/icons/sale_my_orders_icon.svg" alt="товар"/>
                <h1>Акции</h1>
            </div>
            <div class="promocode-gallery">
                <StockCard v-for="stock in visibleStockList"
                           :key="stock.id"
                           :stock="stock"
                />
            </div>
            <Pagination :arr-length="stocks.length"
                        :per-page="perPage"
                        v-model="currPage"
                        v-model:chunkNum="chunksLoaded"
            />
        </div>
    </article>
</template>

<script>
	import {mapGetters, mapActions} from "vuex";
	import PromoCodeRow from "./PromoCodeRow";
	import StockCard from "./StockCard";
	import Pagination from "../layouts/Pagination";
	
	export default {
		components: {Pagination, StockCard, PromoCodeRow},
		data() {
			return {
				perPage: 3,
				currPage: 1,
				chunksLoaded: 1,
			}
		},
		computed: {
			...mapGetters(['promoCodes', 'stocks']),
			visibleStockList() {
				return this.stocks.slice(
					(this.currPage - 1) * this.perPage,
					this.currPage * this.perPage + this.perPage * (this.chunksLoaded - 1)
				);
			}
		},
		methods: {
			...mapActions(['fetchPromoCodes', 'fetchStocks']),
		},
		async mounted() {
			this.fetchStocks();
			this.fetchPromoCodes();
		},
	};
</script>

<style lang="scss">
    @import "/public/scss/abstract";
    
    
    .promocode-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
    
    .btn-reviews-green {
        @include btnGreen;
    }
    
    .wrp-reviews {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @extend %text-main;
        font-weight: 600;
        font-size: 16px;
    }
    
    .reviews-wrp-title {
        @include wrpTitle;
    }
    
    .reviews-icon-mob-wrp > img {
        margin-right: 22px;
        display: none;
    }
    
    .reviews-icon-mob-wrp {
        width: 100%;
        margin-bottom: 24px;
    }
    
    .reviews-icon-mob-wrp {
        @include fontHeaderPage();
        color: #232536;
        display: flex;
        align-items: center;
    }
    
    .reviews-list-wrp {
        margin-bottom: 24px;
        @include wrpGeneral;
    }
    
    .wrp-cont-rev {
        margin-bottom: 10px;
        padding-right: 14px;
        // padding-left: 28px;
        @include wrpCont;
    }
    
    .reviews-product-wrp {
        padding-left: 24px;
        position: relative;
        @extend %pos-left-flex;
    }
    
    .menu-cab-menu-cab,
    .wrp-bonus-reviews > img,
    .reviews-product-wrp > img {
        margin-right: 16px;
    }
    
    .reviews-product-wrp > p {
        max-width: 220px;
        padding-right: 10px;
    }
    
    .wrp-bonus-reviews {
        position: relative;
        @extend %pos-left-flex;
    }
    
    
    .wrp-answer-reviews {
        @extend %pos-left-flex;
    }
    
    .wrp-answer-reviews {
        margin-right: 37px;
    }
    
    .wrp-bonus-reviews {
        margin-right: 63px;
    }
    
    .wrp-bonus-reviews > p {
        max-width: 198px;
    }
    
    .wrp-revires-btn {
        display: flex;
    }
    
    .menu-cab-line-reviews {
        @include lineMyOrder;
    }
    
    .number-counter {
        display: none;
        position: absolute;
        top: 8px;
        left: 17px;
        @include numberCounter;
    }
    
    //мобильная версия
    
    @media (max-width: 1427px) {
        .reviews-list-wrp {
            width: 1000px;
        }
        .my-orders-heading {
            max-width: 420px;
        }
    }
    
    @media (max-width: 1327px) {
        .reviews-list-wrp {
            width: 950px;
        }
        .my-orders-heading {
            max-width: 375px;
        }
    }
    
    @media (max-width: 1285px) {
        .reviews-list-wrp {
            width: 900px;
        }
        .my-orders-heading {
            max-width: 315px;
        }
        .wrp-reviews {
            font-weight: 400;
        }
        .wrp-bonus-reviews > p {
            font-size: 12px;
            font-weight: 600;
        }
        .wrp-bonus-reviews {
            // padding-left: 9px;
            margin-right: 9px;
        }
    }
    
    @media (max-width: 1220px) {
        .reviews-icon-mob-wrp {
            padding-left: 15px;
        }
        .wrp-cont-rev {
            // padding-left: 24px;
            padding-right: 0;
        }
        .wrp-answer-reviews {
            display: none;
        }
        .number-counter {
            display: block;
        }
        .reviews-list-wrp {
            width: 363px;
            padding: 14px 9px;
        }
        .wrp-reviews {
            flex-direction: column;
        }
        .wrp-revires-btn {
            margin-bottom: 16px;
        }
        .btn-reviews-green {
            padding: 10px 10px;
        }
        .wrp-bonus-reviews > p {
            width: 97px;
        }
        .reviews-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .reviews-icon-mob-wrp > img {
            display: block;
        }
        .my-orders-wrp > .reviews-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .reviews-wrp-title {
            padding: 0;
        }
    }
    
    @media (max-width: 710px) {
        .menu-orders-wrp {
            display: none;
        }
    }
    
    .sale-price-promo > p {
        min-height: 40px;
        padding: 21px 11px;
        font-weight: 500;
        font-size: 24px;
        line-height: 20px;
        text-align: center;
        border-radius: 8px;
        @include btnGreen;
    }
    
    .sale-price-promo {
        margin-right: 36px;
        padding-left: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    
    .promo-list-wrp {
        width: 1107px;
        position: relative;
    }
    
    .sale-text-wrp-promo > h3 {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }
    
    .sale-text-wrp-promo > p {
        font-weight: 400;
    }
    
    .sale-text-wrp-promo {
        padding-top: 13px;
    }
    
    .sale-price-promo-wrp {
        display: flex;
    }
    
    .promo-wrp-copy {
        display: flex;
        position: relative;
    }
    
    .promo-wrp-copy > button {
        border-radius: 8px;
        padding: 12px 20px 12px 16px;
        background-color: $color-main;
        color: #ffffff;
        z-index: 10;
        font-size: 16px;
        line-height: 20px;
    }
    
    .promo-input-copy {
        position: relative;
        width: 100%;
        padding: 12px 16px 12px 16px;
        top: 0;
        left: -11px;
        border-radius: 8px;
        border: 1px solid $color-text-grey;
        background-color: #ffffff;
        text-align: center;
        z-index: 11;
    }
    
    .promotions-wrp {
        display: flex;
        flex-wrap: wrap;
        
        padding-top: 10px;
        gap: 16px;
    }
    
    .promotions-data {
        padding-left: 16px;
        padding-bottom: 16px;
        margin-right: 31px;
    }
    
    .promotions-data > p {
        margin-bottom: 16px;
        padding-top: 16px;
        font-size: 16px;
    }
    
    .promotion-img {
        position: relative;
        max-width: 368px;
        width: 100%;
        
        &__bg {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        
        &__product {
            position: absolute;
            top: 0;
            right: 0;
            max-width: 50%;
            max-height: 220px;
        }
    }
    
    .promotions-data > a > p {
        max-width: 215px;
        text-decoration: underline;
        font-size: 18px;
    }
    
    .promotion-data-wrp {
        box-shadow: $block-shadow;
        border-radius: 8px;
        display: flex;
    }
    
    .promotion-days-left {
        margin-left: auto;
        padding: 23px 18px;
        
        color: $color-main;
        background-color: transparentize($color-main, .8);
        
        &.past {
            $red: #c30000;
            color: $red;
            background-color: transparentize($red, .8);
        }
        
        &.future {
            $blue: #0074c1;
            color: $blue;
            background-color: transparentize($blue, .8);
        }
        
        font-size: 16px;
        text-align: center;
        box-sizing: border-box;
        border-bottom-right-radius: 8px;
        
        &__text {
            padding: 5px 0;
            font-size: 36px;
            font-weight: 600;
        }
    }
    
    
    @media (max-width: 1220px) {
        .sale-price-promo-wrp {
            align-items: center;
            flex-direction: column;
        }
        .sale-price-promo {
            width: 127px;
            margin-right: 0;
            padding-left: 0;
        }
        
    }
    
    @media (max-width: 1427px) {
        .promo-list-wrp {
            width: 1000px;
        }
        .my-orders-heading {
            max-width: 420px;
        }
    }
    
    @media (max-width: 1327px) {
        .promo-list-wrp {
            width: 950px;
        }
        .my-orders-heading {
            max-width: 375px;
        }
    }
    
    @media (max-width: 1285px) {
        .promo-list-wrp {
            width: 900px;
        }
        .my-orders-heading {
            max-width: 315px;
        }
        .wrp-reviews {
            font-weight: 400;
        }
        .wrp-bonus-reviews > p {
            font-size: 12px;
            font-weight: 600;
        }
        .wrp-bonus-reviews {
            // padding-left: 9px;
            margin-right: 9px;
        }
    }
    
    @media (max-width: 1220px) {
        .promotions-wrp {
            padding-left: 15px;
            padding-right: 15px;
        }
        .reviews-icon-mob-wrp {
            padding-left: 15px;
        }
        .promo-wrp-copy {
            padding-bottom: 14px;
        }
        .sale-text-wrp-promo {
            text-align: center;
            margin-bottom: 16px;
        }
        .sale-price-promo {
            padding-top: 8px;
        }
        .wrp-cont-rev {
            padding-right: 0;
        }
        .wrp-answer-reviews {
            display: none;
        }
        // .number-counter {
        //   display: block;
        // }
        .promo-list-wrp {
            width: 363px;
            padding: 0 9px;
            margin: 0 auto;
        }
        .wrp-reviews {
            flex-direction: column;
        }
        .wrp-revires-btn {
            margin-bottom: 16px;
        }
        .btn-reviews-green {
            padding: 10px 10px;
        }
        .wrp-bonus-reviews > p {
            width: 97px;
        }
        .reviews-icon-mob-wrp > h1, h2 {
            font-size: 16px;
        }
        .reviews-icon-mob-wrp > img {
            display: block;
        }
        .my-orders-wrp > .reviews-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .reviews-wrp-title {
            padding-left: 15px;
        }
    }
    
    @media (max-width: 710px) {
        .menu-orders-wrp {
            display: none;
        }
        .reviews-wrp-title {
            padding: 0;
        }
    }

</style>
