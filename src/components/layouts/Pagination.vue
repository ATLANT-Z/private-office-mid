<template>
    <article class="pagination" v-show="pageLength > 0" v-if="arrLength">
        <div class="pagination__load-more-btn" @click="showMore">
            <span class="mat-ico">
                refresh
            </span>
            Показать ещё
        </div>
        <div class="pagination__nav-row">
            <div class="pagination__arrow mat-ico" v-show="currPage !== 1" @click="prevPage">
                chevron_left
            </div>
            <ul class="pagination__pages">
                <li class="pagination__page" v-for="index in pageLength"
                    :key="index"
                    :class="{selected:currPage === index, dots: isNear(index) && !isShow(index)}"
                    v-show="isShow(index) || isNear(index)"
                    @click="currPage = index">
                    {{pageContent(index)}}
                </li>
            </ul>
            <div class="pagination__arrow mat-ico" v-show="currPage !== pageLength" @click="nextPage">
                chevron_right
            </div>
        </div>
    </article>
    
    <div class="ui-loader" v-else></div>
</template>

<script>
	export default {
		props: {
			modelValue: {
				type: Number,
				default: 1
			},
			chunkNum: {
				type: Number,
				default: 1
			},
			perPage: {
				type: Number,
				default: 4
			},
			arrLength: Number,
		},
		data() {
			return {
				innerCurrChunkNum: 1,
				innerCurrPage: this.modelValue,
				isMobile: this.computeIsMobile(),
			}
		},
		emits: ['update:modelValue', 'pagination', 'showMore', 'update:chunkNum'],
		computed: {
			pageLength() {
				return Math.ceil(this.arrLength / this.perPage);
			},
			
			pageShowNear() {
				let baseNearPageNumber = 0;
				if (this.isMobile) {
					baseNearPageNumber = 1;
				} else
					baseNearPageNumber = 2;
				
				let accum = 0;
				if (this.currPage < baseNearPageNumber + 1) {
					accum = baseNearPageNumber + 1 - this.currPage
				} else if ((this.pageLength - this.currPage) <= baseNearPageNumber) {
					accum = baseNearPageNumber - (this.pageLength - this.currPage)
				}
				
				return baseNearPageNumber + accum;
			},
			
			currPage: {
				get() {
					return this.innerCurrPage;
				},
				set(newVal) {
					if (newVal > this.pageLength) {
						this.innerCurrPage = this.pageLength;
					} else if (newVal < 1) {
						this.innerCurrPage = 1;
					} else {
						this.innerCurrPage = newVal;
					}
					this.currChunkNum = 1;
					
					this.$emit('update:modelValue', this.innerCurrPage);
					this.$emit('pagination');
				}
			},
			currChunkNum: {
				get() {
					return this.innerCurrChunkNum;
				},
				set(newVal) {
					this.innerCurrChunkNum = newVal;
					this.$emit('update:chunkNum', this.innerCurrChunkNum);
				}
			}
		},
		methods: {
			pageContent(index) {
				if (this.isNear(index) && !this.isShow(index))
					return '...';
				else
					return index;
			},
			showMore() {
				this.currChunkNum++;
				
				this.$emit('update:chunkNum', this.currChunkNum);
				this.$emit('showMore');
			},
			nextPage() {
				this.currPage++;
			},
			prevPage() {
				this.currPage--;
			},
			
			isShow(index) {
				const cond1 = index <= 1;
				const cond2 = Math.abs(this.pageLength - index) <= 0;
				
				const cond3 = Math.abs(this.currPage - index) <= this.pageShowNear;
				
				return cond1 || cond2 || cond3;
			},
			
			isNear(index) {
				const pageShowDots = this.pageShowNear + 1;
				
				return Math.abs(this.currPage - index) === pageShowDots;
			},
			
			computeIsMobile() {
				return window.matchMedia("(max-width: 800px)").matches ||
					window.matchMedia("(max-height: 600px)").matches;
			},
			resizeHandler() {
				this.isMobile = this.computeIsMobile();
			},
		},
		mounted() {
			this.currChunkNum = this.chunkNum;
			this.$emit('update:chunkNum', this.innerCurrChunkNum);
			this.$emit('update:modelValue', this.innerCurrPage);
			
			window.addEventListener("resize", this.resizeHandler);
		},
		unmounted() {
			window.removeEventListener("resize", this.resizeHandler);
		},
	};
</script>

<style lang="scss">
    @import "public/scss/abstract";
    
    .pagination {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        color: $color-text-grey;
        
        
        &__load-more-btn {
            display: flex;
            align-items: center;
            
            margin: 32px 0;
            padding: 8px 16px;
            
            @include fontBig();
            
            border: 1px solid currentColor;
            border-radius: 6px;
            cursor: pointer;
            
            @include anim();
            
            @include mobile {
                @include fontMid();
            }
            
            & .mat-ico {
                margin-right: 16px;
            }
            
            &:hover {
                box-shadow: 3px 3px 5px transparentize($color-text-orders, 0.8);
                
                & .mat-ico {
                    transform: rotate(45deg);
                }
            }
        }
        
        &__nav-row {
            display: flex;
            align-items: center;
        }
        
        &__arrow {
            cursor: pointer;
            
            &:hover {
                color: $color-main;
            }
        }
        
        &__pages {
            display: flex;
            align-items: center;
            
            @include fontBig();
        }
        
        &__page {
            display: flex;
            align-items: center;
            justify-content: center;
            
            height: 34px;
            width: 34px;
            margin: 0 6px;
            padding: 6px;
            border-radius: 50%;
            cursor: pointer;
            
            @include mobile {
                margin: 0 2px;
                padding: 4px;
            }
            
            &:hover {
                color: $color-main;
            }
            
            &.dots {
                width: max-content;
                margin: 0;
                padding: 0;
            }
            
            &.selected {
                box-shadow: 1px 1px 6px #00000033;
            }
        }
    }
</style>
