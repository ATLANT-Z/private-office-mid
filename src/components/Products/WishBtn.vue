<template>
    <div class="wish-btn" @click="checked = !checked">
        <img class="ui-ico wish-btn__ico" :class="{active:checked}" src="@/assets/icons/heart_full.svg" alt="">
        <img class="ui-ico wish-btn__ico" :class="{active:!checked}" src="@/assets/icons/heart.svg" alt="">
    </div>
</template>

<script>
	export default {
		props: {
			modelValue: Boolean,
			readonly: {
				type: Boolean,
				default: false
			},
		},
		emits:['update:modelValue'],
		data() {
			return {
				checked: this.modelValue
			};
		},
		mounted() {
			console.log('wish btn mounted');
		},
		methods: {
		
		},
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
