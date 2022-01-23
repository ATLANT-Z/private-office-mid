<template>
  <article class="slider-component">
    <ProductSlider :product-list="viewedProducts">
    </ProductSlider>
  </article>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ProductSlider from "@component/Products/ProductSlider";

export default {
  name: "Slider",
  components: {ProductSlider},
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters(['viewedProducts']),
  },
  methods: {
    ...mapActions(['fetchViewedProducts']),
  },
  async mounted() {
    this.fetchViewedProducts();

    console.log(this);
    console.log(this.axios);
  }
}
</script>

<style lang="scss" scoped>

@import "~_style/menuCab";

.slider-component {
  //width: Calc(100% - 300px);
  width: 100%;

  @include bigMobile {
    width: 100%;
  }
}
</style>
