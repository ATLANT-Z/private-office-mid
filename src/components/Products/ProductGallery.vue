<template>
    <article class="product-gallery">
        <ProductCard v-for="product in visibleList"
                     :key="product.id"
                     :product="product">
        </ProductCard>
    </article>
    <Pagination :arr-length="productList.length"
                :per-page="perPage"
                v-model="currPage"
                v-model:chunkNum="chunksLoaded"
    />
</template>

<script>
	import ProductCard from "./ProductCard";
	import Pagination from "../layouts/Pagination";
	
	export default {
		components: {Pagination, ProductCard},
		props: {
			productList: Array,
			perPage: {
				type: Number,
				default: 4
			}
		},
		data() {
			return {
				currPage: 1,
				chunksLoaded: 1,
			}
		},
		computed: {
			visibleList() {
				return this.productList.slice(
					(this.currPage - 1) * this.perPage,
					this.currPage * this.perPage + this.perPage * (this.chunksLoaded - 1)
				);
			}
		},
		methods: {}
	};
</script>

<style lang="scss">
    @import "public/scss/abstract";
    
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
