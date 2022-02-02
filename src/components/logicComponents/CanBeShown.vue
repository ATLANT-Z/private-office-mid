<template>
    <slot :isShow="isShow" :toggleShow="toggleShow"></slot>
</template>

<script>
	export default {
		props: {
			startValue: {
				type: Boolean,
				default: false
			},
			id: {
				type: String,
				default: null
			},
			excludeId: {
				type: Array,
				default: null
			}
		},
		data() {
			return {
				isShowInner: false
			}
		},
		methods: {
			toggleShow() {
				this.isShow = !this.isShow;
			},
			close(isClose = true) {
				//закрыть если колбэк какой-то требует закрытия. А может ошибка и тогда не закрывать. Я не придумал пока
				if (isClose)
					this.isShow = false;
			},
		},
		mounted() {
			this.isShow = this.startValue
		},
		computed: {
			isShow: {
				get() {
					if (this.id) {
						return this.$store.getters.SHOW_CAN_BE_SHOWN[this.id];
					} else {
						return this.isShowInner;
					}
				},
				set(value) {
					if (this.id) {
						this.$store.commit('SET_CAN_BE_SHOWN', {key: this.id, value: value});
						this.excludeId?.forEach((id) => {
							this.$store.commit('SET_CAN_BE_SHOWN', {key: id, value: false});
						});
					} else {
						this.isShowInner = value;
					}
					
				}
			}
		}
	};
</script>

<style lang="scss">

</style>

