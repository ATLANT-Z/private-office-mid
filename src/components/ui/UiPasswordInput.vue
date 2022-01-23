<template>
   <div class="ui-input">
      <input v-model="innerValue"
             :type="type"
             :placeholder="placeholder"
             :readonly="readonly"
      >
     <SvgIcon class="ui-input__eye-btn show" icon="eyeShow"
              @click.self="showPass"></SvgIcon>
     <SvgIcon class="ui-input__eye-btn hide" icon="eyeHide"
              @click.self="hidePass"></SvgIcon>
   </div>
</template>

<script>
	import SvgIcon from "@/tools/svg/SvgIcon";
  export default {
    components: {SvgIcon},
    props: {
			startValue: String,
			readonly: {
				type: Boolean,
				default: false
			},
			placeholder: String,
		},
		
		data() {
			return {
				type: 'password',
				innerValue: this.startValue
			};
		},
		methods: {
			genPassword() {
				const newValue = Array(12)
					.fill("0123456789ABCDEFGHI$#@JKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$#@")
					.map(function (x) {
						return x[Math.floor(Math.random() * x.length)]
					})
					.join('');
				
				this.innerValue = newValue;
			},
			
			showPass() {
				this.type = 'text';
			},
			hidePass() {
				this.type = 'password';
			},
		},
		watch: {
			innerValue: function (newVal) {
				this.$emit("update:modelValue", newVal);
			}
		},
	};
</script>
