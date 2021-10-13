<template>
    <article class="main-column">
        <h1 class="section-header">
            <img class="show-mob section-header__ico" src="@/assets/icons/like_my_orders_icon.svg" alt="">Список желаний</h1>
        <div class="sort-panel">
            <div class="ui-list row sort-panel__tools">
                <label class="ui-input-w-row">
                    <input class="ui-checkbox" type="checkbox" v-model="isAllSelected">
                    <span class="ui-caption">Выбрать всё</span>
                </label>
                <label class="ui-input-w-row" @click="deleteSelected">
                    <img class="ui-ico" src="@/assets/icons/delete.svg" alt="">
                    <span class="ui-caption">Удалить</span>
                </label>
            </div>
            <div class="ui-list small row end sort-panel__sum-row">
                <div class="sort-panel__sum-text-block">
                    <span class="ui-caption">{{wishProducts.length}} товаров на сумму:</span>
                    <b>{{totalSum}} грн</b>
                </div>
                <button class="ui-main-btn">Купить всё</button>
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
	import UiCheckbox from "./ui/UiCheckbox";
	
	export default {
		components: {UiCheckbox, ProductGallery},
		data() {
			return {
				isAllSelected: false
			}
		},
		computed: {
			...mapGetters(['wishProducts']),
			totalSum() {
				console.log(this);
				console.log(this.wishProducts);
				//Передаю начальное значение для reduce. А вообще почитай, что он делает.
				return this.wishProducts?.reduce((accumulator, el) => accumulator + el.price, 0);
			}
		},
		methods: {
			...mapActions(['fetchViewedProducts']),
			deleteSelected() {
				this.wishProducts
					.filter(el => el.checked)
					.forEach(el => el.wished = false);
			}
		},
		watch: {
			isAllSelected(val) {
				console.log(this.wishProducts);
				this.wishProducts.forEach(el => el.checked = val);
			}
		},
		async mounted() {
			this.fetchViewedProducts();
		},
	};
</script>

<style lang="scss" scoped>
    .sort-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 8px 12px;
        margin-bottom: 28px;

        border-bottom: 1px solid $color-back-grey;
        
        &__sum-text-block {
            display: flex;
            align-items: center;
            
            gap: 8px;
        }
        
        @include mobile {
            margin-bottom: 0;
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
