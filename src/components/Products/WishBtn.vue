<template>
    <div class="wish-btn" @click="checked = !checked">
        <img class="ui-ico wish-btn__ico" :class="{active:checked}" src="/icons/heart_full.svg" alt="">
        <img class="ui-ico wish-btn__ico" :class="{active:!checked}" src="/icons/heart.svg" alt="">
    </div>
</template>

<script>
	export default {
		props: {
			startValue: Boolean,
			readonly: {
				type: Boolean,
				default: false
			},
		},
		
		data() {
			return {
				checked: this.startValue
			};
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
    @import "public/scss/abstract";
    
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
