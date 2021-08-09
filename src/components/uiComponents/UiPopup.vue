<template>
    <div class="popup-block" :class="{show: show}" :id="id" data-pop-block
         @click.self='closePop'>
        <slot :parent="this">
            Здесь должен был быть контент
        </slot>
    </div>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				required: true
			}
		},
		methods: {
			closePop(isClose = true) {
				if (isClose)
					this.show = false;
			},
		},
		computed: {
			show: {
				get() {
					return this.$store.getters.SHOW_POPS[this.id];
				},
				set(value) {
					this.$store.commit('SET_SHOW_POPS', {key: this.id, value: value});
				}
			}
		}
	};
</script>
