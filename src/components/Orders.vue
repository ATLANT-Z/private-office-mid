<template>
    <article class="my-orders-wrp">
        <div class="my-orders-icon-mob-wrp">
            <img src="icons/my-orders-icon.svg" alt=""/>
            <h1>Мои заказы</h1>
        </div>
        
        <div id="clickOrder" class="my-orders-list-wrp">
            <CanBeShown>
                <template v-slot="{isShow, toggleShow}">
                    <div class="order-row">
                        <div class="my-orders-list">
                            <div class="my-orders-status"></div>
                            <div class="my-orders-heading">
                                <div class="orders-info">
                                    <p class="orders-info-n">№ 420 805 591 от 18.06.2021</p>
                                    <p class="order-status-text">Выполнен</p>
                                </div>
                            </div>
                            <div class="orders-info">
                                <p class="orders-info-n">Сумма заказа</p>
                                <p class="order-status-text">19999 грн</p>
                            </div>
                            <div class="order-info-img-wrp">
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                            </div>
                            <img class="arrow-my-orders-icon"
                                 src="icons/arrow-my-orders-icon.svg"
                                 alt="стрелка"
                                 :class="{show:isShow}"
                                 @click="toggleShow()"
                            />
                        </div>
                        <div class="menu-cab-line-orders"></div>
                        <div class="orders-drop-down-list" :class="{show:isShow}">
                            <div class="orders-drop-down-list-wrp">
                                <div class="orders-drop-down-inf">
                                    <h2>История заказа</h2>
                                    <h3>Информация о заказе</h3>
                                    <p>ТТН 746301237</p>
                                    <p>Самовывоз из Нова Пошта</p>
                                    <p>Одесса, Отделение №3, Средняя ул., д. 83-А</p>
                                    <p>Анонимус Анонимович</p>
                                    <p>380685184531</p>
                                    <p>test@gmail.com</p>
                                    <button class="ord-putchase-returns">Возврат товара</button>
                                    <button class="btm-ord-warranty-card">Гарантийный талон</button>
                                </div>
                                <div class="ord-opening-win-inf">
                                    <div class="ord-list-pr-over-wrp">
                                        <div>
                                            <p>Товары Green Vision</p>
                                        </div>
                                        <div>
                                            <div class="ord-pr-inf-wp">
                                                <div class="order-wrp-name-ing">
                                                    <div class="order-img-product">
                                                        <img
                                                            src="img/Komplekt_videonablyudeniya_1.png"
                                                            alt="Товар"
                                                        />
                                                    </div>
                                                    <div class="ord-name-product-wrp">
                                                        <p>
                                                            Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="ord-price-wrp-text">
                                                    <div class="ord-name-product-pr">
                                                        <h4>Цена</h4>
                                                        <p>2333 грн</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Количество</h4>
                                                        <p>1</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Сумма</h4>
                                                        <p class="ord-name-product-sale">2133 грн</p>
                                                        <p class="sale-pr-ord">2333 грн</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="ord-inf-main-wrp">
                                                    <div>
                                                        <p>Оплата</p>
                                                        <p>Бонусы</p>
                                                        <p>Доставка</p>
                                                        <p>Итого</p>
                                                    </div>
                                                    <div class="ord-inf-main-pay">
                                                        <p>Оплата при получении товара</p>
                                                        <p>- 199 грн</p>
                                                        <p>50 грн</p>
                                                        <p class="ord-inf-pr-pay-b">2333 грн</p>
                                                    </div>
                                                </div>
                                                <div class="ord-inf-main-btm">
                                                    <button class="btm-ord-warranty-card">
                                                        Оставить отзыв
                                                    </button>
                                                    <button class="ord-inf-repeat-btm">
                                                        Повторить заказ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-cab-line-orders-mob"></div>
                        </div>
                    </div>
                </template>
            </CanBeShown>
            <CanBeShown>
                <template v-slot="{isShow, toggleShow}">
                    <div class="order-row">
                        <div class="my-orders-list">
                            <div class="my-orders-heading">
                                <div class="my-orders-status-expected"></div>
                                <div class="orders-info">
                                    <p class="orders-info-n">№ 420 805 591 от 18.06.2021</p>
                                    <p class="order-status-text">Ожидает</p>
                                </div>
                            </div>
                            <div class="orders-info">
                                <p class="orders-info-n">Сумма заказа</p>
                                <p class="order-status-text">19999 грн</p>
                            </div>
                            <div class="order-info-img-wrp">
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                            </div>
                            <img
                                class="arrow-my-orders-icon"
                                src="icons/arrow-my-orders-icon.svg"
                                alt="стрелка"
                                :class="{show:isShow}"
                                @click="toggleShow()"
                            />
                        </div>
                        
                        <div class="menu-cab-line-orders"></div>
                        <div class="orders-drop-down-list" :class="{show:isShow}">
                            <div class="orders-drop-down-list-wrp">
                                <div class="orders-drop-down-inf">
                                    <h2>История заказа</h2>
                                    <h3>Информация о заказе</h3>
                                    <p>ТТН 746301237</p>
                                    <p>Самовывоз из Нова Пошта</p>
                                    <p>Одесса, Отделение №3, Средняя ул., д. 83-А</p>
                                    <p>Анонимус Анонимович</p>
                                    <p>380685184531</p>
                                    <p>test@gmail.com</p>
                                    <button class="btm-ord-warranty-card">Электронный чек</button>
                                </div>
                                <div class="ord-opening-win-inf">
                                    <div class="ord-list-pr-over-wrp">
                                        <div>
                                            <p>Товары Green Vision</p>
                                        </div>
                                        <div>
                                            <div class="ord-pr-inf-wp">
                                                <div class="order-wrp-name-ing">
                                                    <div class="order-img-product">
                                                        <img
                                                            src="img/Komplekt_videonablyudeniya_1.png"
                                                            alt="Товар"
                                                        />
                                                    </div>
                                                    <div class="ord-name-product-wrp">
                                                        <p>
                                                            Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="ord-price-wrp-text">
                                                    <div class="ord-name-product-pr">
                                                        <h4>Цена</h4>
                                                        <p>2333 грн</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Количество</h4>
                                                        <p>1</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Сумма</h4>
                                                        <p class="ord-name-product-sale">2133 грн</p>
                                                        <p class="sale-pr-ord">2333 грн</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="ord-inf-main-wrp">
                                                    <div>
                                                        <p>Оплата</p>
                                                        <p>Бонусы</p>
                                                        <p>Доставка</p>
                                                        <p>Итого</p>
                                                    </div>
                                                    <div class="ord-inf-main-pay">
                                                        <p>Оплата при получении товара</p>
                                                        <p>- 199 грн</p>
                                                        <p>50 грн</p>
                                                        <p class="ord-inf-pr-pay-b">2333 грн</p>
                                                    </div>
                                                </div>
                                                <div class="ord-inf-main-btm">
                                                    <!-- <button class="btm-ord-warranty-card">
                                                      Оставить отзыв
                                                    </button> -->
                                                    <button class="ord-putchase-returns">
                                                        Возникла проблема
                                                    </button>
                                                    <button class="ord-inf-repeat-btm">
                                                        Повторить заказ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-cab-line-orders-mob"></div>
                        </div>
                    </div>
                </template>
            </CanBeShown>
            <CanBeShown>
                <template v-slot="{isShow, toggleShow}">
                    <div class="order-row">
                        <div class="my-orders-list">
                            <div class="my-orders-heading">
                                <div class="my-orders-status-node"></div>
                                <div class="orders-info">
                                    <p class="orders-info-n">№ 420 805 591 от 18.06.2021</p>
                                    <p class="order-status-text">Не устраивает товар</p>
                                </div>
                            </div>
                            <div class="orders-info">
                                <p class="orders-info-n">Сумма заказа</p>
                                <p class="order-status-text">19999 грн</p>
                            </div>
                            <div class="order-info-img-wrp">
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                                <div class="order-img-product">
                                    <img src="img/Komplekt_videonablyudeniya_1.png" alt="товар"/>
                                </div>
                            </div>
                            <img
                                class="arrow-my-orders-icon"
                                src="icons/arrow-my-orders-icon.svg"
                                alt="стрелка"
                                :class="{show:isShow}"
                                @click="toggleShow()"
                            />
                        </div>
        
                        <div class="menu-cab-line-orders"></div>
                        <div class="orders-drop-down-list" :class="{show:isShow}">
                            <div class="orders-drop-down-list-wrp">
                                <div class="orders-drop-down-inf">
                                    <h2>История заказа</h2>
                                    <h3>Информация о заказе</h3>
                                    <p>ТТН 746301237</p>
                                    <p>Самовывоз из Нова Пошта</p>
                                    <p>Одесса, Отделение №3, Средняя ул., д. 83-А</p>
                                    <p>Анонимус Анонимович</p>
                                    <p>380685184531</p>
                                    <p>test@gmail.com</p>
                                    <!-- <button class="ord-putchase-returns">Возврат товара</button>
                                    <button class="btm-ord-warranty-card">Гарантийный талон</button> -->
                                </div>
                                <div class="ord-opening-win-inf">
                                    <div class="ord-list-pr-over-wrp">
                                        <div>
                                            <p>Товары Green Vision</p>
                                        </div>
                                        <div>
                                            <div class="ord-pr-inf-wp">
                                                <div class="order-wrp-name-ing">
                                                    <div class="order-img-product">
                                                        <img
                                                            src="img/Komplekt_videonablyudeniya_1.png"
                                                            alt="Товар"
                                                        />
                                                    </div>
                                                    <div class="ord-name-product-wrp">
                                                        <p>
                                                            Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="ord-price-wrp-text">
                                                    <div class="ord-name-product-pr">
                                                        <h4>Цена</h4>
                                                        <p>2333 грн</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Количество</h4>
                                                        <p>1</p>
                                                    </div>
                                                    <div class="ord-name-product-pr">
                                                        <h4>Сумма</h4>
                                                        <p class="ord-name-product-sale">2133 грн</p>
                                                        <p class="sale-pr-ord">2333 грн</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ord-list-pr-over-wrp">
                                                <div class="ord-pr-inf-wp">
                                                    <div class="order-wrp-name-ing">
                                                        <div class="order-img-product">
                                                            <img
                                                                src="img/Komplekt_videonablyudeniya_1.png"
                                                                alt="Товар"
                                                            />
                                                        </div>
                                                        <div class="ord-name-product-wrp">
                                                            <p>
                                                                Антивандальная IP камера GV-053-IP-G-DOS20-20 POE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="ord-price-wrp-text">
                                                        <div class="ord-name-product-pr">
                                                            <h4>Цена</h4>
                                                            <p>2333 грн</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Количество</h4>
                                                            <p>1</p>
                                                        </div>
                                                        <div class="ord-name-product-pr">
                                                            <h4>Сумма</h4>
                                                            <p>2133 грн</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="ord-inf-main-wrp">
                                                    <div>
                                                        <p>Оплата</p>
                                                        <p>Бонусы</p>
                                                        <p>Доставка</p>
                                                        <p>Итого</p>
                                                    </div>
                                                    <div class="ord-inf-main-pay">
                                                        <p>Оплата при получении товара</p>
                                                        <p>- 199 грн</p>
                                                        <p>50 грн</p>
                                                        <p class="ord-inf-pr-pay-b">2333 грн</p>
                                                    </div>
                                                </div>
                                                <div class="ord-inf-main-btm">
                                                    <button class="btm-ord-warranty-card">
                                                        Оставить отзыв
                                                    </button>
                                                    <!-- <button class="ord-inf-repeat-btm">
                                                      Повторить заказ
                                                    </button> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-cab-line-orders-mob"></div>
                        </div>
                    </div>
                </template>
            </CanBeShown>
        </div>
    </article>
</template>

<script>
	
	import CanBeShown from "./logicComponents/CanBeShown";
	
	export default {
		components: {CanBeShown},
		data() {
			return {
				testVal: null,
			}
		},
		async mounted() {
		
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
    @import "public/scss/abstract";
    
    .my-orders-wrp {
        padding-top: 10px;
        font-family: $font-roboto-reg;
        color: $color-text-orders;
    }
    
    .my-orders-list-wrp {
        width: 1107px;
        padding: 24px 14px;
        position: relative;
        box-shadow: $block-shadow;
        border-radius: $border-radius;
        box-sizing: border-box;
    }
    
    .my-orders-list {
        @extend %disp-flex;
        align-items: center;
    }
    
    .my-orders-status {
        position: absolute;
        width: 10px;
        height: 46px;
        left: 16px;
        background-color: $color-main;
        border-radius: 34px;
    }
    
    .my-orders-status-node {
        position: absolute;
        width: 10px;
        height: 46px;
        left: 16px;
        background-color: $color-border-grey;
        border-radius: 34px;
    }
    
    .my-orders-status-expected {
        position: absolute;
        width: 10px;
        height: 46px;
        left: 16px;
        background-color: $color-status-expected;
        border-radius: 34px;
    }
    
    .my-orders-heading {
        padding-left: 26px;
        @extend %position-orders-inf;
    }
    
    .my-orders-wrp > h1 {
        margin-bottom: 24px;
    }
    
    .orders-info {
        @extend %text-size-my-orders;
    }
    
    .orders-info-n {
        // padding-left: 26px;
        margin-bottom: 8px;
    }
    
    .order-status-text {
        font-weight: 600;
    }
    
    .order-info-img-wrp {
        padding-right: 43px;
        @extend %disp-flex;
        margin-left: auto;
    }
    
    .arrow-my-orders-icon {
        position: absolute;
        right: 15px;
        transform: rotate(0deg);
        cursor: pointer;
        transition: 0.6s;
        
        &.show {
            transform: rotate(180deg);
        }
    }
    
    .menu-cab-line-orders {
        border-bottom: $border-grey;
        margin-bottom: 9px;
    }
    
    .menu-cab-line-orders-mob {
        padding-top: 15px;
        border-bottom: $border-grey;
        margin-bottom: 9px;
    }
    
    .order-img-product {
        max-width: 76px;
        width: 100%;
        height: 76px;
    }
    
    // .order-wrp-name-ing > .order-img-product {
    //   margin-right: 12px;
    // }
    
    .ord-price-wrp-text {
        max-width: 300px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .orders-drop-down-list {
        max-height: 0;
        // display: flex;
        transition: 0.6s;
        overflow: hidden;
        overflow-y: auto;
        
        &.show {
            max-height: 1600px;
        }
    }
    
    .orders-drop-down-list-wrp {
        display: flex;
    }
    
    .ord-list-pr-over-wrp > div > p {
        margin-bottom: 29px;
        color: $color-text-grey;
    }
    
    .orders-drop-down-inf {
        @extend %position-orders-inf;
        flex-direction: column;
    }
    
    .orders-drop-down-inf > h2,
    .orders-drop-down-inf > h3,
    .orders-drop-down-inf > p {
        margin-bottom: 24px;
        letter-spacing: normal;
    }
    
    .orders-drop-down-inf > p {
        font-size: 16px;
    }
    
    .orders-drop-down-inf > h2 {
        color: $color-main;
        font-size: 20px;
    }
    
    .orders-drop-down-inf > h3 {
        color: $color-text-grey;
        font-size: 16px;
    }
    
    .ord-pr-inf-wp {
        @extend %disp-flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .ord-putchase-returns {
        margin-bottom: 24px;
        border: 1px solid $color-red-btm;
        color: $color-red-btm;
        @extend %btm-ord-without-back;
    }
    
    .btm-ord-warranty-card {
        border: 1px solid $color-main;
        color: $color-main;
        @extend %btm-ord-without-back;
    }
    
    .ord-name-product-wrp {
        max-width: 210px;
        width: 100%;
        padding-left: 12px;
    }
    
    .ord-name-product-pr {
        position: relative;
        color: $color-text-orders;
        @extend %text-centr;
    }
    
    .ord-name-product-pr > h4 {
        margin-bottom: 12px;
        font-size: 12px;
        color: $color-text-orders;
        font-weight: 400;
    }
    
    .ord-name-product-pr > p {
        font-size: 16px;
        font-weight: 600;
    }
    
    .ord-opening-win-inf {
        width: 100%;
    }
    
    .ord-quantity-product-pr {
        @extend %text-centr;
    }
    
    div .sale-pr-ord {
        position: absolute;
        font-size: 12px;
        color: $color-text-grey;
        position: absolute;
        font-weight: 400;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, 0);
        text-decoration: line-through;
    }
    
    div .ord-name-product-sale {
        color: $color-red-btm;
    }
    
    .ord-inf-main-wrp {
        padding-top: 33px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }
    
    .ord-inf-main-pay {
        text-align: right;
    }
    
    .ord-inf-main-wrp > div > p,
    .ord-inf-main-pay > div > p {
        margin-bottom: 20px;
        font-size: 16px;
    }
    
    .ord-inf-main-wrp > div > p.ord-inf-pr-pay-b {
        font-size: 20px;
        font-weight: 600;
    }
    
    .ord-inf-main-btm {
        display: flex;
    }
    
    .ord-inf-main-btm > .ord-putchase-returns {
        margin-bottom: 0;
    }
    
    .ord-inf-repeat-btm {
        margin-right: 0;
        margin-left: auto;
        @include btn-inp-form;
    }
    
    .ord-inf-repeat-btm:hover {
        background-color: $color-main-hov;
    }
    
    .order-row-wrp {
        padding-top: 10px;
        display: flex;
    }
    
    .my-orders-icon-mob-wrp {
        @include fontHeaderPage();
        color: #232536;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }
    
    .my-orders-icon-mob-wrp > img {
        margin-right: 22px;
        display: none;
    }
    
    .order-wrp-name-ing {
        display: flex;
        align-items: center;
    }
    
    //мобильная версия
    
    @media (max-width: 1427px) {
        .my-orders-list-wrp {
            width: 1000px;
        }
        .my-orders-heading {
            max-width: 420px;
        }
    }
    
    @media (max-width: 1327px) {
        .my-orders-list-wrp {
            width: 950px;
        }
        .my-orders-heading {
            max-width: 375px;
        }
    }
    
    @media (max-width: 1285px) {
        .my-orders-list-wrp {
            width: 900px;
        }
        .my-orders-heading {
            max-width: 315px;
        }
    }
    
    @media (max-width: 1220px) {
        .menu-orders-wrp {
            // display: none;
        }
        .my-orders-wrp {
            // padding: 0;
        }
        .my-orders-list {
            flex-direction: column;
            align-items: flex-start;
        }
        .order-info-img-wrp {
            margin-left: 0;
        }
        .order-info-img-wrp {
            padding-left: 26px;
        }
        .orders-info {
            padding-left: 26px;
        }
        .my-orders-heading {
            padding-left: 0;
        }
        .my-orders-list-wrp {
            width: 344px;
        }
        .my-orders-status {
            height: 160px;
        }
        .my-orders-status-expected {
            height: 160px;
        }
        .my-orders-status-node {
            height: 160px;
        }
        .orders-drop-down-list-wrp {
            flex-direction: column;
        }
        .btm-ord-warranty-card {
            margin-bottom: 24px;
        }
        .my-orders-wrp > .my-orders-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .ord-pr-inf-wp {
            flex-direction: column;
        }
        .ord-inf-main-btm {
            margin-bottom: 20px;
            display: block;
            text-align: center;
        }
        .ord-inf-repeat-btm {
            margin-left: auto;
            margin-right: auto;
        }
        .my-orders-icon-mob-wrp > img {
            display: block;
        }
        .ord-inf-main-btm > .ord-putchase-returns {
            margin-bottom: 16px;
        }
        .ord-inf-repeat-btm {
            width: 203px;
        }
        .menu-cab-line-orders-mob {
            padding-top: 0;
        }
    }
    
    @media (max-width: 671px) {
        .my-orders-wrp {
            padding: 10px 15px;
        }
        .menu-orders-wrp {
            display: none;
        }
    }

</style>
