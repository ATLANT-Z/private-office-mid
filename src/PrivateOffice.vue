<template>
    <SvgSprite></SvgSprite>
    <HeaderVue></HeaderVue>
    <div class="main-wrapper">
        <MenuOffice></MenuOffice>
        <router-view></router-view>
        <LoginPop/>
    </div>
    <ToTopBtn/>
</template>

<script>
	import LoginPop from "./components/LoginPop";
	import MenuOffice from "./components/MenuOffice";
	import ToTopBtn from "./components/ui/ToTopBtn";
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
		}
	};
</script>

<style lang="scss">
    @import "assets/scss/style";
    
    .myBtn {
        padding: 12px;
        background-color: #cdcdcd;
        user-select: none;
        cursor: pointer;
        
        &:hover {
            background-color: #8a8a8a;
            color: white;
        }
    }
    
    .main-wrapper {
        width: 100%;
        max-width: 1550px;
    
        display: flex;
        justify-content: center;
        
        margin: auto;
        padding: 16px 16px 64px;
        
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
