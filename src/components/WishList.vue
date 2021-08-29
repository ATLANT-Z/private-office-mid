<template>
    <article class="main-column">
        <h1 class="section-header">
            <img class="show-mob section-header__ico" src="@/assets/icons/like_my_orders_icon.svg" alt="">
            Список желаний
        </h1>
        <div class="sort-panel">
            <div class="ui-list row sort-panel__tools">
                <label class="ui-input-w-row">
                    <input class="ui-checkbox" type="checkbox">
                    <span class="ui-caption">Выбрать всё</span>
                </label>
                <label class="ui-input-w-row">
                    <img class="ui-ico" src="@/assets/icons/delete.svg" alt="">
                    <span class="ui-caption">Удалить</span>
                </label>
            </div>
            <div class="ui-list small row end sort-panel__sum-row">
                <div class="sort-panel__sum-text-block">
                    <span class="ui-caption">
                        8 товаров на сумму:
                    </span>
                    <b>32 000 грн</b>
                </div>
                <button class="ui-main-btn">
                    Купить всё
                </button>
            </div>
        </div>
        <ProductGallery :product-list="wishProducts">
            <template v-slot:tool-btns="{product}">
                <UiCheckbox v-model="product.checked"/>
            </template>
        </ProductGallery>
    </article>
    <section id="this-popups-list">
    
    </section>
</template>

<script>
	import ProductGallery from "./Products/ProductGallery";
	import {mapGetters, mapActions} from "vuex";
	import UiCheckbox from "./uiComponents/UiCheckbox";
	
	export default {
		components: {UiCheckbox, ProductGallery},
		computed: {
			...mapGetters(['wishProducts']),
		},
		methods: {
			...mapActions(['fetchViewedProducts']),
		},
		async mounted() {
			this.fetchViewedProducts();
		},
	};
</script>

<style lang="scss" scoped>
    @import "public/scss/abstract";
    
    .sort-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 8px 12px;
        border-bottom: 1px solid $color-back-grey;
        
        &__sum-text-block {
            display: flex;
            align-items: center;
            
            gap: 8px;
        }
        
        @include mobile {
            justify-content: center;
            
            border-top: 1px solid $color-back-grey;
            border-bottom: none;
            
            &__tools {
            
            }
            
            &__sum-text-block {
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
            
            &__sum-row {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                
                justify-content: space-between;
                
                padding: 8px 14px;
                background-color: white;
                
                box-shadow: $block-shadow;
                
                z-index: 99;
            }
        }
        
    }

</style>
