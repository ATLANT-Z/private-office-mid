<template>
    <div class="rating">
      <div class="rating__body">
        <div
          v-bind:style="{ width: `${userRaring * 20}%` }"
          class="rating__active"
        ></div>
    <div class="rating__items">
      <input
        type="radio"
        name="ration"
        class="rating__item"
        :value="1"
      />
      <input
        type="radio"
        name="ration"
        class="rating__item"
        :value="2"
      />
      <input
        type="radio"
        name="ration"
        class="rating__item"
        :value="3"
      />
      <input
        type="radio"
        name="ration"
        class="rating__item"
        :value="4"
      />
      <input
        type="radio"
        name="ration"
        class="rating__item"
        :value="5"
      />
    </div>
  </div>
    </div>
</template>

<script>

export default {
  name: "starReviews",
  data() {
    return {
      userRaring: 4
    };
  },
};
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped></style>
