<template>
    <CanBeShown :id="'header-catalog'" :exclude-id="['header-menu']">
        <template v-slot="{isShow, toggleShow}">
            <div class="catalog hide-mob" :class="{active:isShow}" @click.self="toggleShow">
                <div class="catalog__btn" @click="toggleShow">
                    <img src="@/assets/icons/category/catalogLight.svg" alt="">
                    <span class="catalog__btn-text">Каталог товаров</span>
                </div>
                <div class="catalog__list">
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/discount.svg" alt="">
                            <span class="catalog__list-item-title">Акции</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                        <div class="catalog__sub-list">
                            <a href="#">За счёт гендира</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                        </div>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/camera.svg" alt="">
                            <span class="catalog__list-item-title">Камеры</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                        <div class="catalog__sub-list">
                            <a href="#">ip camery</a>
                            <a href="#">wifi</a>
                            <a href="#">3</a>
                        </div>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/videoRecorder.svg" alt="">
                            <span class="catalog__list-item-title">Видеорегистраторы</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/kit.svg" alt="">
                            <span class="catalog__list-item-title">Комплекты</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/ACS.svg" alt="">
                            <span class="catalog__list-item-title">СКУД</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/accumulator.svg" alt="">
                            <span class="catalog__list-item-title">Источники питание</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/lan.svg" alt="">
                            <span class="catalog__list-item-title">Аксессуары</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/camera2.svg" alt="">
                            <span class="catalog__list-item-title">Снятое с производства</span>
                            <img class="catalog__list-item-arrow btn" src="@/assets/icons/rightArrow.svg" alt="">
                        </a>
                    </div>
                    <div class="catalog__list-item">
                        <a class="catalog__list-item-title-w" href="#">
                            <img class="catalog__list-item-img" src="@/assets/icons/category/catalogGreen.svg" alt="">
                            <span class="catalog__list-item-title">Все категории</span>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </CanBeShown>
</template>

<script>
	import CanBeShown from "../logicComponents/CanBeShown";
	import {CatalogData} from "@model/catalogData.ts";
	
	export default {
		name: "HeaderCatalog",
		components: {CanBeShown},
		props: {
			catalogData: {
				type: CatalogData,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
    @import "~_style/uiComponents";

    .catalog {
        padding: 8px 16px;
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        
        &.active {
            &::before {
                content: '';
                @include absoluteGrow(fixed);
                z-index: -1;
                
                backdrop-filter: blur(24px) opacity(1);
                background-color: $uiTrans;
            }
        }
        
        &__btn {
            position: relative;
            display: flex;
            align-items: center;
            padding: 10px 8px;
            
            color: white;
            @include fontMid();
            
            background-color: $color-main;
            border-radius: 6px;
            
            cursor: pointer;
            
            z-index: 3;
            
            &:hover {
                background-color: darken($color-main, 5%);
            }
            
        }
        
        &__btn-text {
            margin-left: 10px;
        }
        
        %listForm {
            width: 100%;
            
            display: flex;
            flex-direction: column;
            
            background-color: white;
            box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            
            @include animAll($anim-small-time);
        }
        
        &__list {
            @extend %listForm;
            
            position: absolute;
            top: 100%;
            left: 0;
            
            visibility: hidden;
            opacity: 0;
            
            @include hasParent('.catalog.active' &) {
                visibility: visible;
                opacity: 1;
            }
            
            z-index: 2;
        }
        
        &__list-item {
            display: flex;
            align-items: center;
            z-index: -1;
        }
        
        @mixin catalogTitleW {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px 8px 8px 16px;
            border-radius: 8px;
            
            &:hover {
                background-color: darken(white, 3%);
            }
        }
        
        &__list-item-title-w {
            @include catalogTitleW();
        }
        
        &__list-item-img {
            width: 28px;
            object-fit: contain;
        }
        
        &__list-item-title {
            margin-left: 10px;
        }
        
        &__list-item-arrow {
            margin-left: auto;
        }
        
        &__sub-list {
            @extend %listForm;
            
            position: absolute;
            top: 0;
            left: 100%;
            height: 100%;
            
            visibility: hidden;
            opacity: 0;
            @include anim($anim-small-time);
            
            
            @include hasParent(".catalog__list-item:hover>" &) {
                visibility: visible;
                opacity: 1;
            }
            
            z-index: -1;
            
            & > * {
                @include catalogTitleW();
            }
        }
    }
</style>
