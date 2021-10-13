<template>
    <article class="pagination" v-show="pageLength > 0" v-if="arrLength">
        <div class="pagination__load-more-btn" @click="showMore">
            <span class="mat-ico">refresh</span>
            Показать ещё
        </div>
        <div class="pagination__nav-row">
            <div class="pagination__arrow mat-ico" :class="{hide:currPage === 1}" @click="prevPage">
                chevron_left
            </div>
            <ul class="pagination__pages">
                <li class="pagination__page" v-for="index in pageLength"
                    :key="index"
                    :class="{
                    	selected:currShowedPage === index,
                    	dots: isDots(index) && !isShow(index)
                    }"
                    v-show="isShow(index) || isDots(index)"
                    @click="pageClick(index)">
                    {{isDots(index) && !isShow(index) ? '...' : index}}
                </li>
            </ul>
            <div class="pagination__arrow mat-ico" :class="{hide:currPage === pageLength}" @click="nextPage">
                chevron_right
            </div>
        </div>
    </article>
    
    <div class="ui-loader" v-else></div>
</template>

<script>
	export default {
		props: {
			goTo: {
				type: [Boolean, String],
				default: false
			},
			perPage: {
				type: Number,
				default: 4
			},
			arrLength: Number,
		},
		data() {
			return {
				innerCurrPage: 0,
				innerCurrChunkNum: 0,
				isMobile: this.computeIsMobile(),
			}
		},
		emits: ['update:modelValue', 'update:chunkNum'],
		computed: {
			pageLength() {
				return Math.ceil(this.arrLength / this.perPage);
			},
			
			pageShowNear() {
				//Сколько цифр показывать рядом с выбранной
				let baseNearPageNumber = 2;
				if (this.isMobile) {
					baseNearPageNumber = 1;
				}
				
				//Считаем динамически сколько сейчас цифр показать
				let accum = 0;
				if (this.currShowedPage <= baseNearPageNumber) {
					//+1 потому что счёт страниц currPage идёт с 1
					accum = baseNearPageNumber + 1 - this.currShowedPage
				} else if ((this.pageLength - this.currShowedPage) <= baseNearPageNumber) {
					accum = baseNearPageNumber - (this.pageLength - this.currShowedPage)
				}
				
				// в сумме минимум 2, максимум 4
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
					
					this.currChunkNum = 0;
					this.$emit('update:modelValue', this.innerCurrPage);
				}
			},
			currChunkNum: {
				get() {
					return this.innerCurrChunkNum;
				},
				set(newVal) {
					if (this.currPage + newVal <= this.pageLength && newVal >= 0) {
						this.innerCurrChunkNum = newVal;
						this.$emit('update:chunkNum', this.innerCurrChunkNum);
					}
				}
			},
			
			currShowedPage() {
				return this.currPage + this.currChunkNum;
			}
		},
		methods: {
			showMore() {
				this.currChunkNum++;
			},
			nextPage() {
				this.pageClick(this.currPage + 1);
			},
			prevPage() {
				this.pageClick(this.currPage - 1);
			},
			pageClick(index) {
				this.currPage = index;
				if (this.goTo) {
					const coords = this.$getCoords(document.getElementById(this.goTo));
					window.scrollTo(0, coords.top - 200);
				}
			},
			
			isShow(index) {
				//Первая и последняя страничка всегда видны. Индекс начинается с 1
				const cond1 = index === 1;
				const cond2 = index === this.pageLength;
				
				//Кол-во страничек, +1 для точек
				const cond3 = Math.abs(this.currShowedPage - index) <= this.pageShowNear;
				
				return cond1 || cond2 || cond3;
			},
			
			isDots(index) {
				return Math.abs(this.currShowedPage - index) === this.pageShowNear + 1;
			},
			
   
			computeIsMobile() {
				return window.matchMedia("(max-width: 800px)").matches ||
					window.matchMedia("(max-height: 600px)").matches;
			},
			resizeHandler() {
				this.isMobile = this.computeIsMobile();
			},
			
			
			resetState() {
				this.currPage = 1;
			},
		},
		watch: {
			arrLength() {
				this.resetState();
			}
		},
		mounted() {
			this.currPage = 1;
			this.currChunkNum = 0;
			
			window.addEventListener("resize", this.resizeHandler);
		},
		unmounted() {
			console.log('Pagination unmounted');
			window.removeEventListener("resize", this.resizeHandler);
		},
	};
</script>

<style lang="scss">
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
            
            &.hide {
                pointer-events: none;
                opacity: 0;
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
                width: min-content;
                @include mobile {
                    margin: 0;
                    padding: 0;
                }
            }
            
            &.selected {
                transform: scale(1.2);
                box-shadow: 1px 1px 6px #00000033;
            }
        }
    }
</style>
