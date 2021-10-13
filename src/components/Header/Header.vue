<template>
    <header class="site-header">
        <section class="site-header__top-row hide-mob">
            <div class="site-header__row-w">
                <router-link :to="{ name: 'tabs'}">
                    <img class="site-header__logo" src="@/assets/img/logo.svg" alt="">
                </router-link>
                <div class="contact-list">
                    <div class="contact-list__item">
                        <img class="contact-list__item-img" src="@/assets/icons/phoneDark.svg" alt="">
                        <span class="contact-list__item-title">0800309988</span>
                    </div>
                    <div class="contact-list__item">
                        <img class="contact-list__item-img" src="@/assets/icons/mapPin.svg" alt="">
                        <span class="contact-list__item-title">Одесса</span>
                    </div>
                </div>
                <nav class="site-header__top-nav">
                    <a href="javascript:void(0);">О нас</a>
                    <a href="javascript:void(0);">Доставка и оплата</a>
                    <a href="javascript:void(0);">Сотрудничество</a>
                    <a href="javascript:void(0);">Монтаж</a>
                    <a href="javascript:void(0);">Контакты</a>
                </nav>
            </div>
        </section>
        <section class="site-header__main-row">
            <div class="site-header__row-w">
                <div class="site-header__menu-block">
                    <HeaderCatalog/>
                    <HeaderMenu/>
                </div>
                <label class="search-block">
                    <img class="search-block__img" src="@/assets/icons/search.svg" alt="">
                    <input class="search-block__input" type="text">
                    <div class="search-block__btn hide-mob">Найти</div>
                </label>
                <div class="lang-block hide-mob">
                    <div class="lang-block__item">Укр</div>
                    <div class="lang-block__item">Рус</div>
                </div>
                <nav class="user-nav">
                    <a class="user-nav__item hide-mob" href="javascript:void(0);" @click="$showId('login-pop')">
                        <SvgIcon icon="userLight" stroke></SvgIcon>
                        <span class="user-nav__item-title">Войти в кабиент</span>
                    </a>
                    <a class="user-nav__item hide-mob" href="javascript:void(0);">
                        <SvgIcon icon="compareLight" stroke></SvgIcon>
                        <span class="user-nav__item-title">Сравнение</span>
                    </a>
                    <a class="user-nav__item" href="javascript:void(0);">
                        <SvgIcon icon="cartLight" stroke></SvgIcon>
                        <span class="user-nav__item-title">Корзина</span>
                    </a>
                </nav>
            </div>
        </section>
    </header>
</template>

<script>
	import HeaderCatalog from "./HeaderCatalog";
	import HeaderMenu from "./HeaderMenu";
	import SvgIcon from "@/tools/svg/SvgIcon";
	
	export default {
		name: "HeaderVue",
		components: {SvgIcon, HeaderMenu, HeaderCatalog}
	}
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/uiComponents";
    
    .site-header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        
        width: 100%;
        
        %headerRow {
            width: 100%;
            
            display: flex;
            justify-content: center;
        }
        
        //Чтоб серая линия была шире 1550, на всю ширину
        &__row-w {
            max-width: 1550px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            padding: 0 16px;
            
            transition: 0s;
            
            @include bigMobile {
                padding: 0 6px;
            }
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
            @extend %headerRow;
            
            background-color: $color-new-grey;
            
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        
        &__menu-block {
            position: relative;
            display: flex;
            align-items: center;
            min-width: 300px;
            margin-right: 4px;
            
            @include bigMobile() {
                min-width: 270px;
            }
            
            @include mobile {
                min-width: auto;
                padding: 8px 0;
            }
        }
        
        @at-root {
            .contact-list {
                display: flex;
                align-items: center;
                
                margin: auto;
                padding: 0 4px;
                
                @include bigMobile {
                    display: none;
                }
                
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
                    padding: 8px 6px;
                }
                
                @include bigMobile {
                    min-width: 160px;
                }
                
                &__img {
                    cursor: pointer;
                    object-fit: contain;
                    
                    @include bigMobile {
                        width: 16px;
                    }
                }
                
                &__input {
                    width: 100%;
                    padding-right: 52px;
                    margin-left: 10px;
                    
                    line-height: 1;
                    
                    @include bigMobile {
                        margin-left: 6px;
                        padding-right: 0;
                    }
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
                    
                    @include bigMobile {
                        display: none;
                    }
                    
                    &:hover {
                        background-color: darken($color-main, 5%);
                    }
                }
            }
            
            .lang-block {
                display: flex;
                align-items: center;
                justify-content: center;
                
                margin: 0 auto;
                padding: 0 4px;
                
                color: white;
                
                @include mobile {
                    margin: 0;
                }
                
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
                
                @include bigMobile {
                    gap: 12px;
                }
                
                &__item {
                    min-width: 64px;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                    @include anim($anim-small-time);
                    
                    &:hover {
                        color: $color-main-light;
                    }
                    
                    @include bigMobile {
                        min-width: 32px;
                    }
                }
                
                &__item-img {
                    width: 18px;
                    object-fit: contain;
                }
                
                &__item-title {
                    width: max-content;
                    @include fontSmall();
                    
                    @include bigMobile {
                        display: none;
                    }
                }
            }
        }
    }


</style>
