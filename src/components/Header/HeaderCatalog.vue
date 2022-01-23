<template>
  <CanBeShown :id="'header-catalog'" :exclude-id="['header-menu']">
    <template v-slot="{isShow, toggleShow}">
      <div class="catalog hide-mob" :class="{active:isShow}" @click.self="toggleShow">
        <div class="catalog__btn" @click="toggleShow">
          <img :src="catalogData?.img" alt="">
          <span class="catalog__btn-text">{{catalogData?.title}}</span>
        </div>
        <div class="catalog__list" v-if="catalogData?.items">
          <div class="catalog__list-item"
               v-for="item of catalogData.items"
               :key="item.id"
          >
            <a class="catalog__list-item-title-w" :href="item?.url">
              <img class="catalog__list-item-img" :src="item?.img" alt="">
              <span class="catalog__list-item-title">{{item.title}}</span>
              <SvgIcon class="catalog__list-item-arrow btn"
                       icon="rightArrow"
                       v-if="item.items?.length">
              </SvgIcon>
            </a>
            <div class="catalog__sub-list" v-if="item?.items">
              <a v-for="subItem of item.items"
                 :key="subItem.id"
                 :href="subItem.url"
              >
                {{subItem.title}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CanBeShown>
</template>

<script>
import CanBeShown from "../logicComponents/CanBeShown";
import {CatalogData} from "@model/headerData";
import SvgIcon from "@/tools/svg/SvgIcon";

export default {
  name: "HeaderCatalog",
  components: {SvgIcon, CanBeShown},
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
  /*border-left: 1px solid rgba(255, 255, 255, 0.3);*/

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
    color: $mainSiteColor;
    margin-left: auto;
  }

  &__sub-list {
    @extend %listForm;

    position: absolute;
    top: 0;
    left: 100%;
    min-height: 100%;

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
