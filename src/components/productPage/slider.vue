<template>
  <vCarousel
    :carousel_data="sliderItems"
  ></vCarousel>
</template>

<script>
import vCarousel from './v-carouse.vue';

export default {
  name: 'Slider',
  components: {
    vCarousel
  },
  data() {
        return {
            sliderItems: [
              { id: 1, name: 'img1', img: '1.png'},
              { id: 2, name: 'img2', img: '6626_2.png'},
              { id: 3, name: 'img2', img: '6626_3.png'},
              { id: 4, name: 'img2', img: '6626_4.png'},
              { id: 5, name: 'img2', img: '6626_5.png'},
              { id: 6, name: 'img2', img: '6626_4.png'},
              { id: 7, name: 'img2', img: '6626_3.png'}
            ]
        }

    }
}
</script>

<style lang="scss">

</style>
