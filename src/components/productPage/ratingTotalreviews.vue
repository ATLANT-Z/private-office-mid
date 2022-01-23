<template>
  <div class="reviews-page-top-card">
    <div class="overall-rating-card-prod">
      <p class="overall-rating-card-prod__title">Общий рейтинг</p>
      <div class="overall-rating-card-prod__wrp">
        <div>
          <p class="overall-rating-card-prod__num">5,0</p>
          <starReviews class="overall-rating-card-prod__star"></starReviews>
          <p class="overall-rating-card-prod__text">
            {{ numberStarsFive }} отзывов
          </p>
        </div>
        <div class="rating-scale">
          <div class="rating-scale__wrp">
            <p class="rating-scale__num">5</p>
            <img
              class="rating-scale__star-icon"
              src="/icon/star-card-product.svg"
              alt="stars"
            />
            <div class="rating-scale__pos-wrp">
              <div
                v-bind:style="{ width: `${averageFive * 10}%` }"
                class="rating-scale__act"
              ></div>
              <div class="rating-scale__des"></div>
            </div>
            <p class="rating-scale__num-style">{{ numberStarsFive }}</p>
          </div>
          <div class="rating-scale__wrp">
            <p class="rating-scale__num">4</p>
            <img
              class="rating-scale__star-icon"
              src="/icon/star-card-product.svg"
              alt="stars"
            />
            <div class="rating-scale__pos-wrp">
              <div
                v-bind:style="{ width: `${averageFour * 10}%` }"
                class="rating-scale__act"
              ></div>
              <div class="rating-scale__des"></div>
            </div>
            <p class="rating-scale__num-style">{{ numberStarsFour }}</p>
          </div>
          <div class="rating-scale__wrp">
            <p class="rating-scale__num">3</p>
            <img
              class="rating-scale__star-icon"
              src="/icon/star-card-product.svg"
              alt="stars"
            />
            <div class="rating-scale__pos-wrp">
              <div
                v-bind:style="{ width: `${averageThree * 10}%` }"
                class="rating-scale__act"
              ></div>
              <div class="rating-scale__des"></div>
            </div>
            <p class="rating-scale__num-style">{{ numberStarsThree }}</p>
          </div>
          <div class="rating-scale__wrp">
            <p class="rating-scale__num">2</p>
            <img
              class="rating-scale__star-icon"
              src="/icon/star-card-product.svg"
              alt="stars"
            />
            <div class="rating-scale__pos-wrp">
              <div
                v-bind:style="{ width: `${averageTwo * 10}%` }"
                class="rating-scale__act"
              ></div>
              <div class="rating-scale__des"></div>
            </div>
            <p class="rating-scale__num-style">{{ numberStarsTwo }}</p>
          </div>
          <div class="rating-scale__wrp">
            <p class="rating-scale__num">1</p>
            <img
              class="rating-scale__star-icon"
              src="/icon/star-card-product.svg"
              alt="stars"
            />
            <div class="rating-scale__pos-wrp">
              <div
                v-bind:style="{ width: `${numberStarsOne * 10}%` }"
                class="rating-scale__act"
              ></div>
              <div class="rating-scale__des"></div>
            </div>
            <p class="rating-scale__num-style">{{ averageOne }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews-slider-card-prod">
      <h4 class="reviews-slider-card-prod__title">Фото и видео покупателей</h4>
        <sliderRev v-bind:left-btn="leftBtn" class="reviews-slider-card-prod__slid-pos" :carousel_data="sliderItems"></sliderRev>
    </div>
  </div>
</template>

<script>
import starReviews from "./starReviews.vue";
import sliderRev from "./slider-reviews.vue";

export default {
  components: {
    starReviews,
    sliderRev,
  },
  data() {
    return {
      numberStarsFive: 15,
      numberStarsFour: 1,
      numberStarsThree: 3,
      numberStarsTwo: 5,
      numberStarsOne: 1,
      averageFive: 2,
      averageFour: 5,
      averageThree: 4,
      averageTwo: 2,
      averageOne: 0,
      numberOfReviews: 2,
      sliderItems: [
        { id: 1, name: "img1", img: "1.png" },
        { id: 2, name: "img2", img: "6626_2.png" },
        { id: 3, name: "img2", img: "6626_3.png" },
        { id: 4, name: "img2", img: "6626_4.png" },
        { id: 5, name: "img2", img: "6626_5.png" },
        { id: 6, name: "img2", img: "6626_4.png" },
      ],
      leftBtn: 0,
    };
  }
};
</script>
