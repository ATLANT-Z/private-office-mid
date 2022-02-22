<template>
  <input class="ui-checkbox" type="checkbox" v-model="value" v-bind="$attrs">
</template>

<script>
export default {
  name: "UiCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue
    }
  },
  watch: {
    modelValue(val) {
      this.value = val;
    },
    value(val) {
      this.$emit("update:modelValue", val);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<!--<template>-->
<!--  <div class="ui-checkbox" :class="{checked: modelValue}" @click="click">-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "UiCheckbox",-->
<!--  props: {-->
<!--    modelValue: Boolean,-->
<!--    readonly: {-->
<!--      type: Boolean,-->
<!--      default: false-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    click() {-->
<!--      this.$emit("update:modelValue", !this.modelValue);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--</style>-->
