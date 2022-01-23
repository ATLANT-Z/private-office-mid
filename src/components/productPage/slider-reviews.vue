<template>
  <div class="reviews-slider-card-prod__wrp-slid">
    <div class="reviews-slider-card-prod__btn-wrp">
      <button :disabled="isDisabled" @click="btnLift" class="reviews-slider-card-prod__btn">
        <img :style="{'display': dispAct}" src="/icon/slider-rev-card-lif-icon.svg" alt="в лево" />
        <img :style="{'display': dispNone}" src="/icon/slider-rev-card-lif-icon-des.svg" alt="в лево" />
      </button>
    </div>
    <div class="slider-rev__wrp">
      <div
          class="slider-rev__img-wrp"
          :style="{ 'margin-left': '-' + marDef * leftBtn + 'px' }"
        >
        <img
          class="slider-rev__img"
          v-for="item in carousel_data"
          :key="item.id"
          :src="'/img/' + item.img"
          alt="карусель"
        />
      </div>
    </div>
    <div class="reviews-slider-card-prod__btn-wrp">
      <button :disabled="isDisabledR"  @click="rightsBtn" class="reviews-slider-card-prod__btn">
        <img :style="{'display': dispNoneR}" src="/icon/slider-rev-card-re-icon.svg" alt="в право" />
        <img :style="{'display': dispActR}" src="/icon/slider-rev-card-rai-icon-des.svg" alt="в лево" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "sliderRev",
    data(){
      return {
        leftBtn: 0,
        isDisabled: false,
        dispAct: "flex",
        dispNone: "none",
        dispActR: "flex",
        dispNoneR: "none",
        isDisabledR: true,
        width: 0,
        marDef: 185,
      }
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => [],
        }
    },
    methods: {
      des() {
        this.isDisabledR = false;
        this.dispNoneR = 'flex';
        this.dispActR = 'none';
      },
      btnLift() {
        if(this.leftBtn == this.carousel_data.length - 5) {
          this.leftBtn++;
          this.isDisabled = true;
          this.dispAct = "none",
          this.dispNone = "flex"
        } else {
          this.width = window.innerWidth;
          console.log(this.width);
          if(this.width > 1111) {
            this.leftBtn++;
            this.des();
          }
          if(this.width > 600 && this.width <= 1111) {
              this.marDef = 128;
              this.leftBtn++;
              if (this.leftBtn > 0) {
              this.des();
            } else {
              this.leftBtn++;
            }
          } if (this.width > 0 && this.width <= 600) {
              this.marDef = 69;
              this.leftBtn++;
              if (this.leftBtn > 0) {
              this.des();
            } 
          }
        }
      },
      rightsBtn() {
        this.leftBtn--;
        if (this.leftBtn <= this.carousel_data.length - 4) {
          this.isDisabled = false;
          this.dispAct = "flex",
          this.dispNone = "none"
        } if (this.leftBtn == 0) {
            this.isDisabledR = true;
            this.dispNoneR = 'none';
            this.dispActR = 'flex';
        }
      },
      svape() {
        // alert('hello')
        console.log('ce');
      }
    }
};
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped>

</style>
