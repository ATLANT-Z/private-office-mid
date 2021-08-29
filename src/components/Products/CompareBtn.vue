<template>
    <div class="compare-btn" @click="checked = !checked">
        <img class="ui-ico compare-btn__ico" :class="{active:checked}" src="@/assets/icons/compareGreen.svg" alt="">
        <img class="ui-ico compare-btn__ico" :class="{active:!checked}" src="@/assets/icons/compareGrey.svg" alt="">
    </div>
</template>

<script>
	export default {
		name: "CompareBtn",
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
			console.log('compare btn mounted');
        },
		methods: {
		
		},
		watch: {
			checked: function (newVal) {
				this.$emit("update:modelValue", newVal);
			}
		}
	}
</script>

<style lang="scss" scoped>
    .compare-btn {
        position: relative;
        height: 24px;
        width: 28px;
        
        @include animAll($anim-small-time);
        
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
