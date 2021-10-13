<template>
    <div class="tab-gallery main-column" :style="{'--border-color': getTabColor(currTagId)}">
        <div class="tab-gallery__tabs">
            <div class="tab-gallery__tab"
                 :class="{active: currTagId === -1}"
                 :style="{'--tab-color': getTabColor(-1)}"
                 @click="currTagId = -1;"
            >Все</div>
            <div class="tab-gallery__tab"
                 :class="{active: currTagId === tag.id}"
            
                 v-for="tag in tags"
                 :key="tag.name"
                 :style="{'--tab-color': getTabColor(tag.id)}"
                 @click="currTagId = tag.id"
            >
                {{tag.title}}
            </div>
        </div>
        <div class="tab-gallery__body">
            <ProductGallery class="tab-gallery__w" :product-list="showList" ref="gallery">
            </ProductGallery>
        </div>
    </div>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";
	import Product from "@model/Product";
	import ProductGallery from "@component/Products/ProductGallery";
	
	export default {
		name: "TabGallery",
		components: {ProductGallery},
		data() {
			return {
				mainColor: null,
				colors: [
					'#44b1bb',
					'#e25750',
					'#1a3b7a',
					'#329138',
					'#263238',
					'#913279',
				],
				tags: [],
				currTagId: -1,
				products: []
			}
		},
		computed: {
			...mapGetters(['viewedProducts']),
			showList() {
				return this.getDevShowList();
				// return this.getProdShowList();
			}
		},
		methods: {
			...mapActions(['fetchViewedProducts']),
			getTabColor(tagId) {
				if (tagId >=0) {
					const tag = this.tags.find(tag => tag.id === tagId);
					return this.colors[this.tags.indexOf(tag)];
				} else {
					return this.mainColor;
				}
				
			},
			getDevShowList() {
				return this.showListPreparer(this.viewedProducts);
			},
			getProdShowList() {
				return this.showListPreparer(this.products);
			},
			
			showListPreparer(prodArr) {
				return prodArr
					.filter(el => {
						return this.currTagId === -1 ||
							(el.tag && el.tag.id === this.currTagId);
					});
			},
			
			devGetProducts() {
				this.fetchViewedProducts()
					.then(() => {
						this.viewedProducts.forEach(el => {
							if (el.tag && el.tag.id)
								this.tags.push(el.tag);
						});
						
						
						this.tags = [...new Map(
							this.tags.map(item => {
								return [item['id'], item]
							})
						).values()];
						
						// this.tags = [...new Set(this.tags.map(el => {
						// 	el.name
						// }))];
					});
			},
			prodGetProducts() {
				fetch('/abs/products')
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						this.products = data.map(el => new Product(el));
					})
					.then(() => {
						this.products.forEach(el => {
							if (el.tag && el.tag.id)
								this.tags.push(el.tag);
						});
						
						this.tags = [...new Map(
							this.tags.map(item => {
								return [item['id'], item]
							})
						).values()];
					});
			}
		},
		async mounted() {
			this.mainColor = getComputedStyle(document.querySelector('.tab-gallery'))
				.getPropertyValue('--main-color');
			
			this.devGetProducts();
			// this.prodGetProducts();
		}
	}
</script>

<style lang="scss" scoped>
    .tab-gallery {
        margin-top: 24px;
        
        --main-color: #{$mainSiteColor};
        --border-color: black;
        
        $tabRadius: 8px;
        $borderWidth: 1px;
        
        display: flex;
        flex-direction: column;
        
        &__tabs {
            display: flex;
            
            width: 100%;
            max-width: 1550px;
            
            margin: 0 auto;
            padding: 0 #{$borderWidth + $tabRadius * 2.5};
            
            @include mobile {
                justify-content: center;
                flex-wrap: wrap;
                gap: 16px;
                
                padding: 16px 8px;
            }
        }
        
        &__tab {
            position: relative;
            bottom: -$borderWidth;
            
            display: flex;
            align-items: center;
            
            padding: 8px 12px;
            
            text-transform: capitalize;
            color: white;
            background-color: var(--tab-color);
            
            border: $borderWidth solid transparent;
            border-top-left-radius: $tabRadius;
            border-top-right-radius: $tabRadius;
            
            cursor: pointer;
            @include animAll(.2s);
            clip-path: polygon(
                    #{-$tabRadius} 0,
                    Calc(100% + #{$tabRadius}) 0,
                    Calc(100% + #{$tabRadius}) Calc(100% + 2px),
                    #{-$tabRadius} Calc(100% + 2px)
            );
            
            @include mobile {
                border-radius: $tabRadius;
            }
            
            &.active {
                color: var(--tab-color);
                background-color: white;
                
                border-color: var(--tab-color);
                border-bottom-color: transparent;
                
                @include mobile {
                    border-color: var(--tab-color);
                }
                
                
                &::before,
                &::after {
                    opacity: 1;
                }
                
                &::before {
                    border-bottom-right-radius: $tabRadius;
                    box-shadow: 3px 3px 0 0 white;
                }
                
                &::after {
                    border-bottom-left-radius: $tabRadius;
                    box-shadow: -3px 3px 0 0 white;
                }
                
                z-index: 3;
            }
            
            &::before,
            &::after {
                content: '';
                position: absolute;
                bottom: -$borderWidth;
                
                width: $tabRadius * 2;
                height: $tabRadius * 2;
                
                border: $borderWidth solid var(--tab-color);
                border-top-color: transparent;
                
                opacity: 0;
                z-index: -1;
                
                @include mobile {
                    content: none;
                }
            }
            
            &::before {
                right: 100%;
                border-left-color: transparent;
                border-bottom-right-radius: $tabRadius;
                
                box-shadow: 3px 3px 0 0 var(--tab-color);
            }
            
            &::after {
                left: 100%;
                border-right-color: transparent;
                border-bottom-left-radius: $tabRadius;
                
                box-shadow: -3px 3px 0 0 var(--tab-color);
            }
        }
        
        &__body {
            position: relative;
            width: 100%;
            max-width: 1550px;
            
            margin: 0 auto;
            
            padding: 24px 16px;
            border: $borderWidth solid var(--border-color);
            border-radius: $tabRadius;
            
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
            z-index: 2;
        }
        
        &__w {
            max-width: 1366px;
            margin: auto;
        }
    }

</style>
