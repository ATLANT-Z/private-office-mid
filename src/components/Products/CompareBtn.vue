<template>
    <div class="compare-btn" @click="compareClick">
        <SvgIcon class="compare-btn__ico" :class="{active:checked}" parent-size icon="compareGrey"/>
        <!--<img src="/assets/icons/compareGreen.svg" alt="">-->
    </div>
</template>

<script>
	import SvgIcon from "@/tools/svg/SvgIcon";
	
	export default {
		name: "CompareBtn",
		components: {SvgIcon},
		props: {
			modelValue: {
				type: Boolean,
				default: false
			},
			id: Number
		},
		data() {
			return {
				checked: this.modelValue
			};
		},
		methods: {
			compareClick() {
				if (!this.checked) {
					this.addCompare();
				} else {
					this.removeCompare();
				}
				this.checked = !this.checked;
			},
			addCompare() {
        window.axios.post("/comparison/add", {id: this.id},
					{
						headers: {
							'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
								.getAttribute('content')
						}
					})
					.then((res) => {
						console.log(res);
						const data = res.data;
						
						if (data.success === 1) {
							document.querySelector('.compare-counter-wrapper .counter').innerHTML = data.count;
							document.querySelector('.compare-counter-wrapper').classList.add('show');
						}
					});
			},
			removeCompare() {
				window.axios.post("/comparison/clear", {id: this.id},
					{
						headers: {
							'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
								.getAttribute('content')
						}
					})
					.then((res) => {
						console.log(res);
						const data = res.data;
						
						if (data.success === 1) {
							if (data.count === 0) {
								document.querySelector('.compare-counter-wrapper').classList.remove('show');
							}
							document.querySelector('.compare-counter-wrapper .counter').innerHTML = data.count;
						}
					});
			}
		},
		watch: {
			checked: function (newVal) {
				this.$emit("update:modelValue", newVal);
			}
		}
	}
</script>

<style lang="scss">
    .compare-btn {
        position: relative;
        height: 24px;
        width: 28px;
        
        @include animAll();
        
        cursor: pointer;
        
        &__ico {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: contain;
            
            color: $color-text-orders;
            
            opacity: 0.6;
            
            &:hover {
                opacity: 1;
            }
            
            &.active {
                color: $color-main;
                opacity: 1;
                transform: scale(1.15);
            }
        }
    }
</style>
