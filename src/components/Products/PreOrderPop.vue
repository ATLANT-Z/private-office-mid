<template>
  <UiPopup id="pre-order-pop" v-on:mounted="(val) => uiPop = val">
    <template v-slot="{parent}">
      <form class="popup pre-order-pop" @submit.prevent="submit">
        <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.close()'>
        <div class="popup__title small">
          Сделать предзаказ
        </div>
        <div class="popup__body">
          <p>Оставьте ваши контактные данные, наш менеджер свяжится с вами в течении 10 минут.</p>
          <div class="ui-input-w">
            <span class="ui-caption">Ваши имя и фамилия</span>
            <UiTextInput
                name="namesurname"
                v-model="v$.form.name.$model"
            />
            <div class="ui-error-list" v-if="v$.form.name.$error && v$.form.name.$dirty">
              <span class="ui-error" v-if="v$.form.name.required.$invalid">Имя и фамилия обязательны</span>
            </div>
          </div>
          <div class="ui-input-w">
            <span class="ui-caption">Номер телефона</span>
            <UiTelInput
                name="phone"
                v-model="v$.form.phone.$model"
                mask="+38(###)#######"
                placeholder="+38("
            />
            <div class="ui-error-list" v-if="v$.form.phone.$error">
              <span class="ui-error" v-if="v$.form.phone.required.$invalid">Поле Телефон не должно быть пустым</span>
              <span class="ui-error" v-if="v$.form.phone.minLength.$invalid">Введите корректный номер телефона</span>
            </div>
          </div>
          <div class="ui-input-w">
            <span class="ui-caption">Электронная почта</span>
            <UiEmailInput
                name="email"
                v-model="v$.form.email.$model"
            />
            <div class="ui-error-list" v-if="v$.form.email.$error">
              <span class="ui-error" v-if="v$.form.email.required.$invalid">Поле E-mail не должно быть пустым</span>
              <span class="ui-error" v-else-if="v$.form.email.email.$invalid">E-mail указан некорректно</span>
            </div>
          </div>
          <label class="popup__agree-row">
            <input
                class="ui-checkbox"
                type="checkbox"
                v-model="form.agree"
            >
            <span>
              Подтверждая заказ, я соглашаюсь с
              <a class="ui-link" href="https://greenvision.ua/ua/private-policy">
                политикой конфиденциальности
              </a>
            </span>
          </label>
          <span class="ui-error" v-if="form.agree === false && v$.form.$dirty">
            Необходимо согласие с политикой
            конфиденциальности
          </span>
        </div>
        <div class="popup__footer">
          <button class="ui-main-btn" :disabled="v$.form.$error">Отправить</button>
        </div>
        <div class="popup__success"></div>
      </form>
    </template>
  </UiPopup>
</template>

<script>
import UiTextInput from "@component/ui/UiTextInput";
import UiTelInput from "@component/ui/UiTelInput";
import UiPopup from "@component/ui/UiPopup";
import UiEmailInput from "@component/ui/UiEmailInput";


import useVuelidate from '@vuelidate/core'
import {required, email, minLength, sameAs} from '@vuelidate/validators'

export default {
  components: {
    // SvgIcon,
    UiTextInput,
    UiEmailInput,
    UiPopup,
    UiTelInput
  },
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      uiPop: null,
      form: {
        alias: '',
        name: '',
        phone: '',
        email: '',
        agree: false
      }
    }
  },
  validations() {
    return {
      form: {
        name: {
          required,
        },
        phone: {
          required,
          minLength: minLength(15)
        },
        email: {
          required,
          email
        }
      },
    }
  },
  methods: {
    clearFields() {
      // this.form.name = '';
      // this.form.phone = '';
      // this.form.email = '';
      this.form.agree = false;
    },
    submit() {
      this.v$.form.$touch();
      if (this.v$.$invalid || this.form.agree === false) return

      window.axios.post('/pre-order', {...this.form})
          .then(() => {
            alert('Спасибо! Ваше сообщение отправлено! ');
            this.clearFields();
            this.v$.form.$reset();
            this.uiPop.close();
          })
          .catch(err => {
            alert('Произошла ошибка, попробуйте позже c: ');
            console.error(err);
            this.v$.form.$reset();
          });

    }
  },
  computed: {},
  mounted() {
    addEventListener("pre-order.show", (event) => {
      this.uiPop.show = true;
      this.form.alias = event.detail.alias;
    });
  }
};
</script>

<style lang="scss" scoped>
.pre-order-pop {

  &__send-btn {
    width: min-content;
    margin-top: 16px;
  }
}
</style>
