<template>
    <div class="ui-checkbox" :class="{checked:checked}" @click="checked = !checked"></div>
</template>

<script>
	export default {
		name: "UiCheckbox",
		props: {
			modelValue: Boolean,
			readonly: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				checked: this.modelValue
			};
		},
		mounted() {
			console.log('UiCheckbox btn mounted');
		},
		methods: {},
		watch: {
			checked: function (newVal) {
				this.$emit("update:modelValue", newVal);
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
