<template>
    <div class="ui-input number">
        <input type="text"
               v-bind="$attrs"
               v-model.lazy.number="innerValue"
        >
        <img v-show="innerValue?.length" class="ui-input__clear-btn" @click.self="clearValue" src="@/assets/icons/cross.svg" alt="">
    </div>
</template>

<script>
	export default {
		props: {
			startValue: String,
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
