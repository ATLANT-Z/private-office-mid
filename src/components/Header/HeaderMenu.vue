<template>
  <CanBeShown :id="'header-menu'" :exclude-id="['header-catalog']">
    <template v-slot="{isShow, toggleShow}">
      <div class="header-menu" :class="{active: isShow}" @click.self="toggleShow">
        <div class="header-menu__mob-top-row" :class="{active: isShow}">
          <img class="header-menu__logo" src="@/assets/img/logoLight.svg" alt="">
          <div class="lang-block">
            <a class="lang-block__item"
               v-for="(item, index) in headerData.lang"
               :key="index"
               :href="item.url"
               :class="{active: item.active}"
            >
              {{item.title}}
            </a>
          </div>
        </div>
        <div class="header-menu__toggle-title" :class="{active: isShow}">
          <a href="javascript:void(0)" class="header-menu__user-info">
            <!--                        <img class="header-menu__user-ava" src="@/assets/img/son.jpg" alt="">-->
            <!--                        <div class="header-menu__user-name">Аноним Анонимович</div>-->
          </a>
          <div class="header-menu__btn" :class="{active: isShow}" @click="toggleShow">
            <span></span>
          </div>
        </div>
        <div class="header-menu__body" :class="{active: isShow}">
          <CanBeShown>
            <template v-slot="{isShow, toggleShow}">
              <div class="header-menu__catalog-block">
                <div class="header-menu__list-title-row" :class="{active: isShow}" @click="toggleShow">
                  <div class="header-menu__list-title-ico">
                    <img src="/icons/category/catalogDark.svg" alt="">
                  </div>
                  <span class="header-menu__list-title-text">Каталог</span>
                  <SvgIcon class="header-menu__list-arrow btn" icon="rightArrow"></SvgIcon>
                </div>
                <div class="header-menu__catalog-list"
                     :class="{active: isShow}"
                     v-if="headerData.catalog?.items">
                  <a class="header-menu__list-title-row"
                     :href="item.url"
                     v-for="item in headerData.catalog.items"
                     :key="item.id"
                  >
                    <div class="header-menu__list-title-ico">
                      <img :src="item.img" alt="">
                    </div>
                    <span class="header-menu__list-title-text">
                      {{item.title}}
                    </span>
                  </a>
                </div>
              </div>
            </template>
          </CanBeShown>

          <!--                    <div class="header-menu__list-title-row" @click="$showId('login-pop')">-->
          <!--                        <div class="header-menu__list-title-ico">-->
          <!--                            <img src="@/assets/icons/userDark.svg" alt="">-->
          <!--                        </div>-->
          <!--                        <span class="header-menu__list-title-text">Войти в кабинет</span>-->
          <!--                    </div>-->
          <!--                    <router-link class="header-menu__list-title-row" :to="{ name: 'orders'}" @click="toggleShow">-->
          <!--                        <div class="header-menu__list-title-ico">-->
          <!--                            <img src="@/assets/icons/myOrdersDark.svg" alt="">-->
          <!--                        </div>-->
          <!--                        <span class="header-menu__list-title-text">Мои заказы</span>-->
          <!--                    </router-link>-->
          <a class="header-menu__list-title-row" :href="headerData.cart?.url">
            <div class="header-menu__list-title-ico">
              <img src="@/assets/icons/cartDark.svg" alt="">
            </div>
            <span class="header-menu__list-title-text">{{headerData.cart?.title}}</span>
            <span class="header-menu__list-title-counter" v-if="headerData.cart?.count">{{headerData.cart?.count}}</span>

          </a>
          <a class="header-menu__list-title-row" :href="headerData.compare?.url" @click="toggleShow">
            <div class="header-menu__list-title-ico" style="color: #484848">
              <SvgIcon icon="compareLight"></SvgIcon>
            </div>
            <span class="header-menu__list-title-text">{{headerData.compare?.title}}</span>
            <span class="header-menu__list-title-counter" v-if="headerData.compare?.count">{{headerData.compare?.count}}</span>
          </a>
          <a class="header-menu__list-title-row" href="tel:+38(067) 74-48-98">
            <div class="header-menu__list-title-ico" style="color: #484848">
              <SvgIcon icon="phoneDark"></SvgIcon>
            </div>
            <span class="header-menu__list-title-text">+38 (067) 474-48-98</span>
          </a>
          <!--                    <router-link class="header-menu__list-title-row" :to="{ name: 'wish'}" @click="toggleShow">-->
          <!--                        <div class="header-menu__list-title-ico">-->
          <!--                            <img src="@/assets/icons/heartDark.svg" alt="">-->
          <!--                        </div>-->
          <!--                        <span class="header-menu__list-title-text">Список желаний</span>-->
          <!--                        <span class="header-menu__list-title-counter">-->
          <!--                            14-->
          <!--                        </span>-->
          <!--                    </router-link>-->
          <!--                    <router-link class="header-menu__list-title-row" :to="{ name: 'viewed'}" @click="toggleShow">-->
          <!--                        <div class="header-menu__list-title-ico">-->
          <!--                            <img src="@/assets/icons/myOrdersDark.svg" alt="">-->
          <!--                        </div>-->
          <!--                        <span class="header-menu__list-title-text">Просмотренные товары</span>-->
          <!--                    </router-link>-->
          <CanBeShown>
            <template v-slot="{isShow, toggleShow}">
              <section class="site-nav">
                <div class="site-nav__title-row" :class="{active: isShow}"
                     @click="toggleShow">
                  <SvgIcon class="site-nav__list-arrow btn" icon="rightArrow"></SvgIcon>

                  <span class="site-nav__title-text">Раскрыть</span>
                </div>
                <div class="site-nav__list" :class="{active: isShow}">
                  <template v-for="(item, index) in headerData.menu" :key="index">
                    <CanBeShown v-if="item.items && item.items.length">
                      <template v-slot="{isShow, toggleShow}">
                        <div class="site-nav__list-block">
                          <div class="site-nav__list-title-row"
                               :class="{active: isShow}"
                               @click="toggleShow"
                          >
                            <span class="site-nav__list-title-text">
                              {{item.title}}
                            </span>

                            <SvgIcon class="site-nav__list-title-arrow btn" icon="rightArrow"></SvgIcon>

                          </div>
                          <div class="site-nav__sub-list" :class="{active: isShow}">

                            <a class="site-nav__sub-list-link" :href="item.url">
                              <span class="mat-ico">arrow_forward</span>
                              <span class="site-nav__sub-list-link-text">
                                Перейти в раздел
                              </span>
                            </a>
                            <a class="site-nav__sub-list-item"
                               v-for="(subItem, index) in item.items"
                               :key="index"
                               :href="subItem.url"
                            >
                              {{subItem.title}}
                            </a>
                          </div>
                        </div>
                      </template>
                    </CanBeShown>
                    <a class="site-nav__list-title-row" :href="item.url" v-else>
                      <span class="site-nav__list-title-text">{{item.title}}</span>
                    </a>
                  </template>
                </div>
              </section>
            </template>
          </CanBeShown>
          <section class="menu-footer">
            <div class="menu-footer__social-block">
              <span class="menu-footer__social-title">Мы в соцсетях:</span>
              <div class="menu-footer__social-list">
                <a class="menu-footer__social-list-item" href="https://www.instagram.com/greenvision.ua/">
                  <img src="@/assets/icons/socials/instagram.svg" alt="">
                </a>
                <a class="menu-footer__social-list-item" href="https://www.youtube.com/c/GreenVision_TM">
                  <img src="@/assets/icons/socials/youtube.svg" alt="">
                </a>
                <a class="menu-footer__social-list-item" href="https://www.facebook.com/greenvision.ua">
                  <img src="@/assets/icons/socials/facebook.svg" alt="">
                </a>
                <a class="menu-footer__social-list-item" href="https://t.me/greenvision_official">
                  <img src="@/assets/icons/socials/telegram.svg" alt="">
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </template>
  </CanBeShown>
</template>

<script>
import CanBeShown from "../logicComponents/CanBeShown";
import {HeaderData} from "@model/headerData";
import SvgIcon from "@/tools/svg/SvgIcon";

export default {
  name: "HeaderMenu",
  components: {SvgIcon, CanBeShown},
  props: {
    headerData: {
      type: HeaderData,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~_style/uiComponents";

.header-menu {
  display: flex;
  align-items: center;
  align-self: stretch;

  margin-left: auto;
  padding: 0 6px;

  /*border-left: 1px solid rgba(255, 255, 255, 0.3);*/
  /*border-right: 1px solid rgba(255, 255, 255, 0.3);*/

  transition: 0s;

  @include mobile {
    position: relative;
    left: 0;
    top: 0;
    min-width: 0px;
    max-width: 300px;

    padding: 0;
    border: none;
    flex-direction: column;

    @include animAll();

    &.active {
      position: fixed;
      min-width: 300px;
      max-width: 300px;
      z-index: 10;
    }
  }

  &.active {
    &::before {
      content: '';
      @include absoluteGrow(fixed);
      z-index: -1;

      backdrop-filter: blur(24px) opacity(1);
      background-color: $uiTrans;
    }
  }

  &__mob-top-row {
    display: none;

    &.active {
      @include mobile {
        display: flex;
        justify-content: space-between;
        width: 100%;

        padding: 10px 14px 2px;
        background-color: $color-new-grey;
      }
    }
  }

  &__logo {
    max-width: 130px;
  }

  &__toggle-title {
    position: static;

    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: space-between;

    background-color: $color-new-grey;

    z-index: 3;
    transition: 0s;

    &.active {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      padding-right: 6px;

      @include mobile {
        position: static;
        width: 100%;
      }
    }
  }

  &__user-info {
    align-items: center;
    padding: 8px 6px 8px 14px;


    display: none;
    visibility: hidden;
    opacity: 0;

    @include hasParent('.active' &) {
      display: flex;

      visibility: visible;
      opacity: 1;
    }
  }

  &__user-ava {
    @include fixedWH(40px, 40px);
    object-fit: fill;
    border-radius: 50%;
  }

  &__user-name {
    @include lineClamp();
    padding-left: 16px;
    padding-right: 4px;

    color: white;
  }

  &__btn {
    @include addClickArea(12px);

    $rWidth: 24px;
    $rHeight: 2px;
    $pad: 6px;
    $btnColor: white;
    $ownPad: 12px;

    color: $btnColor;

    width: $rWidth + $ownPad * 2;
    height: $rHeight * 3 + $pad * 2 + $ownPad * 2;
    padding: $ownPad;

    display: block;
    background-color: $color-new-grey;
    border-radius: 6px;
    cursor: pointer;

    border: 1px solid $color-text-grey;

    @include animAll;

    &:hover {
      background-color: transparentize(white, 0.8);
    }

    & > * {
      position: absolute;
      display: inline-flex;
      width: $rWidth;
      height: $rHeight;

      background-color: currentColor;

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

        background-color: currentColor;
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


    @include mobile {
      border: 1px solid transparent;

      &.active {
        @include addClickArea(4px);
        position: fixed;
        top: 14px;
        right: 14px;

        background-color: transparent;
      }
    }
  }


  &__body {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: calc(#{$headerHeight} - 100vh);
    z-index: 2;

    padding: 24px 12px;

    color: #363636;
    background-color: white;

    overflow: auto;
    @include scrollbarStyle();
    overscroll-behavior: contain;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);

    visibility: hidden;
    opacity: 0;

    &.active {
      visibility: visible;
      opacity: 1;
    }

    @include mobile {
      left: -100%;
      right: auto;
      width: 100%;

      &.active {
        left: 0;
      }
    }
  }

  &__catalog-block {
    border-bottom: 1px solid $color-border-light;
  }

  &__list-title-row {
    display: flex;
    align-items: center;

    min-height: 45px;
    padding: 8px;

    &:hover {
      background-color: darken(white, 5%);
    }

    cursor: pointer;
  }

  &__list-title-ico {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;

    > img {
      max-width: 100%;
      object-fit: contain;
    }
  }

  &__list-title-text {
    margin-left: 24px;
  }

  &__list-arrow {
    color: $mainSiteColor;
    margin-left: auto;

    @include hasParent('.active > ' &) {
      transform: rotate(90deg);
    }
  }

  &__catalog-list {
    @include iSlideDown();
  }

  &__list-title-counter {
    margin-left: auto;
    padding: 2px 6px;

    @include fontMidTitle();
    color: white;

    background-color: $color-main;
    border-radius: 34px;
  }
}

.site-nav {
  &__title-row {
    display: flex;
    align-items: center;

    padding: 12px 0;
    border-bottom: 1px solid $color-border-light;

    cursor: pointer;
  }

  &__list-arrow {
    margin-left: 6px;
    color: $mainSiteColor;

    @include hasParent('.active > ' &) {
      transform: rotate(90deg);
    }
  }

  &__title-text {
    margin-left: 32px;
  }

  &__list {
    padding-left: 16px;
    @include iSlideDown();

    > * {
      padding-left: 44px !important;

      border-bottom: 1px solid $color-border-light;

      &:last-child {
        border-bottom: none;
      }
    }

    a:hover {
      background-color: darken(white, 3%);
    }
  }

  &__list-block {

  }

  &__list-title-row {
    display: flex;
    align-items: center;
    padding: 12px 0;

    cursor: pointer;
  }

  &__list-title-text {

  }

  &__list-title-arrow {
    margin-left: auto;
    color: $mainSiteColor;

    @include hasParent('.active > ' &) {
      transform: rotate(90deg);
    }
  }

  &__sub-list {
    $padLeft: 16px;

    position: relative;
    padding-left: $padLeft;
    padding-bottom: 12px;

    @include iSlideDown();

    &:before {
      content: '';
      position: absolute;
      top: 16px;
      left: 16px;
      bottom: 12px;

      border-right: 1px dotted $color-border-dark;
    }

    &:after {
      content: '';

      $radius: 2.5px;
      position: absolute;

      left: calc(#{$padLeft} - #{$radius});
      bottom: calc(#{$padLeft} - #{$radius} * 2);

      padding: $radius;
      border-radius: 50%;
      background-color: $color-border-dark;
    }
  }

  &__sub-list-link {
    display: flex;
    align-items: center;
    color: $color-main;
    margin-bottom: 4px;

    &:hover {
      background-color: transparent !important;
    }

    .mat-ico {
      font-size: 12px;
      margin-left: -6px;
    }
  }

  &__sub-list-link-text {
    color: $color-main;
    text-decoration: underline;
    margin-left: 4px;

    &:hover {
      color: $color-main-hov;
    }
  }

  &__sub-list-item {
    display: block;
    padding: 6px 16px 6px;
  }
}

.menu-footer {
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -1px;
  padding-top: 10px;

  border-top: 1px solid $color-border-light;

  &__social-block {
    margin: auto;
  }

  &__social-title {
    width: 100%;
  }

  &__social-list {
    display: flex;
    gap: 24px;

    margin-top: 16px;
  }

  &__social-list-item {
    @include fixedWH(32px, 32px);
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    background-color: $color-main;
    border-radius: 50%;

    &:hover {
      background-color: $color-main-hov;
    }
  }
}

</style>
