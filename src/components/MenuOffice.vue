<template>
    <aside class="menu-orders-wrp">
        <div class="name-orders">
            <router-link class="name-orders-link" to="/">
                <div class="name-orders-img-wrp">
                    <img class="name-orders-img" src="img/son.jpg" alt=""/>
                </div>
                <div>
                    <h3>Name Surname</h3>
                    <p>test@gmail.com</p>
                </div>
            </router-link>
        </div>
        <div class="menu-cab-user">
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link" to="/subscrb">
                    <img class="menu-cab-img" src="icons/mail_my_orders_icon.svg"
                         alt="Управление подписками"/>
                    <p>Управление подписками</p>
                </router-link>
            </div>
            <div class="menu-cab-text-wrp">
                <a class="menu-cab-wrp-link" href="#">
                    <img class="menu-cab-img" src="icons/service_my_orders_icon.svg"
                         alt="Сервис"/>
                    <p>Сервис</p>
                </a>
            </div>
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link" to="/promocodes">
                    <img class="menu-cab-img" src="icons/sale_my_orders_icon.svg"
                         alt="Акции (промокоды)"/>
                    <p>Акции (промокоды)</p>
                </router-link>
            </div>
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link menu-cab-like-pos" to="/review">
                    <div class="menu-cab-like-wrp">
                        <img class="menu-cab-img" src="icons/my-orders-icon.svg"
                             alt="Мои отзывы"/>
                        <p>Мои отзывы</p>
                    </div>
                    <div class="menu-cab-menu-cab">1</div>
                </router-link>
            </div>
            <div class="menu-cab-text-wrp">
                <a class="menu-cab-wrp-link" href="#">
                    <img class="menu-cab-img" src="icons/present_my_orders_icon.svg"
                         alt="Мои бонусы"/>
                    <p>Мои бонусы</p>
                </a>
            </div>
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link" to="/viewed">
                    <img class="menu-cab-img" src="icons/eye_ma_orders_icon.svg"
                         alt="Просмотренные товары"/>
                    <p>Просмотренные товары</p>
                </router-link>
            </div>
            <div class="menu-cab-line"></div>
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link menu-cab-like-pos" to="/wish">
                    <div class="menu-cab-like-wrp">
                        <img class="menu-cab-img" src="icons/like_my_orders_icon.svg"
                             alt="Список желаний"/>
                        <p>Список желаний</p>
                    </div>
                    <div class="menu-cab-menu-cab">1</div>
                </router-link>
            </div>
            <div class="menu-cab-text-wrp">
                <router-link class="menu-cab-wrp-link" to="/orders">
                    <img class="menu-cab-img" src="icons/my-orders-icon.svg"
                         alt="Мои заказы"/>
                    <p>Мои заказы</p>
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script>
	export default {
		props: {},
		methods: {},
		computed: {}
	};
</script>

<style lang="scss">
    @import "public/scss/abstract";
    
    
    .menu-orders-wrp {
        width: 280px;
        min-width: 280px;
        margin-right: 24px;
        
        @include bigMobile() {
            position: absolute;
            right: 100%;
        }
    }
    
    .menu-cab-wrp {
        width: 100%;
        max-width: 1440px;
        padding-top: 16px;
        @extend %pos-cent-marg;
        @extend %pos-cent-flex;
        align-items: flex-start;
        
        @include mobile() {
            padding-top: 0;
        }
    }
    
    .name-orders {
        margin-bottom: 28px;
    }
    
    .name-orders-img {
        width: 46px;
        height: 46px;
        background-color: $color-back-grey;
        border-radius: 50%;
    }
    
    .name-orders-link {
        @extend %pos-left-flex;
        @extend %padding-left-my-orders;
        min-height: 72px;
        box-shadow: $block-shadow;
        font-family: $font-roboto-reg;
        color: $color-text-orders;
        border-radius: $border-radius;
    }
    
    .name-orders-link:hover,
    .name-orders-link.router-link-active {
        color: $color-main;
    }
    
    .name-orders-link > div > h3 {
        @extend %font-weight-400;
        @extend %text-size-my-orders;
        margin-bottom: 8px;
    }
    
    .name-orders-link > div > p {
        font-size: 12px;
        line-height: 16px;
        color: #8a8a8a;
    }
    
    .name-orders-img-wrp {
        @extend %margin-right-icon;
    }
    
    .menu-cab-wrp-link {
        @extend %pos-left-flex;
    }
    
    .menu-cab-like-wrp {
        @extend %pos-left-flex;
    }
    
    .menu-cab-like-pos {
        justify-content: space-between;
    }
    
    .menu-cab-wrp-link > div > p {
        @extend %text-main;
        @extend %text-size-my-orders;
    }
    
    .menu-cab-wrp-link > p {
        @extend %text-main;
        @extend %text-size-my-orders;
    }
    
    .menu-cab-wrp-link:hover,
    .menu-cab-wrp-link.router-link-active {
        color: $color-main;
    }
    
    .menu-cab-img {
        @extend %margin-right-icon;
    }
    
    .menu-cab-text-wrp {
    }
    
    .menu-cab-user {
        padding: 10px 14px;
        box-shadow: $block-shadow;
        border-radius: $border-radius;
        display: flex;
        flex-direction: column-reverse;
        box-sizing: border-box;
    }
    
    .menu-cab-text-wrp + .menu-cab-text-wrp {
        margin-bottom: 24px;
    }
    
    .menu-cab-line {
        padding-top: 10px;
        margin-bottom: 14px;
        border-bottom: $line-grey-col;
    }
    
    .menu-cab-menu-cab {
        min-width: 24px;
        height: 24px;
        padding: 2px 7px;
        @extend %text-main;
        background-color: $color-main;
        border-radius: 34px;
        color: #ffffff;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
    }
</style>
