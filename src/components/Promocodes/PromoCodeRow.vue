<template>
    <div class="wrp-cont-rev">
        <div class="wrp-reviews">
            <div class="sale-price-promo-wrp">
                <div class="sale-price-promo">
                    <p>{{promocode.discount}}</p>
                </div>
                <div class="sale-text-wrp-promo">
                    <h3>{{promocode.title}}</h3>
                    <p>Промокод действует до {{promocode.endDate}}</p>
                </div>
            </div>
            <div class="promo-wrp-copy" @click="copyCode">
                <button>{{copyBtnText}}</button>
                <input class="promo-input-copy" type="text" :value="promocode.code" readonly ref="codeInput">
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
			promocode: Object
		},
		data() {
			return {
				copyBtnText: 'Скопировать'
			}
		},
		methods: {
			copyCode() {
				const input = this.$refs.codeInput;
				input.select();
				const btnText = this.copyBtnText;
				
				try {
					var successful = document.execCommand('copy');
					this.copyBtnText = successful ? 'Код скопирован' : 'Не копируется';
					
					setTimeout(() => {
						this.copyBtnText = btnText;
					}, 3000);
					
				} catch (err) {
					this.copyBtnText = btnText;
					alert('Код не удалось скопировать. Сообщите нам об ошибке, пожалуйста.');
				}
				
				this.clearSelection();
			},
			clearSelection() {
				if (window.getSelection) {
					if (window.getSelection().empty) {  // Chrome
						window.getSelection().empty();
					} else if (window.getSelection().removeAllRanges) {  // Firefox
						window.getSelection().removeAllRanges();
					}
				} else if (document.selection) {  // IE?
					document.selection.empty();
				}
			}
		}
	};
</script>
