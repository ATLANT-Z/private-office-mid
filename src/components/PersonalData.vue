<template>
    <article class="main-column">
        <h1 class="section-header hide-mob">Личные данные</h1>
        <div class="main-body private-info">
            <section class="private-info__section">
                <div class="private-info__header">
                    <span class="ui-ico">
                        <img src="icons/person.svg" alt="">
                    </span>
                    <h5 class="private-info__header-text">
                        Личные данные
                    </h5>
                    <button class="private-info__edit-btn to-ico-mob ui-second-btn"
                            style="background-image: url(/icons/edit.svg);"
                            v-on:click='$root.showId("edit-person-info",false)'>
                        Редактировать
                    </button>
                </div>
                <div class="private-info__body">
                    <section class="private-info__body-row">
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Фамилия</span>
                            <span class="private-info__data">Анонов</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Имя</span>
                            <span class="private-info__data">Аноним</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Отчество</span>
                            <span class="private-info__data">Анонимович</span>
                        </div>
                    </section>
                    <section class="private-info__body-row">
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Дата рождения</span>
                            <span class="private-info__data">25 декабря 1994</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Пол</span>
                            <span class="private-info__data">Мужчина</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Язык</span>
                            <span class="private-info__data">Русский</span>
                        </div>
                    </section>
                    <section class="private-info__body-row">
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Статус</span>
                            <span class="private-info__data">Физическое лицо-предприниматель</span>
                        </div>
                    </section>
                </div>
                <form class="edit-info" method="" action="" id="edit-person-info" data-showable>
                    <div class="edit-info__header">
                        <span class="ui-ico">
                            <img src="icons/person.svg" alt="">
                        </span>
                        <h5 class="edit-info__header-text">
                            Личные данные
                        </h5>
                    </div>
                    <div class="edit-info__body">
                        <section class="edit-info__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Фамилия</span>
                                <UiTextInput placeholder="Анонов"/>
                            </label>
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Имя</span>
                                <UiTextInput placeholder="Анон"/>
                            </label>
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Отчество</span>
                                <UiTextInput placeholder="Анонимович"/>
                            </label>
                        </section>
                        <section class="edit-info__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Дата рождения</span>
                                <input class="ui-input-date" type="date" name="date">
                            </label>
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Пол</span>
                                <UiSelect placeholder="Мужской" :values="['Мужской', 'Женский']"/>
                            </label>
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Язык</span>
                                <UiSelect placeholder="Русский" :values="['Русский', 'Украинский','Английский']"/>
                            </label>
                        </section>
                        <section class="edit-info__body-row">
                            <div class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Статус</span>
                                <div class="ui-radio-group">
                                    <label class="ui-radio-w">
                                        <input class="ui-radio" name="status" type="radio">
                                        <span class="ui-radio-cap">
                                            Физическое лицо-предприниматель
                                        </span>
                                    </label>
                                    <label class="ui-radio-w">
                                        <input class="ui-radio" name="status" type="radio">
                                        <span class="ui-radio-cap">
                                            Физическое лицо
                                        </span>
                                    </label>
                                    <label class="ui-radio-w">
                                        <input class="ui-radio" name="status" type="radio">
                                        <span class="ui-radio-cap">
                                            Юридическое лицо
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="edit-info__footer">
                        <button class="ui-main-btn">
                            Сохранить
                        </button>
                        <button class="ui-third-btn" @click.prevent="$root.hideShowable($event)">
                            Отмена
                        </button>
                    </div>
                </form>
            </section>
            <section class="private-info__section">
                <div class="private-info__header">
                    <span class="ui-ico">
                        <img src="icons/mail.svg" alt="">
                    </span>
                    <h5 class="private-info__header-text">
                        Контакты
                    </h5>
                    <button class="private-info__edit-btn to-ico-mob ui-second-btn"
                            style="background-image: url(/icons/edit.svg);"
                            @click="$root.showId('edit-contact-info',false)">
                        Редактировать
                    </button>
                </div>
                <div class="private-info__body">
                    <div class="private-info__body-row">
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Подтвержденный телефон</span>
                            <span class="private-info__data">+38 093 000 00 00</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Дополнительный телефон</span>
                            <span class="private-info__data">+38 068 000 00 00</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Электронная почта</span>
                            <span class="private-info__data">test@gmail.com</span>
                        </div>
                    </div>
                </div>
                <form class="edit-info" method="" action="" id="edit-contact-info" data-showable>
                    <div class="edit-info__header">
                        <span class="ui-ico">
                            <img src="icons/mail.svg" alt="">
                        </span>
                        <h5 class="edit-info__header-text">
                            Контакты
                        </h5>
                    </div>
                    <div class="edit-info__body">
                        <section class="edit-info__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Подтверждённые номер</span>
                                <UiTelInput startValue="+380 68 000 00 00"/>
                            </label>
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Электронная почта</span>
                                <UiEmailInput placeholder="test@gmail.com"/>
                            </label>
                        </section>
                        <section class="edit-info__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Дополнительный номер</span>
                                <UiTelInput startValue="+380 68 000 00 00"/>
                            </label>
                        </section>
                        <section class="edit-info__body-row">
                            <div class="ui-main-btn"
                                 @click="$root.showId('confirm-number-pop')">
                                Подтвердить номер
                            </div>
                        </section>
                    </div>
                    <div class="edit-info__footer">
                        <button class="ui-main-btn" disabled>
                            Сохранить
                        </button>
                        <button class="ui-third-btn" @click.prevent="$root.hideShowable($event)">
                            Отмена
                        </button>
                    </div>
                </form>
            </section>
            <section class="private-info__section">
                <div class="private-info__header">
                    <span class="ui-ico">
                        <img src="icons/car.svg" alt="">
                    </span>
                    <h5 class="private-info__header-text">
                        Адрес доставки
                    </h5>
                    <button class="private-info__edit-btn to-ico-mob ui-second-btn"
                            style="background-image: url(/icons/edit.svg);"
                            @click="$root.showId('edit-delivery-info', false)">
                        Редактировать
                    </button>
                </div>
                <div class="private-info__body">
                    <div class="private-info__body-row">
                        <div class="ui-input-w">
                            <span class="ui-caption">Адрес №1</span>
                            <span class="private-info__data">Одесса, Отделение №3, Средняя ул., д. 83-А</span>
                        </div>
                    </div>
                    <div class="private-info__body-row">
                        <div class="ui-input-w">
                            <span class="ui-caption">Адрес №2</span>
                            <span class="private-info__data">Одесса, Отделение №3, Средняя ул., д. 83-А</span>
                        </div>
                    </div>
                </div>
                <form class="edit-delivery edit-info" method="" action="" id="edit-delivery-info" data-showable>
                    <div class="edit-info__header">
                        <span class="ui-ico">
                            <img src="icons/car.svg" alt="">
                        </span>
                        <h5 class="edit-info__header-text">
                            Адрес доставки
                        </h5>
                    </div>
                    <div class="edit-info__body">
                        <section class="edit-info__body-row">
                            <label class="ui-input-w">
                                <span class="ui-caption">Город</span>
                                <UiTextInput placeholder="Одесса"/>
                            </label>
                            <label class="ui-input-w">
                                <span class="ui-caption">Улица</span>
                                <UiTextInput placeholder="Средняя"/>
                            </label>
                            <label class="ui-input-w">
                                <span class="ui-caption">Улица</span>
                                <UiNumberInput placeholder="18"/>
                            </label>
                            <label class="ui-input-w">
                                <span class="ui-caption">Квартира</span>
                                <div class="ui-row">
                                    <UiNumberInput placeholder="555"/>
                                    <img class="btn" src="icons/cross.svg" alt="">
                                </div>
                            </label>
                        </section>
                        <section class="edit-info__body-row">
                            <div class="ui-third-btn green">
                                <img src="icons/plus.svg" alt="">
                                <span>Добавить еще адрес</span>
                            </div>
                        </section>
                    </div>
                    <div class="edit-info__footer">
                        <button class="ui-main-btn" disabled>
                            Сохранить
                        </button>
                        <button class="ui-third-btn" @click.prevent="$root.hideShowable($event)">
                            Отмена
                        </button>
                    </div>
                </form>
            </section>
            <section class="private-info__section">
                <div class="private-info__header">
                    <span class="ui-ico">
                        <img src="icons/lock.svg" alt="">
                    </span>
                    <h5 class="private-info__header-text">
                        Логин
                    </h5>
                    <button class="private-info__edit-btn to-ico-mob ui-second-btn"
                            style="background-image: url(/icons/edit.svg);"
                            @click='$root.showId("change-mail-pop")'>
                        Редактировать
                    </button>
                </div>
                <div class="private-info__body">
                    <div class="private-info__body-row">
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Электронная почта</span>
                            <span class="private-info__data">test@gmail.com</span>
                        </div>
                        <div class="ui-input-w private-info__data-pair">
                            <span class="ui-caption">Пароль</span>
                            <span class="private-info__data">•••••••••••</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="ui-list center expand-arrow">
            <div class="ui-simple-btn" @click='$root.showId("change-password-pop")'>
                Изменить пароль
            </div>
            <div class="ui-simple-btn" @click='$root.showId("login-pop")'>
                Форма Логина/Регистрации
            </div>
            <div class="ui-simple-btn">
                Выход
            </div>
            <div class="ui-simple-btn">
                Удалить аккаунт
            </div>
        </div>
    </article>
    
    <section id="this-popups-list">
        <UiPopup id="confirm-number-pop">
            <template v-slot="{parent}">
                <div class="popup confirm-number-pop">
                    <img class="popup__close-btn" src="icons/cross.svg" alt="" @click='parent.closePop()'>
                    <div class="popup__title">
                        Подтверждение номера телефона
                    </div>
                    <div class="popup__body">
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Подтверждённые номер</span>
                                <div class="ui-row">
                                    <UiTelInput startValue="+380 68 000 00 00"/>
                                    <span class="ui-caption">
                                        На указанный номер будет отправлено SMS с кодом подтверждения.
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Код из SMS</span>
                                <div class="ui-row">
                                    <input class="ui-input" value="0000000000" maxlength="10" type="tel" name="">
                                    <span class="ui-caption-btn" onclick="return false">Отправить код ещё раз.</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="popup__footer">
                        <div class="confirm-number-pop__status-label">
                            <p>
                                Код отправлен. Вы снова сможете отправить код подтверждения через
                            </p>
                            <b>
                                00:57
                            </b>
                        </div>
                    </div>
                </div>
            </template>
        </UiPopup>
        
        <UiPopup id="change-mail-pop">
            <template v-slot="{parent}">
                <div class="popup change-mail-pop">
                    <img class="popup__close-btn" src="icons/cross.svg" alt="" @click="parent.closePop()">
                    <div class="popup__title">
                        Изменение E-mail
                    </div>
                    <div class="popup__body">
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Введите новый адрес электронной почты.</span>
                                <UiEmailInput start-value="Test@test.com"/>
                            </label>
                        </div>
                        <div class="popup__body-row">
                            <div class="ui-main-btn" @click="parent.closePop()">Сохранить</div>
                        </div>
                    </div>
                </div>
            </template>
        </UiPopup>
        
        <UiPopup id="change-password-pop">
            <template v-slot="{parent}">
                <div class="popup change-password-pop">
                    <img class="popup__close-btn" src="icons/cross.svg" alt="" @click="parent.closePop()">
                    <div class="popup__title">
                        Изменение пароля
                    </div>
                    <div class="popup__body">
                        <div class="popup__body-row">
                            <p>
                                После изменения пароля произойдет выход из аккаунта на всех устройствах,
                                где вы вошли с текущим паролем.
                            </p>
                        </div>
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Текущий пароль</span>
                                <UiPasswordInput startValue="Test@test.com"/>
                            </label>
                        </div>
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Новый пароль</span>
                                
                                {{testVal}}
                                <UiPasswordInput startValue="Test@test.com" v-model="testVal" ref="newPass"/>
                                <span class="ui-caption-btn" @click="$refs.newPass.genPassword">
                                    Сгенерировать пароль
                                </span>
                            </label>
                        </div>
                        <div class="popup__body-row">
                            <label class="ui-input-w private-info__data-pair">
                                <span class="ui-caption">Новый пароль ещё раз</span>
                                <UiPasswordInput/>
                            </label>
                        </div>
                        <div class="popup__body-row">
                            <div class="ui-main-btn" @click="parent.closePop()">Изменить пароль</div>
                            <div class="ui-third-btn" @click="parent.closePop()">Отмена</div>
                        </div>
                    </div>
                </div>
            </template>
        </UiPopup>
    </section>
</template>

<script>
	import UiSelect from "./uiComponents/UiSelect";
	import UiPasswordInput from "./uiComponents/UiPasswordInput";
	import UiTelInput from "./uiComponents/UiTelInput";
	import UiPopup from "./uiComponents/UiPopup";
	import UiTextInput from "./uiComponents/UiTextInput";
	import UiNumberInput from "./uiComponents/UiNumberInput";
	import UiEmailInput from "./uiComponents/UiEmailInput";
	
	export default {
		components: {
			UiEmailInput,
			UiNumberInput,
			UiTextInput,
			UiPopup,
			UiTelInput,
			UiPasswordInput,
			UiSelect
		},
		data() {
			return {
				testVal: null,
			}
		},
		methods: {}
	};
</script>

<style lang="scss">
    @import "public/scss/abstract";

    .private-info {
        color: #363636;
        
        &__section {
            position: relative;
            padding: 14px;
            
            & + & {
                &::before {
                    content: "";
                    position: absolute;
                    top: -1px;
                    left: 14px;
                    right: 14px;
                    
                    height: 1px;
                    background-color: $color-text-grey;
                }
            }
            
            @include mobile {
                &:last-child {
                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -1px;
                        left: 14px;
                        right: 14px;
                        
                        height: 1px;
                        background-color: $color-text-grey;
                    }
                }
            }
        }
        
        &__header {
            display: flex;
            align-items: center;
        }
        
        &__header-text {
            min-width: 132px;
            margin-left: 22px;
            @include fontMid();
        }
        
        &__edit-btn {
            margin-left: 16px;
            
            @include bigMobile {
                margin-left: auto;
            }
        }
        
        &__body {
            display: flex;
            flex-direction: column;
            
            margin: 20px 0 0;
            padding-left: 50px;
            
            gap: 18px;
            
            @include mobile() {
                padding-left: 0;
            }
        }
        
        &__body-row {
            display: flex;
            align-items: center;
            
            gap: 12px 16px;
            
            @include smallScreen() {
                flex-wrap: wrap;
            }
        }
        
        &__data-pair {
            min-width: 220px;
        }
        
        &__data {
            margin-top: 8px;
            @include fontMid();
        }
    }
    
    .edit-info {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        
        max-height: 0;
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        
        transition: 0.3s;
        
        &.show {
            max-height: none;
            opacity: 1;
            z-index: 2;
            visibility: visible;
        }
        
        padding: 14px;
        
        background-color: #ffffff;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        
        &__header {
            display: flex;
            align-items: center;
            min-height: 42px;
            
            @include mobile() {
                min-height: auto;
            }
        }
        
        &__header-text {
            min-width: 132px;
            margin-left: 22px;
            @include fontMid();
        }
        
        &__body {
            display: flex;
            flex-direction: column;
            
            margin: 20px 0;
            padding-left: 50px;
            
            gap: 24px;
            
            @include mobile() {
                padding-left: 0;
            }
        }
        
        &__body-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            
            gap: 16px 24px;
            
            @include mobile() {
                justify-content: center;
                
                @include hasParent(".edit-delivery" &) {
                    &:first-child {
                        order: 1;
                    }
                }
            }
        }
        
        &__footer {
            display: flex;
            margin: 36px 0 8px;
            padding-left: 50px;
            
            gap: 8px;
            
            @include mobile() {
                padding-left: 0;
            }
        }
    }
    
    .confirm-number-pop {
        width: 620px;
        
        &__status-label {
            width: 100%;
            padding: 10px;
            
            @include fontMid;
            text-align: center;
            
            background: rgba(0, 155, 68, 0.3);
            border: 1px solid $color-main;
            border-radius: 8px;
        }
    }
    
    .change-mail-pop,
    .change-password-pop {
        width: 375px;
    }

</style>
