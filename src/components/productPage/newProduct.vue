<template>
  <vCarousel
    :carousel_data="sliderItems"
  ></vCarousel>

</template>

<script>
import vCarousel from './v-carouse.vue'

export default {
  name: 'App',
  components: {
    vCarousel
  },
  data() {
        return {
            sliderItems: [
              { id: 1, name: 'img1', img: '1.png'},
              { id: 2, name: 'img2', img: '6626_2.png'},
              { id: 2, name: 'img2', img: '6626_3.png'},
              { id: 2, name: 'img2', img: '6626_4.png'},
              { id: 2, name: 'img2', img: '6626_5.png'}
            ]
        }

    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
