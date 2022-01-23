<template>
  <div class="slider-w">
    <article class="product-slider" :id="id" ref="slider">
      <ProductCard v-for="product in visibleList"
                   :key="product.id"
                   :product="product"
                   class="product-slider__card">
        <template v-slot:tool-btns="{product}">
          <slot name="tool-btns" :product="product">
            <CompareBtn v-model="product.compared" :id="product.id"/>
          </slot>
        </template>
      </ProductCard>
      <div class="ui-loader" v-if="!visibleList.length"></div>
    </article>
    <section class="product-slider__nav">
      <div class="product-slider__nav-left product-slider__nav-btn" :class="{active: canSlideLeft}"
           @click="leftClick"></div>
      <div class="product-slider__nav-right product-slider__nav-btn" :class="{active: canSlideRight}"
           @click="rightClick"></div>
    </section>
  </div>
</template>

<script>
import ProductCard from "@component/Products/ProductCard";
import CompareBtn from "@component/Products/CompareBtn";

export default {
  components: {CompareBtn, ProductCard},
  props: {
    productList: Array,
  },
  data() {
    return {
      id: Math.random().toString(36).substr(2, 9),
      timeoutID: undefined,
      slideCount: 0,
      isProgramSlide: false,
      isRendered: false,
    }
  },
  computed: {
    productListPrepared() {
      return this.productList.map(el => el).sort((a, b) => {
        if (a.hasProduct && b.hasProduct)
          return 0;
        else if (a.hasProduct)
          return -1;
        else if (b.hasProduct)
          return 1;
      });
    },
    visibleList() {
      return this.productListPrepared;
    },
    sliderWidth() {
      return this.$refs.slider.clientWidth
    },
    visibleCount() {
      if (this.isRendered)
        return Math.floor(this.sliderWidth / this.cardWidth);
      else return 1;
    },

    cardWidth() {
      if (this.isRendered)
        return parseFloat(getComputedStyle(this.$refs.slider).getPropertyValue('--card-width'));
      else return 0;
    },
    sliderGap() {
      return parseFloat(getComputedStyle(this.$refs.slider).getPropertyValue('--slider-gap'));
    },
    scrollStep() {
      return this.cardWidth + this.sliderGap;
    },

    canSlideLeft() {
      return this.slideCount > 0
    },
    canSlideRight() {
      return this.visibleList.length - this.slideCount > this.visibleCount
    }
  },
  methods: {
    leftClick() {
      if (this.canSlideLeft && !this.isProgramSlide) {
        this.slideCount--;
      }
    },
    rightClick() {
      if (this.canSlideRight && !this.isProgramSlide) {
        this.slideCount++;
      }
    },
    onScrollEnd() {
      console.log('here')
      console.log(this.$refs.slider.scrollLeft)
      console.log(this.scrollStep)

      this.slideCount = Math.round(this.$refs.slider.scrollLeft / this.scrollStep);
    },
    onScroll() {
      if (this.timeoutID) clearTimeout(this.timeoutID);

      if (!this.isProgramSlide)
        this.timeoutID = setTimeout(() => {
          this.onScrollEnd();
        }, 300);
    }
  },
  watch: {
    slideCount(val) {
      this.isProgramSlide = true;

      const currScroll = val * this.scrollStep;
      this.$refs.slider.scrollLeft = currScroll;

      setTimeout(() => this.isProgramSlide = false, 500);
    }
  },
  mounted() {
    console.log('Slider mounted');
    this.$refs.slider.addEventListener("scroll", this.onScroll);

    let intervalID = setInterval(() => {
      if (this.$refs?.slider?.clientWidth) {
        this.isRendered = true
        clearInterval(intervalID);
      }
    }, 100);
  }
};
</script>

<style lang="scss">

.slider-w {
  position: relative;
  //padding: 0 8px;
}

.product-slider {
  --card-width: 280px;
  --slider-gap: 16px;

  display: flex;
  width: 100%;
  gap: var(--slider-gap);
  padding: 16px 12px;
  overflow: hidden;
  overflow-x: auto;
  min-height: 100px;
  user-select: none;

  @include scrollbarStyle(12px);

  @include bigMobile {
    --card-width: 170px;
    --slider-gap: 8px;
  }

  &__card {
    width: auto;
    min-width: var(--card-width);
    max-width: var(--card-width);
    @include anim();
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
      color: $mainSiteColor;
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
}
</style>
