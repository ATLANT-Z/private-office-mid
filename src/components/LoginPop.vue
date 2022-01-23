<template>
  <UiPopup id="login-pop">
    <template v-slot="{parent}">
      <div class="popup login-pop">
        <div class="pop-section-list" :style="{ minHeight: popHeight, maxHeight: popHeight }">
          <div class="pop-section-list__item reg" ref="reg"
               :class="{show: isShow.reg}">
            <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.closePop()'>
            <div class="popup__title big">
              Регистрация
            </div>
            <div class="popup__body">
              <div class="ui-list small">
                <UiTelInput placeholder="Фамилия"/>
                <UiTelInput placeholder="Имя"/>
                <UiTelInput placeholder="Телефон"/>
                <UiEmailInput placeholder="E-mail"/>
                <UiPasswordInput placeholder="Пароль"/>
              </div>
              <div class="captcha">

              </div>
              <div class="ui-list small">
                <button class="ui-main-btn" disabled>Регистрация</button>
                <button class="ui-third-btn colored" @click="showLogin">Войти</button>
                <p class="pop-text">
                  Регистрируясь, вы соглашаетесь с
                  <a class="ui-link" href="javascript:void(0);">
                    пользовательским соглашением.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="pop-section-list__item" ref="login"
               :class="{show: isShow.login}">
            <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.closePop()'>
            <div class="popup__title big">
              Вход
            </div>
            <div class="popup__body">
              <div class="ui-list small">
                <UiEmailInput placeholder="E-mail"/>
                <UiPasswordInput placeholder="Пароль"/>
              </div>
              <div class="captcha">

              </div>
              <div class="ui-list small">
                <button class="ui-main-btn" disabled>Войти</button>
                <button class="ui-third-btn colored" @click="showReg">Регистрация</button>
                <span class="ui-link" @click="showReset">
                  Забыли пароль?
                </span>
              </div>
            </div>
          </div>
          <div class="pop-section-list__item" ref="passReset"
               :class="{show: isShow.passReset}">
            <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.closePop()'>
            <div class="popup__title big">
              Смена пароля
            </div>
            <div class="popup__body">
              <div class="ui-list small">
                <UiEmailInput placeholder="E-mail"/>
              </div>
              <div class="captcha">

              </div>
              <div class="ui-list small">
                <button class="ui-main-btn" @click="showSent">Восстановить</button>
                <button class="ui-third-btn colored" @click="showReg">Регистрация</button>
                <a class="ui-link" href="javascript:void(0);" @click="showLogin">
                  Назад
                </a>
              </div>
            </div>
          </div>
          <div class="pop-section-list__item" ref="passSent"
               :class="{show: isShow.passSent}">
            <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.closePop()'>
            <div class="popup__title big">
              Смена пароля
            </div>
            <div class="popup__body">
              <div class="ui-list center">
                <p class="pop-text">
                  На Test@test.com отправлена ссылка для смены пароля.
                </p>
                <div class="progress-bar-sent" :class="{start:isShow.passSent}"></div>
                <SvgIcon class="ui-colored" icon="bigAccept" initial-size></SvgIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UiPopup>
</template>

<script>
import UiTelInput from "./ui/UiTelInput";
import UiPopup from "./ui/UiPopup";
import UiEmailInput from "./ui/UiEmailInput";
import UiPasswordInput from "./ui/UiPasswordInput";
import SvgIcon from "@/tools/svg/SvgIcon";

export default {
  components: {
    SvgIcon,
    UiPasswordInput,
    UiEmailInput,
    UiPopup,
    UiTelInput
  },
  props: {},
  data() {
    return {
      sectionNames: {
        login: 1,
        reg: 2,
        passReset: 3,
        passSent: 4
      },
      sectionToShow: -1,
      currentRef: null,
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;
    this.currentRef = this.$refs.login;
    this.sectionToShow = this.sectionNames.login;

  },
  methods: {
    showReg() {
      this.sectionToShow = this.sectionNames.reg
      this.currentRef = this.$refs.reg;
    },
    showLogin() {
      this.sectionToShow = this.sectionNames.login
      this.currentRef = this.$refs.login;
    },
    showReset() {
      this.sectionToShow = this.sectionNames.passReset
      this.currentRef = this.$refs.passReset;
    },
    showSent() {
      this.sectionToShow = this.sectionNames.passSent
      this.currentRef = this.$refs.passSent;

      const progressTime = 5000;
      let root = document.documentElement;
      root.style.setProperty('--progressTime', progressTime / 1000 + 's');
      setTimeout(() => {
        this.showLogin();
      }, progressTime)
    },
  },
  computed: {
    isShow() {
      return {
        login: this.sectionToShow === this.sectionNames.login,
        reg: this.sectionToShow === this.sectionNames.reg,
        passReset: this.sectionToShow === this.sectionNames.passReset,
        passSent: this.sectionToShow === this.sectionNames.passSent,
      }
    },
    popHeight() {
      if (this.isMounted) {
        return window.getComputedStyle(this.currentRef).height;
      } else return 0;
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes showPopSection {
  from {
    position: relative;
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes progressBar {
  from {
    max-width: 100%;
  }
  to {
    max-width: 0;
  }
}

.progress-bar-sent {
  height: 4px;
  width: 100%;
  max-width: 0;

  border-radius: 2px;
  background-color: $color-main;

  &.start {
    animation: progressBar var(--progressTime) ease-in;
  }
}


.login-pop {
  width: 300px !important;
}

.pop-section-list {
  min-height: max-content;

  display: flex;
  position: relative;

  overflow: hidden;

  transition: .4s;

  &__item {
    display: flex;
    flex-direction: column;

    position: absolute;
    width: 100%;
    top: 0;
    left: 100%;
    min-height: max-content;

    opacity: 0;
    visibility: hidden;
    transition: .4s cubic-bezier(0.56, -0.31, 0.15, 1.08);


    &.show {
      position: static;
      left: 0;
      opacity: 1;
      visibility: visible;

      animation: showPopSection .4s cubic-bezier(0.56, -0.31, 0.15, 1.08);
    }
  }
}

.pop-text {
  text-align: center;
  @include fontMid()
}

.captcha {
  padding: 4px 0;
}
</style>
