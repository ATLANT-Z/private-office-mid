<template>
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
	import HeaderVue from "./components/Header";
	
	export default {
		name: "App",
		components: {
			HeaderVue,
			ToTopBtn,
			MenuOffice,
			LoginPop,
		},
		data() {
			return {}
		},
		methods: {
			getIco(name) {
				return 'url(' + require(`@/assets/icons/${name}`) + ')';
			},
			showId(id, hasListener = true) {
				if (hasListener) {
					this.$store.commit('SET_SHOW_POPS', {key: id, value: true});
				} else {
					document.getElementById(id).classList.add('show');
				}
			},
			hideShowable(e) {
				e.target.closest('[data-showable]').classList.remove('show');
			}
		}
	}
	;
</script>

<style lang="scss">
    @import "public/scss/style";
    
    .main-wrapper {
        width: 100%;
        padding: 0 24px;
        
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
