<template>
    <div class="rating__body">
        <div
          v-bind:style="{ width: `${userRaring * 20}%` }"
          class="rating__active"
        ></div>
    <div class="rating__items">
      <input
        type="radio"
        name="ration"
        v-model="userRaring"
        class="rating__item"
        value="1"
      />
      <input
        type="radio"
        name="ration"
        v-model="userRaring"
        class="rating__item"
        value="2"
      />
      <input
        type="radio"
        name="ration"
        v-model="userRaring"
        class="rating__item"
        value="3"
      />
      <input
        type="radio"
        name="ration"
        v-model="userRaring"
        class="rating__item"
        value="4"
      />
      <input
        type="radio"
        name="ration"
        v-model="userRaring"
        class="rating__item"
        value="5"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "stars",
  props: {
    modelValue: Number,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  data() {
    return {
      userRaring: this.modelValue,
    };
  },
  methods: {
    changeRating(userRaring) {
      this.$emit("update:modelValue", userRaring); // previously was `this.$emit('input', title)`
    },
    changeTitle(title) {
      this.$emit("update:title", title); // previously was `this.$emit('input', title)`
    },
  },
  watch: {
    userRaring(newVal) {
      this.changeRating(newVal);
    },
  },
};
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped></style>
