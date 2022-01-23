<template>
  <reviewsText></reviewsText>
<UiPopup id="rev-pop-up">
  <template v-slot="{parent}">
    <div class="popup pop-up-reviews-card__wrp-cont-pop">
      <div class="pop-up-reviews-card__wrp-title">
        <h4 class="pop-up-reviews-card__title">Написать отзыв</h4>
        <button @click="parent.closePop">
          <img src="/icon/card-prod-pop-up-icon-cros.svg" alt="Закрыть" />
        </button>
      </div>
      <!-- <stars class="pop-up-reviews-card__star-wrp"></stars> -->
      <div class="rating-pop__body-wrp">
        <div class="rating-pop__body">
          <div
              v-bind:style="{ width: `${userRaringPop * 20}%` }"
              class="rating-pop__active"
          ></div>
          <div class="rating-pop__items">
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="1"
            />

            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="2"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="3"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                value="4"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="5"
            />
          </div>
        </div>
        <div class="rating-pop__body-mob">
          <div
              v-bind:style="{ width: `${userRaringPop * 20}%` }"
              class="rating-pop__active-mob"
          ></div>
          <div class="rating-pop__items">
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="1"
            />

            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="2"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="3"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                value="4"
            />
            <input
                type="radio"
                name="ration"
                v-model="userRaringPop"
                class="rating-pop__item"
                @mouseover="hoverEvent"
                value="5"
            />
          </div>
        </div>
      </div>
      <!-- <revPopUp id="rev-pop-up"> -->
      <div>
        <form class="pop-up-reviews-card__wrp-bene" action="#">
          <label class="pop-up-reviews-card__lab" for="dignity"
          >Достоинство</label
          >
          <input class="pop-up-reviews-card__inp-style" type="text" />
          <label class="pop-up-reviews-card__lab" for="limitations"
          >Недостатки</label
          >
          <input class="pop-up-reviews-card__inp-style" type="text" />
          <label class="pop-up-reviews-card__lab" for="comments"
          >Комментарий</label
          >
          <input class="pop-up-reviews-card__inp-comments" type="text" />
        </form>
        <form class="pop-up-reviews-card__video-wrp" action="#">
          <div class="pop-up-reviews-card__video">
            <label class="pop-up-reviews-card__lab" for="video"
            >Ссылка на видео с Youtube</label
            >
            <input class="pop-up-reviews-card__inp-style" type="url" />
          </div>
          <input
              class="pop-up-reviews-card__video-btn"
              type="button"
              value="Добавить видео"
          />
        </form>
        <div class="pop-up-reviews-card__photo">
          <div class="pop-up-reviews-card__photo-text-wrp">
            <p class="pop-up-reviews-card__photo-text">
              Перетащите файлы сюда или нажмите на кнопку. Добавляйте до 10
              изображений в форматах .jpg, .gif, .png, размером файла до 5 МБ
            </p>
            <button class="pop-up-reviews-card__photo-btn pop-up-reviews-card__photo-btn-des">
              Выбрать файлы
            </button>
          </div>
          <div>
            <div class="pop-up-reviews-card__img-wrp">
              <img
                  class="pop-up-reviews-card__img-del"
                  src="/icon/icon-del-pop-up-card-prod.svg"
                  alt="удалить"
              />
              <img
                  src=""
                  onerror='this.style.display = "none"'
                  alt="изображение товара"
              />
            </div>
          </div>
        </div>
        <button class="pop-up-reviews-card__photo-btn pop-up-reviews-card__photo-btn-mob">
          Выбрать файлы
        </button>
        <form action="#">
          <label class="pop-up-reviews-card__lab" for="dignity"
          >Ваше имя и фамилия</label
          >
          <input class="pop-up-reviews-card__inp-style" type="text" />
          <label class="pop-up-reviews-card__lab" for="limitations"
          >Электронная почта</label
          >
          <input class="pop-up-reviews-card__inp-style" type="email" />
        </form>
        <form action="#">
          <input
              class="pop-up-reviews-card__cust-chec"
              type="checkbox"
              id="agreement"
          />
          <label for="agreement"
          >Уведомлять об ответах по электронной почте</label
          >
        </form>
        <div class="pop-up-reviews-card__btn-wrp">
          <button class="pop-up-reviews-card__btn-cancel">Отменить</button>
          <button class="pop-up-reviews-card__btn">Оставить отзыв</button>
        </div>
        <div class="pop-up-reviews-card__text-wrp">
          <p>
            Чтобы ваш отзыв либо комментарий прошел модерацию и был опубликован,
            ознакомьтесь, пожалуйста, c<a
              class="pop-up-reviews-card__text-link"
              href="#"
          >
            нашими правилами.</a
          >
          </p>
        </div>
      </div>
    </div>
  </template>
</UiPopup>
</template>

<script>
import reviewsText from "./reviews-text.vue";
import UiPopup from "@component/ui/UiPopup";
// import { mapActions, mapGetters, mapMutations } from "vuex";
// import revPopUp from './revPopUp.vue';
// import stars from './stars.vue';

let a = { prop1: 1 };
let b = { ...a };
b.prop1;

export default {
  name: "rating-popReview",
  components: {
    UiPopup,
    reviewsText,
  },
  props: {},
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
      userRaringPop: "",
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped></style>
