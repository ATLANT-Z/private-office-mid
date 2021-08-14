<template>
    <article class="main-column">
        <h1 class="section-header">
            <img class="show-mob section-header__ico" src="@/assets/icons/eye_ma_orders_icon.svg" alt="">
            Просмотренные товары
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
        </div>
        <div class="gallery-w">
            <ProductGallery :product-list="viewedProducts"></ProductGallery>
        </div>
    </article>
    <section id="this-popups-list">
    
    </section>
</template>

<script>
	import ProductGallery from "./Products/ProductGallery";
	import {mapGetters, mapActions} from "vuex";
	
	export default {
		components: {ProductGallery},
		computed: {
			...mapGetters(['viewedProducts']),
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
