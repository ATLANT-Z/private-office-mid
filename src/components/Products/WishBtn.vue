<template>
  <div class="wish-btn" @click="checked = !checked">
    <SvgIcon class="ui-ico wish-btn__ico" :class="{active:checked}" icon="heart_full" >
    </SvgIcon>
    <SvgIcon class="ui-ico wish-btn__ico" :class="{active:!checked}" icon="heart">
    </SvgIcon>
  </div>
</template>

<script>
import SvgIcon from "@/tools/svg/SvgIcon";

export default {
  components: {SvgIcon},
  props: {
    modelValue: Boolean,
    readonly: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      checked: this.modelValue
    };
  },
  methods: {},
  watch: {
    checked: function (newVal) {
      this.$emit("update:modelValue", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.wish-btn {
  position: relative;
  height: 18px;
  width: 20px;

  @include animAll($anim-small-time);

  cursor: pointer;

  &__ico {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: scale(0);

    color: $color-main;

    &.active {
      transform: scale(1);
    }
  }
}
</style>
