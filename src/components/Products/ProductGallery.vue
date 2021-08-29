<template>
    <div class="gallery-w">
        <article class="product-gallery" :id="id">
            <ProductCard v-for="product in visibleList"
                         :key="product.id"
                         :product="product">
                <template v-slot:tool-btns="{product}">
                    <slot name="tool-btns" :product="product">
                        <CompareBtn v-model="product.compared" @click="compareClick(product)"/>
                    </slot>
                </template>
            </ProductCard>
        </article>
        <h2 class="empty-title" v-if="productListInner.length === 0">
            Список пуст
        </h2>
        <Pagination :arr-length="productListInner.length"
                    :per-page="perPage"
                    v-model="currPage"
                    v-model:chunkNum="chunksLoaded"
                    :go-to-top="true"
        />
    </div>
</template>

<script>
	import ProductCard from "./ProductCard";
	import Pagination from "../layouts/Pagination";
	import CompareBtn from "./CompareBtn";
	import Product from "../../models/Product";
	
	export default {
        // eslint-disable-next-line vue/no-unused-components
		components: {CompareBtn, Pagination, ProductCard},
		props: {
			productList: Array,
			perPage: {
				type: Number,
				default: 8
			},
		},
		data() {
			return {
				id: Math.random().toString(36).substr(2, 9),
				currPage: 1,
				chunksLoaded: 1,
				// productListInner: []
			}
		},
		computed: {
			productListInner() {
				return this.productList;
			},
			visibleList() {
				return this.productListInner.slice(
					(this.currPage - 1) * this.perPage,
					this.currPage * this.perPage + this.perPage * (this.chunksLoaded - 1)
				);
			},
		},
		methods: {
			compareClick(product) {
				if (!product.compared) {
					this.addCompare(product);
				} else {
					this.removeCompare(product);
				}
			},
			addCompare(product) {
				this.axios.post("/comparison/add", {id: product.id},
					{
						headers: {
							'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
						}
					})
					.then((res) => {
						console.log(res);
						const data = res.data;
						
						if (data.success === 1) {
							document.querySelector('.compare-counter-wrapper .counter').innerHTML = data.count;
							document.querySelector('.compare-counter-wrapper').classList.add('show');
						}
					});
			},
			removeCompare(product) {
				this.axios.post("/comparison/clear", {id: product.id},
					{
						headers: {
							'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
						}
					})
					.then((res) => {
						console.log(res);
						const data = res.data;
						
						if (data.success === 1) {
							if (data.count === 0) {
								console.log(data.count);
								
								document.querySelector('.compare-counter-wrapper').classList.remove('show');
								document.querySelector('.compare-counter-wrapper .сounter').innerHTML = 0;
							} else {
								console.log(data.count);
								
								document.querySelector('.compare-counter-wrapper .сounter').innerHTML = data.count;
							}
						}
					});
			}
		},
		mounted() {
			console.log('ProductGallery mounted');
			//
			// fetch('/install-odessa/products')
			// 	.then((res) => {
			// 		return res.json();
			// 	})
			// 	.then((data) => {
			// 		this.productListInner = data.map(el => new Product(el));
			// 	})
		}
	};
</script>

<style lang="scss">
    @import "public/scss/style";
    
    .empty-title {
        width: 100%;
        
        margin: 12px 0 24px;
        text-align: center;
        
        @include fontMidHeader();
    }
    
    .gallery-w {
        margin-top: 28px;
        
        @include mobile {
            margin-top: 0;
            margin-bottom: 40px;
        }
    }
    
    .product-gallery {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        margin-left: -16px;
        
        @include mobile {
            margin-left: 0px;
        }
    }
</style>
