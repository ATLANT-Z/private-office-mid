<template>
  <SvgSprite></SvgSprite>
  <section class="site-header__main-row">
    <div class="site-header__row-w">
      <div class="site-header__menu-block">
        <HeaderCatalog :catalog-data="headerData.catalog"/>
        <HeaderMenu :header-data="headerData"/>
      </div>
      <label class="search-block">
        <img class="search-block__img" src="@/assets/icons/search.svg" alt="">
        <input class="search-block__input" type="text"
               name="search"
               required
               v-model="searchInput"
               v-on:keyup.enter="search"
        >
        <div class="search-block__btn hide-mob" v-on:click="search">Найти</div>
      </label>
      <div class="lang-block hide-mob">
        <a class="lang-block__item"
           v-for="(item, index) in headerData.lang"
           :key="index"
           :href="item.url"
           :class="{active: item.active}"
        >
          {{ item.title }}
        </a>
      </div>
      <nav class="user-nav">
        <!--                    <a class="user-nav__item hide-mob" href="javascript:void(0);" @click="$showId('login-pop')">-->
        <!--                        <SvgIcon icon="userLight" stroke></SvgIcon>-->
        <!--                        <span class="user-nav__item-title">Войти в кабиент</span>-->
        <!--                    </a>-->
        <a class="user-nav__item hide-mob" :href="headerData.compare?.url">
          <SvgIcon icon="compareLight"></SvgIcon>
          <span class="user-nav__item-title">{{ headerData.compare?.title }}</span>
          <span class="user-nav__item-counter" v-if="headerData.compare?.count">
            {{ headerData.compare?.count }}
          </span>
        </a>
        <a class="user-nav__item" :href="headerData.cart?.url">
          <SvgIcon icon="cartLight"></SvgIcon>
          <span class="user-nav__item-title">{{ headerData.cart?.title }}</span>
          <span class="user-nav__item-counter" v-if="headerData.cart?.count">{{ headerData.cart?.count }}</span>
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
import HeaderCatalog from "./HeaderCatalog";
import HeaderMenu from "./HeaderMenu";
import SvgIcon from "@/tools/svg/SvgIcon";
import SvgSprite from "@/tools/svg/SvgSprite";
import {HeaderData} from "@/models/headerData";

import {mapActions, mapGetters, mapMutations} from "vuex";


export default {
  name: "HeaderVue",
  props: {
    data: String,
  },
  data() {
    return {
      inData: {},
      searchInput: ''
    }
  },
  components: {SvgSprite, SvgIcon, HeaderMenu, HeaderCatalog},
  computed: {
    ...mapGetters(['headerData']),
  },
  methods: {
    ...mapActions(['fetchHeaderData']),
    ...mapMutations({
      updateHeaderData: 'updateHeaderData',
      setCartCount: 'updateCartCount',
      plusCart: 'plusCart',
      minusCart: 'minusCart',
      setCompareCount: 'updateCompareCount',
      plusCompare: 'plusCompare',
      minusCompare: 'minusCompare',
    }),
    search() {
      window.location.href = this.headerData.searchUrl + '?search=' + encodeURI(this.searchInput);
      // console.log(encodeURI(this.searchInput))
    }
  },
  // beforeMount() {
  //   const data = new HeaderData(JSON.parse(this.data));
  //   this.updateHeaderData(data);
  // },
  async mounted() {
    this.fetchHeaderData();

    addEventListener("compare.count", (event) => {
      this.setCompareCount(event.detail.count);
    });

    addEventListener("compare.count++", (event) => {
      this.plusCompare(event);
    });
    addEventListener("compare.count--", (event) => {
      this.minusCompare(event);
    });


    addEventListener("cart.count", (event) => {
      this.setCartCount(event.detail.count);
    });

    addEventListener("cart.count++", (event) => {
      this.plusCart(event);
    });
    addEventListener("cart.count--", (event) => {
      this.minusCart(event);
    });
  },
}
</script>
