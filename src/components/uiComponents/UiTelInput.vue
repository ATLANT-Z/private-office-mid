<template>
   <div class="ui-input">
      <input type="tel"
             v-model="innerValue"
             :placeholder="placeholder"
             :readonly="readonly"
             maxlength="16"
      >
      <img v-show="innerValue?.length" class="ui-input__clear-btn" @click.self="clearValue" src="@/assets/icons/cross.svg" alt="">
   </div>
</template>

<script>
	export default {
		props: {
			startValue: String,
			readonly: {
				type: Boolean,
				default: false
			},
			placeholder: String,
		},
		
		data() {
			return {
				innerValue: this.startValue,
			};
		},
		methods: {
			clearValue() {
				this.innerValue = null;
			}
		},
		watch: {
			innerValue: function (newVal) {
				this.$emit("update:modelValue", newVal);
			}
		}
	};
</script>
