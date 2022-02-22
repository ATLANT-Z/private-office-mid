<template>
  <article class="home-slider" ref="slider">
    <div class="home-slider__bg-w" v-if="!isMobile">
      <img v-for="(item) in list"
           :key="item.id"
           :src="item.bg" alt=""
           :style="{transform: getTransform(item)}"
           :class="{
             active: item.active,
             hideLeft: item.hideLeft,
             showLeft: item.showLeft
           }"
      >
    </div>
    <div class="home-slider__bg-w" v-if="isMobile">
      <img v-for="(item) in list"
           :key="item.id"
           :src="item.bgMob" alt=""
           :style="{transform: getTransform(item)}"
           :class="{
             active: item.active,
             hideLeft: item.hideLeft,
             showLeft: item.showLeft
           }"
      >
    </div>
    <div class="home-slider__body-w" v-if="list.length" :class="{active: isShowInfo}">
      <div class="home-slider__img-w"
           @touchstart="touchStart($event)"
           @mousedown="mouseDown($event)"
           @dragstart.prevent
      >
        <img :src="showActiveItem.img" alt="">
      </div>
      <div class="home-slider__info"
           @touchstart="touchStart($event)"
           @mousedown="mouseDown($event)"
           @dragstart.prevent
      >
        <h3 class="home-slider__title">
          {{ showActiveItem.title }}
        </h3>
        <p class="home-slider__text">
          {{ showActiveItem.text }}
        </p>
        <a class="home-slider__link ui-main-btn" :href="showActiveItem.link">
          Подробнее
        </a>
      </div>
      <ul class="home-slider__nav">
        <li class="home-slider__nav-item"
            v-for="(item, index) in list"
            :key="item.id"
            :class="{active: item.active}"
            @click.prevent="navClick(index)"
        ></li>
      </ul>
    </div>
    <div class="home-slider__arrows" v-if="list.length">
      <div class="home-slider__arrow-btn left"
           @click="leftClick"></div>
      <div class="home-slider__arrow-btn right"
           @click="rightClick"></div>
    </div>
  </article>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      isMobile: false,
      currentIndex: 0,
      isRightClick: true,
      isShowInfo: false,
      isAnimEnd: false,
      showActiveItem: {},
      animTime: 0,
      startX: 0,
      isWatchMove: false,
      currentX: 0,
      intervalHandler: null,
    }
  },
  computed: {
    ...mapGetters({
      list: 'getHomeSliders',
    }),
    activeItem() {
      return this.list.find((el) => el.active);
    }
  },
  methods: {
    ...mapActions({
      fetch: 'fetchHomeSliders'
    }),
    navClick(index) {
      if (!this.isAnimEnd) return
      this.setCurrIndex(index);
      this.resetInterval();
    },
    leftClick() {
      if (!this.isAnimEnd) return
      this.isRightClick = false;
      this.setCurrIndex(this.currentIndex - 1);
      this.resetInterval();
    },
    rightClick() {
      if (!this.isAnimEnd) return
      this.isRightClick = true;
      this.setCurrIndex(this.currentIndex + 1);
      this.resetInterval();
    },
    setCurrIndex(val) {
      if (val >= this.list.length) {
        val = 0;
      } else if (val < 0) {
        val = this.list.length - 1;
      }
      this.currentIndex = val;
      this.setActive(val);
    },
    animInfo() {
      this.isShowInfo = false;
      setTimeout(() => {
        this.isShowInfo = true;
        this.showActiveItem = this.activeItem;
      }, this.animTime);
    },
    setActive(index) {
      this.isAnimEnd = false;
      this.animInfo();

      this.list.filter((el, elIndex) => elIndex !== index).forEach((el) => {
        el.hideLeft = this.isRightClick;
        el.active = false;
      });

      this.list[index].showLeft = !this.isRightClick;
      setTimeout(() => {
        this.list[index].active = true;
        this.list[index].showLeft = false;
      }, 10);

      setTimeout(() => {
        this.list[index].showLeft = false;

        this.list.filter(el => !el.active).forEach((el) => {
          el.hideLeft = false;
        });
      }, this.animTime);

      setTimeout(() => {
        this.isAnimEnd = true;
      }, this.animTime * 2)

    },
    onResize() {
      this.isMobile = window.innerWidth < 680;
    },

    getTransform(item) {
      return `translateX(${(item.currentX - item.startX) * 0.8}px)`;
    },

    mouseDown(e) {
      this.startMove(e.clientX);
      addEventListener('mousemove',this.mouseMove);
      addEventListener('mouseup',this.mouseUp);
    },
    mouseMove(e) {
      this.move(e.clientX);
    },
    mouseUp() {
      this.endMove();
      removeEventListener('mousemove',this.mouseMove);
      removeEventListener('mouseup',this.mouseUp);
    },
    touchStart(e) {
      this.startMove(e.touches[0].clientX);
      addEventListener('touchmove',this.touchMove);
      addEventListener('touchend',this.touchEnd);
    },
    touchMove(e) {
      this.move(e.touches[0].clientX)
    },
    touchEnd() {
      this.endMove();
      removeEventListener('touchmove',this.touchMove);
      removeEventListener('touchend',this.touchEnd);
    },

    startMove(currX) {
      if (!this.isAnimEnd) return;

      this.resetInterval();
      this.showActiveItem.startX = currX;
      this.showActiveItem.currentX = currX;
      this.isWatchMove = true;
    },
    move(currX) {
      if (!this.isWatchMove) return
      this.showActiveItem.currentX = currX;
    },
    endMove() {
      if (!this.isWatchMove) return;

      this.isRightClick = Math.sign(this.showActiveItem.currentX - this.showActiveItem.startX) < 0;
      this.setCurrIndex(this.currentIndex - Math.sign(this.showActiveItem.currentX - this.showActiveItem.startX))
      this.isWatchMove = false;

      const currItem = this.showActiveItem;
      setTimeout(() => {
        currItem.startX = 0;
        currItem.currentX = 0;
      }, this.animTime);
    },


    setMyInterval() {
      this.intervalHandler = setInterval(() => {
        this.rightClick();
      }, 8000);
    },
    resetInterval() {
      clearInterval(this.intervalHandler);
      this.setMyInterval();
    }
  },
  mounted() {
    this.onResize();
    this.animTime = parseFloat(
        getComputedStyle(this.$refs.slider).getPropertyValue('--anim-time')
    ) * 1000;

    this.setMyInterval();

    this.fetch().then(() => {
      this.setActive(this.currentIndex)
    });

    window.addEventListener('resize', this.onResize, {passive: true})
  },
  unmounted() {
    clearInterval(this.intervalHandler);
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, {passive: true})
    }
  }
}
</script>

<style lang="scss" scoped>
.home-slider {
  --anim-time: .3s;

  position: relative;
  height: 395px;
  width: 100%;
  display: flex;

  cursor: grab;
  overflow: hidden;

  &:before {
    content: '';
    @include absoluteGrow();
    background-color: $color-new-grey;
    z-index: -2;
  }

  @include mobile {
    height: calc(100vh - #{$headerHeight});
  }

  &:active {
    cursor: grabbing;
  }

  &__bg-w {
    @include absoluteGrow();
    z-index: -1;

    > img {
      position: absolute;
      top: 0;
      right: -100vw;

      width: 100%;
      height: 100%;

      object-fit: cover;
      opacity: 0;
      user-select: none;
      cursor: pointer;

      transition: var(--anim-time), z-index 0s, transform 0s;
      transition-timing-function: cubic-bezier(1, 0.04, 0.66, 0.69);

      &.hideLeft {
        right: 100vw;
      }

      &.showLeft {
        right: 100vw;
        transition: 0s;
      }

      &.active {
        position: absolute;
        right: 0;
        z-index: 2;
        opacity: 1;

        transition: var(--anim-time), z-index 0s, transform 0s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

    }
  }

  &__body-w {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    padding: 0 64px;
    user-select: none;

    color: white;

    @include anim(calc(var(--anim-time) / 1.5));
    opacity: 0;

    &.active {
      opacity: 1;
    }


    @include mobile {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      padding: 0 8px;
    }
  }

  %half-part {
    height: 100%;
    width: 50%;

    @include mobile {
      height: auto;
      width: 100%;
    }
  }

  &__info {
    @extend %half-part;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 24px;

    text-align: right;


    @include mobile {
      display: contents;
      align-items: center;
      text-align: center;
    }
  }

  &__img-w {
    @extend %half-part;

    display: flex;
    justify-content: center;
    align-content: center;

    padding: 32px 0;

    @include mobile {
      order: 1;
    }

    > img {
      width: 100%;
      object-fit: contain;

      @include mobile {
        height: 160px;
      }
    }
  }

  %text-shadow {
    text-shadow: 1px 1px 4px #00000035;

    @include mobile {
      text-shadow: 1px 1px 6px #00000090;
    }
  }

  &__title {
    @extend %text-shadow;
    @include fontSliderTitle();

    @include mobile {
      order: 0;
    }
  }

  &__text {
    @extend %text-shadow;
    @include fontMid();

    @include mobile {
      order: 2;
    }
  }

  &__link {
    width: min-content;
    @include mobile {
      order: 3;
    }
  }

  &__nav {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    gap: 8px;

    padding: 16px 0;

    @include mobile {
      padding: 0;
      position: relative;
      order: 1;
    }
  }

  &__nav-item {
    @include addClickArea(3px);

    width: 10px;
    height: 10px;

    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: white;
    }
  }

  &__arrows {
    @include absoluteGrow();
    max-width: 1500px;
    margin: 0 auto;

    pointer-events: none;

    @include mobile {
      display: none;
    }
  }

  &__arrow-btn {
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

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.4);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }

    &.left {
      left: 4px;

      &::before {
        content: "❮";
      }
    }

    &.right {
      right: 4px;

      &::before {
        content: "❯";
      }
    }
  }
}

</style>
