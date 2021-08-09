<template>
    <slot :isShow="isShow" :toggleShow="toggleShow"></slot>
</template>

<script>
	export default {
		props: {
			startValue: Boolean
		},
		data() {
			return {
				isShow: false
			}
		},
		methods: {
			toggleShow() {
				this.isShow = !this.isShow;
			},
		},
		mounted() {
			this.isShow = this.startValue
		}
	};
</script>

<style lang="scss">

</style>

