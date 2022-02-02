<template>
    <div class="to-top-btn" @click="toTop">
        <img src="@/assets/icons/toTop.svg" alt="">
    </div>
</template>

<script>
	export default {
		methods: {
			toTop() {
				document.body.scrollTop = 0; // For Safari
				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			},
		}
	};
</script>

<style lang="scss">
    .to-top-btn {
        position: fixed;
        right: 16px;
        bottom: 64px;
        
        height: 40px;
        width: 40px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 50%;
        background-color: $color-main;
        
        cursor: pointer;
        z-index: 10;
    }
</style>

