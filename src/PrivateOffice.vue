<template>
    <SvgSprite></SvgSprite>
    <HeaderVue></HeaderVue>
    <div class="main-wrapper">
        <div class="menu-cab-wrp">
            <MenuOffice></MenuOffice>
            <router-view></router-view>
        </div>
        <LoginPop/>
    </div>
    <ToTopBtn/>
</template>

<script>
	import LoginPop from "./components/LoginPop";
	import MenuOffice from "./components/MenuOffice";
	import ToTopBtn from "./components/uiComponents/ToTopBtn";
	import HeaderVue from "./components/Header/Header";
	import SvgSprite from "@/tools/svg/SvgSprite";
	
	export default {
		name: "PrivateOffice",
		components: {
			SvgSprite,
			HeaderVue,
			ToTopBtn,
			MenuOffice,
			LoginPop,
		},
		data() {
			return {}
		},
		methods: {
		
		}
	};
</script>

<style lang="scss">
    @import "assets/scss/style";
    
    .main-wrapper {
        width: 100%;
        padding: 0 24px 64px;
        
        @include mobile {
            padding: 0;
        }
    }
    
    .main-body {
        background: #ffffff;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        
        @include mobile {
            box-shadow: none;
        }
    }
</style>
