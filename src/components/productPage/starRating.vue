<template>
    <div class="rating">
      <stars v-model="userRaring" v-model:title='userRaring'></stars>
      <div class="rating__value" v-show="userRaring">{{ reviewsText }} {{ userRaring }} </div>
    </div>
</template>

<script>
import stars from "./stars.vue";

export default {
  name: "starRating",
  components: {
    stars,
  },
  data() {
    return {
      userRaring: 0,
      reviewsText: "Ваша оценка:",
    };
  },
};
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped></style>
