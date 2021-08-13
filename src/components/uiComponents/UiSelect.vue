<template>
   <div class="ui-select" :class="{active:show}" tabindex="0" @focusout="lostFocus" @focusin="getFocus">
      <input class="ui-input" type="text" :value="innerValue" :placeholder="placeholder" readonly>
      <img class="ui-select__btn" src="icons/downArrow.svg" alt="">
      <ul class="ui-select__list" @click.prevent>
         <li v-for="val in values" :key="val" class="ui-select__item" @click="optionClick(val)">
            {{val}}
         </li>
      </ul>
   </div>
</template>

<script>
	export default {
		props: {
			modelValue: String,
			placeholder: String,
			values: {
				type: Array,
				required: true,
			},
		},
		
		data() {
			return {
				show: false,
				innerValue: undefined
			};
		},
		methods: {
			getFocus() {
				this.show = true;
			},
			lostFocus() {
				this.show = false;
			},
			optionClick(val) {
				this.innerValue = val;
				this.$emit('update:modelValue', val);
				this.show = false;
			},
		},
	};
</script>
