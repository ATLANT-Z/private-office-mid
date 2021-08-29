<template>
    <article class="main-column">
        <h1 class="section-header">
            <img class="show-mob section-header__ico" src="@/assets/icons/mail_my_orders_icon.svg" alt="">
            Управление подписками
        </h1>
        <section class="main-body subscrb-body">
            <article class="subscrb-body__column">
                <h4 class="subscrb-body__title">
                    Виды рассылок
                </h4>
                <div class="subscrb-body__list">
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Новости, акции компании
                            </span>
                            <span class="subscrb-label__text">
                                Будьте в курсе всех событий магазина, просматривайте обзоры.
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Информация об акциях, промокодах и скидках
                            </span>
                            <span class="subscrb-label__text">
                                Периодически мы проводим акции со скидками, розыгрышами, промокодами и прочими
                                инструментами, которые могут помочь вам сэкономить на покупке, подобрать подарок себе
                                или близким. Мы обязательно сообщим вам о таких кампаниях, и вы сможете покупать на
                                Розетке по самым лучшим ценам.
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Персональные рекомендации
                            </span>
                            <span class="subscrb-label__text">
                                Ежедневно мы изучаем поведение миллионов наших клиентов. Основываясь на этой информации,
                                мы можем предложить вам товар, который мог бы вас заинтересовать.
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Персональные скидки и предложения
                            </span>
                            <span class="subscrb-label__text">
                                Мы сообщим вам, если у нас появится скидка на товар, которым вы интересовались, товар,
                                который вы добавили в список желаний, или товар, который подобрала наша рекомендационная
                                система.
                            </span>
                        </span>
                    </label>
                </div>
            </article>
            <article class="subscrb-body__column">
                <h4 class="subscrb-body__title">
                    Каналы связи
                </h4>
                <div class="subscrb-body__list">
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Email-письма
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Сообщения в Viber
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                SMS-сообщения
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Уведомления в мобильном приложении
                            </span>
                        </span>
                    </label>
                    <label class="subscrb-label">
                        <input class="ui-checkbox" type="checkbox">
                        <span class="subscrb-label__text-col">
                            <span class="subscrb-label__title">
                                Уведомления в веб-браузере
                            </span>
                        </span>
                    </label>
                </div>
            </article>
        </section>
    </article>
    <section id="this-popups-list">
    
    </section>
</template>

<script>
	export default {
		data() {
			return {
				testVal: null,
			}
		},
		mounted() {
		
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
    @import "public/scss/abstract";
    
    .subscrb-body {
        flex-grow: 1;
        display: flex;
        gap: 36px 54px;
        
        @include mobile {
            flex-direction: column;
        }
        
        padding: 16px 16px 24px;
        
        &__column {
        }
        
        &__title {
            @include fontMid(500);
            margin-bottom: 36px;
        }
        
        &__list {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        @at-root {
            .subscrb-label {
                max-width: 405px;
                display: flex;
                
                &__text-col {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-left: 18px;
                }
                
                &__title {
                
                }
                
                &__text {
                    @include fontCaption();
                }
            }
        }
    }


</style>
