<template>
   <div class="ui-select" :class="{active:show}" tabindex="0" @focusout="lostFocus" @focusin="getFocus">
      <input class="ui-input" type="text" :value="innerValue" :placeholder="placeholder" readonly>
     <SvgIcon class="ui-select__btn" icon="downArrow"></SvgIcon>
      <ul class="ui-select__list" @click.prevent>
         <li v-for="val in values" :key="val" class="ui-select__item" @click="optionClick(val)">
            {{val}}
         </li>
      </ul>
   </div>
</template>

<script>
	import SvgIcon from "@/tools/svg/SvgIcon";
  export default {
    components: {SvgIcon},
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
