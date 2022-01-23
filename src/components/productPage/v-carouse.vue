<template>
  <div class="card-prod-img__wrp-pos">
    <div class="card-prod-img__wrapper">
      <div class="card-prod-img__v-carousel">
        <img
            v-for="(item, index) in carousel_data"
            :key="item.id"
            class="card-prod-img__img"
            :src="'/img/' + item.img"
            :style="{ 'margin-left': index === 0? '-' + 100 * slideCount + '%': 0 }"
            alt="карусель"
            @click="$showId('img-zoom-gallery')"
        />
      </div>
    </div>
    <div class="card-prod-img__wrp-min-img">
      <div class="my-w">
        <div
            class="card-prod-img__little-img-w"
            v-for="(item, index) in carousel_data"
            :key="item.id"
            @mouseover="selectImg(index, $event)"
            @click="selectImg(index, $event)"
        >
          <img
              class="card-prod-img__little-img"
              :class="{ active: slideCount === index }"
              :src="'/img/' + item.img"
              alt="карусель"
          />
        </div>
      </div>
    </div>
  </div>
  <UiPopup id="img-zoom-gallery">
    <template v-slot="{parent}">
      <div class="popup img-gallery-pop">
        <img class="popup__close-btn" src="@/assets/icons/cross.svg" alt="" @click='parent.closePop()'>
        <div class="img-gallery-pop__main-img-w">
          <img
              v-for="(item, index) in carousel_data"
              :key="item.id"
              class="img-gallery-pop__main-img"
              :src="'/img/' + item.img"
              :style="{ 'margin-left': index === 0? '-' + 100 * slideCount + '%': 0 }"
              alt="карусель"
              @click="zoomIn()"
          />
          <span class="img-gallery-pop__zoom-btn">
            <img class="img-gallery-pop__zoom-ico" src="@/assets/icons/zoom.svg" alt="">
          </span>
        </div>
        <div class="img-gallery-pop__add-img-w">
          <img class="img-gallery-pop__add-img"
               v-for="(item, index) in carousel_data"
               :key="item.id"
               @mouseover="selectImg(index, $event)"
               @click="selectImg(index, $event)"
               :class="{ active: slideCount === index }"
               :src="'/img/' + item.img"
               alt="карусель"
          />
        </div>
        <div class="img-gallery-pop__nav">
          <div class="img-gallery-pop__nav-left img-gallery-pop__nav-btn" :class="{active: canSlideLeft}"
               @click="leftClick"></div>
          <div class="img-gallery-pop__nav-right img-gallery-pop__nav-btn" :class="{active: canSlideRight}"
               @click="rightClick"></div>
        </div>
        <section class="img-gallery-pop__zoom-block"
                 :class="{active: isZoom}"
                 @click="zoomOut"
                 @mousemove="zoomMouseMove($event)"
                 @touchmove="zoomTouchMove($event)"
        >
          <img class="img-gallery-pop__zoom-img"
               :src="'/img/'+ currImg.img"
               alt=""
               ref="zoomImg"
               :style="{transform:`translate(${zoomPos})`}"
          >
        </section>
        <div class="buy-block">
          <span class="buy-block__price">
            2 625 грн
          </span>
          <button class="buy-block__btn ui-main-btn">
            Купить
          </button>
        </div>
      </div>
    </template>
  </UiPopup>
</template>

<script>
import UiPopup from "@component/ui/UiPopup";

export default {
  name: "v-carouse",
  components: {UiPopup},
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      slideCount: 0,
      isZoom: false,
      zoomPos: '0, 0'
    };
  },
  computed: {
    currImg() {
      return this.carousel_data[this.slideCount];
    },
    canSlideLeft() {
      return this.slideCount > 0
    },
    canSlideRight() {
      return this.slideCount < this.carousel_data.length - 1;
    }
  },
  methods: {
    selectImg(currIndex) {
      this.slideCount = currIndex;
    },
    leftClick() {
      if (this.canSlideLeft) {
        this.slideCount--;
      }
    },
    rightClick() {
      if (this.canSlideRight) {
        this.slideCount++;
      }
    },

    zoomIn() {
      this.isZoom = true;
    },
    zoomOut() {
      this.isZoom = false;
    },

    setTruePercent(val) {
      if (val < 0)
        val = 0
      else if (val > 1)
        val = 1
      return val;
    },
    zoomMouseMove(e) {
      let client = {
        x: e.clientX,
        y: e.clientY
      };

      this.zoomMove(client, e.currentTarget)
    },
    zoomTouchMove(e) {
      let client = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      this.zoomMove(client, e.currentTarget)
    },
    zoomMove(mousePx, currTarget) {
      let rect = currTarget.getBoundingClientRect();

      //Для того, чтоб не касаться краев зума
      let gapInPer = 30;
      let gapX = rect.width / 100 * gapInPer;
      let gapY = rect.height / 100 * gapInPer;

      let x = mousePx.x - rect.left - gapX; //x position within the element.
      let y = mousePx.y - rect.top - gapY;  //y position within the element.

      let imgRect = this.$refs.zoomImg.getBoundingClientRect();

      let mousePer = {
        x: x / (rect.width - gapX * 2),
        y: y / (rect.height - gapY * 2)
      }

      mousePer.x = this.setTruePercent(mousePer.x);
      mousePer.y = this.setTruePercent(mousePer.y);

      let diff = {
        width: imgRect.width - rect.width,
        height: imgRect.height - rect.height
      }

      // console.log(diff);
      // console.log(mouse);

      this.zoomPos = `${-mousePer.x * (diff.width)}px, ${-mousePer.y * (diff.height)}px`;
    },
  },
};
</script>

<style lang="scss" src="@style/productPage/_slider-card-prod.scss" scoped></style>

<style lang="scss" scoped>

.img-gallery-pop {
  width: 1080px;
  height: calc(100% - 64px);
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  border-radius: 6px;

  &__main-img-w {
    width: 100%;
    display: flex;
    overflow: hidden;
  }

  &__main-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    cursor: zoom-in;
    user-select: none;
  }

  &__zoom-btn {
    position: absolute;
    top: 50%;
    left: 70%;

    height: 32px;
    width: 32px;
    display: inline-flex;

    background-color: $color-main;
    border-radius: 50%;
    pointer-events: none;

    color: white;
  }

  &__zoom-ico {
    margin: auto;
    color: white;
  }

  &__add-img-w {
    min-height: 96px;

    display: flex;
    align-items: center;
    gap: 8px;

    margin: auto auto 0;
    padding: 16px 8px;

    overflow: hidden;
    overflow-x: auto;
    overscroll-behavior: contain;

    @include scrollbarStyle();
  }

  &__add-img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    object-fit: contain;
    user-select: none;
    border: 1px solid transparent;

    &.active {
      border: 1px solid $color-main;
    }
  }

  &__nav {
    @include absoluteGrow();
    pointer-events: none;
  }

  &__nav-btn {
    position: absolute;
    top: 50%;

    height: 48px;
    width: 48px;
    display: flex;

    color: white;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    z-index: 2;
    cursor: pointer;
    user-select: none;
    pointer-events: auto;

    &::before {
      @include fontMidHeader;
      margin: auto;
    }

    &.active {
      background-color: white;
      color: $color-main;
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    }
  }

  &__nav-left {
    left: 4px;

    &::before {
      content: "❮";
    }
  }

  &__nav-right {
    right: 4px;

    &::before {
      content: "❯";
    }
  }

  &__zoom-block {
    @include absoluteGrow();

    border-radius: 6px;
    background-color: white;

    z-index: 2;
    cursor: zoom-out;
    overflow: hidden;

    @include anim();
    opacity: 0;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    @include animAll(0s);

  }

  &__zoom-img {
    position: absolute;
    //min-height: 100%;
    //min-width: 100%;
    max-height: none;
    max-width: none;

    @include mobile{
      width: 200vw;
    }
  }
}

.buy-block {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;

  margin: auto;
  padding: 24px;

  border: 1px solid $color-back-grey;
  background-color: white;
  border-radius: 8px;

  z-index: 10;

  &__price {
    @include fontTitle();
    color: $color-text-orders;
  }

  &__btn {

  }

}
</style>
