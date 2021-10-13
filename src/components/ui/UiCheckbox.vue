<template>
    <div class="ui-checkbox" :class="{checked: modelValue}" @click="click"></div>
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
		methods: {
			click() {
				this.$emit("update:modelValue", !this.modelValue);
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
