<template>
    <header class="site-header">
        <section class="site-header__top-row">
            <img class="site-header__logo" src="img/logo.svg" alt="">
            <div class="contact-list">
                <div class="contact-list__item">
                    <img class="contact-list__item-img" src="icons/phoneDark.svg" alt="">
                    <span class="contact-list__item-title">0800309988</span>
                </div>
                <div class="contact-list__item">
                    <img class="contact-list__item-img" src="icons/mapPin.svg" alt="">
                    <span class="contact-list__item-title">Одесса</span>
                </div>
            </div>
            <nav class="site-header__top-nav">
                <a href="javascript:void(0);">
                    О нас
                </a>
                <a href="javascript:void(0);">
                    Доставка и оплата
                </a>
                <a href="javascript:void(0);">
                    Сотрудничество
                </a>
                <a href="javascript:void(0);">
                    Монтаж
                </a>
                <a href="javascript:void(0);">
                    Контакты
                </a>
            </nav>
        </section>
        <section class="site-header__main-row">
            <div class="site-header__main-row-w">
                <div class="site-header__menu-block">
                    <CanBeShown>
                        <template v-slot="{isShow, toggleShow}">
                            <div class="catalog" :class="{active:isShow}" @click.self="toggleShow">
                                <div class="catalog__btn" @click="toggleShow">
                                    <img src="icons/category/catalogLight.svg" alt="">
                                    <span class="catalog__btn-text">
                                        Каталог товаров
                                    </span>
                                </div>
                                <div class="catalog__list">
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/discount.svg"
                                                 alt="">
                                            <span class="catalog__list-item-title">
                                                Акции
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                        <div class="catalog__sub-list">
                                            <a href="#">
                                                IP Камеры
                                            </a>
                                            <a href="#">
                                                Wi-Fi Камеры
                                            </a>
                                            <a href="#">
                                                Гибридные камеры
                                            </a>
                                        </div>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/camera.svg" alt="">
                                            <span class="catalog__list-item-title">
                                                Камеры
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                        <!--                            <div class="catalog__sub-list">-->
                                        <!--                                <a href="#">-->
                                        <!--                                    IP Камеры-->
                                        <!--                                </a>-->
                                        <!--                                <a href="#">-->
                                        <!--                                    Wi-Fi Камеры-->
                                        <!--                                </a>-->
                                        <!--                                <a href="#">-->
                                        <!--                                    Гибридные камеры-->
                                        <!--                                </a>-->
                                        <!--                            </div>-->
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/videoRecorder.svg"
                                                 alt="">
                                            <span class="catalog__list-item-title">
                                                Видеорегистраторы
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                        <!--                            <div class="catalog__sub-list">-->
                                        <!--                                <a href="#">-->
                                        <!--                                    IP Камеры-->
                                        <!--                                </a>-->
                                        <!--                                <a href="#">-->
                                        <!--                                    Wi-Fi Камеры-->
                                        <!--                                </a>-->
                                        <!--                                <a href="#">-->
                                        <!--                                    Гибридные камеры-->
                                        <!--                                </a>-->
                                        <!--                            </div>-->
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/kit.svg" alt="">
                                            <span class="catalog__list-item-title">
                                                Комплекты
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/ACS.svg" alt="">
                                            <span class="catalog__list-item-title">
                                                СКУД
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/accumulator.svg"
                                                 alt="">
                                            <span class="catalog__list-item-title">
                                                Источники питания
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/lan.svg" alt="">
                                            <span class="catalog__list-item-title">
                                                Аксессуары
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/camera2.svg"
                                                 alt="">
                                            <span class="catalog__list-item-title">
                                                Снятое с производства
                                            </span>
                                            <img class="catalog__list-item-arrow" src="icons/rightArrow.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="catalog__list-item">
                                        <a class="catalog__list-item-title-w" href="#">
                                            <img class="catalog__list-item-img" src="icons/category/catalogGreen.svg"
                                                 alt="">
                                            <span class="catalog__list-item-title">
                                                Все категории
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </CanBeShown>
                    <CanBeShown>
                        <template v-slot="{isShow, toggleShow}">
                            <div class="header-menu">
                                <div class="header-menu__btn" :class="{active:isShow}" @click="toggleShow">
                                    <span></span>
                                </div>
                            </div>
                        </template>
                    </CanBeShown>
                </div>
                <label class="search-block">
                    <img class="search-block__img" src="icons/search.svg" alt="">
                    <input class="search-block__input" type="text">
                    <div class="search-block__btn">
                        Найти
                    </div>
                </label>
                <div class="lang-block">
                    <div class="lang-block__item">
                        Укр
                    </div>
                    <div class="lang-block__item">
                        Рус
                    </div>
                </div>
                <nav class="user-nav">
                    <a class="user-nav__item" href="javascript:void(0);" @click="$root.showId('login-pop')">
                        <img class="user-nav__item-img" src="icons/userLight.svg" alt="">
                        <span class="user-nav__item-title">
                            Войти в кабинет
                        </span>
                    </a>
                    <a class="user-nav__item" href="javascript:void(0);">
                        <img class="user-nav__item-img" src="icons/compareLight.svg" alt="">
                        <span class="user-nav__item-title">
                            Сравнение
                        </span>
                    </a>
                    <a class="user-nav__item" href="javascript:void(0);">
                        <img class="user-nav__item-img" src="icons/shopCartLight.svg" alt="">
                        <span class="user-nav__item-title">
                            Корзина
                        </span>
                    </a>
                </nav>
            </div>
        </section>
    </header>
</template>

<script>
	import CanBeShown from "./logicComponents/CanBeShown";
	
	export default {
		name: "HeaderVue",
		components: {CanBeShown}
	}
</script>

<style lang="scss" scoped>
    @import "public/scss/abstract";
    @import "public/scss/uiComponents";
    
    .site-header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        %headerRow {
            max-width: 1550px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            padding: 0 16px;
            
            transition: 0s;
        }
        
        &__top-row {
            @extend %headerRow;
            height: 32px;
            
            @include fontCaption();
            color: $color-new-grey;
            
            background-color: white;
        }
        
        &__logo {
            max-width: 160px;
            padding: 0 16px;
        }
        
        &__top-nav {
            display: flex;
            gap: 24px;
            
            margin-left: auto;
            padding: 0 4px;
            
            @include smallScreen {
                gap: 16px;
            }
        }
        
        &__main-row {
            width: 100%;
            display: flex;
            justify-content: center;
            
            background-color: $color-new-grey;
            
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        
        //Чтоб серая линия была шире 1550, на всю ширину
        &__main-row-w {
            @extend %headerRow;
        }
        
        &__menu-block {
            position: relative;
            display: flex;
            align-items: center;
            min-width: 300px;
            margin-right: 4px;
        }
        
        @at-root {
            .contact-list {
                display: flex;
                align-items: center;
                
                margin: auto;
                padding: 0 4px;
                
                &__item {
                    display: flex;
                    align-items: center;
                    min-width: 130px;
                    
                    cursor: pointer;
                    
                    &:hover {
                        color: $color-main;
                    }
                }
                
                &__item-img {
                    width: 20px;
                    object-fit: contain;
                }
                
                &__item-title {
                    margin-left: 10px;
                }
            }
            
            .catalog {
                padding: 8px 16px;
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                
                &.active {
                    &::before {
                        content: '';
                        @include absoluteGrow(fixed);
                        z-index: -1;
                        
                        backdrop-filter: blur(24px) opacity(0);
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
            
            .header-menu {
                display: flex;
                align-items: center;
                align-self: stretch;
                
                margin-left: auto;
                padding: 0 6px;
                
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                border-right: 1px solid rgba(255, 255, 255, 0.3);
                
                &__btn {
                    @include addClickArea(12px);
                    
                    $rWidth: 24px;
                    $rHeight: 2px;
                    $pad: 6px;
                    $btnColor: white;
                    $ownPad: 10px;
                    
                    
                    width: $rWidth + $ownPad * 2;
                    height: $rHeight * 3 + $pad * 2 + $ownPad * 2;
                    padding: $ownPad;
                    
                    display: block;
                    background-color: $color-new-grey;
                    border-radius: 6px;
                    cursor: pointer;
                    
                    @include animAll;
                    
                    
                    &:hover {
                        background-color: transparentize(white, 0.8);
                    }
                    
                    & > * {
                        position: absolute;
                        display: inline-flex;
                        width: $rWidth;
                        height: $rHeight;
                        
                        background-color: $btnColor;
                        
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        
                        &::before,
                        &::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            
                            width: $rWidth;
                            height: $rHeight;
                            
                            background-color: $btnColor;
                        }
                        
                        &::before {
                            top: calc(-100% - #{$pad});
                        }
                        
                        &::after {
                            top: calc(100% + #{$pad});
                        }
                        
                    }
                    
                    &.active {
                        & > * {
                            background-color: transparent;
                            
                            &::before,
                            &::after {
                                top: 50%;
                                left: 50%;
                                
                                width: $rWidth + 2px;
                            }
                            
                            &::before {
                                transform: translate(-50%, -50%) rotate(45deg);
                                transform-origin: center;
                            }
                            
                            &::after {
                                transform: translate(-50%, -50%) rotate(-45deg);
                            }
                        }
                    }
                }
            }
            
            .search-block {
                position: relative;
                
                width: 100%;
                max-width: 700px;
                min-width: 200px;
                
                display: flex;
                align-items: center;
                
                margin: 0 4px;
                padding: 10px;
                
                color: $color-new-grey;
                background-color: white;
                border-radius: 6px;
                
                @include smallScreen {
                    padding: 8px;
                }
                
                &__img {
                    cursor: pointer;
                }
                
                &__input {
                    width: 80%;
                    margin-left: 10px;
                }
                
                &__btn {
                    position: absolute;
                    top: 0;
                    right: 0;
                    
                    height: 100%;
                    display: flex;
                    align-items: center;
                    
                    padding: 0 16px;
                    
                    color: white;
                    background-color: $color-main;
                    border-radius: 6px;
                    
                    cursor: pointer;
                    
                    @include smallScreen {
                        padding: 0 8px;
                    }
                    
                    &:hover {
                        background-color: darken($color-main, 5%);
                    }
                }
            }
            
            .lang-block {
                display: flex;
                justify-content: center;
                
                margin: 0 auto;
                padding: 0 4px;
                
                color: white;
                
                &__item {
                    position: relative;
                    padding: 0 8px;
                    
                    @include fontCaption();
                    cursor: pointer;
                    
                    &.selected,
                    &:hover {
                        color: $color-main-light;
                    }
                    
                    & + & {
                        
                        &:before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 50%;
                            
                            height: 24px;
                            width: 1px;
                            background-color: white;
                            
                            transform: translateY(-50%);
                        }
                    }
                }
            }
            
            .user-nav {
                display: flex;
                align-items: center;
                gap: 32px;
                
                margin-left: auto;
                padding: 0 4px;
                
                color: white;
                
                &__item {
                    min-width: 64px;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                    @include anim($anim-small-time);
                    
                    &:hover {
                        color: $color-main-light;
                    }
                }
                
                &__item-img {
                    width: 18px;
                    object-fit: contain;
                }
                
                &__item-title {
                    width: max-content;
                    @include fontSmall();
                }
            }
        }
    }


</style>
