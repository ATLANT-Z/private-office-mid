<template>
    <SvgSprite></SvgSprite>
    <div class="gallery-w">
        <article class="product-gallery" :id="id">
            <ProductCard v-for="product in visibleList"
                         :key="product.id"
                         :product="product">
                <template v-slot:tool-btns="{product}">
                    <slot name="tool-btns" :product="product">
                        <CompareBtn v-model="product.compared" :id="product.id"/>
                    </slot>
                </template>
            </ProductCard>
        </article>
        <h2 class="empty-title" v-if="productListPrepared.length === 0">Список товаров пуст</h2>
        <Pagination :arr-length="productListPrepared.length"
                    :per-page="perPage"
                    v-model="currPage"
                    v-model:chunkNum="addChunksLoaded"
                    :go-to="id"
        />
    </div>
</template>

<script>
	import ProductCard from "@component/Products/ProductCard";
	import CompareBtn from "@component/Products/CompareBtn";
	import Pagination from "@component/layouts/Pagination";
	import axios from "axios";
	import Product from "@model/Product";
	import SvgSprite from "@/tools/svg/SvgSprite";
	
	export default {
		components: {SvgSprite, CompareBtn, Pagination, ProductCard},
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
				currPage: 0,
				addChunksLoaded: 0,
				// productList: []
			}
		},
		computed: {
			productListPrepared() {
				return this.productList.map(el => el).sort((a, b) => {
					if (a.hasProduct && b.hasProduct)
						return 0;
					else if (a.hasProduct)
						return -1;
					else if (b.hasProduct)
						return 1;
				});
			},
			visibleList() {
				return this.productListPrepared.slice(
					(this.currPage - 1) * this.perPage,
					this.currPage * this.perPage + this.perPage * this.addChunksLoaded
				);
			},
		},
		methods: {
			getProdProducts() {
				// let path = window.location.href;
				//
				// if (path.slice(-1) !== '/')
				// 	path += '/';
				//
				// path += 'products';
				//
				// axios.get(path).then((res) => {
				// 	this.productList = res.data.map((el) => {
				// 		return new Product(el);
				// 	});
				// });
			}
		},
		mounted() {
			console.log('ProductGallery mounted');
			// this.getProdProducts();
		}
	};
</script>

<style lang="scss">
    .empty-title {
        width: 100%;
        
        margin: 12px 0 24px;
        text-align: center;
        
        @include fontMidHeader();
    }
    
    .gallery-w {
        @include mobile {
            margin-bottom: 40px;
        }
    }
    
    .product-gallery {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        
        gap: 16px $productGalleryMargin;
        
        @include mobile {
            gap: 0;
        }
    }
</style>
